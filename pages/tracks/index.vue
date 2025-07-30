<template>
  <div class="min-h-screen bg-gradient-to-br from-wecode-dark via-gray-900 to-wecode-dark relative overflow-hidden">
    <!-- Floating Background Elements -->
    <div class="floating-shapes">
      <div class="floating-code">&lt;/&gt;</div>
      <div class="floating-code">{ }</div>
      <div class="floating-code">&lt;div&gt;</div>
      <div class="floating-code">const</div>
      <div class="floating-code">function</div>
      <div class="floating-code">return</div>
    </div>

    <div class="container mx-auto px-4 py-12 relative z-10">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
          Choose Your
          <span class="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text">Learning Path</span>
        </h1>
        <p class="text-xl text-gray-300 max-w-2xl mx-auto">
          Master coding skills with our comprehensive learning tracks. Start your journey to becoming a professional developer.
        </p>
      </div>

      <!-- Tracks Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <!-- Web Fundamentals Track -->
        <div class="glass-card p-6 hover:scale-105 transition-transform duration-300">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-white">Web Fundamentals</h3>
              <p class="text-gray-400 text-sm">HTML, CSS, JavaScript</p>
            </div>
          </div>
          <p class="text-gray-300 mb-4">
            Learn the basics of web development with HTML, CSS, and JavaScript. Build your first websites and interactive applications.
          </p>
          <div class="flex items-center justify-between mb-4">
            <span class="text-blue-400 text-sm">Beginner</span>
            <span class="text-gray-400 text-sm">20 hours</span>
          </div>
          <NuxtLink to="/tracks/web-fundamentals" class="btn-primary w-full text-center">
            Start Learning
          </NuxtLink>
        </div>

        <!-- Python Programming Track -->
        <div class="glass-card p-6 hover:scale-105 transition-transform duration-300">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-white">Python Programming</h3>
              <p class="text-gray-400 text-sm">Python, Data Structures</p>
            </div>
          </div>
          <p class="text-gray-300 mb-4">
            Master Python programming from basics to advanced concepts. Learn data structures, algorithms, and problem-solving.
          </p>
          <div class="flex items-center justify-between mb-4">
            <span class="text-green-400 text-sm">Beginner</span>
            <span class="text-gray-400 text-sm">30 hours</span>
          </div>
          <NuxtLink to="/tracks/python-programming" class="btn-primary w-full text-center">
            Start Learning
          </NuxtLink>
        </div>

        <!-- Mobile Development Track -->
        <div class="glass-card p-6 hover:scale-105 transition-transform duration-300">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-white">Mobile Development</h3>
              <p class="text-gray-400 text-sm">React Native, Flutter</p>
            </div>
          </div>
          <p class="text-gray-300 mb-4">
            Build mobile applications for iOS and Android. Learn React Native and Flutter for cross-platform development.
          </p>
          <div class="flex items-center justify-between mb-4">
            <span class="text-purple-400 text-sm">Intermediate</span>
            <span class="text-gray-400 text-sm">40 hours</span>
          </div>
          <NuxtLink to="/tracks/mobile-development" class="btn-primary w-full text-center">
            Start Learning
          </NuxtLink>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div class="glass-card p-6 text-center">
          <div class="text-3xl font-bold text-blue-400 mb-2">500+</div>
          <div class="text-gray-300">Active Learners</div>
        </div>
        <div class="glass-card p-6 text-center">
          <div class="text-3xl font-bold text-green-400 mb-2">50+</div>
          <div class="text-gray-300">Challenges Completed</div>
        </div>
        <div class="glass-card p-6 text-center">
          <div class="text-3xl font-bold text-purple-400 mb-2">100+</div>
          <div class="text-gray-300">Certificates Issued</div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="text-center">
        <div class="glass-card p-8 max-w-2xl mx-auto">
          <h2 class="text-3xl font-bold text-white mb-4">
            Ready to Start Your Coding Journey?
          </h2>
          <p class="text-gray-300 mb-6">
            Join thousands of learners who have transformed their careers with our comprehensive coding courses.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink to="/auth/register" class="btn-primary">
              Get Started Free
            </NuxtLink>
            <NuxtLink to="/dashboard" class="btn-secondary">
              View Dashboard
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Learning Tracks - WeCodeZW',
  meta: [
    { name: 'description', content: 'Choose your learning path with our comprehensive coding tracks. Master web development, Python programming, and mobile development.' }
  ]
})
</script> 