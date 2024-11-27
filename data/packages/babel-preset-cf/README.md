# babel-preset-cf

> Babel preset for CloudFlare

## Install

```js
$ npm install --save-dev babel-preset-cf
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "presets": ["cf"]
}
```

### Via CLI

```sh
$ babel script.js --presets cf
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  presets: ["cf"]
});
```
