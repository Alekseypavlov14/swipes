import { calculateAngle, calculateDistance } from './calculations'
import { SwipeHandlerConfig } from '../types/swipe-handler-config'
import { SwipeEventPosition } from '../types/swipe-event-position'
import { SwipeEventHandlers } from '../types/swipe-event-handlers'
import { createSwipeEvent } from './create-swipe-event'
import { SwipeEvent } from '../types/swipe-event'

export function createSwipeHandler(config: SwipeHandlerConfig): SwipeEventHandlers {
  let swipeEvent: SwipeEvent = createSwipeEvent()
  let swipeEventInitialPosition: SwipeEventPosition = {
    x0: 0,
    y0: 0
  }

  function touchStartHandler(e: TouchEvent) {
    swipeEventInitialPosition.x0 = e.touches[0].clientX
    swipeEventInitialPosition.y0 = e.touches[0].clientY
  }

  function touchMoveHandler(e: TouchEvent) {
    const touch = e.touches[0]

    // update position
    swipeEvent.dx = touch.clientX - swipeEventInitialPosition.x0
    swipeEvent.dy = touch.clientY - swipeEventInitialPosition.y0
    
    // update data
    swipeEvent.angle = calculateAngle(swipeEvent)
    swipeEvent.distance = calculateDistance(swipeEvent)
    swipeEvent.target = touch.target

    // call listener
    config.onSwiping(swipeEvent)
  }
  function touchEndHandler(e: TouchEvent) {
    const touch = e.touches[0]

    // update position
    swipeEvent.dx = touch.clientX - swipeEventInitialPosition.x0
    swipeEvent.dy = touch.clientY - swipeEventInitialPosition.y0
    
    // update data
    swipeEvent.angle = calculateAngle(swipeEvent)
    swipeEvent.distance = calculateDistance(swipeEvent)
    swipeEvent.target = touch.target

    // call listener
    config.onSwipe(swipeEvent)
  }

  return ({
    touchStartHandler,
    touchMoveHandler,
    touchEndHandler
  })
}
