# @cloudflare/component-arrow-swivel

> 

## Installation
Installation with yarn is recommended

```sh

$ yarn add @cloudflare/component-arrow-swivel

```

## Usage

```jsx
import React from 'react';
import { ArrowSwivel } from '../../src';

class ArrowSwivelComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActiveFirst: false,
      isActiveSecond: false
    };
  }
  render() {
    return (
      <div>
        <p>Default arrow swivel</p>
        <ArrowSwivel
          isActive={this.state.isActiveFirst}
          onClick={() =>
            this.setState({ isActiveFirst: !this.state.isActiveFirst })
          }
        />
        <p>
          You can also modify the startAngle, endAngle, duration, color and size
        </p>
        <ArrowSwivel
          startAngle={-90}
          endAngle={90}
          duration={500}
          isActive={this.state.isActiveSecond}
          color="gray.4"
          size="1.5x"
          onClick={() =>
            this.setState({ isActiveSecond: !this.state.isActiveSecond })
          }
        />
      </div>
    );
  }
}

export default ArrowSwivelComponent;

```


