# eslint-plugin-ssr-friendly

ESLint plugin that detects incorrect use of DOM globals in order to properly do SSR and in general share code between client-side JS and Node.js modules.

[![npm version](https://badge.fury.io/js/eslint-plugin-ssr-friendly.svg)](https://badge.fury.io/js/eslint-plugin-ssr-friendly)

## Installation

```bash
npm i --save-dev eslint-plugin-ssr-friendly
```

Then add these to your eslintrc configuration:

```json
{
  "plugins": ["ssr-friendly"],
  "extends": ["plugin:ssr-friendly/recommended"]
}
```

## Rules

### `no-dom-globals-in-module-scope`

Disallow use of DOM globals in module and global scope,
as this will break any `import/require` in a NodeJS environment.

To fix it, wrap it in a function that will call when on client-side.

_Please note that we can't detect if you're still calling this function without
properly checking upfront if `typeof window !== "undefined"`._

### Not allowed

```js
const retina = devicePixelRatio > 2;
```

### Allowed

```js
const isRetina = () => devicePixelRatio >= 2;
```

### `no-dom-globals-in-constructor`

Disallow use of DOM globals in class constructors,
as this will break SSR if you're instantiating this class as singleton or you're rendering this component.

To fix it, move this statement in a `initOnBrowser()` like-method or `componentDidMount()` if you're using React.

_Please note that we can't detect if you're still calling this function in your constructor without
properly checking upfront if `typeof window !== "undefined"`._

### Not allowed

```js
class myClass {
  constructor() {
    document.title = "Otto";
  }
}
```

### Allowed

```js
class myClass {
  componentDidMount() {
    document.title = "Otto";
  }
}
```

### `no-dom-globals-in-react-cc-render`

Disallow use of DOM globals in render() method of a React class-component,
as this will break SSR if you're rendering this component.

To fix it, move this statement to `componentDidMount()`

_Please note that we can't detect if you're still calling this function in your constructor without
properly checking upfront if `typeof window !== "undefined"`._

### Not allowed

```js
class Header extends React.Component {
  render() {
    const width = window.innerWidth;
    return <div style={{ width }} />;
  }
}
```

### Allowed

```js
class Header extends React.Component {
  componentDidMount() {
    this.setState({ width: window.innerWidth });
  }
  render() {
    return <div style={{ width }} />;
  }
}
```

### `no-dom-globals-in-react-fc`

Disallow use of DOM globals in the render-cycle of a React FC,
as this will break SSR if you're rendering this component.

To fix it, move this statement into a `useEffect())`

### Not allowed

```js
const Header = () => {
  window.addEventListener("resize", () => {});
  return <div />;
};
```

### Allowed

```js
const Header = () => {
  useEffect(() => {
    window.addEventListener("resize", () => {});
  }, []);
  return <div />;
};
```
