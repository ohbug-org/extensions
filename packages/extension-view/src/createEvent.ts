import { getOhbugObject } from '@ohbug/utils'

export function sendPageView(path: string, initial?: boolean) {
  const { client } = getOhbugObject<Window>()
  const event = client.createEvent({
    category: 'view',
    type: 'pageView',
    detail: {
      initial,
      path,
    },
  })
  client.notify(event)
}

export function sendUserView(path: string) {
  const { client } = getOhbugObject<Window>()
  const event = client.createEvent({
    category: 'view',
    type: 'userView',
    detail: { path },
  })
  client.notify(event)
}
