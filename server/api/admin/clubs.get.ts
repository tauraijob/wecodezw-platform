import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
    try {
        const clubs = await prisma.club.findMany({
            include: {
                school: {
                    select: {
                        id: true,
                        name: true,
                        slug: true,
                        isApproved: true
                    }
                },
                creator: {
                    select: {
                        id: true,
                        firstName: true,
                        lastName: true,
                        email: true,
                        username: true
                    }
                },
                members: {
                    select: {
                        id: true,
                        role: true,
                        isActive: true,
                        user: {
                            select: {
                                id: true,
                                firstName: true,
                                lastName: true,
                                username: true
                            }
                        }
                    }
                },
                posts: {
                    select: {
                        id: true,
                        title: true,
                        isPublished: true
                    }
                }
            },
            orderBy: {
                createdAt: 'desc'
            }
        })

        // Transform data to include computed fields
        const transformedClubs = clubs.map(club => ({
            ...club,
            totalMembers: club.members.length,
            activeMembers: club.members.filter(member => member.isActive).length,
            totalPosts: club.posts.length,
            publishedPosts: club.posts.filter(post => post.isPublished).length,
            creatorName: `${club.creator.firstName} ${club.creator.lastName}`,
            schoolName: club.school.name,
            schoolApproved: club.school.isApproved
        }))

        return transformedClubs

    } catch (error) {
        console.error('Error fetching clubs:', error)
        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to fetch clubs'
        })
    }
}) 