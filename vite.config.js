// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/jojozoo-camp/',   // ← 這行很重要：對應你的 repo 名稱
})
