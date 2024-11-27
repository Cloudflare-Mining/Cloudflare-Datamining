# @cloudflare/component-heading

> Cloudflare Heading Component

## Installation
Installation with yarn is recommended

```sh

$ yarn add @cloudflare/component-heading

```

## Usage

```jsx
import React from 'react';
import { Heading, HeadingCaption } from '../../src';

const HeadingComponent = () => (
  <div>
    {[1, 2, 3, 4, 5, 6].map(size => (
      <Heading size={size} key={size}>
        Look at this nice heading!
        <HeadingCaption>It even has a nice HeadingCaption</HeadingCaption>
      </Heading>
    ))}
  </div>
);

export default HeadingComponent;

```


