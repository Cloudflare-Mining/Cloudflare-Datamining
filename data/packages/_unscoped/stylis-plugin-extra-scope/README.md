# stylis-plugin-extra-scope

[Stylis](https://github.com/thysultan/stylis.js) plugin which adds extra scope to each produced CSS rule.

> ⚠️ This plugin is currently compatible with Stylis 3.

## Example

```js
import Stylis from 'stylis'
import extraScopePlugin from 'stylis-plugin-extra-scope'

const stylis = new Stylis()
stylis.use(extraScopePlugin('#my-scope'))

const rules = stylis(
  '.some-class',
  `
  div {
    span {
      font-size: 14px;
    }
    background-color: rebeccapurple;
  }

  .other-class {
    margin: 20px;
  }
`,
)

console.log(rules) // "#my-scope .some-class div{background-color:rebeccapurple;}#my-scope .some-class div span{font-size:14px;}#my-scope .some-class .other-class{margin:20px;}"
```
