# fast-crc32c [![NPM version](https://badge.fury.io/js/fast-crc32c.svg)](http://badge.fury.io/js/fast-crc32c) [![Build Status](https://travis-ci.org/ashi009/node-fast-crc32c.svg?branch=master)](https://travis-ci.org/ashi009/node-fast-crc32c) [![Dependency Status](https://david-dm.org/ashi009/node-fast-crc32c.svg)](https://david-dm.org/ashi009/node-fast-crc32c) [![Coverage Status](https://coveralls.io/repos/github/ashi009/node-fast-crc32c/badge.svg?branch=master)](https://coveralls.io/github/ashi009/node-fast-crc32c?branch=master)

fast-crc32c is a CRC-32C algorithm implementation for node.js, which uses
hardware acceleration (via [voxer/sse4_crc32][sse4_crc32] by Anand Suresh), and
fallback to software implementation when hardware acceleration fails.

## Performance

CRC-32C is faster then CRC-32, which could take advantage of full CPU operand
register width (64bit) instead of CRC-32's 8bit.

When using hardware acceleration, CRC-32C is about 7x ~ 9x faster than software
implemented CRC-32C.

### Benchmark

The 3 tested implementations are:

- **sse4\_crc32c** Hardware accelerated CRC-32C from [sse4_crc32][sse4_crc32]
- **js_crc32c** Javascript implemented CRC-32C
- **js_crc32** Javascript implemented CRC-32 from [buffer-crc32][buffer-crc32]

```shell
$ yarn run benchmark
yarn run v1.17.3
$ node benchmark
sse4_crc32c_hw for inputs 1024B x 3,210,508 ops/sec ±2.09% (87 runs sampled)
sse4_crc32c_hw for inputs 16836819B, avg 2055B x 252 ops/sec ±2.90% (79 runs sampled)
sse4_crc32c_sw for inputs 1024B x 1,358,720 ops/sec ±1.31% (89 runs sampled)
sse4_crc32c_sw for inputs 16836819B, avg 2055B x 96.41 ops/sec ±1.42% (71 runs sampled)
js_crc32c for inputs 1024B x 409,615 ops/sec ±1.46% (89 runs sampled)
js_crc32c for inputs 16836819B, avg 2055B x 26.00 ops/sec ±0.72% (47 runs sampled)
js_crc32 for inputs 1024B x 403,262 ops/sec ±1.55% (90 runs sampled)
js_crc32 for inputs 16836819B, avg 2055B x 24.82 ops/sec ±1.70% (45 runs sampled)
```

|                | 1024B             | 16836819B, avg 2055B |
|:---------------|------------------:|---------------------:|
| sse4_crc32c_hw | 3,210,508 ops/sec | 252 ops/sec          |
| sse4_crc32c_sw | 1,358,720 ops/sec | 96.41 ops/sec        |
| js_crc32c      | 409,615 ops/sec   | 26.00 ops/sec        |
| js_crc32       | 403,262 ops/sec   | 24.82 ops/sec        |

## Install

```shell
npm install fast-crc32c@^2.0.0 --save
# For node version before 6
# npm install fast-crc32c@^1.0.0 --save
```

### Usage

```javascript
var crc32 = require('fast-crc32c');
var result = crc32.calculate(data, initial);
```

- **data** required, String|Buffer, data to digest
- **initial** optional, Number, initial CRC-32C digest

[sse4_crc32]: https://github.com/Voxer/sse4_crc32
[buffer-crc32]: https://github.com/brianloveswords/buffer-crc32
