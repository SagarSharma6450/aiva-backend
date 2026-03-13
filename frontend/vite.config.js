import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/auth': {
        target: 'https://aiva-backend-3.onrender.com',
        changeOrigin: true
      },
      '/profile': {
        target: 'https://aiva-backend-3.onrender.com',
        changeOrigin: true
      },
      '/interview': {
        target: 'https://aiva-backend-3.onrender.com',
        changeOrigin: true
      }
    }
  }
})
