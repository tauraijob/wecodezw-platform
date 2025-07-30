<template>
  <div>
    <!-- Floating Code Elements Background -->
    <div class="floating-shapes">
      <div class="floating-code" style="top: 10%; left: 10%; animation-delay: 0s;">
        const dashboard = () => { return 'progress'; }
      </div>
      <div class="floating-code" style="top: 20%; left: 80%; animation-delay: -3s;">
        &lt;Dashboard /&gt; 
      </div>
      <div class="floating-code" style="top: 30%; left: 15%; animation-delay: -6s;">
        function track() { return success; }
      </div>
      <div class="floating-code" style="top: 40%; left: 70%; animation-delay: -9s;">
        npm install progress
      </div>
      <div class="floating-code" style="top: 50%; left: 25%; animation-delay: -12s;">
        git commit -m "dashboard update"
      </div>
    </div>

    <!-- Dashboard Header -->
    <section class="relative py-8 lg:py-12">
      <div class="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-cyan-500/20"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 class="text-3xl font-bold text-white mb-2">
              Welcome back, <span class="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text">{{ user?.firstName }} {{ user?.lastName }}</span>! 👋
            </h1>
            <p class="text-gray-300">Continue your coding journey where you left off</p>
          </div>
          <div class="mt-4 lg:mt-0 flex items-center space-x-4">
            <div class="text-right">
              <div class="text-2xl font-bold text-white">1,250</div>
              <div class="text-sm text-gray-400">Total XP</div>
            </div>
            <div class="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
              <span class="text-2xl">🏆</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Stats -->
    <section class="py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div class="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6">
            <div class="flex items-center">
              <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                <span class="text-xl">📚</span>
              </div>
              <div>
                <div class="text-2xl font-bold text-white">3</div>
                <div class="text-sm text-gray-400">Tracks Started</div>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-br from-green-500/10 to-teal-500/10 backdrop-blur-sm border border-green-500/20 rounded-xl p-6">
            <div class="flex items-center">
              <div class="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mr-4">
                <span class="text-xl">✅</span>
              </div>
              <div>
                <div class="text-2xl font-bold text-white">47</div>
                <div class="text-sm text-gray-400">Challenges Completed</div>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
            <div class="flex items-center">
              <div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                <span class="text-xl">🎓</span>
              </div>
              <div>
                <div class="text-2xl font-bold text-white">2</div>
                <div class="text-sm text-gray-400">Certificates Earned</div>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-sm border border-orange-500/20 rounded-xl p-6">
            <div class="flex items-center">
              <div class="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-4">
                <span class="text-xl">🔥</span>
              </div>
              <div>
                <div class="text-2xl font-bold text-white">7</div>
                <div class="text-sm text-gray-400">Day Streak</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Dashboard Content -->
    <section class="py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Current Progress -->
          <div class="lg:col-span-2">
            <div class="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 mb-8">
              <h2 class="text-xl font-semibold text-white mb-4">Continue Learning</h2>
              
              <!-- Current Track -->
              <div class="bg-white/5 rounded-lg p-4 mb-6">
                <div class="flex items-center justify-between mb-3">
                  <h3 class="text-lg font-semibold text-white">Web Development Fundamentals</h3>
                  <span class="text-sm text-green-400">In Progress</span>
                </div>
                <div class="mb-3">
                  <div class="flex justify-between text-sm text-gray-300 mb-1">
                    <span>Progress</span>
                    <span>65%</span>
                  </div>
                  <div class="w-full bg-gray-700 rounded-full h-2">
                    <div class="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style="width: 65%"></div>
                  </div>
                </div>
                <div class="flex justify-between text-sm text-gray-400">
                  <span>12 of 18 lessons completed</span>
                  <span>Next: JavaScript Functions</span>
                </div>
                <div class="mt-4">
                  <NuxtLink to="/tracks/web-fundamentals" class="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all">
                    Continue Learning
                  </NuxtLink>
                </div>
              </div>

              <!-- Recent Activity -->
              <div>
                <h3 class="text-lg font-semibold text-white mb-4">Recent Activity</h3>
                <div class="space-y-3">
                  <div class="flex items-center p-3 bg-white/5 rounded-lg">
                    <div class="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                      <span class="text-green-400 text-sm">✓</span>
                    </div>
                    <div class="flex-1">
                      <div class="text-white text-sm">Completed "CSS Flexbox" challenge</div>
                      <div class="text-gray-400 text-xs">2 hours ago</div>
                    </div>
                    <div class="text-green-400 text-sm">+50 XP</div>
                  </div>
                  
                  <div class="flex items-center p-3 bg-white/5 rounded-lg">
                    <div class="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center mr-3">
                      <span class="text-blue-400 text-sm">📚</span>
                    </div>
                    <div class="flex-1">
                      <div class="text-white text-sm">Started "JavaScript Basics" lesson</div>
                      <div class="text-gray-400 text-xs">1 day ago</div>
                    </div>
                  </div>
                  
                  <div class="flex items-center p-3 bg-white/5 rounded-lg">
                    <div class="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center mr-3">
                      <span class="text-purple-400 text-sm">🏆</span>
                    </div>
                    <div class="flex-1">
                      <div class="text-white text-sm">Earned "HTML Master" certificate</div>
                      <div class="text-gray-400 text-xs">3 days ago</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Available Challenges -->
            <div class="bg-gradient-to-br from-green-500/10 to-teal-500/10 backdrop-blur-sm border border-green-500/20 rounded-xl p-6">
              <h2 class="text-xl font-semibold text-white mb-4">Recommended Challenges</h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="bg-white/5 rounded-lg p-4">
                  <h3 class="text-white font-semibold mb-2">Build a Tribute Page</h3>
                  <p class="text-gray-300 text-sm mb-3">Create a tribute page using HTML and CSS</p>
                  <div class="flex items-center justify-between">
                    <span class="text-green-400 text-sm">Beginner</span>
                    <NuxtLink to="/challenges/tribute-page" class="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm transition-colors">
                      Start
                    </NuxtLink>
                  </div>
                </div>
                
                <div class="bg-white/5 rounded-lg p-4">
                  <h3 class="text-white font-semibold mb-2">Survey Form</h3>
                  <p class="text-gray-300 text-sm mb-3">Build a survey form with form validation</p>
                  <div class="flex items-center justify-between">
                    <span class="text-yellow-400 text-sm">Intermediate</span>
                    <NuxtLink to="/challenges/survey-form" class="bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-1 rounded text-sm transition-colors">
                      Start
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="space-y-6">
            <!-- Profile Card -->
            <div class="bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
              <div class="text-center">
                <div class="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span class="text-2xl">👤</span>
                </div>
                <h3 class="text-white font-semibold">{{ user?.firstName }} {{ user?.lastName }}</h3>
                <p class="text-gray-400 text-sm">@{{ user?.username }}</p>
                <div class="mt-4">
                  <div class="text-2xl font-bold text-white">Level 5</div>
                  <div class="text-gray-400 text-sm">Web Developer</div>
                </div>
              </div>
            </div>

            <!-- Certificates -->
            <div class="bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-sm border border-orange-500/20 rounded-xl p-6">
              <h3 class="text-white font-semibold mb-4">Your Certificates</h3>
              <div class="space-y-3">
                <div class="bg-white/5 rounded-lg p-3">
                  <div class="flex items-center justify-between">
                    <div>
                      <div class="text-white text-sm font-medium">HTML Master</div>
                      <div class="text-gray-400 text-xs">Completed 2 weeks ago</div>
                    </div>
                    <button class="text-blue-400 hover:text-blue-300 text-sm">Download</button>
                  </div>
                </div>
                
                <div class="bg-white/5 rounded-lg p-3">
                  <div class="flex items-center justify-between">
                    <div>
                      <div class="text-white text-sm font-medium">CSS Fundamentals</div>
                      <div class="text-gray-400 text-xs">Completed 1 week ago</div>
                    </div>
                    <button class="text-blue-400 hover:text-blue-300 text-sm">Download</button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Quick Actions -->
            <div class="bg-gradient-to-br from-green-500/10 to-teal-500/10 backdrop-blur-sm border border-green-500/20 rounded-xl p-6">
              <h3 class="text-white font-semibold mb-4">Quick Actions</h3>
              <div class="space-y-3">
                <NuxtLink to="/challenges" class="block w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2 px-4 rounded-lg text-sm font-semibold transition-all text-center">
                  Browse Challenges
                </NuxtLink>
                <NuxtLink to="/tracks" class="block w-full border border-white/20 bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-lg text-sm font-semibold transition-all text-center">
                  View All Tracks
                </NuxtLink>
                <NuxtLink to="/community" class="block w-full border border-white/20 bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-lg text-sm font-semibold transition-all text-center">
                  Join Community
                </NuxtLink>
                <button @click="logout" class="block w-full border border-red-500/20 bg-red-500/10 hover:bg-red-500/20 text-red-400 py-2 px-4 rounded-lg text-sm font-semibold transition-all text-center">
                  Logout
                </button>
              </div>
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
  title: 'Dashboard - WeCodeZW',
  meta: [
    { name: 'description', content: 'Track your coding progress, view certificates, and continue learning with WeCodeZW dashboard' }
  ]
})

