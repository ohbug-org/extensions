import Ohbug from '@ohbug/browser'
import { OhbugErrorBoundary } from '@ohbug/react'
import OhbugExtensionFeedback from '../../packages/extension-feedback'
import OhbugExtensionRrweb from '../../packages/extension-rrweb'
import OhbugExtensionUUID from '../../packages/extension-uuid'
import OhbugExtensionView from '../../packages/extension-view'
import OhbugExtensionWebVitals from '../../packages/extension-web-vitals'

export const client = Ohbug.setup({
  apiKey: '5c00f9696c97880bed9dc701168fa734e5f063132ba5a9df6775678b67b91db8',
  appType: 'react',
  appVersion: __APP_VERSION__,
})
client.use(OhbugExtensionFeedback)
client.use(OhbugExtensionRrweb)
client.use(OhbugExtensionUUID)
client.use(OhbugExtensionView)
client.use(OhbugExtensionWebVitals)

export { OhbugErrorBoundary }
