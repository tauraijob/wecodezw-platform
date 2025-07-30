import { prisma } from '~/server/utils/prisma'
import bcrypt from 'bcryptjs'

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event)
        const { firstName, lastName, username, email, password } = body

        // Validate input
        if (!firstName || !lastName || !username || !email || !password) {
            throw createError({
                statusCode: 400,
                statusMessage: 'All fields are required'
            })
        }

        // Check if admin already exists
        const existingAdmin = await prisma.user.findFirst({
            where: {
                OR: [
                    { email: email.toLowerCase() },
                    { username: username.toLowerCase() }
                ]
            }
        })

        if (existingAdmin) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Admin user already exists'
            })
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 12)

        // Create admin user
        const admin = await prisma.user.create({
            data: {
                firstName,
                lastName,
                username: username.toLowerCase(),
                email: email.toLowerCase(),
                password: hashedPassword,
                role: 'ADMIN',
                isActive: true
            }
        })

        // Create initial progress record
        await prisma.progress.create({
            data: {
                userId: admin.id,
                totalXP: 0,
                completedChallenges: 0,
                completionPercentage: 0
            }
        })

        // Return success (without password)
        const { password: _, ...adminWithoutPassword } = admin

        return {
            success: true,
            message: 'Admin user created successfully',
            admin: adminWithoutPassword
        }

    } catch (error) {
        console.error('Error creating admin:', error)

        if (error.statusCode) {
            throw error
        }

        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to create admin user'
        })
    }
}) 