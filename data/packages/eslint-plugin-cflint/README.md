# eslint-plugin-cflint
> CloudFlare specific listing rules for [ESLint][ESLint].

## Installation
Install [ESLint][ESLint] either locally or globally.

```sh
$ npm install eslint
```

If you installed `ESLint` globally, you have to install CFLint plugin globally too.
Otherwise, install it locally.

```sh
$ npm install eslint-plugin-cflint
```

## Configuration
First, add `cflint` to your ESLint configuration's "plugin" section.

```json
{
  "plugins": [
    "cflint"
  ]
}
```

Then, enable all of the rules that you would like to use.

```json
{
  "rules": {
    "cflint/no-substr": 1,
    "cflint/no-this-assignment": 1
  }
}
```

## List of supported rules

* [no-substr](docs/no-substr.md): Prevent usage of `String.prototype.substr`
* [no-this-assignment](docs/no-this-assignment.md): Prevent assignment of `this`

## License

[MIT License][MIT].

[ESLint]: http://eslint.org
[MIT]: http://www.opensource.org/licenses/mit-license.php

