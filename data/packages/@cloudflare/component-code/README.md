# @cloudflare/component-code

> Cloudflare Code Component

## Installation
Installation with yarn is recommended

```sh

$ yarn add @cloudflare/component-code

```

## Usage

```jsx
import React from 'react';
import { Code } from '../../src';

class CodeComponent extends React.Component {
  render() {
    return (
      <div>
        <Code isCodeBlock={true}>Look at this code block!</Code>
        <br />
        And this <Code>inline code</Code>!
      </div>
    );
  }
}

export default CodeComponent;

```


