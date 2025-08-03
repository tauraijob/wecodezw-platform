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

    const body = await readBody(event)
    const {
      title,
      description,
      shortDescription,
      thumbnail,
      difficulty,
      category,
      estimatedHours,
      price,
      isPremium,
      prerequisites,
      learningOutcomes,
      tags,
      trackId,
      creatorId
    } = body

    // Validate required fields
    if (!title || !description || !difficulty || !category || !estimatedHours || !creatorId) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing required fields'
      })
    }

    // Generate slug from title
    const slug = title.toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')

    // Check if slug already exists
    const existingCourse = await prisma.course.findUnique({
      where: { slug }
    })

    if (existingCourse) {
      throw createError({
        statusCode: 400,
        statusMessage: 'A course with this title already exists'
      })
    }

    // Verify creator exists
    const creator = await prisma.user.findUnique({
      where: { id: creatorId }
    })

    if (!creator) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Creator not found'
      })
    }

    // Verify track exists if provided
    if (trackId) {
      const track = await prisma.track.findUnique({
        where: { id: trackId }
      })

      if (!track) {
        throw createError({
          statusCode: 400,
          statusMessage: 'Track not found'
        })
      }
    }

    // Create the course
    const course = await prisma.course.create({
      data: {
        title,
        slug,
        description,
        shortDescription,
        thumbnail,
        difficulty,
        category,
        estimatedHours,
        price: price || 0,
        isPremium: isPremium || false,
        prerequisites,
        learningOutcomes,
        tags: tags ? JSON.stringify(tags) : null,
        creatorId,
        trackId,
        isPublished: false
      },
      include: {
        creator: {
          select: {
            id: true,
            username: true,
            firstName: true,
            lastName: true,
            avatar: true
          }
        },
        track: {
          select: {
            id: true,
            title: true,
            slug: true
          }
        }
      }
    })

    return {
      success: true,
      data: course,
      message: 'Course created successfully'
    }
  } catch (error) {
    console.error('Error creating course:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || 'Failed to create course'
    })
  }
}) 