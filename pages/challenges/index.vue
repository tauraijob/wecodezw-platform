<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-20 lg:py-32">
      <div class="absolute inset-0 bg-gradient-to-br from-green-600/20 via-blue-600/20 to-purple-500/20"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
            Coding Challenges
          </h1>
          <p class="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Test your skills with real-world coding challenges. From beginner algorithms to advanced system design problems.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105">
              Start Challenge
            </button>
            <button class="border border-white/20 backdrop-blur-sm bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all">
              View Leaderboard
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-16 bg-slate-900/50 backdrop-blur-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-white mb-2">150+</div>
            <div class="text-gray-300">Active Challenges</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-white mb-2">5,000+</div>
            <div class="text-gray-300">Solutions Submitted</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-white mb-2">1,200+</div>
            <div class="text-gray-300">Active Coders</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
            <div class="text-gray-300">Available</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Filter Section -->
    <section class="py-8 bg-slate-900/30">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap gap-4 justify-center mb-8">
          <button class="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold">All Challenges</button>
          <button class="px-6 py-3 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-colors font-semibold">Beginner</button>
          <button class="px-6 py-3 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-colors font-semibold">Intermediate</button>
          <button class="px-6 py-3 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-colors font-semibold">Advanced</button>
          <button class="px-6 py-3 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-colors font-semibold">Expert</button>
        </div>
        
        <div class="flex flex-wrap gap-4 justify-center">
          <button class="px-4 py-2 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-colors">Algorithms</button>
          <button class="px-4 py-2 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-colors">Data Structures</button>
          <button class="px-4 py-2 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-colors">Web Development</button>
          <button class="px-4 py-2 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-colors">Database</button>
          <button class="px-4 py-2 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-colors">System Design</button>
        </div>
      </div>
    </section>

    <!-- Featured Challenges -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-5xl font-bold text-white mb-6">
            Featured Challenges
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Popular challenges that will test your problem-solving skills and help you prepare for technical interviews.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <!-- Challenge 1: Two Sum -->
          <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all">
            <div class="flex items-center justify-between mb-4">
              <span class="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm font-semibold">Beginner</span>
              <div class="flex items-center text-gray-300">
                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>4.8</span>
              </div>
            </div>
            <h3 class="text-xl font-semibold text-white mb-3">Two Sum Problem</h3>
            <p class="text-gray-300 mb-6">
              Given an array of integers and a target sum, find two numbers that add up to the target. Classic interview question perfect for beginners.
            </p>
            <div class="flex items-center justify-between mb-6">
              <div class="flex items-center space-x-4">
                <span class="text-gray-400 text-sm">📊 Array</span>
                <span class="text-gray-400 text-sm">⏱️ 15 min</span>
              </div>
              <span class="text-green-400 font-semibold">+50 XP</span>
            </div>
            <button class="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors">
              Solve Challenge
            </button>
          </div>

          <!-- Challenge 2: Binary Tree Traversal -->
          <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all">
            <div class="flex items-center justify-between mb-4">
              <span class="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm font-semibold">Intermediate</span>
              <div class="flex items-center text-gray-300">
                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>4.6</span>
              </div>
            </div>
            <h3 class="text-xl font-semibold text-white mb-3">Binary Tree Traversal</h3>
            <p class="text-gray-300 mb-6">
              Implement in-order, pre-order, and post-order traversal of a binary tree. Test your understanding of tree data structures.
            </p>
            <div class="flex items-center justify-between mb-6">
              <div class="flex items-center space-x-4">
                <span class="text-gray-400 text-sm">🌳 Trees</span>
                <span class="text-gray-400 text-sm">⏱️ 30 min</span>
              </div>
              <span class="text-blue-400 font-semibold">+100 XP</span>
            </div>
            <button class="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
              Solve Challenge
            </button>
          </div>

          <!-- Challenge 3: API Rate Limiter -->
          <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all">
            <div class="flex items-center justify-between mb-4">
              <span class="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm font-semibold">Advanced</span>
              <div class="flex items-center text-gray-300">
                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>4.9</span>
              </div>
            </div>
            <h3 class="text-xl font-semibold text-white mb-3">API Rate Limiter</h3>
            <p class="text-gray-300 mb-6">
              Design and implement a rate limiter for an API that allows a maximum number of requests per minute. Great for system design interviews.
            </p>
            <div class="flex items-center justify-between mb-6">
              <div class="flex items-center space-x-4">
                <span class="text-gray-400 text-sm">🏗️ System Design</span>
                <span class="text-gray-400 text-sm">⏱️ 45 min</span>
              </div>
              <span class="text-purple-400 font-semibold">+200 XP</span>
            </div>
            <button class="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors">
              Solve Challenge
            </button>
          </div>

          <!-- Challenge 4: Responsive Layout -->
          <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all">
            <div class="flex items-center justify-between mb-4">
              <span class="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm font-semibold">Beginner</span>
              <div class="flex items-center text-gray-300">
                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>4.7</span>
              </div>
            </div>
            <h3 class="text-xl font-semibold text-white mb-3">Responsive Card Layout</h3>
            <p class="text-gray-300 mb-6">
              Create a responsive card grid layout that adapts to different screen sizes using CSS Grid and Flexbox. Perfect for frontend developers.
            </p>
            <div class="flex items-center justify-between mb-6">
              <div class="flex items-center space-x-4">
                <span class="text-gray-400 text-sm">🎨 CSS</span>
                <span class="text-gray-400 text-sm">⏱️ 20 min</span>
              </div>
              <span class="text-green-400 font-semibold">+75 XP</span>
            </div>
            <button class="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors">
              Solve Challenge
            </button>
          </div>

          <!-- Challenge 5: Database Query Optimization -->
          <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all">
            <div class="flex items-center justify-between mb-4">
              <span class="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm font-semibold">Intermediate</span>
              <div class="flex items-center text-gray-300">
                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>4.5</span>
              </div>
            </div>
            <h3 class="text-xl font-semibold text-white mb-3">SQL Query Optimization</h3>
            <p class="text-gray-300 mb-6">
              Optimize slow database queries by improving indexes, rewriting queries, and analyzing execution plans. Essential for backend developers.
            </p>
            <div class="flex items-center justify-between mb-6">
              <div class="flex items-center space-x-4">
                <span class="text-gray-400 text-sm">🗄️ Database</span>
                <span class="text-gray-400 text-sm">⏱️ 35 min</span>
              </div>
              <span class="text-blue-400 font-semibold">+150 XP</span>
            </div>
            <button class="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
              Solve Challenge
            </button>
          </div>

          <!-- Challenge 6: Microservices Architecture -->
          <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all">
            <div class="flex items-center justify-between mb-4">
              <span class="px-3 py-1 bg-red-600/20 text-red-400 rounded-full text-sm font-semibold">Expert</span>
              <div class="flex items-center text-gray-300">
                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>4.8</span>
              </div>
            </div>
            <h3 class="text-xl font-semibold text-white mb-3">Microservices Design</h3>
            <p class="text-gray-300 mb-6">
              Design a microservices architecture for an e-commerce platform. Consider scalability, fault tolerance, and service communication patterns.
            </p>
            <div class="flex items-center justify-between mb-6">
              <div class="flex items-center space-x-4">
                <span class="text-gray-400 text-sm">🏗️ Architecture</span>
                <span class="text-gray-400 text-sm">⏱️ 60 min</span>
              </div>
              <span class="text-red-400 font-semibold">+300 XP</span>
            </div>
            <button class="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors">
              Solve Challenge
            </button>
          </div>

        </div>
      </div>
    </section>

    <!-- Daily Challenge Section -->
    <section class="py-20 bg-slate-900/30">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
          <div class="text-center">
            <h2 class="text-3xl md:text-5xl font-bold text-white mb-6">
              🔥 Daily Challenge
            </h2>
            <p class="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Take on today's special challenge and compete with developers worldwide. New challenge every day at midnight!
            </p>
            <div class="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-2xl mx-auto mb-8">
              <h3 class="text-2xl font-bold text-white mb-4">Longest Palindromic Substring</h3>
              <p class="text-gray-300 mb-6">
                Given a string, find the longest palindromic substring. A palindrome reads the same backward as forward.
              </p>
              <div class="flex items-center justify-center space-x-8 mb-6">
                <div class="text-center">
                  <div class="text-2xl font-bold text-blue-400">⏰ 23:45:12</div>
                  <div class="text-gray-400">Time Remaining</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl font-bold text-green-400">🏆 +500 XP</div>
                  <div class="text-gray-400">Bonus Reward</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl font-bold text-purple-400">👥 847</div>
                  <div class="text-gray-400">Participants</div>
                </div>
              </div>
              <button class="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105">
                Accept Daily Challenge
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Leaderboard Preview -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-5xl font-bold text-white mb-6">
            🏆 Top Performers
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            See how you rank against other developers in Zimbabwe and around the world.
          </p>
        </div>

        <div class="max-w-2xl mx-auto">
          <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <div class="space-y-4">
              <div class="flex items-center justify-between p-4 bg-yellow-600/20 rounded-lg border border-yellow-600/30">
                <div class="flex items-center">
                  <span class="text-2xl mr-4">🥇</span>
                  <div>
                    <div class="font-semibold text-white">Tendai Mukamuri</div>
                    <div class="text-gray-400 text-sm">Harare, Zimbabwe</div>
                  </div>
                </div>
                <div class="text-right">
                  <div class="font-bold text-yellow-400">12,450 XP</div>
                  <div class="text-gray-400 text-sm">95 challenges</div>
                </div>
              </div>

              <div class="flex items-center justify-between p-4 bg-gray-600/20 rounded-lg border border-gray-600/30">
                <div class="flex items-center">
                  <span class="text-2xl mr-4">🥈</span>
                  <div>
                    <div class="font-semibold text-white">Chipo Zvobgo</div>
                    <div class="text-gray-400 text-sm">Bulawayo, Zimbabwe</div>
                  </div>
                </div>
                <div class="text-right">
                  <div class="font-bold text-gray-300">11,230 XP</div>
                  <div class="text-gray-400 text-sm">87 challenges</div>
                </div>
              </div>

              <div class="flex items-center justify-between p-4 bg-amber-700/20 rounded-lg border border-amber-700/30">
                <div class="flex items-center">
                  <span class="text-2xl mr-4">🥉</span>
                  <div>
                    <div class="font-semibold text-white">Farai Mazviona</div>
                    <div class="text-gray-400 text-sm">Gweru, Zimbabwe</div>
                  </div>
                </div>
                <div class="text-right">
                  <div class="font-bold text-amber-400">9,890 XP</div>
                  <div class="text-gray-400 text-sm">76 challenges</div>
                </div>
              </div>
            </div>

            <div class="text-center mt-8">
              <button class="border border-white/20 backdrop-blur-sm bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold transition-all">
                View Full Leaderboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Coding Challenges - WeCodeZW',
  meta: [
    {
      name: 'description',
      content: 'Test your programming skills with our coding challenges. From beginner algorithms to advanced system design problems. Join thousands of developers in Zimbabwe.'
    }
  ]
})
</script> 