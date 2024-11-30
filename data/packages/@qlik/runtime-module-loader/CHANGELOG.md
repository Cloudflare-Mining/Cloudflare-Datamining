# @qlik/runtime-module-loader

## 1.0.14

### Patch Changes

- Updated dependencies [9f031db]
  - @qlik/embed-runtime@1.2.3

## 1.0.13

### Patch Changes

- Updated dependencies [ab50bf7]
  - @qlik/embed-runtime@1.2.2

## 1.0.12

### Patch Changes

- 4717843: feat: Better error reporting
- Updated dependencies [9844d4f]
  - @qlik/embed-runtime@1.2.1

## 1.0.11

### Patch Changes

- Updated dependencies [456a848]
- Updated dependencies [62fcc63]
  - @qlik/embed-runtime@1.2.0

## 1.0.10

### Patch Changes

- Updated dependencies [50f60f2]
  - @qlik/embed-runtime@1.1.6

## 1.0.9

### Patch Changes

- 094f710: chore: update npm dependencies
- Updated dependencies [094f710]
  - @qlik/embed-runtime@1.1.5

## 1.0.8

### Patch Changes

- feed87c: chore: update npm dependencies
- Updated dependencies [feed87c]
  - @qlik/embed-runtime@1.1.4

## 1.0.7

### Patch Changes

- a330819: chore: update npm dependencies
- Updated dependencies [44d15c2]
- Updated dependencies [a330819]
  - @qlik/embed-runtime@1.1.3

## 1.0.6

### Patch Changes

- Updated dependencies [5961fa7]
  - @qlik/embed-runtime@1.1.2

## 1.0.5

### Patch Changes

- Updated dependencies [730dd0a]
  - @qlik/embed-runtime@1.1.1

## 1.0.4

### Patch Changes

- Updated dependencies [757b8f6]
- Updated dependencies [1efc7ed]
  - @qlik/embed-runtime@1.1.0

## 1.0.3

### Patch Changes

- Updated dependencies [1cea463]
  - @qlik/embed-runtime@1.0.3

## 1.0.2

### Patch Changes

- 7e4638b: Reapply revert done for web-components 1.1.2->1.1.3
- Updated dependencies [7e4638b]
  - @qlik/embed-runtime@1.0.2

## 1.0.1

### Patch Changes

- 596ceb0: Revert 4856cb1 due to problems with script loading
- Updated dependencies [596ceb0]
  - @qlik/embed-runtime@1.0.1

## 1.0.0

### Major Changes

- 4856cb1: Qlik Embed Libraries are now ES-module only.

  ### What has changed

  The files produced by the qlik-embed libraries are now only es-modules. A node script using commonjs can no longer
  `require` a file from e.g. `@qlik/embed-react`. Instead they need to be imported as in

  ```js
  import { QlikEmbed } from "@qlik/embed-react";
  // and/or
  import type { EmbedVanillaRuntimeApiV1 } from "@qlik/embed-runtim/embed";
  ```

### Patch Changes

- Updated dependencies [4856cb1]
  - @qlik/embed-runtime@1.0.0

## 0.2.7

### Patch Changes

- 212ceab: fix: support qlik-embed on windows

## 0.2.6

### Patch Changes

- Updated dependencies [5a0ec0a]
  - @qlik/embed-runtime@0.7.0

## 0.2.5

### Patch Changes

- Updated dependencies [182eea8]
  - @qlik/embed-runtime@0.6.4

## 0.2.4

### Patch Changes

- Updated dependencies [b4ea5b8]
  - @qlik/embed-runtime@0.6.3

## 0.2.3

### Patch Changes

- Updated dependencies [5a4ae12]
  - @qlik/embed-runtime@0.6.2

## 0.2.2

### Patch Changes

- ec0f5aa: fix: add main.js promises on window

## 0.2.1

### Patch Changes

- 05f024a: Update description in package.json
- Updated dependencies [05f024a]
  - @qlik/embed-runtime@0.6.1

## 0.2.0

### Minor Changes

- 4f7f631: Update Readme.md - package no longer experimental

### Patch Changes

- Updated dependencies [4f7f631]
  - @qlik/embed-runtime@0.6.0

## 0.1.15

### Patch Changes

- Updated dependencies [3200f68]
  - @qlik/embed-runtime@0.5.10

## 0.1.14

### Patch Changes

- 27a36b8: feat: expose more runtime modules
- Updated dependencies [27a36b8]
  - @qlik/embed-runtime@0.5.9

## 0.1.13

### Patch Changes

- 03c6ec9: Update npm dependencies
- Updated dependencies [891eb70]
- Updated dependencies [03c6ec9]
  - @qlik/embed-runtime@0.5.8

## 0.1.12

### Patch Changes

- 97f542f: fix: update types for auth
- Updated dependencies [97f542f]
  - @qlik/embed-runtime@0.5.7

## 0.1.11

### Patch Changes

- 58d0724: chore: update npm dependencies
- Updated dependencies [58d0724]
  - @qlik/embed-runtime@0.5.6

## 0.1.10

### Patch Changes

- 04a1e61: chore: update npm dependencies
- Updated dependencies [04a1e61]
  - @qlik/embed-runtime@0.5.5

## 0.1.9

### Patch Changes

- Updated dependencies [7005680]
  - @qlik/embed-runtime@0.5.4

## 0.1.8

### Patch Changes

- Updated dependencies [fe96872]
  - @qlik/embed-runtime@0.5.3

## 0.1.7

### Patch Changes

- Updated dependencies [50d12d6]
  - @qlik/embed-runtime@0.5.2

## 0.1.6

### Patch Changes

- 0cddb33: chore: update npm dependencies
- Updated dependencies [0cddb33]
  - @qlik/embed-runtime@0.5.1

## 0.1.5

### Patch Changes

- 9eb361e: Update npm dependencies
- Updated dependencies [9eb361e]
- Updated dependencies [9eb361e]
  - @qlik/embed-runtime@0.5.0

## 0.1.4

### Patch Changes

- f510663: add unit tests

## 0.1.3

### Patch Changes

- Updated dependencies [457bbb9]
  - @qlik/embed-runtime@0.4.0

## 0.1.2

### Patch Changes

- Updated dependencies [81b5bb5]
  - @qlik/embed-runtime@0.3.0

## 0.1.1

### Patch Changes

- Updated dependencies [d94f769]
  - @qlik/embed-runtime@0.2.0

## 0.1.0

### Minor Changes

- de776bc: Support "node" and "nodenext" AND "type": "module" scenarios when using this package

### Patch Changes

- Updated dependencies [de776bc]
  - @qlik/embed-runtime@0.1.0

## 0.0.7

### Patch Changes

- Updated dependencies [d6de353]
  - @qlik/embed-runtime@0.0.7

## 0.0.6

### Patch Changes

- 28199c4: Add license to package
- Updated dependencies [28199c4]
  - @qlik/embed-runtime@0.0.6

## 0.0.5

### Patch Changes

- 4bd5812: update npm depencencies
- Updated dependencies [4bd5812]
  - @qlik/embed-runtime@0.0.5

## 0.0.4

### Patch Changes

- 3fdf4bd: proper exports
- Updated dependencies [3fdf4bd]
  - @qlik/embed-runtime@0.0.4

## 0.0.3

### Patch Changes

- 6ac9be9: Release with built files
- Updated dependencies [6ac9be9]
  - @qlik/embed-runtime@0.0.3

## 0.0.2

### Patch Changes

- 0c3e0af: initial release
- Updated dependencies [0c3e0af]
  - @qlik/embed-runtime@0.0.2
