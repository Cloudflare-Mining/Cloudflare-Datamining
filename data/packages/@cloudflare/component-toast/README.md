# @cloudflare/component-toast

> Cloudflare Toast Component

## Installation
Installation with yarn is recommended

```sh

$ yarn add @cloudflare/component-toast

```

## Usage

```jsx
import React from 'react';
import { Toast } from '../../src';

class ToastComponent extends React.Component {
  render() {
    return (
      <div>
        <Toast type="success">Something very successful happened!!!</Toast>
        <Toast type="error">Something failed horribly</Toast>
        <Toast mb={0} type="info">
          Please be advised
        </Toast>
      </div>
    );
  }
}

export default ToastComponent;

```


