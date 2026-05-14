import { defineConfig } from 'vite-plus'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { TDesignResolver } from '@tdesign-vue-next/auto-import-resolver'
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [TDesignResolver({ library: 'mobile-vue' })],
    }),
    Components({
      resolvers: [TDesignResolver({ library: 'mobile-vue', resolveIcons: true })],
    }),
  ],
})
