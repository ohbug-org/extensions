import type { OhbugExtension } from '@ohbug/types'
import PageVisibility from './pageVisibility'
import captureUrlChange, { removeCaptureUrlChange } from './urlChange'

let instance: PageVisibility | null = null
const extension = (): OhbugExtension => ({
  name: 'OhbugExtensionView',
  onSetup: () => {
    instance = PageVisibility.capturePageVisibility()
    captureUrlChange()
  },
  onDestroy: () => {
    removeCaptureUrlChange()
    instance?.destroy()
  },
})

export default extension
