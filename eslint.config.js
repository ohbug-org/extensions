import { all } from '@chenyueban/eslint-config'
import solid from 'eslint-plugin-solid/dist/configs/typescript.js'

export default [
  ...all,
  {
    files: ['**/*.{ts,tsx}'],
    ...solid,
  },
]
