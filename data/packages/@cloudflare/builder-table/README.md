# @cloudflare/builder-table

> Cloudflare Table Builder

## Installation
Installation with yarn is recommended

```sh

$ yarn add @cloudflare/builder-table

```

## Usage

```jsx
import React from 'react';
import { TableBuilder } from '../../src';

const rows = [{ name: 'James', coolness: 1 }, { name: 'David', coolness: -1 }];

const columns = [
  {
    label: 'Name',
    cell: row => row.name
  },
  {
    label: 'Coolness',
    cell: row => row.coolness,
    columnHover: true,
    align: 'left',
    sortProps: {
      active: true,
      direction: 'desc'
    }
  }
];

class BuilderTable extends React.Component {
  render() {
    return (
      <div>
        <TableBuilder rowHover={true} rows={rows} columns={columns} />
      </div>
    );
  }
}

BuilderTable.displayName = 'BuilderTable';

export default BuilderTable;

```


