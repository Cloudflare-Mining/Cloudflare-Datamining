### 1.4.3

Disallow access to prototype chain (CVE-2024-54152) when using compile with locals (two arguments in the called function) :

```js
compile("__proto__")({}, {});
```

=> This now returns undefined, previously it would give you the `__proto__` instance which would allow Remote Code Execution.

Thanks to [@JorianWoltjer](https://github.com/JorianWoltjer) who found the vulnerability and reported it.

### 1.4.2

Make `handleThis` the default if you use the `Lexer` and `Parser` directly, and you don't use `.compile`.

This is a way less common use case but it makes sense to have handleThis be the same default for both cases.

(This also makes the library behave in the same way between 1.3.0 and 1.4.1 when using Parser or Lexer). There was a backwards incompatible change brought by 1.4.0 for users of `Parser`.

### 1.4.1

Don't use this version, it is missing a commit for the 1.4.2 fix

### 1.4.0

Add support for `handleThis: false` to disable handling of this.

(By default handleThis is true).

This way, if you write : `{this | filter}`, the `this` will be used as a key
from the scope, eg `scope["this"]`.

### 1.3.0

Add support for template literals.

It is now possible to write :

```js
compile("`Hello ${user}`")({ user: "John" });
// Returns "Hello John"
```

### 1.2.1

Bugfix `compile(tag, { csp: true })` should now work correctly.

### 1.2.0

Add four options to the second arg of the compile method :

- `compile(tag, {filters: { upper: (input) => input.toUpperCase()}})` which adds filters to a specific instance (those filters are not shared between instances).

- `compile(tag, {cache: {}})` to set a "non global" cache.

- `compile(tag, { csp: true })` to use the interpreter (avoid use of "new Function()" which is for example not allowed in Vercel).

- `compile(tag, {literals: { true: true, false: false, null: null, undefined: undefined } })` which allows to customize literals (such as null, true, false, undefined)

### 1.1.10

Update typescript typings for "Parser"

### 1.1.9

Update typescript typings (add `.assign` method)

### 1.1.8

Update typescript typings (add filters).

### 1.1.7

Add typescript typings (for compile, Parser and Lexer).

### 1.1.6

Published by mistake (same as 1.1.7), but without dependency changes

### 1.1.5

Add specific error when a filter is not defined.

### 1.1.4

Bugfix : When using an assignment expression, such as `b = a`, the value will always be set in the scope, not in the locals.

With this code :

```js
const scope = { a: 10 };
const locals = { b: 5 };
compile("b=a")(scope, locals);
```

The scope value will be `{ a: 10, b: 10 }` after the evaluation.

In previous versions, the value would be assigned to the locals, meaning locals would be `{ b: 10 }`

### 1.1.3

Bugfix : Make module ES5 compatible (to work in IE10 for example), by using var instead of const

### 1.1.2

- Disallow access to prototype chain (CVE-2021-21277)

### 1.1.1

Previous version was published with ES6 feature, now the published JS uses ES5 only

### 1.1.0

- Add support for special characters by using the following :

```javascript
function validChars(ch) {
  return (
    (ch >= "a" && ch <= "z") ||
    (ch >= "A" && ch <= "Z") ||
    ch === "_" ||
    ch === "$" ||
    "ÀÈÌÒÙàèìòùÁÉÍÓÚáéíóúÂÊÎÔÛâêîôûÃÑÕãñõÄËÏÖÜŸäëïöüÿß".indexOf(ch) !== -1
  );
}
evaluate = compile("être_embarassé", {
  isIdentifierStart: validChars,
  isIdentifierContinue: validChars,
});

evaluate({ être_embarassé: "Ping" });
```

### 1.0.1

- Disallow access to prototype chain (CVE-2020-5219)

### 1.0.0

- Add support for `this` keyword to write :

```javascript
evaluate = compile("this + 2")(2); // which gives 4
```
