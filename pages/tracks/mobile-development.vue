<template>
  <div>
    <!-- Floating Code Elements Background -->
    <div class="floating-shapes">
      <div class="floating-code" style="top: 10%; left: 10%; animation-delay: 0s;">
        import React from 'react';
      </div>
      <div class="floating-code" style="top: 20%; left: 80%; animation-delay: -3s;">
        const App = () => { return &lt;View&gt;; }
      </div>
      <div class="floating-code" style="top: 30%; left: 15%; animation-delay: -6s;">
        @State private var text = ""
      </div>
      <div class="floating-code" style="top: 40%; left: 70%; animation-delay: -9s;">
        flutter create my_app
      </div>
      <div class="floating-code" style="top: 50%; left: 25%; animation-delay: -12s;">
        npx react-native init App
      </div>
    </div>

    <!-- Hero Section -->
    <section class="relative py-20 lg:py-32">
      <div class="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-orange-500/20"></div>
      <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center mr-4">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <h1 class="text-4xl lg:text-5xl font-bold text-white">Mobile Development</h1>
                <p class="text-purple-400">Intermediate Track</p>
              </div>
            </div>
            <p class="text-xl text-gray-300 mb-8">
              Build native and cross-platform mobile applications for iOS and Android. Master React Native, Flutter, and mobile development best practices.
            </p>
            <div class="flex flex-wrap gap-4 mb-8">
              <span class="px-3 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full text-blue-400 text-sm">React Native</span>
              <span class="px-3 py-1 bg-purple-500/20 border border-purple-500/40 rounded-full text-purple-400 text-sm">Flutter</span>
              <span class="px-3 py-1 bg-green-500/20 border border-green-500/40 rounded-full text-green-400 text-sm">iOS/Android</span>
              <span class="px-3 py-1 bg-orange-500/20 border border-orange-500/40 rounded-full text-orange-400 text-sm">Mobile UI/UX</span>
            </div>
            <div class="flex flex-col sm:flex-row gap-4">
              <button class="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 px-8 rounded-lg font-semibold transition-all transform hover:scale-105">
                Start Learning Free
              </button>
              <button class="bg-white/10 border border-white/20 text-white py-3 px-8 rounded-lg font-semibold hover:bg-white/20 transition-all">
                View Curriculum
              </button>
            </div>
          </div>
          <div class="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
            <h3 class="text-2xl font-bold text-white mb-6">Track Overview</h3>
            <div class="space-y-6">
              <div class="flex items-center justify-between">
                <span class="text-gray-300">Duration</span>
                <span class="text-white font-semibold">12-18 weeks</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-gray-300">Lessons</span>
                <span class="text-white font-semibold">36 lessons</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-gray-300">Challenges</span>
                <span class="text-white font-semibold">25 projects</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-gray-300">Certificate</span>
                <span class="text-green-400 font-semibold">✓ Included</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-gray-300">Difficulty</span>
                <span class="text-purple-400 font-semibold">Intermediate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- What You'll Learn -->
    <section class="relative py-16 lg:py-24">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">What You'll Learn</h2>
          <p class="text-lg text-gray-300 max-w-3xl mx-auto">
            Master mobile app development with modern frameworks and tools for both iOS and Android platforms.
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8">
            <div class="w-12 h-12 bg-blue-500/20 border border-blue-500/40 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-4">React Native</h3>
            <p class="text-gray-300">
              Build cross-platform mobile apps using React Native with JavaScript and React concepts for both iOS and Android.
            </p>
          </div>

          <div class="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
            <div class="w-12 h-12 bg-purple-500/20 border border-purple-500/40 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-4">Flutter Development</h3>
            <p class="text-gray-300">
              Create beautiful, natively compiled applications for mobile, web, and desktop using Google's Flutter framework.
            </p>
          </div>

          <div class="bg-gradient-to-br from-green-500/10 to-teal-500/10 backdrop-blur-sm border border-green-500/20 rounded-xl p-8">
            <div class="w-12 h-12 bg-green-500/20 border border-green-500/40 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-4">Mobile UI/UX</h3>
            <p class="text-gray-300">
              Design intuitive and engaging mobile interfaces following platform-specific design guidelines and best practices.
            </p>
          </div>

          <div class="bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-sm border border-orange-500/20 rounded-xl p-8">
            <div class="w-12 h-12 bg-orange-500/20 border border-orange-500/40 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-4">State Management</h3>
            <p class="text-gray-300">
              Learn Redux, MobX, and other state management solutions for building scalable and maintainable mobile applications.
            </p>
          </div>

          <div class="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-8">
            <div class="w-12 h-12 bg-yellow-500/20 border border-yellow-500/40 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-4">Testing & Debugging</h3>
            <p class="text-gray-300">
              Master mobile app testing strategies, debugging techniques, and performance optimization for smooth user experiences.
            </p>
          </div>

          <div class="bg-gradient-to-br from-indigo-500/10 to-blue-500/10 backdrop-blur-sm border border-indigo-500/20 rounded-xl p-8">
            <div class="w-12 h-12 bg-indigo-500/20 border border-indigo-500/40 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-4">App Store Deployment</h3>
            <p class="text-gray-300">
              Learn to publish your apps to Google Play Store and Apple App Store with proper app store optimization and marketing.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="relative py-16 lg:py-24">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-xl p-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Build Mobile Apps?</h2>
          <p class="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of developers who have started their mobile development journey with our comprehensive track. Start learning today - completely free!
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 px-8 rounded-lg font-semibold transition-all transform hover:scale-105">
              Start Learning Free
            </button>
            <button class="bg-white/10 border border-white/20 text-white py-3 px-8 rounded-lg font-semibold hover:bg-white/20 transition-all">
              View All Tracks
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// SEO Meta
useHead({
  title: 'Mobile Development - WeCodeZW',
  meta: [
    { name: 'description', content: 'Learn mobile app development with React Native and Flutter. Build cross-platform mobile applications for iOS and Android with our free mobile development track.' }
  ]
})
</script> 