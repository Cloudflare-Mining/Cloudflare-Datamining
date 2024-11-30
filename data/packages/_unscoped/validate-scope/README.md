# validate-scope
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fmarcbachmann%2Fvalidate-scope.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fmarcbachmann%2Fvalidate-scope?ref=badge_shield)


Checks whether a subset is contained in a list of scopes.
Uses code generation to reach better performance.

```js
const validateScope = require('validate-scope')

// Check only one scope
const validate = validateScope(['user:edit'])

// pass an array
validate(['profile', 'user:edit']) // returns true
validate(['profile', 'another-scope']) // returns false

// or a string of scopes separated by whitespaces
validate('profile user:edit user:archive') // returns true

// or check multiple scopes
const validate = validateScope('user:edit AND user:archive')
validate('profile user:edit') // returns false
validate('profile user:edit user:archive') // returns true

// you can use more complex boolean expressions
const validate = validateScope('first && second && !third')
validate(['first']) // returns false
validate(['first', 'second']) // returns true
validate(['first', 'second', 'third']) // returns false
```

# Api

```js
const validateScope = require('validate-scope')
```

```js
const validate = validateScope(array|string)
validate(array|string) // returns boolean
```


```js
const validate = validateScope('(user:edit AND user:archive) OR admin)')
validate.scopes
// ['user:edit', 'user:archive', 'admin']
```


I suggest you to save your scopes as array and also pass that to this validation method. String operations are quite slow.


# Benchmark

100000000 iterations each
```bash
NANOBENCH version 1

# validate("some space separate scopes")
  end ~3.51 s (3 s + 513290216 ns)
# validate(["some", "scopes", "as", "array"])
  end ~599 ms (0 s + 598547467 ns)
# traditional string split & array indexOf
  end ~8.58 s (8 s + 583230771 ns)
# traditional for loop & array indexOf
  end ~694 ms (0 s + 693684995 ns)

# total ~13 s (13 s + 388753449 ns)

# ok
```


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fmarcbachmann%2Fvalidate-scope.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fmarcbachmann%2Fvalidate-scope?ref=badge_large)
