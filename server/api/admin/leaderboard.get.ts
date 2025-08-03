import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
    try {
        // Get top 10 users by XP points
        const leaderboard = await prisma.user.findMany({
            where: {
                isActive: true,
                role: 'USER' // Only show regular users in leaderboard
            },
            select: {
                id: true,
                firstName: true,
                lastName: true,
                username: true,
                xpPoints: true,
                level: true,
                submissions: {
                    where: {
                        status: 'ACCEPTED'
                    },
                    select: {
                        id: true
                    }
                },
                enrollments: {
                    select: {
                        progress: true,
                        completedAt: true
                    }
                }
            },
            orderBy: {
                xpPoints: 'desc'
            },
            take: 10
        })

        // Transform data to include computed fields
        const transformedLeaderboard = leaderboard.map(user => ({
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            username: user.username,
            xpPoints: user.xpPoints,
            level: user.level,
            completedChallenges: user.submissions.length,
            totalProgress: user.enrollments.reduce((acc, enrollment) => acc + (enrollment.progress || 0), 0) / Math.max(user.enrollments.length, 1),
            completedTracks: user.enrollments.filter(e => e.completedAt).length
        }))

        return transformedLeaderboard

    } catch (error) {
        console.error('Error fetching leaderboard:', error)
        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to fetch leaderboard'
        })
    }
}) 