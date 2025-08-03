<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
    <!-- Header -->
    <header class="backdrop-blur-md bg-white/10 border-b border-white/20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <NuxtLink to="/" class="flex items-center space-x-2">
            <div class="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
            </div>
            <div class="text-xl font-bold">
              <span class="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text">
                WeCode
              </span>
              <span class="text-white">ZW</span>
            </div>
          </NuxtLink>
          <NuxtLink to="/auth/login" class="text-white hover:text-blue-300 transition-colors">
            Already have an account? Login
          </NuxtLink>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-white mb-4">
          Register Your School
        </h1>
        <p class="text-gray-300 text-lg max-w-2xl mx-auto">
          Join WeCodeZW and create a vibrant learning community for your students. 
          Register your school to access our coding tracks, challenges, and club features.
        </p>
      </div>

      <!-- Registration Form -->
      <div class="glass-card p-8">
        <form @submit.prevent="registerSchool" class="space-y-6">
          <!-- School Information -->
          <div class="space-y-4">
            <h3 class="text-xl font-semibold text-white mb-4">School Information</h3>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-gray-300 text-sm font-medium mb-2">
                  School Name *
                </label>
                <input
                  v-model="form.schoolName"
                  type="text"
                  required
                  class="form-glass w-full"
                  placeholder="Enter school name"
                />
              </div>
              
              <div>
                <label class="block text-gray-300 text-sm font-medium mb-2">
                  School Email *
                </label>
                <input
                  v-model="form.email"
                  type="email"
                  required
                  class="form-glass w-full"
                  placeholder="school@example.com"
                />
              </div>
              
              <div>
                <label class="block text-gray-300 text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  v-model="form.phone"
                  type="tel"
                  class="form-glass w-full"
                  placeholder="+263 123 456 789"
                />
              </div>
              
              <div>
                <label class="block text-gray-300 text-sm font-medium mb-2">
                  Website
                </label>
                <input
                  v-model="form.website"
                  type="url"
                  class="form-glass w-full"
                  placeholder="https://school.edu.zw"
                />
              </div>
              
              <div class="md:col-span-2">
                <label class="block text-gray-300 text-sm font-medium mb-2">
                  Address *
                </label>
                <textarea
                  v-model="form.address"
                  required
                  rows="2"
                  class="form-glass w-full"
                  placeholder="Enter full school address"
                ></textarea>
              </div>
              
              <div>
                <label class="block text-gray-300 text-sm font-medium mb-2">
                  City *
                </label>
                <input
                  v-model="form.city"
                  type="text"
                  required
                  class="form-glass w-full"
                  placeholder="Harare"
                />
              </div>
              
              <div>
                <label class="block text-gray-300 text-sm font-medium mb-2">
                  Country
                </label>
                <input
                  v-model="form.country"
                  type="text"
                  class="form-glass w-full"
                  placeholder="Zimbabwe"
                />
              </div>
              
              <div class="md:col-span-2">
                <label class="block text-gray-300 text-sm font-medium mb-2">
                  School Description
                </label>
                <textarea
                  v-model="form.description"
                  rows="3"
                  class="form-glass w-full"
                  placeholder="Tell us about your school..."
                ></textarea>
              </div>
            </div>
          </div>

          <!-- Admin Information -->
          <div class="space-y-4 pt-6 border-t border-white/10">
            <h3 class="text-xl font-semibold text-white mb-4">School Administrator</h3>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-gray-300 text-sm font-medium mb-2">
                  First Name *
                </label>
                <input
                  v-model="form.adminFirstName"
                  type="text"
                  required
                  class="form-glass w-full"
                  placeholder="John"
                />
              </div>
              
              <div>
                <label class="block text-gray-300 text-sm font-medium mb-2">
                  Last Name *
                </label>
                <input
                  v-model="form.adminLastName"
                  type="text"
                  required
                  class="form-glass w-full"
                  placeholder="Doe"
                />
              </div>
              
              <div>
                <label class="block text-gray-300 text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  v-model="form.adminEmail"
                  type="email"
                  required
                  class="form-glass w-full"
                  placeholder="admin@school.edu.zw"
                />
              </div>
              
              <div>
                <label class="block text-gray-300 text-sm font-medium mb-2">
                  Username *
                </label>
                <input
                  v-model="form.adminUsername"
                  type="text"
                  required
                  class="form-glass w-full"
                  placeholder="schooladmin"
                />
              </div>
              
              <div>
                <label class="block text-gray-300 text-sm font-medium mb-2">
                  Password *
                </label>
                <input
                  v-model="form.adminPassword"
                  type="password"
                  required
                  class="form-glass w-full"
                  placeholder="Create a strong password"
                />
              </div>
              
              <div>
                <label class="block text-gray-300 text-sm font-medium mb-2">
                  Confirm Password *
                </label>
                <input
                  v-model="form.confirmPassword"
                  type="password"
                  required
                  class="form-glass w-full"
                  placeholder="Confirm your password"
                />
              </div>
            </div>
          </div>

          <!-- Submit Button -->
          <div class="pt-6">
            <button
              type="submit"
              :disabled="loading"
              class="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="loading" class="flex items-center justify-center">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Registering...
              </span>
              <span v-else>Register School</span>
            </button>
          </div>

          <!-- Success Message -->
          <div v-if="successMessage" class="bg-green-500/20 border border-green-500/30 rounded-lg p-4">
            <p class="text-green-300">{{ successMessage }}</p>
          </div>

          <!-- Error Message -->
          <div v-if="errorMessage" class="bg-red-500/20 border border-red-500/30 rounded-lg p-4">
            <p class="text-red-300">{{ errorMessage }}</p>
          </div>
        </form>
      </div>

      <!-- Benefits Section -->
      <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="glass-card p-6 text-center">
          <div class="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
            <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
          </div>
          <h4 class="text-white font-semibold mb-2">Learning Tracks</h4>
          <p class="text-gray-400 text-sm">Access structured coding courses and learning paths for your students</p>
        </div>
        
        <div class="glass-card p-6 text-center">
          <div class="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
            <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
          </div>
          <h4 class="text-white font-semibold mb-2">Student Clubs</h4>
          <p class="text-gray-400 text-sm">Create and manage coding clubs for collaborative learning</p>
        </div>
        
        <div class="glass-card p-6 text-center">
          <div class="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
            <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
            </svg>
          </div>
          <h4 class="text-white font-semibold mb-2">Progress Tracking</h4>
          <p class="text-gray-400 text-sm">Monitor student progress and achievements with detailed analytics</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
