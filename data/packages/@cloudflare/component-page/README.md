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
import { Page } from '@cloudflare/component-page';
import { CL1CompatRouterProvider } from '@cloudflare/util-cl1-compat-router';

const RouterLink = ({ to, ...props }) => <a {...props} href={to} />;
const navigate = to => {
  window.location.assign(to);
};

const location = {
  pathname: window.location.pathname,
  search: window.location.search,
  hash: window.location.hash
};

const PageComponent = () => (
  <CL1CompatRouterProvider
    location={location}
    navigate={navigate}
    linkComponent={RouterLink}
  >
    <Page type="wide" title="Title" description="Subtitle" beta>
      <div>Awesome page content.</div>
      <div>Please buy our things.</div>
    </Page>
  </CL1CompatRouterProvider>
);

export default PageComponent;

```

