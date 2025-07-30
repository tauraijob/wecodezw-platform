import { prisma } from '~/server/utils/prisma'
import { sendEmail, emailTemplates } from '~/server/utils/email'
import crypto from 'crypto'

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event)
        const { email } = body

        // Validate email
        if (!email) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Email is required'
            })
        }

        // Find user by email
        const user = await prisma.user.findUnique({
            where: { email: email.toLowerCase() }
        })

        if (!user) {
            // Don't reveal if user exists or not for security
            return {
                success: true,
                message: 'If an account with that email exists, a password reset link has been sent'
            }
        }

        // Generate reset token
        const resetToken = crypto.randomBytes(32).toString('hex')
        const resetTokenExpiry = new Date(Date.now() + 60 * 60 * 1000) // 1 hour

        // Save reset token to database
        await prisma.user.update({
            where: { id: user.id },
            data: {
                resetPasswordToken: resetToken,
                resetPasswordExpires: resetTokenExpiry
            }
        })

        // Send password reset email
        try {
            const resetEmail = emailTemplates.passwordReset(user.firstName, resetToken)
            await sendEmail({
                to: user.email,
                subject: resetEmail.subject,
                html: resetEmail.html
            })

            return {
                success: true,
                message: 'Password reset link has been sent to your email'
            }
        } catch (emailError) {
            console.error('Failed to send password reset email:', emailError)
            
            // Clear the reset token if email fails
            await prisma.user.update({
                where: { id: user.id },
                data: {
                    resetPasswordToken: null,
                    resetPasswordExpires: null
                }
            })

            throw createError({
                statusCode: 500,
                statusMessage: 'Failed to send password reset email'
            })
        }
    } catch (error: any) {
        console.error('Forgot password error:', error)

        if (error.statusCode) {
            throw error
        }

        throw createError({
            statusCode: 500,
            statusMessage: 'Internal server error'
        })
    }
}) 