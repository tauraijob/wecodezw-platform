import { prisma } from '~/server/utils/prisma'
import { verifyToken } from '~/server/utils/auth'

export default defineEventHandler(async (event) => {
    try {
        const slug = getRouterParam(event, 'slug')

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

        // Get the track
        const track = await prisma.track.findUnique({
            where: { slug }
        })

        if (!track) {
            throw createError({
                statusCode: 404,
                statusMessage: 'Track not found'
            })
        }

        // Check if user is already enrolled
        const existingEnrollment = await prisma.enrollment.findUnique({
            where: {
                userId_trackId: {
                    userId: user.id,
                    trackId: track.id
                }
            }
        })

        if (existingEnrollment) {
            return {
                success: true,
                message: 'Already enrolled in this track',
                enrollment: existingEnrollment
            }
        }

        // Create enrollment
        const enrollment = await prisma.enrollment.create({
            data: {
                userId: user.id,
                trackId: track.id,
                enrolledAt: new Date()
            }
        })

        return {
            success: true,
            message: 'Successfully enrolled in track',
            enrollment
        }
    } catch (error) {
        console.error('Error enrolling in track:', error)
        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to enroll in track'
        })
    }
}) 