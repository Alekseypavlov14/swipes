import { SwipeHandlerCallback } from './swipe-handler-callback'
import { SwipeHandlersConfig } from './swipe-handlers-config'

export interface SwipeHandlersConfigCreator extends SwipeHandlersConfig {
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