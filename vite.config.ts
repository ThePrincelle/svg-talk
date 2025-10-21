import { defineConfig } from 'vite'

export default defineConfig({
  // Configurez le base en fonction du nom de votre repository GitHub
  // Par exemple, si votre repo est https://github.com/username/svg-talk
  // alors base devrait être '/svg-talk/'
  base: process.env.NODE_ENV === 'production' ? '/svg-talk/' : '/',
})

