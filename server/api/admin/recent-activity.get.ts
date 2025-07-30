import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
    try {
        // Get recent submissions
        const recentSubmissions = await prisma.submission.findMany({
            where: {
                status: 'APPROVED'
            },
            include: {
                user: {
                    select: {
                        firstName: true,
                        lastName: true,
                        username: true
                    }
                },
                challenge: {
                    select: {
                        title: true
                    }
                }
            },
            orderBy: {
                createdAt: 'desc'
            },
            take: 5
        })

        // Get recent user registrations
        const recentRegistrations = await prisma.user.findMany({
            where: {
                role: 'STUDENT'
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
            take: 5
        })

        // Transform submissions into activity items
        const submissionActivities = recentSubmissions.map(submission => ({
            id: `submission-${submission.id}`,
            type: 'challenge_completed',
            description: `${submission.user.firstName} ${submission.user.lastName} completed "${submission.challenge.title}"`,
            createdAt: submission.createdAt
        }))

        // Transform registrations into activity items
        const registrationActivities = recentRegistrations.map(user => ({
            id: `registration-${user.id}`,
            type: 'user_registered',
            description: `${user.firstName} ${user.lastName} (@${user.username}) joined the platform`,
            createdAt: user.createdAt
        }))

        // Combine and sort all activities
        const allActivities = [...submissionActivities, ...registrationActivities]
            .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
            .slice(0, 10)

        return allActivities

    } catch (error) {
        console.error('Error fetching recent activity:', error)
        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to fetch recent activity'
        })
    }
}) 