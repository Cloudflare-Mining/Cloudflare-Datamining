# ulid-workers changelog

## v2.1.0

2022-12-08

-   Export `encodeTime` to allow encoding of a MAX token when querying a list

## v2.0.0

2022-02-09

-   Use a factory function that returns a function for both `monotonic` and `non-monotonic` uses.
-   Default to using `monotonic` ULID generation
-   Fully remove PRNG agility. Always use `crypto.getRandomValues()`
-   Allow passing `timestamp` argument to both `monotonic` and `non-monotonic` `ulid()` functions
-   Stop public export of private functions, provide them only to test suite
-   Modernize all dev dependencies
-   Convert Mocha test suite and runner to Typescript
-   No longer require build from Typescript to JS to test
-   Expand test coverage
-   Update README for clarity and to reflect Cloudflare use case
-   Modernize Husky git pre-commit toolchain

## v1.0.0

2021-11-10

-   Initial release
-   Fork from ulidx
    -   Remove dependencies
    -   Remove PRNG detection
    -   Web Crypto API only
