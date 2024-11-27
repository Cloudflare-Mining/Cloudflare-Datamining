# @cloudflare/cf-util-testing

> Cloudflare Testing utilities

## Installation

Installation with yarn is recommended

```sh
$ yarn add @cloudflare/cf-util-testing
```

## felaShallow

**For testing** This is the interface to use if you want to use enzyme's
`shallow` function with Fela components. It takes in the same parameters as
enzyme's shallow: `node` and `options`. It returns an object with keys:
`wrapper` and `snapshot`. In addition you can pass an optional `theme` to it, if
not specified, it uses the default frontend theme.

* `wrapper`: The root enzyme wrapper returned from enzyme's shallow function.
* `snapshot`: A function which takes as a parameter an enzyme `ShallowWrapper`,
  either the root, returned from the initial call to `felaShallow`, or from
  targeting descendants of the root wrapper. If the enzyme wrapper is around a
  single node, returns an object with keys: component, style. otherwise returns
  an array where each element in the array is an object with keys: component,
  style where the snapshot for that element is stored.

  The `snapshot` function takes an additional parameter `includeStyles` prop
  which is by default true, if false then styles are omitted from the captured
  snapshot. This will make it act like a normal enzyme shallow snapshot capture
  (i.e. we will not dive into fela components and render them).

* `felaDive`: A function which takes as a parameter an enzyme `ShallowWrapper`,
  either the root, returned from the initial call to `felaShallow`, or from
  targeting descendants of the root wrapper. It is meant to be used with an
  `enzymeWrapper` which has a single child. If the child is a Fela component or
  Fela theme provider, then the render tree is `dive`ed until we get to the
  underlying component and it is returned. If neither of these conditions are
  met, then the original passed in component is returned.

### usage

```js
import React from 'react';
import PropTypes from 'prop-types';
import felaShallow from '@cloudflare/cf-util-testing';
import { createComponent, applyTheme } from 'cf-style-container';

import { applyTheme } from 'cf-style-container';

const theme = {
  fontSizes: [10, 12, 14, 16, 20, 24, 32, 48, 64, 80],
  color: {
    grass: '#9BCA3E',
    black: '#000'
  },
  fontSize: '15px'
};

describe('felaShallow', () => {
  describe('component created with createComponent', () => {
    it('should return a formatted snapshot object with DOM and styles', () => {
      const Div = createComponent(() => ({ color: 'black' }));
      const { snapshot } = felaShallow(<Div />, {}, theme);
      expect(snapshot()).toMatchSnapshot();
      // Object {
      //   "component": <div
      //     className="a"
      //   />,
      //   "styles": "
      // .a {
      //   color: black
      // }
      // ",
      // }
    });

    it('should return a shallow snapshot without styles(essentially same as enzyme shallow and enzyme-to-json) ', () => {
      const Div = createComponent(() => ({ color: 'black' }));
      const { wrapper, snapshot } = felaShallow(<Div />, {}, theme);
      expect(snapshot(wrapper, false)).toMatchSnapshot();
      // Object {
      //   "component": <FelaComponent
      //     _felaTheme={
      //       Object {
      //         "color": Object {
      //           "black": "#000",
      //           "grass": "#9BCA3E",
      //         },
      //         "fontSize": "15px",
      //         "fontSizes": Array [
      //           10,
      //           12,
      //           14,
      //           16,
      //           20,
      //           24,
      //           32,
      //           48,
      //           64,
      //           80,
      //         ],
      //       }
      //     }
      //   />,
      // }
    });
  });

  describe('components created with applyTheme', () => {
    const boxRules = ({ size = 10, theme }) => {
      return {
        width: size + 'px',
        height: size + 'px',
        color: theme.color.grass,
        backgroundColor: theme.foo,
        fontSize: theme.fontSize
      };
    };

    const themeBoxRules = theme => {
      return {
        foo: theme.color.black
      };
    };

    const extraThemeBoxRules = theme => {
      return {
        fontSize: theme.fontSizes[0]
      };
    };

    const Box = ({ className, children }) => {
      return <div className={className}> {children} </div>;
    };

    Box.propTypes = {
      className: PropTypes.string,
      children: PropTypes.node
    };

    const UnstyledBox = createComponent(boxRules, Box);
    const StyledBox = applyTheme(UnstyledBox, themeBoxRules);
    const StyledBoxWithExtraRules = applyTheme(
      UnstyledBox,
      themeBoxRules,
      extraThemeBoxRules
    );

    it('should snapshot fela component with extra theme', () => {
      const component = <StyledBox>innerText</StyledBox>;

      const { snapshot } = felaShallow(component, {}, theme);
      expect(snapshot()).toMatchSnapshot();
      // Object {
      //   "component": <div
      //     className="a b c d e"
      //   >
      //
      //     innerText
      //
      //   </div>,
      //   "styles": "
      // .a {
      //   width: 10px
      // }
      //
      // .b {
      //   height: 10px
      // }
      //
      // .c {
      //   color: #9BCA3E
      // }
      //
      // .d {
      //   background-color: #000
      // }
      //
      // .e {
      //   font-size: 15px
      // }
      // ",
      // }
    });

    it('should snapshot fela component without extra theme', () => {
      const component = (
        <StyledBoxWithExtraRules>innerText</StyledBoxWithExtraRules>
      );

      const { snapshot } = felaShallow(component, {}, theme);
      expect(snapshot()).toMatchSnapshot();
    });
    // Object {
    //   "component": <div
    //     className="a b c d e"
    //   >
    //
    //     innerText
    //
    //   </div>,
    //   "styles": "
    // .a {
    //   width: 10px
    // }
    //
    // .b {
    //   height: 10px
    // }
    //
    // .c {
    //   color: #9BCA3E
    // }
    //
    // .d {
    //   background-color: #000
    // }
    //
    // .e {
    //   font-size: 10px
    // }
    // ",
    // }
  });

  describe('nested fela components', () => {
    const boxRules = ({ size = 10, theme }) => {
      return {
        width: size + 'px',
        height: size + 'px',
        color: theme.color.grass
      };
    };
    const Box = createComponent(boxRules);
    const InnerBox = createComponent(boxRules);

    let component;
    beforeEach(() => {
      component = (
        <Box>
          <InnerBox size={'15'}>text</InnerBox>
          <InnerBox>text</InnerBox>
        </Box>
      );
    });

    it('should snapshot root level box', () => {
      const { snapshot } = felaShallow(component, {}, theme);
      expect(snapshot()).toMatchSnapshot();
      // Object {
      //   "component": <div
      //     className="a b c"
      //   >
      //     <FelaComponent(div)
      //       size="15"
      //     >
      //       text
      //     </FelaComponent(div)>
      //     <FelaComponent(div)>
      //       text
      //     </FelaComponent(div)>
      //   </div>,
      //   "styles": "
      // .a {
      //   width: 10px
      // }
      //
      // .b {
      //   height: 10px
      // }
      //
      // .c {
      //   color: #9BCA3E
      // }
      // ",
      // }
    });

    it('should snapshot children boxes', () => {
      const { wrapper, snapshot } = felaShallow(component, {}, theme);
      const children = wrapper.find(InnerBox);
      expect(snapshot(children)).toMatchSnapshot();
      // Array [
      //   Object {
      //     "component": <div
      //       className="a b c"
      //     >
      //       text
      //     </div>,
      //     "styles": "
      // .a {
      //   width: 15px
      // }
      //
      // .b {
      //   height: 15px
      // }
      //
      // .c {
      //   color: #9BCA3E
      // }
      // ",
      //   },
      //   Object {
      //     "component": <div
      //       className="a b c"
      //     >
      //       text
      //     </div>,
      //     "styles": "
      // .a {
      //   width: 10px
      // }
      //
      // .b {
      //   height: 10px
      // }
      //
      // .c {
      //   color: #9BCA3E
      // }
      // ",
      //   },
      // ]
    });

    it('should snapshot not found objects', () => {
      const { wrapper, snapshot } = felaShallow(component, {}, theme);
      const noChild = wrapper.find('foo');
      expect(snapshot(noChild)).toMatchSnapshot('no child');
      //Array []
    });
  });
});
```

