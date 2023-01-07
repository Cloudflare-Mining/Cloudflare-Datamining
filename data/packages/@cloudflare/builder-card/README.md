# @cloudflare/builder-card

> Cloudflare Card Builder

## Installation
Installation with yarn is recommended

```sh

$ yarn add @cloudflare/builder-card

```

## Usage

```jsx
import React from 'react';
import CardBuilder from '../../src';
import {
  Table,
  TableBody,
  TableRow,
  TableCell
} from '@cloudflare/component-table';
import { Button } from '@cloudflare/component-button';

const MyButton = (
  <Button type="default" onClick={() => console.log('Button clicked!')}>
    Click me!
  </Button>
);

const BuilderCard = () => (
  <CardBuilder
    title="This is a Card"
    description="This is the description of a card."
    control={MyButton}
    table={
      <Table striped>
        <TableBody>
          <TableRow>
            <TableCell>One</TableCell>
            <TableCell>Two</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Three</TableCell>
            <TableCell>Four</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    }
    drawers={[
      {
        id: 'api',
        name: 'API',
        content: 'API Content'
      },
      {
        id: 'help',
        name: 'Help',
        content: 'Help Content'
      }
    ]}
  />
);

export default BuilderCard;

```


