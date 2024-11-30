# @navinc/base-react-components

Is split into two different parts: _Storybook_, and _Base Components_. Storybook
is used for development and testing of the ui and for reference for developers on the
implementation details of an UI component. The readme files for each component inside Storybook
acts as the Styleguide. Lastly, Base Components is the directory containing all
of our base reusable components which gets published as the npm package.

You can view the current build of Storybook [here](https://frontend.pages.nav.engineering/frontend-libs/base-react-components).

Bug Reporting: For technical issues post to `ux-guild` or
`front-end-team` slack channel. For design issues talk to a designer.

## Quick start

Please run all commands from the monorepo root.

1. `npx lerna run start --stream --scope=@navinc/base-react-components` - Make changes and watch them at http://localhost:9009/
2. Watch and run your tests with `npx lerna run test:watch --stream --scope=@navinc/base-react-components`
3. Test in pipsqueak with `./bin/copy-package brc pip` or to continuously copy over to pip `npx lerna run dev:pip --stream --scope=@navinc/base-react-components`
4. When it works as you need it to, build it: `npx lerna run build --stream --scope=@navinc/base-react-components`
5. Run the tests post build: `npx lerna run test --stream --scope=@navinc/base-react-components`

## Getting Started with Storybook

To start Storybook, go to the monorepo root and run the following:

```shell
npx lerna run start --stream --scope=@navinc/base-react-components
```

And go to `http://localhost:9009/`

## Contributing

**Adding a new Base Component:**
Copy the pattern used with other base components. Each component should have its
own folder with a structure similar to

```
/parts/...js  //Optional
/index.js
/readme.md
/story.js
```

If it makes sense, organize related components by putting them in their own sub
directory, ei: `/typography`, but prefer a flat file structure.

IMPORTANT: Don't forget to add them to the main `base-components/index.js`
file.

_When should you add a new component?_ Good question! You should add a component
to our base components when you have found a good reusable abstraction of a
piece of our ui. Make sure the team agrees with the abstraction and that it has
been passed off by design then add it and and create a pull request for it.

**Testing Locally in pipsqueak before publishing**
Assuming `pipsqueak` and `base-react-components` are both in `~/{user}/nav/`
you can use `bin/copy-to-pip` and it will build `base-react-components` and
manually put it in the node_modules folder in pipsqueak for you. Then you can
restart pipsqueak and see your changes.

**Updating a Base Component:**
This can be dangerous waters. Its super easy to update global components now,
but be careful cause this will change it everywhere its used! Make sure to be
smart about changes you make and to thoroughly test your changes!
If you do make global changes, make sure you bump the major version.

## Building

### Base Components

```shell
npx lerna run build --stream --scope=@navinc/base-react-components
```

### Storybooks

```shell
npx lerna run build:storybook --stream --scope=@navinc/base-react-components
```

And `open /public/base-react-components/index.html` to test storybook.

## Testing

1. `npx lerna run test --stream --scope=@navinc/base-react-components` This will run Vitest and our linter.

## Using base-react-components in your own projects

1. Install it in your project `npm i @navinc/base-react-components`
2. Use it! Ex: `import { Copy } from '@navinc/base-react-components'`
3. Refer to Storybook for implementation details for each component.

## Add-ons

We use the following add-ons are in Storybooks. Please read their documentation
for more details.

- [Controls](https://storybook.js.org/addons/@storybook/addon-controls#usage):
  allow you to edit React props dynamically using the Storybook UI.
- [Viewport](https://github.com/storybooks/storybook/tree/next/addons/viewport):
  allows your stories to be displayed in different sizes and layouts
- [Actions](https://github.com/storybooks/storybook/tree/master/addons/actions):
  used to display data received by event handlers.
- [Options](https://github.com/storybooks/storybook/tree/master/addons/options):
  used to set configure the Storybook UI.
- [a11y](https://github.com/storybooks/storybook/tree/next/addons/a11y): accessibility testing.
  story.
- [Info](https://github.com/storybooks/storybook/tree/master/addons/info)
  : Shows additional info in the storybook ui about a component

### App TODO/Wishlist

- Add back Loki
- Add eslint from pip
- Automate most of the build in the pipeline
- Add https://github.com/buildit/storybook-addon-versions
