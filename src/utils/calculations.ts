import { DIRECTIONS_TO_DEGREES_MAP, PI_IN_DEGREES } from '../constants'
import { SwipeEvent } from '../types/swipe-event'

export function calculateAngle(swipeEvent: SwipeEvent): number {
  const absDX = Math.abs(swipeEvent.dx)
  const absDY = Math.abs(swipeEvent.dy)

  // basic cases
  if (absDX === 0) {
    if (absDY === 0) return DIRECTIONS_TO_DEGREES_MAP.top
    if (absDY < 0) return DIRECTIONS_TO_DEGREES_MAP.top
    if (absDY > 0) return DIRECTIONS_TO_DEGREES_MAP.bottom
  }
  if (absDY === 0) {
    if (absDX === 0) return DIRECTIONS_TO_DEGREES_MAP.top
    if (absDX < 0) return DIRECTIONS_TO_DEGREES_MAP.left
    if (absDX > 0) return DIRECTIONS_TO_DEGREES_MAP.right
  }

  const basicAngle = mapRadianToDegrees(Math.atan(absDY / absDX))
  let resultAngle = 0

  // get real angle
  if (swipeEvent.dx > 0) {
    if (swipeEvent.dy < 0) resultAngle = 90 - basicAngle
    if (swipeEvent.dy > 0) resultAngle = 90 + basicAngle
  }
  if (swipeEvent.dx < 0) {
    if (swipeEvent.dy > 0) resultAngle = 270 - basicAngle
    if (swipeEvent.dy < 0) resultAngle = 270 + basicAngle
  }

  return resultAngle
}

export function mapRadianToDegrees(radianAngle: number) {
  return radianAngle / Math.PI * PI_IN_DEGREES
}

export function calculateDistance(swipeEvent: SwipeEvent): number {
  return Math.sqrt(swipeEvent.dx ** 2 + swipeEvent.dy ** 2)
}
