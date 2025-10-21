<script setup lang="ts">
import { ref, computed } from 'vue'
import InteractiveSlider from './InteractiveSlider.vue'

const cx = ref(140)
const cy = ref(140)
const r = ref(70)

const codeString = computed(() => `<circle 
  cx="${cx.value}" cy="${cy.value}" 
  r="${r.value}"
  fill="hotpink"
/>`)
</script>

<template>
  <div class="demo-with-code">
    <div class="left-side">
      <div class="svg-container">
        <svg width="200" height="200" viewBox="0 0 280 280">
          <!-- Grille de fond -->
          <defs>
            <pattern id="grid-circle-demo" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect width="20" height="20" fill="none" stroke="#ddd" stroke-width="0.5"/>
            </pattern>
          </defs>
          <rect width="280" height="280" fill="white" />
          <rect width="280" height="280" fill="url(#grid-circle-demo)" />
          
          <circle 
            :cx="cx" 
            :cy="cy" 
            :r="r"
            fill="hsl(340, 82%, 52%)"
            stroke="hsl(340, 100%, 35%)"
            stroke-width="3"
          />
          <!-- Point central -->
          <circle :cx="cx" :cy="cy" r="4" fill="white" stroke="black" stroke-width="2" />
        </svg>
      </div>
      <div class="controls">
        <InteractiveSlider v-model="cx" label="cx (centre x)" :min="0" :max="280" />
        <InteractiveSlider v-model="cy" label="cy (centre y)" :min="0" :max="280" />
        <InteractiveSlider v-model="r" label="r (rayon)" :min="0" :max="140" />
      </div>
    </div>
    
    <div class="right-side">
      <h3 class="code-title">Code</h3>
      <div class="code-display">
        <pre><code class="language-xml"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>circle</span> 
  <span class="token attr-name">cx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ cx }}<span class="token punctuation">"</span></span> <span class="token attr-name">cy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ cy }}<span class="token punctuation">"</span></span> 
  <span class="token attr-name">r</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ r }}<span class="token punctuation">"</span></span>
  <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hotpink<span class="token punctuation">"</span></span>
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

