import { prisma } from '~/server/utils/prisma'
import { verifyToken } from '~/server/utils/auth'

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
        const { inviteCode } = body

        if (!inviteCode) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Invite code is required'
            })
        }

        // Find club by invite code
        const club = await prisma.club.findUnique({
            where: { inviteCode },
            include: {
                school: true,
                members: {
                    include: {
                        user: {
                            select: {
                                id: true,
                                firstName: true,
                                lastName: true,
                                username: true
                            }
                        }
                    }
                }
            }
        })

        if (!club) {
            throw createError({
                statusCode: 404,
                statusMessage: 'Invalid invite code'
            })
        }

        if (!club.isActive) {
            throw createError({
                statusCode: 400,
                statusMessage: 'This club is currently inactive'
            })
        }

        if (!club.school.isApproved) {
            throw createError({
                statusCode: 400,
                statusMessage: 'This club belongs to an unapproved school'
            })
        }

        // Check if user is already a member
        const existingMember = club.members.find(member => member.userId === user.id)
        if (existingMember) {
            throw createError({
                statusCode: 400,
                statusMessage: 'You are already a member of this club'
            })
        }

        // Check if club is full
        if (club.members.length >= club.maxMembers) {
            throw createError({
                statusCode: 400,
                statusMessage: 'This club is full'
            })
        }

        // Add user to club
        const clubMember = await prisma.clubMember.create({
            data: {
                clubId: club.id,
                userId: user.id,
                role: 'MEMBER'
            },
            include: {
                club: {
                    select: {
                        id: true,
                        name: true,
                        slug: true,
                        description: true,
                        category: true,
                        school: {
                            select: {
                                id: true,
                                name: true
                            }
                        }
                    }
                },
                user: {
                    select: {
                        id: true,
                        firstName: true,
                        lastName: true,
                        username: true
                    }
                }
            }
        })

        // TODO: Send notification to club admin about new member
        console.log(`User ${user.firstName} ${user.lastName} joined club ${club.name}`)

        return {
            success: true,
            message: 'Successfully joined the club',
            clubMember
        }

    } catch (error) {
        console.error('Error joining club:', error)
        throw createError({
            statusCode: error.statusCode || 500,
            statusMessage: error.statusMessage || 'Failed to join club'
        })
    }
}) 