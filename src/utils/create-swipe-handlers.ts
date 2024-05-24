import { calculateAngle, calculateDistance } from './calculations'
import { createSwipeHandlersConfig } from './create-swipe-handlers-config'
import { defaultSwipeHandlerConfig } from '../constants'
import { SwipeHandlersConfig } from '../types/swipe-handlers-config'
import { SwipeEventPosition } from '../types/swipe-event-position'
import { SwipeEventHandlers } from '../types/swipe-event-handlers'
import { createSwipeEvent } from './create-swipe-event'
import { SwipeEvent } from '../types/swipe-event'
import { deepMerge } from '@oleksii-pavlov/deep-merge'

export function createSwipeHandlers(config: SwipeHandlersConfig): SwipeEventHandlers {
  // normalize config
  const normalizedConfig = createSwipeHandlersConfig(deepMerge(defaultSwipeHandlerConfig, config))

  let swipeEvent: SwipeEvent = createSwipeEvent()
  let swipeEventInitialPosition: SwipeEventPosition = {
    x0: 0,
    y0: 0
  }

  function touchStartHandler(e: TouchEvent) {
    swipeEventInitialPosition.x0 = e.changedTouches[0].clientX
    swipeEventInitialPosition.y0 = e.changedTouches[0].clientY
  }

  function touchMoveHandler(e: TouchEvent) {
    const touch = e.changedTouches[0]

    // update position
    swipeEvent.dx = touch.clientX - swipeEventInitialPosition.x0
    swipeEvent.dy = touch.clientY - swipeEventInitialPosition.y0
    
    // update data
    swipeEvent.angle = calculateAngle(swipeEvent)
    swipeEvent.distance = calculateDistance(swipeEvent)
    swipeEvent.target = touch.target

    // validate event by config
    if (swipeEvent.distance < normalizedConfig.minSwipingDistance) return

    // call listener
    normalizedConfig.onSwiping(swipeEvent)
  }
  function touchEndHandler(e: TouchEvent) {
    const touch = e.changedTouches[0]

    // update position
    swipeEvent.dx = touch.clientX - swipeEventInitialPosition.x0
    swipeEvent.dy = touch.clientY - swipeEventInitialPosition.y0
    
    // update data
    swipeEvent.angle = calculateAngle(swipeEvent)
    swipeEvent.distance = calculateDistance(swipeEvent)
    swipeEvent.target = touch.target

    // validate event by config
    if (swipeEvent.distance < normalizedConfig.minSwipeDistance) return

    // call listener
    normalizedConfig.onSwipe(swipeEvent)
  }

  return ({
    touchStartHandler,
    touchMoveHandler,
    touchEndHandler
  })
}
