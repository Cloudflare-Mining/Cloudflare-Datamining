Example
-------

```javascript
import {
    createPointCB,
    getClientRect,
    pointInside
} from 'dom-plane';

const point = {};
const pointCB = createPointCB(point);

window.addEventListener('mousemove', pointCB);
window.addEventListener('mousedown', (e)=>{
    console.log('point is inside '+e.target, '=', pointInside(point, e.target))
    console.log('current rect ', getClientRect(e.target))
})
```

Exported functions.

-	createPointCB(point)
-	getClientRect(element)
-	pointInside(point, element)

### createPointCB(point) -> pointCB

`point` should be an object. Preferably an empty object.

`createPointCB` returns a function that should be set as a listener on mouse, or touch events.

Each time the event fires it on `pointCB` it will update `point`.

#### point

`point` will gain these properties:

-	target
-	element
-	type
-	pageX
-	pageY
-	x
-	y

### getClientRect(element|window) -> clientRect

Get the boundingClientRect of the element, or window.

### pointInside(point, element) -> Boolean

Check to see if the point is inside the element.
