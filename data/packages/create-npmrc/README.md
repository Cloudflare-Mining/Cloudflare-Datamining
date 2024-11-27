## create-npmrc

This is a client module that communicates with the server and creates `.npmrc` in your local project. Using generated `.npmrc` file allows installation of [scoped npm packages](https://docs.npmjs.com/misc/scope).

```
yarn add create-npmrc
```
or

```
npm install create-npmrc --save
```

Add this row to your project's package.json to automatically obtain `.npmrc`

```
"scripts": {
  "preinstall": "URL={server end point} create-npmrc"
},
```

ENV variables:

```sh
URL      # required variable
REGISTRY # default: registry.npmjs.org
```