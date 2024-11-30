# Element QSA Scope [<img src="https://resources.whatwg.org/logo-dom.svg" alt="" width="90" height="90" align="right">][Element QSA Scope]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Licensing][lic-img]][lic-url]
[![Changelog][log-img]][log-url]
[![Gitter Chat][git-img]][git-url]

[Element QSA Scope] lets you select elements relative to the current node. It
is a polyfill for `:scope` support within the selector methods
[`Element#querySelector`], [`Element#querySelectorAll`], [`Element#matches`],
and [`Element#closest`].

```bash
npm install element-qsa-scope
```

The entire script is 341 bytes when minified and gzipped.

### How it works

By default, selector methods return elements matching CSS selectors absolutely
from the document, similar to an element being matched with [`Element#matches`].
Imagine the following document:

```html
<ul>
  <li><a>Link</a>
    <ul>
      <li><a>Sublink</a></li>
    </ul>
  </li>
</ul>
<script>li = document.querySelector('li')</script>
```

Without `:scope`, the following selector will return the first link.

```js
li.querySelector('li a'); // returns <a>Link</a>
```

This is an example of how scoping is useful when traversing the DOM.

```js
li.querySelector(':scope li a'); // returns <a>Sublink</a>
```

## Browser compatibility

| Browser           | Native Support | Polyfill Support |
| ----------------- | -------------- | ---------------- |
| Android           | 4.4+           | 2.2 - 4.2        |
| Blackberry        | ✘              | 7+               |
| Chrome            | 27+            | 4 - 26           |
| Edge              | ✘              | 12+              |
| Firefox           | 32+            | 3.5 - 31         |
| Internet Explorer | ✘              | 8 - 11           |
| Opera             | 15+            | 10 - 14          |
| Opera Mini        | ✘              | 5+               |
| Safari (iOS)      | 7+             | 3.2 - 6          |
| Safari (MacOS)    | 6.2+           | 4 - 6            |

### Test Results

Additional
[tests](http://codepen.io/jonneal/details/e20f8ddced5f5ed111a1e1f3044d4d47)
were run against the latest 3 versions of browsers, including common outliers
such as Internet Explorer 8+ and Safari 6+.

[Native Support](https://app.crossbrowsertesting.com/public/i76b092cd2b52b86/screenshots/zfe6755a18f932b6386b?size=small&type=chromeless) · [Polyfilled Support](https://app.crossbrowsertesting.com/public/i76b092cd2b52b86/screenshots/z60b7c71da7f3f060ff6?size=small&type=chromeless)

[npm-url]: https://www.npmjs.com/package/element-qsa-scope
[npm-img]: https://img.shields.io/npm/v/element-qsa-scope.svg
[cli-url]: https://travis-ci.org/jonathantneal/element-qsa-scope
[cli-img]: https://img.shields.io/travis/jonathantneal/element-qsa-scope.svg
[lic-url]: LICENSE.md
[lic-img]: https://img.shields.io/npm/l/element-qsa-scope.svg
[log-url]: CHANGELOG.md
[log-img]: https://img.shields.io/badge/changelog-md-blue.svg
[git-url]: https://gitter.im/jonathantneal/element-qsa-scope
[git-img]: https://img.shields.io/badge/chat-gitter-blue.svg

[Element QSA Scope]: http://github.com/jonathantneal/element-qsa-scope

[`Element#closest`]: https://dom.spec.whatwg.org/#dom-element-closest
[`Element#matches`]: https://dom.spec.whatwg.org/#dom-element-matches
[`Element#querySelector`]: https://dom.spec.whatwg.org/#dom-parentnode-queryselector
[`Element#querySelectorAll`]: https://dom.spec.whatwg.org/#dom-parentnode-queryselectorall
