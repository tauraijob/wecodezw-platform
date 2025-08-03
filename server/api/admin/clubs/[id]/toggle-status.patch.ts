import { prisma } from '~/server/utils/prisma'
import { verifyAdminToken } from '~/server/utils/auth'

export default defineEventHandler(async (event) => {
    try {
        // Verify admin authentication
        const user = await verifyAdminToken(event)
        if (!user) {
            throw createError({
                statusCode: 401,
                statusMessage: 'Unauthorized'
            })
        }

        const clubId = getRouterParam(event, 'id')
        const body = await readBody(event)
        const { isActive } = body

        if (typeof isActive !== 'boolean') {
            throw createError({
                statusCode: 400,
                statusMessage: 'isActive must be a boolean'
            })
        }

        // Check if club exists
        const existingClub = await prisma.club.findUnique({
            where: { id: clubId },
            include: {
                school: true,
                creator: true
            }
        })

        if (!existingClub) {
            throw createError({
                statusCode: 404,
                statusMessage: 'Club not found'
            })
        }

        // Update club status
        const updatedClub = await prisma.club.update({
            where: { id: clubId },
            data: { isActive },
            include: {
                school: true,
                creator: true,
                _count: {
                    select: {
                        members: true,
                        posts: true
                    }
                }
            }
        })

        return {
            success: true,
            message: `Club ${isActive ? 'activated' : 'deactivated'} successfully`,
            club: {
                id: updatedClub.id,
                name: updatedClub.name,
                description: updatedClub.description,
                category: updatedClub.category,
                inviteCode: updatedClub.inviteCode,
                isActive: updatedClub.isActive,
                school: updatedClub.school,
                creator: updatedClub.creator,
                memberCount: updatedClub._count.members,
                postCount: updatedClub._count.posts
            }
        }
    } catch (error) {
        console.error('Error toggling club status:', error)
        throw createError({
            statusCode: 500,
            statusMessage: 'Internal server error'
        })
    }
}) 