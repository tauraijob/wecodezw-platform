<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-20 lg:py-32">
      <div class="absolute inset-0 bg-gradient-to-br from-pink-600/20 via-purple-600/20 to-blue-500/20"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
            Join Our Community
          </h1>
          <p class="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Connect with thousands of Zimbabwean developers. Share knowledge, collaborate on projects, and grow together in our vibrant tech community.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105">
              Join Community
            </button>
            <button class="border border-white/20 backdrop-blur-sm bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all">
              Browse Discussions
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Community Stats -->
    <section class="py-16 bg-slate-900/50 backdrop-blur-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-white mb-2">8,500+</div>
            <div class="text-gray-300">Community Members</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-white mb-2">150+</div>
            <div class="text-gray-300">Active Discussions</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-white mb-2">25+</div>
            <div class="text-gray-300">Monthly Events</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
            <div class="text-gray-300">Open Source Projects</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Community Features -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-5xl font-bold text-white mb-6">
            Why Join Our Community?
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            More than just a forum - we're building Zimbabwe's strongest developer network.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <!-- Feature 1 -->
          <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all">
            <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-white mb-4">24/7 Help & Support</h3>
            <p class="text-gray-300">
              Get help when you're stuck on a coding problem. Our community members are always ready to lend a hand, day or night.
            </p>
          </div>

          <!-- Feature 2 -->
          <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all">
            <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-white mb-4">Job Opportunities</h3>
            <p class="text-gray-300">
              Access exclusive job postings from Zimbabwe's top tech companies. Many of our members have found their dream jobs through the community.
            </p>
          </div>

          <!-- Feature 3 -->
          <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all">
            <div class="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-white mb-4">Mentorship Program</h3>
            <p class="text-gray-300">
              Connect with experienced developers who can guide your career. Whether you're a beginner or looking to advance, find your mentor here.
            </p>
          </div>

          <!-- Feature 4 -->
          <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all">
            <div class="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-white mb-4">Project Collaboration</h3>
            <p class="text-gray-300">
              Work on real projects with other developers. Build your portfolio while contributing to meaningful open-source projects.
            </p>
          </div>

          <!-- Feature 5 -->
          <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all">
            <div class="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-white mb-4">Events & Workshops</h3>
            <p class="text-gray-300">
              Join weekly coding sessions, tech talks, and workshops. Learn from industry experts and network with fellow developers.
            </p>
          </div>

          <!-- Feature 6 -->
          <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all">
            <div class="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-white mb-4">Innovation Hub</h3>
            <p class="text-gray-300">
              Share your ideas and get feedback from the community. Launch startup projects and find co-founders in our innovation hub.
            </p>
          </div>

        </div>
      </div>
    </section>

    <!-- Recent Discussions -->
    <section class="py-20 bg-slate-900/30">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-5xl font-bold text-white mb-6">
            Recent Discussions
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            See what the community is talking about right now.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <!-- Discussion 1 -->
          <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span class="text-white font-semibold">TM</span>
              </div>
              <div class="flex-1">
                <div class="flex items-center justify-between mb-2">
                  <h3 class="font-semibold text-white">Best practices for React state management</h3>
                  <span class="text-sm text-gray-400">2h ago</span>
                </div>
                <p class="text-gray-300 text-sm mb-3">
                  What are your thoughts on using Redux vs Context API for large applications? I'm working on an e-commerce project and...
                </p>
                <div class="flex items-center space-x-4 text-sm text-gray-400">
                  <span>👤 Tendai Mukamuri</span>
                  <span>💬 15 replies</span>
                  <span>❤️ 23 likes</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Discussion 2 -->
          <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span class="text-white font-semibold">CZ</span>
              </div>
              <div class="flex-1">
                <div class="flex items-center justify-between mb-2">
                  <h3 class="font-semibold text-white">Junior Developer Seeking Mentorship</h3>
                  <span class="text-sm text-gray-400">4h ago</span>
                </div>
                <p class="text-gray-300 text-sm mb-3">
                  Hi everyone! I just completed the Python track and I'm looking for a mentor to help guide my career path. Any senior developers...
                </p>
                <div class="flex items-center space-x-4 text-sm text-gray-400">
                  <span>👤 Chipo Zvobgo</span>
                  <span>💬 8 replies</span>
                  <span>❤️ 12 likes</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Discussion 3 -->
          <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span class="text-white font-semibold">FM</span>
              </div>
              <div class="flex-1">
                <div class="flex items-center justify-between mb-2">
                  <h3 class="font-semibold text-white">Open Source Project: Zimbabwe Tourism App</h3>
                  <span class="text-sm text-gray-400">6h ago</span>
                </div>
                <p class="text-gray-300 text-sm mb-3">
                  Looking for contributors to build a tourism app showcasing Zimbabwe's beautiful destinations. Need frontend and backend developers...
                </p>
                <div class="flex items-center space-x-4 text-sm text-gray-400">
                  <span>👤 Farai Mazviona</span>
                  <span>💬 25 replies</span>
                  <span>❤️ 45 likes</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Discussion 4 -->
          <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span class="text-white font-semibold">NK</span>
              </div>
              <div class="flex-1">
                <div class="flex items-center justify-between mb-2">
                  <h3 class="font-semibold text-white">Tech Salary Survey Results 2024</h3>
                  <span class="text-sm text-gray-400">1d ago</span>
                </div>
                <p class="text-gray-300 text-sm mb-3">
                  Here are the results from our annual tech salary survey for Zimbabwe. Some interesting insights about remote work and...
                </p>
                <div class="flex items-center space-x-4 text-sm text-gray-400">
                  <span>👤 Nyasha Kanengoni</span>
                  <span>💬 42 replies</span>
                  <span>❤️ 87 likes</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div class="text-center mt-12">
          <button class="border border-white/20 backdrop-blur-sm bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold transition-all">
            View All Discussions
          </button>
        </div>
      </div>
    </section>

    <!-- Upcoming Events -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-5xl font-bold text-white mb-6">
            Upcoming Events
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Join us for exciting tech events, workshops, and networking sessions.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <!-- Event 1 -->
          <div class="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8 hover:from-blue-500/20 hover:to-cyan-500/20 transition-all">
            <div class="text-center mb-4">
              <div class="text-3xl font-bold text-blue-400 mb-1">29</div>
              <div class="text-blue-300 text-sm">JUL 2024</div>
            </div>
            <h3 class="text-xl font-semibold text-white mb-3">React Workshop</h3>
            <p class="text-gray-300 mb-4 text-sm">
              Learn advanced React patterns and best practices in this hands-on workshop. Perfect for intermediate developers.
            </p>
            <div class="flex items-center justify-between text-sm text-gray-400 mb-4">
              <span>📍 Virtual</span>
              <span>⏰ 6:00 PM CAT</span>
            </div>
            <button class="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
              Register Free
            </button>
          </div>

          <!-- Event 2 -->
          <div class="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 hover:from-purple-500/20 hover:to-pink-500/20 transition-all">
            <div class="text-center mb-4">
              <div class="text-3xl font-bold text-purple-400 mb-1">03</div>
              <div class="text-purple-300 text-sm">AUG 2024</div>
            </div>
            <h3 class="text-xl font-semibold text-white mb-3">AI & Machine Learning Meetup</h3>
            <p class="text-gray-300 mb-4 text-sm">
              Explore the latest trends in AI and ML with industry experts. Includes live coding demos and Q&A sessions.
            </p>
            <div class="flex items-center justify-between text-sm text-gray-400 mb-4">
              <span>📍 Harare</span>
              <span>⏰ 2:00 PM CAT</span>
            </div>
            <button class="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors">
              Register Free
            </button>
          </div>

          <!-- Event 3 -->
          <div class="bg-gradient-to-br from-green-500/10 to-teal-500/10 backdrop-blur-sm border border-green-500/20 rounded-xl p-8 hover:from-green-500/20 hover:to-teal-500/20 transition-all">
            <div class="text-center mb-4">
              <div class="text-3xl font-bold text-green-400 mb-1">10</div>
              <div class="text-green-300 text-sm">AUG 2024</div>
            </div>
            <h3 class="text-xl font-semibold text-white mb-3">Career Day</h3>
            <p class="text-gray-300 mb-4 text-sm">
              Connect with Zimbabwe's top tech companies. Resume reviews, mock interviews, and networking opportunities.
            </p>
            <div class="flex items-center justify-between text-sm text-gray-400 mb-4">
              <span>📍 Bulawayo</span>
              <span>⏰ 9:00 AM CAT</span>
            </div>
            <button class="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors">
              Register Free
            </button>
          </div>

        </div>
      </div>
    </section>

    <!-- Community Guidelines -->
    <section class="py-20 bg-slate-900/30">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
          <div class="text-center mb-8">
            <h2 class="text-3xl md:text-5xl font-bold text-white mb-6">
              Community Guidelines
            </h2>
            <p class="text-xl text-gray-300 max-w-3xl mx-auto">
              To maintain a positive and inclusive environment for everyone, please follow these simple guidelines.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-white mb-2">Be Respectful</h3>
              <p class="text-gray-300 text-sm">Treat everyone with kindness and respect, regardless of their skill level or background.</p>
            </div>

            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-white mb-2">Keep It Professional</h3>
              <p class="text-gray-300 text-sm">Maintain professional standards in all communications and avoid off-topic discussions.</p>
            </div>

            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-white mb-2">Help Others</h3>
              <p class="text-gray-300 text-sm">Share your knowledge and help fellow developers solve problems and grow their skills.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Community - WeCodeZW',
  meta: [
    {
      name: 'description',
      content: 'Join the vibrant WeCodeZW developer community. Connect with thousands of Zimbabwean developers, collaborate on projects, and grow your tech career together.'
    }
  ]
})
</script> 