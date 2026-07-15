import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { TDesignResolver } from '@tdesign-vue-next/auto-import-resolver'
import path from 'path'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [
        TDesignResolver({ library: 'chat' }),
        TDesignResolver({ library: 'vue-next', resolveIcons: true }),
      ],
    }),
    Components({
      resolvers: [
        TDesignResolver({ library: 'chat' }),
        TDesignResolver({ library: 'vue-next', resolveIcons: true }),
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
