<script setup lang="ts">
import { ref } from 'vue'

const isPlaying = ref(true)

const togglePlay = () => {
  isPlaying.value = !isPlaying.value
}
</script>

<template>
  <div class="demo-container">
    <div class="spinner-wrapper">
      <p class="info-text">{{ isPlaying ? 'Chargement en cours...' : 'En pause' }}</p>
      <div class="svg-container">
        <svg viewBox="0 0 100 100" width="120" height="120">
          <!-- Grille de fond -->
          <defs>
            <pattern id="grid-spinner" width="10" height="10" patternUnits="userSpaceOnUse">
              <rect width="10" height="10" fill="none" stroke="#ddd" stroke-width="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="white" />
          <rect width="100" height="100" fill="url(#grid-spinner)" />
          
          <circle 
            cx="50" 
            cy="50" 
            r="40"
            fill="transparent"
            stroke="hsl(220, 90%, 56%)"
            stroke-width="6"
            stroke-dasharray="220, 1000"
            stroke-linecap="round"
            class="spinner-circle"
            :style="{ animationPlayState: isPlaying ? 'running' : 'paused' }"
          />
        </svg>
      </div>
      <button @click="togglePlay" class="control-button">
        {{ isPlaying ? 'Pause' : 'Play' }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.demo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0rem;
}

.spinner-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.info-text {
  font-size: 1.1rem;
  font-weight: 600;
  color: #ddd;
  margin: 0;
}

.svg-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 50%;
  padding: 2rem;
  border: 2px solid #555;
}

.spinner-circle {
  animation: spinner-rotate 1.5s linear infinite, 
             spinner-dash 2s ease-in-out infinite;
  transform-origin: center;
  transform-box: fill-box;
}

@keyframes spinner-rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes spinner-dash {
  0%, 100% {
    stroke-dasharray: 20, 1000;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 220, 1000;
    stroke-dashoffset: -100;
  }
}

.control-button {
  padding: 0.75rem 2rem;
  background: #4FC3F7;
  color: #000;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 2px 8px rgba(79, 195, 247, 0.3);
}

.control-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(79, 195, 247, 0.5);
  background: #81D4FA;
}

.control-button:active {
  transform: translateY(0);
}
</style>

