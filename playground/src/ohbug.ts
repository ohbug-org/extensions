import Ohbug from '@ohbug/browser'
import { OhbugErrorBoundary } from '@ohbug/react'
import OhbugExtensionFeedback from '../../packages/extension-feedback'
import OhbugExtensionRrweb from '../../packages/extension-rrweb'
import OhbugExtensionUUID from '../../packages/extension-uuid'
import OhbugExtensionView from '../../packages/extension-view'
import OhbugExtensionWebVitals from '../../packages/extension-web-vitals'

export const client = Ohbug.setup({
  apiKey: '002180b2825f612f40ae7cda02a6d466ec93adc2e707e8c63cabdedc37bdd130',
  appType: 'react',
  appVersion: __APP_VERSION__,
})
client.use(OhbugExtensionFeedback())
client.use(OhbugExtensionRrweb)
client.use(OhbugExtensionUUID)
client.use(OhbugExtensionView)
client.use(OhbugExtensionWebVitals)

export { OhbugErrorBoundary }