useHead({
  title: 'School Registration - WeCodeZW',
  meta: [
    { name: 'description', content: 'Register your school on WeCodeZW platform for coding education' }
  ]
})

// Form data
const form = ref({
  schoolName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  country: 'Zimbabwe',
  website: '',
  description: '',
  adminFirstName: '',
  adminLastName: '',
  adminEmail: '',
  adminUsername: '',
  adminPassword: '',
  confirmPassword: ''
})

const loading = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const registerSchool = async () => {
  // Reset messages
  successMessage.value = ''
  errorMessage.value = ''

  // Validate passwords match
  if (form.value.adminPassword !== form.value.confirmPassword) {
    errorMessage.value = 'Passwords do not match'
    return
  }

  // Validate password strength
  if (form.value.adminPassword.length < 8) {
    errorMessage.value = 'Password must be at least 8 characters long'
    return
  }

  loading.value = true

  try {
    const response = await $fetch('/api/schools/register', {
      method: 'POST',
      body: {
        schoolName: form.value.schoolName,
        email: form.value.email,
        phone: form.value.phone,
        address: form.value.address,
        city: form.value.city,
        country: form.value.country,
        website: form.value.website,
        description: form.value.description,
        adminFirstName: form.value.adminFirstName,
        adminLastName: form.value.adminLastName,
        adminEmail: form.value.adminEmail,
        adminPassword: form.value.adminPassword,
        adminUsername: form.value.adminUsername
      }
    })

    successMessage.value = response.message
    // Reset form
    Object.keys(form.value).forEach(key => {
      form.value[key] = key === 'country' ? 'Zimbabwe' : ''
    })

  } catch (error) {
    errorMessage.value = error.data?.statusMessage || 'Failed to register school. Please try again.'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  backdrop-filter: blur(10px);
}

.form-glass {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 12px 16px;
  color: white;
  backdrop-filter: blur(10px);
  transition: all 0.2s;
}

.form-glass::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.form-glass:focus {
  outline: none;
  border-color: rgba(59, 130, 246, 0.5);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

textarea.form-glass {
  resize: vertical;
  min-height: 80px;
}
</style> 