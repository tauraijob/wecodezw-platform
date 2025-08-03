import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
    try {
        // Get recent submissions
        const recentSubmissions = await prisma.submission.findMany({
            where: {
                status: 'ACCEPTED'
            },
            include: {
                user: {
                    select: {
                        id: true,
                        firstName: true,
                        lastName: true,
                        username: true
                    }
                },
                challenge: {
                    select: {
                        id: true,
                        title: true,
                        slug: true
                    }
                }
            },
            orderBy: {
                submittedAt: 'desc'
            },
            take: 10
        })

        // Get recent enrollments
        const recentEnrollments = await prisma.enrollment.findMany({
            include: {
                user: {
                    select: {
                        id: true,
                        firstName: true,
                        lastName: true,
                        username: true
                    }
                },
                track: {
                    select: {
                        id: true,
                        title: true,
                        slug: true
                    }
                }
            },
            orderBy: {
                enrolledAt: 'desc'
            },
            take: 10
        })

        // Get recent user registrations
        const recentRegistrations = await prisma.user.findMany({
            where: {
                role: 'USER'
            },
            select: {
                id: true,
                firstName: true,
                lastName: true,
                username: true,
                createdAt: true
            },
            orderBy: {
                createdAt: 'desc'
            },
            take: 10
        })

        // Combine and sort all activities
        const activities = [
            ...recentSubmissions.map(submission => ({
                id: `submission-${submission.id}`,
                type: 'challenge_completed',
                description: `${submission.user.firstName} ${submission.user.lastName} completed "${submission.challenge.title}"`,
                createdAt: submission.submittedAt,
                user: submission.user,
                metadata: {
                    challengeTitle: submission.challenge.title,
                    score: submission.score
                }
            })),
            ...recentEnrollments.map(enrollment => ({
                id: `enrollment-${enrollment.id}`,
                type: 'track_started',
                description: `${enrollment.user.firstName} ${enrollment.user.lastName} started "${enrollment.track.title}"`,
                createdAt: enrollment.enrolledAt,
                user: enrollment.user,
                metadata: {
                    trackTitle: enrollment.track.title
                }
            })),
            ...recentRegistrations.map(user => ({
                id: `registration-${user.id}`,
                type: 'user_registered',
                description: `${user.firstName} ${user.lastName} joined WeCodeZW`,
                createdAt: user.createdAt,
                user: user,
                metadata: {
                    username: user.username
                }
            }))
        ]

        // Sort by creation date (most recent first) and take top 15
        const sortedActivities = activities
            .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
            .slice(0, 15)

        return sortedActivities

    } catch (error) {
        console.error('Error fetching recent activity:', error)
        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to fetch recent activity'
        })
    }
}) 