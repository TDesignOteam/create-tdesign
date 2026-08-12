import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [pluginReact()],
  server: {
    host: '0.0.0.0',
  },
  source: {
    entry: {
      index: './src/main.tsx',
    },
    // react-router 的 routeModules 引用了 Vite 专属的 import.meta.hot，
    // 在 Rsbuild（Rspack）下不存在，构建时会产生 “Accessing unknown import.meta property 'hot'” 警告。
    // 将其定义为 false 以消除该警告（模板为静态路由，不涉及懒加载 HMR，行为不变）。
    define: {
      'import.meta.hot': 'false',
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
