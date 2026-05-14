import { defineConfig } from '@rsbuild/core'
import { pluginVue } from '@rsbuild/plugin-vue'
import AutoImport from 'unplugin-auto-import/rspack'
import Components from 'unplugin-vue-components/rspack'
import { TDesignResolver } from '@tdesign-vue-next/auto-import-resolver'

export default defineConfig({
  plugins: [pluginVue()],
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
      plugins: [
        AutoImport({
          resolvers: [TDesignResolver({ library: 'vue-next' })],
        }),
        Components({
          resolvers: [TDesignResolver({ library: 'vue-next', resolveIcons: true })],
        }),
      ],
    },
  },
})
