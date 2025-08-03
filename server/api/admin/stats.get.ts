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

        // Get user registration data for the last 12 months (for charts)
        const monthlyRegistrations = []
        for (let i = 11; i >= 0; i--) {
            const startDate = new Date()
            startDate.setMonth(startDate.getMonth() - i)
            startDate.setDate(1)
            startDate.setHours(0, 0, 0, 0)

            const endDate = new Date(startDate)
            endDate.setMonth(endDate.getMonth() + 1)

            const count = await prisma.user.count({
                where: {
                    createdAt: {
                        gte: startDate,
                        lt: endDate
                    }
                }
            })

            monthlyRegistrations.push({
                month: startDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
                count
            })
        }

        // Get user activity data for the last 7 days (for charts)
        const dailyActivity = []
        for (let i = 6; i >= 0; i--) {
            const date = new Date()
            date.setDate(date.getDate() - i)
            date.setHours(0, 0, 0, 0)

            const nextDate = new Date(date)
            nextDate.setDate(nextDate.getDate() + 1)

            const count = await prisma.user.count({
                where: {
                    lastLoginAt: {
                        gte: date,
                        lt: nextDate
                    }
                }
            })

            dailyActivity.push({
                date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
                count
            })
        }

        // Get category distribution (for charts)
        const categoryStats = await prisma.track.groupBy({
            by: ['category'],
            _count: {
                id: true
            }
        })

        const categoryDistribution = categoryStats.map(stat => ({
            category: stat.category,
            count: stat._count.id
        }))

        // Get difficulty distribution (for charts)
        const difficultyStats = await prisma.track.groupBy({
            by: ['difficulty'],
            _count: {
                id: true
            }
        })

        const difficultyDistribution = difficultyStats.map(stat => ({
            difficulty: stat.difficulty,
            count: stat._count.id
        }))

        // Get club completion data for certificate issuance
        const clubsWithCompletionData = await prisma.club.findMany({
            include: {
                members: {
                    include: {
                        user: {
                            include: {
                                enrollments: {
                                    include: {
                                        track: true
                                    }
                                },
                                courseEnrollments: {
                                    include: {
                                        course: true
                                    }
                                },
                                certificates: true
                            }
                        }
                    }
                },
                school: true
            }
        })

        const clubsForCertificates = clubsWithCompletionData.map(club => {
            const totalMembers = club.members.length
            const membersWithProgress = club.members.filter(member => 
                member.user.enrollments.length > 0 || member.user.courseEnrollments.length > 0
            ).length
            const membersWithCertificates = club.members.filter(member => 
                member.user.certificates.length > 0
            ).length

            // Calculate completion percentage
            const completionPercentage = totalMembers > 0 ? (membersWithProgress / totalMembers) * 100 : 0

            return {
                id: club.id,
                name: club.name,
                schoolName: club.school.name,
                totalMembers,
                membersWithProgress,
                membersWithCertificates,
                completionPercentage: Math.round(completionPercentage * 100) / 100,
                isEligibleForCertificate: completionPercentage >= 80 // 80% completion threshold
            }
        })

        // Get top performing clubs
        const topClubs = clubsForCertificates
            .sort((a, b) => b.completionPercentage - a.completionPercentage)
            .slice(0, 5)

        // Get recent activity data
        const recentActivity = await prisma.user.findMany({
            take: 10,
            orderBy: {
                lastLoginAt: 'desc'
            },
            select: {
                id: true,
                firstName: true,
                lastName: true,
                username: true,
                lastLoginAt: true,
                xpPoints: true,
                role: true
            }
        })

        return {
            totalUsers,
            activeUsers,
            completedChallenges,
            totalXP,
            newUsersThisMonth,
            completionRate: Math.round(completionRate * 100) / 100,
            
            // Chart data
            monthlyRegistrations,
            dailyActivity,
            categoryDistribution,
            difficultyDistribution,
            
            // Club completion data for certificates
            clubsForCertificates,
            topClubs,
            recentActivity
        }

    } catch (error) {
        console.error('Error fetching admin stats:', error)
        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to fetch statistics'
        })
    }
}) 