# @cloudflare/component-sortable

> 

## Installation
Installation with yarn is recommended

```sh

$ yarn add @cloudflare/component-sortable

```

## Usage

```jsx
import React from 'react';
import pic from './movealong.jpg';

const SortableComponent = () => (
  <div>
    <p>
      <img src={pic} width="400px" alt="Move Along" />
    </p>
    <p>
      This component is intended to wrap tables/expandable-table TableCell and
      expects to receive sortProps from cf-component-auto-fetch (it is used in
      the example there). It is a tiny connector between auto-fetch and table
      header sorting UI represented by an arrow.
    </p>
  </div>
);

export default SortableComponent;

```


