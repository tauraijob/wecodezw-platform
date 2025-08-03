import { prisma } from '~/server/utils/prisma'
import { verifyAdminToken } from '~/server/utils/auth'

export default defineEventHandler(async (event) => {
    try {
        // Verify admin token
        const admin = await verifyAdminToken(event)
        if (!admin) {
            throw createError({
                statusCode: 401,
                statusMessage: 'Unauthorized - Admin access required'
            })
        }

        const clubId = getRouterParam(event, 'id')
        if (!clubId) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Club ID is required'
            })
        }

        // Get club with members and their progress
        const club = await prisma.club.findUnique({
            where: { id: clubId },
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

        if (!club) {
            throw createError({
                statusCode: 404,
                statusMessage: 'Club not found'
            })
        }

        // Calculate completion percentage
        const totalMembers = club.members.length
        if (totalMembers === 0) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Club has no members'
            })
        }

        const membersWithProgress = club.members.filter(member => 
            member.user.enrollments.length > 0 || member.user.courseEnrollments.length > 0
        ).length

        const completionPercentage = (membersWithProgress / totalMembers) * 100

        // Check if club is eligible for certificate (80% completion threshold)
        if (completionPercentage < 80) {
            throw createError({
                statusCode: 400,
                statusMessage: `Club completion rate (${Math.round(completionPercentage * 100) / 100}%) is below the 80% threshold required for certificate issuance`
            })
        }

        // Generate verification code for the club certificate
        const verificationCode = `CLUB-${club.id.slice(-8).toUpperCase()}-${Date.now().toString(36).toUpperCase()}`

        // Create certificates for all members who have made progress
        const certificatesToCreate = []
        for (const member of club.members) {
            if (member.user.enrollments.length > 0 || member.user.courseEnrollments.length > 0) {
                certificatesToCreate.push({
                    userId: member.user.id,
                    title: `${club.name} Learning Achievement Certificate`,
                    description: `Certificate of completion for learning goals achieved in ${club.name} at ${club.school.name}`,
                    verificationCode: `${verificationCode}-${member.user.id.slice(-6).toUpperCase()}`,
                    issuedAt: new Date()
                })
            }
        }

        // Create all certificates in a transaction
        const createdCertificates = await prisma.$transaction(async (tx) => {
            const certificates = []
            for (const certData of certificatesToCreate) {
                const certificate = await tx.certificate.create({
                    data: certData
                })
                certificates.push(certificate)
            }
            return certificates
        })

        // Update club members' XP points as bonus for certificate achievement
        const xpBonus = 500 // Bonus XP for certificate achievement
        await prisma.$transaction(async (tx) => {
            for (const member of club.members) {
                if (member.user.enrollments.length > 0 || member.user.courseEnrollments.length > 0) {
                    await tx.user.update({
                        where: { id: member.user.id },
                        data: {
                            xpPoints: {
                                increment: xpBonus
                            }
                        }
                    })
                }
            }
        })

        return {
            success: true,
            message: `Successfully issued ${createdCertificates.length} certificates to ${club.name}`,
            data: {
                clubName: club.name,
                schoolName: club.school.name,
                certificatesIssued: createdCertificates.length,
                completionPercentage: Math.round(completionPercentage * 100) / 100,
                xpBonusAwarded: xpBonus,
                totalXpAwarded: createdCertificates.length * xpBonus
            }
        }

    } catch (error) {
        console.error('Error issuing club certificate:', error)
        
        if (error.statusCode) {
            throw error
        }
        
        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to issue certificate'
        })
    }
}) 