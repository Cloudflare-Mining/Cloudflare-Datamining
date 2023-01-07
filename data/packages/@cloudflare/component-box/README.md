# @cloudflare/component-box

> Cloudflare Box Component

This is styling component similar to cf-component-flex which allows for arbitrary styling.

 This component should only be used when the built in style doesn't quite fit the bill and when it can't be done with fela. Ideally cfui components should have the right styling built in for most cases. In the few edge cases that pop up in real world feature development this is an alternative to wrapping your component in a `<div>` or `<span>` and styling it with css to accomodate one-offs. 

 Also note that using Box effectively performs a component level CSS reset as all props not provided will be pulled from the default theme. These defaults outlined in propertiesSpec either match the browser defaults or are taken from our global styles as defined by cf-style-const.

## Installation
Installation with yarn is recommended

```sh

$ yarn add @cloudflare/component-box

```

## Usage

```jsx
import React from 'react';
import { Box } from '../../src';

const BoxComponent = () => (
  <Box>
    <Box margin="1rem" backgroundColor="thistle">
      This is a box with a margin
    </Box>

    <Box padding="1rem" backgroundColor="blanchedalmond">
      This is a box with padding
    </Box>

    <Box
      padding="1rem"
      marginTop="1rem"
      borderTopColor="black"
      borderTopWidth={1}
      borderTopStyle="solid"
      borderBottomColor="blue"
      borderBottomWidth={1}
      borderBottomStyle="groove"
      borderLeftColor="teal"
      borderLeftWidth={2}
      borderLeftStyle="dashed"
      borderRightColor="purple"
      borderRightWidth={2}
      borderRightStyle="dotted"
    >
      All the borders!
    </Box>

    <Box
      display="inline-block"
      margin="1rem"
      padding="1rem"
      width="40%"
      textAlign="center"
      backgroundColor="#3dd"
    >
      inline block
    </Box>

    <Box
      margin="1rem"
      padding="2rem"
      backgroundColor="peachpuff"
      display="inline-flex"
      justifyContent="space-between"
      width="40%"
    >
      <Box backgroundColor="lightsalmon" margin="1rem" padding="1rem">
        Flex
      </Box>
      <Box backgroundColor="lightsalmon" margin="1rem" padding="1rem">
        Flex
      </Box>
      <Box backgroundColor="lightsalmon" margin="1rem" padding="1rem">
        Flex
      </Box>
    </Box>

    <Box marginLeft="1rem">
      <h4>Absolute Positioning</h4>
    </Box>

    <Box
      marginLeft="1rem"
      backgroundColor="aquamarine"
      position="relative"
      width={200}
      height={200}
      display="inline-block"
    >
      <Box
        backgroundColor="pink"
        position="absolute"
        width={50}
        height={50}
        top={10}
        left={10}
      />
      <Box
        margin="1rem"
        backgroundColor="azure"
        position="absolute"
        width={100}
        height={100}
        bottom={10}
        right={10}
      />
    </Box>

    <Box
      margin="1rem"
      padding="1rem"
      backgroundColor="lightsalmon"
      float="right"
    >
      Floated right
    </Box>
  </Box>
);

export default BoxComponent;

```


