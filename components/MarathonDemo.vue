<script setup lang="ts">
import { ref } from 'vue'
import InteractiveSlider from './InteractiveSlider.vue'

const speed = ref(25)
const dashSize = ref(15)
</script>

<template>
  <div class="demo-container">
    <div class="svg-container">
      <svg viewBox="0 0 200 200" width="300" height="300">
        <!-- Grille de fond -->
        <defs>
          <pattern id="grid-marathon" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect width="20" height="20" fill="none" stroke="#ddd" stroke-width="0.5"/>
          </pattern>
        </defs>
        <rect width="200" height="200" fill="white" />
        <rect width="200" height="200" fill="url(#grid-marathon)" />
        
        <circle 
          cx="100" 
          cy="100" 
          r="70"
          fill="transparent"
          stroke="hsl(340, 82%, 52%)"
          stroke-width="8"
          :stroke-dasharray="`${dashSize}, ${dashSize}`"
          stroke-linecap="round"
          class="marathon-circle"
          :style="{ animationDuration: `${100 / speed}s` }"
        />
      </svg>
    </div>
    <div class="controls">
      <InteractiveSlider v-model="speed" label="Vitesse d'animation" :min="5" :max="100" />
      <InteractiveSlider v-model="dashSize" label="Taille des traits" :min="5" :max="40" />
    </div>
  </div>
</template>

<style scoped>
.demo-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0rem;
}

.svg-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 12px;
  padding: 0rem;
  border: 2px solid #555;
}

.marathon-circle {
  animation: marathon-run linear infinite;
}

@keyframes marathon-run {
  from {
    stroke-dashoffset: 0;
  }
  to {
    stroke-dashoffset: 1000;
  }
}

.controls {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.25rem 0.75rem;
}
</style>

