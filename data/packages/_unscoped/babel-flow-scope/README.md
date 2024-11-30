# babel-flow-scope

> Collect [Flow](https://flow.org/) bindings in a given scope

```js
import type foo from "mod";
type baz<bar> = {};
```

```js
import {getFlowBindingsInScope} from 'babel-flow-scope';

getFlowBindingsInScope(path);
// {
//   foo: {
//     kind: 'import',
//     path: (Identifier)
//   },
//   bar: {
//     kind: 'param',
//     path: (TypeParameter)
//   },
//   baz: {
//     kind: 'declaration',
//     path: (Identifier)
//   }
// }
```

## API

#### `getFlowScopePath(path)`

Find the closest path to a Flow scope.

#### `getFlowBindingsInScope(path)`

Retreive all the Flow bindings in the local Flow scope.

#### `findFlowBinding(path, name)`

Search for a binding in the current scope and parent scopes.
