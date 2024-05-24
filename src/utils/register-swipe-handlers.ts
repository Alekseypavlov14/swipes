import { SwipeHandlerConfig } from '../types/swipe-handler-config'
import { applySwipeHandlers } from './apply-swipe-handlers'
import { createSwipeHandler } from './create-swipe-handler'

export function registerSwipeHandlers(selector: string, config: SwipeHandlerConfig) {
  return applySwipeHandlers(selector, createSwipeHandler(config))
}
