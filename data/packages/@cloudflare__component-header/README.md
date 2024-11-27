# @cloudflare/component-header

> Cloudflare Header Component

## Installation
Installation with yarn is recommended

```sh

$ yarn add @cloudflare/component-header

```

## Usage

```jsx
import React from 'react';
import { Box } from '@cloudflare/component-box';
import { Header, NavList, NavItem, Hamburger } from '../../src';
import { LogoHeader } from '@cloudflare/component-logo';

const ViewComponent = () => (
  <Header>
    <Box display="flex">
      <Hamburger onClick={() => console.log('Yum! Hamburger')} />
      <a href=".">
        <LogoHeader />
      </a>
    </Box>
    <NavList>
      <NavItem>One</NavItem>
      <NavItem>Two</NavItem>
      <NavItem>Three</NavItem>
    </NavList>
  </Header>
);

export default ViewComponent;

```


