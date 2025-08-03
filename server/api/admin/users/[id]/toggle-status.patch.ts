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

        const userId = getRouterParam(event, 'id')
        const body = await readBody(event)
        const { isActive } = body

        if (typeof isActive !== 'boolean') {
            throw createError({
                statusCode: 400,
                statusMessage: 'isActive must be a boolean'
            })
        }

        // Check if user exists
        const existingUser = await prisma.user.findUnique({
            where: { id: userId }
        })

        if (!existingUser) {
            throw createError({
                statusCode: 404,
                statusMessage: 'User not found'
            })
        }

        // Prevent admin from deactivating themselves
        if (existingUser.role === 'ADMIN' && !isActive) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Cannot deactivate admin users'
            })
        }

        // Update user status
        const updatedUser = await prisma.user.update({
            where: { id: userId },
            data: { isActive }
        })

        return {
            success: true,
            message: `User ${isActive ? 'activated' : 'deactivated'} successfully`,
            user: {
                id: updatedUser.id,
                email: updatedUser.email,
                username: updatedUser.username,
                firstName: updatedUser.firstName,
                lastName: updatedUser.lastName,
                role: updatedUser.role,
                isActive: updatedUser.isActive
            }
        }
    } catch (error) {
        console.error('Error toggling user status:', error)
        throw createError({
            statusCode: 500,
            statusMessage: 'Internal server error'
        })
    }
}) 