import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative base so the built site works whether it's served from
  // the repo root or a GitHub Pages project path (username.github.io/repo-name/)
  base: './',
})
