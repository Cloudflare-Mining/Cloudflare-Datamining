# @cloudflare/component-modal

> Cloudflare Modal Component

## Installation
Installation with yarn is recommended

```sh

$ yarn add @cloudflare/component-modal

```

## Usage

```jsx
import React from 'react';
import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalBody,
  ModalFooter,
  ModalActions,
  ModalInfo
} from '../../src';
import { Button } from '@cloudflare/component-button';
import { Box } from '@cloudflare/component-box';

class ModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      width: null,
      showInfo: false
    };
    this.handleRequestOpen = this.handleRequestOpen.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  handleRequestOpen() {
    this.setState({ isModalOpen: true });
  }

  handleRequestClose() {
    this.setState({ isModalOpen: false });
  }

  handleWidthToggle() {
    this.setState(oldState => ({
      width: oldState.width === 'wide' ? null : 'wide'
    }));
  }

  handleInfoToggle() {
    this.setState(() => ({
      showInfo: !this.state.showInfo
    }));
  }

  render() {
    return (
      <div>
        <Button type="default" onClick={this.handleRequestOpen}>
          Open Modal
        </Button>
        <Modal
          isOpen={this.state.isModalOpen}
          onRequestClose={this.handleRequestClose}
          width={this.state.width}
        >
          <ModalHeader>
            <ModalTitle>Hello from Modal</ModalTitle>
            <ModalClose onClick={this.handleRequestClose} />
          </ModalHeader>
          {this.state.showInfo && (
            <ModalInfo>This is some modal Info</ModalInfo>
          )}
          <ModalBody>
            <p>Look at this awesome modal!</p>
          </ModalBody>
          <ModalFooter>
            <ModalActions>
              <Box marginRight="10px" display="inline-block">
                <Button
                  type="default"
                  onClick={this.handleWidthToggle.bind(this)}
                >
                  Toggle width
                </Button>
              </Box>
              <Box marginRight="10px" display="inline-block">
                <Button
                  type="default"
                  onClick={this.handleInfoToggle.bind(this)}
                >
                  Toggle info
                </Button>
              </Box>
              <Button
                type="default"
                onClick={this.handleRequestClose.bind(this)}
              >
                Close Modal
              </Button>
            </ModalActions>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalComponent;

```


