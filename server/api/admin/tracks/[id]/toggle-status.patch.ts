import { prisma } from '~/server/utils/prisma'
import { verifyAdminToken } from '~/server/utils/auth'

export default defineEventHandler(async (event) => {
    try {
        // Verify admin authentication
        const user = await verifyAdminToken(event)
        if (!user) {
            throw createError({
                statusCode: 401,
                statusMessage: 'Unauthorized'
            })
        }

        const trackId = getRouterParam(event, 'id')
        const body = await readBody(event)
        const { isPublished } = body

        if (typeof isPublished !== 'boolean') {
            throw createError({
                statusCode: 400,
                statusMessage: 'isPublished must be a boolean'
            })
        }

        // Check if track exists
        const existingTrack = await prisma.track.findUnique({
            where: { id: trackId }
        })

        if (!existingTrack) {
            throw createError({
                statusCode: 404,
                statusMessage: 'Track not found'
            })
        }

        // Update track status
        const updatedTrack = await prisma.track.update({
            where: { id: trackId },
            data: { isPublished }
        })

        return {
            success: true,
            message: `Track ${isPublished ? 'published' : 'unpublished'} successfully`,
            track: {
                id: updatedTrack.id,
                title: updatedTrack.title,
                slug: updatedTrack.slug,
                description: updatedTrack.description,
                difficulty: updatedTrack.difficulty,
                category: updatedTrack.category,
                isPublished: updatedTrack.isPublished
            }
        }
    } catch (error) {
        console.error('Error toggling track status:', error)
        throw createError({
            statusCode: 500,
            statusMessage: 'Internal server error'
        })
    }
}) 