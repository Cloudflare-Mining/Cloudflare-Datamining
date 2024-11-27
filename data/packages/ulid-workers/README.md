# ulid-workers

A zero-dependency `ULID` generator for [Cloudflare Workers](https://developers.cloudflare.com/workers/) that is written entirely in Typescript and generates `ULID`s monotonically by default. It is **not** compatible with Node.js.

This library was forked [ulidx](https://github.com/perry-mitchell/ulidx), which in turn was based on the original [ulid](https://github.com/ulid/javascript) library that targeted Node.js and the browser.

## About

### What is a ULID?

ULIDs are universally Unique Lexicographically sortable IDentifiers. This library adheres to [the ULID specification](https://github.com/ulid/spec).

### Monotonicity and ULID Time in Cloudflare Workers

This library breaks slightly from tradition in that it generates `monotonic` `ULID`s by default. Normally `ULID`s are lexically sortable because the time component of the `ULID` is based on a high precision timestamp that is always moving forward. It is this timestamp that allows the `ULID` to be easily sorted in those cases.

However, in the context of a Cloudflare Worker this assumption of always incrementing time breaks down a little. The Workers team has chosen, for security reasons, to freeze time within the context of a single worker request/response cycle.

The [Workers documentation](https://developers.cloudflare.com/workers/learning/security-model#step-1-disallow-timers-and-multi-threading) talks about the security reasons for this at length.

> In Workers, you can get the current time using the JavaScript Date API, for example by calling `Date.now()`. However, the time value returned by this is not really the current time. Instead, it is the **time at which the network message was received** which caused the application to begin executing. While the application executes, time is locked in place.

So if you were to generate multiple `ULID`s in a single request they would all have the same exact time component. In this case the normal behavior of other `ULID` libraries would be to have the random component be truly random. This means that if you generated 10 `ULID`s within a single request they would no longer be able to be guaranteed to be lexically sortable. Thus you lose one of the most important properties of the `ULID`.

The `ULID` spec defines a method for handling this situation. You can generate a [`monotonic`](https://github.com/ulid/spec#monotonicity) `ULID` which allows for the creation of more than `2^80` `ULID`s within a single millisecond while ensuring that they remain sortable. It does this by incrementing the random component by 1 bit in the least significant bit position (with carrying). Therefore the random component remains sortable even when the timestamp components are identical.

So for example, if you generated five new ULID's within the same `ms` of a time-frozen request you would see something like:

```text
# Note : the random component displayed here is zero'd for
# clarity and the time component is shown as 'T'. Real ULID's
# would be increment the LSB of a truly random value using
# the full Base32 alphabet.

TTTTTTTTTT0000000000000000
TTTTTTTTTT0000000000000001
TTTTTTTTTT0000000000000002
TTTTTTTTTT0000000000000003
TTTTTTTTTT0000000000000004
```

You can see that the time component remains unchanged while the random component that follows has its least significant bit incremented by `1`, which is the next rotation in the next Base32 character set.

It is for these reasons we use the [monotonic ULID factory](#monotonic-ulid-factory) by default. Of course you can also use the `non-monotonic` version just as easily.

For more on the decision to fork, please also see [this discussion](https://github.com/perry-mitchell/ulidx/pull/6#issuecomment-1003190116).

### What is the behavior of the `monotonic` generator when passing a `timestamp` arg?

If you pass a `timestamp` argument to the factory function to override the timestamp portion of the ULID there are a couple of interesting behaviors you might want to be aware of:

1) The function will never return a ULID where the time component is less than the highest timestamp it has been exposed to. The function has some internal state that tracks the last time it was exposed to. If asked for a ULID with `ulid(Date.now())` and then subsequently asked for a ULID with `ulid(Date.now() - 1000)` it will return a ULID with the timestamp of the former higher timestamp.  This ensures that ULID's that are emitted *always* monotonically increment and ULID's generated later will always lexically sort higher than ULID's generated earlier.

2) The behavior of the monotonic function will vary based on where it is initialized and in what context it is run:
    * If the function is initialized as a constant __outside__ of the Cloudflare Worker handler function its internal state will persist for the lifetime of the particular instance of the Cloudflare Worker isolate it is running in. There can be many such isolates running in Cloudflare data centers around the world. So each will have its own internal state. The function will always return a timestamp that is >= the highest timestamp it has ever been exposed to. This could be long lived state if the ULID generator were to run in the context of a Cloudflare Durable Object where it may have a long lifetime and where its state may be maintained in a single isolate.
    * If the function is initialized as a constant __inside__ of the Cloudflare Worker handler function's request/response cycle it will be recreated on each request, and no internal state will be maintained across requests. In this case you will always get a ULID that is "fresh", meaning the state related to the last timestamp handled is reset on every request.

In general you probably don't want to pass a timestamp arg to a monotonic generator unless you understand these, or other, nuances. The capability of ensuring a higher level of monotonicity is provided for those who understand these behaviors.

### Are there any concerns with using the `monotonic` generator?

Generally speaking, no.

However, if your use case:

* generates multiple `ULID`s in the context of a single request
* AND places high importance on the non-guessability of the next `ULID` in a sequence

Then you might want to use the `non-monotonic` configuration, sacrificing higher sortability. As you can see from the example above, it is trivial to guess what the next `ULID` in a sequence of `ULID`s all generated within a single `ms` are going to be.

We think for most use-cases for use within Cloudflare Workers these concerns are of lesser importance so we've chosen to use `monotonic` by default.

## Demonstration API

If you'd like to generate `ULID`s there is a public API at [ulid.truestamp.com](https://ulid.truestamp.com/) that is implemented using a Cloudflare Worker and a global singleton Durable Object that creates all ULIDs using this library.

Learn more:

<https://github.com/truestamp/ulid-generator>

Example:

[https://ulid.truestamp.com/?q=3](https://ulid.truestamp.com/?q=3)

```sh
❯ https --print b https://ulid.truestamp.com q==3
[
    {
        "t": 1644553645224,
        "ts": "2022-02-11T04:27:25.224Z",
        "ulid": "01FVKGJB58M3ERB35J6KFKPPK8"
    },
    {
        "t": 1644553645224,
        "ts": "2022-02-11T04:27:25.224Z",
        "ulid": "01FVKGJB58M3ERB35J6KFKPPK9"
    },
    {
        "t": 1644553645224,
        "ts": "2022-02-11T04:27:25.224Z",
        "ulid": "01FVKGJB58M3ERB35J6KFKPPKA"
    }
]
```

## Installation

Install using npm by running:

```shell
npm install ulid-workers --save
```

## Usage

Import a factory function from `ulid-workers` that is used to generate new `ULID`s.

You can select from a `monotonic` (the default) or `non-monotonic` factory.

### Monotonic

```typescript
import { ulidFactory } from "ulid-workers";
const ulid = ulidFactory();

const id = ulid();
// 01ARYZ6S41TSV4RRFFQ69G5FAV
```

### Non-Monotonic

```typescript
import { ulidFactory } from "ulid-workers";
const ulid = ulidFactory({ monotonic: false });

const id = ulid();
// 01ARYZ6S41TSV4RRFFQ69G5FAV
```

### Timestamp

The `ULID` specification states that timestamps represent the UNIX Epoch in milliseconds. This library expects all timestamp input to also represent milliseconds since the Epoch. By default, the `ulid()` function call will use the current time for the time component of newly generated ULIDs. You can also provide a `timestamp` argument which will consistently give you the same string for the time component (the first 10 characters) of the `ULID`.

Providing a timestamp value can be useful, for example, for migrating from another timestamp based ID system to `ULID` where you want to retain the same timestamp component.

```typescript
// timestamp in ms since the Epoch
ulid(1469918176385);
```

### Decode ULID Timestamp

Import the `decodeTime` function to extract the timestamp component embedded in a `ULID`:

```typescript
import { decodeTime } from "ulid-workers";

decodeTime("01ARYZ6S41TSV4RRFFQ69G5FAV");
// 1469918176385
```

## Pseudo-Random Number Generation (PRNG)

The Cloudflare Workers runtime implements the [Web Crypto API](https://developers.cloudflare.com/workers/runtime-apis/web-crypto) `crypto.getRandomValues()` function which this library uses to generate the random portion of a `ULID`.

## Compatibility

`ulid-workers` is compatible with Cloudflare Workers and Durable Objects. It is not compatible with Node.js since it does not implement `crypto.getRandomValues()`.
