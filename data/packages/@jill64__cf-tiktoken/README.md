<!----- BEGIN GHOST DOCS HEADER ----->

# @jill64/cf-tiktoken

<!----- BEGIN GHOST DOCS BADGES ----->

<a href="https://npmjs.com/package/@jill64/cf-tiktoken"><img src="https://img.shields.io/npm/v/@jill64/cf-tiktoken" alt="npm-version" /></a> <a href="https://npmjs.com/package/@jill64/cf-tiktoken"><img src="https://img.shields.io/npm/l/@jill64/cf-tiktoken" alt="npm-license" /></a> <a href="https://npmjs.com/package/@jill64/cf-tiktoken"><img src="https://img.shields.io/npm/dm/@jill64/cf-tiktoken" alt="npm-download-month" /></a> <a href="https://npmjs.com/package/@jill64/cf-tiktoken"><img src="https://img.shields.io/bundlephobia/min/@jill64/cf-tiktoken" alt="npm-min-size" /></a>

<!----- END GHOST DOCS BADGES ----->

⏳ js-tiktoken on Cloudflare Pages

<!----- END GHOST DOCS HEADER ----->

Currently [`js-tiktoken`](https://github.com/dqbd/tiktoken/tree/main/js) does not work with Cloudflare Pages due to worker size limitations.  
This library uses conditional export to **exclude** `js-tiktoken` implementations from Cloudflare worker bundles.

> [!IMPORTANT]
> This is **not** the library that makes `js-tiktoken` work on Cloudflare Workers.

## Installation

```sh
npm i @jill64/cf-tiktoken
```

```js
// This function can be imported by both edge and browser.
// however, on edge it returns invalid output regardless of the input value.
import { encodingForModel } from '@jill64/cf-tiktoken'

export const fn = () => {
  const enc = encodingForModel('gpt-4')
  // ...
}
```

<!----- BEGIN GHOST DOCS FOOTER ----->

## License

[MIT](LICENSE)

<!----- END GHOST DOCS FOOTER ----->
