# @cloudflare/component-select

> Cloudflare Select Component

## Installation
Installation with yarn is recommended

```sh

$ yarn add @cloudflare/component-select

```

## Usage

```jsx
import React from 'react';
import { Code } from '@cloudflare/component-code';
import { Select } from '../../src';

class SelectComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
      multiValue: [1, 3]
    };
  }

  handleChange(value) {
    this.setState({ value });
  }

  handleMultiChange(values) {
    this.setState({
      multiValue: values.map(selected => selected.value)
    });
  }

  render() {
    return (
      <div>
        <Select
          label="Basic"
          value={this.state.value}
          options={[
            { value: 1, label: 'One' },
            { value: 2, label: 'Two', disabled: true },
            { value: 3, label: 'Three' }
          ]}
          onChange={this.handleChange.bind(this)}
        />

        <Select
          searchable
          label="Searchable"
          value={this.state.value}
          options={[
            { value: 1, label: 'One' },
            { value: 2, label: 'Two' },
            { value: 3, label: 'Three' }
          ]}
          onChange={this.handleChange.bind(this)}
        />

        <Select
          searchable
          multi
          label="Searchable Multi"
          value={this.state.multiValue}
          options={[
            { value: 1, label: 'One' },
            { value: 2, label: 'Two' },
            { value: 3, label: 'Three' }
          ]}
          onChange={this.handleMultiChange.bind(this)}
        />

        <Select
          disabled
          label="Disabled"
          value={this.state.value}
          options={[
            { value: 1, label: 'One' },
            { value: 2, label: 'Two' },
            { value: 3, label: 'Three' }
          ]}
          onChange={this.handleChange.bind(this)}
        />
        <p>You can make Select searchable:</p>

        <Code isCodeBlock={true}>{`<Select searchable .../>`}</Code>

        <p>Or a multi-select:</p>

        <Code isCodeBlock={true}>{`<Select multi .../>`}</Code>

        <p>Or both!</p>

        <Code isCodeBlock={true}>{`<Select searchable multi .../>`}</Code>

        <p>Async and Creatable are also supported</p>
        <Code isCodeBlock={true}>
          {`<Select async .../>
<Select creatable .../>`}
        </Code>
      </div>
    );
  }
}

export default SelectComponent;

```


