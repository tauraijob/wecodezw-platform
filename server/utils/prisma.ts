import { PrismaClient } from '@prisma/client'

declare global {
    var __prisma: PrismaClient | undefined
}

// Prevent multiple instances of Prisma Client in development
export const prisma = global.__prisma || new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
})

if (process.env.NODE_ENV === 'development') {
    global.__prisma = prisma
}

// Graceful shutdown
process.on('beforeExit', async () => {
    await prisma.$disconnect()
}) 