import { SwipeHandlerConfigCreator } from './types/swipe-handler-config-creator'
import { SwipeEventDirection } from './types/swipe-event-direction'
import { SwipeHandlerConfig } from './types/swipe-handler-config'

export const PI_IN_DEGREES = 180

export const DIRECTIONS_TO_DEGREES_MAP: Record<SwipeEventDirection, number> = {
  [SwipeEventDirection.top]: 0,
  [SwipeEventDirection.topRight]: 45,
  [SwipeEventDirection.right]: 90,
  [SwipeEventDirection.bottomRight]: 135,
  [SwipeEventDirection.bottom]: 180,
  [SwipeEventDirection.bottomLeft]: 225,
  [SwipeEventDirection.left]: 270,
  [SwipeEventDirection.topLeft]: 315
}

export const emptyFunction = () => {}

export const defaultSwipeHandlerConfig: SwipeHandlerConfig = {
  onSwipe: emptyFunction,
  onSwiping: emptyFunction,
  minSwipeDistance: 50,
  minSwipingDistance: 30,
}

export const defaultSwipeHandlerConfigCreator: SwipeHandlerConfigCreator = {
  ...defaultSwipeHandlerConfig,

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