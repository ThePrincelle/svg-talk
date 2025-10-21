<script setup lang="ts">
import { ref } from 'vue'
import InteractiveSlider from './InteractiveSlider.vue'

const x = ref(60)
const y = ref(100)
const width = ref(180)
const height = ref(100)
const rx = ref(0)
const ry = ref(0)
</script>

<template>
  <div class="demo-container">
    <div class="svg-container">
      <svg width="300" height="300" viewBox="0 0 300 300">
        <rect 
          :x="x" 
          :y="y" 
          :width="width" 
          :height="height"
          :rx="rx"
          :ry="ry"
          fill="hsl(280, 70%, 60%)"
          stroke="hsl(280, 70%, 40%)"
          stroke-width="3"
        />
      </svg>
    </div>
    <div class="controls">
      <InteractiveSlider v-model="x" label="x" :min="0" :max="200" />
      <InteractiveSlider v-model="y" label="y" :min="0" :max="200" />
      <InteractiveSlider v-model="width" label="width" :min="0" :max="280" />
      <InteractiveSlider v-model="height" label="height" :min="0" :max="280" />
      <InteractiveSlider v-model="rx" label="rx (arrondi horiz.)" :min="0" :max="100" />
      <InteractiveSlider v-model="ry" label="ry (arrondi vert.)" :min="0" :max="100" />
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

