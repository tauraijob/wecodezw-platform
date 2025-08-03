import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
    try {
        const schools = await prisma.school.findMany({
            include: {
                admin: {
                    select: {
                        id: true,
                        firstName: true,
                        lastName: true,
                        email: true,
                        username: true
                    }
                },
                approvedByUser: {
                    select: {
                        id: true,
                        firstName: true,
                        lastName: true,
                        email: true
                    }
                },
                clubs: {
                    select: {
                        id: true,
                        name: true,
                        isActive: true
                    }
                },
                students: {
                    select: {
                        id: true
                    }
                }
            },
            orderBy: {
                createdAt: 'desc'
            }
        })

        // Transform data to include computed fields
        const transformedSchools = schools.map(school => ({
            ...school,
            totalClubs: school.clubs.length,
            activeClubs: school.clubs.filter(club => club.isActive).length,
            totalStudents: school.students.length,
            adminName: `${school.admin.firstName} ${school.admin.lastName}`,
            approverName: school.approvedByUser ? `${school.approvedByUser.firstName} ${school.approvedByUser.lastName}` : null
        }))

        return transformedSchools

    } catch (error) {
        console.error('Error fetching schools:', error)
        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to fetch schools'
        })
    }
}) 