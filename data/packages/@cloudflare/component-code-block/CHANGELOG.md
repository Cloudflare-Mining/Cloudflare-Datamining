# @cloudflare/component-code-block

## 5.0.0

### Patch Changes

- Updated dependencies [adc3d4c834]
- Updated dependencies [2061cf4285]
  - @cloudflare/component-icon@12.0.0
  - @cloudflare/component-button@8.0.0

## 4.2.16

### Patch Changes

- @cloudflare/component-button@7.0.25

## 4.2.15

### Patch Changes

- @cloudflare/component-button@7.0.24

## 4.2.14

### Patch Changes

- @cloudflare/component-button@7.0.23

## 4.2.13

### Patch Changes

- @cloudflare/component-button@7.0.22

## 4.2.12

### Patch Changes

- @cloudflare/component-button@7.0.21

## 4.2.11

### Patch Changes

- @cloudflare/component-button@7.0.20

## 4.2.10

### Patch Changes

- @cloudflare/component-button@7.0.19

## 4.2.9

### Patch Changes

- @cloudflare/component-button@7.0.18

## 4.2.8

### Patch Changes

- @cloudflare/component-button@7.0.17

## 4.2.7

### Patch Changes

- @cloudflare/component-button@7.0.16

## 4.2.6

### Patch Changes

- @cloudflare/component-button@7.0.15

## 4.2.5

### Patch Changes

- @cloudflare/component-button@7.0.14

## 4.2.4

### Patch Changes

- Updated dependencies [c08dae243d]
- Updated dependencies [be29448d64]
  - @cloudflare/component-button@7.0.13

## 4.2.3

### Patch Changes

- fc30dc7110: update peer dependencies
- Updated dependencies [fc30dc7110]
  - @cloudflare/component-tooltip@4.3.2
  - @cloudflare/component-visually-hidden@1.0.86
  - @cloudflare/elements@3.0.3
  - @cloudflare/component-button@7.0.12

## 4.2.2

### Patch Changes

- Updated dependencies [52f9f28c13]
  - @cloudflare/component-tooltip@4.3.1

## 4.2.1

### Patch Changes

- Updated dependencies [c7299ac5ac]
  - @cloudflare/component-tooltip@4.3.0

## 4.2.0

### Minor Changes

- ed343e4320: Add packages used as dependencies

## 4.1.3

### Patch Changes

- Updated dependencies [61a5dfdb30]
  - @cloudflare/component-button@7.0.11

## 4.1.2

### Patch Changes

- @cloudflare/component-button@7.0.10

## 4.1.1

### Patch Changes

- Updated dependencies [8f95dab06a]
  - @cloudflare/elements@3.0.2
  - @cloudflare/component-button@7.0.9

## 4.1.0

### Minor Changes

- 6d4a6d825f: Added html language support

  Also fixed dark mode issues

## 4.0.0

### Major Changes

- db791be14b: - Slimmer display for content that is only one line long with inline copy button
  - Removes "click to copy" text below in favor of a tooltip on the copy button and having it always be visible
  - Adds `@radix-ui/react-scroll-area` for consistent slim cross platform scrollbars
  - BREAKING CHANGE: DOM structure changed, so styles applied externally may no longer work as expected.

## 3.0.8

### Patch Changes

- @cloudflare/component-button@7.0.8

## 3.0.7

### Patch Changes

- @cloudflare/component-button@7.0.7

## 3.0.6

### Patch Changes

- @cloudflare/component-button@7.0.6

## 3.0.5

### Patch Changes

- @cloudflare/component-button@7.0.5

## 3.0.4

### Patch Changes

- @cloudflare/component-button@7.0.4

## 3.0.3

### Patch Changes

- @cloudflare/component-button@7.0.3

## 3.0.2

### Patch Changes

- @cloudflare/component-button@7.0.2

## 3.0.1

### Patch Changes

- @cloudflare/component-button@7.0.1

## 3.0.0

### Patch Changes

- Updated dependencies [54ebdb53f4]
  - @cloudflare/component-icon@11.0.0
  - @cloudflare/component-button@7.0.0

## 2.0.1

### Patch Changes

- @cloudflare/component-button@6.0.2

## 2.0.0

### Major Changes

- 1b7c5ab296: Move @cloudflare/component-icon to peerDeps for all consuming packages

### Patch Changes

- Updated dependencies [1b7c5ab296]
  - @cloudflare/component-button@6.0.0
  - @cloudflare/component-icon@10.0.0

## 1.3.0

### Minor Changes

- 89420f2673: Support dark mode in the Cloudflare dashboard (previously this component always used the system dark mode)

## 1.2.0

### Minor Changes

- eb8af184e6: Adds a `hideUi` option to choose not to display UI provided outside the bounds of the highlighted code ("Copy code to clipboard" button, and rounded corners")

## 1.1.0

### Minor Changes

- 184bcaabc9: Modify the babel build scripts to ensure .css files are included

## 1.0.1

### Patch Changes

- 45140b3e68: Create Code Block component, for syntax highlighting code in React apps:

  ```ts
  import CodeBlock, { TabbedCodeBlock } from '@cloudflare/component-code-block';
  ```

  The `CodeBlock` component is what you'll use if you need a single highlighted code block:

  ```tsx
  <CodeBlock language="js" code="console.log('hi')" />
  ```

  `TabbedCodeBlock` is what you'll use if you need to support multiple languages (or options) for a single code block, which will render with tabs for each option:

  ```tsx
  <TabbedCodeBlock
    options={{
      npm: {
        language: 'sh',
        code: 'npm i left-pad'
      },
      yarn: {
        language: 'sh',
        code: 'yarn add left-pad'
      }
    }}
  />
  ```
