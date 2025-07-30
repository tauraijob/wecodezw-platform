<template>
  <div>
    <!-- Floating Code Elements Background -->
    <div class="floating-shapes">
      <div class="floating-code" style="top: 10%; left: 10%; animation-delay: 0s;">
        const challenge = () => { return 'code'; }
      </div>
      <div class="floating-code" style="top: 20%; left: 80%; animation-delay: -3s;">
        &lt;Challenge /&gt; 
      </div>
      <div class="floating-code" style="top: 30%; left: 15%; animation-delay: -6s;">
        function solve() { return success; }
      </div>
      <div class="floating-code" style="top: 40%; left: 70%; animation-delay: -9s;">
        npm install challenge
      </div>
      <div class="floating-code" style="top: 50%; left: 25%; animation-delay: -12s;">
        git commit -m "challenge complete"
      </div>
    </div>

    <!-- Challenge Header -->
    <section class="relative py-8">
      <div class="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-cyan-500/20"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-3xl font-bold text-white mb-2">
              Build a Tribute Page
            </h1>
            <p class="text-gray-300">Create a tribute page using HTML and CSS</p>
          </div>
          <div class="flex items-center space-x-4">
            <span class="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">Beginner</span>
            <span class="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">50 XP</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Challenge Content -->
    <section class="py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Instructions Panel -->
          <div class="space-y-6">
            <!-- Instructions -->
            <div class="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6">
              <h2 class="text-xl font-semibold text-white mb-4">Instructions</h2>
              <div class="space-y-4 text-gray-300">
                <p>Create a tribute page for someone you admire. Your page should include:</p>
                <ul class="list-disc list-inside space-y-2 ml-4">
                  <li>A main element with id="main"</li>
                  <li>A title element that describes the subject</li>
                  <li>A div element with id="img-div"</li>
                  <li>An img element with id="image"</li>
                  <li>A figcaption element with id="img-caption"</li>
                  <li>A section element with id="tribute-info"</li>
                  <li>An a element with id="tribute-link"</li>
                </ul>
              </div>
            </div>

            <!-- User Stories -->
            <div class="bg-gradient-to-br from-green-500/10 to-teal-500/10 backdrop-blur-sm border border-green-500/20 rounded-xl p-6">
              <h3 class="text-lg font-semibold text-white mb-4">User Stories</h3>
              <div class="space-y-3">
                <div class="flex items-start">
                  <input type="checkbox" :checked="userStories.story1" @change="userStories.story1 = !userStories.story1" class="mt-1 rounded border-white/20 bg-white/10 text-green-500 focus:ring-green-500">
                  <span class="ml-2 text-sm text-gray-300">I can see a main element with a corresponding id="main"</span>
                </div>
                <div class="flex items-start">
                  <input type="checkbox" :checked="userStories.story2" @change="userStories.story2 = !userStories.story2" class="mt-1 rounded border-white/20 bg-white/10 text-green-500 focus:ring-green-500">
                  <span class="ml-2 text-sm text-gray-300">I can see an element with a corresponding id="title"</span>
                </div>
                <div class="flex items-start">
                  <input type="checkbox" :checked="userStories.story3" @change="userStories.story3 = !userStories.story3" class="mt-1 rounded border-white/20 bg-white/10 text-green-500 focus:ring-green-500">
                  <span class="ml-2 text-sm text-gray-300">I can see a div element with a corresponding id="img-div"</span>
                </div>
                <div class="flex items-start">
                  <input type="checkbox" :checked="userStories.story4" @change="userStories.story4 = !userStories.story4" class="mt-1 rounded border-white/20 bg-white/10 text-green-500 focus:ring-green-500">
                  <span class="ml-2 text-sm text-gray-300">I can see an img element with a corresponding id="image"</span>
                </div>
                <div class="flex items-start">
                  <input type="checkbox" :checked="userStories.story5" @change="userStories.story5 = !userStories.story5" class="mt-1 rounded border-white/20 bg-white/10 text-green-500 focus:ring-green-500">
                  <span class="ml-2 text-sm text-gray-300">I can see a figcaption element with a corresponding id="img-caption"</span>
                </div>
              </div>
            </div>

            <!-- Hints -->
            <div class="bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
              <h3 class="text-lg font-semibold text-white mb-4">💡 Hints</h3>
              <div class="space-y-2 text-sm text-gray-300">
                <p>• Use semantic HTML elements for better structure</p>
                <p>• Make sure your image is responsive</p>
                <p>• Add some CSS to make it look good</p>
                <p>• Test your page in different screen sizes</p>
              </div>
            </div>
          </div>

          <!-- Code Editor -->
          <div class="space-y-6">
            <!-- Code Editor -->
            <div class="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-600/20 rounded-xl overflow-hidden">
              <div class="bg-gray-800 px-4 py-3 border-b border-gray-600/20">
                <div class="flex items-center justify-between">
                  <h3 class="text-white font-semibold">Code Editor</h3>
                  <div class="flex items-center space-x-2">
                    <button @click="runCode" class="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm transition-colors">
                      Run Code
                    </button>
                    <button @click="resetCode" class="bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded text-sm transition-colors">
                      Reset
                    </button>
                  </div>
                </div>
              </div>
              
              <!-- HTML Editor -->
              <div class="p-4">
                <div class="mb-4">
                  <label class="block text-sm font-medium text-gray-300 mb-2">HTML</label>
                  <textarea
                    v-model="htmlCode"
                    class="w-full h-64 bg-gray-900 text-gray-100 p-4 rounded-lg border border-gray-600/20 focus:outline-none focus:border-blue-500 font-mono text-sm resize-none"
                    placeholder="Write your HTML code here..."
                  ></textarea>
                </div>
                
                <div class="mb-4">
                  <label class="block text-sm font-medium text-gray-300 mb-2">CSS</label>
                  <textarea
                    v-model="cssCode"
                    class="w-full h-32 bg-gray-900 text-gray-100 p-4 rounded-lg border border-gray-600/20 focus:outline-none focus:border-blue-500 font-mono text-sm resize-none"
                    placeholder="Write your CSS code here..."
                  ></textarea>
                </div>
              </div>
            </div>

            <!-- Preview -->
            <div class="bg-gradient-to-br from-white/10 to-gray-100/10 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden">
              <div class="bg-white/20 px-4 py-3 border-b border-white/20">
                <h3 class="text-white font-semibold">Preview</h3>
              </div>
              <div class="p-4">
                <div class="bg-white rounded-lg p-4 min-h-64">
                  <div v-html="previewContent"></div>
                </div>
              </div>
            </div>

            <!-- Submit Button -->
            <div class="text-center">
              <button
                @click="submitChallenge"
                :disabled="!canSubmit"
                class="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {{ loading ? 'Submitting...' : 'Submit Challenge' }}
              </button>
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
  title: 'Build a Tribute Page - WeCodeZW',
  meta: [
    { name: 'description', content: 'Complete the Build a Tribute Page challenge on WeCodeZW' }
  ]
})

