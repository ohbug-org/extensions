import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import ReactApp from './App'
import { OhbugErrorBoundary, client } from './ohbug'

function FallbackComponent() {
  return <div>Ohbug Error FallbackComponent</div>
}
const container = document.querySelector('#root')
const root = createRoot(container!)
root.render(createElement(
  OhbugErrorBoundary,
  { client, FallbackComponent: createElement(FallbackComponent) },
  createElement(ReactApp),
))
