<template>
  <div>
    <!-- Floating Code Elements Background -->
    <div class="floating-shapes">
      <div class="floating-code" style="top: 10%; left: 10%; animation-delay: 0s;">
        const login = () => { return 'welcome'; }
      </div>
      <div class="floating-code" style="top: 20%; left: 80%; animation-delay: -3s;">
        &lt;Login /&gt; 
      </div>
      <div class="floating-code" style="top: 30%; left: 15%; animation-delay: -6s;">
        function authenticate() { return success; }
      </div>
      <div class="floating-code" style="top: 40%; left: 70%; animation-delay: -9s;">
        npm install security
      </div>
      <div class="floating-code" style="top: 50%; left: 25%; animation-delay: -12s;">
        git commit -m "user login"
      </div>
    </div>

    <!-- Login Section -->
    <section class="relative py-20 lg:py-32">
      <div class="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-cyan-500/20"></div>
      <div class="relative max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8">
          <h1 class="text-3xl font-bold text-white mb-2">
            Welcome Back to <span class="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text">WeCode</span>
          </h1>
          <p class="text-gray-300">Continue your coding journey</p>
        </div>

                 <div class="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8">
           <!-- Error Message -->
           <div v-if="error" class="mb-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300 text-sm">
             {{ error }}
           </div>
           
           <form @submit.prevent="handleLogin" class="space-y-6">
            <div>
              <label for="email" class="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white/20 transition-all"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label for="password" class="block text-sm font-medium text-gray-300 mb-2">Password</label>
              <input
                id="password"
                v-model="form.password"
                type="password"
                required
                class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white/20 transition-all"
                placeholder="Enter your password"
              />
            </div>

            <div class="flex items-center justify-between">
              <label class="flex items-center">
                <input type="checkbox" v-model="form.remember" class="rounded border-white/20 bg-white/10 text-blue-500 focus:ring-blue-500">
                <span class="ml-2 text-sm text-gray-300">Remember me</span>
              </label>
              <NuxtLink to="/auth/forgot-password" class="text-sm text-blue-400 hover:text-blue-300 transition-colors">
                Forgot password?
              </NuxtLink>
            </div>

            <button
              type="submit"
              :disabled="loading"
              class="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-semibold transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ loading ? 'Signing in...' : 'Sign In' }}
            </button>
          </form>

          <div class="mt-6 text-center">
            <p class="text-gray-300">
              Don't have an account? 
              <NuxtLink to="/auth/register" class="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                Sign up for free
              </NuxtLink>
            </p>
          </div>

          <div class="mt-6">
            <div class="relative">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-white/20"></div>
              </div>
              <div class="relative flex justify-center text-sm">
                <span class="px-2 bg-transparent text-gray-400">Or continue with</span>
              </div>
            </div>

            <div class="mt-6 grid grid-cols-2 gap-3">
              <button class="w-full inline-flex justify-center py-2 px-4 border border-white/20 rounded-lg shadow-sm bg-white/10 text-sm font-medium text-white hover:bg-white/20 transition-all">
                <svg class="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span class="ml-2">Google</span>
              </button>

              <button class="w-full inline-flex justify-center py-2 px-4 border border-white/20 rounded-lg shadow-sm bg-white/10 text-sm font-medium text-white hover:bg-white/20 transition-all">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
                <span class="ml-2">GitHub</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// SEO Meta
useHead({
  title: 'Login - WeCodeZW',
  meta: [
    { name: 'description', content: 'Sign in to your WeCodeZW account and continue your coding journey' }
  ]
})

// Form data
const form = ref({
  email: '',
  password: '',
  remember: false
})

const loading = ref(false)
const error = ref('')

// Handle login
const handleLogin = async () => {
  loading.value = true
  error.value = ''
  
  try {
    console.log('Attempting login with:', form.value.email)
    
    const response = await $fetch('/api/auth/login', {
      method: 'POST',
      body: {
        email: form.value.email,
        password: form.value.password
      }
    })

    console.log('Login response:', response)

    if (response && response.success) {
      // Store token in cookie
      const token = useCookie('auth-token', {
        maxAge: form.value.remember ? 7 * 24 * 60 * 60 : 24 * 60 * 60 // 7 days or 1 day
      })
      token.value = response.token

      // Store user data
      const user = useCookie('user-data')
      try {
        user.value = JSON.stringify(response.user)
        console.log('User data stored:', response.user)
      } catch (error) {
        console.error('Error storing user data:', error)
        error.value = 'Error storing user data. Please try again.'
        return
      }

             console.log('Login successful, redirecting to dashboard...')
       
       // Redirect based on user role
       if (response.user.role === 'ADMIN') {
         console.log('Admin user detected, redirecting to admin dashboard...')
         window.location.href = '/admin/dashboard'
       } else {
         console.log('Regular user, redirecting to user dashboard...')
         window.location.href = '/dashboard'
       }
    } else {
      error.value = 'Login failed. Please check your credentials.'
    }
  } catch (err) {
    console.error('Login error:', err)
    if (err.data?.statusMessage) {
      error.value = err.data.statusMessage
    } else if (err.message) {
      error.value = err.message
    } else {
      error.value = 'Login failed. Please try again.'
    }
  } finally {
    loading.value = false
  }
}
</script> 