// Get user data from cookie
const userData = useCookie('user-data')
const user = ref(null)

// Safely parse user data
try {
  if (userData.value) {
    // Check if it's already an object (from previous invalid storage)
    if (typeof userData.value === 'object') {
      user.value = userData.value
    } else if (typeof userData.value === 'string') {
      // Try to parse as JSON
      user.value = JSON.parse(userData.value)
    }
  }
} catch (error) {
  console.error('Error parsing user data:', error)
  console.log('User data value:', userData.value)
  // Clear invalid cookie
  userData.value = null
}

// Get auth token
const token = useCookie('auth-token')

// Logout function
const logout = () => {
  // Clear cookies
  userData.value = null
  token.value = null
  
  // Redirect to home
  navigateTo('/')
}

// Mock progress data (in real app, this would come from API)
const currentTrack = ref({
  name: 'Web Development Fundamentals',
  progress: 65,
  completed: 12,
  total: 18,
  nextLesson: 'JavaScript Functions'
})

// Mock recent activity
const recentActivity = ref([
  {
    type: 'challenge',
    title: 'Completed "CSS Flexbox" challenge',
    time: '2 hours ago',
    xp: 50,
    icon: '✓',
    color: 'green'
  },
  {
    type: 'lesson',
    title: 'Started "JavaScript Basics" lesson',
    time: '1 day ago',
    icon: '📚',
    color: 'blue'
  },
  {
    type: 'certificate',
    title: 'Earned "HTML Master" certificate',
    time: '3 days ago',
    icon: '🏆',
    color: 'purple'
  }
])

// Redirect if not logged in
if (!user.value) {
  await navigateTo('/auth/login')
}

// Redirect admin users to admin dashboard
if (user.value && user.value.role === 'ADMIN') {
  await navigateTo('/admin/dashboard')
}
</script> 