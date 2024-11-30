# simple-commit-message

> Simple commit message wizard and validator;
> works with commitizen and pre-git

[![NPM][simple-commit-message-icon] ][simple-commit-message-url]

[![ci status][ci image]][ci url]
[![semantic-release][semantic-image] ][semantic-url]
[![renovate-app badge][renovate-badge]][renovate-app]
[![manpm](https://img.shields.io/badge/manpm-%E2%9C%93-3399ff.svg)](https://github.com/bahmutov/manpm)
[![standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Purpose

This module can:

* parse simple commit message of the type `type(scope): message`
* validate a given message if it fits the above simple format
* guide the user with questions in order to form well formatted message

## Valid commit messages

### Simplest

```
major: breaking change in API
minor: this is a new feature
fix: an example fix message
```

### Synonyms

For convenience you can use synonyms:

* "break: ..." is synonym to "major: ..."
* "feat: ..." is synonym to "minor: ..."
* "patch: ..." is synonym to "fix: ..."

### Scopes

You can optionally put a *scope* for the commit. For example if you added
a new feature to the `log` feature of the module

```
feat(log): added colors!
```

Similarly, you can add scope to each type

```
major(scope): breaking change in API
minor(something): this is a new feature
fix(login): an example fix message
```

### Skip release

If you just want to commit code, but not publish a new version from CI, you
have several choices.

```
chore(tests): writing more tests
WIP: work in progress, not ready yet
```

**note** if you have local commit message validation as a Git hook, for
example using [pre-git](https://github.com/bahmutov/pre-git#readme)
skip the message check using `git commit -n` option.

### Comments

The commit message can have lines that start with `#` character. These
lines will be ignored.

## Install and use

    npm install --save simple-commit-message

Then use the following methods

```js
var simple = require('simple-commit-message')
simple.name // "simple"
// returns an object with parsed info
const result = simple.parse(message)
/*
  {
    firstLine, // first message line
    type,      // "major", "feat", "fix", "chore" or undefined
    scope,     // inside of round braces
    subject    // message after :
*/
// returns true / false, prints errors to given log function or console.error
simple.validate(message, log)
// message wizard built on top of inquirer
simple.prompter(inquirer, cb)
// returns true if the commit message is public ("feat", etc)
simple.isPublic(
  simple.parse("feat(foo): add foo feature").type
) // true
```

See [inquirer](https://www.npmjs.com/package/inquirer) for details.

## As plugin for semantic-release

This module can function as [analyzeCommits plugin](https://github.com/semantic-release/semantic-release#analyzecommits)
for [semantic-release](https://github.com/semantic-release/semantic-release).
Just add to the [configuration file](https://semantic-release.gitbook.io/semantic-release/usage/configuration#configuration-file)

```json
{
  "analyzeCommits": "simple-commit-message"
}
```

### Versions

* `1 ... 3.x` compatible with `semantic-release` v8
* `4` compatible with `semantic-release` v11

## Wizard

This module comes with included "bin" script that runs the wizard and asks you the questions.
To use, add a script to your package, for example name it "commit"

```json
{
    "scripts": {
        "commit": "simple-commit-message"
    }
}
```

Then instead of `git commit` use the command `npm run commit` and answer questions.

## Related

* [conventional-commit-message](https://github.com/bahmutov/conventional-commit-message)
is based on AngularJS log standard and has more commit types allowed.

## Debugging

To see the commit processing logic locally, run

```sh
GH_TOKEN=aaa NPM_TOKEN=fff $(npm bin)/semantic-release pre || true && git checkout .npmrc
```

This will trigger local commit analysis without publishing.

To see debug log messages run this plugin with `DEBUG=simple` environment
variable.

### Small print

Author: Gleb Bahmutov &copy; 2015

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://glebbahmutov.com/blog/)

License: MIT - do anything with the code, but don't blame me if it does not work.

Spread the word: tweet, star on github, etc.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/simple-commit-message/issues) on Github

## MIT License

Copyright (c) 2015 Gleb Bahmutov

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

[ci image]: https://github.com/bahmutov/simple-commit-message/workflows/ci/badge.svg?branch=master
[ci url]: https://github.com/bahmutov/simple-commit-message/actions
[simple-commit-message-icon]: https://nodei.co/npm/simple-commit-message.svg?downloads=true
[simple-commit-message-url]: https://npmjs.org/package/simple-commit-message
[semantic-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release
[renovate-badge]: https://img.shields.io/badge/renovate-app-blue.svg
[renovate-app]: https://renovateapp.com/
