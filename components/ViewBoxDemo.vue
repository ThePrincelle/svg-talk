<script setup lang="ts">
import { ref, computed } from 'vue'
import InteractiveSlider from './InteractiveSlider.vue'

const zoom = ref(100)

const round = (value: number, decimals: number = 2) => {
  return Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals)
}

const viewBoxValue = computed(() => {
  const scale = zoom.value / 100
  const width = 200 / scale
  const height = 200 / scale
  const x = (200 - width) / 2
  const y = (200 - height) / 2
  return `${round(x)} ${round(y)} ${round(width)} ${round(height)}`
})
</script>

<template>
  <div class="demo-container">
    <div class="svg-container">
      <svg width="180" height="180" :viewBox="viewBoxValue">
        <!-- Grille de fond -->
        <defs>
          <pattern id="grid-viewbox" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect width="20" height="20" fill="none" stroke="#ddd" stroke-width="0.5"/>
          </pattern>
        </defs>
        <rect width="200" height="200" fill="white" />
        <rect width="200" height="200" fill="url(#grid-viewbox)" />
        
        <!-- Contenu SVG -->
        <circle cx="100" cy="100" r="30" fill="hsl(280, 70%, 60%)" />
        <rect x="60" y="60" width="80" height="80" fill="none" stroke="hsl(200, 70%, 55%)" stroke-width="3" />
        <text x="100" y="105" text-anchor="middle" font-size="16" fill="black" font-weight="bold">SVG</text>
      </svg>
    </div>
    <div class="controls">
      <InteractiveSlider v-model="zoom" label="Zoom (%) " :min="50" :max="400" />
      <p class="viewbox-info">viewBox: "{{ viewBoxValue }}"</p>
    </div>
  </div>
</template>

<style scoped>
.demo-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.25rem;
}

.svg-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 6px;
  padding: 0.25rem;
  border: 2px solid #555;
}

svg {
  border: 2px solid var(--slidev-theme-primary);
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1));
}

.controls {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.viewbox-info {
  font-family: monospace;
  font-size: 0.75rem;
  color: #4FC3F7;
  margin: 0.15rem 0 0 0;
  padding: 0.3rem;
  background: #2d2d2d;
  border-radius: 4px;
  border: 1px solid #444;
}
</style>

