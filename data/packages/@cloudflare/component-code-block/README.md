# component-code-block

> Syntax highlighting for your code!

This uses the PrismJS highlighter to highlight code passed to it, with support for all the usual language suspects (JS, TS etc...) plus a few custom ones for Cloudflare (`sh` for shell scripts, and `toml` for TOMl).

## API

This library exports two components:
```ts
import CodeBlock, { TabbedCodeBlock } from "@cloudflare/component-code-block"
```

The `CodeBlock` component is what you'll use if you need a single highlighted code block:

```tsx
<CodeBlock language="js" code="console.log('hi')"/>
```

`TabbedCodeBlock` is what you'll use if you need to support multiple languages (or options) for a single code block, which will render with tabs for each option:

```tsx
<TabbedCodeBlock options={{npm: {language: 'sh', code: 'npm i left-pad'}, yarn: {language: 'sh', code: 'yarn add left-pad'}}} />

## Installation

```sh
$ npm install @cloudflare/component-code-block
```
