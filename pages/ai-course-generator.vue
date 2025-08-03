<template>
  <div>
    <div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
      <!-- Header -->
      <header class="backdrop-blur-md bg-white/10 border-b border-white/20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <NuxtLink to="/" class="flex items-center space-x-2">
              <div class="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                <span class="text-white text-xl">🤖</span>
              </div>
              <div class="text-xl font-bold">
                <span class="text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text">
                  AI Course
                </span>
                <span class="text-white">Generator</span>
              </div>
            </NuxtLink>
            <div class="flex items-center space-x-4">
              <NuxtLink to="/auth/login" class="text-white hover:text-purple-300 transition-colors">
                Login
              </NuxtLink>
              <NuxtLink to="/auth/register" class="btn-primary">
                Get Started
              </NuxtLink>
            </div>
          </div>
        </div>
      </header>

      <!-- Main Content -->
      <main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <!-- Hero Section -->
        <div class="text-center mb-12">
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
            Create Custom Courses with
            <span class="text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text">
              AI Magic
            </span>
          </h1>
          <p class="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your learning ideas into comprehensive courses using our advanced AI course generator. 
            Get personalized content, structured lessons, and interactive assessments tailored to your needs.
          </p>
          <div class="flex flex-wrap justify-center gap-4 mb-8">
            <div class="flex items-center space-x-2 text-gray-300">
              <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Instant Course Generation</span>
            </div>
            <div class="flex items-center space-x-2 text-gray-300">
              <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Personalized Content</span>
            </div>
            <div class="flex items-center space-x-2 text-gray-300">
              <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Interactive Assessments</span>
            </div>
          </div>
        </div>

        <!-- Course Request Form -->
        <div class="glass-card p-8">
          <h2 class="text-2xl font-bold text-white mb-6">Request Your Custom Course</h2>
          
          <form @submit.prevent="submitRequest" class="space-y-6">
            <!-- Basic Information -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-white font-medium mb-2">Course Title *</label>
                <input
                  v-model="form.title"
                  type="text"
                  required
                  placeholder="e.g., Advanced React Development"
                  class="form-input w-full"
                />
              </div>
              <div>
                <label class="block text-white font-medium mb-2">Category *</label>
                <select v-model="form.category" required class="form-input w-full">
                  <option value="">Select Category</option>
                  <option value="WEB_DEVELOPMENT">Web Development</option>
                  <option value="MOBILE_DEVELOPMENT">Mobile Development</option>
                  <option value="DATA_SCIENCE">Data Science</option>
                  <option value="MACHINE_LEARNING">Machine Learning</option>
                  <option value="DEVOPS">DevOps</option>
                  <option value="CYBERSECURITY">Cybersecurity</option>
                  <option value="GAME_DEVELOPMENT">Game Development</option>
                  <option value="BLOCKCHAIN">Blockchain</option>
                  <option value="API_DEVELOPMENT">API Development</option>
                  <option value="DATABASE">Database</option>
                  <option value="ALGORITHMS">Algorithms</option>
                  <option value="SYSTEM_DESIGN">System Design</option>
                  <option value="PROGRAMMING_FUNDAMENTALS">Programming Fundamentals</option>
                  <option value="FRONTEND_DEVELOPMENT">Frontend Development</option>
                  <option value="BACKEND_DEVELOPMENT">Backend Development</option>
                  <option value="FULL_STACK_DEVELOPMENT">Full Stack Development</option>
                  <option value="CLOUD_COMPUTING">Cloud Computing</option>
                  <option value="ARTIFICIAL_INTELLIGENCE">Artificial Intelligence</option>
                  <option value="INTERNET_OF_THINGS">Internet of Things</option>
                  <option value="SOFTWARE_TESTING">Software Testing</option>
                </select>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-white font-medium mb-2">Difficulty Level *</label>
                <select v-model="form.difficulty" required class="form-input w-full">
                  <option value="">Select Difficulty</option>
                  <option value="BEGINNER">Beginner</option>
                  <option value="INTERMEDIATE">Intermediate</option>
                  <option value="ADVANCED">Advanced</option>
                  <option value="EXPERT">Expert</option>
                </select>
              </div>
              <div>
                <label class="block text-white font-medium mb-2">Estimated Hours *</label>
                <input
                  v-model="form.estimatedHours"
                  type="number"
                  min="1"
                  max="200"
                  required
                  placeholder="e.g., 20"
                  class="form-input w-full"
                />
              </div>
            </div>

            <!-- Course Description -->
            <div>
              <label class="block text-white font-medium mb-2">Course Description *</label>
              <textarea
                v-model="form.description"
                required
                rows="4"
                placeholder="Describe what this course will cover, the main topics, and learning objectives..."
                class="form-input w-full"
              ></textarea>
            </div>

            <!-- Learning Goals -->
            <div>
              <label class="block text-white font-medium mb-2">Learning Goals *</label>
              <textarea
                v-model="form.learningGoals"
                required
                rows="3"
                placeholder="What should students be able to do after completing this course? List specific skills and outcomes..."
                class="form-input w-full"
              ></textarea>
            </div>

            <!-- Target Audience -->
            <div>
              <label class="block text-white font-medium mb-2">Target Audience *</label>
              <textarea
                v-model="form.targetAudience"
                required
                rows="3"
                placeholder="Who is this course designed for? Describe the ideal student profile, background, and experience level..."
                class="form-input w-full"
              ></textarea>
            </div>

            <!-- Prerequisites -->
            <div>
              <label class="block text-white font-medium mb-2">Prerequisites (Optional)</label>
              <textarea
                v-model="form.prerequisites"
                rows="3"
                placeholder="What knowledge or skills should students have before taking this course? Leave blank if none required..."
                class="form-input w-full"
              ></textarea>
            </div>

            <!-- Submit Button -->
            <div class="flex items-center justify-between pt-6">
              <div class="text-gray-300 text-sm">
                <p>Your request will be processed by our AI and you'll be notified when ready.</p>
                <p class="mt-1">Estimated processing time: 5-10 minutes</p>
              </div>
              <button
                type="submit"
                :disabled="isSubmitting"
                class="btn-primary-lg"
              >
                <svg v-if="isSubmitting" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {{ isSubmitting ? 'Generating Course...' : 'Generate Course' }}
              </button>
            </div>
          </form>
        </div>

        <!-- Features Section -->
        <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="glass-card p-6 text-center">
            <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-2">Fast Generation</h3>
            <p class="text-gray-300">Get your custom course content generated in minutes, not hours or days.</p>
          </div>

          <div class="glass-card p-6 text-center">
            <div class="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-2">Smart Content</h3>
            <p class="text-gray-300">AI-powered content that adapts to your specific requirements and learning objectives.</p>
          </div>

          <div class="glass-card p-6 text-center">
            <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-2">Structured Learning</h3>
            <p class="text-gray-300">Well-organized modules, lessons, and assessments for effective learning progression.</p>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'AI Course Generator - WeCodeZW',
  meta: [
    { name: 'description', content: 'Create custom courses with AI-powered content generation. Get personalized learning materials tailored to your needs.' }
  ]
})

