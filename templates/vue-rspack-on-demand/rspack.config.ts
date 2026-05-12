import { defineConfig } from '@rspack/cli'
import {
  rspack,
  type RspackPluginFunction,
  type SwcLoaderOptions,
} from '@rspack/core'
import AutoImport from 'unplugin-auto-import/rspack'
import Components from 'unplugin-vue-components/rspack'
import { TDesignResolver } from '@tdesign-vue-next/auto-import-resolver'
import { VueLoaderPlugin } from 'rspack-vue-loader'

export default defineConfig({
  entry: {
    main: './src/main.ts',
  },
  resolve: {
    extensions: ['...', '.ts', '.vue'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        type: 'css/auto',
      },
      {
        test: /\.vue$/,
        loader: 'rspack-vue-loader',
        options: {
          experimentalInlineMatchResource: true,
        },
      },
      {
        test: /\.(?:ts|mts|cts|js|mjs|cjs)$/,
        use: [
          {
            loader: 'builtin:swc-loader',
            options: {
              detectSyntax: 'auto',
            } satisfies SwcLoaderOptions,
          },
        ],
      },
    ],
  },
  plugins: [
    new rspack.HtmlRspackPlugin({
      template: './index.html',
    }),
    new rspack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
    }),
    new VueLoaderPlugin() as RspackPluginFunction,
    AutoImport({
      resolvers: [TDesignResolver({ library: 'vue-next', resolveIcons: true })],
    }),
    Components({
      resolvers: [TDesignResolver({ library: 'vue-next', resolveIcons: true })],
    }),
  ],
})
