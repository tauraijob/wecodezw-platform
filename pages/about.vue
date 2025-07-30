<template>
  <div>
    <!-- Floating Code Elements Background -->
    <div class="floating-shapes">
      <div class="floating-code" style="top: 10%; left: 10%; animation-delay: 0s;">
        const about = () => { return 'mission'; }
      </div>
      <div class="floating-code" style="top: 20%; left: 80%; animation-delay: -3s;">
        &lt;About /&gt; 
      </div>
      <div class="floating-code" style="top: 30%; left: 15%; animation-delay: -6s;">
        function mission() { return success; }
      </div>
      <div class="floating-code" style="top: 40%; left: 70%; animation-delay: -9s;">
        npm install community
      </div>
      <div class="floating-code" style="top: 50%; left: 25%; animation-delay: -12s;">
        git commit -m "about page"
      </div>
    </div>

    <!-- Hero Section -->
    <section class="relative py-20 lg:py-32">
      <div class="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-cyan-500/20"></div>
      <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl lg:text-6xl font-bold text-white mb-6">
          About <span class="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text">WeCodeZW</span>
        </h1>
        <p class="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Empowering Zimbabwe's next generation of developers through free, accessible coding education and hands-on learning experiences.
        </p>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="relative py-16 lg:py-24">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">Our Mission</h2>
            <p class="text-lg text-gray-300 mb-6">
              We believe that coding education should be accessible to everyone, regardless of their background or financial situation. Our mission is to democratize programming education in Zimbabwe and beyond.
            </p>
            <p class="text-lg text-gray-300 mb-6">
              Through our comprehensive learning platform, we provide free access to structured coding courses, interactive challenges, and a supportive community that helps learners grow from beginners to professional developers.
            </p>
            <div class="grid grid-cols-2 gap-6 mt-8">
              <div class="text-center">
                <div class="text-3xl font-bold text-blue-400 mb-2">100%</div>
                <div class="text-gray-300">Free Access</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                <div class="text-gray-300">Available</div>
              </div>
            </div>
          </div>
          <div class="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8">
            <h3 class="text-2xl font-bold text-white mb-4">What We Offer</h3>
            <ul class="space-y-4 text-gray-300">
              <li class="flex items-start">
                <div class="w-6 h-6 bg-green-500/20 border border-green-500/40 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                </div>
                <span>Comprehensive learning tracks from beginner to advanced</span>
              </li>
              <li class="flex items-start">
                <div class="w-6 h-6 bg-green-500/20 border border-green-500/40 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                </div>
                <span>Interactive coding challenges with real-time feedback</span>
              </li>
              <li class="flex items-start">
                <div class="w-6 h-6 bg-green-500/20 border border-green-500/40 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                </div>
                <span>Progress tracking and achievement certificates</span>
              </li>
              <li class="flex items-start">
                <div class="w-6 h-6 bg-green-500/20 border border-green-500/40 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                </div>
                <span>Supportive community of learners and mentors</span>
              </li>
              <li class="flex items-start">
                <div class="w-6 h-6 bg-green-500/20 border border-green-500/40 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                </div>
                <span>Industry-relevant skills and technologies</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="relative py-16 lg:py-24">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">Our Values</h2>
          <p class="text-lg text-gray-300 max-w-3xl mx-auto">
            These core values guide everything we do and shape the learning experience we provide.
          </p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8 text-center">
            <div class="w-16 h-16 bg-blue-500/20 border border-blue-500/40 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-4">Accessibility</h3>
            <p class="text-gray-300">
              We believe coding education should be free and accessible to everyone, breaking down barriers to entry in the tech industry.
            </p>
          </div>

          <div class="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 text-center">
            <div class="w-16 h-16 bg-purple-500/20 border border-purple-500/40 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-4">Community</h3>
            <p class="text-gray-300">
              Building a supportive network of learners, mentors, and developers who help each other grow and succeed.
            </p>
          </div>

          <div class="bg-gradient-to-br from-green-500/10 to-teal-500/10 backdrop-blur-sm border border-green-500/20 rounded-xl p-8 text-center">
            <div class="w-16 h-16 bg-green-500/20 border border-green-500/40 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-4">Innovation</h3>
            <p class="text-gray-300">
              Continuously evolving our platform with cutting-edge technologies and learning methodologies.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="relative py-16 lg:py-24">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">Our Team</h2>
          <p class="text-lg text-gray-300 max-w-3xl mx-auto">
            A passionate group of developers, educators, and community builders dedicated to making coding education accessible to all.
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8 text-center">
            <div class="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold text-white">
              TM
            </div>
            <h3 class="text-xl font-bold text-white mb-2">Taurai Munodawafa</h3>
            <p class="text-blue-400 mb-4">Founder & Lead Developer</p>
            <p class="text-gray-300 text-sm">
              Passionate about democratizing coding education and building inclusive tech communities.
            </p>
          </div>

          <div class="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 text-center">
            <div class="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold text-white">
              AC
            </div>
            <h3 class="text-xl font-bold text-white mb-2">Alex Chen</h3>
            <p class="text-purple-400 mb-4">Curriculum Developer</p>
            <p class="text-gray-300 text-sm">
              Creating engaging and effective learning experiences for developers at all levels.
            </p>
          </div>

          <div class="bg-gradient-to-br from-green-500/10 to-teal-500/10 backdrop-blur-sm border border-green-500/20 rounded-xl p-8 text-center">
            <div class="w-24 h-24 bg-gradient-to-br from-green-400 to-teal-400 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold text-white">
              SM
            </div>
            <h3 class="text-xl font-bold text-white mb-2">Sarah Moyo</h3>
            <p class="text-green-400 mb-4">Community Manager</p>
            <p class="text-gray-300 text-sm">
              Building and nurturing our vibrant community of learners and mentors.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="relative py-16 lg:py-24">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-xl p-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Start Your Coding Journey?</h2>
          <p class="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of learners who are already building their future with WeCodeZW. Start learning today - completely free!
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink 
              to="/auth/register" 
              class="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-8 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              Get Started Free
            </NuxtLink>
            <NuxtLink 
              to="/tracks" 
              class="bg-white/10 border border-white/20 text-white py-3 px-8 rounded-lg font-semibold hover:bg-white/20 transition-all"
            >
              Explore Tracks
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// SEO Meta
useHead({
  title: 'About Us - WeCodeZW',
  meta: [
    { name: 'description', content: 'Learn about WeCodeZW\'s mission to democratize coding education in Zimbabwe through free, accessible learning experiences.' }
  ]
})
</script> 