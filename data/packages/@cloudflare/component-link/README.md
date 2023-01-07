# @cloudflare/component-link

> Cloudflare Link Component

## Installation
Installation with yarn is recommended

```sh

$ yarn add @cloudflare/component-link

```

## Usage

```jsx
import React from 'react';
import { Link } from '../../src';

class LinkComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
  }

  handleClick() {
    console.log('handleClick!');
  }

  handleExpandedClick() {
    this.setState({ isActive: !this.state.isActive });
  }

  render() {
    return (
      <div>
        <p>
          Create a <code>Link</code> with a <code>to</code> prop:
        </p>
        <Link to="/">Link to /</Link>

        <p>
          Alternatively you can pass an <code>onClick</code> handler:
        </p>
        <Link onClick={this.handleClick.bind(this)}>Link to something</Link>
        <p>{`Note: This will give it a role="button"`}</p>

        <p>
          All additional props will be added to the <code>Link</code> element:
        </p>
        <Link to="/foo">Link to /foo</Link>

        <p>Links can be disabled:</p>
        <Link disabled to="/foo">
          Link to /foo
        </Link>

        <p>You can create an expandable link by giving it an expandable prop</p>
        <Link
          onClick={this.handleExpandedClick.bind(this)}
          isActive={this.state.isActive}
          expandable
        >
          Link to /foo
        </Link>
      </div>
    );
  }
}

export default LinkComponent;

```


