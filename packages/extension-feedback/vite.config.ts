import path from 'path'
import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import dts from 'vite-plugin-dts'
import windiCSS from 'vite-plugin-windicss'
import libInjectCss from './libInjectCss'

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
    windiCSS(),
    libInjectCss(),
  ],
})
