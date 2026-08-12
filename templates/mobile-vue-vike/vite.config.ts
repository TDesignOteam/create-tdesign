import vue from '@vitejs/plugin-vue'
import vike from 'vike/plugin'
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: '0.0.0.0',
    allowedHosts: true,
  },
  plugins: [vike(), vue()],
})
