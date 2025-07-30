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
            firstName: 'Admin',
            lastName: 'User',
            password: adminPassword,
            role: 'ADMIN',
            isEmailVerified: true,
            isActive: true
        }
    })

    // Create sample user
    const userPassword = await bcrypt.hash('password123', 12)
    const user = await prisma.user.upsert({
        where: { email: 'user@example.com' },
        update: {},
        create: {
            email: 'user@example.com',
            username: 'demo_user',
            firstName: 'Demo',
            lastName: 'User',
            password: userPassword,
            role: 'USER',
            isEmailVerified: true,
            isActive: true,
            xpPoints: 150
        }
    })

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

    // Create lessons for Web Fundamentals
    const webLessons = [
        {
            title: 'Introduction to HTML',
            slug: 'introduction-to-html',
            content: 'Learn the basics of HTML, the markup language that structures web content.',
            sortOrder: 1,
            isPublished: true
        },
        {
            title: 'CSS Styling Basics',
            slug: 'css-styling-basics',
            content: 'Learn how to style your HTML elements with CSS to create beautiful web pages.',
            sortOrder: 2,
            isPublished: true
        },
        {
            title: 'JavaScript Fundamentals',
            slug: 'javascript-fundamentals',
            content: 'Introduction to JavaScript programming language and its core concepts.',
            sortOrder: 3,
            isPublished: true
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
            create: {
                ...lessonData,
                trackId: webTrack.id
            }
        })
    }

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
            difficulty: 'BEGINNER',
            category: 'WEB_DEVELOPMENT',
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
            difficulty: 'BEGINNER',
            category: 'WEB_DEVELOPMENT',
            points: 15,
            isPublished: true,
            tags: 'JavaScript,HTML,CSS,Calculator'
        }
    ]

    for (const challengeData of challenges) {
        await prisma.challenge.upsert({
            where: { slug: challengeData.slug },
            update: {},
            create: challengeData
        })
    }

    // Create sample submissions
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

    console.log('✅ Database seeded successfully!')
    console.log(`👤 Admin user: admin@wecodezw.com / admin123`)
    console.log(`👤 Demo user: user@example.com / password123`)
}

main()
    .catch((e) => {
        console.error('❌ Error seeding database:', e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    }) 