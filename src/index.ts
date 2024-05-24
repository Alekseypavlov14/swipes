// main utils
export { createSwipeHandlers } from './utils/create-swipe-handlers'
export { createSwipeHandlersConfig } from './utils/create-swipe-handlers-config'

// helping utils (for vanilla js)
export { registerSwipeHandlers } from './utils/register-swipe-handlers'
export { applySwipeHandlers } from './utils/apply-swipe-handlers'

// technical utils
export { calculateAngle, calculateDistance, mapRadianToDegrees } from './utils/calculations'
export { createSwipeDirectionCallback, createAnglesRange } from './utils/create-swipe-direction-callback'
export { combineCallbacks } from './utils/combine-callbacks'
export { createSwipeEvent } from './utils/create-swipe-event'

// types
export { SwipeEventDirections } from './types/swipe-event-directions'
export { SwipeEventHandlers } from './types/swipe-event-handlers'
export { SwipeEventPosition } from './types/swipe-event-position'
export { SwipeEvent } from './types/swipe-event'
export { SwipeHandlersConfigCreator } from './types/swipe-handlers-config-creator'
export { SwipeHandlerCallback } from './types/swipe-handler-callback'
export { SwipeHandlersConfig } from './types/swipe-handlers-config'