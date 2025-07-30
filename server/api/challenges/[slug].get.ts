import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
    try {
        const slug = getRouterParam(event, 'slug')
        
        if (!slug) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Challenge slug is required'
            })
        }

        const challenge = await prisma.challenge.findUnique({
            where: {
                slug: slug
            },
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
            }
        })

        if (!challenge) {
            throw createError({
                statusCode: 404,
                statusMessage: 'Challenge not found'
            })
        }

        return {
            ...challenge,
            submissionCount: challenge._count.submissions
        }
    } catch (error) {
        console.error('Error fetching challenge:', error)
        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to fetch challenge'
        })
    }
}) 