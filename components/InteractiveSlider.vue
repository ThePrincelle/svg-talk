<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: Number,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 300,
  },
  step: {
    type: Number,
    default: 1,
  },
})

const emit = defineEmits(['update:modelValue'])

const value = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
})
</script>

<template>
  <div class="slider-container">
    <label class="slider-label">
      <span class="label-text">{{ label }}:</span>
      <span class="label-value">{{ modelValue }}</span>
    </label>
    <input
      v-model.number="value"
      type="range"
      :min="min"
      :max="max"
      :step="step"
      class="slider"
    />
  </div>
</template>

<style scoped>
.slider-container {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin: 0.25rem 0;
}

.slider-label {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  font-weight: 500;
}

.label-text {
  color: #ddd;
}

.label-value {
  font-family: monospace;
  font-weight: 600;
  color: #4FC3F7;
}

.slider {
  width: 100%;
  height: 5px;
  border-radius: 5px;
  background: #444;
  outline: none;
  opacity: 0.8;
  transition: opacity 0.2s;
  cursor: pointer;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  appearance: none;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #4FC3F7;
  cursor: pointer;
  transition: all 0.2s;
}

.slider::-webkit-slider-thumb:hover {
  transform: scale(1.15);
  background: #81D4FA;
}

.slider::-moz-range-thumb {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #4FC3F7;
  cursor: pointer;
  border: none;
  transition: all 0.2s;
}

.slider::-moz-range-thumb:hover {
  transform: scale(1.15);
  background: #81D4FA;
}
</style>

