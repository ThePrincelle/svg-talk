<script setup lang="ts">
import { ref, computed } from 'vue'
import InteractiveSlider from './InteractiveSlider.vue'

const x = ref(60)
const y = ref(100)
const width = ref(180)
const height = ref(100)
const rx = ref(10)
const ry = ref(10)

const codeString = computed(() => `<rect 
  x="${x.value}" y="${y.value}" 
  width="${width.value}" height="${height.value}"
  rx="${rx.value}" ry="${ry.value}"
  fill="purple"
/>`)
</script>

<template>
  <div class="demo-with-code">
    <div class="left-side">
      <div class="svg-container">
        <svg width="200" height="200" viewBox="0 0 300 300">
          <!-- Grille de fond -->
          <defs>
            <pattern id="grid-rect-demo" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect width="20" height="20" fill="none" stroke="#ddd" stroke-width="0.5"/>
            </pattern>
          </defs>
          <rect width="300" height="300" fill="white" />
          <rect width="300" height="300" fill="url(#grid-rect-demo)" />
          
          <rect 
            :x="x" 
            :y="y" 
            :width="width" 
            :height="height"
            :rx="rx"
            :ry="ry"
            fill="hsl(280, 70%, 60%)"
            stroke="hsl(280, 70%, 40%)"
            stroke-width="3"
          />
        </svg>
      </div>
      <div class="controls">
        <InteractiveSlider v-model="x" label="x" :min="0" :max="200" />
        <InteractiveSlider v-model="y" label="y" :min="0" :max="200" />
        <InteractiveSlider v-model="width" label="width" :min="0" :max="280" />
        <InteractiveSlider v-model="height" label="height" :min="0" :max="280" />
        <InteractiveSlider v-model="rx" label="rx (arrondi H)" :min="0" :max="100" />
        <InteractiveSlider v-model="ry" label="ry (arrondi V)" :min="0" :max="100" />
      </div>
    </div>
    
    <div class="right-side">
      <h3 class="code-title">Code</h3>
      <div class="code-display">
        <pre><code class="language-xml"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rect</span> 
  <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ x }}<span class="token punctuation">"</span></span> <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ y }}<span class="token punctuation">"</span></span> 
  <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ width }}<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ height }}<span class="token punctuation">"</span></span>
  <span class="token attr-name">rx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ rx }}<span class="token punctuation">"</span></span> <span class="token attr-name">ry</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ ry }}<span class="token punctuation">"</span></span>
  <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>purple<span class="token punctuation">"</span></span>
<span class="token punctuation">/&gt;</span></span></code></pre>
      </div>
    </div>
  </div>
</template>

<style scoped>
.demo-with-code {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  width: 100%;
  max-height: 450px;
}

.left-side {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.svg-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 8px;
  padding: 0.5rem;
  border: 2px solid #555;
}

svg {
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1));
}

.controls {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.25rem 0.75rem;
}

.right-side {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.code-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
  color: #ddd;
}

.code-display {
  background: #2d2d2d;
  border-radius: 8px;
  padding: 1rem;
  overflow-x: auto;
  flex: 1;
  display: flex;
  align-items: flex-start;
}

.code-display pre {
  margin: 0;
  width: 100%;
}

.code-display code {
  color: #a9b7c6;
  font-family: 'Fira Code', 'Monaco', 'Consolas', monospace;
  font-size: 0.85rem;
  line-height: 1.5;
  transition: all 0.3s ease;
}

/* Coloration syntaxique */
.token.tag {
  color: #e8bf6a;
}

.token.attr-name {
  color: #9cdcfe;
}

.token.attr-value {
  color: #ce9178;
}

.token.punctuation {
  color: #d4d4d4;
}

.token.attr-equals {
  color: #d4d4d4;
}

@media (max-width: 768px) {
  .demo-with-code {
    grid-template-columns: 1fr;
  }
}
</style>

