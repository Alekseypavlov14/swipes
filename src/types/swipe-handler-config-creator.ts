import { SwipeHandlerCallback } from './swipe-handler-callback'
import { SwipeHandlerConfig } from './swipe-handler-config'

export interface SwipeHandlerConfigCreator extends SwipeHandlerConfig {
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