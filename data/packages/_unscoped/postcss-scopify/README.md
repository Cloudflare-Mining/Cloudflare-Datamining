# PostCSS Scopify

[![Node.js CI](https://github.com/pazams/postcss-scopify/actions/workflows/node.js.yml/badge.svg)](https://github.com/pazams/postcss-scopify/actions/workflows/node.js.yml)
[![Test coverage][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]

[PostCSS] plugin that adds a user input scope to each selector.
for a command line interface, see [scopify-cli]. 

[`poststylus`]: https://github.com/seaneking/poststylus
[PostCSS API]:  https://github.com/postcss/postcss/blob/master/docs/api.md
[Broccoli]:     https://github.com/jeffjewiss/broccoli-postcss
[CLI tool]:     https://github.com/code42day/postcss-cli
[webpack]:      https://github.com/postcss/postcss-loader
[Brunch]:       https://github.com/iamvdo/postcss-brunch
[Grunt]:        https://github.com/nDmitry/grunt-postcss
[Gulp]:         https://github.com/postcss/gulp-postcss
[ENB]:          https://github.com/theprotein/enb-postcss

[travis-image]: https://img.shields.io/travis/pazams/postcss-scopify.svg?style=flat-square
[travis-url]: https://travis-ci.org/pazams/postcss-scopify
[coveralls-image]: https://img.shields.io/coveralls/pazams/postcss-scopify.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/pazams/postcss-scopify
[downloads-image]: https://img.shields.io/npm/dm/postcss-scopify.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/postcss-scopify

[scopify-cli]: https://github.com/pazams/scopify-cli
[PostCSS]: https://github.com/postcss/postcss

__Example input__

```css
.foo, .boo h1 {
    /* declarations */
}

& {
    /* declarations */
}
```
__Example output__
`scopify('#scope')` or `scopify({scope: '#scope'})`
```css
#scope .foo, #scope .boo h1 {
    /* declarations */
}

#scope {
    /* declarations */
}
```

## Installation

```
npm install postcss-scopify
```

## Usage

```javascript
var fs        = require('fs');
var postcss   = require('postcss');
var scopify   = require('postcss-scopify');

var css = fs.readFileSync('css/my-file.css', 'utf8').toString();
var out = postcss()
          .use(scopify('#scope'))
          .process(css)
          .css;
```

You can use PostCSS with your build tool.
Note there are plugins for [Grunt], [Gulp], [webpack], [Broccoli],
[Brunch] and [ENB]. 
See [PostCSS] docs for examples for your environment.

## Change Log
### v1.0.0
- update all deps to latest versions
- update plugin syntax for postCss v8+
- allow pass scope as object (because postcss+webpack)

### v0.1.8
closes [#10](https://github.com/pazams/postcss-scopify/issues/10)

### v0.1.7
fixes [#7](https://github.com/pazams/postcss-scopify/issues/7)

### v0.1.5
closes [#3](https://github.com/pazams/postcss-scopify/issues/3)

### v0.1.4
fixes [#4](https://github.com/pazams/postcss-scopify/issues/4)
