import { DIRECTIONS_TO_DEGREES_MAP, defaultSwipeHandlerConfig } from '../constants'
import { createAnglesRange, createSwipeDirectionCallback } from './create-swipe-direction-callback'
import { SwipeHandlersConfig } from '../types/swipe-handlers-config'
import { combineCallbacks } from './combine-callbacks'
import { SwipeEvent } from '../types/swipe-event'
import { deepMerge } from '@oleksii-pavlov/deep-merge'

export function createSwipeHandlersConfig(config: SwipeHandlersConfig): Required<SwipeHandlersConfig> {
  const normalizedConfig = deepMerge<Required<SwipeHandlersConfig>>(defaultSwipeHandlerConfig, config)

  function onSwipe(event: SwipeEvent) {
    const combinedCallback = combineCallbacks([
      normalizedConfig.onSwipe,

      createSwipeDirectionCallback(createAnglesRange(DIRECTIONS_TO_DEGREES_MAP.top), normalizedConfig.onSwipeTop),
      createSwipeDirectionCallback(createAnglesRange(DIRECTIONS_TO_DEGREES_MAP.right), normalizedConfig.onSwipeRight),
      createSwipeDirectionCallback(createAnglesRange(DIRECTIONS_TO_DEGREES_MAP.bottom), normalizedConfig.onSwipeBottom),
      createSwipeDirectionCallback(createAnglesRange(DIRECTIONS_TO_DEGREES_MAP.left), normalizedConfig.onSwipeLeft),
    
      createSwipeDirectionCallback(createAnglesRange(DIRECTIONS_TO_DEGREES_MAP.topRight), normalizedConfig.onSwipeTopRight),
      createSwipeDirectionCallback(createAnglesRange(DIRECTIONS_TO_DEGREES_MAP.bottomRight), normalizedConfig.onSwipeBottomRight),
      createSwipeDirectionCallback(createAnglesRange(DIRECTIONS_TO_DEGREES_MAP.bottomLeft), normalizedConfig.onSwipeBottomLeft),
      createSwipeDirectionCallback(createAnglesRange(DIRECTIONS_TO_DEGREES_MAP.topLeft), normalizedConfig.onSwipeTopLeft),
    ])

    combinedCallback(event)
  }

  function onSwiping(event: SwipeEvent) {
    const combinedCallback = combineCallbacks([
      normalizedConfig.onSwiping,

      createSwipeDirectionCallback(createAnglesRange(DIRECTIONS_TO_DEGREES_MAP.top), normalizedConfig.onSwipingTop),
      createSwipeDirectionCallback(createAnglesRange(DIRECTIONS_TO_DEGREES_MAP.right), normalizedConfig.onSwipingRight),
      createSwipeDirectionCallback(createAnglesRange(DIRECTIONS_TO_DEGREES_MAP.bottom), normalizedConfig.onSwipingBottom),
      createSwipeDirectionCallback(createAnglesRange(DIRECTIONS_TO_DEGREES_MAP.left), normalizedConfig.onSwipingLeft),
    
      createSwipeDirectionCallback(createAnglesRange(DIRECTIONS_TO_DEGREES_MAP.topRight), normalizedConfig.onSwipingTopRight),
      createSwipeDirectionCallback(createAnglesRange(DIRECTIONS_TO_DEGREES_MAP.bottomRight), normalizedConfig.onSwipingBottomRight),
      createSwipeDirectionCallback(createAnglesRange(DIRECTIONS_TO_DEGREES_MAP.bottomLeft), normalizedConfig.onSwipingBottomLeft),
      createSwipeDirectionCallback(createAnglesRange(DIRECTIONS_TO_DEGREES_MAP.topLeft), normalizedConfig.onSwipingTopLeft),
    ])

    combinedCallback(event)
  }

  return ({
    ...normalizedConfig,
    onSwipe,
    onSwiping
  })
}
