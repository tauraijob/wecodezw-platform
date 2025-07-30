<template>
  <div>
    <!-- Floating Code Elements Background -->
    <div class="floating-shapes">
      <div class="floating-code" style="top: 10%; left: 10%; animation-delay: 0s;">
        const register = () => { return 'welcome'; }
      </div>
      <div class="floating-code" style="top: 20%; left: 80%; animation-delay: -3s;">
        &lt;Register /&gt; 
      </div>
      <div class="floating-code" style="top: 30%; left: 15%; animation-delay: -6s;">
        function join() { return success; }
      </div>
      <div class="floating-code" style="top: 40%; left: 70%; animation-delay: -9s;">
        npm install community
      </div>
      <div class="floating-code" style="top: 50%; left: 25%; animation-delay: -12s;">
        git commit -m "new user"
      </div>
    </div>

    <!-- Register Section -->
    <section class="relative py-20 lg:py-32">
      <div class="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-cyan-500/20"></div>
      <div class="relative max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8">
          <h1 class="text-3xl font-bold text-white mb-2">
            Join <span class="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text">WeCode</span> for Free
          </h1>
          <p class="text-gray-300">Start your coding journey today</p>
        </div>

        <div class="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8">
          <form @submit.prevent="handleRegister" class="space-y-6">
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label for="firstName" class="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                <input
                  id="firstName"
                  v-model="form.firstName"
                  type="text"
                  required
                  class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white/20 transition-all"
                  placeholder="John"
                />
              </div>
              <div>
                <label for="lastName" class="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                <input
                  id="lastName"
                  v-model="form.lastName"
                  type="text"
                  required
                  class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white/20 transition-all"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label for="username" class="block text-sm font-medium text-gray-300 mb-2">Username</label>
              <input
                id="username"
                v-model="form.username"
                type="text"
                required
                class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white/20 transition-all"
                placeholder="johndoe123"
              />
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white/20 transition-all"
                placeholder="john@example.com"
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
                placeholder="Create a strong password"
              />
            </div>

            <div>
              <label for="confirmPassword" class="block text-sm font-medium text-gray-300 mb-2">Confirm Password</label>
              <input
                id="confirmPassword"
                v-model="form.confirmPassword"
                type="password"
                required
                class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white/20 transition-all"
                placeholder="Confirm your password"
              />
            </div>

            <div class="flex items-start">
              <input
                id="terms"
                v-model="form.agreeToTerms"
                type="checkbox"
                required
                class="mt-1 rounded border-white/20 bg-white/10 text-blue-500 focus:ring-blue-500"
              >
              <label for="terms" class="ml-2 text-sm text-gray-300">
                I agree to the 
                <NuxtLink to="/terms" class="text-blue-400 hover:text-blue-300">Terms of Service</NuxtLink>
                and 
                <NuxtLink to="/privacy" class="text-blue-400 hover:text-blue-300">Privacy Policy</NuxtLink>
              </label>
            </div>

            <button
              type="submit"
              :disabled="loading || !form.agreeToTerms"
              class="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-semibold transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ loading ? 'Creating Account...' : 'Create Free Account' }}
            </button>
          </form>

          <div class="mt-6 text-center">
            <p class="text-gray-300">
              Already have an account? 
              <NuxtLink to="/auth/login" class="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                Sign in
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

          <!-- Benefits -->
          <div class="mt-8 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
            <h3 class="text-green-400 font-semibold mb-2">🎉 What you get for free:</h3>
            <ul class="text-sm text-gray-300 space-y-1">
              <li>• Access to all coding challenges</li>
              <li>• Complete learning tracks</li>
              <li>• Progress tracking & certificates</li>
              <li>• Community support</li>
              <li>• No hidden fees, ever!</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// SEO Meta
useHead({
  title: 'Sign Up - WeCodeZW',
  meta: [
    { name: 'description', content: 'Join WeCodeZW for free and start your coding journey with interactive challenges and expert-led tracks' }
  ]
})

// Form data
const form = ref({
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  agreeToTerms: false
})

const loading = ref(false)
const error = ref('')

// Handle registration
const handleRegister = async () => {
  if (form.value.password !== form.value.confirmPassword) {
    error.value = 'Passwords do not match'
    return
  }

  loading.value = true
  error.value = ''
  
  try {
    const { data } = await $fetch('/api/auth/register', {
      method: 'POST',
      body: {
        firstName: form.value.firstName,
        lastName: form.value.lastName,
        username: form.value.username,
        email: form.value.email,
        password: form.value.password
      }
    })

    if (data.success) {
      // Store token in cookie
      const token = useCookie('auth-token', {
        maxAge: 7 * 24 * 60 * 60 // 7 days
      })
      token.value = data.token

      // Store user data
      const user = useCookie('user-data')
      user.value = JSON.stringify(data.user)

      // Show success message
      alert('Account created successfully! Welcome to WeCodeZW!')

      // Redirect to dashboard
      await navigateTo('/dashboard')
    }
  } catch (err) {
    console.error('Registration error:', err)
    error.value = err.data?.statusMessage || 'Registration failed. Please try again.'
  } finally {
    loading.value = false
  }
}
</script> 