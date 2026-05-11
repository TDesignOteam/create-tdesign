import { defineConfig } from '@rspack/cli'
import { rspack, type SwcLoaderOptions } from '@rspack/core'
import { ReactRefreshRspackPlugin } from '@rspack/plugin-react-refresh'

const isDev = process.env.NODE_ENV === 'development'

export default defineConfig({
  entry: {
    main: './src/main.tsx',
  },
  resolve: {
    extensions: ['...', '.ts', '.tsx', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        type: 'css/auto',
      },
      {
        test: /\.svg$/,
        type: 'asset',
      },
      {
        test: /\.(?:ts|tsx|js|jsx|mts|cts|mjs|cjs)$/,
        use: [
          {
            loader: 'builtin:swc-loader',
            options: {
              detectSyntax: 'auto',
              jsc: {
                transform: {
                  react: {
                    runtime: 'automatic',
                    development: isDev,
                    refresh: isDev,
                  },
                },
              },
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
    isDev && new ReactRefreshRspackPlugin(),
  ],
})
