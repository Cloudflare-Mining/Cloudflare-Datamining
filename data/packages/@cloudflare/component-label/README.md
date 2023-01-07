# @cloudflare/component-label

> Cloudflare Label Component

## Installation
Installation with yarn is recommended

```sh

$ yarn add @cloudflare/component-label

```

## Usage

```jsx
import React from 'react';
import { Label } from '../../src';

const LabelComponent = () => (
  <p>
    <Label type="default" mr={2}>
      Default
    </Label>
    <Label type="info" mr={2}>
      Info
    </Label>
    <Label type="success" mr={2}>
      Success
    </Label>
    <Label type="warning" mr={2}>
      Warning
    </Label>
    <Label type="error">Error</Label>
  </p>
);

export default LabelComponent;

```


