# @cloudflare/component-list

> Cloudflare List Component

## Installation
Installation with yarn is recommended

```sh

$ yarn add @cloudflare/component-list

```

## Usage

```jsx
import React from 'react';
import { UnorderedList, OrderedList, ListItem } from '../../src';

const ListComponent = () => (
  <div>
    <p>Basic usage:</p>
    <UnorderedList>
      <ListItem>One</ListItem>
      <ListItem>Two</ListItem>
    </UnorderedList>

    <p>Ordered list:</p>
    <OrderedList>
      <ListItem>One</ListItem>
      <ListItem>Two</ListItem>
    </OrderedList>
  </div>
);

export default ListComponent;

```