// Form data
const form = ref({
  title: '',
  description: '',
  category: '',
  difficulty: '',
  estimatedHours: '',
  learningGoals: '',
  targetAudience: '',
  prerequisites: ''
})

const isSubmitting = ref(false)

// Submit form
const submitRequest = async () => {
  if (isSubmitting.value) return

  try {
    isSubmitting.value = true

    // Validate form
    if (!form.value.title || !form.value.description || !form.value.category || 
        !form.value.difficulty || !form.value.estimatedHours || !form.value.learningGoals || 
        !form.value.targetAudience) {
      throw new Error('Please fill in all required fields')
    }

    // Submit request
    const response = await $fetch('/api/ai-course-generator/request', {
      method: 'POST',
      body: {
        ...form.value,
        estimatedHours: parseInt(form.value.estimatedHours)
      }
    })

    if (response.success) {
      // Show success message
      alert('Course request submitted successfully! You will be notified when it\'s ready.')
      
      // Reset form
      form.value = {
        title: '',
        description: '',
        category: '',
        difficulty: '',
        estimatedHours: '',
        learningGoals: '',
        targetAudience: '',
        prerequisites: ''
      }
    }
  } catch (error) {
    console.error('Error submitting request:', error)
    alert(error.message || 'Failed to submit request. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  backdrop-filter: blur(10px);
}

.form-input {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 12px 16px;
  color: white;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.form-input::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.form-input:focus {
  outline: none;
  border-color: rgba(147, 51, 234, 0.5);
  box-shadow: 0 0 0 3px rgba(147, 51, 234, 0.1);
}

.form-input:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-primary {
  background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
}

.btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(147, 51, 234, 0.3);
}

.btn-primary-lg {
  background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
}

.btn-primary-lg:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(147, 51, 234, 0.3);
}

.btn-primary-lg:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}
</style> 