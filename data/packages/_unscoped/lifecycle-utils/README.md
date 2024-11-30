# `lifecycle-utils`
A set of general utilities for the lifecycle of a JS/TS project/library

[![Build](https://github.com/giladgd/lifecycle-utils/actions/workflows/test.yml/badge.svg)](https://github.com/giladgd/lifecycle-utils/actions/workflows/test.yml)
[![License](https://badgen.net/badge/color/MIT/green?label=license)](https://www.npmjs.com/package/lifecycle-utils)
[![Types](https://badgen.net/badge/color/TypeScript/blue?label=types)](https://www.npmjs.com/package/lifecycle-utils)
[![Version](https://badgen.net/npm/v/lifecycle-utils)](https://www.npmjs.com/package/lifecycle-utils)
[![codecov](https://codecov.io/gh/giladgd/lifecycle-utils/branch/master/graph/badge.svg)](https://codecov.io/gh/giladgd/lifecycle-utils)

* [Documentation](https://giladgd.github.io/lifecycle-utils/)
* [Changelog](https://github.com/giladgd/lifecycle-utils/releases)


## Installation
```bash
npm install --save lifecycle-utils
```

> This is an ESM package, so you can only use `import` to import it, and cannot use `require`

## Documentation
### `withLock`
Calling `withLock` with the same `scope` and `key` will ensure that the callback inside cannot run in parallel to other calls with the same `scope` and `key`.

```typescript
import {withLock} from "lifecycle-utils";

const scope = {}; // can be a reference to any object you like
const startTime = Date.now();

async function doSomething(index: number): number {
    return await withLock(scope, "myKey", async () => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log("index:", index, "time:", Date.now() - startTime);
        return 42;
    });
}

const res = await Promise.all([
    doSomething(1),
    doSomething(2),
    doSomething(3)
]);

// index: 1 time: 1000
// index: 2 time: 2000
// index: 3 time: 3000

console.log(res); // [42, 42, 42]
```


The given `scope` is used as the callback's `this`, so you can use its value in a `function`:

```typescript
import {withLock} from "lifecycle-utils";

const scope = {userName: "Joe"}; // can be a reference to any object you like

const res = await withLock(scope, "myKey", async function () {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return `Hello ${this.userName}`;
});

console.log(res); // Hello Joe
```

### `isLockActive`
Check whether a lock is currently active for the given `scope` and `key`.

```typescript
import {isLockActive} from "lifecycle-utils";

const scope = {}; // can be a reference to any object you like

const res = isLockActive(scope, "myKey");
console.log(res); // false
```

### `acquireLock`
Acquire a lock for the given `scope` and `key`.

```typescript
import {acquireLock} from "lifecycle-utils";

const scope = {}; // can be a reference to any object you like

const activeLock = await acquireLock(scope, "myKey");
console.log("lock acquired");

// ... do some work

activeLock.dispose();
```

### `waitForLockRelease`
Wait for a lock to be released for a given `scope` and `key`.

```typescript
import {waitForLockRelease} from "lifecycle-utils";

const scope = {}; // can be a reference to any object you like

await waitForLockRelease(scope, "myKey");
console.log("lock is released");
```

### `EventRelay`
A simple event relay.

Create a listener with `createListener` and dispatch events with `dispatchEvent`.

For each supported event type, create a new instance of `EventRelay` and expose it as a property.

For example, this code:
```ts
import {EventRelay} from "lifecycle-utils";

class MyClass {
    public readonly onSomethingHappened = new EventRelay<string>();

    public doSomething(whatToDo: string) {
        this.onSomethingHappened.dispatchEvent(whatToDo);
        console.log("Done notifying listeners");
    }
}

const myClass = new MyClass();
myClass.onSomethingHappened.createListener((whatHappened) => {
    console.log(`Something happened: ${whatHappened}`);
});
myClass.doSomething("eat a cookie");
```

Will print this:
```
Something happened: eat a cookie
Done notifying listeners
```

### `DisposeAggregator`
`DisposeAggregator` is a utility class that allows you to add multiple items and then dispose them all at once.

You can add a function to call, an object with a `dispose` method, or an object with a `Symbol.dispose` method.

To dispose all the items, call `dispose` or use the `Symbol.dispose` symbol.

```typescript
import {DisposeAggregator, EventRelay} from "lifecycle-utils";

const disposeAggregator = new DisposeAggregator();

const eventRelay = new EventRelay<string>();
disposeAggregator.add(eventRelay);

const eventRelay2 = disposeAggregator.add(new EventRelay<string>());

disposeAggregator.dispose();
console.log(eventRelay.disposed === true); // true
console.log(eventRelay2.disposed === true); // true
```

### `AsyncDisposeAggregator`
`AsyncDisposeAggregator` is a utility class that allows you to add multiple items and then dispose them all at once.
The items are disposed one by one in the order they were added.

You can add a function to call, an object with a `dispose` method, an object with a `Symbol.dispose` method,
an object with a `Symbol.asyncDispose` method, or a Promise that resolves to one of the previous types.

To dispose all the items, call `dispose` or use the `Symbol.asyncDispose` symbol.

The difference between `AsyncDisposeAggregator` and `DisposeAggregator` is that `AsyncDisposeAggregator` can dispose async targets.

```typescript
import {AsyncDisposeAggregator, EventRelay} from "lifecycle-utils";

const disposeAggregator = new AsyncDisposeAggregator();

const eventRelay = new EventRelay<string>();
disposeAggregator.add(eventRelay);

disposeAggregator.add(async () => {
    await new Promise(resolve => setTimeout(resolve, 0));
    // do some async work
});

disposeAggregator.dispose();
```

### `DisposableHandle`
An object that provides a `.dispose()` method that can called only once.

Calling `.dispose()` will call the provided `onDispose` function only once.
Any subsequent calls to `.dispose()` will do nothing.

```typescript
import {DisposableHandle} from "lifecycle-utils";

function createHandle() {
    console.log("allocating resources");
    
    return new DisposableHandle(() => {
        console.log("resources disposed");
    });
}

const handle = createHandle();
handle.dispose();
```

Using the `using` feature of TypeScript is also supported:
```typescript
import {DisposableHandle} from "lifecycle-utils";

function createHandle() {
    console.log("allocating resources");
    
    return new DisposableHandle(() => {
        console.log("resources disposed");
    });
}

function doWork() {
    using handle = createHandle();
}

doWork();
// resources disposed
// the dispose function was called since the scope of the `doWork` function ended
```

### `AsyncDisposableHandle`
An object that provides an async `.dispose()` method that can called only once.

Calling `.dispose()` will call the provided `onDispose` function only once.
Any subsequent calls to `.dispose()` will do nothing.

```typescript
import {AsyncDisposableHandle} from "lifecycle-utils";

function createHandle() {
    console.log("allocating resources");
    
    return new AsyncDisposableHandle(async () => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log("resources disposed");
    });
}

const handle = createHandle();
await handle.dispose();
```

Using the `await using` feature of TypeScript is also supported:
```typescript
import {AsyncDisposableHandle} from "lifecycle-utils";

function createHandle() {
    console.log("allocating resources");

    return new AsyncDisposableHandle(async () => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log("resources disposed");
    });
}

async function doWork() {
    await using handle = createHandle();
}

await doWork();
// resources disposed
// the dispose function was called since the scope of the `doWork` function ended
```

### `MultiKeyMap`
`MultiKeyMap` is a utility class that works like a `Map`, but accepts multiple values as the key for each value.

`.set(...)`, `.get(...)`, `.has(...)`, `.delete(...)` are in time complexity of O(1), given that the length of the keys is constant.

```typescript
import {MultiKeyMap} from "lifecycle-utils";

type Provider = {name: string};
const provider1: Provider = {name: "1"};
const provider2: Provider = {name: "2"};

const map = new MultiKeyMap<[provider: Provider, name: string], number>();

map.set([provider1, "key1"], 1);
map.set([provider2, "key1"], 2);
map.set([provider1, "key2"], 3);

console.log(map.get([provider1, "key1"])); // 1
console.log(map.get([provider2, "key1"])); // 2
console.log(map.get([provider1, "key2"])); // 3

console.log([...map.keys()]); // [[{name: "1"}, "key1"], [{name: "2"}, "key1"], [{name: "1"}, "key2"]])
```

### `LongTimeout`
A timeout that can be set to a delay longer than the maximum timeout delay supported by a regular `setTimeout`.

```typescript
import {LongTimeout} from "lifecycle-utils";

const month = 1000 * 60 * 60 * 24 * 7 * 30;

const timeout = new LongTimeout(() => {
    console.log("timeout");
}, month);

// to clear the timeout, call dispose
// timeout.dispose();
```

### `setLongTimeout`
Sets a timeout that can also be set to a delay longer than the maximum timeout delay supported by a regular `setTimeout`.

You can use `clearLongTimeout` to clear the timeout.

```typescript
import {setLongTimeout, clearLongTimeout} from "lifecycle-utils";

const month = 1000 * 60 * 60 * 24 * 7 * 30;

const timeout = setLongTimeout(() => {
    console.log("timeout");
}, month);

// to clear the timeout, call clearLongTimeout
// clearLongTimeout(timeout);
```

### `clearLongTimeout`
Clears a timeout that was set with `setLongTimeout`.

You can also clear a regular timeout with this function.

```typescript
import {setLongTimeout, clearLongTimeout} from "lifecycle-utils";

const month = 1000 * 60 * 60 * 24 * 7 * 30;

const timeout = setLongTimeout(() => {
    console.log("timeout");
}, month);
const timeout2 = setTimeout(() => {
    console.log("timeout2");
}, 1000 * 60);

clearLongTimeout(timeout);
clearLongTimeout(timeout2);
```

### `State`
`State` is a utility class that allows you to hold a value and notify listeners when the value changes.

```typescript
import {State} from "lifecycle-utils";

const valueState = new State<number>(6);

const eventHandle = valueState.createChangeListener((newValue, previousValue) => {
    console.log("new value:", newValue);
    console.log("previous value:", previousValue);
});

valueState.state = 7;

// after a microtask, the listener will be called
// to make event fire immediately upon change, disable the `queueEvents` option on the constructor
await new Promise(resolve => setTimeout(resolve, 0));
// will print:
// new value: 7
// previous value: 6

eventHandle.dispose();
```

### `State.createCombinedChangeListener`
Create a listener that listens to multiple states and calls the callback when any of the states change.

```typescript
import {State} from "lifecycle-utils";

const valueState1 = new State<number>(6);
const valueState2 = new State<string>("hello");
const valueState3 = new State<boolean>(true);

const eventHandle = State.createCombinedChangeListener([valueState1, valueState2, valueState3], (newValues, previousValues) => {
    console.log("new values:", newValues);
    console.log("previous values:", previousValues);
});

valueState1.state = 7;
valueState2.state = "world";
valueState3.state = false;

// after a microtask, the listener will be called
// to make event fire immediately upon change, disable the `queueEvents` option on the constructor
await new Promise(resolve => setTimeout(resolve, 0));
// will print:
// new values: [7, "world", false]
// previous values: [6, "hello", true]

eventHandle.dispose();
```

### `splitText`
Split a text by multiple separators, and return a result of the text and separators.

```typescript
const parts = splitText("Hello <and> world [then] !", ["<and>", "[then]"]);
console.log(parts); // ["Hello ", new Separator("<and>"), " world ", new Separator("[then]"), " !"]
```

## Contributing
To contribute to `lifecycle-utils` see [CONTRIBUTING.md](https://github.com/giladgd/lifecycle-utils/blob/master/CONTRIBUTING.md).


<br />

<div align="center" width="360">
    <img alt="Star please" src="https://raw.githubusercontent.com/giladgd/lifecycle-utils/master/assets/star.please.roundEdges.png" width="360" margin="auto" />
    <br/>
    <p align="right">
        <i>If you like this repo, star it ✨</i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </p>
</div>
