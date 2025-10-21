<script setup lang="ts">
import { ref, watch } from 'vue'
import InteractiveSlider from './InteractiveSlider.vue'

const props = defineProps<{
  modelValue: {
    dashOffset: number
    dashSize: number
    gapSize: number
  }
}>()

const dashOffset = ref(props.modelValue.dashOffset)
const dashSize = ref(props.modelValue.dashSize)
const gapSize = ref(props.modelValue.gapSize)

const emit = defineEmits(['update:modelValue'])

watch([dashOffset, dashSize, gapSize], ([newDashOffset, newDashSize, newGapSize]) => {
  emit('update:modelValue', {
    dashOffset: newDashOffset,
    dashSize: newDashSize,
    gapSize: newGapSize,
  })
})
</script>

<template>
  <div class="demo-container">
    <div class="svg-container">
      <svg viewBox="0 0 200 200" width="280" height="280">
        <!-- Grille de fond -->
        <defs>
          <pattern id="grid-dashoffset" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect width="20" height="20" fill="none" stroke="#ddd" stroke-width="0.5"/>
          </pattern>
        </defs>
        <rect width="200" height="200" fill="white" />
        <rect width="200" height="200" fill="url(#grid-dashoffset)" />
        
        <circle 
          cx="100" 
          cy="100" 
          r="70"
          fill="transparent"
          stroke="hsl(280, 70%, 60%)"
          stroke-width="8"
          :stroke-dasharray="`${dashSize}, ${gapSize}`"
          :stroke-dashoffset="dashOffset"
          stroke-linecap="round"
        />
      </svg>
    </div>
    <div class="controls">
      <InteractiveSlider v-model="dashOffset" label="Dash Offset" :min="-100" :max="100" />
      <InteractiveSlider v-model="dashSize" label="Taille du trait" :min="1" :max="50" />
      <InteractiveSlider v-model="gapSize" label="Taille de l'espace" :min="1" :max="50" />
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

.controls {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.25rem 0.75rem;
}
</style>

