import {
  Show,
  createEffect,
  createSignal,
  onCleanup,
} from 'solid-js'
import { type Component } from 'solid-js'
import { setStore, store } from './store'
import { Close } from './assets'

const Selector: Component = () => {
  const [lastSelectedElement, setLastSelectedElement]
    = createSignal<HTMLElement | null>()
  let dimmerTop: HTMLDivElement
  let dimmerRight: HTMLDivElement
  let dimmerBottom: HTMLDivElement
  let dimmerLeft: HTMLDivElement
  let selector: HTMLDivElement

  const PADDING = 2

  function handleSelecting(element?: Element | null) {
    if (!element) return
    if (element.tagName === 'HTML') return

    const { width, height, top, right, bottom, left }
      = element.getBoundingClientRect()

    selector?.setAttribute(
      'style',
      `
      width: ${width + PADDING * 2}px;
      height: ${height + PADDING * 2}px;
      top: ${top - PADDING}px;
      left: ${left - PADDING}px;
    `,
    )
    dimmerTop?.setAttribute(
      'style',
      `
      height: ${top}px;
      top: 0;
      right: 0;
      left: 0;
    `,
    )
    dimmerRight?.setAttribute(
      'style',
      `
      top: ${top}px;
      right: 0;
      bottom: 0;
      left: ${right}px;
    `,
    )
    dimmerBottom?.setAttribute(
      'style',
      `
      width: ${width + left}px;
      top: ${bottom}px;
      bottom: 0;
      left: 0;
    `,
    )
    dimmerLeft?.setAttribute(
      'style',
      `
      width: ${left}px;
      height: ${height}px;
      top: ${top}px;
      left: 0;
    `,
    )
  }

  function handleSelected(element?: HTMLElement | null) {
    if (!element) return
    if (element.tagName === 'HTML') return

    const { width, height, top, left } = element.getBoundingClientRect()
    setStore({ selectedElement: element })

    selector?.setAttribute(
      'style',
      `
      width: ${width + PADDING * 2}px;
      height: ${height + PADDING * 2}px;
      top: ${top - PADDING}px;
      left: ${left - PADDING}px;
    `,
    )
  }

  function handleMoveListener(e: MouseEvent) {
    setStore({ working: true })

    const target = document.elementFromPoint(
      e.clientX,
      e.clientY,
    ) as HTMLElement

    if (target?.dataset?.ohbugSelector !== undefined || target.tagName === 'HTML') {
      return false
    }

    handleSelecting(target)
  }
  function addMoveListener() {
    document.addEventListener('mousemove', handleMoveListener)
  }
  function removeMoveListener() {
    document.removeEventListener('mousemove', handleMoveListener)
  }
  function handleClickListener(e: MouseEvent) {
    const target = document.elementFromPoint(
      e.clientX,
      e.clientY,
    ) as HTMLElement
    if (target?.dataset?.ohbugSelector !== undefined || target.tagName === 'HTML') {
      return false
    }
    if (store.selectedElement && store.working) {
      return false
    }
    setLastSelectedElement(target)
    handleSelected(lastSelectedElement())
    removeMoveListener()
  }
  function addClickListener() {
    document.addEventListener('mousedown', handleClickListener)
  }
  function removeClickListener() {
    document.removeEventListener('mousedown', handleClickListener)
  }
  function handleClose() {
    setLastSelectedElement(null)
    removeMoveListener()
    removeClickListener()
    setStore({
      working: false,
      selectedElement: null,
    })
  }
  function handleChange() {
    setStore({
      working: true,
      selectedElement: null,
    })
    setLastSelectedElement(null)
    addMoveListener()
  }

  createEffect(() => {
    if (store.working) {
      addMoveListener()
      addClickListener()
    }
    else {
      removeMoveListener()
      removeClickListener()
    }
  })

  onCleanup(handleClose)

  return (
    <>
      <div
        data-ohbug-selector
        class="-z-1 fixed"
      >
        <Show when={!store.selectedElement && store.working}>
          <div
            data-ohbug-selector
            class="bg-none border-solid border-4 border-blue-500 transition top-0 right-0 bottom-0 left-0 z-10 fixed pointer-events-none"
          >
            <div
              data-ohbug-selector
              class="tips"
            >
              Select element on the page
              <button
                class="btn-stop"
                type="button"
                onClick={handleClose}
              >
                <Close />
              </button>
            </div>
          </div>
        </Show>
        <div
          ref={(el) => {
            dimmerTop = el
          }}
          data-ohbug-selector
          class="bg-black bg-opacity-40 transition -z-1 fixed pointer-events-none"
        />
        <div
          ref={(el) => {
            dimmerRight = el
          }}
          data-ohbug-selector
          class="bg-black bg-opacity-40 transition -z-1 fixed pointer-events-none"
        />
        <div
          ref={(el) => {
            dimmerBottom = el
          }}
          data-ohbug-selector
          class="bg-black bg-opacity-40 transition -z-1 fixed pointer-events-none"
        />
        <div
          ref={(el) => {
            dimmerLeft = el
          }}
          data-ohbug-selector
          class="bg-black bg-opacity-40 transition -z-1 fixed pointer-events-none"
        />

        <div
          ref={(el) => {
            selector = el
          }}
          data-ohbug-selector
          class={
            `fixed -z-1 bg-black bg-opacity-20 border-4 rounded-sm transition cursor-pointer box-border pointer-events-none ${
              lastSelectedElement()
                ? 'border-red-500 border-solid'
                : 'border-blue-500 border-dashed'
          }`
          }
        >
          <Show when={store.selectedElement ? store.working : null}>
            <button
              data-ohbug-selector
              class="rounded-full border-none cursor-pointer flex bg-red-500 h-6 -top-3 -right-3 w-6 z-10 items-center justify-center absolute pointer-events-auto"
              type="button"
              onClick={handleClose}
            >
              <Close />
            </button>

            <button
              data-ohbug-selector
              class="border-solid cursor-pointer font-semibold bg-red-500 border-4 border-red-500 -bottom-full text-white right-0 absolute pointer-events-auto"
              type="button"
              style={
                { transform: 'translate(4px, -8px)' }
              }
              onClick={handleChange}
            >
              Change
            </button>
          </Show>
        </div>
      </div>
    </>
  )
}

export default Selector
