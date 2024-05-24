import { SwipeHandlerCallback } from './swipe-handler-callback'

export interface SwipeHandlersConfig {
  minSwipeDistance?: number
  minSwipingDistance?: number

  onSwipe?: SwipeHandlerCallback,
  onSwiping?: SwipeHandlerCallback,

  onSwipeTop?: SwipeHandlerCallback
  onSwipeRight?: SwipeHandlerCallback
  onSwipeBottom?: SwipeHandlerCallback
  onSwipeLeft?: SwipeHandlerCallback
  
  onSwipeTopRight?: SwipeHandlerCallback
  onSwipeBottomRight?: SwipeHandlerCallback
  onSwipeBottomLeft?: SwipeHandlerCallback
  onSwipeTopLeft?: SwipeHandlerCallback

  onSwipingTop?: SwipeHandlerCallback
  onSwipingRight?: SwipeHandlerCallback
  onSwipingBottom?: SwipeHandlerCallback
  onSwipingLeft?: SwipeHandlerCallback
  
  onSwipingTopRight?: SwipeHandlerCallback
  onSwipingBottomRight?: SwipeHandlerCallback
  onSwipingBottomLeft?: SwipeHandlerCallback
  onSwipingTopLeft?: SwipeHandlerCallback
}