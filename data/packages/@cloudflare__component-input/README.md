# @cloudflare/component-input

> Cloudflare Input Component

## Installation
Installation with yarn is recommended

```sh

$ yarn add @cloudflare/component-input

```

## Usage

```jsx
import React from 'react';
import { Input, LabeledInput } from '../../src';

class InputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 'Hello World'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    this.setState({
      inputValue: value
    });
  }

  render() {
    return (
      <div>
        <Input
          name="example"
          value={this.state.inputValue}
          onChange={this.handleChange}
        />

        <Input
          type="search"
          name="example"
          value={this.state.inputValue}
          onChange={this.handleChange}
        />

        <Input
          disabled
          name="example"
          value={this.state.inputValue}
          onChange={this.handleChange}
        />

        <LabeledInput
          label="@"
          name="example"
          value={this.state.inputValue}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default InputComponent;

```


