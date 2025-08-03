import { prisma } from '~/server/utils/prisma'
import { verifyToken } from '~/server/utils/auth'

export default defineEventHandler(async (event) => {
  try {
    // Verify user authentication
    const user = await verifyToken(event)
    if (!user) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Unauthorized'
      })
    }

    const aiRequests = await prisma.aICourseRequest.findMany({
      where: {
        userId: user.id
      },
      include: {
        generatedCourse: {
          select: {
            id: true,
            title: true,
            slug: true,
            isPublished: true,
            createdAt: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    // Transform data to include computed fields
    const transformedRequests = aiRequests.map(request => {
      const processingTime = request.processedAt 
        ? Math.round((request.processedAt.getTime() - request.createdAt.getTime()) / 1000 / 60) // in minutes
        : null

      return {
        ...request,
        processingTime,
        hasGeneratedCourse: !!request.generatedCourse
      }
    })

    return {
      success: true,
      data: transformedRequests
    }
  } catch (error) {
    console.error('Error fetching AI course requests:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch AI course requests'
    })
  }
}) 