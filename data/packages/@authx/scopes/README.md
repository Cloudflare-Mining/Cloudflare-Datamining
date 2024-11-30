# Scopes

This is a small collection of utility functions for AuthX scopes. These scopes are human-readable, fully OAuth2-compatible, and support both pattern matching and set algebra.

---

[Anatomy of a Scope](#anatomy-of-a-scope) | [Installation](#installation) | [API](#api) | [Development](#development)

---

## Anatomy of a Scope

Scopes are composed of 3 domains, separated by the `:` character:

```
billing:customer.abc:read.basic
|_____| |__________| |________|
   |         |           |
 realm    context      action
```

Each domain contains segments, separated by the `.` character.

### Scope Literals

A _scope literal_ – the form a scope always takes in a token, a grant, or on an authorization – is fully defined and ready to be used by a resource.

Segments in scope literals can be:

- The "single any" symbol: `*`
- The "multiple any" symbol: `**`
- A "substitution segment" matching the pattern: `/[a-zA-Z0-9_-]*/`

For example, these are all valid _scope literals_:

```
billing:customer.abc:read.basic
billing:customer.*:*.basic
billing:**:read.*
```

### Scope Templates

A _scope template_ is a contravariant (a superset) of a _scope literal_. In addition to the values allowed in the segments of a _scope literal_, the segments of a _scope template_ may contain:

- A "template segment" matching the pattern: `/^\{[a-zA-Z0-9_-]+\}$/`

For example, these are all valid _scope templates_:

```
billing:customer.{current_user_id}:read.basic
authx:v2.authorization..*.{current_client_id}..{current_grant_id}..{current_user_id}:**
```

The purpose of a scope template is to describe a scope where a value is not currently known, but will be known at the time of grant creation or authorization creation. Scope templates are never passed in a token or authorization.

### Parameterized Scope

A _parameterized scope_ is a bivariant (a superset in one way, and a subset in another) of a _scope literal_. In addition to the values allowed in the segments of a _scope literal_, the segments of a _parameterized scope_ may contain:

- A "parameterized segment" matching the pattern: `/^\([a-zA-Z0-9_-]+\)$/`

A domain in a _parameterized scope_ must not contain the "multiple any" symbol on both sides of a "parameterized segment" as the position of the "parameterized segment" would become ambiguous.

For example, these are all valid _parameterized scopes_:

```
billing:customer.(user_id):read.basic
authx:v2.authorization..*.(client_id)..(grant_id)..(current_user_id):**
authx:v2.**.(client_id)..(grant_id)..(current_user_id):**
```

However, the following is invalid:

```
authx:v2.**.(client_id)..**:**
```

The purpose of a parameterized scope is to extract a value from a particular scope literal. This is useful for resources, where knowing a value before starting an operation is preferable to checking the scope after an operation has begun. For example, an application may want to know all possible values of `user_id` given the parameterized scope `billing:customer.(user_id):read.basic` BEFORE querying a database.

Parameterized scopes are never passed in a token or authorization.

### Parameterized Scope Template

Certain functions accept a parameterized scope template, allowing both "parameterized segments" and "template segments".

## Installation

Install with `npm install --save @authx/scopes`

## API

Please see [the tests](src/index.test.ts) for complete examples.

### isValidScope

- ```ts
  isValidScope(scope: string): boolean
  isValidScope(collection: string[]): boolean
  ```

Validate that a scope is correctly formatted.

```js
import { validate } from "@authx/scopes";

validate("realm:context.identifier:action.**");
// => true

validate("realm:context.{identifier}:action");
// => false

validate("realm:context.***:action");
// => false
```

### isValidScopeTemplate

- ```ts
  isValidScope(scope: string): boolean
  isValidScope(collection: string[]): boolean
  ```

Validate that a scope template is correctly formatted.

```js
import { validate } from "@authx/scopes";

validate("realm:context.identifier:action.**");
// => true

validate("realm:context.{identifier}:action");
// => true

validate("realm:context.***:action");
// => false
```

### normalize

- ```ts
  normalize(scope: string): string
  normalize(collection: string[]): string[]
  ```
- **_throws `InvalidScopeError` if the scope is invalid._**

Normalize a scope into its simplest representation.

```js
import { normalize } from "@authx/scopes";

normalize("realm:**.**:action");
// => 'realm:*.**:action'
```

### simplify

- ```ts
  simplify(collection: string[]): string[]
  ```
- **_throws `InvalidScopeError` if any scopes in `collection` are invalid._**

Simplify the collection of scopes in `collection` by omiting any scopes that are a made redundant by another scope in the collection. All scopes in the returned collection are normalized.

```js
import { simplify } from "@authx/scopes";

simplify(["realm:resource.*:action", "realm:**:action"]);
// => ["realm:**:action"]
```

### isEqual

- ```ts
  isEqual(scopeOrCollectionA: string[] | string, scopeOrCollectionB: string[] | string): boolean
  ```
- **_throws `InvalidScopeError` if any scopes in `scopeOrCollectionA` or `scopeOrCollectionB` are invalid._**

Check whether `scopeOrCollectionA` and `scopeOrCollectionB` are the same, ignoring redundant scopes.

```js
import { getIntersection } from "@authx/scopes";

getIntersection(["realm:**:*"], ["realm:**:action", "realm:**:*"]);
// => true
```

### isSuperset

- ```ts
  isSuperset(scopeOrCollectionA: string[] | string, scopeOrCollectionB: string[] | string): boolean
  ```
- **_throws `InvalidScopeError` if any scopes in `scopeOrCollectionA` or `scopeOrCollectionB` are invalid._**

Check whether `scopeOrCollectionA` is equal to, or a superset of `scopeOrCollectionB`. This is appropriate for checking if a user can perform a particular action.

```js
import { isSuperset } from "@authx/scopes";

isSuperset(["realm:**:*"], ["realm:**:action", "realm:**:*"]);
// => true
```

### isStrictSuperset

- ```ts
  isStrictSuperset(scopeOrCollectionA: string[] | string, scopeOrCollectionB: string[] | string): boolean
  ```
- **_throws `InvalidScopeError` if any scopes in `scopeOrCollectionA` or `scopeOrCollectionB` are invalid._**

Check whether `scopeOrCollectionA` is a strict superset of `scopeOrCollectionB`.

```js
import { isStrictSuperset } from "@authx/scopes";

isStrictSuperset(["realm:**:*"], ["realm:**:action", "realm:**:*"]);
// => false
```

### isSubset

- ```ts
  isSubset(scopeOrCollectionA: string[] | string, scopeOrCollectionB: string[] | string): boolean
  ```
- **_throws `InvalidScopeError` if any scopes in `scopeOrCollectionA` or `scopeOrCollectionB` are invalid._**

Check whether `scopeOrCollectionA` is equal to, or a subset of `scopeOrCollectionB`.

```js
import { isSubset } from "@authx/scopes";

isSubset(["realm:**:action", "realm:**:*"], ["realm:**:*"]);
// => true
```

### isStrictSubset

- ```ts
  isStrictSubset(scopeOrCollectionA: string[] | string, scopeOrCollectionB: string[] | string): boolean
  ```
- **_throws `InvalidScopeError` if any scopes in `scopeOrCollectionA` or `scopeOrCollectionB` are invalid._**

Check whether `scopeOrCollectionA` is a strict subset of `scopeOrCollectionB`.

```js
import { isStrictSubset } from "@authx/scopes";

isStrictSubset(["realm:**:action", "realm:**:*"], ["realm:**:*"]);
// => false
```

### getIntersection

- ```ts
  getIntersection(scopeOrCollectionA: string[] | string, scopeOrCollectionB: string[] | string): string[]
  ```
- **_throws `InvalidScopeError` if any scopes in `scopeOrCollectionA` or `scopeOrCollectionB` are invalid._**

Get the intersection of `scopeOrCollectionA` and `scopeOrCollectionB`, returning a collection of scopes that represent all intersections, or every ability common to both inputs.

```js
import { getIntersection } from "@authx/scopes";

getIntersection(["realm:resource.*:action.*"], ["realm:**:action.read"]);
// => ["realm:resource.*:action.read"]
```

### getDifference

- ```ts
  getDifference(collectionA: string[], collectionB: string[]): string[]
  ```
- **_throws `InvalidScopeError` if any scopes in `collectionA` or `collectionB` are invalid._**

Get the relative complement (or set difference) of `collectionA` and `collectionB`, returning a collection of scopes present in `collectionB` but NOT `collectionA`. The returned collection contains normalized scopes _as written in `collectionB`_, even if there is an intersection between the returned scope and `collectionA`.

```js
import { getDifference } from "@authx/scopes";

getDifference(
  ["realm:resource.*:action.*"],
  ["realm:resource.foo:action.read", "realm:other:action.read"],
);
// => ["realm:other:action.read"]
```

### hasIntersection

- ```ts
  hasIntersection(scopeOrCollectionA: string[] | string, scopeOrCollectionB: string[] | string): string[]
  ```
- **_throws `InvalidScopeError` if any scopes in `scopeOrCollectionA` or `scopeOrCollectionB` are invalid._**

Check whether `scopeOrCollectionA` and `scopeOrCollectionB` intersect. This is useful when checking if a user can perform any subset of the actions represented by the `subject` scope.

```js
import { hasIntersection } from "@authx/scopes";

hasIntersection(["realm:resource.*:action.*"], ["realm:**:action.read"]);
// => true
```

## Development

### Scripts

These scripts can be run using `npm run <script>`.

#### `format`

Use prettier to format the code in this package.

#### `lint`

Check the contents of this package against prettier and eslint rules.

#### `prepare`

Build the files from `/src` to the `/dist` directory with optimizations.

#### `prepare:development`

Build the files from `/src` to the `/dist` directory, and re-build as changes are made to source files.

#### `test`

Run all tests from the `/dist` directory.

#### `test:development`

Run all tests from the `/dist` directory, and re-run a test when it changes.

### Files

#### [/src](src/)

This holds the source code for the library.

#### [/dist](dist/)

The compiled and bundled code ends up here for distribution. This is ignored by git.
