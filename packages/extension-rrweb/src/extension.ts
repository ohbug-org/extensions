import { pack, record } from 'rrweb'
import { type OhbugExtension } from '@ohbug/types'
import { type eventWithTime } from '@rrweb/types'

const eventsMatrix: eventWithTime[][] = [[]]
const extension = (): OhbugExtension => ({
  name: 'OhbugExtensionRrweb',
  onSetup: () => {
    record({
      emit(event, isCheckout) {
        if (isCheckout) {
          eventsMatrix.push([])
        }
        const lastEvents = eventsMatrix.at(-1)
        lastEvents?.push(event)
      },
      checkoutEveryNms: 1 * 60 * 1000,
      sampling: {
        mousemove: false,
        scroll: 250,
        media: 800,
        input: 'last',
      },
      packFn: pack,
    })
  },
  onEvent: (event) => {
    const len = eventsMatrix.length
    const events = (eventsMatrix[len - 2] || []).concat(eventsMatrix[len - 1])
    event.addMetadata('rrweb', events)
    return event
  },
})

export default extension
