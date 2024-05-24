import { SwipeHandlerCallback } from './swipe-handler-callback'

export interface SwipeHandlersConfig {
  onSwipe?: SwipeHandlerCallback
  onSwiping?: SwipeHandlerCallback
  minSwipeDistance?: number
  minSwipingDistance?: number
}
