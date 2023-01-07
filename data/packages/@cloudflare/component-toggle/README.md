# @cloudflare/component-toggle

> Cloudflare Toggle Component

## Installation
Installation with yarn is recommended

```sh

$ yarn add @cloudflare/component-toggle

```

## Usage

```jsx
import React from 'react';
import { Toggle } from '../../src/index';

class ToggleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleValue: false
    };
  }

  handleToggle(value) {
    this.setState({
      toggleValue: value
    });
  }

  render() {
    return (
      <div>
        <p>Example Toggle</p>
        <Toggle
          label="Example Toggle"
          name="example"
          value={this.state.toggleValue}
          onChange={this.handleToggle.bind(this)}
        />
        <p>Disabled</p>
        <Toggle
          disabled
          label="Disabled Toggle"
          name="example-disabled"
          value={this.state.toggleValue}
          onChange={this.handleToggle.bind(this)}
        />
        <p>
          {`If you specifically don't want to use a label then you must pass false`}
        </p>

        <p>Note: Designed to work with redux-form.</p>
      </div>
    );
  }
}

export default ToggleComponent;

```


