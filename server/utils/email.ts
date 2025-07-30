export interface EmailOptions {
    to: string
    subject: string
    html: string
    text?: string
}

// Simplified email function that logs instead of sending
export const sendEmail = async (options: EmailOptions): Promise<boolean> => {
    try {
        console.log('📧 Email would be sent:')
        console.log('To:', options.to)
        console.log('Subject:', options.subject)
        console.log('Content:', options.html.substring(0, 100) + '...')
        return true
    } catch (error) {
        console.error('Error in email function:', error)
        return false
    }
}

// Email templates
export const emailTemplates = {
    welcome: (firstName: string, username: string) => ({
        subject: 'Welcome to WeCodeZW! 🚀',
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
                <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 10px;">
                    <h1 style="color: white; margin: 0; font-size: 28px;">Welcome to WeCodeZW!</h1>
                    <p style="color: white; margin: 10px 0 0 0; font-size: 16px;">Your coding journey starts here</p>
                </div>
                
                <div style="background: white; padding: 30px; border-radius: 10px; margin-top: 20px;">
                    <h2 style="color: #333; margin-top: 0;">Hi ${firstName}! 👋</h2>
                    <p style="color: #666; line-height: 1.6;">
                        Welcome to WeCodeZW, your free platform for learning to code! We're excited to have you join our community of learners and developers.
                    </p>
                    
                    <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <h3 style="color: #333; margin-top: 0;">Your Account Details:</h3>
                        <p style="color: #666; margin: 5px 0;"><strong>Username:</strong> @${username}</p>
                        <p style="color: #666; margin: 5px 0;"><strong>Platform:</strong> WeCodeZW</p>
                    </div>
                    
                    <h3 style="color: #333;">What's Next?</h3>
                    <ul style="color: #666; line-height: 1.6;">
                        <li>🎯 Complete your first coding challenge</li>
                        <li>📚 Explore our learning tracks</li>
                        <li>🏆 Earn XP and climb the leaderboard</li>
                        <li>📜 Get certified in your chosen track</li>
                    </ul>
                    
                    <div style="text-align: center; margin: 30px 0;">
                        <a href="${process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/dashboard" 
                           style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; display: inline-block; font-weight: bold;">
                            Start Learning Now
                        </a>
                    </div>
                    
                    <p style="color: #666; font-size: 14px; text-align: center;">
                        Happy coding!<br>
                        The WeCodeZW Team
                    </p>
                </div>
                
                <div style="text-align: center; margin-top: 20px; color: #999; font-size: 12px;">
                    <p>This email was sent from WeCodeZW - Your Free Coding Platform</p>
                </div>
            </div>
        `
    }),

    passwordReset: (firstName: string, resetToken: string) => ({
        subject: 'Reset Your WeCodeZW Password',
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
                <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 10px;">
                    <h1 style="color: white; margin: 0; font-size: 28px;">Password Reset</h1>
                    <p style="color: white; margin: 10px 0 0 0; font-size: 16px;">WeCodeZW Account Security</p>
                </div>
                
                <div style="background: white; padding: 30px; border-radius: 10px; margin-top: 20px;">
                    <h2 style="color: #333; margin-top: 0;">Hi ${firstName}! 🔐</h2>
                    <p style="color: #666; line-height: 1.6;">
                        We received a request to reset your password for your WeCodeZW account. If you didn't make this request, you can safely ignore this email.
                    </p>
                    
                    <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <h3 style="color: #333; margin-top: 0;">Reset Your Password:</h3>
                        <p style="color: #666; margin: 5px 0;">Click the button below to create a new password. This link will expire in 1 hour for security.</p>
                    </div>
                    
                    <div style="text-align: center; margin: 30px 0;">
                        <a href="${process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/auth/reset-password?token=${resetToken}" 
                           style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; display: inline-block; font-weight: bold;">
                            Reset Password
                        </a>
                    </div>
                    
                    <p style="color: #666; font-size: 14px;">
                        <strong>Security Note:</strong> This link will expire in 1 hour. If you need a new reset link, please request another password reset from your account settings.
                    </p>
                    
                    <p style="color: #666; font-size: 14px; text-align: center;">
                        If you didn't request this password reset, please ignore this email.<br>
                        The WeCodeZW Team
                    </p>
                </div>
                
                <div style="text-align: center; margin-top: 20px; color: #999; font-size: 12px;">
                    <p>This email was sent from WeCodeZW - Your Free Coding Platform</p>
                </div>
            </div>
        `
    }),

    emailVerification: (firstName: string, verificationToken: string) => ({
        subject: 'Verify Your WeCodeZW Email Address',
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
                <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 10px;">
                    <h1 style="color: white; margin: 0; font-size: 28px;">Email Verification</h1>
                    <p style="color: white; margin: 10px 0 0 0; font-size: 16px;">WeCodeZW Account Verification</p>
                </div>
                
                <div style="background: white; padding: 30px; border-radius: 10px; margin-top: 20px;">
                    <h2 style="color: #333; margin-top: 0;">Hi ${firstName}! ✉️</h2>
                    <p style="color: #666; line-height: 1.6;">
                        Thank you for joining WeCodeZW! To complete your registration and unlock all features, please verify your email address.
                    </p>
                    
                    <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <h3 style="color: #333; margin-top: 0;">Verify Your Email:</h3>
                        <p style="color: #666; margin: 5px 0;">Click the button below to verify your email address and activate your account.</p>
                    </div>
                    
                    <div style="text-align: center; margin: 30px 0;">
                        <a href="${process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/auth/verify-email?token=${verificationToken}" 
                           style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; display: inline-block; font-weight: bold;">
                            Verify Email Address
                        </a>
                    </div>
                    
                    <p style="color: #666; font-size: 14px;">
                        <strong>Benefits of verifying your email:</strong>
                    </p>
                    <ul style="color: #666; line-height: 1.6;">
                        <li>🔓 Access to all learning tracks</li>
                        <li>🏆 Earn XP and achievements</li>
                        <li>📜 Get certified upon completion</li>
                        <li>🔔 Receive important updates</li>
                    </ul>
                    
                    <p style="color: #666; font-size: 14px; text-align: center;">
                        Welcome to the WeCodeZW community!<br>
                        The WeCodeZW Team
                    </p>
                </div>
                
                <div style="text-align: center; margin-top: 20px; color: #999; font-size: 12px;">
                    <p>This email was sent from WeCodeZW - Your Free Coding Platform</p>
                </div>
            </div>
        `
    }),

    challengeCompleted: (firstName: string, challengeTitle: string, xpEarned: number) => ({
        subject: `🎉 Challenge Completed: ${challengeTitle}`,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
                <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 10px;">
                    <h1 style="color: white; margin: 0; font-size: 28px;">🎉 Challenge Completed!</h1>
                    <p style="color: white; margin: 10px 0 0 0; font-size: 16px;">Great job on your achievement</p>
                </div>
                
                <div style="background: white; padding: 30px; border-radius: 10px; margin-top: 20px;">
                    <h2 style="color: #333; margin-top: 0;">Congratulations ${firstName}! 🏆</h2>
                    <p style="color: #666; line-height: 1.6;">
                        You've successfully completed the challenge: <strong>${challengeTitle}</strong>
                    </p>
                    
                    <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center;">
                        <h3 style="color: #333; margin-top: 0;">XP Earned</h3>
                        <div style="font-size: 32px; font-weight: bold; color: #667eea;">+${xpEarned} XP</div>
                        <p style="color: #666; margin: 5px 0;">Keep up the great work!</p>
                    </div>
                    
                    <div style="text-align: center; margin: 30px 0;">
                        <a href="${process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/dashboard" 
                           style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; display: inline-block; font-weight: bold;">
                            Continue Learning
                        </a>
                    </div>
                    
                    <p style="color: #666; font-size: 14px; text-align: center;">
                        You're making amazing progress!<br>
                        The WeCodeZW Team
                    </p>
                </div>
                
                <div style="text-align: center; margin-top: 20px; color: #999; font-size: 12px;">
                    <p>This email was sent from WeCodeZW - Your Free Coding Platform</p>
                </div>
            </div>
        `
    }),

    certificateEarned: (firstName: string, trackTitle: string, certificateId: string) => ({
        subject: `🎓 Certificate Earned: ${trackTitle}`,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
                <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 10px;">
                    <h1 style="color: white; margin: 0; font-size: 28px;">🎓 Certificate Earned!</h1>
                    <p style="color: white; margin: 10px 0 0 0; font-size: 16px;">Congratulations on your achievement</p>
                </div>
                
                <div style="background: white; padding: 30px; border-radius: 10px; margin-top: 20px;">
                    <h2 style="color: #333; margin-top: 0;">Congratulations ${firstName}! 🎉</h2>
                    <p style="color: #666; line-height: 1.6;">
                        You've successfully completed the <strong>${trackTitle}</strong> track and earned your certificate!
                    </p>
                    
                    <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center;">
                        <h3 style="color: #333; margin-top: 0;">Your Certificate</h3>
                        <p style="color: #666; margin: 5px 0;">Certificate ID: <strong>${certificateId}</strong></p>
                        <p style="color: #666; margin: 5px 0;">Track: <strong>${trackTitle}</strong></p>
                    </div>
                    
                    <div style="text-align: center; margin: 30px 0;">
                        <a href="${process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/certificates/${certificateId}" 
                           style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; display: inline-block; font-weight: bold;">
                            View Certificate
                        </a>
                    </div>
                    
                    <p style="color: #666; font-size: 14px;">
                        <strong>What's next?</strong>
                    </p>
                    <ul style="color: #666; line-height: 1.6;">
                        <li>📜 Download your certificate</li>
                        <li>🔗 Share it on LinkedIn</li>
                        <li>📚 Start another learning track</li>
                        <li>🏆 Continue building your portfolio</li>
                    </ul>
                    
                    <p style="color: #666; font-size: 14px; text-align: center;">
                        You're officially certified!<br>
                        The WeCodeZW Team
                    </p>
                </div>
                
                <div style="text-align: center; margin-top: 20px; color: #999; font-size: 12px;">
                    <p>This email was sent from WeCodeZW - Your Free Coding Platform</p>
                </div>
            </div>
        `
    })
}

export default {
    sendEmail,
    emailTemplates
} 