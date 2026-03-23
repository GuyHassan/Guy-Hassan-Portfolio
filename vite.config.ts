import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { port: 3001 },
  // Vercel deploys at root (/), GitHub Pages deploys under the repo name sub-path
  base: process.env['VERCEL'] ? '/' : '/Guy-Hassan-Portfolio/',
})
