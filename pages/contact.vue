<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-20 lg:py-32">
      <div class="absolute inset-0 bg-gradient-to-br from-cyan-600/20 via-blue-600/20 to-purple-500/20"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
            Get In Touch
          </h1>
          <p class="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Have questions about WeCodeZW? Need help choosing the right track? We're here to help you on your coding journey.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <!-- Contact Form -->
          <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <h2 class="text-3xl font-bold text-white mb-8">Send us a Message</h2>
            <form class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="firstName" class="block text-sm font-medium text-white mb-2">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName"
                    class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your first name"
                  >
                </div>
                <div>
                  <label for="lastName" class="block text-sm font-medium text-white mb-2">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="lastName"
                    class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your last name"
                  >
                </div>
              </div>

              <div>
                <label for="email" class="block text-sm font-medium text-white mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email address"
                >
              </div>

              <div>
                <label for="phone" class="block text-sm font-medium text-white mb-2">Phone Number (Optional)</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone"
                  class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="+263 XXX XXX XXX"
                >
              </div>

              <div>
                <label for="subject" class="block text-sm font-medium text-white mb-2">Subject</label>
                <select 
                  id="subject" 
                  name="subject"
                  class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="track-help">Help Choosing a Track</option>
                  <option value="technical">Technical Support</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="career">Career Guidance</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-white mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="6"
                  class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <button 
                type="submit"
                class="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>

          <!-- Contact Information -->
          <div class="space-y-8">
            <div>
              <h2 class="text-3xl font-bold text-white mb-8">Contact Information</h2>
              <div class="space-y-6">
                
                <!-- Phone -->
                <div class="flex items-start">
                  <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mr-4">
                    <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-white mb-1">Phone</h3>
                    <p class="text-gray-300">+27616291608</p>
                    <p class="text-gray-400 text-sm">Monday - Friday, 8:00 AM - 6:00 PM (CAT)</p>
                  </div>
                </div>

                <!-- Email -->
                <div class="flex items-start">
                  <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                    <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-white mb-1">Email</h3>
                    <p class="text-gray-300">hello@wecodezw.com</p>
                    <p class="text-gray-400 text-sm">We'll respond within 24 hours</p>
                  </div>
                </div>

                <!-- Location -->
                <div class="flex items-start">
                  <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                    <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-white mb-1">Location</h3>
                    <p class="text-gray-300">Harare, Zimbabwe</p>
                    <p class="text-gray-400 text-sm">Serving developers across Zimbabwe</p>
                  </div>
                </div>

              </div>
            </div>

            <!-- Social Media -->
            <div>
              <h3 class="text-xl font-semibold text-white mb-4">Connect With Us</h3>
              <div class="flex space-x-4">
                <a href="#" class="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center hover:from-blue-700 hover:to-blue-800 transition-all">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                
                <a href="#" class="w-12 h-12 bg-gradient-to-r from-sky-500 to-sky-600 rounded-lg flex items-center justify-center hover:from-sky-600 hover:to-sky-700 transition-all">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                
                <a href="#" class="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg flex items-center justify-center hover:from-gray-800 hover:to-gray-900 transition-all">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                
                <a href="#" class="w-12 h-12 bg-gradient-to-r from-blue-700 to-blue-800 rounded-lg flex items-center justify-center hover:from-blue-800 hover:to-blue-900 transition-all">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            <!-- FAQ -->
            <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <h3 class="text-xl font-semibold text-white mb-6">Frequently Asked Questions</h3>
              <div class="space-y-4">
                <div>
                  <h4 class="font-semibold text-white mb-2">How long does it take to complete a track?</h4>
                  <p class="text-gray-300 text-sm">Most tracks take 8-20 weeks to complete, depending on your pace and the complexity of the track. You can learn at your own speed.</p>
                </div>
                <div>
                  <h4 class="font-semibold text-white mb-2">Do you offer certificates?</h4>
                  <p class="text-gray-300 text-sm">Yes! You'll receive a verified certificate upon completing each track, which you can add to your LinkedIn profile and resume.</p>
                </div>
                <div>
                  <h4 class="font-semibold text-white mb-2">Can I get help if I'm stuck?</h4>
                  <p class="text-gray-300 text-sm">Absolutely! Our community forum and mentor support are available 24/7. You can also schedule one-on-one sessions with our instructors.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- Office Hours -->
    <section class="py-20 bg-slate-900/30">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-5xl font-bold text-white mb-6">
            Office Hours
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Join our weekly office hours for live Q&A sessions, coding help, and career guidance.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center">
            <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-white mb-3">Beginner Sessions</h3>
            <p class="text-gray-300 mb-4">Perfect for those just starting their coding journey</p>
            <p class="text-blue-400 font-semibold">Tuesdays, 6:00 PM CAT</p>
          </div>

          <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center">
            <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-white mb-3">Advanced Topics</h3>
            <p class="text-gray-300 mb-4">Deep dives into complex programming concepts</p>
            <p class="text-purple-400 font-semibold">Thursdays, 7:00 PM CAT</p>
          </div>

          <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center">
            <div class="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-white mb-3">Career Guidance</h3>
            <p class="text-gray-300 mb-4">Resume reviews, interview prep, and job hunting tips</p>
            <p class="text-green-400 font-semibold">Saturdays, 10:00 AM CAT</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Contact Us - WeCodeZW',
  meta: [
    {
      name: 'description',
      content: 'Get in touch with WeCodeZW. We\'re here to help you with questions about our coding tracks, technical support, and career guidance. Contact us today!'
    }
  ]
})
</script> 