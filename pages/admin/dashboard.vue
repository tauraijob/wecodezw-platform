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
              <p class="text-blue-400 text-sm">+{{ stats.newUsersThisMonth }} this month</p>
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
              <p class="text-green-400 text-sm">{{ Math.round((stats.activeUsers / stats.totalUsers) * 100) }}% of total</p>
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
              <p class="text-purple-400 text-sm">{{ stats.completionRate }}% completion rate</p>
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
              <p class="text-orange-400 text-sm">Avg: {{ Math.round(stats.totalXP / stats.totalUsers) }} per user</p>
            </div>
            <div class="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Management Tabs -->
      <div class="mb-8">
        <div class="flex space-x-1 bg-white/10 rounded-lg p-1 overflow-x-auto">
          <button 
            @click="activeTab = 'users'" 
            :class="activeTab === 'users' ? 'bg-blue-500 text-white' : 'text-gray-300 hover:text-white'"
            class="px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap"
          >
            Users
          </button>
          <button 
            @click="activeTab = 'schools'" 
            :class="activeTab === 'schools' ? 'bg-blue-500 text-white' : 'text-gray-300 hover:text-white'"
            class="px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap"
          >
            Schools
          </button>
          <button 
            @click="activeTab = 'clubs'" 
            :class="activeTab === 'clubs' ? 'bg-blue-500 text-white' : 'text-gray-300 hover:text-white'"
            class="px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap"
          >
            Clubs
          </button>
          <button 
            @click="() => { activeTab = 'tracks'; console.log('Switched to tracks tab, activeTab:', activeTab); }" 
            :class="activeTab === 'tracks' ? 'bg-blue-500 text-white' : 'text-gray-300 hover:text-white'"
            class="px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap"
          >
            Tracks
          </button>
          <button 
            @click="() => { activeTab = 'courses'; console.log('Switched to courses tab, activeTab:', activeTab); }" 
            :class="activeTab === 'courses' ? 'bg-blue-500 text-white' : 'text-gray-300 hover:text-white'"
            class="px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap"
          >
            Courses
          </button>
          <button 
            @click="() => { activeTab = 'ai-requests'; console.log('Switched to ai-requests tab, activeTab:', activeTab); }" 
            :class="activeTab === 'ai-requests' ? 'bg-blue-500 text-white' : 'text-gray-300 hover:text-white'"
            class="px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap"
          >
            AI Requests
          </button>
          <button 
            @click="() => { activeTab = 'analytics'; console.log('Switched to analytics tab, activeTab:', activeTab); }" 
            :class="activeTab === 'analytics' ? 'bg-blue-500 text-white' : 'text-gray-300 hover:text-white'"
            class="px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap"
          >
            Analytics
          </button>
        </div>
      </div>

      <!-- User Management Section -->
      <div v-if="activeTab === 'users'" class="mb-8">
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
              <select v-model="filterRole" class="admin-dropdown">
                <option value="">All Roles</option>
                <option value="USER">Students</option>
                <option value="ADMIN">Admins</option>
              </select>
            </div>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="border-b border-white/10">
                  <th class="text-left py-3 px-4 text-gray-300 font-medium">User</th>
                  <th class="text-left py-3 px-4 text-gray-300 font-medium">Role</th>
                  <th class="text-left py-3 px-4 text-gray-300 font-medium">Progress</th>
                  <th class="text-left py-3 px-4 text-gray-300 font-medium">Stats</th>
                  <th class="text-left py-3 px-4 text-gray-300 font-medium">Status</th>
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
                        <p class="text-gray-500 text-xs">{{ user.email }}</p>
                      </div>
                    </div>
                  </td>
                  <td class="py-3 px-4">
                    <span :class="getRoleBadgeClass(user.role)" class="px-2 py-1 rounded-full text-xs font-medium">
                      {{ user.role }}
                    </span>
                  </td>
                  <td class="py-3 px-4">
                    <div class="space-y-1">
                      <div class="flex items-center space-x-2">
                        <div class="w-16 bg-gray-700 rounded-full h-2">
                          <div 
                            class="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                            :style="{ width: `${user.progress?.completionPercentage || 0}%` }"
                          ></div>
                        </div>
                        <span class="text-gray-300 text-xs">{{ user.progress?.completionPercentage || 0 }}%</span>
                      </div>
                      <p class="text-gray-400 text-xs">
                        {{ user.progress?.currentTrack?.title || 'No active track' }}
                      </p>
                    </div>
                  </td>
                  <td class="py-3 px-4">
                    <div class="space-y-1">
                      <div class="flex items-center space-x-2">
                        <span class="text-yellow-400 text-xs">⚡ {{ user.progress?.totalXP || 0 }} XP</span>
                        <span class="text-blue-400 text-xs">📊 Lvl {{ user.level || 1 }}</span>
                      </div>
                      <div class="flex items-center space-x-2">
                        <span class="text-green-400 text-xs">✅ {{ user.progress?.completedChallenges || 0 }} challenges</span>
                        <span class="text-purple-400 text-xs">🎯 {{ user.progress?.completedTracks || 0 }} tracks</span>
                      </div>
                    </div>
                  </td>
                  <td class="py-3 px-4">
                    <div class="flex items-center space-x-2">
                      <span :class="user.isEmailVerified ? 'text-green-400' : 'text-red-400'" class="text-xs">
                        {{ user.isEmailVerified ? '✓ Verified' : '✗ Unverified' }}
                      </span>
                      <span :class="user.isActive ? 'text-green-400' : 'text-red-400'" class="text-xs">
                        {{ user.isActive ? '✓ Active' : '✗ Inactive' }}
                      </span>
                    </div>
                  </td>
                  <td class="py-3 px-4">
                    <div class="flex space-x-2">
                      <button @click="viewUserDetails(user)" class="text-blue-400 hover:text-blue-300 text-xs">
                        View
                      </button>
                      <button @click="toggleUserStatus(user)" :class="user.isActive ? 'text-red-400 hover:text-red-300' : 'text-green-400 hover:text-green-300'" class="text-xs">
                        {{ user.isActive ? 'Deactivate' : 'Activate' }}
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- School Management Section -->
      <div v-if="activeTab === 'schools'" class="mb-8">
        <div class="glass-card p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-xl font-bold text-white">School Management</h2>
            <div class="flex space-x-2">
              <input
                v-model="schoolSearchQuery"
                type="text"
                placeholder="Search schools..."
                class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-2 text-sm transition-all duration-300 focus:bg-white/8 focus:border-white/20 outline-none"
              />
              <select v-model="schoolFilterStatus" class="admin-dropdown">
                <option value="">All Status</option>
                <option value="PENDING">Pending</option>
                <option value="APPROVED">Approved</option>
                <option value="REJECTED">Rejected</option>
                <option value="SUSPENDED">Suspended</option>
              </select>
            </div>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="border-b border-white/10">
                  <th class="text-left py-3 px-4 text-gray-300 font-medium">School</th>
                  <th class="text-left py-3 px-4 text-gray-300 font-medium">Admin</th>
                  <th class="text-left py-3 px-4 text-gray-300 font-medium">Location</th>
                  <th class="text-left py-3 px-4 text-gray-300 font-medium">Stats</th>
                  <th class="text-left py-3 px-4 text-gray-300 font-medium">Status</th>
                  <th class="text-left py-3 px-4 text-gray-300 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="school in filteredSchools" :key="school.id" class="border-b border-white/5 hover:bg-white/5">
                  <td class="py-3 px-4">
                    <div class="flex items-center space-x-3">
                      <div class="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <span class="text-white text-sm font-medium">
                          {{ school.name.charAt(0) }}
                        </span>
                      </div>
                      <div>
                        <p class="text-white font-medium">{{ school.name }}</p>
                        <p class="text-gray-400 text-sm">{{ school.email }}</p>
                        <p class="text-gray-500 text-xs">{{ school.website || 'No website' }}</p>
                      </div>
                    </div>
                  </td>
                  <td class="py-3 px-4">
                    <div>
                      <p class="text-white text-sm">{{ school.adminName }}</p>
                      <p class="text-gray-400 text-xs">{{ school.admin.email }}</p>
                    </div>
                  </td>
                  <td class="py-3 px-4">
                    <div>
                      <p class="text-white text-sm">{{ school.city }}, {{ school.country }}</p>
                      <p class="text-gray-400 text-xs">{{ school.address.substring(0, 30) }}...</p>
                    </div>
                  </td>
                  <td class="py-3 px-4">
                    <div class="space-y-1">
                      <div class="flex items-center space-x-2">
                        <span class="text-blue-400 text-xs">🏫 {{ school.totalStudents }} students</span>
                        <span class="text-green-400 text-xs">🎯 {{ school.totalClubs }} clubs</span>
                      </div>
                      <div class="flex items-center space-x-2">
                        <span class="text-purple-400 text-xs">✅ {{ school.activeClubs }} active</span>
                      </div>
                    </div>
                  </td>
                  <td class="py-3 px-4">
                    <span :class="getSchoolStatusBadgeClass(school.status)" class="px-2 py-1 rounded-full text-xs font-medium">
                      {{ school.status }}
                    </span>
                  </td>
                  <td class="py-3 px-4">
                    <div class="flex space-x-2">
                      <button @click="viewSchoolDetails(school)" class="text-blue-400 hover:text-blue-300 text-xs">
                        View
                      </button>
                      <button v-if="school.status === 'PENDING'" @click="approveSchool(school, 'APPROVED')" class="text-green-400 hover:text-green-300 text-xs">
                        Approve
                      </button>
                      <button v-if="school.status === 'PENDING'" @click="approveSchool(school, 'REJECTED')" class="text-red-400 hover:text-red-300 text-xs">
                        Reject
                      </button>
                      <button v-if="school.status === 'APPROVED'" @click="approveSchool(school, 'SUSPENDED')" class="text-orange-400 hover:text-orange-300 text-xs">
                        Suspend
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Club Management Section -->
      <div v-if="activeTab === 'clubs'" class="mb-8">
        <div class="glass-card p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-xl font-bold text-white">Club Management</h2>
            <div class="flex space-x-2">
              <input
                v-model="clubSearchQuery"
                type="text"
                placeholder="Search clubs..."
                class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-2 text-sm transition-all duration-300 focus:bg-white/8 focus:border-white/20 outline-none"
              />
              <select v-model="clubFilterCategory" class="admin-dropdown">
                <option value="">All Categories</option>
                <option value="TECHNOLOGY">Technology</option>
                <option value="SCIENCE">Science</option>
                <option value="ARTS">Arts</option>
                <option value="SPORTS">Sports</option>
                <option value="ACADEMIC">Academic</option>
                <option value="CULTURAL">Cultural</option>
                <option value="ENVIRONMENTAL">Environmental</option>
                <option value="SOCIAL">Social</option>
                <option value="OTHER">Other</option>
              </select>
            </div>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="border-b border-white/10">
                  <th class="text-left py-3 px-4 text-gray-300 font-medium">Club</th>
                  <th class="text-left py-3 px-4 text-gray-300 font-medium">School</th>
                  <th class="text-left py-3 px-4 text-gray-300 font-medium">Creator</th>
                  <th class="text-left py-3 px-4 text-gray-300 font-medium">Stats</th>
                  <th class="text-left py-3 px-4 text-gray-300 font-medium">Status</th>
                  <th class="text-left py-3 px-4 text-gray-300 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="club in filteredClubs" :key="club.id" class="border-b border-white/5 hover:bg-white/5">
                  <td class="py-3 px-4">
                    <div class="flex items-center space-x-3">
                      <div class="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                        <span class="text-white text-sm font-medium">
                          {{ club.name.charAt(0) }}
                        </span>
                      </div>
                      <div>
                        <p class="text-white font-medium">{{ club.name }}</p>
                        <p class="text-gray-400 text-sm">{{ club.category }}</p>
                        <p class="text-gray-500 text-xs">{{ club.description.substring(0, 30) }}...</p>
                      </div>
                    </div>
                  </td>
                  <td class="py-3 px-4">
                    <div>
                      <p class="text-white text-sm">{{ club.schoolName }}</p>
                      <span :class="club.schoolApproved ? 'text-green-400' : 'text-red-400'" class="text-xs">
                        {{ club.schoolApproved ? '✓ Approved' : '✗ Pending' }}
                      </span>
                    </div>
                  </td>
                  <td class="py-3 px-4">
                    <div>
                      <p class="text-white text-sm">{{ club.creatorName }}</p>
                      <p class="text-gray-400 text-xs">@{{ club.creator.username }}</p>
                    </div>
                  </td>
                  <td class="py-3 px-4">
                    <div class="space-y-1">
                      <div class="flex items-center space-x-2">
                        <span class="text-blue-400 text-xs">👥 {{ club.totalMembers }}/{{ club.maxMembers }}</span>
                        <span class="text-green-400 text-xs">📝 {{ club.totalPosts }} posts</span>
                      </div>
                      <div class="flex items-center space-x-2">
                        <span class="text-purple-400 text-xs">✅ {{ club.activeMembers }} active</span>
                      </div>
                    </div>
                  </td>
                  <td class="py-3 px-4">
                    <span :class="club.isActive ? 'text-green-400' : 'text-red-400'" class="text-xs">
                      {{ club.isActive ? '✓ Active' : '✗ Inactive' }}
                    </span>
                  </td>
                  <td class="py-3 px-4">
                    <div class="flex space-x-2">
                      <button @click="viewClubDetails(club)" class="text-blue-400 hover:text-blue-300 text-xs">
                        View
                      </button>
                      <button @click="toggleClubStatus(club)" :class="club.isActive ? 'text-red-400 hover:text-red-300' : 'text-green-400 hover:text-green-300'" class="text-xs">
                        {{ club.isActive ? 'Deactivate' : 'Activate' }}
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Track Management Section -->
      <div v-if="activeTab === 'tracks'" class="mb-8">
        <div class="glass-card p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-xl font-bold text-white">Track Management</h2>
            <div class="flex space-x-2">
              <button @click="showCreateTrackModal = true" class="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                Create Track
              </button>
              <input
                v-model="trackSearchQuery"
                type="text"
                placeholder="Search tracks..."
                class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-2 text-sm transition-all duration-300 focus:bg-white/8 focus:border-white/20 outline-none"
              />
              <select v-model="trackFilterCategory" class="admin-dropdown">
                <option value="">All Categories</option>
                <option value="WEB_DEVELOPMENT">Web Development</option>
                <option value="MOBILE_DEVELOPMENT">Mobile Development</option>
                <option value="DATA_SCIENCE">Data Science</option>
                <option value="MACHINE_LEARNING">Machine Learning</option>
                <option value="DEVOPS">DevOps</option>
                <option value="CYBERSECURITY">Cybersecurity</option>
                <option value="GAME_DEVELOPMENT">Game Development</option>
                <option value="BLOCKCHAIN">Blockchain</option>
                <option value="API_DEVELOPMENT">API Development</option>
                <option value="DATABASE">Database</option>
                <option value="ALGORITHMS">Algorithms</option>
                <option value="SYSTEM_DESIGN">System Design</option>
              </select>
            </div>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="border-b border-white/10">
                  <th class="text-left py-3 px-4 text-gray-300 font-medium">Track</th>
                  <th class="text-left py-3 px-4 text-gray-300 font-medium">Category</th>
                  <th class="text-left py-3 px-4 text-gray-300 font-medium">Difficulty</th>
                  <th class="text-left py-3 px-4 text-gray-300 font-medium">Stats</th>
                  <th class="text-left py-3 px-4 text-gray-300 font-medium">Status</th>
                  <th class="text-left py-3 px-4 text-gray-300 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="track in filteredTracks" :key="track.id" class="border-b border-white/5 hover:bg-white/5">
                  <td class="py-3 px-4">
                    <div class="flex items-center space-x-3">
                      <div class="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
                        <span class="text-white text-sm font-medium">
                          {{ track.title.charAt(0) }}
                        </span>
                      </div>
                      <div>
                        <p class="text-white font-medium">{{ track.title }}</p>
                        <p class="text-gray-400 text-sm">{{ track.shortDescription || track.description.substring(0, 50) }}...</p>
                        <p class="text-gray-500 text-xs">{{ track.estimatedHours }} hours</p>
                      </div>
                    </div>
                  </td>
                  <td class="py-3 px-4">
                    <span class="px-2 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400">
                      {{ track.category.replace('_', ' ') }}
                    </span>
                  </td>
                  <td class="py-3 px-4">
                    <span :class="getDifficultyBadgeClass(track.difficulty)" class="px-2 py-1 rounded-full text-xs font-medium">
                      {{ track.difficulty }}
                    </span>
                  </td>
                  <td class="py-3 px-4">
                    <div class="space-y-1">
                      <div class="flex items-center space-x-2">
                        <span class="text-blue-400 text-xs">📚 {{ track.stats?.totalLessons || 0 }} lessons</span>
                        <span class="text-green-400 text-xs">🎯 {{ track.stats?.totalChallenges || 0 }} challenges</span>
                      </div>
                      <div class="flex items-center space-x-2">
                        <span class="text-purple-400 text-xs">👥 {{ track.stats?.totalEnrollments || 0 }} enrolled</span>
                        <span class="text-yellow-400 text-xs">✅ {{ track.stats?.completionRate || 0 }}% completion</span>
                      </div>
                    </div>
                  </td>
                  <td class="py-3 px-4">
                    <span :class="track.isPublished ? 'text-green-400' : 'text-orange-400'" class="text-xs">
                      {{ track.isPublished ? '✓ Published' : '✗ Draft' }}
                    </span>
                  </td>
                  <td class="py-3 px-4">
                    <div class="flex space-x-2">
                      <button @click="viewTrackDetails(track)" class="text-blue-400 hover:text-blue-300 text-xs">
                        View
                      </button>
                      <button @click="editTrack(track)" class="text-yellow-400 hover:text-yellow-300 text-xs">
                        Edit
                      </button>
                      <button @click="toggleTrackStatus(track)" :class="track.isPublished ? 'text-red-400 hover:text-red-300' : 'text-green-400 hover:text-green-300'" class="text-xs">
                        {{ track.isPublished ? 'Unpublish' : 'Publish' }}
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Course Management Section -->
      <div v-if="activeTab === 'courses'" class="mb-8">
        <div class="glass-card p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-xl font-bold text-white">Course Management</h2>
            <div class="flex space-x-2">
              <button @click="showCreateCourseModal = true" class="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                Create Course
              </button>
              <input
                v-model="courseSearchQuery"
                type="text"
                placeholder="Search courses..."
                class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-2 text-sm transition-all duration-300 focus:bg-white/8 focus:border-white/20 outline-none"
              />
              <select v-model="courseFilterCategory" class="admin-dropdown">
                <option value="">All Categories</option>
                <option value="WEB_DEVELOPMENT">Web Development</option>
                <option value="MOBILE_DEVELOPMENT">Mobile Development</option>
                <option value="DATA_SCIENCE">Data Science</option>
                <option value="MACHINE_LEARNING">Machine Learning</option>
                <option value="DEVOPS">DevOps</option>
                <option value="CYBERSECURITY">Cybersecurity</option>
                <option value="GAME_DEVELOPMENT">Game Development</option>
                <option value="BLOCKCHAIN">Blockchain</option>
                <option value="API_DEVELOPMENT">API Development</option>
                <option value="DATABASE">Database</option>
                <option value="ALGORITHMS">Algorithms</option>
                <option value="SYSTEM_DESIGN">System Design</option>
              </select>
            </div>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="border-b border-white/10">
                  <th class="text-left py-3 px-4 text-gray-300 font-medium">Course</th>
                  <th class="text-left py-3 px-4 text-gray-300 font-medium">Creator</th>
                  <th class="text-left py-3 px-4 text-gray-300 font-medium">Category</th>
                  <th class="text-left py-3 px-4 text-gray-300 font-medium">Stats</th>
                  <th class="text-left py-3 px-4 text-gray-300 font-medium">Status</th>
                  <th class="text-left py-3 px-4 text-gray-300 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="course in filteredCourses" :key="course.id" class="border-b border-white/5 hover:bg-white/5">
                  <td class="py-3 px-4">
                    <div class="flex items-center space-x-3">
                      <div class="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                        <span class="text-white text-sm font-medium">
                          {{ course.title.charAt(0) }}
                        </span>
                      </div>
                      <div>
                        <p class="text-white font-medium">{{ course.title }}</p>
                        <p class="text-gray-400 text-sm">{{ course.shortDescription || course.description.substring(0, 50) }}...</p>
                        <p class="text-gray-500 text-xs">{{ course.estimatedHours }} hours</p>
                        <span v-if="course.isAIGenerated" class="text-purple-400 text-xs">🤖 AI Generated</span>
                      </div>
                    </div>
                  </td>
                  <td class="py-3 px-4">
                    <div>
                      <p class="text-white text-sm">{{ course.creator?.firstName }} {{ course.creator?.lastName }}</p>
                      <p class="text-gray-400 text-xs">@{{ course.creator?.username }}</p>
                    </div>
                  </td>
                  <td class="py-3 px-4">
                    <span class="px-2 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400">
                      {{ course.category.replace('_', ' ') }}
                    </span>
                  </td>
                  <td class="py-3 px-4">
                    <div class="space-y-1">
                      <div class="flex items-center space-x-2">
                        <span class="text-blue-400 text-xs">📚 {{ course.stats?.totalLessons || 0 }} lessons</span>
                        <span class="text-green-400 text-xs">🎯 {{ course.stats?.totalChallenges || 0 }} challenges</span>
                      </div>
                      <div class="flex items-center space-x-2">
                        <span class="text-purple-400 text-xs">👥 {{ course.stats?.totalEnrollments || 0 }} enrolled</span>
                        <span class="text-yellow-400 text-xs">✅ {{ course.stats?.completionRate || 0 }}% completion</span>
                      </div>
                      <div class="flex items-center space-x-2">
                        <span class="text-orange-400 text-xs">📝 {{ course.stats?.totalQuizzes || 0 }} quizzes</span>
                        <span class="text-red-400 text-xs">📋 {{ course.stats?.totalExams || 0 }} exams</span>
                      </div>
                    </div>
                  </td>
                  <td class="py-3 px-4">
                    <span :class="course.isPublished ? 'text-green-400' : 'text-orange-400'" class="text-xs">
                      {{ course.isPublished ? '✓ Published' : '✗ Draft' }}
                    </span>
                  </td>
                  <td class="py-3 px-4">
                    <div class="flex space-x-2">
                      <button @click="viewCourseDetails(course)" class="text-blue-400 hover:text-blue-300 text-xs">
                        View
                      </button>
                      <button @click="editCourse(course)" class="text-yellow-400 hover:text-yellow-300 text-xs">
                        Edit
                      </button>
                      <button @click="toggleCourseStatus(course)" :class="course.isPublished ? 'text-red-400 hover:text-red-300' : 'text-green-400 hover:text-green-300'" class="text-xs">
                        {{ course.isPublished ? 'Unpublish' : 'Publish' }}
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- AI Course Requests Section -->
      <div v-if="activeTab === 'ai-requests'" class="mb-8">
        <div class="glass-card p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-xl font-bold text-white">AI Course Requests</h2>
            <div class="flex space-x-2">
              <input
                v-model="aiRequestSearchQuery"
                type="text"
                placeholder="Search requests..."
                class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-2 text-sm transition-all duration-300 focus:bg-white/8 focus:border-white/20 outline-none"
              />
              <select v-model="aiRequestFilterStatus" class="admin-dropdown">
                <option value="">All Status</option>
                <option value="PENDING">Pending</option>
                <option value="PROCESSING">Processing</option>
                <option value="COMPLETED">Completed</option>
                <option value="FAILED">Failed</option>
              </select>
            </div>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="border-b border-white/10">
                  <th class="text-left py-3 px-4 text-gray-300 font-medium">Request</th>
                  <th class="text-left py-3 px-4 text-gray-300 font-medium">User</th>
                  <th class="text-left py-3 px-4 text-gray-300 font-medium">Category</th>
                  <th class="text-left py-3 px-4 text-gray-300 font-medium">Status</th>
                  <th class="text-left py-3 px-4 text-gray-300 font-medium">Processing</th>
                  <th class="text-left py-3 px-4 text-gray-300 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="request in filteredAIRequests" :key="request.id" class="border-b border-white/5 hover:bg-white/5">
                  <td class="py-3 px-4">
                    <div class="flex items-center space-x-3">
                      <div class="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                        <span class="text-white text-sm font-medium">
                          🤖
                        </span>
                      </div>
                      <div>
                        <p class="text-white font-medium">{{ request.title }}</p>
                        <p class="text-gray-400 text-sm">{{ request.description.substring(0, 50) }}...</p>
                        <p class="text-gray-500 text-xs">{{ request.estimatedHours }} hours • {{ request.difficulty }}</p>
                      </div>
                    </div>
                  </td>
                  <td class="py-3 px-4">
                    <div>
                      <p class="text-white text-sm">{{ request.user?.firstName }} {{ request.user?.lastName }}</p>
                      <p class="text-gray-400 text-xs">@{{ request.user?.username }}</p>
                    </div>
                  </td>
                  <td class="py-3 px-4">
                    <span class="px-2 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-400">
                      {{ request.category.replace('_', ' ') }}
                    </span>
                  </td>
                  <td class="py-3 px-4">
                    <span :class="getAIRequestStatusBadgeClass(request.status)" class="px-2 py-1 rounded-full text-xs font-medium">
                      {{ request.status }}
                    </span>
                  </td>
                  <td class="py-3 px-4">
                    <div class="space-y-1">
                      <p class="text-gray-400 text-xs">{{ formatDate(request.createdAt) }}</p>
                      <p v-if="request.processingTime" class="text-blue-400 text-xs">{{ request.processingTime }} min</p>
                      <p v-if="request.hasGeneratedCourse" class="text-green-400 text-xs">✓ Course created</p>
                    </div>
                  </td>
                  <td class="py-3 px-4">
                    <div class="flex space-x-2">
                      <button @click="viewAIRequestDetails(request)" class="text-blue-400 hover:text-blue-300 text-xs">
                        View
                      </button>
                      <button v-if="request.status === 'COMPLETED' && !request.hasGeneratedCourse" @click="createCourseFromAI(request)" class="text-green-400 hover:text-green-300 text-xs">
                        Create Course
                      </button>
                      <button v-if="request.status === 'FAILED'" @click="retryAIRequest(request)" class="text-yellow-400 hover:text-yellow-300 text-xs">
                        Retry
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Analytics Section -->
      <div v-if="activeTab === 'analytics'" class="mb-8">
        <div class="glass-card p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-xl font-bold text-white">Analytics & Insights</h2>
            <div class="flex space-x-2">
              <select v-model="analyticsTimeRange" class="admin-dropdown">
                <option value="7">Last 7 days</option>
                <option value="30">Last 30 days</option>
                <option value="90">Last 90 days</option>
                <option value="365">Last year</option>
              </select>
            </div>
          </div>

          <!-- Charts Grid -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <!-- User Registration Chart -->
            <div class="bg-white/5 rounded-lg p-4">
              <h3 class="text-lg font-semibold text-white mb-4">User Registration Trend</h3>
              <div class="h-64 flex items-end justify-between space-x-1">
                <div v-for="(data, index) in stats.monthlyRegistrations" :key="index" class="flex-1 flex flex-col items-center">
                  <div class="w-full bg-gradient-to-t from-blue-500 to-blue-300 rounded-t-sm transition-all duration-300 hover:from-blue-400 hover:to-blue-200"
                       :style="{ height: `${Math.max(data.count * 10, 20)}px` }"
                       :title="`${data.month}: ${data.count} users`">
                  </div>
                  <span class="text-xs text-gray-400 mt-2 transform -rotate-45 origin-left">{{ data.month }}</span>
                </div>
              </div>
            </div>

            <!-- Daily Activity Chart -->
            <div class="bg-white/5 rounded-lg p-4">
              <h3 class="text-lg font-semibold text-white mb-4">Daily User Activity</h3>
              <div class="h-64 flex items-end justify-between space-x-1">
                <div v-for="(data, index) in stats.dailyActivity" :key="index" class="flex-1 flex flex-col items-center">
                  <div class="w-full bg-gradient-to-t from-green-500 to-green-300 rounded-t-sm transition-all duration-300 hover:from-green-400 hover:to-green-200"
                       :style="{ height: `${Math.max(data.count * 15, 20)}px` }"
                       :title="`${data.date}: ${data.count} active users`">
                  </div>
                  <span class="text-xs text-gray-400 mt-2">{{ data.date }}</span>
                </div>
              </div>
            </div>

            <!-- Category Distribution -->
            <div class="bg-white/5 rounded-lg p-4">
              <h3 class="text-lg font-semibold text-white mb-4">Track Categories</h3>
              <div class="space-y-3">
                <div v-for="data in stats.categoryDistribution" :key="data.category" class="flex items-center justify-between">
                  <span class="text-gray-300 text-sm">{{ data.category.replace('_', ' ') }}</span>
                  <div class="flex items-center space-x-2">
                    <div class="w-20 bg-gray-600 rounded-full h-2">
                      <div class="bg-purple-500 h-2 rounded-full transition-all duration-300"
                           :style="{ width: `${(data.count / Math.max(...stats.categoryDistribution.map(c => c.count))) * 100}%` }">
                      </div>
                    </div>
                    <span class="text-white text-sm font-medium">{{ data.count }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Difficulty Distribution -->
            <div class="bg-white/5 rounded-lg p-4">
              <h3 class="text-lg font-semibold text-white mb-4">Track Difficulty Levels</h3>
              <div class="space-y-3">
                <div v-for="data in stats.difficultyDistribution" :key="data.difficulty" class="flex items-center justify-between">
                  <span class="text-gray-300 text-sm">{{ data.difficulty }}</span>
                  <div class="flex items-center space-x-2">
                    <div class="w-20 bg-gray-600 rounded-full h-2">
                      <div class="bg-orange-500 h-2 rounded-full transition-all duration-300"
                           :style="{ width: `${(data.count / Math.max(...stats.difficultyDistribution.map(d => d.count))) * 100}%` }">
                      </div>
                    </div>
                    <span class="text-white text-sm font-medium">{{ data.count }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Club Certificates Section -->
          <div class="mt-8">
            <h3 class="text-lg font-semibold text-white mb-4">Club Certificate Management</h3>
            <div class="overflow-x-auto">
              <table class="w-full">
                <thead>
                  <tr class="border-b border-white/10">
                    <th class="text-left py-3 px-4 text-gray-300 font-medium">Club</th>
                    <th class="text-left py-3 px-4 text-gray-300 font-medium">School</th>
                    <th class="text-left py-3 px-4 text-gray-300 font-medium">Members</th>
                    <th class="text-left py-3 px-4 text-gray-300 font-medium">Progress</th>
                    <th class="text-left py-3 px-4 text-gray-300 font-medium">Completion %</th>
                    <th class="text-left py-3 px-4 text-gray-300 font-medium">Status</th>
                    <th class="text-left py-3 px-4 text-gray-300 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="club in stats.clubsForCertificates" :key="club.id" class="border-b border-white/5 hover:bg-white/5">
                    <td class="py-3 px-4">
                      <div class="flex items-center space-x-3">
                        <div class="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                          <span class="text-white text-sm font-medium">
                            🏆
                          </span>
                        </div>
                        <div>
                          <p class="text-white font-medium">{{ club.name }}</p>
                          <p class="text-gray-400 text-xs">{{ club.totalMembers }} members</p>
                        </div>
                      </div>
                    </td>
                    <td class="py-3 px-4">
                      <p class="text-white text-sm">{{ club.schoolName }}</p>
                    </td>
                    <td class="py-3 px-4">
                      <div class="space-y-1">
                        <p class="text-white text-sm">{{ club.totalMembers }}</p>
                        <p class="text-green-400 text-xs">{{ club.membersWithProgress }} with progress</p>
                        <p class="text-blue-400 text-xs">{{ club.membersWithCertificates }} with certificates</p>
                      </div>
                    </td>
                    <td class="py-3 px-4">
                      <div class="w-24 bg-gray-600 rounded-full h-2">
                        <div class="bg-green-500 h-2 rounded-full transition-all duration-300"
                             :style="{ width: `${club.completionPercentage}%` }">
                        </div>
                      </div>
                    </td>
                    <td class="py-3 px-4">
                      <span :class="club.completionPercentage >= 80 ? 'text-green-400' : 'text-yellow-400'" class="font-medium">
                        {{ club.completionPercentage }}%
                      </span>
                    </td>
                    <td class="py-3 px-4">
                      <span :class="club.isEligibleForCertificate ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'" 
                            class="px-2 py-1 rounded-full text-xs font-medium">
                        {{ club.isEligibleForCertificate ? 'Eligible' : 'In Progress' }}
                      </span>
                    </td>
                    <td class="py-3 px-4">
                      <button 
                        v-if="club.isEligibleForCertificate" 
                        @click="issueClubCertificate(club.id)"
                        class="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-3 py-1 rounded-md text-xs font-medium transition-all duration-300"
                      >
                        Issue Certificate
                      </button>
                      <span v-else class="text-gray-500 text-xs">Need 80% completion</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Top Performing Clubs -->
          <div class="mt-8">
            <h3 class="text-lg font-semibold text-white mb-4">Top Performing Clubs</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div v-for="(club, index) in stats.topClubs" :key="club.id" class="bg-white/5 rounded-lg p-4">
                <div class="flex items-center justify-between mb-3">
                  <div class="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                       :class="getLeaderboardRankClass(index)">
                    {{ index + 1 }}
                  </div>
                  <span class="text-green-400 text-sm font-medium">{{ club.completionPercentage }}%</span>
                </div>
                <h4 class="text-white font-medium mb-1">{{ club.name }}</h4>
                <p class="text-gray-400 text-xs mb-2">{{ club.schoolName }}</p>
                <div class="space-y-1">
                  <p class="text-gray-300 text-xs">{{ club.totalMembers }} total members</p>
                  <p class="text-green-400 text-xs">{{ club.membersWithProgress }} with progress</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Additional Dashboard Sections -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Leaderboard -->
        <div>
          <div class="glass-card p-6">
            <h2 class="text-xl font-bold text-white mb-6">Top Performers</h2>
            <div class="space-y-4">
              <div v-for="(user, index) in leaderboard" :key="user.id" class="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                <div class="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                     :class="getLeaderboardRankClass(index)">
                  {{ index + 1 }}
                </div>
                <div class="flex-1">
                  <p class="text-white font-medium">{{ user.firstName }} {{ user.lastName }}</p>
                  <p class="text-gray-400 text-xs">@{{ user.username }}</p>
                  <div class="flex items-center space-x-2 mt-1">
                    <span class="text-yellow-400 text-xs">⚡ {{ user.xpPoints }} XP</span>
                    <span class="text-blue-400 text-xs">📊 Lvl {{ user.level }}</span>
                  </div>
                </div>
                <div class="text-right">
                  <p class="text-green-400 text-xs">{{ user.completedChallenges }} challenges</p>
                  <p class="text-purple-400 text-xs">{{ user.completedTracks }} tracks</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Quick Stats -->
        <div>
          <div class="glass-card p-6">
            <h2 class="text-xl font-bold text-white mb-6">Quick Stats</h2>
            <div class="space-y-4">
              <div class="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <div>
                  <p class="text-gray-300 text-sm">Total Tracks</p>
                  <p class="text-2xl font-bold text-white">3</p>
                </div>
                <div class="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                </div>
              </div>
              
              <div class="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <div>
                  <p class="text-gray-300 text-sm">Total Challenges</p>
                  <p class="text-2xl font-bold text-white">2</p>
                </div>
                <div class="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
              </div>
              
              <div class="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <div>
                  <p class="text-gray-300 text-sm">Active Sessions</p>
                  <p class="text-2xl font-bold text-white">{{ stats.activeUsers }}</p>
                </div>
                <div class="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
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

// School and Club Management
const schools = ref([])
const clubs = ref([])
const activeTab = ref('users')
const schoolSearchQuery = ref('')
const schoolFilterStatus = ref('')
const clubSearchQuery = ref('')
const clubFilterCategory = ref('')

// Learning Content Management
const tracks = ref([])
const courses = ref([])
const aiRequests = ref([])
const trackSearchQuery = ref('')
const trackFilterCategory = ref('')
const courseSearchQuery = ref('')
const courseFilterCategory = ref('')
const aiRequestSearchQuery = ref('')
const aiRequestFilterStatus = ref('')

// Modal states
const showCreateTrackModal = ref(false)
const showCreateCourseModal = ref(false)

// Analytics
const analyticsTimeRange = ref('30')

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

const filteredSchools = computed(() => {
  let filtered = schools.value

  if (schoolSearchQuery.value) {
    const query = schoolSearchQuery.value.toLowerCase()
    filtered = filtered.filter(school => 
      school.name.toLowerCase().includes(query) ||
      school.email.toLowerCase().includes(query) ||
      school.city.toLowerCase().includes(query) ||
      school.adminName.toLowerCase().includes(query)
    )
  }

  if (schoolFilterStatus.value) {
    filtered = filtered.filter(school => school.status === schoolFilterStatus.value)
  }

  return filtered
})

const filteredClubs = computed(() => {
  let filtered = clubs.value

  if (clubSearchQuery.value) {
    const query = clubSearchQuery.value.toLowerCase()
    filtered = filtered.filter(club => 
      club.name.toLowerCase().includes(query) ||
      club.category.toLowerCase().includes(query) ||
      club.schoolName.toLowerCase().includes(query) ||
      club.creatorName.toLowerCase().includes(query)
    )
  }

  if (clubFilterCategory.value) {
    filtered = filtered.filter(club => club.category === clubFilterCategory.value)
  }

  return filtered
})

const filteredTracks = computed(() => {
  let filtered = tracks.value

  if (trackSearchQuery.value) {
    const query = trackSearchQuery.value.toLowerCase()
    filtered = filtered.filter(track => 
      track.title.toLowerCase().includes(query) ||
      track.description.toLowerCase().includes(query) ||
      track.category.toLowerCase().includes(query)
    )
  }

  if (trackFilterCategory.value) {
    filtered = filtered.filter(track => track.category === trackFilterCategory.value)
  }

  return filtered
})

const filteredCourses = computed(() => {
  let filtered = courses.value

  if (courseSearchQuery.value) {
    const query = courseSearchQuery.value.toLowerCase()
    filtered = filtered.filter(course => 
      course.title.toLowerCase().includes(query) ||
      course.description.toLowerCase().includes(query) ||
      course.category.toLowerCase().includes(query) ||
      course.creator?.firstName.toLowerCase().includes(query) ||
      course.creator?.lastName.toLowerCase().includes(query)
    )
  }

  if (courseFilterCategory.value) {
    filtered = filtered.filter(course => course.category === courseFilterCategory.value)
  }

  return filtered
})

const filteredAIRequests = computed(() => {
  let filtered = aiRequests.value

  if (aiRequestSearchQuery.value) {
    const query = aiRequestSearchQuery.value.toLowerCase()
    filtered = filtered.filter(request => 
      request.title.toLowerCase().includes(query) ||
      request.description.toLowerCase().includes(query) ||
      request.category.toLowerCase().includes(query) ||
      request.user?.firstName.toLowerCase().includes(query) ||
      request.user?.lastName.toLowerCase().includes(query)
    )
  }

  if (aiRequestFilterStatus.value) {
    filtered = filtered.filter(request => request.status === aiRequestFilterStatus.value)
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

const getSchoolStatusBadgeClass = (status) => {
  const classes = {
    PENDING: 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30',
    APPROVED: 'bg-green-500/20 text-green-300 border border-green-500/30',
    REJECTED: 'bg-red-500/20 text-red-300 border border-red-500/30',
    SUSPENDED: 'bg-orange-500/20 text-orange-300 border border-orange-500/30'
  }
  return classes[status] || 'bg-gray-500/20 text-gray-300 border border-gray-500/30'
}

const getDifficultyBadgeClass = (difficulty) => {
  const classes = {
    BEGINNER: 'bg-green-500/20 text-green-300 border border-green-500/30',
    INTERMEDIATE: 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30',
    ADVANCED: 'bg-orange-500/20 text-orange-300 border border-orange-500/30',
    EXPERT: 'bg-red-500/20 text-red-300 border border-red-500/30'
  }
  return classes[difficulty] || 'bg-gray-500/20 text-gray-300 border border-gray-500/30'
}

const getAIRequestStatusBadgeClass = (status) => {
  const classes = {
    PENDING: 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30',
    PROCESSING: 'bg-blue-500/20 text-blue-300 border border-blue-500/30',
    COMPLETED: 'bg-green-500/20 text-green-300 border border-green-500/30',
    FAILED: 'bg-red-500/20 text-red-300 border border-red-500/30'
  }
  return classes[status] || 'bg-gray-500/20 text-gray-300 border border-gray-500/30'
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

const toggleUserStatus = async (user) => {
  try {
    const token = useCookie('auth-token').value
    const response = await $fetch(`/api/admin/users/${user.id}/toggle-status`, {
      method: 'PATCH',
      body: { isActive: !user.isActive },
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    
    if (response.success) {
      // Update the user in the local state
      const userIndex = users.value.findIndex(u => u.id === user.id)
      if (userIndex !== -1) {
        users.value[userIndex].isActive = !user.isActive
      }
      
      // Show success message
      alert(response.message)
    }
  } catch (error) {
    console.error('Error toggling user status:', error)
    alert('Failed to update user status')
  }
}

const viewSchoolDetails = (school) => {
  // TODO: Implement school details modal/page
  console.log('View school details:', school)
}

const approveSchool = async (school, status) => {
  try {
    const token = useCookie('auth-token').value
    await $fetch(`/api/admin/schools/${school.id}/approve`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: { status }
    })
    
    // Refresh data
    await fetchDashboardData()
  } catch (error) {
    console.error('Error approving school:', error)
  }
}

const viewClubDetails = (club) => {
  // TODO: Implement club details modal/page
  console.log('View club details:', club)
}

const toggleClubStatus = async (club) => {
  try {
    const token = useCookie('auth-token').value
    const response = await $fetch(`/api/admin/clubs/${club.id}/toggle-status`, {
      method: 'PATCH',
      body: { isActive: !club.isActive },
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    
    if (response.success) {
      // Update the club in the local state
      const clubIndex = clubs.value.findIndex(c => c.id === club.id)
      if (clubIndex !== -1) {
        clubs.value[clubIndex].isActive = !club.isActive
      }
      
      // Show success message
      alert(response.message)
    }
  } catch (error) {
    console.error('Error toggling club status:', error)
    alert('Failed to update club status')
  }
}

// Track Management Methods
const viewTrackDetails = (track) => {
  // TODO: Implement track details modal/page
  console.log('View track details:', track)
}

const editTrack = (track) => {
  // TODO: Implement track edit modal/page
  console.log('Edit track:', track)
}

const toggleTrackStatus = async (track) => {
  try {
    const token = useCookie('auth-token').value
    const response = await $fetch(`/api/admin/tracks/${track.id}/toggle-status`, {
      method: 'PATCH',
      body: { isPublished: !track.isPublished },
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    
    if (response.success) {
      // Update the track in the local state
      const trackIndex = tracks.value.findIndex(t => t.id === track.id)
      if (trackIndex !== -1) {
        tracks.value[trackIndex].isPublished = !track.isPublished
      }
      
      // Show success message
      alert(response.message)
    }
  } catch (error) {
    console.error('Error toggling track status:', error)
    alert('Failed to update track status')
  }
}

// Course Management Methods
const viewCourseDetails = (course) => {
  // TODO: Implement course details modal/page
  console.log('View course details:', course)
}

const editCourse = (course) => {
  // TODO: Implement course edit modal/page
  console.log('Edit course:', course)
}

const toggleCourseStatus = async (course) => {
  try {
    const token = useCookie('auth-token').value
    const response = await $fetch(`/api/admin/courses/${course.id}/toggle-status`, {
      method: 'PATCH',
      body: { isPublished: !course.isPublished },
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    
    if (response.success) {
      // Update the course in the local state
      const courseIndex = courses.value.findIndex(c => c.id === course.id)
      if (courseIndex !== -1) {
        courses.value[courseIndex].isPublished = !course.isPublished
      }
      
      // Show success message
      alert(response.message)
    }
  } catch (error) {
    console.error('Error toggling course status:', error)
    alert('Failed to update course status')
  }
}

// AI Request Management Methods
const viewAIRequestDetails = (request) => {
  // TODO: Implement AI request details modal/page
  console.log('View AI request details:', request)
}

const createCourseFromAI = async (request) => {
  try {
    // TODO: Implement API call to create course from AI request
    console.log('Create course from AI request:', request.id)
    // await $fetch(`/api/admin/ai-course-requests/${request.id}/create-course`, {
    //   method: 'POST'
    // })
    // Refresh data
    await fetchDashboardData()
  } catch (error) {
    console.error('Error creating course from AI request:', error)
  }
}

const retryAIRequest = async (request) => {
  try {
    // TODO: Implement API call to retry AI request
    console.log('Retry AI request:', request.id)
    // await $fetch(`/api/admin/ai-course-requests/${request.id}/retry`, {
    //   method: 'POST'
    // })
    // Refresh data
    await fetchDashboardData()
  } catch (error) {
    console.error('Error retrying AI request:', error)
  }
}

const logout = () => {
  userData.value = null
  token.value = null
  navigateTo('/')
}

// Issue certificate to club
const issueClubCertificate = async (clubId) => {
  try {
    const response = await $fetch(`/api/admin/clubs/${clubId}/issue-certificate`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token.value}`
      }
    })

    if (response.success) {
      // Show success message
      alert(`Successfully issued ${response.data.certificatesIssued} certificates to ${response.data.clubName}!`)
      
      // Refresh dashboard data to update stats
      await fetchDashboardData()
    }
  } catch (error) {
    console.error('Error issuing certificate:', error)
    alert(error.data?.message || 'Failed to issue certificate')
  }
}

// Fetch dashboard data
const fetchDashboardData = async () => {
  try {
    const [statsData, usersData, leaderboardData, activityData, schoolsData, clubsData, tracksData, coursesData, aiRequestsData] = await Promise.all([
      $fetch('/api/admin/stats'),
      $fetch('/api/admin/users'),
      $fetch('/api/admin/leaderboard'),
      $fetch('/api/admin/recent-activity'),
      $fetch('/api/admin/schools'),
      $fetch('/api/admin/clubs'),
      $fetch('/api/admin/tracks'),
      $fetch('/api/admin/courses'),
      $fetch('/api/admin/ai-course-requests')
    ])

    stats.value = statsData
    users.value = usersData
    leaderboard.value = leaderboardData
    recentActivity.value = activityData
    schools.value = schoolsData
    clubs.value = clubsData
    tracks.value = tracksData.data || tracksData
    courses.value = coursesData.data || coursesData
    aiRequests.value = aiRequestsData.data || aiRequestsData
    
    console.log('Tracks data:', tracks.value)
    console.log('Courses data:', courses.value)
    console.log('AI Requests data:', aiRequests.value)
  } catch (error) {
    console.error('Error fetching dashboard data:', error)
  }
}

// Load data on mount
onMounted(() => {
  fetchDashboardData()
})
</script>

<style scoped>
.stats-card-blue {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 16px;
  backdrop-filter: blur(10px);
}

.stats-card-green {
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%);
  border: 1px solid rgba(34, 197, 94, 0.2);
  border-radius: 16px;
  backdrop-filter: blur(10px);
}

.stats-card-purple {
  background: linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%);
  border: 1px solid rgba(147, 51, 234, 0.2);
  border-radius: 16px;
  backdrop-filter: blur(10px);
}

.stats-card-orange {
  background: linear-gradient(135deg, rgba(249, 115, 22, 0.1) 0%, rgba(245, 101, 101, 0.1) 100%);
  border: 1px solid rgba(249, 115, 22, 0.2);
  border-radius: 16px;
  backdrop-filter: blur(10px);
}

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
  padding: 8px 12px;
  color: white;
  backdrop-filter: blur(10px);
}

.form-glass::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.form-glass:focus {
  outline: none;
  border-color: rgba(59, 130, 246, 0.5);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}
</style> 