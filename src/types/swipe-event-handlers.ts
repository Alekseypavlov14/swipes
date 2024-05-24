export interface SwipeEventHandlers {
  touchStartHandler: (e: TouchEvent) => void
  touchMoveHandler: (e: TouchEvent) => void
  touchEndHandler: (e: TouchEvent) => void
}