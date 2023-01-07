# @cloudflare/component-page

> Cloudflare Page Component

## Installation
Installation with yarn is recommended

```sh

$ yarn add @cloudflare/component-page

```

## Usage

```jsx
import React from 'react';
import { Page } from '../../src';

const PageComponent = () => (
  <Page type="wide" title="Title" description="Subtitle" beta>
      <div>Awesome page content.</div>
      <div>Please buy our things.</div>
  </Page>
);

export default PageComponent;

```


