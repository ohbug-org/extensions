import './index.css'
import type { OhbugExtension } from '@ohbug/types'
import { render } from 'solid-js/web'
import Box from './Box'

const extension = (target?: HTMLElement): OhbugExtension => ({
  name: 'OhbugExtensionFeedback',
  onSetup: () => {
    const root = document.createElement('div')
    root.id = 'OhbugExtensionFeedback-ROOT'
    ;(target || document.body).appendChild(root)

    render(() => <Box />, root)
  },
})

export default extension
