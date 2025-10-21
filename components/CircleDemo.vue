<script setup lang="ts">
import { ref } from 'vue'
import InteractiveSlider from './InteractiveSlider.vue'

const cx = ref(140)
const cy = ref(140)
const r = ref(70)
</script>

<template>
  <div class="demo-container">
    <div class="svg-container">
      <svg width="280" height="280" viewBox="0 0 280 280">
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