## felaMount

**For testing** This is the interface to use if you want to use enzyme's `mount`
function with Fela components. It takes in the same parameters as enzyme's
mount: `node` and `options`. It returns an object with keys: `wrapper` and
`snapshot`. In addition you can pass an optional `theme` to it, if not
specified, it uses the default frontend theme.

* `wrapper`: The root enzyme wrapper returned from enzyme's mount function.
* `snapshot`: A function which takes as a parameter an enzyme `ReactWrapper`,
  the root, returned from the initial call to `felaMount`. It returns an object
  with keys: component, style.
* The `snapshot` function takes an additional parameter `includeStyles` prop
  which is by default true, if false then styles are omitted from the captured
  snapshot. This will make it act like a normal enzyme mount snapshot capture.

### usage

```js
import React from 'react';
import { felaMount } from '@cloudflare/cf-util-testing';
import { createComponent } from 'cf-style-container';

export const boxRules = ({ size = 10, theme }) => {
  return {
    width: size + 'px',
    height: size + 'px',
    color: theme.color.grass,
    fontSize: theme.fontSize
  };
};

const Box = createComponent(boxRules);

test('should render box', () => {
  const { wrapper, snapshot } = felaMount(<Box>hello</Box>);
  //will output to the snapshot file the fully rendered component tree, alongside all styles
  expect(snapshot(wrapper)).toMatchSnapshot();

  //take a snapshot without styles
  //will result in an enzyme snapshot without any fela rules being captured in snapshot
  expect(snapshot(wrapper, false)).toMatchSnapshot('no styles captured');
});
```

## mockImport

Mock an import. returns the mock. This is to be used mainly when using the
`import *` approach of mocking imports in tests.

### Usage

