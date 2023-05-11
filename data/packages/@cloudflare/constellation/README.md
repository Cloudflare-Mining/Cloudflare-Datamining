# Constellation JS API

## Example

```js
import { Tensor, run } from '@cloudflare/constellation';


const input = [
    // Tensor(type: string, shape: Array<integer>, value: Array<number|bool|string>)
    new Tensor("int32", [2], [1, 2]),
    new Tensor("float64", [3, 2], [0.1, 0.2, 0.3, 0.4, 0.5, 0.6]),
    new Tensor("string", [1, 2], []),
]
const output = await run(env.MODEL, "model UUID", input)
```
