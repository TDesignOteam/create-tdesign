import { defineConfig } from '@rsbuild/core'
import { pluginVue } from '@rsbuild/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [pluginVue()],
  resolve: {
    alias: {
      'tdesign-vue-next/es/config-provider/hooks$':
        'tdesign-vue-next/es/config-provider/hooks/index.mjs',
      '@': path.resolve(__dirname, 'src'),
    },
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
  tools: {
    rspack: {
      module: {
        rules: [
          {
            test: /\.(?:mjs|js)$/,
            resolve: {
              fullySpecified: false,
            },
          },
        ],
      },
    },
  },
})
