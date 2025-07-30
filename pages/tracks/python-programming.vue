<template>
  <div>
    <!-- Floating Code Elements Background -->
    <div class="floating-shapes">
      <div class="floating-code" style="top: 10%; left: 10%; animation-delay: 0s;">
        def hello_world(): print("Hello Python!")
      </div>
      <div class="floating-code" style="top: 20%; left: 80%; animation-delay: -3s;">
        import pandas as pd
      </div>
      <div class="floating-code" style="top: 30%; left: 15%; animation-delay: -6s;">
        class MyClass: def __init__(self): pass
      </div>
      <div class="floating-code" style="top: 40%; left: 70%; animation-delay: -9s;">
        pip install flask
      </div>
      <div class="floating-code" style="top: 50%; left: 25%; animation-delay: -12s;">
        for i in range(10): print(i)
      </div>
    </div>

    <!-- Hero Section -->
    <section class="relative py-20 lg:py-32">
      <div class="absolute inset-0 bg-gradient-to-br from-green-600/20 via-blue-600/20 to-yellow-500/20"></div>
      <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-400 rounded-lg flex items-center justify-center mr-4">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
              </div>
              <div>
                <h1 class="text-4xl lg:text-5xl font-bold text-white">Python Programming</h1>
                <p class="text-green-400">Beginner to Intermediate</p>
              </div>
            </div>
            <p class="text-xl text-gray-300 mb-8">
              Master Python programming from basics to advanced concepts. Build web applications, data analysis tools, and automation scripts.
            </p>
            <div class="flex flex-wrap gap-4 mb-8">
              <span class="px-3 py-1 bg-green-500/20 border border-green-500/40 rounded-full text-green-400 text-sm">Python 3</span>
              <span class="px-3 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full text-blue-400 text-sm">Flask/Django</span>
              <span class="px-3 py-1 bg-yellow-500/20 border border-yellow-500/40 rounded-full text-yellow-400 text-sm">Data Science</span>
              <span class="px-3 py-1 bg-purple-500/20 border border-purple-500/40 rounded-full text-purple-400 text-sm">Automation</span>
            </div>
            <div class="flex flex-col sm:flex-row gap-4">
              <button class="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white py-3 px-8 rounded-lg font-semibold transition-all transform hover:scale-105">
                Start Learning Free
              </button>
              <button class="bg-white/10 border border-white/20 text-white py-3 px-8 rounded-lg font-semibold hover:bg-white/20 transition-all">
                View Curriculum
              </button>
            </div>
          </div>
          <div class="bg-gradient-to-br from-green-500/10 to-blue-500/10 backdrop-blur-sm border border-green-500/20 rounded-xl p-8">
            <h3 class="text-2xl font-bold text-white mb-6">Track Overview</h3>
            <div class="space-y-6">
              <div class="flex items-center justify-between">
                <span class="text-gray-300">Duration</span>
                <span class="text-white font-semibold">10-16 weeks</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-gray-300">Lessons</span>
                <span class="text-white font-semibold">32 lessons</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-gray-300">Challenges</span>
                <span class="text-white font-semibold">20 projects</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-gray-300">Certificate</span>
                <span class="text-green-400 font-semibold">✓ Included</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-gray-300">Difficulty</span>
                <span class="text-green-400 font-semibold">Beginner-Intermediate</span>
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
            From Python basics to advanced web development and data science applications.
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-gradient-to-br from-green-500/10 to-blue-500/10 backdrop-blur-sm border border-green-500/20 rounded-xl p-8">
            <div class="w-12 h-12 bg-green-500/20 border border-green-500/40 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-4">Python Fundamentals</h3>
            <p class="text-gray-300">
              Master Python syntax, data types, control structures, functions, and object-oriented programming concepts.
            </p>
          </div>

          <div class="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8">
            <div class="w-12 h-12 bg-blue-500/20 border border-blue-500/40 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-4">Web Development</h3>
            <p class="text-gray-300">
              Build web applications using Flask and Django frameworks with database integration and REST APIs.
            </p>
          </div>

          <div class="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-8">
            <div class="w-12 h-12 bg-yellow-500/20 border border-yellow-500/40 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-4">Data Science</h3>
            <p class="text-gray-300">
              Learn data analysis with pandas, numpy, matplotlib, and scikit-learn for machine learning applications.
            </p>
          </div>

          <div class="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
            <div class="w-12 h-12 bg-purple-500/20 border border-purple-500/40 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-4">Automation</h3>
            <p class="text-gray-300">
              Create automation scripts for file processing, web scraping, and system administration tasks.
            </p>
          </div>

          <div class="bg-gradient-to-br from-red-500/10 to-pink-500/10 backdrop-blur-sm border border-red-500/20 rounded-xl p-8">
            <div class="w-12 h-12 bg-red-500/20 border border-red-500/40 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-4">Testing & Debugging</h3>
            <p class="text-gray-300">
              Learn unit testing, debugging techniques, and best practices for writing clean, maintainable Python code.
            </p>
          </div>

          <div class="bg-gradient-to-br from-indigo-500/10 to-blue-500/10 backdrop-blur-sm border border-indigo-500/20 rounded-xl p-8">
            <div class="w-12 h-12 bg-indigo-500/20 border border-indigo-500/40 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-4">Real Projects</h3>
            <p class="text-gray-300">
              Build portfolio projects including web apps, data analysis tools, automation scripts, and API services.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="relative py-16 lg:py-24">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="bg-gradient-to-br from-green-500/10 to-blue-500/10 backdrop-blur-sm border border-green-500/20 rounded-xl p-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Master Python?</h2>
          <p class="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of learners who have started their Python programming journey with our comprehensive track. Start learning today - completely free!
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white py-3 px-8 rounded-lg font-semibold transition-all transform hover:scale-105">
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
  title: 'Python Programming - WeCodeZW',
  meta: [
    { name: 'description', content: 'Learn Python programming from basics to advanced concepts. Build web applications, data analysis tools, and automation scripts with our free Python track.' }
  ]
})
</script> 