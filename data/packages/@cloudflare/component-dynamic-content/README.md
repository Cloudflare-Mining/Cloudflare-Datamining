# @cloudflare/component-dynamic-content

> Cloudflare Dynamic Content Component

## Installation
Installation with yarn is recommended

```sh

$ yarn add @cloudflare/component-dynamic-content

```

## Usage

```jsx
import React from 'react';
import { DynamicContent } from '../../src';

class DynamicContentComponent extends React.Component {
  render() {
    return (
      <DynamicContent
        dangerouslySetInnerHTML={{
          __html: '<p>Not an XSS attack, I swear.</p>'
        }}
      />
    );
  }
}

export default DynamicContentComponent;

```


