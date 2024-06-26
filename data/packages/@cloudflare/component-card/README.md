# @cloudflare/component-card

> Cloudflare Card Component

## Installation
Installation with yarn is recommended

```sh

$ yarn add @cloudflare/component-card

```

## Usage

```jsx
import React from 'react';
import {
  Card,
  CardBlock,
  CardContent,
  CardControl,
  CardDrawers,
  CardMessages,
  CardSection,
  CardTitle,
  CardFooter,
  CardToolbar,
  CardToolbarLink
} from '../../src';
import { Button } from '@cloudflare/component-button';

class CardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeDrawer: null
    };
  }

  render() {
    return (
      <Card>
        <CardSection>
          <CardContent>
            <CardTitle>Hello World</CardTitle>
            <p>Here is some content.</p>
            <CardMessages
              messages={[
                { type: 'info', content: 'Info Message' },
                { type: 'error', content: 'Error Message' }
              ]}
            />
            <CardFooter>This is a footer message</CardFooter>
          </CardContent>
          <CardControl>
            <CardBlock>This is a block</CardBlock>
            <CardBlock>
              <Button type="default" onClick={() => {}}>
                Example Control
              </Button>
            </CardBlock>
          </CardControl>
        </CardSection>
        <CardDrawers
          drawers={[
            {
              id: 'one',
              name: 'One',
              content: <p>One</p>
            },
            {
              id: 'two',
              name: 'Two',
              content: <p>Two</p>
            }
          ]}
        />
        <CardToolbar
          controls={[]}
          triggers={[
            <CardToolbarLink
              href="https://en.wikipedia.org/wiki/Main_Page"
            >
              Wikipedia
            </CardToolbarLink>
          ]}
        />
      </Card>
    );
  }
}

export default CardComponent;

```


