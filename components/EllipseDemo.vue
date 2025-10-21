<script setup lang="ts">
import { ref } from 'vue'
import InteractiveSlider from './InteractiveSlider.vue'

const cx = ref(150)
const cy = ref(150)
const rx = ref(75)
const ry = ref(50)
</script>

<template>
  <div class="demo-container">
    <div class="svg-container">
      <svg width="300" height="300" viewBox="0 0 300 300">
        <ellipse 
          :cx="cx" 
          :cy="cy" 
          :rx="rx"
          :ry="ry"
          fill="hsl(200, 70%, 55%)"
          stroke="hsl(200, 70%, 35%)"
          stroke-width="3"
        />
        <!-- Point central -->
        <circle :cx="cx" :cy="cy" r="4" fill="white" stroke="black" stroke-width="2" />
      </svg>
    </div>
    <div class="controls">
      <InteractiveSlider v-model="cx" label="cx (centre x)" :min="0" :max="300" />
      <InteractiveSlider v-model="cy" label="cy (centre y)" :min="0" :max="300" />
      <InteractiveSlider v-model="rx" label="rx (rayon horiz.)" :min="0" :max="150" />
      <InteractiveSlider v-model="ry" label="ry (rayon vert.)" :min="0" :max="150" />
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

