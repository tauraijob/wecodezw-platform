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
      tags
    } = body

    // Validate required fields
    if (!title || !description || !difficulty || !category || !estimatedHours) {
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
    const existingTrack = await prisma.track.findUnique({
      where: { slug }
    })

    if (existingTrack) {
      throw createError({
        statusCode: 400,
        statusMessage: 'A track with this title already exists'
      })
    }

    // Create the track
    const track = await prisma.track.create({
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
        isPublished: false
      }
    })

    return {
      success: true,
      data: track,
      message: 'Track created successfully'
    }
  } catch (error) {
    console.error('Error creating track:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || 'Failed to create track'
    })
  }
}) 