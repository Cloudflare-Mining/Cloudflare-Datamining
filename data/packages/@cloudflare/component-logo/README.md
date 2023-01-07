# @cloudflare/component-logo

> Cloudflare Logo Component

## Installation
Installation with yarn is recommended

```sh

$ yarn add @cloudflare/component-logo

```

## Usage

```jsx
import React from 'react';
import { Logo, LogoInline, LogoCloud, LogoHeader } from '../../src';
import { Box } from '@cloudflare/component-box';

const ViewComponent = () => (
  <div>
    <h2>Logo</h2>
    <Logo />
    <Box backgroundColor="gray.2">
      <Logo light />
    </Box>
    <h2>LogoInline</h2>
    <LogoInline />
    <Box backgroundColor="gray.2">
      <LogoInline light />
    </Box>
    <h2>LogoCloud</h2>
    <LogoCloud />
    <Box backgroundColor="gray.2">
      <LogoCloud />
    </Box>
    <h2>LogoHeader (responsive)</h2>
    <Box border="1px solid #ccc">
      <LogoHeader />
    </Box>
  </div>
);

export default ViewComponent;

```


