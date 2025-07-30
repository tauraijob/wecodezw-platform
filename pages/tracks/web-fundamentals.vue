<template>
  <div>
    <!-- Floating Code Elements Background -->
    <div class="floating-shapes">
      <div class="floating-code" style="top: 10%; left: 10%; animation-delay: 0s;">
        &lt;html&gt;&lt;head&gt;&lt;title&gt;Web&lt;/title&gt;&lt;/head&gt;
      </div>
      <div class="floating-code" style="top: 20%; left: 80%; animation-delay: -3s;">
        body { color: #333; }
      </div>
      <div class="floating-code" style="top: 30%; left: 15%; animation-delay: -6s;">
        function init() { console.log('Hello Web!'); }
      </div>
      <div class="floating-code" style="top: 40%; left: 70%; animation-delay: -9s;">
        &lt;div class="container"&gt;&lt;/div&gt;
      </div>
      <div class="floating-code" style="top: 50%; left: 25%; animation-delay: -12s;">
        @media (max-width: 768px) { }
      </div>
    </div>

    <!-- Hero Section -->
    <section class="relative py-20 lg:py-32">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-500/20"></div>
      <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg flex items-center justify-center mr-4">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <h1 class="text-4xl lg:text-5xl font-bold text-white">Web Fundamentals</h1>
                <p class="text-blue-400">Beginner Track</p>
              </div>
            </div>
            <p class="text-xl text-gray-300 mb-8">
              Master the building blocks of the web with HTML, CSS, and JavaScript. Learn to create beautiful, interactive websites from scratch.
            </p>
            <div class="flex flex-wrap gap-4 mb-8">
              <span class="px-3 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full text-blue-400 text-sm">HTML5</span>
              <span class="px-3 py-1 bg-purple-500/20 border border-purple-500/40 rounded-full text-purple-400 text-sm">CSS3</span>
              <span class="px-3 py-1 bg-yellow-500/20 border border-yellow-500/40 rounded-full text-yellow-400 text-sm">JavaScript</span>
              <span class="px-3 py-1 bg-green-500/20 border border-green-500/40 rounded-full text-green-400 text-sm">Responsive Design</span>
            </div>
            <div class="flex flex-col sm:flex-row gap-4">
              <button class="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-8 rounded-lg font-semibold transition-all transform hover:scale-105">
                Start Learning Free
              </button>
              <button class="bg-white/10 border border-white/20 text-white py-3 px-8 rounded-lg font-semibold hover:bg-white/20 transition-all">
                View Curriculum
              </button>
            </div>
          </div>
          <div class="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8">
            <h3 class="text-2xl font-bold text-white mb-6">Track Overview</h3>
            <div class="space-y-6">
              <div class="flex items-center justify-between">
                <span class="text-gray-300">Duration</span>
                <span class="text-white font-semibold">8-12 weeks</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-gray-300">Lessons</span>
                <span class="text-white font-semibold">24 lessons</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-gray-300">Challenges</span>
                <span class="text-white font-semibold">15 projects</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-gray-300">Certificate</span>
                <span class="text-green-400 font-semibold">✓ Included</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-gray-300">Difficulty</span>
                <span class="text-blue-400 font-semibold">Beginner</span>
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
            Build a solid foundation in web development with hands-on projects and real-world applications.
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8">
            <div class="w-12 h-12 bg-blue-500/20 border border-blue-500/40 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-4">HTML5 Structure</h3>
            <p class="text-gray-300">
              Learn semantic HTML, forms, multimedia elements, and accessibility best practices for creating well-structured web pages.
            </p>
          </div>

          <div class="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
            <div class="w-12 h-12 bg-purple-500/20 border border-purple-500/40 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-4">CSS3 Styling</h3>
            <p class="text-gray-300">
              Master CSS layouts, Flexbox, Grid, animations, and responsive design principles for modern web development.
            </p>
          </div>

          <div class="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-8">
            <div class="w-12 h-12 bg-yellow-500/20 border border-yellow-500/40 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-4">JavaScript Basics</h3>
            <p class="text-gray-300">
              Learn JavaScript fundamentals, DOM manipulation, events, and basic programming concepts for interactive websites.
            </p>
          </div>

          <div class="bg-gradient-to-br from-green-500/10 to-teal-500/10 backdrop-blur-sm border border-green-500/20 rounded-xl p-8">
            <div class="w-12 h-12 bg-green-500/20 border border-green-500/40 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-4">Responsive Design</h3>
            <p class="text-gray-300">
              Create websites that work perfectly on all devices - desktop, tablet, and mobile with responsive design techniques.
            </p>
          </div>

          <div class="bg-gradient-to-br from-red-500/10 to-pink-500/10 backdrop-blur-sm border border-red-500/20 rounded-xl p-8">
            <div class="w-12 h-12 bg-red-500/20 border border-red-500/40 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-4">Best Practices</h3>
            <p class="text-gray-300">
              Learn industry standards, accessibility guidelines, performance optimization, and code organization principles.
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
              Build portfolio-worthy projects including personal websites, landing pages, and interactive web applications.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Curriculum -->
    <section class="relative py-16 lg:py-24">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">Curriculum</h2>
          <p class="text-lg text-gray-300 max-w-3xl mx-auto">
            A structured learning path designed to take you from complete beginner to confident web developer.
          </p>
        </div>
        
        <div class="space-y-6">
          <!-- Module 1 -->
          <div class="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8">
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-2xl font-bold text-white">Module 1: HTML Fundamentals</h3>
              <span class="px-3 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full text-blue-400 text-sm">4 lessons</span>
            </div>
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <h4 class="text-lg font-semibold text-white mb-3">What you'll learn:</h4>
                <ul class="space-y-2 text-gray-300">
                  <li>• HTML document structure</li>
                  <li>• Semantic HTML elements</li>
                  <li>• Text formatting and links</li>
                  <li>• Images and multimedia</li>
                </ul>
              </div>
              <div>
                <h4 class="text-lg font-semibold text-white mb-3">Projects:</h4>
                <ul class="space-y-2 text-gray-300">
                  <li>• Personal profile page</li>
                  <li>• Recipe website</li>
                  <li>• Blog post layout</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Module 2 -->
          <div class="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-2xl font-bold text-white">Module 2: CSS Styling</h3>
              <span class="px-3 py-1 bg-purple-500/20 border border-purple-500/40 rounded-full text-purple-400 text-sm">6 lessons</span>
            </div>
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <h4 class="text-lg font-semibold text-white mb-3">What you'll learn:</h4>
                <ul class="space-y-2 text-gray-300">
                  <li>• CSS selectors and properties</li>
                  <li>• Box model and layouts</li>
                  <li>• Flexbox and Grid</li>
                  <li>• Colors, typography, and backgrounds</li>
                </ul>
              </div>
              <div>
                <h4 class="text-lg font-semibold text-white mb-3">Projects:</h4>
                <ul class="space-y-2 text-gray-300">
                  <li>• Landing page design</li>
                  <li>• Card layouts</li>
                  <li>• Navigation menus</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Module 3 -->
          <div class="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-8">
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-2xl font-bold text-white">Module 3: JavaScript Basics</h3>
              <span class="px-3 py-1 bg-yellow-500/20 border border-yellow-500/40 rounded-full text-yellow-400 text-sm">8 lessons</span>
            </div>
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <h4 class="text-lg font-semibold text-white mb-3">What you'll learn:</h4>
                <ul class="space-y-2 text-gray-300">
                  <li>• Variables and data types</li>
                  <li>• Functions and scope</li>
                  <li>• DOM manipulation</li>
                  <li>• Events and user interaction</li>
                </ul>
              </div>
              <div>
                <h4 class="text-lg font-semibold text-white mb-3">Projects:</h4>
                <ul class="space-y-2 text-gray-300">
                  <li>• Interactive calculator</li>
                  <li>• Todo list application</li>
                  <li>• Form validation</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Module 4 -->
          <div class="bg-gradient-to-br from-green-500/10 to-teal-500/10 backdrop-blur-sm border border-green-500/20 rounded-xl p-8">
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-2xl font-bold text-white">Module 4: Responsive Design</h3>
              <span class="px-3 py-1 bg-green-500/20 border border-green-500/40 rounded-full text-green-400 text-sm">6 lessons</span>
            </div>
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <h4 class="text-lg font-semibold text-white mb-3">What you'll learn:</h4>
                <ul class="space-y-2 text-gray-300">
                  <li>• Media queries</li>
                  <li>• Mobile-first design</li>
                  <li>• Responsive images</li>
                  <li>• Performance optimization</li>
                </ul>
              </div>
              <div>
                <h4 class="text-lg font-semibold text-white mb-3">Projects:</h4>
                <ul class="space-y-2 text-gray-300">
                  <li>• Responsive portfolio</li>
                  <li>• Mobile-friendly website</li>
                  <li>• Final capstone project</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="relative py-16 lg:py-24">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-xl p-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Build Your First Website?</h2>
          <p class="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of learners who have started their web development journey with our Web Fundamentals track. Start learning today - completely free!
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-8 rounded-lg font-semibold transition-all transform hover:scale-105">
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
  title: 'Web Fundamentals - WeCodeZW',
  meta: [
    { name: 'description', content: 'Learn HTML, CSS, and JavaScript fundamentals with our free Web Fundamentals track. Build beautiful, interactive websites from scratch.' }
  ]
})
</script> 