import { TDesignResolver } from '@tdesign-vue-next/auto-import-resolver'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import vike from 'vike/plugin'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    vike(),
    vue(),
    AutoImport({
      resolvers: [TDesignResolver({ library: 'mobile-vue' })],
    }),
    Components({
      resolvers: [TDesignResolver({ library: 'mobile-vue', resolveIcons: true })],
    }),
  ],
})
