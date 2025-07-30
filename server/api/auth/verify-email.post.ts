import { prisma } from '~/server/utils/prisma'
import crypto from 'crypto'

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event)
        const { token } = body

        // Validate token
        if (!token) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Verification token is required'
            })
        }

        // Find user with verification token
        const user = await prisma.user.findFirst({
            where: {
                emailVerificationToken: token
            }
        })

        if (!user) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Invalid verification token'
            })
        }

        // Update user to verified
        await prisma.user.update({
            where: { id: user.id },
            data: {
                isEmailVerified: true,
                emailVerificationToken: null
            }
        })

        return {
            success: true,
            message: 'Email verified successfully'
        }
    } catch (error: any) {
        console.error('Email verification error:', error)

        if (error.statusCode) {
            throw error
        }

        throw createError({
            statusCode: 500,
            statusMessage: 'Internal server error'
        })
    }
}) 