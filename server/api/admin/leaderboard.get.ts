import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
    try {
        const leaderboard = await prisma.user.findMany({
            where: {
                role: 'USER'
            },
            include: {
                progress: true,
                submissions: {
                    where: {
                        status: 'ACCEPTED'
                    }
                }
            },
            orderBy: {
                xpPoints: 'desc'
            },
            take: 10
        })

        // Transform data and calculate progress
        const transformedLeaderboard = leaderboard.map(user => {
            const { password, ...userWithoutPassword } = user
            const completedChallenges = user.submissions.length
            const totalXP = user.xpPoints || 0
            
            return {
                ...userWithoutPassword,
                progress: {
                    totalXP,
                    completedChallenges,
                    completionPercentage: 0 // Will be calculated based on available tracks
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