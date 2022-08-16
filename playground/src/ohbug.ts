import Ohbug from '@ohbug/browser'
import { OhbugErrorBoundary } from '@ohbug/react'
import OhbugExtensionFeedback from '../../packages/extension-feedback'
import OhbugExtensionRrweb from '../../packages/extension-rrweb'
import OhbugExtensionUUID from '../../packages/extension-uuid'
import OhbugExtensionView from '../../packages/extension-view'
import OhbugExtensionWebVitals from '../../packages/extension-web-vitals'

export const client = Ohbug.setup({
  apiKey: 'cdb74ebbcd3fe3878b0a26247d2a6d78b196d5940312527e6d10f612b6261b67',
  appType: 'react',
  appVersion: __APP_VERSION__,
})
client.use(OhbugExtensionFeedback)
client.use(OhbugExtensionRrweb)
client.use(OhbugExtensionUUID)
client.use(OhbugExtensionView)
client.use(OhbugExtensionWebVitals)

export { OhbugErrorBoundary }