// Code state
const htmlCode = ref(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tribute Page</title>
</head>
<body>
    <main id="main">
        <h1 id="title">Dr. Norman Borlaug</h1>
        <div id="img-div">
            <img id="image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Check_green_icon.svg/1200px-Check_green_icon.svg.png" alt="Dr. Norman Borlaug">
            <figcaption id="img-caption">Dr. Norman Borlaug, father of the Green Revolution</figcaption>
        </div>
        <section id="tribute-info">
            <h2>Here's a time line of Dr. Borlaug's life:</h2>
            <ul>
                <li><strong>1914</strong> - Born in Cresco, Iowa</li>
                <li><strong>1933</strong> - Leaves his family's farm to attend the University of Minnesota</li>
                <li><strong>1935</strong> - Has to stop school and save up more money</li>
            </ul>
        </section>
        <a id="tribute-link" href="https://en.wikipedia.org/wiki/Norman_Borlaug" target="_blank">Learn more about Dr. Borlaug</a>
    </main>
</body>
</html>`)

const cssCode = ref(`body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 20px;
    background-color: #f4f4f4;
}

#main {
    max-width: 800px;
    margin: 0 auto;
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

#title {
    text-align: center;
    color: #333;
    margin-bottom: 20px;
}

#img-div {
    text-align: center;
    margin: 20px 0;
}

#image {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
}

