# gatsby-plugin-heap

Gatsby plugin for Heap Analytics.

## Install

```sh
yarn add gatsby-plugin-heap
```

## Usage

```sh
// In your gatsby-config.js
plugins: [
  {
    resolve: 'gatsby-plugin-heap',
    options: {
      appId: 'YOUR-APP-ID',
      enableOnDevMode: true // if 'false', heap will be fired on NODE_ENV=production only
    },
  },
],
```
