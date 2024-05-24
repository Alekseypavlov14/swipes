import { createSwipeHandlers } from './create-swipe-handlers'
import { SwipeHandlersConfig } from '../types/swipe-handlers-config'
import { applySwipeHandlers } from './apply-swipe-handlers'

export function registerSwipeHandlers(selector: string, config: SwipeHandlersConfig) {
  return applySwipeHandlers(selector, createSwipeHandlers(config))
}
