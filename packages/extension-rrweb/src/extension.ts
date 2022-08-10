import type { OhbugExtension } from '@ohbug/types'
import { record } from 'rrweb'
import type { eventWithTime } from 'rrweb/typings/types'

const eventsMatrix: eventWithTime[][] = [[]]
const extension: OhbugExtension = {
  name: 'OhbugExtensionRrweb',
  onSetup: () => {
    record({
      emit(event, isCheckout) {
        if (isCheckout) {
          eventsMatrix.push([])
        }
        const lastEvents = eventsMatrix[eventsMatrix.length - 1]
        lastEvents.push(event)
      },
      checkoutEveryNms: 3 * 60 * 1000,
    })
  },
  onEvent: (event) => {
    const len = eventsMatrix.length
    const events = (eventsMatrix[len - 2] || []).concat(eventsMatrix[len - 1])
    event.addMetadata('rrweb', events)
    return event
  },
}

export default extension
