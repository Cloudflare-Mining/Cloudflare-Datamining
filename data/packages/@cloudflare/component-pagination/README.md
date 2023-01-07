# @cloudflare/component-pagination

> Cloudflare Pagination Component

## Installation
Installation with yarn is recommended

```sh

$ yarn add @cloudflare/component-pagination

```

## Usage

```jsx
import React from 'react';
import { createComponent } from '@cloudflare/style-container';
import { Pagination } from '../../src';

const Margin = createComponent(({ theme }) => ({
  margin: theme.space[2]
}));

const onPrevClick = () => console.log('prev click!');
const onNextClick = () => console.log('next click!');

class PaginationComponent extends React.Component {
  render() {
    return (
      <div>
        <Margin>
          <Pagination
            start={1}
            end={15}
            total={60}
            onPrevClick={onPrevClick}
            onNextClick={onNextClick}
          />
        </Margin>
        <Margin>
          <Pagination
            start={45}
            end={60}
            total={60}
            onPrevClick={onPrevClick}
            onNextClick={onNextClick}
          />
        </Margin>
        <Margin>
          <Pagination
            start={45}
            end={60}
            onPrevClick={onPrevClick}
            onNextClick={onNextClick}
          />
        </Margin>
        <Margin>
          <Pagination
            start={1}
            end={15}
            total={60}
            onPrevClick={onPrevClick}
            onNextClick={onNextClick}
            loading
          />
        </Margin>
        <Margin>
          <Pagination
            start={1}
            end={15}
            total={15}
            disablePreviousButton={true}
            disableNextButton={true}
            onPrevClick={onPrevClick}
            onNextClick={onNextClick}
          />
        </Margin>
      </div>
    );
  }
}

export default PaginationComponent;

```


