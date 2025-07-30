import { prisma } from '~/server/utils/prisma'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event)
        const { email, password } = body

        // Validate input
        if (!email || !password) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Email and password are required'
            })
        }

        // Find admin user
        const admin = await prisma.user.findFirst({
            where: {
                email: email.toLowerCase(),
                role: 'ADMIN'
            }
        })

        if (!admin) {
            throw createError({
                statusCode: 401,
                statusMessage: 'Invalid credentials'
            })
        }

        // Verify password
        const isValidPassword = await bcrypt.compare(password, admin.password)
        if (!isValidPassword) {
            throw createError({
                statusCode: 401,
                statusMessage: 'Invalid credentials'
            })
        }

        // Generate JWT token
        const token = jwt.sign(
            {
                userId: admin.id,
                email: admin.email,
                role: admin.role
            },
            process.env.JWT_SECRET!,
            { expiresIn: '24h' }
        )

        // Update last login
        await prisma.user.update({
            where: { id: admin.id },
            data: { lastLoginAt: new Date() }
        })

        // Return success response (without password)
        const { password: _, ...adminWithoutPassword } = admin

        return {
            success: true,
            message: 'Admin login successful',
            token,
            admin: adminWithoutPassword
        }

    } catch (error) {
        console.error('Admin login error:', error)

        if (error.statusCode) {
            throw error
        }

        throw createError({
            statusCode: 500,
            statusMessage: 'Internal server error'
        })
    }
}) 