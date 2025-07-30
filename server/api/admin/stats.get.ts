import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
    try {
        // Get total users
        const totalUsers = await prisma.user.count()

        // Get active users (logged in within last 30 days)
        const thirtyDaysAgo = new Date()
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)

        const activeUsers = await prisma.user.count({
            where: {
                lastLoginAt: {
                    gte: thirtyDaysAgo
                }
            }
        })

        // Get completed challenges
        const completedChallenges = await prisma.submission.count({
            where: {
                status: 'ACCEPTED'
            }
        })

        // Get total XP earned
        const totalXPResult = await prisma.user.aggregate({
            _sum: {
                xpPoints: true
            }
        })

        const totalXP = totalXPResult._sum.xpPoints || 0

        // Get new users this month
        const thisMonth = new Date()
        thisMonth.setDate(1)
        thisMonth.setHours(0, 0, 0, 0)

        const newUsersThisMonth = await prisma.user.count({
            where: {
                createdAt: {
                    gte: thisMonth
                }
            }
        })

        // Get completion rate (users who have completed at least one challenge)
        const usersWithProgress = await prisma.user.count({
            where: {
                submissions: {
                    some: {
                        status: 'ACCEPTED'
                    }
                }
            }
        })

        const completionRate = totalUsers > 0 ? (usersWithProgress / totalUsers) * 100 : 0

        return {
            totalUsers,
            activeUsers,
            completedChallenges,
            totalXP,
            newUsersThisMonth,
            completionRate: Math.round(completionRate * 100) / 100
        }

    } catch (error) {
        console.error('Error fetching admin stats:', error)
        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to fetch statistics'
        })
    }
}) 