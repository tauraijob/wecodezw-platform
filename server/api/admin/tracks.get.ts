import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
  try {
    const tracks = await prisma.track.findMany({
      include: {
        lessons: {
          include: {
            challenges: true,
            progress: {
              include: {
                user: {
                  select: {
                    id: true,
                    username: true,
                    firstName: true,
                    lastName: true,
                    avatar: true
                  }
                }
              }
            }
          }
        },
        enrollments: {
          include: {
            user: {
              select: {
                id: true,
                username: true,
                firstName: true,
                lastName: true,
                avatar: true
              }
            }
          }
        },
        courses: {
          include: {
            enrollments: true,
            quizzes: true,
            exams: true
          }
        },
        certificates: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    // Transform data to include computed fields
    const transformedTracks = tracks.map(track => {
      const totalLessons = track.lessons.length
      const totalChallenges = track.lessons.reduce((sum, lesson) => sum + lesson.challenges.length, 0)
      const totalEnrollments = track.enrollments.length
      const completedEnrollments = track.enrollments.filter(enrollment => enrollment.completedAt !== null).length
      const totalCourses = track.courses.length
      const totalQuizzes = track.courses.reduce((sum, course) => sum + course.quizzes.length, 0)
      const totalExams = track.courses.reduce((sum, course) => sum + course.exams.length, 0)
      const totalCertificates = track.certificates.length

      return {
        ...track,
        stats: {
          totalLessons,
          totalChallenges,
          totalEnrollments,
          completedEnrollments,
          completionRate: totalEnrollments > 0 ? (completedEnrollments / totalEnrollments) * 100 : 0,
          totalCourses,
          totalQuizzes,
          totalExams,
          totalCertificates
        }
      }
    })

    return {
      success: true,
      data: transformedTracks
    }
  } catch (error) {
    console.error('Error fetching tracks:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch tracks'
    })
  }
}) 