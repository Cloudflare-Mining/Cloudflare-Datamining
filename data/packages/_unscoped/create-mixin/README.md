[![view on npm](https://img.shields.io/npm/v/create-mixin.svg)](https://www.npmjs.org/package/create-mixin)
[![npm module downloads](https://img.shields.io/npm/dt/create-mixin.svg)](https://www.npmjs.org/package/create-mixin)
[![Build Status](https://travis-ci.org/75lb/create-mixin.svg?branch=master)](https://travis-ci.org/75lb/create-mixin)
[![Dependency Status](https://badgen.net/david/dep/75lb/create-mixin)](https://david-dm.org/75lb/create-mixin)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

# create-mixin

Useful for achieving something resembling multiple-inheritence in Javascript.

```js
const mixInto = require('create-mixin')
const EventEmitter = require('events')

class EmittingArray extends mixInto(EventEmitter)(Array) {}
```

## Example

Given these two classes.


```js
class Base {
  constructor () {
    this.ranBaseConstructor = true
  }
  baseMethod () {
    return 1
  }
}

class Mixin {
  constructor () {
    this.ranMixinConstructor = true
  }
  someMethod () {
    return 2
  }
}
```

Create a new class mixing one class into another.

```js
> const mixInto = require('create-mixin')

> class Something extends mixInto(Mixin)(Base) {}
```

Behaviour of new class.

```js
> const something = new Something()

> /* new class has methods of both source classes */
> something.baseMethod()
1

> something.someMethod()
2

> /* Only the base constructor is run */
> something.ranBaseConstructor
true

> something.ranMixinConstructor
undefined

> something instanceof Base
true

> something instanceof Mixin
false
```

* * *

&copy; 2018-19 Lloyd Brookes \<75pound@gmail.com\>.
