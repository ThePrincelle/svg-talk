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
    return `${x},${y}`
  }).join(' ')
})
</script>

<template>
  <div class="demo-container">
    <div class="svg-container">
      <svg width="300" height="300" viewBox="0 0 300 300">
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
      <InteractiveSlider v-model="sides" label="Nombre de côtés" :min="3" :max="12" :step="1" />
      <InteractiveSlider v-model="size" label="Taille" :min="20" :max="140" />
      <InteractiveSlider v-model="rotation" label="Rotation (degrés)" :min="0" :max="360" />
    </div>
  </div>
</template>

<style scoped>
.demo-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem;
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

svg {
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1));
}

.controls {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>

