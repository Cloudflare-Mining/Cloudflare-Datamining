# express-jwt-authz ![](https://travis-ci.org/auth0/express-jwt-authz.svg?branch=master)

Validate a JWTs `scope` to authorize access to an endpoint.

## Install

    $ npm install express-jwt-authz

> `express@^4.0.0` is a peer dependency. Make sure it is installed in your project.

## Usage

Use together with [express-jwt](https://github.com/auth0/express-jwt) to both validate a JWT and make sure it has the correct permissions to call an endpoint.

```javascript
var jwt = require('express-jwt');
var jwtAuthz = require('express-jwt-authz');

var options = {};
app.get('/users',
  jwt({ secret: 'shared_secret' }),
  jwtAuthz([ 'read:users' ], options),
  function(req, res) { ... });
```

If multiple scopes are provided, the user must have _at least one_ of the specified scopes.

```javascript
app.post('/users',
  jwt({ secret: 'shared_secret' }),
  jwtAuthz([ 'read:users', 'write:users' ], {}),
  function(req, res) { ... });

// This user will be granted access
var authorizedUser = {
  scope: 'read:users'
};
```

To check that the user has _all_ the scopes provided, use the `checkAllScopes: true` option:

```javascript
app.post('/users',
  jwt({ secret: 'shared_secret' }),
  jwtAuthz([ 'read:users', 'write:users' ], { checkAllScopes: true }),
  function(req, res) { ... });

// This user will have access
var authorizedUser = {
  scope: 'read:users write:users'
};

// This user will NOT have access
var unauthorizedUser = {
  scope: 'read:users'
};
```

The JWT must have a `scope` claim and it must either be a string of space-separated permissions or an array of strings. For example:

```
// String:
"write:users read:users"

// Array:
["write:users", "read:users"]
```

## Options

- `failWithError`: When set to `true`, will forward errors to `next` instead of ending the response directly. Defaults to `false`.
- `checkAllScopes`: When set to `true`, all the expected scopes will be checked against the user's scopes. Defaults to `false`.
- `customUserKey`: The property name to check for the scope key. By default, permissions are checked against `req.user`, but you can change it to be `req.myCustomUserKey` with this option. Defaults to `user`.
- `customScopeKey`: The property name to check for the actual scope. By default, permissions are checked against `user.scope`, but you can change it to be `user.myCustomScopeKey` with this option. Defaults to `scope`.


## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. Please do not report security vulnerabilities on the public GitHub issue tracker. The [Responsible Disclosure Program](https://auth0.com/whitehat) details the procedure for disclosing security issues.

## Author

[Auth0](https://auth0.com)

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
