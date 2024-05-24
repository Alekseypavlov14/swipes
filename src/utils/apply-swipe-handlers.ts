import { SwipeEventHandlers } from '../types/swipe-event-handlers'
import { TemplateUtils } from '@oleksii-pavlov/templates'

export function applySwipeHandlers(selector: string, swipeHandlers: SwipeEventHandlers) {
  TemplateUtils.hydrateTemplates(selector, (element) => {
    element.addEventListener('touchstart', (event) => {
      swipeHandlers.touchStartHandler(event as TouchEvent)
    })

    element.addEventListener('touchmove', (event) => {
      swipeHandlers.touchMoveHandler(event as TouchEvent)
    })

    element.addEventListener('touchend', (event) => {
      swipeHandlers.touchEndHandler(event as TouchEvent)
    })
  })
}