import { SwipeHandlerCallback } from './swipe-handler-callback'

export interface SwipeHandlerConfig {
  onSwipe?: SwipeHandlerCallback
  onSwiping?: SwipeHandlerCallback
  minSwipeDistance?: number
  minSwipingDistance?: number
}
