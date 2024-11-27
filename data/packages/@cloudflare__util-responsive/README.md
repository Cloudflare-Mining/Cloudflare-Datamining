# @cloudflare/util-responsive

> Cloudflare Responsive Design Utils

## Installation
Installation with yarn is recommended

```sh

$ yarn add @cloudflare/util-responsive

```

## Usage

```jsx
import React from 'react';
import PropTypes from 'prop-types';
import { withAutoWidth } from '../../src';

const FullWidthComp = ({ width }) => (
  <svg width={width} height={100}>
    <rect width={width} height={100} fill="blue" />
  </svg>
);

FullWidthComp.propTypes = {
  width: PropTypes.number.isRequired
};

export default withAutoWidth(FullWidthComp);

```


