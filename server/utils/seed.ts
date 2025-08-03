import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
    console.log('🌱 Starting database seed...')

    // Create admin user
    const adminPassword = await bcrypt.hash('admin123', 12)
    const admin = await prisma.user.upsert({
        where: { email: 'admin@wecodezw.com' },
        update: {},
        create: {
            email: 'admin@wecodezw.com',
            username: 'admin',
            firstName: 'System',
            lastName: 'Administrator',
            password: adminPassword,
            role: 'ADMIN',
            isEmailVerified: true,
            isActive: true,
            bio: 'Platform administrator and system manager',
            location: 'Harare, Zimbabwe',
            website: 'https://wecodezw.com',
            githubUsername: 'wecodezw-admin',
            linkedinUrl: 'https://linkedin.com/in/wecodezw-admin',
            twitterHandle: '@wecodezw_admin',
            xpPoints: 0,
            level: 1,
            streak: 0
        }
    })

    // Create instructor user
    const instructorPassword = await bcrypt.hash('instructor123', 12)
    const instructor = await prisma.user.upsert({
        where: { email: 'instructor@wecodezw.com' },
        update: {},
        create: {
            email: 'instructor@wecodezw.com',
            username: 'instructor',
            firstName: 'Sarah',
            lastName: 'Moyo',
            password: instructorPassword,
            role: 'INSTRUCTOR',
            isEmailVerified: true,
            isActive: true,
            bio: 'Senior Software Engineer and Coding Instructor with 5+ years of experience in web development and Python programming.',
            location: 'Bulawayo, Zimbabwe',
            website: 'https://sarahmoyo.dev',
            githubUsername: 'sarahmoyo',
            linkedinUrl: 'https://linkedin.com/in/sarahmoyo',
            twitterHandle: '@sarahmoyo_dev',
            xpPoints: 2500,
            level: 8,
            streak: 15
        }
    })

    // Create regular user
    const userPassword = await bcrypt.hash('user123', 12)
    const user = await prisma.user.upsert({
        where: { email: 'user@wecodezw.com' },
        update: {},
        create: {
            email: 'user@wecodezw.com',
            username: 'learner',
            firstName: 'Tendai',
            lastName: 'Chikwava',
            password: userPassword,
            role: 'USER',
            isEmailVerified: true,
            isActive: true,
            bio: 'Aspiring software developer learning web development and Python programming.',
            location: 'Chitungwiza, Zimbabwe',
            website: 'https://tendai-portfolio.com',
            githubUsername: 'tendai-dev',
            linkedinUrl: 'https://linkedin.com/in/tendai-chikwava',
            twitterHandle: '@tendai_dev',
            xpPoints: 450,
            level: 3,
            streak: 7
        }
    })

    // Create additional users for schools
    const schoolAdminPassword = await bcrypt.hash('school123', 12)
    const schoolAdmin = await prisma.user.upsert({
        where: { email: 'school@hararehigh.edu.zw' },
        update: {},
        create: {
            email: 'school@hararehigh.edu.zw',
            username: 'hararehigh_admin',
            firstName: 'Dr. Patricia',
            lastName: 'Mukarati',
            password: schoolAdminPassword,
            role: 'INSTRUCTOR',
            isEmailVerified: true,
            isActive: true,
            bio: 'Principal of Harare High School and passionate educator',
            location: 'Harare, Zimbabwe',
            xpPoints: 1200,
            level: 5,
            streak: 30
        }
    })

    const studentPassword = await bcrypt.hash('student123', 12)
    const student = await prisma.user.upsert({
        where: { email: 'student@hararehigh.edu.zw' },
        update: {},
        create: {
            email: 'student@hararehigh.edu.zw',
            username: 'harare_student',
            firstName: 'Takudzwa',
            lastName: 'Mupfudza',
            password: studentPassword,
            role: 'USER',
            isEmailVerified: true,
            isActive: true,
            bio: 'High school student passionate about technology and coding',
            location: 'Harare, Zimbabwe',
            xpPoints: 180,
            level: 2,
            streak: 5
        }
    })

    console.log('✅ Users created successfully!')

    // Create sample schools
    const harareHigh = await prisma.school.upsert({
        where: { email: 'school@hararehigh.edu.zw' },
        update: {},
        create: {
            name: 'Harare High School',
            email: 'school@hararehigh.edu.zw',
            phone: '+263 4 123456',
            address: '123 Samora Machel Avenue, Harare',
            city: 'Harare',
            province: 'Harare',
            country: 'Zimbabwe',
            website: 'https://hararehigh.edu.zw',
            description: 'Premier high school in Harare with focus on STEM education',
            adminId: schoolAdmin.id,
            approverId: admin.id,
            isApproved: true,
            status: 'APPROVED',
            studentCount: 1200,
            foundedYear: 1985
        }
    })

    const bulawayoTech = await prisma.school.upsert({
        where: { email: 'info@bulawayotech.edu.zw' },
        update: {},
        create: {
            name: 'Bulawayo Technical College',
            email: 'info@bulawayotech.edu.zw',
            phone: '+263 9 987654',
            address: '456 Leopold Takawira Street, Bulawayo',
            city: 'Bulawayo',
            province: 'Bulawayo',
            country: 'Zimbabwe',
            website: 'https://bulawayotech.edu.zw',
            description: 'Technical college specializing in computer science and engineering',
            adminId: instructor.id,
            approverId: admin.id,
            isApproved: true,
            status: 'APPROVED',
            studentCount: 800,
            foundedYear: 1990
        }
    })

    const pendingSchool = await prisma.school.upsert({
        where: { email: 'admin@newcollege.edu.zw' },
        update: {},
        create: {
            name: 'New College of Technology',
            email: 'admin@newcollege.edu.zw',
            phone: '+263 4 555666',
            address: '789 Enterprise Road, Harare',
            city: 'Harare',
            province: 'Harare',
            country: 'Zimbabwe',
            website: 'https://newcollege.edu.zw',
            description: 'New technology-focused college seeking approval',
            adminId: user.id,
            approverId: admin.id,
            isApproved: false,
            status: 'PENDING',
            studentCount: 300,
            foundedYear: 2023
        }
    })

    // Add students to schools
    await prisma.user.update({
        where: { id: student.id },
        data: { schoolId: harareHigh.id }
    })

    console.log('✅ Schools created successfully!')

    // Create sample clubs
    const techClub = await prisma.club.upsert({
        where: { inviteCode: 'TECH2024' },
        update: {},
        create: {
            name: 'Tech Innovators Club',
            description: 'A club for students passionate about technology and innovation',
            category: 'TECHNOLOGY',
            maxMembers: 50,
            inviteCode: 'TECH2024',
            schoolId: harareHigh.id,
            creatorId: schoolAdmin.id,
            isActive: true
        }
    })

    const codingClub = await prisma.club.upsert({
        where: { inviteCode: 'CODE2024' },
        update: {},
        create: {
            name: 'Coding Masters',
            description: 'Advanced programming and software development club',
            category: 'TECHNOLOGY',
            maxMembers: 30,
            inviteCode: 'CODE2024',
            schoolId: bulawayoTech.id,
            creatorId: instructor.id,
            isActive: true
        }
    })

    const scienceClub = await prisma.club.upsert({
        where: { inviteCode: 'SCIENCE2024' },
        update: {},
        create: {
            name: 'Science Explorers',
            description: 'Exploring the wonders of science through experiments and projects',
            category: 'SCIENCE',
            maxMembers: 40,
            inviteCode: 'SCIENCE2024',
            schoolId: harareHigh.id,
            creatorId: schoolAdmin.id,
            isActive: true
        }
    })

    // Add club members
    await prisma.clubMember.upsert({
        where: {
            clubId_userId: {
                clubId: techClub.id,
                userId: schoolAdmin.id
            }
        },
        update: {},
        create: {
            clubId: techClub.id,
            userId: schoolAdmin.id,
            role: 'ADMIN',
            isActive: true
        }
    })

    await prisma.clubMember.upsert({
        where: {
            clubId_userId: {
                clubId: techClub.id,
                userId: student.id
            }
        },
        update: {},
        create: {
            clubId: techClub.id,
            userId: student.id,
            role: 'MEMBER',
            isActive: true
        }
    })

    console.log('✅ Clubs created successfully!')

    // Create Web Fundamentals track
    const webTrack = await prisma.track.upsert({
        where: { slug: 'web-fundamentals' },
        update: {},
        create: {
            title: 'Web Fundamentals',
            slug: 'web-fundamentals',
            description: 'Master HTML, CSS, and JavaScript to build modern, responsive websites. Learn the fundamentals of web development and create your first web applications.',
            shortDescription: 'Learn HTML, CSS, and JavaScript basics',
            difficulty: 'BEGINNER',
            category: 'WEB_DEVELOPMENT',
            estimatedHours: 40,
            price: 0,
            isPublished: true,
            isPremium: false,
            prerequisites: 'No prior experience required',
            learningOutcomes: 'Build responsive websites, understand web standards, create interactive elements',
            tags: 'HTML,CSS,JavaScript,Web Development,Frontend',
            sortOrder: 1
        }
    })

    // Create Python Programming track
    const pythonTrack = await prisma.track.upsert({
        where: { slug: 'python-programming' },
        update: {},
        create: {
            title: 'Python Programming',
            slug: 'python-programming',
            description: 'Learn Python from basics to advanced concepts including web development, data science, and automation. Perfect for beginners and intermediate developers.',
            shortDescription: 'Master Python programming language',
            difficulty: 'BEGINNER',
            category: 'WEB_DEVELOPMENT',
            estimatedHours: 60,
            price: 0,
            isPublished: true,
            isPremium: false,
            prerequisites: 'Basic computer literacy',
            learningOutcomes: 'Write Python programs, understand OOP, work with data structures',
            tags: 'Python,Programming,OOP,Data Structures',
            sortOrder: 2
        }
    })

    // Create Mobile Development track
    const mobileTrack = await prisma.track.upsert({
        where: { slug: 'mobile-development' },
        update: {},
        create: {
            title: 'Mobile Development',
            slug: 'mobile-development',
            description: 'Learn to build mobile applications using React Native. Create cross-platform apps that work on both iOS and Android.',
            shortDescription: 'Build mobile apps with React Native',
            difficulty: 'INTERMEDIATE',
            category: 'MOBILE_DEVELOPMENT',
            estimatedHours: 80,
            price: 0,
            isPublished: true,
            isPremium: false,
            prerequisites: 'Basic JavaScript knowledge',
            learningOutcomes: 'Build mobile apps, understand React Native, deploy to app stores',
            tags: 'React Native,Mobile,JavaScript,Cross-platform',
            sortOrder: 3
        }
    })

    // Create Advanced Web Development track
    const advancedWebTrack = await prisma.track.upsert({
        where: { slug: 'advanced-web-development' },
        update: {},
        create: {
            title: 'Advanced Web Development',
            slug: 'advanced-web-development',
            description: 'Master advanced web development concepts including React, Node.js, and full-stack development.',
            shortDescription: 'Advanced web development with modern frameworks',
            difficulty: 'ADVANCED',
            category: 'WEB_DEVELOPMENT',
            estimatedHours: 100,
            price: 0,
            isPublished: true,
            isPremium: false,
            prerequisites: 'Basic HTML, CSS, and JavaScript knowledge',
            learningOutcomes: 'Build full-stack applications, understand modern frameworks, deploy applications',
            tags: 'React,Node.js,Full-stack,Modern Web',
            sortOrder: 4
        }
    })

    console.log('✅ Tracks created successfully!')

    // Create courses
    const htmlCourse = await prisma.course.upsert({
        where: { slug: 'html-mastery' },
        update: {},
        create: {
            title: 'HTML Mastery',
            slug: 'html-mastery',
            description: 'Complete guide to HTML5 including semantic elements, forms, and accessibility',
            shortDescription: 'Master HTML5 fundamentals',
            difficulty: 'BEGINNER',
            category: 'WEB_DEVELOPMENT',
            estimatedHours: 15,
            price: 0,
            isPublished: true,
            isPremium: false,
            prerequisites: 'No prior experience required',
            learningOutcomes: 'Create semantic HTML, build forms, understand accessibility',
            tags: 'HTML,HTML5,Semantic,Accessibility',
            creatorId: instructor.id,
            trackId: webTrack.id,
            sortOrder: 1
        }
    })

    const cssCourse = await prisma.course.upsert({
        where: { slug: 'css-styling' },
        update: {},
        create: {
            title: 'CSS Styling & Layout',
            slug: 'css-styling',
            description: 'Learn modern CSS including Flexbox, Grid, and responsive design',
            shortDescription: 'Modern CSS styling and layout',
            difficulty: 'BEGINNER',
            category: 'WEB_DEVELOPMENT',
            estimatedHours: 20,
            price: 0,
            isPublished: true,
            isPremium: false,
            prerequisites: 'Basic HTML knowledge',
            learningOutcomes: 'Create responsive layouts, use modern CSS features, style effectively',
            tags: 'CSS,Flexbox,Grid,Responsive Design',
            creatorId: instructor.id,
            trackId: webTrack.id,
            sortOrder: 2
        }
    })

    const reactCourse = await prisma.course.upsert({
        where: { slug: 'react-fundamentals' },
        update: {},
        create: {
            title: 'React Fundamentals',
            slug: 'react-fundamentals',
            description: 'Learn React.js from basics to advanced concepts including hooks and state management',
            shortDescription: 'Master React.js development',
            difficulty: 'INTERMEDIATE',
            category: 'WEB_DEVELOPMENT',
            estimatedHours: 30,
            price: 0,
            isPublished: true,
            isPremium: false,
            prerequisites: 'JavaScript fundamentals',
            learningOutcomes: 'Build React applications, understand hooks, manage state',
            tags: 'React,JavaScript,Hooks,State Management',
            creatorId: instructor.id,
            trackId: advancedWebTrack.id,
            sortOrder: 1
        }
    })

    console.log('✅ Courses created successfully!')

    // Create lessons for courses
    const htmlLessons = [
        {
            title: 'Introduction to HTML',
            slug: 'intro-to-html',
            content: 'Learn the basics of HTML structure and elements',
            sortOrder: 1,
            isPublished: true,
            courseId: htmlCourse.id
        },
        {
            title: 'Semantic HTML Elements',
            slug: 'semantic-elements',
            content: 'Understanding semantic HTML and its importance for accessibility',
            sortOrder: 2,
            isPublished: true,
            courseId: htmlCourse.id
        },
        {
            title: 'HTML Forms',
            slug: 'html-forms',
            content: 'Creating interactive forms with HTML',
            sortOrder: 3,
            isPublished: true,
            courseId: htmlCourse.id
        }
    ]

    for (const lessonData of htmlLessons) {
        await prisma.lesson.upsert({
            where: {
                courseId_slug: {
                    courseId: htmlCourse.id,
                    slug: lessonData.slug
                }
            },
            update: {},
            create: lessonData
        })
    }

    // Create lessons for Web Fundamentals track
    const webLessons = [
        {
            title: 'Introduction to HTML',
            slug: 'introduction-to-html',
            content: 'Learn the basics of HTML, the markup language that structures web content.',
            sortOrder: 1,
            isPublished: true,
            trackId: webTrack.id
        },
        {
            title: 'CSS Styling Basics',
            slug: 'css-styling-basics',
            content: 'Learn how to style your HTML elements with CSS to create beautiful web pages.',
            sortOrder: 2,
            isPublished: true,
            trackId: webTrack.id
        },
        {
            title: 'JavaScript Fundamentals',
            slug: 'javascript-fundamentals',
            content: 'Introduction to JavaScript programming language and its core concepts.',
            sortOrder: 3,
            isPublished: true,
            trackId: webTrack.id
        }
    ]

    for (const lessonData of webLessons) {
        await prisma.lesson.upsert({
            where: {
                trackId_slug: {
                    trackId: webTrack.id,
                    slug: lessonData.slug
                }
            },
            update: {},
            create: lessonData
        })
    }

    // Create AI course requests
    const aiRequests = [
        {
            title: 'Machine Learning for Beginners',
            description: 'A comprehensive course on machine learning fundamentals for beginners',
            category: 'DATA_SCIENCE',
            difficulty: 'BEGINNER',
            estimatedHours: 45,
            status: 'COMPLETED',
            userId: user.id,
            aiRequestId: 'ai_req_001'
        },
        {
            title: 'Blockchain Development',
            description: 'Learn to build decentralized applications using blockchain technology',
            category: 'BLOCKCHAIN',
            difficulty: 'ADVANCED',
            estimatedHours: 60,
            status: 'PROCESSING',
            userId: instructor.id,
            aiRequestId: 'ai_req_002'
        },
        {
            title: 'Game Development with Unity',
            description: 'Create 2D and 3D games using Unity game engine',
            category: 'GAME_DEVELOPMENT',
            difficulty: 'INTERMEDIATE',
            estimatedHours: 50,
            status: 'PENDING',
            userId: student.id,
            aiRequestId: 'ai_req_003'
        }
    ]

    for (const requestData of aiRequests) {
        await prisma.aICourseRequest.upsert({
            where: { aiRequestId: requestData.aiRequestId },
            update: {},
            create: requestData
        })
    }

    // Create a course from AI request
    if (aiRequests[0]) {
        await prisma.course.upsert({
            where: { aiRequestId: 'ai_req_001' },
            update: {},
            create: {
                title: 'Machine Learning for Beginners',
                slug: 'machine-learning-beginners',
                description: 'A comprehensive course on machine learning fundamentals for beginners',
                shortDescription: 'Learn machine learning from scratch',
                difficulty: 'BEGINNER',
                category: 'DATA_SCIENCE',
                estimatedHours: 45,
                price: 0,
                isPublished: true,
                isPremium: false,
                prerequisites: 'Basic Python knowledge',
                learningOutcomes: 'Understand ML concepts, build simple models, use popular libraries',
                tags: 'Machine Learning,Python,Data Science,AI',
                creatorId: instructor.id,
                aiRequestId: 'ai_req_001',
                sortOrder: 1
            }
        })
    }

    console.log('✅ AI Course Requests created successfully!')

    // Create challenges
    const challenges = [
        {
            title: 'Build a Tribute Page',
            slug: 'tribute-page',
            description: 'Create a tribute page for someone you admire using HTML and CSS.',
            instructions: 'Build a responsive tribute page with proper HTML structure and CSS styling.',
            starterCode: '<!DOCTYPE html>\n<html>\n<head>\n  <title>Tribute Page</title>\n</head>\n<body>\n  <!-- Your code here -->\n</body>\n</html>',
            testCases: JSON.stringify([
                { input: 'HTML structure', expected: 'Valid HTML5 document' },
                { input: 'CSS styling', expected: 'Responsive design with CSS' }
            ]),
            difficulty: 'BEGINNER' as const,
            category: 'WEB_DEVELOPMENT' as const,
            points: 10,
            isPublished: true,
            tags: 'HTML,CSS,Responsive Design'
        },
        {
            title: 'JavaScript Calculator',
            slug: 'javascript-calculator',
            description: 'Build a simple calculator using HTML, CSS, and JavaScript.',
            instructions: 'Create a functional calculator with basic arithmetic operations.',
            starterCode: '// JavaScript Calculator\nfunction calculate(a, b, operation) {\n  // Your code here\n}',
            testCases: JSON.stringify([
                { input: 'calculate(2, 3, "+")', expected: 5 },
                { input: 'calculate(10, 5, "-")', expected: 5 },
                { input: 'calculate(4, 6, "*")', expected: 24 }
            ]),
            difficulty: 'BEGINNER' as const,
            category: 'WEB_DEVELOPMENT' as const,
            points: 15,
            isPublished: true,
            tags: 'JavaScript,HTML,CSS,Calculator'
        },
        {
            title: 'React Todo App',
            slug: 'react-todo-app',
            description: 'Build a todo application using React with add, edit, and delete functionality.',
            instructions: 'Create a React todo app with state management and local storage.',
            starterCode: 'import React, { useState } from "react";\n\nfunction TodoApp() {\n  // Your code here\n}',
            testCases: JSON.stringify([
                { input: 'Add todo', expected: 'Todo added to list' },
                { input: 'Delete todo', expected: 'Todo removed from list' },
                { input: 'Edit todo', expected: 'Todo updated successfully' }
            ]),
            difficulty: 'INTERMEDIATE' as const,
            category: 'WEB_DEVELOPMENT' as const,
            points: 25,
            isPublished: true,
            tags: 'React,JavaScript,State Management'
        }
    ]

    for (const challengeData of challenges) {
        await prisma.challenge.upsert({
            where: { slug: challengeData.slug },
            update: {},
            create: challengeData
        })
    }

    // Create sample submissions for the user
    const challenge = await prisma.challenge.findFirst()
    if (challenge) {
        await prisma.submission.create({
            data: {
                userId: user.id,
                challengeId: challenge.id,
                code: 'console.log("Hello, World!");',
                language: 'javascript',
                status: 'ACCEPTED',
                score: challenge.points,
                feedback: 'Great job! Your solution works perfectly.',
                submittedAt: new Date()
            }
        })
    }

    // Create some sample enrollments
    await prisma.enrollment.upsert({
        where: {
            userId_trackId: {
                userId: user.id,
                trackId: webTrack.id
            }
        },
        update: {},
        create: {
            userId: user.id,
            trackId: webTrack.id,
            progress: 65.5
        }
    })

    await prisma.enrollment.upsert({
        where: {
            userId_trackId: {
                userId: instructor.id,
                trackId: pythonTrack.id
            }
        },
        update: {},
        create: {
            userId: instructor.id,
            trackId: pythonTrack.id,
            progress: 100,
            completedAt: new Date()
        }
    })

    await prisma.enrollment.upsert({
        where: {
            userId_trackId: {
                userId: student.id,
                trackId: webTrack.id
            }
        },
        update: {},
        create: {
            userId: student.id,
            trackId: webTrack.id,
            progress: 25.0
        }
    })

    // Create course enrollments
    await prisma.courseEnrollment.upsert({
        where: {
            userId_courseId: {
                userId: user.id,
                courseId: htmlCourse.id
            }
        },
        update: {},
        create: {
            userId: user.id,
            courseId: htmlCourse.id,
            progress: 80.0
        }
    })

    await prisma.courseEnrollment.upsert({
        where: {
            userId_courseId: {
                userId: student.id,
                courseId: cssCourse.id
            }
        },
        update: {},
        create: {
            userId: student.id,
            courseId: cssCourse.id,
            progress: 45.0
        }
    })

    console.log('✅ Database seeded successfully!')
    console.log('📋 Login Credentials:')
    console.log('👑 Admin: admin@wecodezw.com / admin123')
    console.log('👨‍🏫 Instructor: instructor@wecodezw.com / instructor123')
    console.log('👤 User: user@wecodezw.com / user123')
    console.log('🏫 School Admin: school@hararehigh.edu.zw / school123')
    console.log('🎓 Student: student@hararehigh.edu.zw / student123')
    console.log('')
    console.log('🏫 Sample Schools:')
    console.log('- Harare High School (Approved)')
    console.log('- Bulawayo Technical College (Approved)')
    console.log('- New College of Technology (Pending)')
    console.log('')
    console.log('👥 Sample Clubs:')
    console.log('- Tech Innovators Club (TECH2024)')
    console.log('- Coding Masters (CODE2024)')
    console.log('- Science Explorers (SCIENCE2024)')
}

main()
    .catch((e) => {
        console.error('❌ Error seeding database:', e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    }) 