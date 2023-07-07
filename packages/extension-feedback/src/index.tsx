import './index.css'
import type { OhbugExtension } from '@ohbug/types'
import { render } from 'solid-js/web'
import Box from './Box'

const ID = 'OhbugExtensionFeedback-ROOT'
let root: HTMLElement | null = null

const extension = (target?: HTMLElement): OhbugExtension => ({
  name: 'OhbugExtensionFeedback',
  onSetup: () => {
    root = document.createElement('div')
    root.id = ID
    ;(target || document.body).appendChild(root)

    render(() => <Box />, root)
  },
  onDestroy: () => {
    if (root) {
      root.remove()
    }
  },
})

export default extension
