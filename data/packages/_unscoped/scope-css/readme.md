# scope-css [![unstable](https://img.shields.io/badge/stability-unstable-green.svg)](http://github.com/badges/stability-badges) [![Build Status](https://img.shields.io/travis/dy/scope-css.svg)](https://travis-ci.org/dy/scope-css)

Prefix or nest each style selector in a css string. Useful to create namespaced css for components, themes, applications, modular css etc. Also it is tiny.

## Usage

[![npm install scope-css](https://nodei.co/npm/scope-css.png?mini=true)](https://npmjs.org/package/scope-css/)

```js
const scope = require('scope-css');

scope(`
.my-component {}
.my-component-element {}
`, '.parent');

/*
`
.parent .my-component {}
.parent .my-component-element {}
`
*/
```

## API

## css = scope(css, parent, options?)

Return css string with each rule prefixed with the parent selector. Note that `parent` selector itself will be ignored. Also each `:host` keyword will be replaced with `parent` value. Example:

```js
scope(`
	.panel {}
	:host {}
	:host .my-element {}
	.panel .my-element {}
	.my-element {}
`, '.panel');

/*
`
	.panel {}
	.panel {}
	.panel .my-element {}
	.panel .my-element {}
	.panel .my-element {}
`
*/
```

Options can scope keyframes via `{ keyframes: bool|prefixStr }` option, eg.

```js
scope(`
	.panel {
		animation: infinite loading 4s;
	}
	@keyframes loading {
		from { top: 0; }
		to { top: 100px; }
	}
`, '.panel', { keyframes: true })

/*
`
.panel {
	animation: infinite panel-loading 4s;
}
@keyframes panel-loading {
	from { top: 0; }
	to { top: 100px; }
`)
*/
```

## css = scope.replace(css, 'replacement $1$2')

Apply replace to css, where `$1` is matched selectors and `$2` is rules for the selectors. It does not do any self/host detection, so use it for more flexible replacements.

```js
scope.replace(`
	.my-component, .my-other-component {
		padding: 0;
	}
`, '$1');

// `.my-component, my-other-component`
```

## Credits

Based on [this question](http://stackoverflow.com/questions/12575845/what-is-the-regex-of-a-css-selector).
