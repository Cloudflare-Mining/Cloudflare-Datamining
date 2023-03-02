# @cloudflare/component-code-block

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
