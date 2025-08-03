# WeCodeZW Environment Setup Guide

## Overview
WeCodeZW is a comprehensive coding education platform built with Nuxt 3, Prisma, and MySQL. This guide will help you set up the environment variables needed to run the platform.

## Required Environment Variables

Create a `.env` file in the root directory with the following variables:

### Database Configuration
```env
# MySQL Database Connection
DATABASE_URL="mysql://root:password@localhost:3306/wecodezw"
```

### JWT Authentication
```env
# JWT Secret Key (generate a strong random string)
JWT_SECRET="your-super-secret-jwt-key-change-this-in-production"
JWT_EXPIRES_IN="7d"
```

### Application Configuration
```env
# Site URL for email links and redirects
NUXT_PUBLIC_SITE_URL="http://localhost:3000"
NODE_ENV="development"
```

### Email Configuration (Mailtrap for Development)
```env
# Mailtrap SMTP Settings
MAILTRAP_HOST="smtp.mailtrap.io"
MAILTRAP_PORT="2525"
MAILTRAP_USER="your-mailtrap-username"
MAILTRAP_PASS="your-mailtrap-password"
```

### Admin Configuration
```env
# Default admin account (will be created during setup)
ADMIN_EMAIL="admin@wecodezw.com"
ADMIN_PASSWORD="admin123"
```

### Security
```env
# Password hashing rounds
BCRYPT_ROUNDS="12"
```

## Complete .env File Example

```env
# ========================================
# WeCodeZW Platform Environment Variables
# ========================================

# Database Configuration
DATABASE_URL="mysql://root:password@localhost:3306/wecodezw"

# JWT Authentication
JWT_SECRET="your-super-secret-jwt-key-change-this-in-production"
JWT_EXPIRES_IN="7d"

# Application Configuration
NUXT_PUBLIC_SITE_URL="http://localhost:3000"
NODE_ENV="development"

# Email Configuration (Mailtrap for development)
MAILTRAP_HOST="smtp.mailtrap.io"
MAILTRAP_PORT="2525"
MAILTRAP_USER="your-mailtrap-username"
MAILTRAP_PASS="your-mailtrap-password"

# Admin Configuration
ADMIN_EMAIL="admin@wecodezw.com"
ADMIN_PASSWORD="admin123"

# Security
BCRYPT_ROUNDS="12"
```

## Setup Instructions

### 1. Database Setup
1. Install MySQL on your system
2. Create a database named `wecodezw`:
   ```sql
   CREATE DATABASE wecodezw;
   ```
3. Update the `DATABASE_URL` with your MySQL credentials

### 2. Mailtrap Setup (for Email Testing)
1. Go to [mailtrap.io](https://mailtrap.io) and create a free account
2. Get your SMTP credentials from the dashboard
3. Update the Mailtrap variables in your `.env` file

### 3. JWT Secret Generation
Generate a strong JWT secret:
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

### 4. Install Dependencies
```bash
npm install
```

### 5. Database Migration
```bash
npx prisma migrate dev
```

### 6. Seed Database
```bash
npm run db:seed
```

### 7. Start Development Server
```bash
npm run dev
```

## Platform Features

Based on the codebase analysis, WeCodeZW includes:

### Core Features
- **User Management**: Registration, login, email verification, password reset
- **Learning Tracks**: Structured courses with lessons and challenges
- **Coding Challenges**: Interactive programming problems with code submission
- **Progress Tracking**: XP points, levels, streaks, achievements
- **Community**: Posts, comments, likes system
- **Certification**: Certificates upon track completion
- **Admin Panel**: User management, statistics, leaderboard

### Database Models
- Users (with roles: USER, ADMIN, INSTRUCTOR)
- Tracks (learning courses)
- Lessons (course content)
- Challenges (coding problems)
- Enrollments (user-track relationships)
- Progress (user-lesson progress)
- Submissions (challenge solutions)
- Certificates (achievement certificates)
- Achievements (gamification system)
- Posts & Comments (community features)

### Email Templates
- Welcome emails
- Email verification
- Password reset
- Challenge completion notifications
- Certificate earned celebrations

## Security Notes

1. **Never commit your `.env` file** to version control
2. **Change default passwords** in production
3. **Use strong JWT secrets** in production
4. **Enable HTTPS** in production
5. **Regularly update dependencies**

## Production Considerations

When deploying to production:

1. Use a production database (MySQL, PostgreSQL)
2. Set up a real email service (SendGrid, AWS SES)
3. Use environment-specific JWT secrets
4. Enable proper logging and monitoring
5. Set up SSL/TLS certificates
6. Configure proper backup strategies

## Troubleshooting

### Common Issues
1. **Database connection errors**: Check MySQL service and credentials
2. **Email not sending**: Verify Mailtrap credentials
3. **JWT errors**: Ensure JWT_SECRET is set
4. **Port conflicts**: Change NUXT_PUBLIC_SITE_URL if needed

### Support
- Check the `MAILTRAP_SETUP.md` file for detailed email configuration
- Review Prisma schema in `prisma/schema.prisma`
- Check server logs for detailed error messages 