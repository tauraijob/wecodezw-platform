export default defineNuxtRouteMiddleware((to) => {
    // Skip middleware on server-side
    if (process.server) return

    const token = useCookie('auth-token')
    const userData = useCookie('user-data')

    // If not logged in, redirect to login
    if (!token.value) {
        return navigateTo('/auth/login')
    }

    // Parse user data to check role
    let user = null
    try {
        if (userData.value) {
            if (typeof userData.value === 'object') {
                user = userData.value
            } else if (typeof userData.value === 'string') {
                user = JSON.parse(userData.value)
            }
        }
    } catch (error) {
        console.error('Error parsing user data in admin middleware:', error)
        return navigateTo('/auth/login')
    }

    // If user is not admin, redirect to regular dashboard
    if (!user || user.role !== 'ADMIN') {
        console.log('Non-admin user trying to access admin route, redirecting to dashboard')
        return navigateTo('/dashboard')
    }

    // If accessing auth pages and already logged in as admin, redirect to admin dashboard
    if (to.path.startsWith('/auth/') && token.value && user.role === 'ADMIN') {
        return navigateTo('/admin/dashboard')
    }
}) 