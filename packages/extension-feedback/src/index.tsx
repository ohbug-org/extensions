import 'virtual:windi.css'
import type { OhbugExtension } from '@ohbug/types'
import { render } from 'solid-js/web'
import Box from './Box'

const extension: OhbugExtension = {
  name: 'OhbugExtensionFeedback',
  onSetup: () => {
    const target = document.createElement('div')
    target.id = 'OhbugExtensionFeedback-ROOT'
    document.body.appendChild(target)

    render(() => <Box />, target)
  },
}

export default extension
