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
          <h1 class="text-2xl font-bold text-white mb-2">Admin Setup</h1>
          <p class="text-gray-300">Create the first admin user</p>
        </div>

        <form @submit.prevent="handleSetup" class="space-y-6">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label for="firstName" class="block text-sm font-medium text-gray-300 mb-2">First Name</label>
              <input
                id="firstName"
                v-model="form.firstName"
                type="text"
                required
                class="form-glass w-full"
                placeholder="Admin"
              />
            </div>
            <div>
              <label for="lastName" class="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
              <input
                id="lastName"
                v-model="form.lastName"
                type="text"
                required
                class="form-glass w-full"
                placeholder="User"
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
              class="form-glass w-full"
              placeholder="admin"
            />
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
            <input
              id="email"
              v-model="form.email"
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
              v-model="form.password"
              type="password"
              required
              class="form-glass w-full"
              placeholder="Enter a strong password"
            />
          </div>

          <div>
            <label for="confirmPassword" class="block text-sm font-medium text-gray-300 mb-2">Confirm Password</label>
            <input
              id="confirmPassword"
              v-model="form.confirmPassword"
              type="password"
              required
              class="form-glass w-full"
              placeholder="Confirm your password"
            />
          </div>

          <button
            type="submit"
            :disabled="loading || !isFormValid"
            class="btn-primary w-full flex items-center justify-center"
          >
            <svg v-if="loading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {{ loading ? 'Creating Admin...' : 'Create Admin User' }}
          </button>
        </form>

        <div v-if="error" class="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-300 text-sm">
          {{ error }}
        </div>

        <div v-if="success" class="mt-4 p-3 bg-green-500/10 border border-green-500/20 rounded-xl text-green-300 text-sm">
          {{ success }}
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
  title: 'Admin Setup - WeCodeZW',
  meta: [
    { name: 'description', content: 'Admin setup for WeCodeZW platform' }
  ]
})

const form = ref({
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
})

const loading = ref(false)
const error = ref('')
const success = ref('')

const isFormValid = computed(() => {
  return form.value.firstName && 
         form.value.lastName && 
         form.value.username && 
         form.value.email && 
         form.value.password && 
         form.value.confirmPassword &&
         form.value.password === form.value.confirmPassword &&
         form.value.password.length >= 6
})

const handleSetup = async () => {
  if (!isFormValid.value) {
    error.value = 'Please fill all fields and ensure passwords match (minimum 6 characters)'
    return
  }

  loading.value = true
  error.value = ''
  success.value = ''

  try {
    const response = await $fetch('/api/admin/create-admin', {
      method: 'POST',
      body: {
        firstName: form.value.firstName,
        lastName: form.value.lastName,
        username: form.value.username,
        email: form.value.email,
        password: form.value.password
      }
    })

    if (response.success) {
      success.value = 'Admin user created successfully! You can now login at /admin/login'
      form.value = {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    }
  } catch (err) {
    error.value = err.data?.message || 'Failed to create admin user. Please try again.'
  } finally {
    loading.value = false
  }
}
</script> 