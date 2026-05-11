import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/index.ts'],
  target: 'node20',
  clean: true,
  minify: true,
  sourcemap: true,
  fixedExtension: false,
  deps: {
    onlyBundle: false,
  },
})
