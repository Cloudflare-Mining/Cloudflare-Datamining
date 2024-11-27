# @cloudflare/component-color-picker

> A color picker wrapper for react-color

## Installation
Installation with yarn is recommended

```sh

$ yarn add @cloudflare/component-color-picker

```

## Usage

```jsx
import React from 'react';
import { ColorPicker, ColorPickerInput } from '../../src';
import { createComponent } from '@cloudflare/style-container';

const ConstrainingDiv = createComponent(
  () => ({
    width: '100px'
  }),
  'div'
);

class ColorPickerExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'green'
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ color: e.value });
  }

  render() {
    return (
      <div>
        <ColorPicker color={'#00BB77'} />
        <br />
        <ConstrainingDiv>
          <ColorPickerInput
            value={this.state.color}
            onChange={this.handleChange}
          />
        </ConstrainingDiv>
      </div>
    );
  }
}

export default ColorPickerExample;

```


