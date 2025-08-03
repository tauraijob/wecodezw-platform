import { prisma } from '~/server/utils/prisma'
import bcrypt from 'bcryptjs'

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event)
        const {
            schoolName,
            email,
            phone,
            address,
            city,
            country = 'Zimbabwe',
            website,
            description,
            adminFirstName,
            adminLastName,
            adminEmail,
            adminPassword,
            adminUsername
        } = body

        // Validate required fields
        if (!schoolName || !email || !address || !city || !adminFirstName || !adminLastName || !adminEmail || !adminPassword || !adminUsername) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Missing required fields'
            })
        }

        // Check if school email already exists
        const existingSchool = await prisma.school.findUnique({
            where: { email }
        })

        if (existingSchool) {
            throw createError({
                statusCode: 400,
                statusMessage: 'School with this email already exists'
            })
        }

        // Check if admin email already exists
        const existingAdmin = await prisma.user.findUnique({
            where: { email: adminEmail }
        })

        if (existingAdmin) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Admin with this email already exists'
            })
        }

        // Check if admin username already exists
        const existingUsername = await prisma.user.findUnique({
            where: { username: adminUsername }
        })

        if (existingUsername) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Username already taken'
            })
        }

        // Hash admin password
        const hashedPassword = await bcrypt.hash(adminPassword, 12)

        // Create admin user
        const admin = await prisma.user.create({
            data: {
                firstName: adminFirstName,
                lastName: adminLastName,
                email: adminEmail,
                username: adminUsername,
                password: hashedPassword,
                role: 'INSTRUCTOR', // School admins are instructors
                isEmailVerified: true, // Auto-verify for school admins
                isActive: true
            }
        })

        // Create school
        const school = await prisma.school.create({
            data: {
                name: schoolName,
                slug: schoolName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
                email,
                phone,
                address,
                city,
                country,
                website,
                description,
                adminId: admin.id,
                status: 'PENDING'
            },
            include: {
                admin: {
                    select: {
                        id: true,
                        firstName: true,
                        lastName: true,
                        email: true,
                        username: true
                    }
                }
            }
        })

        // TODO: Send email notification to platform admin about new school registration
        console.log(`New school registration: ${school.name} by ${admin.firstName} ${admin.lastName}`)

        return {
            success: true,
            message: 'School registration submitted successfully. Please wait for admin approval.',
            school: {
                id: school.id,
                name: school.name,
                email: school.email,
                status: school.status,
                admin: school.admin
            }
        }

    } catch (error) {
        console.error('Error registering school:', error)
        throw createError({
            statusCode: error.statusCode || 500,
            statusMessage: error.statusMessage || 'Failed to register school'
        })
    }
}) 