<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'

const isDrawing = ref(false)
const pathLength = ref(763) // Valeur par défaut approximative
const polygonRef = ref<SVGGeometryElement | null>(null)

const calculatePathLength = () => {
  if (polygonRef.value && typeof polygonRef.value.getTotalLength === 'function') {
    try {
      const length = polygonRef.value.getTotalLength()
      if (length > 0) {
        pathLength.value = length
        return true
      }
    } catch (e) {
      console.log('Tentative de calcul de pathLength échouée, nouvelle tentative...')
    }
  }
  return false
}

onMounted(async () => {
  await nextTick()
  
  // Essayer plusieurs fois avec des délais croissants
  let attempts = 0
  const maxAttempts = 5
  
  const tryCalculate = () => {
    if (calculatePathLength()) {
      return // Succès !
    }
    
    attempts++
    if (attempts < maxAttempts) {
      setTimeout(tryCalculate, 200 * attempts)
    }
  }
  
  tryCalculate()
})

const drawShape = () => {
  // S'assurer que pathLength est calculé avant de dessiner
  if (pathLength.value === 763) {
    calculatePathLength()
  }
  
  isDrawing.value = true
  setTimeout(() => {
    isDrawing.value = false
  }, 3000)
}
</script>

<template>
  <div class="demo-container">
    <div class="svg-container">
      <svg viewBox="0 0 320 320" width="320" height="320">
        <!-- Grille de fond -->
        <defs>
          <pattern id="grid-drawing" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect width="20" height="20" fill="none" stroke="#ddd" stroke-width="0.5"/>
          </pattern>
        </defs>
        <rect width="320" height="320" fill="white" />
        <rect width="320" height="320" fill="url(#grid-drawing)" />
        
        <polygon
          ref="polygonRef"
          points="60,100 100,180 140,140 180,200 220,120 260,180 220,220 180,180 140,240 100,200 60,260 20,220"
          fill="transparent"
          stroke="hsl(280, 70%, 60%)"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
          :stroke-dasharray="isDrawing ? `${pathLength}, 1000` : '0, 0'"
          :stroke-dashoffset="isDrawing ? pathLength : 0"
          :style="{ '--path-length': `${pathLength}px` }"
          :class="{ 'drawing': isDrawing }"
        />
      </svg>
    </div>
    <button @click="drawShape" :disabled="isDrawing" class="draw-button">
      {{ isDrawing ? 'Dessin en cours...' : 'Dessiner la forme' }}
    </button>
  </div>
</template>

<style scoped>
.demo-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;
  margin-left: 2rem;
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
  width: 320px;
  height: 320px;
}

.drawing {
  animation: draw-path 3s ease-out forwards;
}

@keyframes draw-path {
  from {
    stroke-dashoffset: var(--path-length);
  }
  to {
    stroke-dashoffset: 0;
  }
}

.draw-button {
  padding: 0.5rem 1rem;
  background: #4FC3F7;
  color: #000;
  border: none;
  width: 320px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 2px 8px rgba(79, 195, 247, 0.3);
}

.draw-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(79, 195, 247, 0.5);
  background: #81D4FA;
}

.draw-button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.draw-button:active:not(:disabled) {
  transform: translateY(0);
}
</style>

