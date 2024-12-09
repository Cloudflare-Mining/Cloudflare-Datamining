# Appolo Event Dispatcher
Fast and simple event dispatcher for node.js written in typescript.

## Installation:

```javascript
npm install @appolo/events --save
```

## Usage:

```javascript
import {EventDispatcher} from "appolo-event-dispatcher";
 
class EventHandler extends EventDispatcher {
    constructor() {
        super();
        setTimeout(() => this.fireEvent("test", "some value"), 100)
    }
}

let eventHandler = new EventHandler();

eventHandler.on("test", (value)=>{
        //do something
});

eventHandler.once("test", (value)=>{
        //do something
});

//or with promise
let value  = await eventHandler.once("test");



```



## API
#### `on(event,callback,[scope])`
add an event listener
  - `event` - event name.
  - `callback` - callback function that will triggered on event name.
  - `scope` - optional, the scope of the `callback` function default: `this`.

#### `once(event,[callback],[scope])`
add an event listener will be called only once if no callback passed a promise will be returned
  - `event` - event name.
  - `callback` - callback function that will triggered on event name.
  - `scope` - optional, the scope of the `callback` function default: `this`.


#### `un(event,callback,[scope])`
remove an event listener. All the arguments must be `===` to the onces used in the `on` method, or else it won\`t be removed.
  - `event` - event name.
  - `callback` - callback function.
  - `scope` - optional, the scope of the callback function.

#### `fireEvent(event,[arguments])`
fireEvent - triggers the callback functions of a given event name
  - `eventName` - name of the event
  - `arguments` -  all other `arguments` will be passed to the `callback` function
#### `removeAllListeners()`
removes all event listeners
#### `removeListenersByScope(scope)`
removes all event listeners by given scope

#### `hasListener(event,callback,[scope]):boolean`
return true if listener exists


## License
MIT
