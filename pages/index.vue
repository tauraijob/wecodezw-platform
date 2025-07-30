<template>
  <div class="min-h-screen relative overflow-hidden">
    <!-- Floating Background Elements -->
    <div class="floating-shapes">
      <div class="floating-code">&lt;/&gt;</div>
      <div class="floating-code">{ }</div>
      <div class="floating-code">&lt;div&gt;</div>
      <div class="floating-code">const</div>
      <div class="floating-code">function</div>
      <div class="floating-code">import</div>
      <div class="floating-code">export</div>
      <div class="floating-code">return</div>
    </div>

    <!-- Hero Section -->
    <section class="hero-bg relative z-10">
      <div class="container mx-auto px-4 py-20">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-5xl md:text-7xl font-bold text-white mb-6">
            Master Coding with
            <span class="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text">
              WeCode
            </span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Learn to code for free with interactive challenges, real projects, and earn certificates. 
            Join thousands of developers building their future.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink 
              to="/tracks" 
              class="btn-primary text-lg px-8 py-4"
            >
              Start Learning Free
            </NuxtLink>
            <NuxtLink 
              to="/challenges" 
              class="glass-button text-lg px-8 py-4"
            >
              Try Challenges
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-16 relative z-10">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div class="stats-card-blue text-center p-6">
            <div class="text-3xl font-bold text-white mb-2">10K+</div>
            <div class="text-gray-300">Active Learners</div>
          </div>
          <div class="stats-card-green text-center p-6">
            <div class="text-3xl font-bold text-white mb-2">500+</div>
            <div class="text-gray-300">Challenges</div>
          </div>
          <div class="stats-card-purple text-center p-6">
            <div class="text-3xl font-bold text-white mb-2">50+</div>
            <div class="text-gray-300">Projects</div>
          </div>
          <div class="stats-card-orange text-center p-6">
            <div class="text-3xl font-bold text-white mb-2">100%</div>
            <div class="text-gray-300">Free Access</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 relative z-10">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-white mb-4">Why Choose WeCode?</h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to become a professional developer, completely free
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="feature-card p-8">
            <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-white mb-4">Interactive Learning</h3>
            <p class="text-gray-300 leading-relaxed">
              Learn by doing with hands-on coding challenges, real-time feedback, and live code execution.
            </p>
          </div>

          <div class="feature-card p-8">
            <div class="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-white mb-4">Structured Curriculum</h3>
            <p class="text-gray-300 leading-relaxed">
              Follow carefully designed learning paths from beginner to advanced, with clear progression.
            </p>
          </div>

          <div class="feature-card p-8">
            <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-white mb-4">Earn Certificates</h3>
            <p class="text-gray-300 leading-relaxed">
              Get recognized for your achievements with professional certificates upon completion.
            </p>
          </div>

          <div class="feature-card p-8">
            <div class="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-white mb-4">Join Community</h3>
            <p class="text-gray-300 leading-relaxed">
              Connect with fellow developers, share projects, and get help from the community.
            </p>
          </div>

          <div class="feature-card p-8">
            <div class="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-white mb-4">Real Projects</h3>
            <p class="text-gray-300 leading-relaxed">
              Build portfolio-worthy projects that demonstrate your skills to potential employers.
            </p>
          </div>

          <div class="feature-card p-8">
            <div class="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-white mb-4">Learn at Your Pace</h3>
            <p class="text-gray-300 leading-relaxed">
              Study whenever and wherever you want. Your progress is saved automatically.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Popular Tracks Section -->
    <section class="py-20 relative z-10">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-white mb-4">Popular Learning Tracks</h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose your path and start building your coding career
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="track-card p-8">
            <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-white mb-4">Web Fundamentals</h3>
            <p class="text-gray-300 mb-6 leading-relaxed">
              Master HTML, CSS, and JavaScript to build modern, responsive websites.
            </p>
            <div class="flex items-center justify-between mb-6">
              <span class="text-sm text-gray-400">Duration: 8 weeks</span>
              <span class="text-sm text-gray-400">15 lessons</span>
            </div>
            <NuxtLink to="/tracks/web-fundamentals" class="btn-primary w-full text-center">
              Start Learning
            </NuxtLink>
          </div>

          <div class="track-card p-8">
            <div class="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-white mb-4">Python Programming</h3>
            <p class="text-gray-300 mb-6 leading-relaxed">
              Learn Python from basics to advanced concepts including web development and data science.
            </p>
            <div class="flex items-center justify-between mb-6">
              <span class="text-sm text-gray-400">Duration: 12 weeks</span>
              <span class="text-sm text-gray-400">20 lessons</span>
            </div>
            <NuxtLink to="/tracks/python-programming" class="btn-primary w-full text-center">
              Start Learning
            </NuxtLink>
          </div>

          <div class="track-card p-8">
            <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-white mb-4">Mobile Development</h3>
            <p class="text-xl text-gray-300 mb-6 leading-relaxed">
              Build mobile apps with React Native and Flutter for iOS and Android platforms.
            </p>
            <div class="flex items-center justify-between mb-6">
              <span class="text-sm text-gray-400">Duration: 10 weeks</span>
              <span class="text-sm text-gray-400">18 lessons</span>
            </div>
            <NuxtLink to="/tracks/mobile-development" class="btn-primary w-full text-center">
              Start Learning
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 relative z-10">
      <div class="container mx-auto px-4">
        <div class="glass-card p-12 text-center max-w-4xl mx-auto">
          <h2 class="text-4xl font-bold text-white mb-6">
            Ready to Start Your Coding Journey?
          </h2>
          <p class="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of developers who have transformed their careers with WeCode. 
            Start learning today and build your future in tech.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink to="/auth/register" class="btn-primary text-lg px-8 py-4">
              Get Started Free
            </NuxtLink>
            <NuxtLink to="/tracks" class="glass-button text-lg px-8 py-4">
              Browse All Tracks
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'WeCode - Learn to Code for Free',
  meta: [
    { name: 'description', content: 'Learn to code for free with interactive challenges, real projects, and earn certificates. Join thousands of developers building their future.' }
  ]
})
</script> 