import { prisma } from '~/server/utils/prisma'
import { verifyToken } from '~/server/utils/auth'
import { randomBytes } from 'crypto'

export default defineEventHandler(async (event) => {
    try {
        // Verify user token
        const token = getHeader(event, 'authorization')?.replace('Bearer ', '')
        if (!token) {
            throw createError({
                statusCode: 401,
                statusMessage: 'Unauthorized'
            })
        }

        const user = await verifyToken(token)
        if (!user) {
            throw createError({
                statusCode: 401,
                statusMessage: 'Invalid token'
            })
        }

        const body = await readBody(event)
        const {
            name,
            description,
            category,
            maxMembers = 50,
            isPublic = true,
            schoolId
        } = body

        // Validate required fields
        if (!name || !description || !category || !schoolId) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Missing required fields'
            })
        }

        // Check if user is the school admin
        const school = await prisma.school.findUnique({
            where: { id: schoolId },
            include: { admin: true }
        })

        if (!school) {
            throw createError({
                statusCode: 404,
                statusMessage: 'School not found'
            })
        }

        if (school.adminId !== user.id) {
            throw createError({
                statusCode: 403,
                statusMessage: 'Only school admin can create clubs'
            })
        }

        if (!school.isApproved) {
            throw createError({
                statusCode: 403,
                statusMessage: 'School must be approved before creating clubs'
            })
        }

        // Check if club name already exists in this school
        const existingClub = await prisma.club.findFirst({
            where: {
                name,
                schoolId
            }
        })

        if (existingClub) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Club with this name already exists in your school'
            })
        }

        // Generate unique invite code
        const inviteCode = randomBytes(4).toString('hex').toUpperCase()

        // Create club
        const club = await prisma.club.create({
            data: {
                name,
                slug: name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
                description,
                category,
                maxMembers,
                isPublic,
                inviteCode,
                schoolId,
                creatorId: user.id
            },
            include: {
                school: {
                    select: {
                        id: true,
                        name: true,
                        slug: true
                    }
                },
                creator: {
                    select: {
                        id: true,
                        firstName: true,
                        lastName: true,
                        username: true
                    }
                }
            }
        })

        // Add creator as club admin
        await prisma.clubMember.create({
            data: {
                clubId: club.id,
                userId: user.id,
                role: 'ADMIN'
            }
        })

        return {
            success: true,
            message: 'Club created successfully',
            club: {
                id: club.id,
                name: club.name,
                slug: club.slug,
                description: club.description,
                category: club.category,
                inviteCode: club.inviteCode,
                school: club.school,
                creator: club.creator
            }
        }

    } catch (error) {
        console.error('Error creating club:', error)
        throw createError({
            statusCode: error.statusCode || 500,
            statusMessage: error.statusMessage || 'Failed to create club'
        })
    }
}) 