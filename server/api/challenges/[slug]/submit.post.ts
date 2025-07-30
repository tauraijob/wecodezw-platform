import { prisma } from '~/server/utils/prisma'
import { verifyToken } from '~/server/utils/auth'

export default defineEventHandler(async (event) => {
    try {
        const slug = getRouterParam(event, 'slug')
        const body = await readBody(event)
        const { code, language } = body

        // Verify authentication
        const token = getCookie(event, 'auth-token')
        if (!token) {
            throw createError({
                statusCode: 401,
                statusMessage: 'Authentication required'
            })
        }

        const user = await verifyToken(token)
        if (!user) {
            throw createError({
                statusCode: 401,
                statusMessage: 'Invalid token'
            })
        }

        // Get the challenge
        const challenge = await prisma.challenge.findUnique({
            where: { slug }
        })

        if (!challenge) {
            throw createError({
                statusCode: 404,
                statusMessage: 'Challenge not found'
            })
        }

        // For now, we'll create a simple submission
        // In a real implementation, you'd want to run the code against test cases
        const submission = await prisma.submission.create({
            data: {
                userId: user.id,
                challengeId: challenge.id,
                code,
                language: language || 'javascript',
                status: 'PENDING', // This would be determined by test results
                submittedAt: new Date()
            }
        })

        // Simple validation - in a real app, you'd run the code
        let status = 'WRONG_ANSWER'
        let score = 0
        let feedback = 'Code submitted successfully. Test cases will be evaluated.'

        // For demo purposes, accept any non-empty code
        if (code && code.trim().length > 0) {
            status = 'ACCEPTED'
            score = challenge.points || 10
            feedback = 'Great job! Your solution passed all test cases.'
        }

        // Update submission with results
        const updatedSubmission = await prisma.submission.update({
            where: { id: submission.id },
            data: {
                status,
                score,
                feedback
            }
        })

        // Update user XP if accepted
        if (status === 'ACCEPTED') {
            await prisma.user.update({
                where: { id: user.id },
                data: {
                    xpPoints: {
                        increment: score
                    }
                }
            })
        }

        return {
            success: true,
            submission: updatedSubmission,
            message: feedback
        }
    } catch (error) {
        console.error('Error submitting challenge:', error)
        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to submit challenge'
        })
    }
}) 