#img-caption {
    margin-top: 10px;
    color: #666;
    font-style: italic;
}

#tribute-info {
    margin: 30px 0;
}

#tribute-info h2 {
    color: #333;
    margin-bottom: 20px;
}

#tribute-info ul {
    list-style-type: none;
    padding: 0;
}

#tribute-info li {
    margin: 10px 0;
    padding: 10px;
    background: #f9f9f9;
    border-left: 4px solid #007bff;
}

#tribute-link {
    display: block;
    text-align: center;
    color: #007bff;
    text-decoration: none;
    margin-top: 20px;
    font-weight: bold;
}

#tribute-link:hover {
    text-decoration: underline;
}`
)

// User stories completion
const userStories = ref({
  story1: false,
  story2: false,
  story3: false,
  story4: false,
  story5: false
})

const loading = ref(false)

// Computed properties
const previewContent = computed(() => {
  return htmlCode.value.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
})

const canSubmit = computed(() => {
  return Object.values(userStories.value).every(story => story)
})

// Methods
const runCode = () => {
  // In a real implementation, this would run the code in a sandbox
  console.log('Running code...')
}

const resetCode = () => {
  htmlCode.value = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tribute Page</title>
</head>
<body>
    <main id="main">
        <h1 id="title">Dr. Norman Borlaug</h1>
        <div id="img-div">
            <img id="image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Check_green_icon.svg/1200px-Check_green_icon.svg.png" alt="Dr. Norman Borlaug">
            <figcaption id="img-caption">Dr. Norman Borlaug, father of the Green Revolution</figcaption>
        </div>
        <section id="tribute-info">
            <h2>Here's a time line of Dr. Borlaug's life:</h2>
            <ul>
                <li><strong>1914</strong> - Born in Cresco, Iowa</li>
                <li><strong>1933</strong> - Leaves his family's farm to attend the University of Minnesota</li>
                <li><strong>1935</strong> - Has to stop school and save up more money</li>
            </ul>
        </section>
        <a id="tribute-link" href="https://en.wikipedia.org/wiki/Norman_Borlaug" target="_blank">Learn more about Dr. Borlaug</a>
    </main>
</body>
</html>`
  
  cssCode.value = `body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 20px;
    background-color: #f4f4f4;
}

#main {
    max-width: 800px;
    margin: 0 auto;
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

#title {
    text-align: center;
    color: #333;
    margin-bottom: 20px;
}

#img-div {
    text-align: center;
    margin: 20px 0;
}

#image {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
}

#img-caption {
    margin-top: 10px;
    color: #666;
    font-style: italic;
}

#tribute-info {
    margin: 30px 0;
}

#tribute-info h2 {
    color: #333;
    margin-bottom: 20px;
}

#tribute-info ul {
    list-style-type: none;
    padding: 0;
}

#tribute-info li {
    margin: 10px 0;
    padding: 10px;
    background: #f9f9f9;
    border-left: 4px solid #007bff;
}

#tribute-link {
    display: block;
    text-align: center;
    color: #007bff;
    text-decoration: none;
    margin-top: 20px;
    font-weight: bold;
}

#tribute-link:hover {
    text-decoration: underline;
}`
  
  // Reset user stories
  Object.keys(userStories.value).forEach(key => {
    userStories.value[key] = false
  })
}

const submitChallenge = async () => {
  loading.value = true
  
  try {
    // TODO: Implement actual submission logic
    console.log('Submitting challenge...')
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Show success message
    alert('Congratulations! Challenge completed successfully! +50 XP')
    
    // Redirect to dashboard
    await navigateTo('/dashboard')
  } catch (error) {
    console.error('Submission error:', error)
  } finally {
    loading.value = false
  }
}

// Auto-check user stories based on code content
watch([htmlCode, cssCode], () => {
  const html = htmlCode.value.toLowerCase()
  const css = cssCode.value.toLowerCase()
  
  userStories.value.story1 = html.includes('id="main"')
  userStories.value.story2 = html.includes('id="title"')
  userStories.value.story3 = html.includes('id="img-div"')
  userStories.value.story4 = html.includes('id="image"')
  userStories.value.story5 = html.includes('id="img-caption"')
}, { immediate: true })
</script> 