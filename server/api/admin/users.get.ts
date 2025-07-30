import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
    try {
        const users = await prisma.user.findMany({
            include: {
                progress: true
            },
            orderBy: {
                createdAt: 'desc'
            }
        })

        // Transform data to include computed fields
        const transformedUsers = users.map(user => {
            const { password, ...userWithoutPassword } = user
            return {
                ...userWithoutPassword,
                progress: user.progress || {
                    totalXP: 0,
                    completedChallenges: 0,
                    completionPercentage: 0,
                    currentTrack: null,
                    currentLesson: null
                }
            }
        })

        return transformedUsers

    } catch (error) {
        console.error('Error fetching users:', error)
        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to fetch users'
        })
    }
}) 