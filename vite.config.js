// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/jojozoo-camp/',   // ★GitHub Pages 子路徑
  plugins: [react()],
})
