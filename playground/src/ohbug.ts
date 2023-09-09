import Ohbug from '@ohbug/browser'
import { OhbugErrorBoundary } from '@ohbug/react'
import OhbugExtensionFeedback from '@ohbug/extension-feedback'
import OhbugExtensionRrweb from '@ohbug/extension-rrweb'
import OhbugExtensionUUID from '@ohbug/extension-uuid'
import OhbugExtensionView from '@ohbug/extension-view'
import OhbugExtensionWebVitals from '@ohbug/extension-web-vitals'

export const client = Ohbug.setup({
  apiKey: 'f02773f08c2f580e4e8d2dfff7a533014a836dfa00c07bbfe6055273e63bda75',
  appType: 'react',
  appVersion: __APP_VERSION__,
})
client.use(OhbugExtensionFeedback())
client.use(OhbugExtensionRrweb())
client.use(OhbugExtensionUUID())
client.use(OhbugExtensionView())
client.use(OhbugExtensionWebVitals())

export { OhbugErrorBoundary }
