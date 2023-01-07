# En Garde! 🤺

Declare your types with codecs and keep the type definitions in sync with the codec.

```ts
// person.ts

import axios from 'axios';
import { eg, TypeFromCodec } from '@cloudflare/util-en-garde';

// Declare Person codec
const Person = eg.object({
  firstName: eg.string,
  lastName: eg.string.optional,
  address: eg.object({
    street: eg.string,
    city: eg.string,
    state: eg.string,
    zip: eg.number
  }),
  nicknames: eg.array(eg.string).optional,
  favoritePrimaryColor: eg.union([
    eg.literal('red'),
    eg.literal('blue'),
    eg.literal('yellow')
  ])
});

/**
 * Derive Person type information from codec:
 *
 * {
 *   firstName: string
 *   lastName?: string | undefined
 *   address: {
 *     street: string
 *     city: string
 *     state: string
 *     zip: number
 *   }
 *   nicknames?: string[] | undefined
 *   favoritePrimaryColor: "red" | "blue" | "yellow"
 * }
 */
export type Person = TypeFromCodec<typeof Person>;
/**                                 👆
 * typeof is accessing the (value) Person codec's type
 * information and passes it into the TypeFromCodec type
 * helper
 */

// handler accepts the Person *type*
const handler = (p: Person) => {
  console.log(p.firstName.toUpperCase());
};

axios
  .get('https://www.example.com')
  .then(res => res.data)
  // Here we are using the Person *codec* as a value and
  // decoding
  .then(Person.assertDecode)
  .then(handler);
```

## Decoding IO data

TypeScript has done a lot to bring type safety to the JS ecosystem, but decoding
data from IO is an area that is still largely overlooked even in TypeScript. For
example, `axios`'s type-definitions allow you to specify a type that you expect
the data to be. This is still a great improvement over untyped JS since you can
change the type in one place and immediately know what other places in your code
need to be updated, but this still does not provide any kind of runtime
validation.

```ts
// unsafe.ts

import axios from 'axios';

axios
  .get<string>('https://www.example.com')
  .then(res => console.log(res.data.toUpperCase()));
```

When we tell the type checker the response is going to be of type `string`, we
can still get unexpected runtime errors. What happens if this API doesn't send
back the response shape we're expecting? TypeScript will happily pretend that
it's going to, but this is not safe!

TypeScript actually has a more appropriate type for this — the `unknown` type!

```ts
// safe_unknown.ts

import axios from 'axios';

axios.get<unknown>('https://www.example.com').then(res => {
  if (typeof res.data === 'string') {
    console.log(res.data.toUpperCase());
  } else {
    throw new Error('response was not of type string');
  }
});
```

Unfortunately, the `unknown` type can be cumbersome to handle directly. The type
checker requires you to perform runtime checks in order to narrow the type to be
usable for just about anything. This _is_ actually type safe, though!

