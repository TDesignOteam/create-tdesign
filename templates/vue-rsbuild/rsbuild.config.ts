import { defineConfig } from '@rsbuild/core'
import { pluginVue } from '@rsbuild/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [pluginVue()],
  server: {
    host: '0.0.0.0',
  },
  source: {
    entry: {
      index: './src/main.ts',
    },
    define: {
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
    },
  },
  html: {
    template: './index.html',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
