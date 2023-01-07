# @cloudflare/component-checkbox

> Cloudflare Checkbox Component

## Installation
Installation with yarn is recommended

```sh

$ yarn add @cloudflare/component-checkbox

```

## Usage

```jsx
import React from 'react';
import { Checkbox, CheckboxGroup } from '../../src';

class CheckboxComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkbox1: true,
      checkbox2: false,
      checkboxValues: ['option1'],
      checkbox5: false,
      checkboxMulti: [false, true]
    };
    this.onCheckboxGroupChange = this.onCheckboxGroupChange.bind(this);
  }

  onCheckboxGroupChange(values) {
    this.setState({
      checkboxValues: values
    });
  }

  render() {
    return (
      <div>
        <p>
          You can create them individually with <code>Checkbox</code>
        </p>

        <Checkbox
          label="Checkbox 1"
          name="checkbox-1"
          value="checkbox1"
          checked={this.state.checkbox1}
          onChange={event => this.setState({ checkbox1: event.target.checked })}
        />

        <Checkbox
          label="Checkbox 2"
          name="checkbox-2"
          value="checkbox2"
          checked={this.state.checkbox2}
          onChange={event => this.setState({ checkbox2: event.target.checked })}
        />

        <p>
          Or as a group with <code>CheckboxGroup</code>
        </p>

        <CheckboxGroup
          values={this.state.checkboxValues}
          onChange={this.onCheckboxGroupChange}
        >
          <Checkbox label="Checkbox 3" name="checkbox-3" value="checkbox3" />
          <Checkbox
            mt={2}
            label="Checkbox 4"
            name="checkbox-4"
            value="checkbox4"
          />
        </CheckboxGroup>

        <p>
          You can also disable a label by passing <code>false</code> explicitly
        </p>

        <Checkbox
          label={false}
          name="checkbox-5-no-label"
          value="checkbox5"
          checked={this.state.checkbox5}
          onChange={event => this.setState({ checkbox5: event.target.checked })}
        />

        <p>
          Using the indeterminate state, you can also build a multi-checkbox
          selector
        </p>

        <Checkbox
          label="Select All"
          name="checkbox-all"
          value="checkbox-all"
          checked={this.state.checkboxMulti.every(checked => checked)}
          indeterminate={
            this.state.checkboxMulti.some(checked => checked) &&
            !this.state.checkboxMulti.every(checked => checked)
          }
          onChange={({ target: { checked } }) =>
            this.setState(({ checkboxMulti }) => ({
              checkboxMulti: checkboxMulti.map(() => checked)
            }))
          }
        />

        {this.state.checkboxMulti.map((checked, i) => (
          <Checkbox
            key={i}
            label={`Multi Checkbox ${i + 1}`}
            name={`multi-checkbox-${i}`}
            value={`multiCheckbox${i}`}
            checked={checked}
            onChange={({ target: { checked } }) =>
              this.setState(({ checkboxMulti }) => ({
                checkboxMulti: checkboxMulti.map(
                  (cbState, cbIdx) => (i === cbIdx ? checked : cbState)
                )
              }))
            }
          />
        ))}
      </div>
    );
  }
}

export default CheckboxComponent;

```


