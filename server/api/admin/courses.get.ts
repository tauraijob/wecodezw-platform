import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
  try {
    const courses = await prisma.course.findMany({
      include: {
        creator: {
          select: {
            id: true,
            username: true,
            firstName: true,
            lastName: true,
            avatar: true,
            email: true
          }
        },
        track: {
          select: {
            id: true,
            title: true,
            slug: true
          }
        },
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
        quizzes: {
          include: {
            questions: true,
            attempts: true
          }
        },
        exams: {
          include: {
            questions: true,
            attempts: true
          }
        },
        certificates: true,
        aiRequest: {
          select: {
            id: true,
            status: true,
            createdAt: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    // Transform data to include computed fields
    const transformedCourses = courses.map(course => {
      const totalLessons = course.lessons.length
      const totalChallenges = course.lessons.reduce((sum, lesson) => sum + lesson.challenges.length, 0)
      const totalEnrollments = course.enrollments.length
      const completedEnrollments = course.enrollments.filter(enrollment => enrollment.completedAt !== null).length
      const totalQuizzes = course.quizzes.length
      const totalExams = course.exams.length
      const totalQuizAttempts = course.quizzes.reduce((sum, quiz) => sum + quiz.attempts.length, 0)
      const totalExamAttempts = course.exams.reduce((sum, exam) => sum + exam.attempts.length, 0)
      const totalCertificates = course.certificates.length

      return {
        ...course,
        stats: {
          totalLessons,
          totalChallenges,
          totalEnrollments,
          completedEnrollments,
          completionRate: totalEnrollments > 0 ? (completedEnrollments / totalEnrollments) * 100 : 0,
          totalQuizzes,
          totalExams,
          totalQuizAttempts,
          totalExamAttempts,
          totalCertificates
        }
      }
    })

    return {
      success: true,
      data: transformedCourses
    }
  } catch (error) {
    console.error('Error fetching courses:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch courses'
    })
  }
}) 