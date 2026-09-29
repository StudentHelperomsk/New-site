import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: process.env.SITE_BASE_PATH || '/',
  server: {
    // Screenshots, logs and diagnostic output are not application source.
    watch: { ignored: ['**/operation/**'] },
  },
})
