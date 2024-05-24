// main utils
export { createSwipeHandler } from './utils/create-swipe-handler'
export { createSwipeHandlerConfig } from './utils/create-swipe-handler-config'

// helping utils (for vanilla js)
export { registerSwipeHandlers } from './utils/register-swipe-handlers'
export { applySwipeHandlers } from './utils/apply-swipe-handlers'

// technical utils
export { calculateAngle, calculateDistance, mapRadianToDegrees } from './utils/calculations'
export { createSwipeDirectionCallback, createAnglesRange } from './utils/create-swipe-direction-callback'
export { combineCallbacks } from './utils/combine-callbacks'
export { createSwipeEvent } from './utils/create-swipe-event'

// types
export { SwipeEventDirection } from './types/swipe-event-direction'
export { SwipeEventHandlers } from './types/swipe-event-handlers'
export { SwipeEventPosition } from './types/swipe-event-position'
export { SwipeEvent } from './types/swipe-event'
export { SwipeHandlerConfigCreator } from './types/swipe-handler-config-creator'
export { SwipeHandlerCallback } from './types/swipe-handler-callback'
export { SwipeHandlerConfig } from './types/swipe-handler-config'