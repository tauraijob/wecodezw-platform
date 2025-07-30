<template>
  <div>
    <!-- Floating Code Elements Background -->
    <div class="floating-shapes">
      <div class="floating-code" style="top: 10%; left: 10%; animation-delay: 0s;">
        const privacy = () => { return 'secure'; }
      </div>
      <div class="floating-code" style="top: 20%; left: 80%; animation-delay: -3s;">
        &lt;Privacy /&gt; 
      </div>
      <div class="floating-code" style="top: 30%; left: 15%; animation-delay: -6s;">
        function secure() { return protected; }
      </div>
      <div class="floating-code" style="top: 40%; left: 70%; animation-delay: -9s;">
        npm install security
      </div>
      <div class="floating-code" style="top: 50%; left: 25%; animation-delay: -12s;">
        git commit -m "privacy policy"
      </div>
    </div>

    <!-- Hero Section -->
    <section class="relative py-20 lg:py-32">
      <div class="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-cyan-500/20"></div>
      <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl lg:text-6xl font-bold text-white mb-6">
          Privacy <span class="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text">Policy</span>
        </h1>
        <p class="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Your privacy is important to us. Learn how we collect, use, and protect your information.
        </p>
        <p class="text-sm text-gray-400">Last updated: {{ new Date().toLocaleDateString() }}</p>
      </div>
    </section>

    <!-- Privacy Content -->
    <section class="relative py-16 lg:py-24">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8 lg:p-12">
          
          <!-- Introduction -->
          <div class="mb-12">
            <h2 class="text-2xl font-bold text-white mb-4">Introduction</h2>
            <p class="text-gray-300 mb-4">
              WeCodeZW ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our free coding education platform.
            </p>
            <p class="text-gray-300">
              By using our platform, you agree to the collection and use of information in accordance with this policy.
            </p>
          </div>

          <!-- Information We Collect -->
          <div class="mb-12">
            <h2 class="text-2xl font-bold text-white mb-4">Information We Collect</h2>
            
            <h3 class="text-xl font-semibold text-blue-400 mb-3">Personal Information</h3>
            <p class="text-gray-300 mb-4">
              When you create an account, we collect:
            </p>
            <ul class="list-disc list-inside text-gray-300 mb-6 space-y-2">
              <li>Name and email address</li>
              <li>Username and profile information</li>
              <li>Account preferences and settings</li>
            </ul>

            <h3 class="text-xl font-semibold text-blue-400 mb-3">Usage Information</h3>
            <p class="text-gray-300 mb-4">
              We automatically collect information about how you use our platform:
            </p>
            <ul class="list-disc list-inside text-gray-300 mb-6 space-y-2">
              <li>Learning progress and achievements</li>
              <li>Challenge submissions and code</li>
              <li>Course completion data</li>
              <li>Platform interaction patterns</li>
            </ul>

            <h3 class="text-xl font-semibold text-blue-400 mb-3">Technical Information</h3>
            <p class="text-gray-300 mb-4">
              We collect technical information including:
            </p>
            <ul class="list-disc list-inside text-gray-300 space-y-2">
              <li>IP address and device information</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Usage analytics and performance data</li>
            </ul>
          </div>

          <!-- How We Use Your Information -->
          <div class="mb-12">
            <h2 class="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
            <p class="text-gray-300 mb-4">
              We use the collected information for the following purposes:
            </p>
            <ul class="list-disc list-inside text-gray-300 space-y-2">
              <li>Provide and maintain our free coding education platform</li>
              <li>Track your learning progress and achievements</li>
              <li>Personalize your learning experience</li>
              <li>Send important updates and notifications</li>
              <li>Improve our platform and develop new features</li>
              <li>Ensure platform security and prevent fraud</li>
              <li>Provide customer support and respond to inquiries</li>
            </ul>
          </div>

          <!-- Information Sharing -->
          <div class="mb-12">
            <h2 class="text-2xl font-bold text-white mb-4">Information Sharing</h2>
            <p class="text-gray-300 mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul class="list-disc list-inside text-gray-300 space-y-2">
              <li>With your explicit consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and safety</li>
              <li>With trusted service providers who assist in platform operations</li>
            </ul>
          </div>

          <!-- Data Security -->
          <div class="mb-12">
            <h2 class="text-2xl font-bold text-white mb-4">Data Security</h2>
            <p class="text-gray-300 mb-4">
              We implement appropriate security measures to protect your information:
            </p>
            <ul class="list-disc list-inside text-gray-300 space-y-2">
              <li>Encryption of sensitive data in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication measures</li>
              <li>Secure hosting and infrastructure</li>
            </ul>
          </div>

          <!-- Your Rights -->
          <div class="mb-12">
            <h2 class="text-2xl font-bold text-white mb-4">Your Rights</h2>
            <p class="text-gray-300 mb-4">
              You have the following rights regarding your personal information:
            </p>
            <ul class="list-disc list-inside text-gray-300 space-y-2">
              <li>Access and review your personal data</li>
              <li>Update or correct inaccurate information</li>
              <li>Request deletion of your account and data</li>
              <li>Export your data in a portable format</li>
              <li>Opt-out of certain communications</li>
            </ul>
          </div>

          <!-- Cookies and Tracking -->
          <div class="mb-12">
            <h2 class="text-2xl font-bold text-white mb-4">Cookies and Tracking</h2>
            <p class="text-gray-300 mb-4">
              We use cookies and similar technologies to:
            </p>
            <ul class="list-disc list-inside text-gray-300 space-y-2">
              <li>Remember your preferences and settings</li>
              <li>Analyze platform usage and performance</li>
              <li>Provide personalized content and features</li>
              <li>Ensure platform security and functionality</li>
            </ul>
            <p class="text-gray-300 mt-4">
              You can control cookie settings through your browser preferences.
            </p>
          </div>

          <!-- Children's Privacy -->
          <div class="mb-12">
            <h2 class="text-2xl font-bold text-white mb-4">Children's Privacy</h2>
            <p class="text-gray-300">
              Our platform is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
            </p>
          </div>

          <!-- Changes to Privacy Policy -->
          <div class="mb-12">
            <h2 class="text-2xl font-bold text-white mb-4">Changes to This Privacy Policy</h2>
            <p class="text-gray-300">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically for any changes.
            </p>
          </div>

          <!-- Contact Information -->
          <div class="mb-12">
            <h2 class="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p class="text-gray-300 mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div class="bg-white/5 border border-white/10 rounded-lg p-6">
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 class="text-lg font-semibold text-white mb-2">Email</h3>
                  <p class="text-blue-400">privacy@wecodezw.com</p>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-white mb-2">WhatsApp</h3>
                  <p class="text-blue-400">+27616291608</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// SEO Meta
useHead({
  title: 'Privacy Policy - WeCodeZW',
  meta: [
    { name: 'description', content: 'Learn about how WeCodeZW protects your privacy and handles your personal information on our free coding education platform.' }
  ]
})
</script> 