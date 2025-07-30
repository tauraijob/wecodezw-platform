import { prisma } from '~/server/utils/prisma'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event)
        const { email, password } = body

        // Validate required fields
        if (!email || !password) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Email and password are required'
            })
        }

        // Find user by email
        const user = await prisma.user.findUnique({
            where: { email },
            include: {
                progress: true
            }
        })

        if (!user) {
            throw createError({
                statusCode: 401,
                statusMessage: 'Invalid email or password'
            })
        }

        // Verify password
        const isPasswordValid = await bcrypt.compare(password, user.password)

        if (!isPasswordValid) {
            throw createError({
                statusCode: 401,
                statusMessage: 'Invalid email or password'
            })
        }

        // Generate JWT token
        const token = jwt.sign(
            { userId: user.id, email: user.email },
            process.env.JWT_SECRET || 'fallback-secret',
            { expiresIn: '7d' }
        )

        // Update last login
        await prisma.user.update({
            where: { id: user.id },
            data: { lastLoginAt: new Date() }
        })

        // Return user data without password and ensure it's serializable
        const { password: _, ...userWithoutPassword } = user

        // Convert dates to strings to ensure JSON serialization works
        const serializedUser = {
            ...userWithoutPassword,
            createdAt: userWithoutPassword.createdAt?.toISOString(),
            updatedAt: userWithoutPassword.updatedAt?.toISOString(),
            lastLoginAt: userWithoutPassword.lastLoginAt?.toISOString(),
            lastActiveDate: userWithoutPassword.lastActiveDate?.toISOString()
        }

        return {
            success: true,
            message: 'Login successful',
            user: serializedUser,
            token
        }
    } catch (error: any) {
        console.error('Login error:', error)

        if (error.statusCode) {
            throw error
        }

        throw createError({
            statusCode: 500,
            statusMessage: 'Internal server error'
        })
    }
}) 