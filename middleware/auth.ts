import jwt from 'jsonwebtoken'

export default defineNuxtRouteMiddleware((to) => {
    // Skip middleware on server-side
    if (process.server) return

    const token = useCookie('auth-token')

    // If accessing auth pages and already logged in, redirect to dashboard
    if (to.path.startsWith('/auth/') && token.value) {
        return navigateTo('/dashboard')
    }

    // If accessing protected pages and not logged in, redirect to login
    if (to.path.startsWith('/dashboard') && !token.value) {
        return navigateTo('/auth/login')
    }
}) 