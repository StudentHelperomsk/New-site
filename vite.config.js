import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // Screenshots, logs and diagnostic output are not application source.
    watch: { ignored: ['**/operation/**'] },
  },
})
