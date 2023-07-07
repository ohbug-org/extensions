import type { OhbugExtension } from '@ohbug/types'
import PageVisibility from './pageVisibility'
import captureUrlChange from './urlChange'

const extension = (): OhbugExtension => ({
  name: 'OhbugExtensionView',
  onSetup: () => {
    PageVisibility.capturePageVisibility()
    captureUrlChange()
  },
})

export default extension
