import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
    try {
        const query = getQuery(event)
        const category = query.category as string
        const difficulty = query.difficulty as string
        const limit = parseInt(query.limit as string) || 20
        const page = parseInt(query.page as string) || 1
        const skip = (page - 1) * limit

        const where: any = {
            isPublished: true
        }

        if (category) {
            where.category = category
        }

        if (difficulty) {
            where.difficulty = difficulty
        }

        const [challenges, total] = await Promise.all([
            prisma.challenge.findMany({
                where,
                include: {
                    lesson: {
                        select: {
                            title: true,
                            track: {
                                select: {
                                    title: true,
                                    slug: true
                                }
                            }
                        }
                    },
                    _count: {
                        select: {
                            submissions: true
                        }
                    }
                },
                orderBy: {
                    createdAt: 'desc'
                },
                skip,
                take: limit
            }),
            prisma.challenge.count({ where })
        ])

        return {
            challenges: challenges.map(challenge => ({
                ...challenge,
                submissionCount: challenge._count.submissions
            })),
            pagination: {
                page,
                limit,
                total,
                pages: Math.ceil(total / limit)
            }
        }
    } catch (error) {
        console.error('Error fetching challenges:', error)
        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to fetch challenges'
        })
    }
}) 