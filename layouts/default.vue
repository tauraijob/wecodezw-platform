<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
    <!-- Navigation -->
    <nav class="backdrop-blur-md bg-white/10 border-b border-white/20 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <div class="flex items-center">
            <NuxtLink to="/" class="flex items-center space-x-2">
              <!-- Code Icon -->
              <div class="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
              </div>
              <!-- Logo Text -->
              <div class="text-2xl font-bold">
                <span class="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text">
                  WeCode
                </span>
                <span class="text-white">ZW</span>
              </div>
            </NuxtLink>
          </div>

          <!-- Desktop Navigation -->
          <div class="hidden md:block">
            <div class="flex items-center space-x-8">
              <NuxtLink to="/" class="text-white hover:text-blue-300 transition-colors">Home</NuxtLink>
              <NuxtLink to="/tracks" class="text-white hover:text-blue-300 transition-colors">Tracks</NuxtLink>
              <NuxtLink to="/challenges" class="text-white hover:text-blue-300 transition-colors">Challenges</NuxtLink>
              <NuxtLink to="/community" class="text-white hover:text-blue-300 transition-colors">Community</NuxtLink>
              <NuxtLink to="/about" class="text-white hover:text-blue-300 transition-colors">About</NuxtLink>
            </div>
          </div>

          <!-- Auth Buttons -->
          <div class="hidden md:flex items-center space-x-4">
            <template v-if="!isAuthenticated">
              <NuxtLink to="/auth/login" class="text-white hover:text-blue-300 transition-colors">
                Sign In
              </NuxtLink>
              <NuxtLink to="/auth/register" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                Get Started
              </NuxtLink>
            </template>
            <template v-else>
              <NuxtLink :to="userData?.role === 'ADMIN' ? '/admin/dashboard' : '/dashboard'" class="text-white hover:text-blue-300 transition-colors">
                {{ userData?.role === 'ADMIN' ? 'Admin Dashboard' : 'Dashboard' }}
              </NuxtLink>
              <button @click="logout" class="text-white hover:text-red-300 transition-colors">
                Logout
              </button>
            </template>
          </div>

          <!-- Mobile menu button -->
          <div class="md:hidden">
            <button class="text-white hover:text-blue-300">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main>
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-slate-900/50 backdrop-blur-md border-t border-white/10 mt-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <!-- Logo and Description -->
          <div class="col-span-1 md:col-span-2">
            <div class="flex items-center space-x-2 mb-4">
              <!-- Code Icon -->
              <div class="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
              </div>
              <!-- Logo Text -->
              <div class="text-2xl font-bold">
                <span class="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text">
                  WeCode
                </span>
                <span class="text-white">ZW</span>
              </div>
            </div>
            <p class="text-gray-300 mb-4">
              Empowering Zimbabwe's next generation of developers through hands-on coding education and community support.
            </p>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-300 hover:text-white transition-colors">
                <span class="sr-only">Facebook</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" class="text-gray-300 hover:text-white transition-colors">
                <span class="sr-only">Twitter</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" class="text-gray-300 hover:text-white transition-colors">
                <span class="sr-only">GitHub</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h3 class="text-white font-semibold mb-4">Quick Links</h3>
            <ul class="space-y-2">
              <li><NuxtLink to="/tracks" class="text-gray-300 hover:text-white transition-colors">Learning Tracks</NuxtLink></li>
              <li><NuxtLink to="/challenges" class="text-gray-300 hover:text-white transition-colors">Coding Challenges</NuxtLink></li>
              <li><NuxtLink to="/community" class="text-gray-300 hover:text-white transition-colors">Community</NuxtLink></li>
              <li><NuxtLink to="/about" class="text-gray-300 hover:text-white transition-colors">About Us</NuxtLink></li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div>
            <h3 class="text-white font-semibold mb-4">Contact</h3>
            <div class="space-y-2 text-gray-300">
              <p>WhatsApp: +27616291608</p>
              <p>Email: info@wecodezw.com</p>
              <p>Harare, Zimbabwe</p>
            </div>
          </div>
        </div>

        <!-- Bottom Footer -->
        <div class="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-300 text-sm">
            © 2024 WeCodeZW. All rights reserved.
          </p>
          <div class="flex space-x-6 mt-4 md:mt-0">
            <NuxtLink to="/privacy" class="text-gray-300 hover:text-white text-sm transition-colors">Privacy Policy</NuxtLink>
            <NuxtLink to="/terms" class="text-gray-300 hover:text-white text-sm transition-colors">Terms of Service</NuxtLink>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const authToken = useCookie('auth-token')
const userData = useCookie('user-data')

const isAuthenticated = computed(() => {
  return !!authToken.value && !!userData.value
})

const logout = () => {
  authToken.value = null
  userData.value = null
  navigateTo('/')
}
</script> 