```js
import { mockImport } from '@cloudflare/cf-util-testing';
import * as RouteHandler from 'cf-util-route-handler';

const originalHandleRoutes = RouteHandler.handleRoutes;

//any files using the handleRoutes export of cf-util-route-handler after the following call will be given a mocked jest function instead
//the implementation of which is provided
//mockedHandleRoutes can now be used to spy on any calls to the mocked function
const mockedHandleRoutes = mockImport(RouteHandler, 'handleRoutes', () => {});
mockedHandleRoutes.mock.calls.length; //0

//the following call wipes away the mocked implementation. handleRoutes of cf-util-route-handler will now just be the result of jest.fn()
mockImport(RouteHandler, 'handleRoutes');

//the following call replaces the mocked implementation of handleRoutes of cf-util-route-handler with the its original implementation.
mockImport(RouteHandler, 'handleRoutes', originalHandleRoutes);
```

## mockComponent

Mock a component's implementation. If your goal is to mock the implementation of
a component, especially for enzyme snapshots then this function provides a handy
tool. It replaces the a component definition of an imported module with a jest
mock function, the implementation of which is a basic functional component.

If you take an snapshot of such a component, you will get to see all its props.
As well you can target it in enzyme by finding it by its displayName. You can
provide a displayName to this function, or it will attempt to get it from the
underlying component

if children are passed as a prop, they are included in the mockComponent's
render function if children are passed as a prop and children is a function then
children is called with childrenArgs the mocked component will get its
displayName if provided (useful for finding a component from enzyme)

returns the mocked component.

### Usage

```js
import { mockComponent } from '@cloudflare/cf-util-testing';
import * as Table from 'cf-component-table';

//any files using a default export of Table after the following call will be given a mocked jest function instead
//mockedComponent can now be used to spy on any calls to the mocked component
const mockedComponent = mockComponent(Table);
mockedComponent.mock.calls.length; //0

//same as above
//In addition the displayName property of the mocked component will be 'Table' (useful for targeting in snapshot testing)
mockComponent(Table, 'Table');

//any files using the TableCell export of Table after the following call will be given a mocked jest function instead
//In addition the displayName property of the mocked component will be 'TableCelll' (useful for targeting in snapshot testing)
mockComponent(Table, 'TableCell', 'TableCell');

//same as above
//In addition the TableCell Component will call its children prop (if it is a function) with the provided args
mockComponent(Table, 'TableCell', 'TableCell', { arg: 'foo' });
```

## createEnzymeRouterOptions

If you'd like to pass the Router into enzyme tests without using MemoryRouter,
this is the function to use. The downside of using MemoryRouter is that the root
enzyme wrapper would be the MemoryRouter itself, which would then prohibit us
from setting state or props on our own root component which we may want to test.

### Usage

```js
import React from 'react';
import { createEnzymeRouterOptions } from '@cloudflare/cf-util-testing';
import { felaMount } from '@cloudflare/cf-util-testing';
import { Route, withRouter } from 'react-router-dom';

const RootRoute = withRouter(() => {
  <Route path="/foo" render={() => <div> foo </div>} />;
});

//create the context options to be passed into the mount function
//Note: You could use the MeroryRouter in your test instead. The downside of that is that
//the root enzyme wrapper then would be the MemoryRouter itself, which would
//then prohibit us from setting state or props on our own root component
//which we want to test.
const options = createEnzymeRouterOptions({ pathname: '/foo' });

//here we are using felaMount, thinking that we would need to capture fela snapshots
//if this were not the case we could just use enzyme's mount instead
const { wrapper, snapshot } = felaMount(<RootRoute />, options);

//will record <div> foo </div> as snapshot
snapshot(wrapper.find('Route'), false);
```

## findWhereNameContains

A function which takes as a parameter an enzyme `ShallowWrapper`, either the
root, returned from the initial call to `felaShallow`, or from targeting
descendants of the root wrapper. the 2nd parameter is the `name` of the
component we are looking for. It is meant to find nodes within the rendered
enzyme tree which match the name either exactly or are Higher Order Components
wrapping a component with the name we are looking for Useful for when one is
looking for something like a `Button` but the displayName for this component is
actually `FelaComponent(Button)`.

### Usage

```js
import React from 'react';
import { felaShallow, findWhereNameContains } from '@cloudflare/cf-util-testing';
import { createComponent } from 'cf-style-container';
const Div = createComponent(() => ());
const Button = createComponent(()=> {});

const { wrapper, snapshot } = felaShallow(<Div><Button /></Div>,);

//since wrapper contains a component with displayName FelaComponent(Button), returns the found component
findWhereNameContains(wrapper, 'Button')
```

## Dealing with time

If your component uses the global.Date object or external libraries that depend
on it (eg moment), you might find that your tests fail in CI or in a different
timezone. To deal with this you will need to mock out the Date object. This is
actually more cumbersome than it seems, so there are utilities in provided here.

Note: it's important to reset the global object in order to prevent polluting
other tests.

### Usage

````js
import {
    setDateMock,
    restoreDateMock
} from '@cloudflare/util-testing';

test('should not fail because of time', function() {
    setDateMock('1970-01-01T00:00:00z');
    // your test will now always return the mocked time
    restoreDateMock();
    // your test will now return the real data
});

// If you use the date mock in multiple tests you can use Jest's afterAll function to restore it after all the tests.
afterAll(() => {
    // Make sure we don't forget to restore the real Date object and moment
    restoreDateMock();
});
```js
````
