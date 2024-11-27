# cf-style-container

> Cloudflare Style Container

Set of high order components and other helpers for fela based applications.

## Installation

```sh
$ npm install cf-style-container
```

### Aliased functions from fela and react-fela

We proxy/alias some useful functions from fela without changing their behaviour.
See the original documentation for more details. We wrap all Fela APIs so we can
eventually switch Fela to a different CSS in JS lib if ever needed.

* [combineRules](https://github.com/rofrischmann/fela/blob/master/docs/api/fela/combineRules.md)
* [connect](https://github.com/rofrischmann/fela/blob/master/packages/react-fela/docs/connect.md)
* [ThemeProvider](https://github.com/rofrischmann/fela/blob/master/packages/react-fela/docs/ThemeProvider.md)

### createComponent(rule, [type])

Very similar to
[createComponent](https://github.com/rofrischmann/fela/blob/master/packages/react-fela/docs/createComponent.md)
from react-fela. However, it automatically adds PropTypes from `[type]` in case
that it is a React Component.

Adds a displayName to the created component, which is
`${getReactDisplayName(type})`. If `type` is a primitive such as 'div', then
this string is used, otherwise the displayName of the wrapped React Component is
used.

You should use this HOC every time when you want to use Fela in your component.
**This is a primary way how to style React components**.

```jsx
import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'cf-style-container';

const styles = ({ theme, size }) => ({
  fontWeight: theme[`fontWeight${size}`],
  fontSize: theme[`fontSize${size}`],
  lineHeight: theme[`lineHeight${size}`],
  marginTop: theme[`marginTop${size}`]
});

const Heading = ({ size, className, children }) => {
  const tagName = 'h' + size;
  return React.createElement(tagName, { className }, children);
};

Heading.propTypes = {
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default createComponent(styles, Heading);
```

### createStyledComponent(rules, [type])

Creates a new component that implements the
[component styling API](https://wiki.cfops.it/pages/viewpage.action?pageId=126075383)
and maps style rules to design system primitives.

Style rules can be defined in a similar fashion to `createComponent` during
initialisation, but can also be overridden on an instance-by-instance basis
using props on the component itself.

```jsx
const Box = createStyledComponent(() => {});
<Box backgroundColor="blue.4" px={3} py={2}>
  What a lovely blue box!
</Box>;
```

### createComponentStyles(rules, Component)

Useful when you need multiple classNames (and rules) in one component.

Adds a displayName to the created component, which is
`${getReactDisplayName(type)}`. If `type` is a primitive such as 'div', then
this string is used, otherwise the displayName of the wrapped React Component is
used.

```jsx
import React from 'react';
import PropTypes from 'prop-types';
import { createComponentStyles } from 'cf-style-container';

const mainStyles = ({ theme }) => ({
  margin: theme.main.margin,
  padding: theme.main.padding
});

const legendStyles = ({ theme }) => ({
  padding: theme.legend.padding,
  marginBottom: theme.legend.marginBottom,
  borderBottom: theme.legend.borderBottom
});

const FormFieldset = ({ legend, styles }) => (
  <fieldset className={styles.mainStyles}>
    <legend className={styles.legendStyles}>{legend}</legend>
  </fieldset>
);

FormFieldset.propTypes = {
  styles: PropTypes.object.isRequired,
  legend: PropTypes.string.isRequired
};

export default createComponentStyles(
  { mainStyles, legendStyles },
  FormFieldset
);
```

Notice that rules are now an object. The names you chose will be used for
classNames accessible as `styles.mainStyles` and `styles.legendStyles` in this
case.

### applyTheme(Component, ...themes)

A HOC that ties a Fela component with the theme (adds the theme to its context).
The themes can be functions that takes a baseTheme and returns a new theme, or
just an object.

Adds a displayName to the created component, which is
`${getReactDisplayName(type)}`. If `type` is a primitive such as 'div', then
this string is used, otherwise the displayName of the wrapped React Component is
used.

```jsx
import HeadingUnstyled from './Heading';
import HeadingTheme from './HeadingTheme';

import { applyTheme } from 'cf-style-container';

// overrides HeadingTheme fontWeight1
const CustomTheme = () => {
  fontWeight1: 600;
};

const Heading = applyTheme(HeadingUnstyled, HeadingTheme, CustomTheme);

// themed component
<Heading />;
```

### withTheme(Component)

A HOC that passes the current theme from context into the prop `theme`. This is
useful when you need to access the theme without using `createComponent`. In
other words, you can't create a new styled component with it.

```jsx
import { withTheme } from 'cf-style-container';

const MyComponent = ({ theme }) => <div>Color: {theme.colors.hail}</div>;

export default withTheme(MyComponent);
```

### withRenderer(Component)

A HOC that passes the renderer from context into the prop `renderer`. This is
useful for third party integration when you need to generate a class name and
you can't create a new styled component with it.

Adds a displayName to the created component, which is
`${getReactDisplayName(type)}`. If `type` is a primitive such as 'div', then
this string is used, otherwise the displayName of the wrapped React Component is
used.

```jsx
import { withRenderer } from 'cf-style-container';

const MyComponent = ({ theme }) => {
  const styles = props => ({
    fontSize: props.fontSize,
    color: 'red'
  });
  const className = renderer.renderRule(styles, { fontSize: 12 });
  return <div>Class name: {className}</div>;
};

export default withRenderer(MyComponent);
```

### applyStaticStyles(staticStyles, Component)

A HOC that applies a string of static styles to a component using fela's
[renderStatic](https://github.com/rofrischmann/fela/blob/master/docs/api/fela/Renderer.md#renderstaticstyle-selector).
Useful for integration with older libraries that require side loading of a
static CSS block.

Accepts a function or a string. If a function is provided, the baseTheme will be
provided to the function.

Adds a displayName to the created component, which is
`${getReactDisplayName(type)}`. If `type` is a primitive such as 'div', then
this string is used, otherwise the displayName of the wrapped React Component is
used.

```jsx
import { applyStaticStyles } from 'cf-style-container';

const staticStyles = '.purple-component { background-color: purple }';
// OR
// const staticStyles = baseTheme => `.purple-component{background-color: ${baseTheme.purple} }`

const MyComponent = () => <div className="purple-component" />;

export default applyStaticStyles(staticStyles, MyComponent);
```
