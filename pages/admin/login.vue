<template>
  <div class="min-h-screen flex items-center justify-center relative overflow-hidden">
    <!-- Floating Background Elements -->
    <div class="floating-shapes">
      <div class="floating-code">&lt;/&gt;</div>
      <div class="floating-code">{ }</div>
      <div class="floating-code">&lt;div&gt;</div>
      <div class="floating-code">const</div>
      <div class="floating-code">function</div>
      <div class="floating-code">import</div>
      <div class="floating-code">export</div>
      <div class="floating-code">return</div>
    </div>

    <div class="w-full max-w-md z-10">
      <div class="glass-card p-8">
        <div class="text-center mb-8">
          <div class="flex items-center justify-center space-x-2 mb-4">
            <!-- Code Icon -->
            <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
            </div>
            <!-- Logo Text -->
            <div class="text-3xl font-bold">
              <span class="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text">
                WeCode
              </span>
              <span class="text-white">ZW</span>
            </div>
          </div>
          <h1 class="text-2xl font-bold text-white mb-2">Admin Dashboard</h1>
          <p class="text-gray-300">Access the admin panel</p>
        </div>

        <form @submit.prevent="handleLogin" class="space-y-6">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
            <input
              id="email"
              v-model="email"
              type="email"
              required
              class="form-glass w-full"
              placeholder="admin@wecodezw.com"
            />
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-300 mb-2">Password</label>
            <input
              id="password"
              v-model="password"
              type="password"
              required
              class="form-glass w-full"
              placeholder="Enter your password"
            />
          </div>

          <div class="flex items-center justify-between">
            <label class="flex items-center">
              <input type="checkbox" v-model="rememberMe" class="rounded border-gray-300 text-blue-600 focus:ring-blue-500">
              <span class="ml-2 text-sm text-gray-300">Remember me</span>
            </label>
          </div>

          <button
            type="submit"
            :disabled="loading"
            class="btn-primary w-full flex items-center justify-center"
          >
            <svg v-if="loading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {{ loading ? 'Signing In...' : 'Sign In to Admin Panel' }}
          </button>
        </form>

        <div v-if="error" class="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-300 text-sm">
          {{ error }}
        </div>

        <div class="mt-6 text-center">
          <NuxtLink to="/" class="text-blue-400 hover:text-blue-300 text-sm transition-colors">
            ← Back to Home
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Admin Login - WeCodeZW',
  meta: [
    { name: 'description', content: 'Admin login for WeCodeZW platform management' }
  ]
})

const email = ref('')
const password = ref('')
const rememberMe = ref(false)
const loading = ref(false)
const error = ref('')

const handleLogin = async () => {
  loading.value = true
  error.value = ''

  try {
    const response = await $fetch('/api/admin/login', {
      method: 'POST',
      body: {
        email: email.value,
        password: password.value
      }
    })

    if (response.success) {
      // Store admin token
      const adminToken = useCookie('admin-token')
      const adminData = useCookie('admin-data')
      
      adminToken.value = response.token
      adminData.value = JSON.stringify(response.admin)
      
      // Redirect to admin dashboard
      await navigateTo('/admin/dashboard')
    }
  } catch (err) {
    error.value = err.data?.message || 'Login failed. Please try again.'
  } finally {
    loading.value = false
  }
}
</script> 