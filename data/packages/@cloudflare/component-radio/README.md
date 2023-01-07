# @cloudflare/component-radio

> Cloudflare Radio Component

## Installation
Installation with yarn is recommended

```sh

$ yarn add @cloudflare/component-radio

```

## Usage

```jsx
import React from 'react';
import { Radio, RadioGroup } from '../../src/index';

class RadioComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      radioValue: 'option1'
    };
    this.onRadioChange = this.onRadioChange.bind(this);
  }

  onRadioChange(val) {
    this.setState({
      radioValue: val
    });
  }

  render() {
    return (
      <div>
        <p>
          You can create them individually with <code>Radio</code>
        </p>

        <Radio
          label="Radio 1"
          name="radio-1"
          value="radio1"
          checked={this.state.radioValue === 'radio1'}
          onChange={this.onRadioChange}
        />

        <Radio
          label="Radio 2"
          name="radio-2"
          value="radio2"
          checked={this.state.radioValue === 'radio2'}
          onChange={this.onRadioChange}
        />

        <p>
          Or as a group with <code>RadioGroup</code>
        </p>

        <RadioGroup value={this.state.radioValue} onChange={this.onRadioChange}>
          <Radio
            label="Radio 3 (Disabled)"
            name="radio-3"
            value="radio3"
            disabled
          />
          <Radio label="Radio 4" name="radio-4" value="radio4" />
        </RadioGroup>

        <p>
          You can also disable a label by passing <code>false</code> explicitly
        </p>

        <Radio
          label={false}
          name="radio-5-no-label"
          value="radio5"
          checked={this.state.radioValue === 'radio5'}
          onChange={this.onRadioChange}
        />
      </div>
    );
  }
}

export default RadioComponent;

```


