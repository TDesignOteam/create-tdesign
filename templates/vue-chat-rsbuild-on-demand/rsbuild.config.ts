import { defineConfig } from '@rsbuild/core'
import { pluginVue } from '@rsbuild/plugin-vue'
import AutoImport from 'unplugin-auto-import/rspack'
import Components from 'unplugin-vue-components/rspack'
import { TDesignResolver } from '@tdesign-vue-next/auto-import-resolver'

export default defineConfig({
  plugins: [pluginVue()],
  resolve: {
    alias: {
      'tdesign-vue-next/es/config-provider/hooks$':
        'tdesign-vue-next/es/config-provider/hooks/index.mjs',
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
      plugins: [
        AutoImport({
          resolvers: [TDesignResolver({ library: 'chat' })],
        }),
        Components({
          resolvers: [TDesignResolver({ library: 'chat', resolveIcons: true })],
        }),
      ],
    },
  },
})
