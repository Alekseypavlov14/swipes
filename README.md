# Swipes - library that helps to handle swipes on mobile devices

This library helps to handle **swipe** events on mobile devices with Vanilla JS or any JS/TS framework. It has a lightweight API with **config**.

## Example

Basic example:

```ts
import { registerSwipeHandlers } from '@oleksii-pavlov/swipes'

registerSwipeHandlers('#element', {
  onSwipe: (event) => console.log(event.distance)
})
```

Here we added event listener for the **swipe** event on the **#element**. [Read more about registerSwipeHandlers](#registerswipehandlersselector-string-config-swipehandlersconfig).

We can specify the swipe **direction** that we want to listen to. For this, we need to add a new callback to config:

```ts
import { registerSwipeHandlers } from '@oleksii-pavlov/swipes'

registerSwipeHandlers('#element', {
  onSwipe: (event) => console.log(event.distance),
  onSwipeRight: () => console.log('Swiped right!')
})
```

See [SwipeEvent](#swipe-event) docs in API Reference.

Also, we can add a listener on **swiping** event - it fires during the swipe and works like **"touchmove"** event:

```ts
import { registerSwipeHandlers } from '@oleksii-pavlov/swipes'

registerSwipeHandlers('#element', {
  onSwipe: (event) => console.log(event.distance),
  onSwipeRight: () => console.log('Swiped right!'),
  onSwipingRight: () => console.log('Swiping...')
})
```

About other utilities, read in [API Reference](#api-reference) 

## API Reference

### **Functions:**
#### registerSwipeHandlers(selector: string, config: [SwipeHandlersConfig](#swipehandlersconfig))
Creates event listeners to the elements queried by **selector** and starts **swipes** handling.

#### applySwipeHandlers(selector: string, handlers: [SwipeEventHandlers](#swipeeventhandlers))
Adds given event listeners **handlers** and applies it to the elements queried by **selector**. In most cases, you need to use [registerSwipeHandlers](#registerswipehandlersselector-string-config-swipehandlersconfig).

#### createSwipeHandlers(config, [SwipeHandlersConfig](#swipehandlersconfig))
Creates [SwipeEventHandlers](#swipeeventhandlers) that can be applied later. 
**Use this function in non-vanilla js projects.** Add created event listeners to the target element and swipes will be handled. These event listeners use standard Browser API so they can be used with frameworks.

#### addSwipeHandlers(element: HTMLElement, config: [SwipeHandlersConfig](#swipehandlersconfig))
Adds swipe event handlers to the HTML element. Works very similar to [registerSwipeHandlers](#registerswipehandlersselector-string-config-swipehandlersconfig) but takes an element as argument instead of selector.

### **Types:**
#### SwipeHandlersConfig:
```ts
interface SwipeHandlersConfig {
  minSwipeDistance?: number // minimal distance needed to trigger swipe event
  minSwipingDistance?: number // minimal distance needed to trigger swiping event

  onSwipe?: SwipeHandlerCallback // will be called on each swipe event (any direction)
  onSwiping?: SwipeHandlerCallback // will be called on each swiping event (any direction)

  // swipe callbacks by directions 
  onSwipeTop?: SwipeHandlerCallback
  onSwipeRight?: SwipeHandlerCallback
  onSwipeBottom?: SwipeHandlerCallback
  onSwipeLeft?: SwipeHandlerCallback
  
  onSwipeTopRight?: SwipeHandlerCallback
  onSwipeBottomRight?: SwipeHandlerCallback
  onSwipeBottomLeft?: SwipeHandlerCallback
  onSwipeTopLeft?: SwipeHandlerCallback

  // swiping callbacks by directions
  onSwipingTop?: SwipeHandlerCallback
  onSwipingRight?: SwipeHandlerCallback
  onSwipingBottom?: SwipeHandlerCallback
  onSwipingLeft?: SwipeHandlerCallback
  
  onSwipingTopRight?: SwipeHandlerCallback
  onSwipingBottomRight?: SwipeHandlerCallback
  onSwipingBottomLeft?: SwipeHandlerCallback
  onSwipingTopLeft?: SwipeHandlerCallback
}
```

#### SwipeHandlerCallback
```ts
type SwipeHandlerCallback = (event: SwipeEvent) => void
```

#### SwipeEventHandlers
```ts
interface SwipeEventHandlers {
  touchStartHandler: (e: TouchEvent) => void // event listener for touchstart event
  touchMoveHandler: (e: TouchEvent) => void // event listener for touchmove event
  touchEndHandler: (e: TouchEvent) => void // event listener for touchend event
}
```
These handlers are applied by [registerSwipeHandlers](#registerswipehandlersselector-string-config-swipehandlersconfig) and [applySwipeHandlers](#applyswipehandlersselector-string-handlers-swipeeventhandlers) functions. If you use [createSwipeHandlers](#createswipehandlersconfig-swipehandlersconfig), you need to add these listeners by yourself!

#### Swipe Event
```ts
interface SwipeEvent {
  // angle of the swipe in degrees:
  // top - 0 degrees
  // right - 90 degrees
  // bottom - 180 degrees
  // left - 270 degrees
  angle: number

  // event target
  target: Nullable<EventTarget>
  
  // swiped distance (between swipe start and swipe end positions)
  distance: number

  // swipe move
  dx: number
  dy: number
}
```