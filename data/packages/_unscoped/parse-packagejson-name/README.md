# parsePackageJsonName

A very simple package to parse an npm package name and return some mildly interesting details about the name. It gives you back the following properties:

 - scope: The scope of the package, e.g. `@foo/blip.blop`'s scope is `'foo'`
 - fullName: The full name of the package, minus the scope, e.g. `@foo/blip.blop`'s fullName is `'blip.blop'`
 - projectName: If there is a `.` character in the fullName, then this can denote the module is part of a larger project, for example `lodash` has modules like `lodash.pluck`. Given the `@foo/blip.blop` example, projectName would be `'blip'`
 - moduleName: Just like above - for our example of `@foo/blip.blop`, moduleName would be `'blop'`.

### Example

```js
var parsePackageJsonName = require('parsePackageJsonName');

parsePackageJsonName('@foo/blip.blop').should.deep.equal({
  scope: 'foo',
  fullName: 'blip.blop',
  projectName: 'blip',
  moduleName: 'blop',
});

parsePackageJsonName('blip.blop').should.deep.equal({
  scope: null,
  fullName: 'blip.blop',
  projectName: 'blip',
  moduleName: 'blop',
});

parsePackageJsonName('blop').should.deep.equal({
  scope: null,
  fullName: 'blop',
  projectName: null,
  moduleName: 'blop',
});

parsePackageJsonName(require('lodash.pluck/package.json')).should.deep.equal({
  scope: null,
  fullName: 'lodash.pluck',
  projectName: 'lodash',
  moduleName: 'pluck',
});
```
