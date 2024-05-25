import { SwipeHandlersConfig } from '../types/swipe-handlers-config'
import { createSwipeHandlers } from './create-swipe-handlers'

export function addSwipeHandlers(element: HTMLElement, config: SwipeHandlersConfig) {
  const handlers = createSwipeHandlers(config)

  element.addEventListener('touchstart', (event) => {
    handlers.touchStartHandler(event as TouchEvent)
  })

  element.addEventListener('touchmove', (event) => {
    handlers.touchMoveHandler(event as TouchEvent)
  })

  element.addEventListener('touchend', (event) => {
    handlers.touchEndHandler(event as TouchEvent)
  })
}
