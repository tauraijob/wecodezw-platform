import jwt from 'jsonwebtoken'
import { prisma } from './prisma'

export interface JWTPayload {
    userId: string
    email: string
    role: string
}

export const verifyToken = async (token: string): Promise<any> => {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JWTPayload
        
        // Get user from database
        const user = await prisma.user.findUnique({
            where: { id: decoded.userId }
        })

        if (!user || !user.isActive) {
            return null
        }

        return user
    } catch (error) {
        console.error('Token verification error:', error)
        return null
    }
}

export const generateToken = (payload: JWTPayload): string => {
    return jwt.sign(payload, process.env.JWT_SECRET!, {
        expiresIn: process.env.JWT_EXPIRES_IN || '7d'
    })
} 