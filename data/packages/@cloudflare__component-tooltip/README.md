# @cloudflare/component-tooltip

> Cloudflare Tooltip Component

## Installation
Installation with yarn is recommended

```sh

$ yarn add @cloudflare/component-tooltip

```

## Usage

```jsx
import React from 'react';
import { Tooltip } from '../../src';
import { Icon } from '@cloudflare/component-icon';
import { Button } from '@cloudflare/component-button';
import { Box } from '@cloudflare/component-box';

const Jsx = () => (
  <span>
    <h4>
      <Icon type="exclamation-sign" color="danger" label="tooltip" /> Sure. No
      problem!
    </h4>
    Important Info
  </span>
);

const TooltipComponent = () => (
  <div>
    <div>
      <h4>Standard tooltip with text</h4>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.{' '}
      More Info{' '}
      <Box display="inline-block">
        <Tooltip
          place="top"
          message="It has survived not only five centuries, but also the leap into electronic
      typesetting, remaining essentially unchanged."
        >
          <Icon type="info-sign" color="primary" label="tooltip" />
        </Tooltip>
      </Box>
    </div>

    <h4>
      You can add a tooltip to any element you want. You can also use delayHide
      to delay the hiding of the tooltip
    </h4>
    <Box display="inline-block">
      <Tooltip delayHide={1000} place="top" message={"I'm on a button"}>
        <Button type="primary">Button Info</Button>
      </Tooltip>
    </Box>
    <h4>Can you do jsx?</h4>
    <Box display="inline-block">
      <Tooltip place="top" message={<Jsx />}>
        <span>Fancy Tooltip</span>
        <div />
      </Tooltip>
    </Box>
  </div>
);

export default TooltipComponent;

```


