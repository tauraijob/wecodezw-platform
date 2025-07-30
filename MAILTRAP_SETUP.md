# Mailtrap Email Setup for WeCodeZW

This guide explains how to configure Mailtrap for email functionality in your WeCodeZW platform.

## What is Mailtrap?

Mailtrap is a testing tool that captures emails from your development environment, allowing you to test email functionality without sending real emails to users.

## Setup Instructions

### 1. Create a Mailtrap Account

1. Go to [mailtrap.io](https://mailtrap.io)
2. Sign up for a free account
3. Verify your email address

### 2. Get Your Mailtrap Credentials

1. Log in to your Mailtrap dashboard
2. Go to your Inboxes
3. Click on your default inbox (or create a new one)
4. Go to the "SMTP Settings" tab
5. Select "Show Credentials"
6. Copy the following information:
   - **Host**: Usually `smtp.mailtrap.io`
   - **Port**: Usually `2525` (or `465` for SSL)
   - **Username**: Your Mailtrap username
   - **Password**: Your Mailtrap password

### 3. Configure Environment Variables

Add the following variables to your `.env` file:

```env
# Mailtrap Email Configuration
MAILTRAP_HOST="smtp.mailtrap.io"
MAILTRAP_PORT="2525"
MAILTRAP_USER="your-mailtrap-username"
MAILTRAP_PASS="your-mailtrap-password"

# Site Configuration (for email links)
NUXT_PUBLIC_SITE_URL="http://localhost:3000"
```

### 4. Test Email Functionality

Once configured, the following email features will work:

- **Welcome Email**: Sent when users register
- **Email Verification**: Sent when users register (requires verification)
- **Password Reset**: Sent when users request password reset
- **Challenge Completion**: Sent when users complete coding challenges
- **Certificate Earned**: Sent when users earn certificates

### 5. View Sent Emails

1. Go to your Mailtrap dashboard
2. Click on your inbox
3. You'll see all emails sent by your application
4. Click on any email to view its content, HTML, and headers

## Email Templates

The platform includes beautiful, responsive email templates for:

- Welcome emails with platform introduction
- Password reset with secure links
- Email verification with activation links
- Challenge completion notifications
- Certificate earned celebrations

## Security Features

- All email links include secure tokens
- Password reset tokens expire after 1 hour
- Email verification tokens are single-use
- All emails are sent through secure SMTP

## Troubleshooting

### Common Issues

1. **Emails not sending**: Check your Mailtrap credentials
2. **Links not working**: Ensure `NUXT_PUBLIC_SITE_URL` is set correctly
3. **Authentication errors**: Verify username/password in Mailtrap

### Testing in Development

- All emails are captured by Mailtrap in development
- No real emails are sent to users
- Perfect for testing email functionality safely

## Production Setup

When moving to production, you can:

1. Replace Mailtrap with a real email service (SendGrid, AWS SES, etc.)
2. Update the SMTP configuration in `server/utils/email.ts`
3. Update the `NUXT_PUBLIC_SITE_URL` to your production domain

## Support

If you encounter any issues with email setup, check:

1. Mailtrap dashboard for delivery status
2. Server logs for SMTP errors
3. Environment variable configuration
4. Network connectivity to Mailtrap servers 