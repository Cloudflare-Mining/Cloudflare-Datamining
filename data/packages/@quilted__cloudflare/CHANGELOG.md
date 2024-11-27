# @quilted/cloudflare

## 0.3.3

### Patch Changes

- Updated dependencies [[`ecd7322`](https://github.com/lemonmade/quilt/commit/ecd7322637e54b5f34dfa310249d819e944c9171), [`40c2d71`](https://github.com/lemonmade/quilt/commit/40c2d71ec583c92266d2a7b5adec9cee8880b4ab), [`8669216`](https://github.com/lemonmade/quilt/commit/8669216a28c6d8b5b62d4f297ece8f44b8f9f3ae)]:
  - @quilted/quilt@0.8.0

## 0.3.2

### Patch Changes

- [`dc76164`](https://github.com/lemonmade/quilt/commit/dc76164dfa11e2d257f9652f94b9825689d0849c) Thanks [@lemonmade](https://github.com/lemonmade)! - Fix Cloudflare Pages output settings

- Updated dependencies [[`520a002`](https://github.com/lemonmade/quilt/commit/520a00204f5d2f7674f78c510109092a4b7648a3)]:
  - @quilted/rollup@0.2.38

## 0.3.1

### Patch Changes

- [`805faf3`](https://github.com/lemonmade/quilt/commit/805faf3201bf4ee97ddb078f97f7660f52fc296b) Thanks [@lemonmade](https://github.com/lemonmade)! - Make server build directory emptying configurable

- Updated dependencies [[`805faf3`](https://github.com/lemonmade/quilt/commit/805faf3201bf4ee97ddb078f97f7660f52fc296b)]:
  - @quilted/rollup@0.2.37

## 0.3.0

### Patch Changes

- Updated dependencies [[`87598dc`](https://github.com/lemonmade/quilt/commit/87598dcca4d97835caed7152f646e9989c75d73b)]:
  - @quilted/quilt@0.7.0

## 0.2.6

### Patch Changes

- [`d9cb157`](https://github.com/lemonmade/quilt/commit/d9cb157784982ff32739d3d6284bc547186da250) Thanks [@lemonmade](https://github.com/lemonmade)! - Remove `@quilted/craft` package

- Updated dependencies [[`2c7c614`](https://github.com/lemonmade/quilt/commit/2c7c61486018b4192ef8d1f85ccd27ed7889f118)]:
  - @quilted/quilt@0.6.16

## 0.2.5

### Patch Changes

- [`704e17f0`](https://github.com/lemonmade/quilt/commit/704e17f0336e2cde642d5fd39badf23e9c072944) Thanks [@lemonmade](https://github.com/lemonmade)! - Improve `runtime` build option

## 0.2.4

### Patch Changes

- [`4ddf0b91`](https://github.com/lemonmade/quilt/commit/4ddf0b9150024bed06e76ad1c126c0eba5d3366d) Thanks [@lemonmade](https://github.com/lemonmade)! - Allow server runtimes to declare a default `bundle` option

## 0.2.3

### Patch Changes

- [`5c372458`](https://github.com/lemonmade/quilt/commit/5c372458cb2db671ea40e1af29d3c49ca63d78ab) Thanks [@lemonmade](https://github.com/lemonmade)! - Fix peer dependencies for Deno and Cloudflare integrations

## 0.2.2

### Patch Changes

- [#669](https://github.com/lemonmade/quilt/pull/669) [`73127e7f`](https://github.com/lemonmade/quilt/commit/73127e7f32d15ddcdf1ea025eabcb2830e5ba559) Thanks [@lemonmade](https://github.com/lemonmade)! - Add runtime overrides

## 0.2.1

### Patch Changes

- [`950021fa`](https://github.com/lemonmade/quilt/commit/950021fa127df22e6c6d3b2d5138b54c03591a28) Thanks [@lemonmade](https://github.com/lemonmade)! - Update Preact dependencies

- Updated dependencies [[`950021fa`](https://github.com/lemonmade/quilt/commit/950021fa127df22e6c6d3b2d5138b54c03591a28)]:
  - @quilted/quilt@0.6.4

## 0.2.0

### Minor Changes

- [#645](https://github.com/lemonmade/quilt/pull/645) [`302ed847`](https://github.com/lemonmade/quilt/commit/302ed8479f9c035ef39d48137de958dba50690ca) Thanks [@lemonmade](https://github.com/lemonmade)! - Removed CommonJS support

  The `require` export condition is no longer provided by any package. Quilt only supports ESModules, so if you need to use the CommonJS version, you will need to pre-process Quilt’s output code on your own.

- [#645](https://github.com/lemonmade/quilt/pull/645) [`302ed847`](https://github.com/lemonmade/quilt/commit/302ed8479f9c035ef39d48137de958dba50690ca) Thanks [@lemonmade](https://github.com/lemonmade)! - Refactor `@quilted/craft` to be just a thin layer over Rollup and Vite

### Patch Changes

- Updated dependencies [[`302ed847`](https://github.com/lemonmade/quilt/commit/302ed8479f9c035ef39d48137de958dba50690ca)]:
  - @quilted/quilt@0.6.0

## 0.1.58

### Patch Changes

- [`8123b38e`](https://github.com/lemonmade/quilt/commit/8123b38eba784ef9ae01ea2744bb9deb82fe435c) Thanks [@lemonmade](https://github.com/lemonmade)! - Improve tooling export paths

- Updated dependencies [[`8123b38e`](https://github.com/lemonmade/quilt/commit/8123b38eba784ef9ae01ea2744bb9deb82fe435c)]:
  - @quilted/craft@0.1.237

## 0.1.57

### Patch Changes

- [#612](https://github.com/lemonmade/quilt/pull/612) [`bc849bc7`](https://github.com/lemonmade/quilt/commit/bc849bc740318936656162fde851b784ed6ef78f) Thanks [@lemonmade](https://github.com/lemonmade)! - Simplify app template APIs

- Updated dependencies [[`bc849bc7`](https://github.com/lemonmade/quilt/commit/bc849bc740318936656162fde851b784ed6ef78f)]:
  - @quilted/craft@0.1.233
  - @quilted/quilt@0.5.153

## 0.1.56

### Patch Changes

- [`9696dba6`](https://github.com/lemonmade/quilt/commit/9696dba6c59733b865b41bea303f91340ae5931f) Thanks [@lemonmade](https://github.com/lemonmade)! - Update Cloudflare plugin dependencies

- Updated dependencies []:
  - @quilted/craft@0.1.231

## 0.1.55

### Patch Changes

- [`530da479`](https://github.com/lemonmade/quilt/commit/530da479415230c9e307f3c93f535a5839e3b2bd) Thanks [@lemonmade](https://github.com/lemonmade)! - Fix process.env.NODE_ENV replacement

- Updated dependencies [[`530da479`](https://github.com/lemonmade/quilt/commit/530da479415230c9e307f3c93f535a5839e3b2bd)]:
  - @quilted/craft@0.1.215

## 0.1.54

### Patch Changes

- [`67dc06e8`](https://github.com/lemonmade/quilt/commit/67dc06e8a680c3d35f08b721ae717e3643add4a4) Thanks [@lemonmade](https://github.com/lemonmade)! - Fix process.env.NODE_ENV in workers

- Updated dependencies [[`67dc06e8`](https://github.com/lemonmade/quilt/commit/67dc06e8a680c3d35f08b721ae717e3643add4a4), [`67dc06e8`](https://github.com/lemonmade/quilt/commit/67dc06e8a680c3d35f08b721ae717e3643add4a4)]:
  - @quilted/craft@0.1.205

## 0.1.53

### Patch Changes

- [#536](https://github.com/lemonmade/quilt/pull/536) [`cf6e2de1`](https://github.com/lemonmade/quilt/commit/cf6e2de186d8644fad9afcedda85c05002e909e1) Thanks [@lemonmade](https://github.com/lemonmade)! - Update to TypeScript 5.0

- Updated dependencies [[`cf6e2de1`](https://github.com/lemonmade/quilt/commit/cf6e2de186d8644fad9afcedda85c05002e909e1)]:
  - @quilted/craft@0.1.198
  - @quilted/quilt@0.5.139

## 0.1.52

### Patch Changes

- [`79f95e0a`](https://github.com/lemonmade/quilt/commit/79f95e0ad804277847b2db4f00d1631d0a3ff964) Thanks [@lemonmade](https://github.com/lemonmade)! - Update Cloudflare guides

- [`b378b4f4`](https://github.com/lemonmade/quilt/commit/b378b4f40906f9edc81d4283cf29e753255a0362) Thanks [@lemonmade](https://github.com/lemonmade)! - Update default build output locations

- Updated dependencies [[`b378b4f4`](https://github.com/lemonmade/quilt/commit/b378b4f40906f9edc81d4283cf29e753255a0362), [`10574343`](https://github.com/lemonmade/quilt/commit/105743435ad7143acb50dfdee92f6d3422167888)]:
  - @quilted/craft@0.1.192
  - @quilted/quilt@0.5.134

## 0.1.51

### Patch Changes

- [`0f4bc02e`](https://github.com/lemonmade/quilt/commit/0f4bc02ea63d53d76e15d78dba113ba6b81f6ab9) Thanks [@lemonmade](https://github.com/lemonmade)! - Fix immutable header editing

## 0.1.50

### Patch Changes

- [`1d7cdb6c`](https://github.com/lemonmade/quilt/commit/1d7cdb6c495f5286053caca91265a5714450b289) Thanks [@lemonmade](https://github.com/lemonmade)! - Add good headers on Cloudflare assets

## 0.1.49

### Patch Changes

- [`94ad3bf9`](https://github.com/lemonmade/quilt/commit/94ad3bf9f5e71bf0aba8eecc7e535e3af599fdf2) Thanks [@lemonmade](https://github.com/lemonmade)! - Update Cloudflare integration to support Pages

- Updated dependencies [[`255118b0`](https://github.com/lemonmade/quilt/commit/255118b0eb90a511fc8f4d7c2d19a79808cd2377), [`3bcf9904`](https://github.com/lemonmade/quilt/commit/3bcf99041e5c27ecdafeeee96a176639269cb006), [`94ad3bf9`](https://github.com/lemonmade/quilt/commit/94ad3bf9f5e71bf0aba8eecc7e535e3af599fdf2)]:
  - @quilted/craft@0.1.190
  - @quilted/quilt@0.5.133

## 0.1.48

### Patch Changes

- [`8f1d275b`](https://github.com/lemonmade/quilt/commit/8f1d275b6de0abbc6f61bcd5401555f6480eb474) Thanks [@lemonmade](https://github.com/lemonmade)! - Remove need for @babel/runtime peer dependency

- Updated dependencies [[`8f1d275b`](https://github.com/lemonmade/quilt/commit/8f1d275b6de0abbc6f61bcd5401555f6480eb474), [`50215b7c`](https://github.com/lemonmade/quilt/commit/50215b7c005c21440bca04935fda87d98d9d9d01), [`dce549a1`](https://github.com/lemonmade/quilt/commit/dce549a19f296e3b20b70cff8da46fca517dda79)]:
  - @quilted/craft@0.1.176
  - @quilted/quilt@0.5.125

## 0.1.47

### Patch Changes

- [`a5fff962`](https://github.com/lemonmade/quilt/commit/a5fff96280306bd22fa2bc9e52cbe3cf50575ca1) Thanks [@lemonmade](https://github.com/lemonmade)! - Fix development servers

- Updated dependencies [[`a5fff962`](https://github.com/lemonmade/quilt/commit/a5fff96280306bd22fa2bc9e52cbe3cf50575ca1)]:
  - @quilted/craft@0.1.168

## 0.1.46

### Patch Changes

- [`77d4a3ab`](https://github.com/lemonmade/quilt/commit/77d4a3ab896f122e5f04378941431cd2fb1e49f4) Thanks [@lemonmade](https://github.com/lemonmade)! - Simplify Cloudflare outputs

## 0.1.45

### Patch Changes

- [`1495af4c`](https://github.com/lemonmade/quilt/commit/1495af4ce637b7f5dc6a22b9f00a9609f204c554) Thanks [@lemonmade](https://github.com/lemonmade)! - Default cloudflare adaptor to not cache

- [`b5d12b76`](https://github.com/lemonmade/quilt/commit/b5d12b76394d53c09b63914a32c6f1dfcbfdff82) Thanks [@lemonmade](https://github.com/lemonmade)! - Allow overriding Cloudflare environment

## 0.1.44

### Patch Changes

- [#436](https://github.com/lemonmade/quilt/pull/436) [`3171fcee`](https://github.com/lemonmade/quilt/commit/3171fceeddfb14c253ac45e34e1e2f9ab6e3f6c0) Thanks [@lemonmade](https://github.com/lemonmade)! - Default to not caching Cloudflare responses

- [#436](https://github.com/lemonmade/quilt/pull/436) [`3171fcee`](https://github.com/lemonmade/quilt/commit/3171fceeddfb14c253ac45e34e1e2f9ab6e3f6c0) Thanks [@lemonmade](https://github.com/lemonmade)! - Rename http-handlers to request-router

- Updated dependencies [[`3171fcee`](https://github.com/lemonmade/quilt/commit/3171fceeddfb14c253ac45e34e1e2f9ab6e3f6c0)]:
  - @quilted/craft@0.1.166
  - @quilted/quilt@0.5.119

## 0.1.43

### Patch Changes

- [#429](https://github.com/lemonmade/quilt/pull/429) [`69a5d2a1`](https://github.com/lemonmade/quilt/commit/69a5d2a1f9c2fe8d93be3157eb33506b0b8f7df7) Thanks [@lemonmade](https://github.com/lemonmade)! - Update all development dependencies to their latest versions

- Updated dependencies [[`69a5d2a1`](https://github.com/lemonmade/quilt/commit/69a5d2a1f9c2fe8d93be3157eb33506b0b8f7df7)]:
  - @quilted/craft@0.1.162

## 0.1.42

### Patch Changes

- [#370](https://github.com/lemonmade/quilt/pull/370) [`c7adecdf`](https://github.com/lemonmade/quilt/commit/c7adecdf5830dad00f1c071aa92469b922f68123) Thanks [@lemonmade](https://github.com/lemonmade)! - Allow simpler http handlers

- Updated dependencies [[`c7adecdf`](https://github.com/lemonmade/quilt/commit/c7adecdf5830dad00f1c071aa92469b922f68123)]:
  - @quilted/craft@0.1.142
  - @quilted/quilt@0.5.109

## 0.1.41

### Patch Changes

- [`f7ef3a80`](https://github.com/lemonmade/quilt/commit/f7ef3a807d418ba921f58acc271ba2aa6f55b04a) Thanks [@lemonmade](https://github.com/lemonmade)! - Fix more build issues

- Updated dependencies [[`f7ef3a80`](https://github.com/lemonmade/quilt/commit/f7ef3a807d418ba921f58acc271ba2aa6f55b04a)]:
  - @quilted/craft@0.1.141

## 0.1.40

### Patch Changes

- [`a12c3576`](https://github.com/lemonmade/quilt/commit/a12c357693b173461f51a35fb7efdd0a9267e471) Thanks [@lemonmade](https://github.com/lemonmade)! - Fix more build issues

- Updated dependencies [[`a12c3576`](https://github.com/lemonmade/quilt/commit/a12c357693b173461f51a35fb7efdd0a9267e471)]:
  - @quilted/craft@0.1.140
  - @quilted/quilt@0.5.108

## 0.1.39

### Patch Changes

- [`0629288e`](https://github.com/lemonmade/quilt/commit/0629288ee4ba2e2ccfd73fbb216c3559e1a5c77e) Thanks [@lemonmade](https://github.com/lemonmade)! - Fix missing package builds

- Updated dependencies [[`0629288e`](https://github.com/lemonmade/quilt/commit/0629288ee4ba2e2ccfd73fbb216c3559e1a5c77e)]:
  - @quilted/craft@0.1.139
  - @quilted/quilt@0.5.107

## 0.1.38

### Patch Changes

- [#364](https://github.com/lemonmade/quilt/pull/364) [`4dc1808a`](https://github.com/lemonmade/quilt/commit/4dc1808a86d15e821b218b528617430cbd8b5b48) Thanks [@lemonmade](https://github.com/lemonmade)! - Update to simplified Quilt config

- Updated dependencies [[`4dc1808a`](https://github.com/lemonmade/quilt/commit/4dc1808a86d15e821b218b528617430cbd8b5b48)]:
  - @quilted/craft@0.1.138
  - @quilted/quilt@0.5.106

## 0.1.37

### Patch Changes

- [#361](https://github.com/lemonmade/quilt/pull/361) [`47065859`](https://github.com/lemonmade/quilt/commit/47065859c330e2da23d8758fb165ae84a4f1af4f) Thanks [@lemonmade](https://github.com/lemonmade)! - Move to native Request and Response objects

- Updated dependencies [[`2eceac54`](https://github.com/lemonmade/quilt/commit/2eceac546fa3ee3e2c4d2887ab4a6a021acb52cd), [`47065859`](https://github.com/lemonmade/quilt/commit/47065859c330e2da23d8758fb165ae84a4f1af4f)]:
  - @quilted/craft@0.1.135
  - @quilted/quilt@0.5.105

## 0.1.36

### Patch Changes

- [#331](https://github.com/lemonmade/quilt/pull/331) [`efc54f75`](https://github.com/lemonmade/quilt/commit/efc54f75cb29ec4143a8e52f577edff518014a6b) Thanks [@lemonmade](https://github.com/lemonmade)! - Fix React types in stricter package managers

- Updated dependencies [[`efc54f75`](https://github.com/lemonmade/quilt/commit/efc54f75cb29ec4143a8e52f577edff518014a6b)]:
  - @quilted/craft@0.1.121
  - @quilted/quilt@0.5.102

## 0.1.35

### Patch Changes

- [`03d98d20`](https://github.com/lemonmade/quilt/commit/03d98d201fdab69e4cf57dce588d253c4071f471) Thanks [@lemonmade](https://github.com/lemonmade)! - Fix some Cloudflare HTTP handler types

## 0.1.34

### Patch Changes

- [#302](https://github.com/lemonmade/quilt/pull/302) [`b8940174`](https://github.com/lemonmade/quilt/commit/b894017459fa8e4e6d1a4fc918816356d36c8765) Thanks [@lemonmade](https://github.com/lemonmade)! - Improve service outputs

- Updated dependencies [[`b8940174`](https://github.com/lemonmade/quilt/commit/b894017459fa8e4e6d1a4fc918816356d36c8765), [`b8940174`](https://github.com/lemonmade/quilt/commit/b894017459fa8e4e6d1a4fc918816356d36c8765)]:
  - @quilted/craft@0.1.112
  - @quilted/quilt@0.5.94

## 0.1.33

### Patch Changes

- [`e8e1ec5f`](https://github.com/lemonmade/quilt/commit/e8e1ec5f7863d17721a73c02404e38cf641ea2b7) Thanks [@lemonmade](https://github.com/lemonmade)! - Make miniflare options configurable in craft

- Updated dependencies [[`d1178849`](https://github.com/lemonmade/quilt/commit/d11788499cdd19208d763df3fd78795b1ef1bd81)]:
  - @quilted/craft@0.1.107

## 0.1.32

### Patch Changes

- [`5a2ed581`](https://github.com/lemonmade/quilt/commit/5a2ed5816e775ae3a6a309aed406f29b04512cc7) Thanks [@lemonmade](https://github.com/lemonmade)! - Use project’s wrangler configuration in a monorepo

## 0.1.31

### Patch Changes

- [#287](https://github.com/lemonmade/quilt/pull/287) [`ba876cbe`](https://github.com/lemonmade/quilt/commit/ba876cbe4ddc313966dce0550349319a50490ba6) Thanks [@lemonmade](https://github.com/lemonmade)! - Add better development server hooks

- Updated dependencies [[`ba876cbe`](https://github.com/lemonmade/quilt/commit/ba876cbe4ddc313966dce0550349319a50490ba6), [`ba876cbe`](https://github.com/lemonmade/quilt/commit/ba876cbe4ddc313966dce0550349319a50490ba6), [`7960a7bf`](https://github.com/lemonmade/quilt/commit/7960a7bf1723cb555fbf7500a4b4bf96a02377fa)]:
  - @quilted/quilt@0.5.92
  - @quilted/craft@0.1.106

## 0.1.30

### Patch Changes

- [#284](https://github.com/lemonmade/quilt/pull/284) [`a113062b`](https://github.com/lemonmade/quilt/commit/a113062b7807b3738a652ac8905fa834c0c4c7b7) Thanks [@lemonmade](https://github.com/lemonmade)! - Use miniflare during development for Cloudflare apps

- Updated dependencies [[`a113062b`](https://github.com/lemonmade/quilt/commit/a113062b7807b3738a652ac8905fa834c0c4c7b7), [`a113062b`](https://github.com/lemonmade/quilt/commit/a113062b7807b3738a652ac8905fa834c0c4c7b7)]:
  - @quilted/craft@0.1.105

## 0.1.29

### Patch Changes

- [`78fe1682`](https://github.com/lemonmade/quilt/commit/78fe1682e3f258ffca719c7eaaeeac05031dfa80) Thanks [@lemonmade](https://github.com/lemonmade)! - Simplify craft and sewing-kit

- Updated dependencies [[`78fe1682`](https://github.com/lemonmade/quilt/commit/78fe1682e3f258ffca719c7eaaeeac05031dfa80)]:
  - @quilted/craft@0.1.82
  - @quilted/quilt@0.5.76

## 0.1.28

### Patch Changes

- [`f77bde37`](https://github.com/lemonmade/quilt/commit/f77bde37658273c205980b74cdd53805c56e2d9d) Thanks [@lemonmade](https://github.com/lemonmade)! - Fix dependency externalization for services

- Updated dependencies [[`7bb3292c`](https://github.com/lemonmade/quilt/commit/7bb3292c1e0fa75cb43a965d8da93e8b407f7ee5), [`06f0aa87`](https://github.com/lemonmade/quilt/commit/06f0aa872f3cd9320b8f84528fa5cc0fa98eb685), [`433f94f5`](https://github.com/lemonmade/quilt/commit/433f94f56a86a687b5f70a2887a83a3aae25e025), [`7890dccd`](https://github.com/lemonmade/quilt/commit/7890dccd6d0952f6a41d217a3b30d71d35f5b648), [`5bdbcf9c`](https://github.com/lemonmade/quilt/commit/5bdbcf9c298d653dafca4996a5c28ff48829ed4e), [`f77bde37`](https://github.com/lemonmade/quilt/commit/f77bde37658273c205980b74cdd53805c56e2d9d)]:
  - @quilted/craft@0.1.78
  - @quilted/quilt@0.5.74

## 0.1.27

### Patch Changes

- [`65db3731`](https://github.com/lemonmade/quilt/commit/65db37312192507643bafa672a29d8e63cce823f) Thanks [@lemonmade](https://github.com/lemonmade)! - Force another version bump

- Updated dependencies [[`65db3731`](https://github.com/lemonmade/quilt/commit/65db37312192507643bafa672a29d8e63cce823f)]:
  - @quilted/craft@0.1.76
  - @quilted/quilt@0.5.73
  - @quilted/sewing-kit@0.2.23

## 0.1.26

### Patch Changes

- [`0735184`](https://github.com/lemonmade/quilt/commit/073518430d0fcabab7a2db9c76f8a69dac1fdea5) Thanks [@lemonmade](https://github.com/lemonmade)! - Publish new latest versions

- Updated dependencies [[`0735184`](https://github.com/lemonmade/quilt/commit/073518430d0fcabab7a2db9c76f8a69dac1fdea5)]:
  - @quilted/craft@0.1.75
  - @quilted/quilt@0.5.72
  - @quilted/sewing-kit@0.2.22

## 0.1.25

### Patch Changes

- [#203](https://github.com/lemonmade/quilt/pull/203) [`2a5063f`](https://github.com/lemonmade/quilt/commit/2a5063fe8e949eaa7829dd5685901b67a06c09c8) Thanks [@lemonmade](https://github.com/lemonmade)! - Fix test files being included in TypeScript output

- Updated dependencies [[`2a5063f`](https://github.com/lemonmade/quilt/commit/2a5063fe8e949eaa7829dd5685901b67a06c09c8), [`2a5063f`](https://github.com/lemonmade/quilt/commit/2a5063fe8e949eaa7829dd5685901b67a06c09c8)]:
  - @quilted/craft@0.1.72
  - @quilted/quilt@0.5.70
  - @quilted/sewing-kit@0.2.20

## 0.1.24

### Patch Changes

- [`937a890`](https://github.com/lemonmade/quilt/commit/937a89009924a7b1d9e2a102028efd97928396e3) Thanks [@lemonmade](https://github.com/lemonmade)! - Improve base TypeScript preset

- Updated dependencies [[`937a890`](https://github.com/lemonmade/quilt/commit/937a89009924a7b1d9e2a102028efd97928396e3)]:
  - @quilted/craft@0.1.71
  - @quilted/quilt@0.5.69
  - @quilted/sewing-kit@0.2.19

## 0.1.23

### Patch Changes

- [#190](https://github.com/lemonmade/quilt/pull/190) [`9bf454a`](https://github.com/lemonmade/quilt/commit/9bf454aaefc7ac6b85060fc5493b6b3ee4e2b526) Thanks [@lemonmade](https://github.com/lemonmade)! - Add easy environment variables

- Updated dependencies [[`9bf454a`](https://github.com/lemonmade/quilt/commit/9bf454aaefc7ac6b85060fc5493b6b3ee4e2b526)]:
  - @quilted/craft@0.1.68
  - @quilted/quilt@0.5.64

## 0.1.22

### Patch Changes

- [#185](https://github.com/lemonmade/quilt/pull/185) [`3b9a758`](https://github.com/lemonmade/quilt/commit/3b9a758c5703aa63b93a736e33f88a3bfa393fb8) Thanks [@lemonmade](https://github.com/lemonmade)! - Improve package entry declarations

- Updated dependencies [[`3b9a758`](https://github.com/lemonmade/quilt/commit/3b9a758c5703aa63b93a736e33f88a3bfa393fb8)]:
  - @quilted/craft@0.1.67
  - @quilted/quilt@0.5.63
  - @quilted/sewing-kit@0.2.18

## 0.1.21

### Patch Changes

- [`917ea19`](https://github.com/lemonmade/quilt/commit/917ea19edbd8ad210675b11ef7f2ebe0c33e0b3e) Thanks [@lemonmade](https://github.com/lemonmade)! - Fixed dependencies to support stricter pnpm-based project

- Updated dependencies [[`917ea19`](https://github.com/lemonmade/quilt/commit/917ea19edbd8ad210675b11ef7f2ebe0c33e0b3e)]:
  - @quilted/craft@0.1.52
  - @quilted/quilt@0.5.58
  - @quilted/sewing-kit@0.2.14
