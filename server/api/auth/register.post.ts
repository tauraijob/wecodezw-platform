import { prisma } from '~/server/utils/prisma'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { sendEmail, emailTemplates } from '~/server/utils/email'
import crypto from 'crypto'

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event)
        const { firstName, lastName, username, email, password } = body

        // Validate required fields
        if (!firstName || !lastName || !username || !email || !password) {
            throw createError({
                statusCode: 400,
                statusMessage: 'All fields are required'
            })
        }

        // Check if user already exists
        const existingUser = await prisma.user.findFirst({
            where: {
                OR: [
                    { email },
                    { username }
                ]
            }
        })

        if (existingUser) {
            throw createError({
                statusCode: 409,
                statusMessage: 'User with this email or username already exists'
            })
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 12)

        // Generate email verification token
        const verificationToken = crypto.randomBytes(32).toString('hex')

        // Create user
        const user = await prisma.user.create({
            data: {
                firstName,
                lastName,
                username,
                email,
                password: hashedPassword,
                role: 'STUDENT',
                emailVerificationToken: verificationToken
            },
            select: {
                id: true,
                firstName: true,
                lastName: true,
                username: true,
                email: true,
                role: true,
                createdAt: true
            }
        })

        // Generate JWT token
        const token = jwt.sign(
            { userId: user.id, email: user.email },
            process.env.JWT_SECRET || 'fallback-secret',
            { expiresIn: '7d' }
        )

        // Create initial progress record
        await prisma.progress.create({
            data: {
                userId: user.id,
                totalXp: 0,
                level: 1,
                streak: 0,
                challengesCompleted: 0,
                tracksStarted: 0,
                certificatesEarned: 0
            }
        })

        // Send welcome email and verification email
        try {
            const welcomeEmail = emailTemplates.welcome(user.firstName, user.username)
            const verificationEmail = emailTemplates.emailVerification(user.firstName, verificationToken)
            
            // Send both emails
            await Promise.all([
                sendEmail({
                    to: user.email,
                    subject: welcomeEmail.subject,
                    html: welcomeEmail.html
                }),
                sendEmail({
                    to: user.email,
                    subject: verificationEmail.subject,
                    html: verificationEmail.html
                })
            ])
        } catch (emailError) {
            console.error('Failed to send welcome/verification email:', emailError)
            // Don't fail registration if email fails
        }

        return {
            success: true,
            message: 'User registered successfully',
            user,
            token
        }
    } catch (error: any) {
        console.error('Registration error:', error)

        if (error.statusCode) {
            throw error
        }

        throw createError({
            statusCode: 500,
            statusMessage: 'Internal server error'
        })
    }
}) 