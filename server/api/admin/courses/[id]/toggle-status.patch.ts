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

        const courseId = getRouterParam(event, 'id')
        const body = await readBody(event)
        const { isPublished } = body

        if (typeof isPublished !== 'boolean') {
            throw createError({
                statusCode: 400,
                statusMessage: 'isPublished must be a boolean'
            })
        }

        // Check if course exists
        const existingCourse = await prisma.course.findUnique({
            where: { id: courseId }
        })

        if (!existingCourse) {
            throw createError({
                statusCode: 404,
                statusMessage: 'Course not found'
            })
        }

        // Update course status
        const updatedCourse = await prisma.course.update({
            where: { id: courseId },
            data: { isPublished }
        })

        return {
            success: true,
            message: `Course ${isPublished ? 'published' : 'unpublished'} successfully`,
            course: {
                id: updatedCourse.id,
                title: updatedCourse.title,
                slug: updatedCourse.slug,
                description: updatedCourse.description,
                difficulty: updatedCourse.difficulty,
                category: updatedCourse.category,
                isPublished: updatedCourse.isPublished
            }
        }
    } catch (error) {
        console.error('Error toggling course status:', error)
        throw createError({
            statusCode: 500,
            statusMessage: 'Internal server error'
        })
    }
}) 