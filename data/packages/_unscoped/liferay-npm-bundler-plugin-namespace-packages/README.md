# liferay-npm-bundler-plugin-namespace-packages

> Namespace package names based on the root project's package name and version. This plugin prepends `<project-package-name>$` to each package name appearance in package.json files so that the packages are isolated per project and don't clash.

## Installation

```sh
npm install --save-dev liferay-npm-bundler-plugin-inject-angular-dependencies
```

## Usage

Add the following to your `.npmbundlerrc` file:

**Without options:**

```json
{
	"*": {
		"plugins": ["namespace-packages"]
	}
}
```

## Technical Details

This plugins rewrites package names in `package.json` files to prepend the root project's name to them.

In case a module belongs to a scoped package, the root project's name is prepended to the scope name not including the `@`. So, for example, `@a-scope/a-package` would be converted to `@my-project$a-scope/a-package`.

This plugin is normally used to sandbox dependencies of a whole project so that they are not shared with any other project. This, of course, disables the possibility of deduplication between different projects, but leads to better stability and predictability during runtime (specially when using peer dependencies).

When this plugin is used you are guaranteed that you will get the same dependencies during runtime as during development.

Please note that, if you intend to use this plugin with `liferay-npm-bundler`, you should also use its counterpart `babel-plugin-namespace-modules` which namespaces modules inside AMD `define()` and `require()` calls too.
