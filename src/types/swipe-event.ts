import { Nullable } from './nullable'

export interface SwipeEvent {
  angle: number
  target: Nullable<EventTarget>
  distance: number
  dx: number
  dy: number
}