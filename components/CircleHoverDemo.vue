<script setup lang="ts">
</script>

<template>
  <div class="demo-container">
    <p class="demo-text">Survolez le SVG ci-dessous :</p>
    <button class="hover-button">
      <svg width="100" height="100" viewBox="0 0 100 100">
        <circle class="animated-circle" cx="50" cy="50" r="30" />
      </svg>
    </button>
  </div>
</template>

<style scoped>
.demo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
}

.demo-text {
  font-size: 1.1rem;
  color: #ddd;
  margin: 0;
}

.hover-button {
  background: #2a2a2a;
  border: 2px solid #555;
  border-radius: 12px;
  padding: 0rem 1rem;
  cursor: pointer;
  transition: all 0.3s;
}

.hover-button:hover {
  border-color: #4FC3F7;
  box-shadow: 0 8px 20px rgba(79, 195, 247, 0.3);
}

.animated-circle {
  fill: hotpink;
  transition: r 400ms, cy 600ms;
}

.hover-button:hover .animated-circle,
.hover-button:focus-visible .animated-circle {
  r: 50px;
  cy: 80px;
}
</style>

