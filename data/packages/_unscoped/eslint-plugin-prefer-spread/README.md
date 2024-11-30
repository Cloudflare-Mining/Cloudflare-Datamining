# eslint-plugin-prefer-spread [![Build Status](https://travis-ci.org/erikdesjardins/eslint-plugin-prefer-spread.svg?branch=master)](https://travis-ci.org/erikdesjardins/eslint-plugin-prefer-spread)

Suggest using the spread operator over Object.assign.

Warns for the following (when the first argument is any object literal):

```js
// copies own enumerable properties
Object.assign({}, foo /* ... */);
_.assign({}, foo /* ... */);
```

Also warns for the following (with the `"includeNearEquivalents"` option):

```js
// copies own and inherited enumerable properties
$.extend({}, foo /* ... */);
_.assignIn({}, foo /* ... */);
_.extend({}, foo /* ... */);
```

Does not warn:

```js
// deep copy
$.extend(true, {}, foo);
```

## Usage

`npm i --save-dev eslint-plugin-prefer-spread`

```json
{
  "plugins": [
    "prefer-spread"
  ],
  "rules": {
    "prefer-spread/prefer-object-spread": [2, "includeNearEquivalents"]
  }
}
```