Fortunately there are libraries that are built for this! `io-ts` is one such
library that is built on some really solid ideas, though the API leaves some
things to be desired. We've created a lightweight wrapper around it called
`util-en-garde` to provide a nicer API. If you're interested in the reasons,
please check out the
[source code for our wrapper](https://bitbucket.cfdata.org/projects/FE/repos/stratus/browse/src/common/util/util-en-garde/src/index.ts)!

```ts
// safe_decode.ts

import axios from 'axios';
import { eg } from '@cloudflare/util-en-garde';

axios
  .get<unknown>('https://www.example.com')
  .then(res => res.data)
  .then(eg.string.assertDecode)
  // will never hit code path below if the response was wrong
  // and str is of type string because that is the type assert
  // returns on eg.string
  .then(str => console.log(str.toUpperCase()));
```

The wrapper provides an `assertDecode` method that _will throw an error_ if it
fails to decode containing detailed information about _why_ it failed to decode.

With this, you can safely and confidently handle unknown data at the IO
boundaries of your application and know with confidence that the codepaths
deeper in your codebase _will_ have the right data flowing through them!

It provides a declarative API for data structures. For example, we can create
construct a codec for a person object.

```ts
// person.ts;

import { eg, TypeFromCodec } from '@cloudflare/util-en-garde';

// Declare Person codec
const Person = eg.object({
  firstName: eg.string,
  lastName: eg.string.optional,
  address: eg.object({
    street: eg.string,
    city: eg.string,
    state: eg.string,
    zip: eg.number
  }),
  nicknames: eg.array(eg.string).optional,
  favoritePrimaryColor: eg.union([
    eg.literal('red'),
    eg.literal('blue'),
    eg.literal('yellow')
  ])
});
```

Additionally, types can be derived from the codec. This means we can have the
codec be the single source of truth. If the codec changes, the type information
changes with it. If the type needs to change, you change it by changing the
codec. This guarantees that our runtime checks are consistent with the types we
use elsewhere in our application! Types and values exist in separate namespaces,
so we can actually use the same name for both the codec and the type!

```ts
// person.ts;
```

Now we can write some pretty neat strongly typed code!

```ts
// person.ts

import axios from 'axios';
import { eg, TypeFromCodec } from '@cloudflare/util-en-garde';

// Declare Person codec
const Person = eg.object({
  firstName: eg.string,
  lastName: eg.string.optional,
  address: eg.object({
    street: eg.string,
    city: eg.string,
    state: eg.string,
    zip: eg.number
  }),
  nicknames: eg.array(eg.string).optional,
  favoritePrimaryColor: eg.union([
    eg.literal('red'),
    eg.literal('blue'),
    eg.literal('yellow')
  ])
});

/**
 * Derive Person type information from codec:
 *
 * {
 *   firstName: string
 *   lastName?: string | undefined
 *   address: {
 *     street: string
 *     city: string
 *     state: string
 *     zip: number
 *   }
 *   nicknames?: string[] | undefined
 *   favoritePrimaryColor: "red" | "blue" | "yellow"
 * }
 */
export type Person = TypeFromCodec<typeof Person>;
/**                                 👆
 * typeof is accessing the (value) Person codec's type
 * information and passes it into the TypeFromCodec type
 * helper
 */

// handler accepts the Person *type*
const handler = (p: Person) => {
  console.log(p.firstName.toUpperCase());
};

axios
  .get('https://www.example.com')
  .then(res => res.data)
  // Here we are using the Person *codec* as a value and
  // decoding
  .then(Person.assertDecode)
  .then(handler);
```

## Handling Errors

`assertDecode` _does_ throw an error if it fails to decode, so we need to handle
that. We have some utilities in dash's `common/utils/decode` that will decode
the data, and if decoding fails we will log an error to Sentry to make us aware
that an API is sending us back an unexpected response.

`decode` is built to be used with fetch:

```ts
// handling_fetch_errors.ts

import { eg, TypeFromCodec } from '@cloudflare/util-en-garde';
import { decode } from 'common/utils/decode';

const Person = eg.object({
  firstName: eg.string,
  lastName: eg.string
});

fetch('api.cloudflare.com')
  // if decoding fails, we will log an error to Sentry
  // with detailed information about what failed to decode
  // before re-throwing the error so typically you should
  // not use assertDecode directly
  .then(decode(Person))
  .then(p => console.log(p.firstName))
  .catch(err => {
    // we might get a decoding error in here now
  });
```

Assuming you're using a `v4` API with `util-http` you should use
`httpUtilDecode`:

```ts
// handling_http_util_errors.ts
import { eg, TypeFromCodec } from '@cloudflare/util-en-garde';
import { httpUtilDecode, resultOf, getResult } from 'common/utils/decode';

const Person = eg.object({
  firstName: eg.string,
  lastName: eg.string
});

fetch('api.cloudflare.com/v4/person')
  // httpUtilDecode expects the response of util-http
  // resultOf wraps the codec with response object
  .then(httpUtilDecode(resultOf(Person)))
  // getResult plucks the result off the response object
  .then(getResult)
  .then(p => console.log(p.firstName))
  .catch(err => {
    // we might get a decoding error in here now
  });
```

## Writing custom codecs

This is where those really solid ideas that `io-ts` is built on really shine.
The `io-ts` docs include
[this `DateFromString` example](https://github.com/gcanti/io-ts#custom-types).
Since it was built to be used with `fp-ts` (a library for functional programming
in TypeScript) the `validate` function (3rd argument in the constructor) needs
to return an `Either` type which is a simple discriminated union that indicates
success (right) or failure (left).

```ts
// io-ts_custom_codec.ts

import * as t from 'io-ts';
import { either } from 'fp-ts/lib/Either';

// represents a Date from an ISO string
const DateFromString = new t.Type<Date, string, unknown>(
  'DateFromString',
  (u): u is Date => u instanceof Date,
  (u, c) =>
    either.chain(t.string.validate(u, c), s => {
      const d = new Date(s);
      return isNaN(d.getTime()) ? t.failure(u, c) : t.success(d);
    }),
  a => a.toISOString()
);

const s = new Date(1973, 10, 30).toISOString();

DateFromString.decode(s);
// right(new Date('1973-11-29T23:00:00.000Z'))

DateFromString.decode('foo');
// left(errors...)
```

To de-mystify what's going on here, we can re-write this and avoid using
`either.chain`, `t.success`, and `t.failure`. Let's also give these one letter
variables some more meaningful names.

Note that the `context` object only gets passed along in the error cases. It
contains path information and other metadata in the event of a failure. Failurs
get returned in an array because some data structures (objects/arrays) may
contain multiple errors.

```ts
// date_from_string.ts

import * as t from 'io-ts';

const DateFromString = new t.Type<Date, string, unknown>(
  // First argument is the name of the codec
  'DateFromString',
  // Second argument is a guard for the decoded type
  (value: unknown): value is Date => value instanceof Date,
  // Third argument is the "validate" function that attempts to
  // turn an unknown value into a decoded value and must return
  // an Either discriminated union
  (value: unknown, context: t.Context) => {
    // first we make sure the value of type unknown is a string
    if (typeof value !== 'string')
      // return a "Left" error object if value isn't string
      return { _tag: 'Left', left: [{ value, context }] };
    // create a date object
    const date = new Date(value);
    // check to see if date is valid
    return isNaN(date.getTime())
      ? // error case since it wasn't a valid date
        { _tag: 'Left', left: [{ value, context }] }
      : // success case returns a "Right" with the date object!
        {
          _tag: 'Right',
          right: date
        };
  },
  // Fourth argument is the "encode" function that goes from
  // a date object back to a string
  (a: Date) => a.toISOString()
);
```

Now that we have a custom codec for `io-ts`, we can simply wrap this up with
`util-en-garde`'s `Codec` class that provides the additional nice API.

```ts
// date_from_string.ts

import { t, Codec, TypeFromCodec } from '@cloudflare/util-en-garde';
//      ☝️ util-en-garde re-exports io-ts

// Pass the custom io-ts codec definition into the Codec wrapper
export const DateFromString = new Codec(
  new t.Type<Date, string, unknown>(
    'DateFromString',
    (value: unknown): value is Date => value instanceof Date,
    (value: unknown, context: t.Context) => {
      if (typeof value !== 'string')
        return { _tag: 'Left', left: [{ value, context }] };
      const date = new Date(value);
      return isNaN(date.getTime())
        ? { _tag: 'Left', left: [{ value, context }] }
        : {
            _tag: 'Right',
            right: date
          };
    },
    (a: Date) => a.toISOString()
  )
);

// It can now be used like any other wrapped codec!
const Person = eg.object({
  firstName: eg.string,
  birthday: DateFromString.optional
});

/**
 * { firstName: string, birthday?: Date | undefined }
 */
type Person = TypeFromCodec<typeof Person>;

// Succeeds because birthday is undefined and optional
const successOne = Person.assertDecode({ firstName: 'jane' });
// Succeeds because birthday is a valid date string
const successTwo = Person.assertDecode({
  firstName: 'joe',
  birthday: new Date().toISOString()
});

// Throws because birthday is not a valid date string
const failureOne = Person.assertDecode({
  firstName: 'jane',
  birthday: 'hi'
});
// Throws because birthday is not a string
const failureTwo = Person.assertDecode({
  firstName: 'joe',
  birthday: false
});

// { firstName: string, birthday?: string | undefined }
const encodedPerson = Person.encode({
  firstName: 'jane',
  // must pass in Date object here
  birthday: new Date()
});
```

Lastly, note that `birthday` on `encodedPerson` is of type `string | undefined`
since `DateFromString`'s "encoded" type is `string`.


Safely and declaratively definte types and runtime encoding/decoding tools in one place!

---

## User-defined type guards are great, but there be dragons! 🐉

[User-defined type guards](http://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards)
can help inspect untrusted data (especially from IO) and then have confidence
that you can safely do things with it once it has been checked. But just
_checking_ the data can be dangerous. Many type guards cast `as any` which means
now you have to be extra careful and think of every possible scenario where a
data structure might throw an error if you access it unsafely.

Then there's the problem of ensuring that the type guard stays up to date with
the type. Just added a new required field on the interface? Will you get a
compiler error if you don't go update your type guard? Even if the answer is
"yes" here, you still have to go update it.

## What if there was a better way? 🤔

What if safely written type guards _written with no casting_ could be
declaratively composed to represent just about any shape?

What if types could be _derived_ from those composed type guards?

What if you could easily _bring your own type guards_ and compose them as well?

## Examples

### Basic shapes

```ts
import eg from 'en-garde'; // 🤺

// (value: unknown) => value is Date | undefined
const isMaybeDate = eg.instanceOf(Date).optional;

// (value: unknown) => value is string[]
const isArrayOfStrings = eg.arrayOf(eg.string);

// (value: unknown) => value is (string | number)[]
const isArrayOfStringsOrNumbers = eg.arrayOf(eg.oneOf(eg.string, eg.number));

/** (value: unknown) => value is {
 *    firstName: string
 *    lastName?: string | undefined
 *    email: string
 *    birthday: Date | null
 *    address:? {
 *      street: string
 *      city: string
 *      state: string
 *      zip?: string | undefined
 *    } | undefined
 *    nickNames?: string[] | undefined
 *    favoritePrimaryColor: "red" | "blue" | "yellow"
 * }
 */
const isPerson = eg.object({
  firstName: eg.string,
  lastName: eg.string.optional,
  email: eg.string,
  birthday: eg.oneOf(eg.instanceOf(Date), eg.null),
  address: eg.object({
    street: eg.string,
    city: eg.string,
    state: eg.string,
    zip: eg.string.optional,
  }).optional,
  nickNames: eg.arrayOf(eg.string).optional,
  favoritePrimaryColor: eg.oneOfLiterals('red', 'blue', 'yellow'),
});

/** Derive type information from the guard!
 *
 * type Person = {
 *    firstName: string
 *    lastName?: string | undefined
 *    email: string
 *    birthday: Date | null
 *    address:? {
 *      street: string
 *      city: string
 *      state: string
 *      zip?: string | undefined
 *    } | undefined
 *    nickNames?: string[] | undefined
 *    favoritePrimaryColor: "red" | "blue" | "yellow"
 * }
 */
export type Person = TypeFromGuard<typeof isPerson>;
```

### Strongly typed API validation

The `assertShape` helper is especially useful for validating that data from an
API is what you expect.

```ts
import eg, { assertShape } from 'en-garde';

const isPerson = eg.object({
  firstName: eg.string,
  lastName: eg.string,
});

// type Person = {
//    firstName: string
//    lastName: string
// }
type Person = TypeFromGuard<typeof isPerson>;

// This function returns a promise that will *ONLY* ever
// resolve if the JSON returned is an array of the Person
// type, otherwise it will throw an error that can be caught
// and logged to whatever error monitoring service you use.
const getPeople: () => Promise<Person[]> = () =>
  fetch('www.example.com/api/people')
    .then(res => res.json())
    .then(assertShape(eg.array(isPerson)));
```
