<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  variants: {
    type: Array as () => string[],
    required: true,
  },
})

const emit = defineEmits(['update:modelValue'])

const value = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
})
</script>

<template>
  <div class="variant-selector">
    <label class="selector-label">Variante :</label>
    <div class="buttons-container">
      <button
        v-for="variant in variants"
        :key="variant"
        :class="['variant-button', { active: modelValue === variant }]"
        @click="value = variant"
      >
        {{ variant }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.variant-selector {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin: 1rem 0;
}

.selector-label {
  font-size: 0.95rem;
  font-weight: 600;
  color: #ddd;
}

.buttons-container {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.variant-button {
  padding: 0.5rem 1rem;
  border: 2px solid #4FC3F7;
  background: transparent;
  color: #4FC3F7;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 0.9rem;
}

.variant-button:hover {
  background: #4FC3F7;
  color: #000;
  transform: translateY(-2px);
}

.variant-button.active {
  background: #4FC3F7;
  color: #000;
  box-shadow: 0 4px 12px rgba(79, 195, 247, 0.4);
}
</style>

