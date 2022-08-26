import Ohbug from '@ohbug/browser'
import { OhbugErrorBoundary } from '@ohbug/react'
import OhbugExtensionFeedback from '../../packages/extension-feedback'
import OhbugExtensionRrweb from '../../packages/extension-rrweb'
import OhbugExtensionUUID from '../../packages/extension-uuid'
import OhbugExtensionView from '../../packages/extension-view'
import OhbugExtensionWebVitals from '../../packages/extension-web-vitals'

export const client = Ohbug.setup({
  apiKey: '52ec8631e1583957f7abb5216ec7512e6824aab90eb2307a1f6ed7cf5f33f8d3',
  appType: 'react',
  appVersion: __APP_VERSION__,
})
client.use(OhbugExtensionFeedback)
client.use(OhbugExtensionRrweb)
client.use(OhbugExtensionUUID)
client.use(OhbugExtensionView)
client.use(OhbugExtensionWebVitals)

export { OhbugErrorBoundary }
