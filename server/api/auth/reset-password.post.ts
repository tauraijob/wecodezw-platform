import { prisma } from '~/server/utils/prisma'
import bcrypt from 'bcryptjs'

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event)
        const { token, password } = body

        // Validate required fields
        if (!token || !password) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Token and new password are required'
            })
        }

        // Validate password strength
        if (password.length < 6) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Password must be at least 6 characters long'
            })
        }

        // Find user with valid reset token
        const user = await prisma.user.findFirst({
            where: {
                resetPasswordToken: token,
                resetPasswordExpires: {
                    gt: new Date()
                }
            }
        })

        if (!user) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Invalid or expired reset token'
            })
        }

        // Hash new password
        const hashedPassword = await bcrypt.hash(password, 12)

        // Update user password and clear reset token
        await prisma.user.update({
            where: { id: user.id },
            data: {
                password: hashedPassword,
                resetPasswordToken: null,
                resetPasswordExpires: null
            }
        })

        return {
            success: true,
            message: 'Password has been reset successfully'
        }
    } catch (error: any) {
        console.error('Reset password error:', error)

        if (error.statusCode) {
            throw error
        }

        throw createError({
            statusCode: 500,
            statusMessage: 'Internal server error'
        })
    }
}) 