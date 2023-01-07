# @cloudflare/component-textarea

> Cloudflare Textarea Component

## Installation
Installation with yarn is recommended

```sh

$ yarn add @cloudflare/component-textarea

```

## Usage

```jsx
import React from 'react';
import { Textarea } from '../../src';

class TextareaComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textareaValue: ''
    };
  }

  handleTextareaChange(e) {
    this.setState({
      textareaValue: e.target.value
    });
  }

  render() {
    return (
      <Textarea
        name="example"
        value={this.state.textareaValue}
        onChange={this.handleTextareaChange.bind(this)}
        rows={4}
      />
    );
  }
}

export default TextareaComponent;

```


