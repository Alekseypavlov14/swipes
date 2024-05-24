import { directionAnglesDifference } from '../constants'
import { SwipeHandlerCallback } from '../types/swipe-handler-callback'
import { Range, RangeValues } from '@oleksii-pavlov/ranges'
import { SwipeEvent } from '../types/swipe-event'

export function createSwipeDirectionCallback(anglesRange: RangeValues, callback: SwipeHandlerCallback): SwipeHandlerCallback {
  return (event: SwipeEvent) => {
    if (!new Range(anglesRange).isGreaterThanMinOrEqualAndLessThanMaxOrEqual(event.angle)) return
    callback(event)
  }
}

export function createAnglesRange(baseAngle: number): RangeValues {
  return ({ 
    min: baseAngle - directionAnglesDifference,
    max: baseAngle + directionAnglesDifference 
  })
}