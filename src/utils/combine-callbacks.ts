import { SwipeHandlerCallback } from '../types/swipe-handler-callback'
import { SwipeEvent } from '../types/swipe-event'

export function combineCallbacks(callbacks: SwipeHandlerCallback[]): SwipeHandlerCallback {
  return (event: SwipeEvent) => callbacks.forEach(callback => callback(event))
}