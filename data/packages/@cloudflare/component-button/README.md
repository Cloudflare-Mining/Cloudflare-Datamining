# @cloudflare/component-button

> Cloudflare Button Component

## Installation
Installation with yarn is recommended

```sh

$ yarn add @cloudflare/component-button

```

## Usage

```jsx
import React from 'react';
import { Button, ButtonGroup } from '../../src';

const ButtonComponent = () => (
  <div>
    <Button type="primary" onClick={() => {}}>
      Button
    </Button>

    <div>
      <ButtonGroup spaced mt={3}>
        <Button iconType="gear" onClick={() => {}} />
        <Button onClick={() => {}}>Button</Button>
      </ButtonGroup>
    </div>

    <p>Button group</p>
    <ButtonGroup>
      <Button type="primary" onClick={() => console.log('Clicked One!')}>
        Button One
      </Button>
      <Button type="default" onClick={() => console.log('Clicked Two!')}>
        Button Two
      </Button>
      <Button type="success" onClick={() => console.log('Clicked Three!')}>
        Button Three
      </Button>
    </ButtonGroup>

    <p>Button group (spaced, row)</p>
    <ButtonGroup spaced>
      <Button type="warning" onClick={() => console.log('Clicked Four!')}>
        Button Four
      </Button>
      <Button type="danger" onClick={() => console.log('Clicked Five!')}>
        Button Five
      </Button>
      <Button
        type="danger"
        disabled
        onClick={() => console.log('Clicked disabled!')}
      >
        Disabled
      </Button>
      <Button
        type="danger"
        onClick={() => console.log('Clicked Six!')}
        inverted
      >
        Button Six
      </Button>
      <Button
        type="primary"
        onClick={() => console.log('Clicked Seven!')}
        inverted
      >
        Button Seven
      </Button>
      <Button
        type="default"
        loading
        onClick={() => console.log('Clicked Loading!')}
      >
        Button Eight
      </Button>
    </ButtonGroup>

    <p>Button group (spaced, column)</p>
    <ButtonGroup spaced direction="column">
      <Button type="success" onClick={() => console.log('Clicked Nine!')}>
        Button Nine
      </Button>
      <Button type="warning" onClick={() => console.log('Clicked Ten!')}>
        Button Ten
      </Button>
      <Button type="danger" onClick={() => console.log('Clicked Eleven!')}>
        Button Eleven
      </Button>
    </ButtonGroup>
  </div>
);

export default ButtonComponent;

```


