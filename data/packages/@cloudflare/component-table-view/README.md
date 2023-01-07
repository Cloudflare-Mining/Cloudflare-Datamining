# @cloudflare/component-table-view

> Cloudflare table presentational component

## Installation
Installation with yarn is recommended

```sh

$ yarn add @cloudflare/component-table-view

```

## Usage

```jsx
import React from 'react';
import { TableView } from '../../src/';

const rows = [
  { name: 'James', coolness: 1 },
  { name: 'David', coolness: -1 },
  { name: 'Mario', coolness: 10 },
  { name: 'Luigi', coolness: 8.5 }
];

const columns = [
  {
    label: 'Name',
    cell: row => row.name,
    sortable: true
  },
  {
    label: 'Coolness',
    cell: row => row.coolness,
    columnHover: true,
    align: 'left',
    sortable: true,
    valComparator: (a, b) => a - b
  }
];

class ViewComponent extends React.Component {
  render() {
    return <TableView rowHover={true} rows={rows} columns={columns} />;
  }
}

export default ViewComponent;

```


