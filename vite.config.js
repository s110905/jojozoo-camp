import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // GitHub Pages 子路徑一定要設 base（repo 名稱要一樣）
  base: '/jojozoo-camp/',
})
