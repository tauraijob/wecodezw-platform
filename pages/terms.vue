<template>
  <div>
    <!-- Floating Code Elements Background -->
    <div class="floating-shapes">
      <div class="floating-code" style="top: 10%; left: 10%; animation-delay: 0s;">
        const terms = () => { return 'agreement'; }
      </div>
      <div class="floating-code" style="top: 20%; left: 80%; animation-delay: -3s;">
        &lt;Terms /&gt; 
      </div>
      <div class="floating-code" style="top: 30%; left: 15%; animation-delay: -6s;">
        function agreement() { return valid; }
      </div>
      <div class="floating-code" style="top: 40%; left: 70%; animation-delay: -9s;">
        npm install legal
      </div>
      <div class="floating-code" style="top: 50%; left: 25%; animation-delay: -12s;">
        git commit -m "terms of service"
      </div>
    </div>

    <!-- Hero Section -->
    <section class="relative py-20 lg:py-32">
      <div class="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-cyan-500/20"></div>
      <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl lg:text-6xl font-bold text-white mb-6">
          Terms of <span class="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text">Service</span>
        </h1>
        <p class="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Please read these terms carefully before using our free coding education platform.
        </p>
        <p class="text-sm text-gray-400">Last updated: {{ new Date().toLocaleDateString() }}</p>
      </div>
    </section>

    <!-- Terms Content -->
    <section class="relative py-16 lg:py-24">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8 lg:p-12">
          
          <!-- Introduction -->
          <div class="mb-12">
            <h2 class="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p class="text-gray-300 mb-4">
              Welcome to WeCodeZW. These Terms of Service ("Terms") govern your use of our free coding education platform and services. By accessing or using our platform, you agree to be bound by these Terms.
            </p>
            <p class="text-gray-300">
              WeCodeZW provides free access to coding education, interactive challenges, and learning resources to help you develop programming skills.
            </p>
          </div>

          <!-- Acceptance of Terms -->
          <div class="mb-12">
            <h2 class="text-2xl font-bold text-white mb-4">2. Acceptance of Terms</h2>
            <p class="text-gray-300 mb-4">
              By using our platform, you confirm that you:
            </p>
            <ul class="list-disc list-inside text-gray-300 space-y-2">
              <li>Are at least 13 years old</li>
              <li>Have the legal capacity to enter into these Terms</li>
              <li>Agree to comply with all applicable laws and regulations</li>
              <li>Will provide accurate and complete information when creating an account</li>
            </ul>
          </div>

          <!-- Account Registration -->
          <div class="mb-12">
            <h2 class="text-2xl font-bold text-white mb-4">3. Account Registration</h2>
            <p class="text-gray-300 mb-4">
              To access certain features of our platform, you must create a free account. You agree to:
            </p>
            <ul class="list-disc list-inside text-gray-300 space-y-2">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and update your account information</li>
              <li>Keep your account credentials secure and confidential</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Notify us immediately of any unauthorized use</li>
            </ul>
          </div>

          <!-- Platform Usage -->
          <div class="mb-12">
            <h2 class="text-2xl font-bold text-white mb-4">4. Platform Usage</h2>
            <p class="text-gray-300 mb-4">
              You may use our platform for personal, non-commercial educational purposes. You agree not to:
            </p>
            <ul class="list-disc list-inside text-gray-300 space-y-2">
              <li>Use the platform for any illegal or unauthorized purpose</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt the platform's functionality</li>
              <li>Share your account credentials with others</li>
              <li>Submit malicious code or content</li>
              <li>Violate any applicable laws or regulations</li>
            </ul>
          </div>

          <!-- Content and Submissions -->
          <div class="mb-12">
            <h2 class="text-2xl font-bold text-white mb-4">5. Content and Submissions</h2>
            <p class="text-gray-300 mb-4">
              When you submit code, comments, or other content to our platform:
            </p>
            <ul class="list-disc list-inside text-gray-300 space-y-2">
              <li>You retain ownership of your original content</li>
              <li>You grant us a license to use, display, and analyze your submissions</li>
              <li>You represent that you have the right to share such content</li>
              <li>You agree not to submit copyrighted material without permission</li>
              <li>We may use anonymized data for platform improvement</li>
            </ul>
          </div>

          <!-- Intellectual Property -->
          <div class="mb-12">
            <h2 class="text-2xl font-bold text-white mb-4">6. Intellectual Property</h2>
            <p class="text-gray-300 mb-4">
              Our platform and its content are protected by intellectual property laws:
            </p>
            <ul class="list-disc list-inside text-gray-300 space-y-2">
              <li>WeCodeZW owns the platform, design, and proprietary content</li>
              <li>Learning materials are provided for educational use only</li>
              <li>You may not copy, distribute, or modify our content without permission</li>
              <li>Third-party content is used with appropriate licenses</li>
            </ul>
          </div>

          <!-- Privacy and Data -->
          <div class="mb-12">
            <h2 class="text-2xl font-bold text-white mb-4">7. Privacy and Data</h2>
            <p class="text-gray-300 mb-4">
              Your privacy is important to us. Our collection and use of your information is governed by our Privacy Policy, which is incorporated into these Terms by reference.
            </p>
            <p class="text-gray-300">
              By using our platform, you consent to the collection and use of your information as described in our Privacy Policy.
            </p>
          </div>

          <!-- Disclaimers -->
          <div class="mb-12">
            <h2 class="text-2xl font-bold text-white mb-4">8. Disclaimers</h2>
            <p class="text-gray-300 mb-4">
              Our platform is provided "as is" without warranties of any kind:
            </p>
            <ul class="list-disc list-inside text-gray-300 space-y-2">
              <li>We do not guarantee uninterrupted or error-free service</li>
              <li>We are not responsible for the accuracy of third-party content</li>
              <li>We do not guarantee employment or career outcomes</li>
              <li>We may modify or discontinue features at any time</li>
            </ul>
          </div>

          <!-- Limitation of Liability -->
          <div class="mb-12">
            <h2 class="text-2xl font-bold text-white mb-4">9. Limitation of Liability</h2>
            <p class="text-gray-300">
              To the maximum extent permitted by law, WeCodeZW shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our platform.
            </p>
          </div>

          <!-- Termination -->
          <div class="mb-12">
            <h2 class="text-2xl font-bold text-white mb-4">10. Termination</h2>
            <p class="text-gray-300 mb-4">
              We may terminate or suspend your account at any time for:
            </p>
            <ul class="list-disc list-inside text-gray-300 space-y-2">
              <li>Violation of these Terms</li>
              <li>Fraudulent or illegal activity</li>
              <li>Extended periods of inactivity</li>
              <li>At our sole discretion with reasonable cause</li>
            </ul>
            <p class="text-gray-300 mt-4">
              You may terminate your account at any time by contacting us or deleting your account through the platform.
            </p>
          </div>

          <!-- Changes to Terms -->
          <div class="mb-12">
            <h2 class="text-2xl font-bold text-white mb-4">11. Changes to Terms</h2>
            <p class="text-gray-300">
              We may update these Terms from time to time. We will notify you of any material changes by posting the new Terms on this page and updating the "Last updated" date. Your continued use of the platform after such changes constitutes acceptance of the new Terms.
            </p>
          </div>

          <!-- Governing Law -->
          <div class="mb-12">
            <h2 class="text-2xl font-bold text-white mb-4">12. Governing Law</h2>
            <p class="text-gray-300">
              These Terms shall be governed by and construed in accordance with the laws of Zimbabwe. Any disputes arising from these Terms or your use of our platform shall be resolved in the courts of Zimbabwe.
            </p>
          </div>

          <!-- Contact Information -->
          <div class="mb-12">
            <h2 class="text-2xl font-bold text-white mb-4">13. Contact Information</h2>
            <p class="text-gray-300 mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div class="bg-white/5 border border-white/10 rounded-lg p-6">
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 class="text-lg font-semibold text-white mb-2">Email</h3>
                  <p class="text-blue-400">legal@wecodezw.com</p>
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
  title: 'Terms of Service - WeCodeZW',
  meta: [
    { name: 'description', content: 'Read the Terms of Service for WeCodeZW\'s free coding education platform and understand your rights and responsibilities.' }
  ]
})
</script> 