import { SwipeEventDirections } from './types/swipe-event-directions'
import { SwipeHandlersConfig } from './types/swipe-handlers-config'

export const PI_IN_DEGREES = 180

export const DIRECTIONS_TO_DEGREES_MAP: Record<SwipeEventDirections, number> = {
  [SwipeEventDirections.top]: 0,
  [SwipeEventDirections.topRight]: 45,
  [SwipeEventDirections.right]: 90,
  [SwipeEventDirections.bottomRight]: 135,
  [SwipeEventDirections.bottom]: 180,
  [SwipeEventDirections.bottomLeft]: 225,
  [SwipeEventDirections.left]: 270,
  [SwipeEventDirections.topLeft]: 315
}

export const emptyFunction = () => {}

export const defaultSwipeHandlerConfig: Required<SwipeHandlersConfig> = {
  minSwipeDistance: 10,
  minSwipingDistance: 10,

  onSwipe: emptyFunction,
  onSwiping: emptyFunction,

  onSwipeTop: emptyFunction,
  onSwipeRight: emptyFunction,
  onSwipeBottom: emptyFunction,
  onSwipeLeft: emptyFunction,

  onSwipeTopRight: emptyFunction,
  onSwipeBottomRight: emptyFunction,
  onSwipeBottomLeft: emptyFunction,
  onSwipeTopLeft: emptyFunction,

  onSwipingTop: emptyFunction,
  onSwipingRight: emptyFunction,
  onSwipingBottom: emptyFunction,
  onSwipingLeft: emptyFunction,
  
  onSwipingTopRight: emptyFunction,
  onSwipingBottomRight: emptyFunction,
  onSwipingBottomLeft: emptyFunction,
  onSwipingTopLeft: emptyFunction,
}

export const directionAnglesDifference = 30