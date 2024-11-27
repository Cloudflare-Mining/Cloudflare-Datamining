# vue-turnstile

[![npm version](https://badge.fury.io/js/vue-turnstile.svg)](https://www.npmjs.com/package/vue-turnstile)

A [Cloudflare Turnstile](https://developers.cloudflare.com/turnstile/) library for Vue 3

## Installation

Add `vue-turnstile` to your Javascript project dependencies using Yarn:

```bash
yarn add vue-turnstile
```

Or NPM:

```bash
npm install vue-turnstile --save
```

## Usage

```vue
<script lang="ts">
import VueTurnstile from 'vue-turnstile';

export default {
  components: { VueTurnstile },

  data() {
    return {
      token: '',
    };
  },
};
</script>

<template>
  <div>
    <vue-turnstile site-key="1x00000000000000000000AA" v-model="token" />
    <div>Token: {{ token }}</div>
  </div>
</template>
```

## Customization options

| Prop            | Type                                          | Description                                                                                                                                                  | Required | Default    |
| --------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | ---------- |
| site-key        | `String`                                      | Your Turnstile sitekey - [Docs](https://developers.cloudflare.com/turnstile/get-started/)                                                                    | Yes      | N/A        |
| v-model         | `String`                                      | Binding that contains the token returned by the Turnstile widget                                                                                             | Yes      | N/A        |
| reset-interval  | `Number`                                      | Get a fresh token after `reset-interval` milliseconds - Turnstile tokens only last for 5 minutes                                                             | No       | `295000`   |
| size            | `'normal' \| 'flexible' \| 'compact'`                       | Widget size                                                                                                                                                  | No       | `'normal'` |
| theme           | `'light' \| 'dark' \| 'auto'`                 | Widget theme - auto respects the user's browser preference                                                                                                   | No       | `'auto'`   |
| action          | `String`                                      | A customer value that can be used to differentiate widgets under the same sitekey in analytics and which is returned upon validation.                        | No       | `''`       |
| appearance      | `'always' \| 'execute' \| 'interaction-only'` | Appearance controls when the widget is visible - [Docs](https://developers.cloudflare.com/turnstile/get-started/client-side-rendering/#appearance-modes)     | No       | `'always'` |
| render-on-mount | `Boolean`                                     | Automatically render Turnstile widget after component mounts                                                                                                 | No       | `true`     |
| language        | `String`                                      | Language to display - ISO 639-1 two-letter language code - [Supported languages](https://developers.cloudflare.com/turnstile/reference/supported-languages/) | No       | `auto`     |

## Methods

| Method     | Description        |
| ---------- | ------------------ |
| `reset()`  | Resets the widget  |
| `render()` | Renders the widget |


## Events

| Method                   | Params  | Description                                                                           |
| ------------------------ | ------- | ------------------------------------------------------------------------------------- |
| `@error`                 | `code`  | Callback invoked when there is an error (e.g. network error or the challenge failed). |
| `@unsupported`           | -       | Callback invoked when a given client/browser is not supported by Turnstile.           |
| `@expired`               | -       | Callback invoked when the token expires and does not reset the widget.                |
| `@before-interactive`    | -       | Callback invoked before the challenge enters interactive mode.                        |
| `@after-interactive`     | -       | callback invoked when challenge has left interactive mode.                            |


## Author

Rui Gomes  
https://ruigomes.me

## License

The MIT License (MIT). Please see [LICENSE file](https://github.com/ruigomeseu/vue-turnstile/blob/main/LICENSE.md) for more information.
