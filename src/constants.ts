import { SwipeEventDirection } from './types/swipe-event-direction'

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