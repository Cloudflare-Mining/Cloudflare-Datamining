# eslint-plugin-sparrow

A list of recommended rules for @cloudflare/util-sparrow

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ yarn -D eslint
```

Next, install `eslint-plugin-sparrow`:

```
$ yarn -D eslint-plugin-sparrow
```

**Note:** If you installed ESLint globally (using the `yarn global` flag) then
you must also install `eslint-plugin-sparrow` globally.

## Usage

Add `sparrow` to the plugins section of your `.eslintrc` configuration file. You
can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["sparrow"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "sparrow/rule-name": 2
  }
}
```

## Supported Rules

# This rule checks for category in sparrow event calls (no-missing-category)

The sparrow track call requires a category in the payload. Google analytics will
drop any call made without a category.

## Rule Details

Note: The plugin will only throw errors for files in which the `track` function is imported from '@cloudflare/util-sparrow'. 

Example of **incorrect** code for this rule:

```js
/*eslint no-debugger: "error"*/

track('event',{test:'test'});,

track();,

sparrow.track('event',{test:'test'});,

sparrow.track();
```

Example of **correct** code for this rule:

```js
/*eslint no-missing-category: "error"*/

track('event',{test:'test','category':something});,

track('event',{test:'test',category:'something'});,

sparrow.track('event',{test:'test','category':'something',label:'something'});,

sparrow.track('event',{test:'test',category:'something',label:'something'});
```
