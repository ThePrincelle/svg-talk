<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import VariantSelector from './VariantSelector.vue'

const variant = ref('A')
const emit = defineEmits(['update:modelValue'])

const strokeStyles = computed(() => {
  const styles = {
    A: {
      stroke: 'hsl(45deg 100% 50%)',
      strokeWidth: '6px',
      strokeDasharray: '0, 0',
      strokeLinecap: 'butt',
    },
    B: {
      stroke: 'hsl(200deg 80% 50%)',
      strokeWidth: '10px',
      strokeDasharray: '0, 0',
      strokeLinecap: 'round',
    },
    C: {
      stroke: 'hsl(340deg 90% 55%)',
      strokeWidth: '6px',
      strokeDasharray: '20, 14',
      strokeLinecap: 'butt',
    },
    D: {
      stroke: 'hsl(280deg 70% 60%)',
      strokeWidth: '8px',
      strokeDasharray: '20, 14',
      strokeLinecap: 'round',
    },
    E: {
      stroke: 'hsl(150deg 60% 50%)',
      strokeWidth: '6px',
      strokeDasharray: '0, 20',
      strokeLinecap: 'round',
    },
  }
  return styles[variant.value]
})

watch(strokeStyles, (newStyles) => {
  emit('update:modelValue', newStyles)
})
</script>

<template>
  <div class="demo-container">
    <VariantSelector v-model="variant" :variants="['A', 'B', 'C', 'D', 'E']" />
    
    <div class="svg-container">
      <svg viewBox="0 0 200 200" width="300" height="300">
        <!-- Grille de fond -->
        <defs>
          <pattern id="grid-stroke" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect width="20" height="20" fill="none" stroke="#ddd" stroke-width="0.5"/>
          </pattern>
        </defs>
        <rect width="200" height="200" fill="white" />
        <rect width="200" height="200" fill="url(#grid-stroke)" />
        
        <circle 
          cx="100" 
          cy="100" 
          r="50"
          fill="transparent"
          :stroke="strokeStyles.stroke"
          :stroke-width="strokeStyles.strokeWidth"
          :stroke-dasharray="strokeStyles.strokeDasharray"
          :stroke-linecap="strokeStyles.strokeLinecap"
          class="animated-stroke"
        />
      </svg>
    </div>

    <!-- <div class="code-display">
      <pre><code>stroke: {{ strokeStyles.stroke }};
stroke-width: {{ strokeStyles.strokeWidth }};
stroke-dasharray: {{ strokeStyles.strokeDasharray }};
stroke-linecap: {{ strokeStyles.strokeLinecap }};</code></pre>
    </div> -->
  </div>
</template>

<style scoped>
.demo-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0rem;
}

.svg-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 12px;
  padding: 1rem;
  border: 2px solid #555;
}

.animated-stroke {
  transition: 
    stroke 1200ms,
    stroke-width 900ms,
    stroke-dasharray 1500ms,
    stroke-linecap 1000ms;
}

.code-display {
  background: #2d2d2d;
  border-radius: 8px;
  padding: 1rem;
  overflow-x: auto;
}

.code-display code {
  color: #a9b7c6;
  font-family: 'Fira Code', 'Monaco', monospace;
  font-size: 0.85rem;
  line-height: 1.6;
}
</style>

