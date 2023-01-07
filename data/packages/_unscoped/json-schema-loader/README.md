# Json Schema Loader

This package is part of the [doca](https://github.com/cloudflare/doca) suite.  Please file any issues at the [doca repository](https://github.com/cloudflare/doca/issues)

## Installation

```
npm install json-schema-loader --save
```

## Description

Webpack loader that resolves both internal and external [json schema](json-schema.org) references (`$ref` properties). The loader uses [json-schema-ref-parser](https://github.com/BigstickCarpet/json-schema-ref-parser) to resolve references. It supports both JSON and YAML. Based on [@pr0da/json-schema-loader](https://github.com/pr0da/json-schema-loader).

## Usage

```js
var resolvedSchema = require('json-schema-loader!./schema.json');
```

Or define it in your `webpack.config.js`

```js
module: {
  loaders: [{
    test: /\.json$/,
    exclude: /node_modules/,
    loader: 'json-schema-loader'
  }]
}
```
```js
var resolvedSchema = require('./schema.json');
```

### Options

#### `useSource: boolean`

This loader normally passes the RefParser the `resourcePath`, not the source.  If you want to chain loaders, make sure to set `useSource=true`.
