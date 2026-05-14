import { defineConfig } from '@rsbuild/core'
import { pluginBabel } from '@rsbuild/plugin-babel'
import { pluginVue } from '@rsbuild/plugin-vue'
import { pluginVueJsx } from '@rsbuild/plugin-vue-jsx'

export default defineConfig({
  plugins: [pluginBabel({ include: /\.(?:jsx|tsx)$/ }), pluginVue(), pluginVueJsx()],
  source: {
    entry: {
      main: './src/main.ts',
    },
    define: {
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
    },
  },
  html: {
    template: './index.html',
  },
})
