import { defineConfig } from '@rspack/cli'
import {
  rspack,
  type SwcLoaderOptions,
} from '@rspack/core'
import AutoImport from 'unplugin-auto-import/rspack'
import Components from 'unplugin-vue-components/rspack'
import { TDesignResolver } from '@tdesign-vue-next/auto-import-resolver'

export default defineConfig({
  entry: {
    main: './src/main.ts',
  },
  resolve: {
    extensions: ['...', '.ts', '.tsx', '.jsx'],
    alias: {
      'tdesign-vue-next/es/config-provider/hooks$':
        'tdesign-vue-next/es/config-provider/hooks/index.mjs',
    },
  },
  module: {
    rules: [
      {
        test: /\.(?:mjs|js)$/,
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.css$/,
        type: 'css/auto',
      },
      {
        test: /\.svg/,
        type: 'asset/resource',
      },
      {
        test: /\.jsx$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: ['@vue/babel-plugin-jsx'],
            },
          },
        ],
      },
      {
        test: /\.(?:ts|tsx|mts|cts)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'builtin:swc-loader',
            options: {
              jsc: {
                parser: {
                  syntax: 'typescript',
                  tsx: true,
                },
                transform: {
                  react: {
                    runtime: 'automatic',
                  },
                },
              },
            } satisfies SwcLoaderOptions,
          },
          {
            loader: 'babel-loader',
            options: {
              plugins: ['@vue/babel-plugin-jsx'],
            },
          },
        ],
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
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
    AutoImport({
      resolvers: [TDesignResolver({ library: 'chat' })],
    }),
    Components({
      resolvers: [TDesignResolver({ library: 'chat' })],
    }),
  ],
})
