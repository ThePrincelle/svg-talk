<script setup lang="ts">
import { ref, computed } from 'vue'
import InteractiveSlider from './InteractiveSlider.vue'

const x1 = ref(80)
const y1 = ref(80)
const x2 = ref(200)
const y2 = ref(200)

const codeString = computed(() => `<line 
  x1="${x1.value}" y1="${y1.value}" 
  x2="${x2.value}" y2="${y2.value}"
  stroke="blue"
  stroke-width="3"
/>`)
</script>

<template>
  <div class="demo-with-code">
    <div class="left-side">
      <div class="svg-container">
        <svg width="200" height="200" viewBox="0 0 280 280">
          <!-- Grille de fond -->
          <defs>
            <pattern id="grid-line-demo" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect width="20" height="20" fill="none" stroke="#ddd" stroke-width="0.5"/>
            </pattern>
          </defs>
          <rect width="280" height="280" fill="white" />
          <rect width="280" height="280" fill="url(#grid-line-demo)" />
          
          <line 
            :x1="x1" 
            :y1="y1" 
            :x2="x2" 
            :y2="y2"
            stroke="hsl(220, 90%, 56%)"
            stroke-width="4"
            stroke-linecap="round"
          />
          <!-- Points de contrôle -->
          <circle :cx="x1" :cy="y1" r="5" fill="hsl(340, 82%, 52%)" />
          <circle :cx="x2" :cy="y2" r="5" fill="hsl(340, 82%, 52%)" />
        </svg>
      </div>
      <div class="controls">
        <InteractiveSlider v-model="x1" label="x1 (point de départ x) " :min="0" :max="280" />
        <InteractiveSlider v-model="y1" label="y1 (point de départ y) " :min="0" :max="280" />
        <InteractiveSlider v-model="x2" label="x2 (point d'arrivée x) " :min="0" :max="280" />
        <InteractiveSlider v-model="y2" label="y2 (point d'arrivée y) " :min="0" :max="280" />
      </div>
    </div>
    
    <div class="right-side">
      <h3 class="code-title">Code</h3>
      <div class="code-display">
        <pre><code class="language-xml"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>line</span> 
  <span class="token attr-name">x1</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ x1 }}<span class="token punctuation">"</span></span> <span class="token attr-name">y1</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ y1 }}<span class="token punctuation">"</span></span> 
  <span class="token attr-name">x2</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ x2 }}<span class="token punctuation">"</span></span> <span class="token attr-name">y2</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ y2 }}<span class="token punctuation">"</span></span>
  <span class="token attr-name">stroke</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>blue<span class="token punctuation">"</span></span>
  <span class="token attr-name">stroke-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span>
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

