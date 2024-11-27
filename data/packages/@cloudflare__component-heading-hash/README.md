# component-heading-hash

> Cloudflare Heading Hash Component

## Installation

Installation with yarn is recommended

```sh
$ yarn add @cloudflare/component-heading-hash
```

## Usage

```jsx
import React from 'react';
import HeadingHash from '@cloudflare/component-heading-hash';

const HeadingComponent = ({ id, children }) => (
  <div>
    <HeadingHash id={id} size={1}>
      {children}
    </HeadingHash>
  </div>
);

export default HeadingComponent;
```
