# bcrypt-edge

[![npm](https://img.shields.io/npm/dw/bcrypt-edge?label=bcrypt-edge)
](https://www.npmjs.com/package/bcrypt-edge)

ESM Edge/worker conversion for [bcrypt.js](https://github.com/dcodeIO/bcrypt.js).

## Description

This is a re-implementation of Bcrypt specifically for web workers, **in particular Cloudflare**. The following differences can be observed from the source library:

- The package is now an ESM, so it can easily be bundled
- All `async` methods have been removed. These don't work in a Web Worker environment, so they were removed.
  - Perhaps there is some method of re-introducing them, but the originals relied upon `process.nextTick`
  - Additionally in a worker scenario, each request is theoretically isolated anyway so `async` isn't as impactful
- Unit tests were preserved/translated as best as they could be
  - Tests are run against the Cloudflare `crypto` compatibility layer via [Miniflare](https://github.com/cloudflare/miniflare)
  - No discrepencies between the original implementation and this one have been observed

Care was taken to disturb as little as possible with the initial implementation.

## Usage

Usage is similar to the original library, except it's an ESM worker module now and has no `async` methods.

```ts
import {
  genSaltSync,
  hashSync,
  compareSync,
  getRounds,
  getSaltSync,
} from 'bcrypt-edge';

// Hashing
const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync('B4c0//', salt);

// Create Salt+Hash in one line
const hash = bcrypt.hashSync('bacon', 8);

// Comparing
bcrypt.compareSync('B4c0//', hash); // true
bcrypt.compareSync('not_bacon', hash); // false
```

## Benchmarks

Running bcrypt-edge in Miniflare against the original bcrypt package, the benchmarks are as follows. It is very likely that platform specific inhancements could be made to improve performace of `bcrypt-edge`.

| Library     | Rounds | Hash Time |
| ----------- | ------ | --------- |
| bcryptjs    | 8      | 20ms      |
| bcrypt-edge | 8      | 35ms      |
| bcryptjs    | 9      | 40ms      |
| bcrypt-edge | 9      | 72ms      |
| bcryptjs    | 10     | 81ms      |
| bcrypt-edge | 10     | 143ms     |
| bcryptjs    | 11     | 161ms     |
| bcrypt-edge | 11     | 278ms     |
| bcryptjs    | 12     | 326ms     |
| bcrypt-edge | 12     | 564ms     |
| bcryptjs    | 13     | 653ms     |
| bcrypt-edge | 13     | 1138ms    |
| bcryptjs    | 14     | 1316ms    |
| bcrypt-edge | 14     | 2266ms    |
| bcryptjs    | 15     | 2646ms    |
| bcrypt-edge | 15     | 4498ms    |
