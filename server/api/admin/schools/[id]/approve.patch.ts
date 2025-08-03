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

        const schoolId = getRouterParam(event, 'id')
        const body = await readBody(event)
        const { status, reason } = body

        if (!['APPROVED', 'REJECTED', 'SUSPENDED'].includes(status)) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Invalid status'
            })
        }

        const school = await prisma.school.findUnique({
            where: { id: schoolId },
            include: { admin: true }
        })

        if (!school) {
            throw createError({
                statusCode: 404,
                statusMessage: 'School not found'
            })
        }

        const updatedSchool = await prisma.school.update({
            where: { id: schoolId },
            data: {
                status,
                isApproved: status === 'APPROVED',
                approvedAt: status === 'APPROVED' ? new Date() : null,
                approvedBy: status === 'APPROVED' ? user.id : null
            },
            include: {
                admin: {
                    select: {
                        email: true,
                        firstName: true,
                        lastName: true
                    }
                }
            }
        })

        // TODO: Send email notification to school admin
        console.log(`School ${school.name} ${status.toLowerCase()} by admin ${user.firstName} ${user.lastName}`)

        return {
            success: true,
            school: updatedSchool,
            message: `School ${status.toLowerCase()} successfully`
        }

    } catch (error) {
        console.error('Error updating school status:', error)
        throw createError({
            statusCode: error.statusCode || 500,
            statusMessage: error.statusMessage || 'Failed to update school status'
        })
    }
}) 