import { SwipeEvent } from '../types/swipe-event'

export function createSwipeEvent(): SwipeEvent {
  return ({
    angle: 0,
    target: null,
    distance: 0,
    dx: 0,
    dy: 0
  })
}