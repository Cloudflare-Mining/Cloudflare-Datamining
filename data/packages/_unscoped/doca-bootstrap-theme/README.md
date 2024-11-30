# doca-bootstrap-theme

Simple [Twitter Boostrap 3](http://getbootstrap.com/) based theme for [doca](https://github.com/cloudflare/doca).

It's supposed to be used in combination with [doca](https://github.com/cloudflare/doca) - a tool that scaffolds API documentation based on JSON HyperSchemas.

Please file any issues at the [doca](https://github.com/cloudflare/doca/issues) repository.

## Usage

```
npm install -g doca
doca init -t bootstrap
```

This creates a new API documentation with `doca-bootstrap-theme` as a dependency.

# How to create your own theme

**The best way is to fork and modify this repository.** The integration with doca is pretty loose and it makes just a few assumptions about your theme.


## React Components

Doca expects to import **two React components** from your theme (otherwise it fails):

- **`App`** - main root component that gets all schemas through the props
- **`Head`** - `<head></head>` part of the final documentation

### App component

[App component](https://github.com/cloudflare/doca-bootstrap-theme/blob/master/components/app.js) can expect to receive two props:

- **`this.props.schemas`** : *Immutable.List* - an array of all imported schemas, the schema format can be found [here](https://github.com/cloudflare/json-schema-example-loader) - it's the ouput of [json-schema-example-loader](https://github.com/cloudflare/json-schema-example-loader). However, the whole data structure is additionally turned into immutable one by [Immutable.js](https://facebook.github.io/immutable-js) library and `Immutable.fromJS()` function. It deeply converts all arrays into [Immutable.List](https://facebook.github.io/immutable-js/docs/#/List) and all objects into [Immutable.Map](https://facebook.github.io/immutable-js/docs/#/Map). Thus, you have to use slightly different methods for iteration or prop access.
- **`this.props.config`** : *object* - a plain object exported by users from `config.js`, it should always have the key `title`.

### Head component

[Head component](https://github.com/cloudflare/doca-bootstrap-theme/blob/master/components/head.js) can expect to receive two props:

- **`this.props.title`** : *string* - the title specified in `config.js`
- **`this.props.cssBundle`** : *string* - you should put this code into your Head component:

  ```jsx
  {this.props.cssBundle && <link href={this.props.cssBundle} rel="stylesheet" />}
  ```

### State

- You should just use native `this.state` and keep the state in your components. It's perfect for things like toggling.
- **Advanced:** If your theme is getting bigger (a lot of state everywhere), you can consider using [Redux](http://redux.js.org/). Doca is already using Redux for handling schemas. Your theme can export a reducer ([check this pattern](https://github.com/cloudflare/cf-ui/tree/master/packages/cf-builder-card/src) in our cf-ui components). However, it's up to you to modify the scaffolded application and import your reducer in `/src/client/reducers/index.js`. Doca app currently doesn't do any assumptions about this (it could auto-import the theme reducer in future though). So if you want to make your theme useful out-of-the-box, try to use native `this.state` instead.

## Global variables

You can use these three global variables (provided by webpack):

- **`IS_JAVASCRIPT`** : *bool* - doca provides `npm run build:nojs` script. You can ship your API docs without JS bundle. This variable is `true` when `nojs` flag is used. It gives you opportunity to do some changes in your components (show/hide sections should be visible by default etc.)
- **`LAST_MODIFIED`** : *number* - `Date.now()` value, in case you want to display "last modified" information somewhere
- **`process.env.NODE_ENV`** : *enum* - can be `development` or `production`

## Styles

You have three options how to style your React components:

- [React inline styles](https://facebook.github.io/react/tips/inline-styles.html).
- Link directly your external stylesheet in the Head component.
- Doca's webpack **expects to find folder `/styles` in your theme**. It [dynamically imports](https://webpack.github.io/docs/context.html) and processes all css, less and scss files from this folder. **Magic!** Then, it bundles them into a single css file and passes `this.props.cssBundle` to your Head component. You can leave this folder empty, then `this.props.cssBundle` is going to be empty.

Unfortunately, you can't directly import styles from your React components since webpack can't resolve such requires in `node_modules`.

## Publishing

We would be happy to see more open source doca themes! Let us know if you publish some. It should follow this name convention:

```
doca-XXXXXXXX-theme
```

## Tips

- **Immutable.js** is used because resulting app (page) can be pretty big and we want to keep re-rendering fast. All your components should implement `shouldComponentUpdate()` method, so it prevents unnecessary re-renders. Or you can simply extend your components from [react-pure-render](https://github.com/gaearon/react-pure-render).

- When you're developing a new theme, you can streamline the process by copy&pasting your components into Doca app. That will give you hot-reloading! Otherwise, you can use [npm link](https://docs.npmjs.com/cli/link). With every change, you have to call `npm link` again, so it triggers `npm prepublish` and rebuilds your components (babel/JSX -> ES5).

- `npm run lint` (use node v4+)

