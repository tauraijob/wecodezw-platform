import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
    try {
        const slug = getRouterParam(event, 'slug')
        
        if (!slug) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Track slug is required'
            })
        }

        const track = await prisma.track.findUnique({
            where: {
                slug: slug
            },
            include: {
                lessons: {
                    where: {
                        isPublished: true
                    },
                    orderBy: {
                        sortOrder: 'asc'
                    }
                },
                _count: {
                    select: {
                        enrollments: true
                    }
                }
            }
        })

        if (!track) {
            throw createError({
                statusCode: 404,
                statusMessage: 'Track not found'
            })
        }

        return {
            ...track,
            lessonCount: track.lessons.length,
            enrollmentCount: track._count.enrollments
        }
    } catch (error) {
        console.error('Error fetching track:', error)
        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to fetch track'
        })
    }
}) 