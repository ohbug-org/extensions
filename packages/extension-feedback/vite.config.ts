import path from 'node:path'
import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import dts from 'vite-plugin-dts'
import libInjectCss from './lib-inject-css'

const name = 'OhbugExtensionFeedback'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.tsx'),
      name,
      formats: ['cjs', 'es'],
      fileName: format => format === 'es' ? 'index.mjs' : 'index.js',
    },
  },
  plugins: [
    solidPlugin(),
    dts({ include: ['src/**/*'] }),
    libInjectCss(),
  ],
})
