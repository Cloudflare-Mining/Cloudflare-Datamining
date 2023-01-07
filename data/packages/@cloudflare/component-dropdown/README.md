# @cloudflare/component-dropdown

> Cloudflare Dropdown Component

## Installation
Installation with yarn is recommended

```sh

$ yarn add @cloudflare/component-dropdown

```

## Usage

```jsx
import React from 'react';
import { Dropdown, DropdownLink, DropdownSeparator } from '../../src';
import { Button, ButtonGroup } from '@cloudflare/component-button';
import { Code } from '@cloudflare/component-code';

class DropdownComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdown1Open: false,
      dropdown2Open: false
    };
  }

  render() {
    return (
      <div>
        <ButtonGroup>
          <Button
            type="primary"
            onClick={() => this.setState({ dropdown1Open: true })}
          >
            Open Dropdown 1
          </Button>

          {this.state.dropdown1Open && (
            <Dropdown onClose={() => this.setState({ dropdown1Open: false })}>
              <DropdownLink to="/foo">Link to /foo</DropdownLink>
              <DropdownLink to="/bar">Link to /bar</DropdownLink>
              <DropdownSeparator />
              <DropdownLink to="/baz">Link to /baz</DropdownLink>
              <DropdownLink to="/bat">Link to /bat</DropdownLink>
              <DropdownLink disabled to="/bad">
                Disabled dropdown link
              </DropdownLink>
            </Dropdown>
          )}

          <Button
            type="success"
            onClick={() => this.setState({ dropdown2Open: true })}
          >
            Open Dropdown 2
          </Button>

          {this.state.dropdown2Open && (
            <Dropdown
              align="right"
              onClose={() => this.setState({ dropdown2Open: false })}
            >
              <DropdownLink to="/foo">Link to /foo</DropdownLink>
              <DropdownLink to="/bar">Link to /bar</DropdownLink>
              <DropdownSeparator />
              <DropdownLink to="/baz">Link to /baz</DropdownLink>
              <DropdownLink to="/bat">Link to /bat</DropdownLink>
            </Dropdown>
          )}
        </ButtonGroup>
        <p>
          {`You can also optionally pass an align prop with either "left" or
          "right"`}
        </p>
        <Code isCodeBlock={true}>{`<Dropdown align="right" ...>`}</Code>
        <p>
          <Code>{`<DropdownLink/>`}</Code> just wraps cf-component-link so you
          can use either to to specify a route or pass an onClick handler.
        </p>
        <Code isCodeBlock={true}>{`<DropdownLink to="/my-route"/>`}</Code>
        <Code
          isCodeBlock={true}
        >{`<DropdownLink onClick={this.handleClick}/>`}</Code>
        <p>
          Note: to requires that you setup cf-util-route-handler prior to
          routing.
        </p>
      </div>
    );
  }
}

export default DropdownComponent;

```


