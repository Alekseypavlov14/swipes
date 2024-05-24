import { DIRECTIONS_TO_DEGREES_MAP, defaultSwipeHandlerConfigCreator } from '../constants'
import { createAnglesRange, createSwipeDirectionCallback } from './create-swipe-direction-callback'
import { SwipeHandlersConfigCreator } from '../types/swipe-handlers-config-creator'
import { SwipeHandlersConfig } from '../types/swipe-handlers-config'
import { combineCallbacks } from './combine-callbacks'
import { SwipeEvent } from '../types/swipe-event'
import { deepMerge } from '@oleksii-pavlov/deep-merge'

export function createSwipeHandlersConfig(config: SwipeHandlersConfigCreator): SwipeHandlersConfig {
  const normalizedConfigCreator = deepMerge(defaultSwipeHandlerConfigCreator, config)

  function onSwipe(event: SwipeEvent) {
    const combinedCallback = combineCallbacks([
      createSwipeDirectionCallback(createAnglesRange(DIRECTIONS_TO_DEGREES_MAP.top), normalizedConfigCreator.onSwipeTop),
      createSwipeDirectionCallback(createAnglesRange(DIRECTIONS_TO_DEGREES_MAP.right), normalizedConfigCreator.onSwipeRight),
      createSwipeDirectionCallback(createAnglesRange(DIRECTIONS_TO_DEGREES_MAP.bottom), normalizedConfigCreator.onSwipeBottom),
      createSwipeDirectionCallback(createAnglesRange(DIRECTIONS_TO_DEGREES_MAP.left), normalizedConfigCreator.onSwipeLeft),
    
      createSwipeDirectionCallback(createAnglesRange(DIRECTIONS_TO_DEGREES_MAP.topRight), normalizedConfigCreator.onSwipeTopRight),
      createSwipeDirectionCallback(createAnglesRange(DIRECTIONS_TO_DEGREES_MAP.bottomRight), normalizedConfigCreator.onSwipeBottomRight),
      createSwipeDirectionCallback(createAnglesRange(DIRECTIONS_TO_DEGREES_MAP.bottomLeft), normalizedConfigCreator.onSwipeBottomLeft),
      createSwipeDirectionCallback(createAnglesRange(DIRECTIONS_TO_DEGREES_MAP.topLeft), normalizedConfigCreator.onSwipeTopLeft),
    ])

    combinedCallback(event)
  }

  function onSwiping(event: SwipeEvent) {
    const combinedCallback = combineCallbacks([
      createSwipeDirectionCallback(createAnglesRange(DIRECTIONS_TO_DEGREES_MAP.top), normalizedConfigCreator.onSwipingTop),
      createSwipeDirectionCallback(createAnglesRange(DIRECTIONS_TO_DEGREES_MAP.right), normalizedConfigCreator.onSwipingRight),
      createSwipeDirectionCallback(createAnglesRange(DIRECTIONS_TO_DEGREES_MAP.bottom), normalizedConfigCreator.onSwipingBottom),
      createSwipeDirectionCallback(createAnglesRange(DIRECTIONS_TO_DEGREES_MAP.left), normalizedConfigCreator.onSwipingLeft),
    
      createSwipeDirectionCallback(createAnglesRange(DIRECTIONS_TO_DEGREES_MAP.topRight), normalizedConfigCreator.onSwipingTopRight),
      createSwipeDirectionCallback(createAnglesRange(DIRECTIONS_TO_DEGREES_MAP.bottomRight), normalizedConfigCreator.onSwipingBottomRight),
      createSwipeDirectionCallback(createAnglesRange(DIRECTIONS_TO_DEGREES_MAP.bottomLeft), normalizedConfigCreator.onSwipingBottomLeft),
      createSwipeDirectionCallback(createAnglesRange(DIRECTIONS_TO_DEGREES_MAP.topLeft), normalizedConfigCreator.onSwipingTopLeft),
    ])

    combinedCallback(event)
  }

  return ({
    ...normalizedConfigCreator,
    onSwipe,
    onSwiping
  })
}
