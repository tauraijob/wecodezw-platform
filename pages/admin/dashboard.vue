<template>
  <div>
    <div class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
    <!-- Admin Header -->
    <header class="backdrop-blur-md bg-white/10 border-b border-white/20 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <div class="flex items-center space-x-4">
            <NuxtLink to="/admin/dashboard" class="flex items-center space-x-2">
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
                <span class="text-blue-400 ml-2">Admin</span>
              </div>
            </NuxtLink>
          </div>

          <!-- Admin Info -->
          <div class="flex items-center space-x-4">
            <div class="text-right">
              <p class="text-white text-sm">{{ adminDataParsed?.firstName }} {{ adminDataParsed?.lastName }}</p>
              <p class="text-gray-300 text-xs">Administrator</p>
            </div>
            <button @click="logout" class="text-white hover:text-red-300 transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Stats Overview -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div class="stats-card-blue p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-gray-300 text-sm">Total Users</p>
              <p class="text-3xl font-bold text-white">{{ stats.totalUsers }}</p>
            </div>
            <div class="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
              </svg>
            </div>
          </div>
        </div>

        <div class="stats-card-green p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-gray-300 text-sm">Active Learners</p>
              <p class="text-3xl font-bold text-white">{{ stats.activeUsers }}</p>
            </div>
            <div class="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
          </div>
        </div>

        <div class="stats-card-purple p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-gray-300 text-sm">Completed Challenges</p>
              <p class="text-3xl font-bold text-white">{{ stats.completedChallenges }}</p>
            </div>
            <div class="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
          </div>
        </div>

        <div class="stats-card-orange p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-gray-300 text-sm">Total XP Earned</p>
              <p class="text-3xl font-bold text-white">{{ stats.totalXP.toLocaleString() }}</p>
            </div>
            <div class="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Dashboard Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Users Management -->
        <div class="lg:col-span-2">
          <div class="glass-card p-6">
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-xl font-bold text-white">User Management</h2>
              <div class="flex space-x-2">
                <input
                  v-model="searchQuery"
                  type="text"
                  placeholder="Search users..."
                  class="form-glass text-sm"
                />
                <select v-model="filterRole" class="form-glass text-sm">
                  <option value="">All Roles</option>
                  <option value="STUDENT">Students</option>
                  <option value="ADMIN">Admins</option>
                </select>
              </div>
            </div>

            <div class="overflow-x-auto">
              <table class="w-full">
                <thead>
                  <tr class="border-b border-white/10">
                    <th class="text-left py-3 px-4 text-gray-300 font-medium">User</th>
                    <th class="text-left py-3 px-4 text-gray-300 font-medium">Email</th>
                    <th class="text-left py-3 px-4 text-gray-300 font-medium">Role</th>
                    <th class="text-left py-3 px-4 text-gray-300 font-medium">Progress</th>
                    <th class="text-left py-3 px-4 text-gray-300 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="user in filteredUsers" :key="user.id" class="border-b border-white/5 hover:bg-white/5">
                    <td class="py-3 px-4">
                      <div class="flex items-center space-x-3">
                        <div class="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                          <span class="text-white text-sm font-medium">
                            {{ user.firstName.charAt(0) }}{{ user.lastName.charAt(0) }}
                          </span>
                        </div>
                        <div>
                          <p class="text-white font-medium">{{ user.firstName }} {{ user.lastName }}</p>
                          <p class="text-gray-400 text-sm">@{{ user.username }}</p>
                        </div>
                      </div>
                    </td>
                    <td class="py-3 px-4 text-gray-300">{{ user.email }}</td>
                    <td class="py-3 px-4">
                      <span :class="getRoleBadgeClass(user.role)" class="px-2 py-1 rounded-full text-xs font-medium">
                        {{ user.role }}
                      </span>
                    </td>
                    <td class="py-3 px-4">
                      <div class="flex items-center space-x-2">
                        <div class="w-16 bg-gray-700 rounded-full h-2">
                          <div 
                            class="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                            :style="{ width: `${user.progress?.completionPercentage || 0}%` }"
                          ></div>
                        </div>
                        <span class="text-gray-300 text-sm">{{ user.progress?.completionPercentage || 0 }}%</span>
                      </div>
                    </td>
                    <td class="py-3 px-4">
                      <button @click="viewUserDetails(user)" class="text-blue-400 hover:text-blue-300 text-sm">
                        View Details
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- Leaderboard -->
        <div class="lg:col-span-1">
          <div class="glass-card p-6">
            <h2 class="text-xl font-bold text-white mb-6">Top Performers</h2>
            <div class="space-y-4">
              <div v-for="(user, index) in leaderboard" :key="user.id" class="flex items-center space-x-3">
                <div class="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                     :class="getLeaderboardRankClass(index)">
                  {{ index + 1 }}
                </div>
                <div class="flex-1">
                  <p class="text-white font-medium">{{ user.firstName }} {{ user.lastName }}</p>
                  <p class="text-gray-400 text-sm">{{ user.progress?.totalXP || 0 }} XP</p>
                </div>
                <div class="text-right">
                  <p class="text-gray-300 text-sm">{{ user.progress?.completedChallenges || 0 }} challenges</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Recent Activity -->
      <div class="mt-8">
        <div class="glass-card p-6">
          <h2 class="text-xl font-bold text-white mb-6">Recent Activity</h2>
          <div class="space-y-4">
            <div v-for="activity in recentActivity" :key="activity.id" class="flex items-center space-x-4 p-4 bg-white/5 rounded-xl">
              <div class="w-10 h-10 rounded-full flex items-center justify-center"
                   :class="getActivityIconClass(activity.type)">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path v-if="activity.type === 'challenge_completed'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  <path v-else-if="activity.type === 'track_started'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <div class="flex-1">
                <p class="text-white">{{ activity.description }}</p>
                <p class="text-gray-400 text-sm">{{ formatDate(activity.createdAt) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    </div>
  </div>
</template>

<script setup>
// Apply admin middleware and use custom layout
definePageMeta({
  middleware: 'admin',
  layout: false
})

useHead({
  title: 'Admin Dashboard - WeCodeZW',
  meta: [
    { name: 'description', content: 'Admin dashboard for WeCodeZW platform management' }
  ]
})

// Get user data from unified authentication
const userData = useCookie('user-data')
const token = useCookie('auth-token')

// Parse user data
const adminDataParsed = computed(() => {
  try {
    if (userData.value) {
      if (typeof userData.value === 'object') {
        return userData.value
      } else if (typeof userData.value === 'string') {
        return JSON.parse(userData.value)
      }
    }
    return {}
  } catch {
    return {}
  }
})

// Reactive data
const stats = ref({
  totalUsers: 0,
  activeUsers: 0,
  completedChallenges: 0,
  totalXP: 0
})

const users = ref([])
const leaderboard = ref([])
const recentActivity = ref([])
const searchQuery = ref('')
const filterRole = ref('')

// Computed properties
const filteredUsers = computed(() => {
  let filtered = users.value

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(user => 
      user.firstName.toLowerCase().includes(query) ||
      user.lastName.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query) ||
      user.username.toLowerCase().includes(query)
    )
  }

  if (filterRole.value) {
    filtered = filtered.filter(user => user.role === filterRole.value)
  }

  return filtered
})

