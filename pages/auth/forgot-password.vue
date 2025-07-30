<template>
  <div class="min-h-screen flex items-center justify-center relative overflow-hidden">
    <!-- Floating Background Elements -->
    <div class="floating-shapes">
      <div class="floating-code">&lt;/&gt;</div>
      <div class="floating-code">{ }</div>
      <div class="floating-code">&lt;div&gt;</div>
      <div class="floating-code">const</div>
      <div class="floating-code">function</div>
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
              <span class="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text">WeCode</span>
              <span class="text-white">ZW</span>
            </div>
          </div>
          <h1 class="text-2xl font-bold text-white mb-2">Forgot Password</h1>
          <p class="text-gray-300">Enter your email to reset your password</p>
        </div>

        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
            <input
              id="email"
              v-model="email"
              type="email"
              required
              class="form-glass w-full"
              placeholder="Enter your email address"
            />
          </div>

          <button
            type="submit"
            :disabled="loading"
            class="btn-primary w-full flex items-center justify-center"
          >
            {{ loading ? 'Sending Reset Link...' : 'Send Reset Link' }}
          </button>
        </form>

        <div v-if="error" class="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-300 text-sm">
          {{ error }}
        </div>

        <div v-if="success" class="mt-4 p-3 bg-green-500/10 border border-green-500/20 rounded-xl text-green-300 text-sm">
          {{ success }}
        </div>

        <div class="mt-6 text-center space-y-2">
          <NuxtLink to="/auth/login" class="text-blue-400 hover:text-blue-300 text-sm transition-colors block">
            ← Back to Login
          </NuxtLink>
          <NuxtLink to="/auth/register" class="text-gray-400 hover:text-gray-300 text-sm transition-colors block">
            Don't have an account? Sign up
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Forgot Password - WeCodeZW',
  meta: [
    { name: 'description', content: 'Reset your WeCodeZW account password' }
  ]
})

const email = ref('')
const loading = ref(false)
const error = ref('')
const success = ref('')

const handleSubmit = async () => {
  loading.value = true
  error.value = ''
  success.value = ''

  try {
    const response = await $fetch('/api/auth/forgot-password', {
      method: 'POST',
      body: {
        email: email.value
      }
    })

    if (response.success) {
      success.value = response.message
      email.value = ''
    }
  } catch (err) {
    error.value = err.data?.message || 'Failed to send reset link. Please try again.'
  } finally {
    loading.value = false
  }
}
</script> 