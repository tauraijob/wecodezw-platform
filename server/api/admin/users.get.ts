import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
    try {
        const users = await prisma.user.findMany({
            include: {
                submissions: {
                    where: {
                        status: 'ACCEPTED'
                    },
                    select: {
                        id: true,
                        submittedAt: true,
                        score: true
                    }
                },
                enrollments: {
                    include: {
                        track: {
                            select: {
                                id: true,
                                title: true,
                                slug: true
                            }
                        }
                    }
                },
                progress: true
            },
            orderBy: {
                createdAt: 'desc'
            }
        })

        // Transform data to include computed fields
        const transformedUsers = users.map(user => {
            const { password, ...userWithoutPassword } = user
            
            // Calculate user progress
            const completedChallenges = user.submissions.length
            const totalXP = user.xpPoints || 0
            const completedTracks = user.enrollments.filter(e => e.completedAt).length
            const totalTracks = user.enrollments.length
            const averageProgress = totalTracks > 0 
                ? user.enrollments.reduce((acc, e) => acc + (e.progress || 0), 0) / totalTracks 
                : 0

            // Get current track (most recent enrollment)
            const currentEnrollment = user.enrollments
                .filter(e => !e.completedAt)
                .sort((a, b) => new Date(b.enrolledAt).getTime() - new Date(a.enrolledAt).getTime())[0]

            return {
                ...userWithoutPassword,
                progress: {
                    totalXP,
                    completedChallenges,
                    completedTracks,
                    totalTracks,
                    averageProgress: Math.round(averageProgress * 100) / 100,
                    completionPercentage: Math.round(averageProgress),
                    currentTrack: currentEnrollment?.track || null,
                    lastActivity: user.lastLoginAt || user.createdAt
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