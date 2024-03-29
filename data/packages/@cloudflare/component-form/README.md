# @cloudflare/component-form

> Cloudflare Form Component

## Installation
Installation with yarn is recommended

```sh

$ yarn add @cloudflare/component-form

```

## Usage

```jsx
import React from 'react';
import {
  Form,
  FormHeader,
  FormFooter,
  FormFieldset,
  FormLabel,
  FormFieldError
} from '../../src';
import { Input } from '@cloudflare/component-input';
import { Select } from '@cloudflare/component-select';
import { Textarea } from '@cloudflare/component-textarea';
import { Button } from '@cloudflare/component-button';

class FormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      type: 'suggestion',
      message: 'This is blasphemy! This is madness!'
    };

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFirstNameChange(e) {
    this.setState({ firstName: e.value });
  }

  handleLastNameChange(e) {
    this.setState({ lastName: e.value });
  }

  handleTypeChange(type) {
    this.setState({ type });
  }

  handleMessageChange(e) {
    this.setState({ message: e.value });
  }

  handleSubmit() {
    console.log(JSON.stringify(this.state, null, 2));
    this.setState({
      firstName: '',
      lastName: '',
      type: 'suggestion',
      message: ''
    });
  }

  render() {
    return (
      <Form layout="horizontal" onSubmit={this.handleSubmit}>
        <FormHeader title="Feedback Form" />
        <FormFieldset legend="Name">
          <FormLabel htmlFor="firstName">First Name</FormLabel>
          <Input
            id="firstName"
            name="firstName"
            type="text"
            value={this.state.firstName}
            onChange={this.handleFirstNameChange}
          />
          <FormLabel htmlFor="lastName">Last Name</FormLabel>
          <Input
            id="lastName"
            name="lastName"
            type="text"
            value={this.state.lastName}
            onChange={this.handleLastNameChange}
          />
        </FormFieldset>

        <FormFieldset legend="Type">
          <FormLabel htmlfor="type" hidden>
            Type
          </FormLabel>
          <Select
            id="type"
            options={[
              { value: 'suggestion', label: 'Suggestion' },
              { value: 'problem', label: 'Problem' }
            ]}
            value={this.state.type}
            onChange={this.handleTypeChange}
          />
        </FormFieldset>

        <FormFieldset legend="Message">
          <FormLabel htmlFor="message" hidden>
            Message
          </FormLabel>
          <Textarea
            id="message"
            name="message"
            value={this.state.message}
            onChange={this.handleMessageChange}
          />
          <FormFieldError
            field={{ invalid: true }}
            validations={{
              response: 'Madness? This is Sparta!',
              otherResponse: 'Wax on, wax off'
            }}
          />
        </FormFieldset>

        <FormFooter>
          <Button submit type="primary" onClick={this.handleSubmit}>
            Submit
          </Button>
        </FormFooter>
      </Form>
    );
  }
}

export default FormComponent;

```


