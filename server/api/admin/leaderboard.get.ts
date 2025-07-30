import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
    try {
        const leaderboard = await prisma.user.findMany({
            where: {
                role: 'STUDENT',
                progress: {
                    isNot: null
                }
            },
            include: {
                progress: true
            },
            orderBy: {
                progress: {
                    totalXP: 'desc'
                }
            },
            take: 10
        })

        // Transform data and ensure progress exists
        const transformedLeaderboard = leaderboard.map(user => {
            const { password, ...userWithoutPassword } = user
            return {
                ...userWithoutPassword,
                progress: user.progress || {
                    totalXP: 0,
                    completedChallenges: 0,
                    completionPercentage: 0
                }
            }
        })

        return transformedLeaderboard

    } catch (error) {
        console.error('Error fetching leaderboard:', error)
        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to fetch leaderboard'
        })
    }
}) 