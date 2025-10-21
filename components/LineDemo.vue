<script setup lang="ts">
import { ref } from 'vue'
import InteractiveSlider from './InteractiveSlider.vue'

const x1 = ref(80)
const y1 = ref(80)
const x2 = ref(200)
const y2 = ref(200)
</script>

<template>
  <div class="demo-container">
    <div class="svg-container">
      <svg width="280" height="280" viewBox="0 0 280 280">
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
      <InteractiveSlider v-model="x1" label="x1" :min="0" :max="280" />
      <InteractiveSlider v-model="y1" label="y1" :min="0" :max="280" />
      <InteractiveSlider v-model="x2" label="x2" :min="0" :max="280" />
      <InteractiveSlider v-model="y2" label="y2" :min="0" :max="280" />
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
  background: #f8f9fa;
  border-radius: 12px;
  padding: 1rem;
  border: 2px solid #e9ecef;
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

