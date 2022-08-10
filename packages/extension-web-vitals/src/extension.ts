import type { OhbugClient, OhbugExtension } from '@ohbug/types'
import type { Metric } from 'web-vitals'
import { getCLS, getFCP, getFID, getLCP, getTTFB } from 'web-vitals'

function createNotifier(client: OhbugClient) {
  let isSent = false
  let isCalled = false
  let result = {}

  const sendValues = () => {
    if (isSent) return // data is already sent
    if (!isCalled) return // no data collected

    const event = client.createEvent({
      category: 'performance',
      type: 'web-vitals',
      detail: result,
    })
    client.notify(event)
    isSent = true
  }

  const notify = (metric: Metric) => {
    if (!isCalled) isCalled = true
    result = { ...result, [metric.name]: metric.value }
  }

  setTimeout(() => {
    const supportedEntryTypes = (PerformanceObserver && PerformanceObserver.supportedEntryTypes) || []
    const isLatestVisibilityChangeSupported = supportedEntryTypes.includes('layout-shift')

    if (isLatestVisibilityChangeSupported) {
      const onVisibilityChange = () => {
        if (document.visibilityState === 'hidden') {
          sendValues()
          removeEventListener('visibilitychange', onVisibilityChange, true)
        }
      }
      addEventListener('visibilitychange', onVisibilityChange, true)
    }
    else {
      addEventListener('pagehide', sendValues, { capture: true, once: true })
    }
  })

  return notify
}

const extension: OhbugExtension = {
  name: 'OhbugExtensionWebVitals',
  onSetup: (client) => {
    const notify = createNotifier(client)
    getCLS(notify)
    getFCP(notify)
    getFID(notify)
    getLCP(notify)
    getTTFB(notify)
  },
}

export default extension
