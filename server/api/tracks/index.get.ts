import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
    try {
        const tracks = await prisma.track.findMany({
            where: {
                isPublished: true
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
            },
            orderBy: {
                sortOrder: 'asc'
            }
        })

        return tracks.map(track => ({
            ...track,
            lessonCount: track.lessons.length,
            enrollmentCount: track._count.enrollments
        }))
    } catch (error) {
        console.error('Error fetching tracks:', error)
        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to fetch tracks'
        })
    }
}) 