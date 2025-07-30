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
          <h1 class="text-2xl font-bold text-white mb-2">Email Verification</h1>
          <p class="text-gray-300">Verifying your email address...</p>
        </div>

        <div v-if="loading" class="text-center py-8">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p class="text-gray-300">Verifying your email...</p>
        </div>

        <div v-if="error" class="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-300 text-sm">
          {{ error }}
          <div class="mt-4">
            <NuxtLink to="/auth/login" class="btn-primary w-full flex items-center justify-center">
              Go to Login
            </NuxtLink>
          </div>
        </div>

        <div v-if="success" class="mt-4 p-3 bg-green-500/10 border border-green-500/20 rounded-xl text-green-300 text-sm">
          {{ success }}
          <div class="mt-4">
            <NuxtLink to="/auth/login" class="btn-primary w-full flex items-center justify-center">
              Go to Login
            </NuxtLink>
          </div>
        </div>

        <div v-if="!loading && !error && !success" class="mt-6 text-center">
          <NuxtLink to="/auth/login" class="text-blue-400 hover:text-blue-300 text-sm transition-colors">
            ← Back to Login
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Email Verification - WeCodeZW',
  meta: [
    { name: 'description', content: 'Verify your WeCodeZW email address' }
  ]
})

const route = useRoute()
const loading = ref(true)
const error = ref('')
const success = ref('')

// Get token from URL query parameter
const token = computed(() => route.query.token)

// Verify email on mount
onMounted(async () => {
  if (!token.value) {
    error.value = 'Invalid verification link. Please check your email for the correct link.'
    loading.value = false
    return
  }

  try {
    const response = await $fetch('/api/auth/verify-email', {
      method: 'POST',
      body: {
        token: token.value
      }
    })

    if (response.success) {
      success.value = 'Email verified successfully! You can now log in to your account.'
    }
  } catch (err) {
    error.value = err.data?.message || 'Failed to verify email. Please try again or contact support.'
  } finally {
    loading.value = false
  }
})
</script> 