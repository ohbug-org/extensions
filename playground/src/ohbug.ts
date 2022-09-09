import Ohbug from '@ohbug/browser'
import { OhbugErrorBoundary } from '@ohbug/react'
import OhbugExtensionFeedback from '../../packages/extension-feedback'
import OhbugExtensionRrweb from '../../packages/extension-rrweb'
import OhbugExtensionUUID from '../../packages/extension-uuid'
import OhbugExtensionView from '../../packages/extension-view'
import OhbugExtensionWebVitals from '../../packages/extension-web-vitals'

export const client = Ohbug.setup({
  apiKey: '78d2315eb7b0f4d58a87f9273325969512953c52d8c2adff67ea60a450e23bf8',
  appType: 'react',
  appVersion: __APP_VERSION__,
})
client.use(OhbugExtensionFeedback)
client.use(OhbugExtensionRrweb)
client.use(OhbugExtensionUUID)
client.use(OhbugExtensionView)
client.use(OhbugExtensionWebVitals)

export { OhbugErrorBoundary }
