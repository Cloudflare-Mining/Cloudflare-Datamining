<h1 align="center">@k88/module-scope-plugin</h1>
<p align="center">A Webpack plugin forked from create-react-app that prevents users from importing from outside of src/ and node_modules/ directory. Taken from <a href="https://github.com/facebook/create-react-app/blob/master/packages/react-dev-utils/ModuleScopePlugin.js" target="_blank">react-dev-utils</a>, but is published as a standalone plugin and has Typescript definition. </p>

<p align="center">
    <a href="https://www.npmjs.com/package/@k88/module-scope-plugin">
        <img src="https://img.shields.io/npm/v/@k88/module-scope-plugin.svg?style=square" title="npm" />
    </a>
    <a href="https://www.npmjs.com/package/@k88/module-scope-plugin">
        <img src="https://img.shields.io/npm/dt/@k88/module-scope-plugin.svg?style=square" title="npm" />
    </a>
    <a href="https://www.npmjs.com/package/@k88/module-scope-plugin?activeTab=dependents">
        <img src="https://badgen.net/npm/dependents/@k88/module-scope-plugin" title="Number of Dependencies" />
    </a>
    <a href="./LICENSE">
        <img src="https://img.shields.io/npm/l/@k88/module-scope-plugin.svg?style=square" title="License" />
    </a>
</p>

## Installation

Install using 

```bash
npm install @k88/module-scope-plugin
```

## Usage

Add this plugin to the `resolve` key of Webpack:

```javascript
const ModuleScopePlugin = require('@k88/ModuleScopePlugin');
module.exports = {
  ...webpackConfig,
  resolve: {
      /* other resolve configs */
      plugins: [
          new ModuleScopePlugin(APP_SOURCE_PATH, [ OTHER_PATHS, PACKAGE_JSON_PATH ]),
      ],
  },
}
```