// Methods
const getRoleBadgeClass = (role) => {
  return role === 'ADMIN' 
    ? 'bg-red-500/20 text-red-300 border border-red-500/30'
    : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
}

const getLeaderboardRankClass = (index) => {
  const classes = [
    'bg-yellow-500 text-yellow-900',
    'bg-gray-400 text-gray-900',
    'bg-orange-500 text-orange-900',
    'bg-blue-500/20 text-blue-300',
    'bg-purple-500/20 text-purple-300'
  ]
  return classes[index] || 'bg-gray-500/20 text-gray-300'
}

const getActivityIconClass = (type) => {
  const classes = {
    challenge_completed: 'bg-green-500/20',
    track_started: 'bg-blue-500/20',
    user_registered: 'bg-purple-500/20'
  }
  return classes[type] || 'bg-gray-500/20'
}

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

const viewUserDetails = (user) => {
  // TODO: Implement user details modal/page
  console.log('View user details:', user)
}

const logout = () => {
  userData.value = null
  token.value = null
  navigateTo('/')
}

// Fetch dashboard data
const fetchDashboardData = async () => {
  try {
    const [statsData, usersData, leaderboardData, activityData] = await Promise.all([
      $fetch('/api/admin/stats'),
      $fetch('/api/admin/users'),
      $fetch('/api/admin/leaderboard'),
      $fetch('/api/admin/recent-activity')
    ])

    stats.value = statsData
    users.value = usersData
    leaderboard.value = leaderboardData
    recentActivity.value = activityData
  } catch (error) {
    console.error('Error fetching dashboard data:', error)
  }
}

// Load data on mount
onMounted(() => {
  fetchDashboardData()
})
</script> 