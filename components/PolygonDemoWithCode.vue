<script setup lang="ts">
import { ref, computed } from 'vue'
import InteractiveSlider from './InteractiveSlider.vue'

const sides = ref(6)
const size = ref(80)
const rotation = ref(0)

const points = computed(() => {
  const center = 150
  const angleStep = (2 * Math.PI) / sides.value
  const rotationRad = (rotation.value * Math.PI) / 180
  
  return Array.from({ length: sides.value }, (_, i) => {
    const angle = i * angleStep + rotationRad
    const x = center + size.value * Math.cos(angle)
    const y = center + size.value * Math.sin(angle)
    return `${x.toFixed(0)},${y.toFixed(0)}`
  }).join(' ')
})

const codeString = computed(() => `<polygon 
  points="${points.value}"
  fill="gold"
/>`)
</script>

<template>
  <div class="demo-with-code">
    <div class="left-side">
      <div class="svg-container">
        <svg width="200" height="200" viewBox="0 0 300 300">
          <!-- Grille de fond -->
          <defs>
            <pattern id="grid-polygon-demo" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect width="20" height="20" fill="none" stroke="#ddd" stroke-width="0.5"/>
            </pattern>
          </defs>
          <rect width="300" height="300" fill="white" />
          <rect width="300" height="300" fill="url(#grid-polygon-demo)" />
          
          <polygon 
            :points="points"
            fill="hsl(45, 100%, 60%)"
            stroke="hsl(45, 100%, 40%)"
            stroke-width="3"
            stroke-linejoin="round"
          />
          <!-- Centre -->
          <circle cx="150" cy="150" r="4" fill="white" stroke="black" stroke-width="2" />
        </svg>
      </div>
      <div class="controls">
        <InteractiveSlider v-model="sides" label="Nombre côtés" :min="3" :max="12" :step="1" />
        <InteractiveSlider v-model="size" label="Taille" :min="20" :max="140" />
        <InteractiveSlider v-model="rotation" label="Rotation (°)" :min="0" :max="360" />
      </div>
    </div>
    
    <div class="right-side">
      <h3 class="code-title">Code</h3>
      <div class="code-display">
        <pre><code class="language-xml"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>polygon</span> 
  <span class="token attr-name">points</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ points }}<span class="token punctuation">"</span></span>
  <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>gold<span class="token punctuation">"</span></span>
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
  overflow: hidden;
  flex: 1;
  display: flex;
  align-items: flex-start;
}

.code-display pre {
  margin: 0;
  width: 100%;
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.code-display code {
  color: #a9b7c6;
  font-family: 'Fira Code', 'Monaco', 'Consolas', monospace;
  font-size: 0.85rem;
  line-height: 1.5;
  transition: all 0.3s ease;
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow-wrap: break-word;
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

