# redux-fields

redux-fields is a minimalistic library that synchronize form field values with
redux. It supports:

* deeply nested form fields
* initial values
* dynamic forms
* inputs, selects and textareas

It uses [seamless-immutable](https://github.com/rtfeldman/seamless-immutable) to
ensure immutability of all stored values. It attaches to your inputs only three
props: `name`, `value` and `onChange`.

## Installation

```bash
yarn add @cloudflare/redux-fields
```

## Register the reducer

```jsx
import { fieldsReducer } from '@cloudflare/redux-fields';
const store = createStore(
  combineReducers({
    fields: fieldsReducer
  })
);
```

## Usage

```jsx
import { connectFields } from '@cloudflare/redux-fields';

const Form = ({ fields }) => (
  <div>
    <input type="text" {...fields.email} />
    <input type="password" {...fields.password} />
    <input type="text" {...fields.website} />
    <button onClick={() => console.log(fields.$values()}>
      Submit
    </button>
    <button onClick={() => console.log(fields.$reset()}>
      Reset
    </button>
  </div>
);

export default connectFields(Form, {
  path: props => ['onboarding', 'signup'],
  fields: ['email', 'password', 'website'],
  getInitialState: props => ({
    website: 'http://example.com'
  })
});
```

## Documentation

### connectFields(Component, options)

#### options

* **path** - unique object path for your fields, it can be a function if props
  needed, array or string (for single node path)
* **fields** - input fields you want to track, it has to be an array
* **getInitialState** - function to initialize field values, optional
* **resetOnUnmount** - boolean indicating if the state should be cleared when
  the component unmounts. Default is false

### this.props.fields

* **fields.$values()** - returns an object with field values
* **fields.$reset()** - resets all field values
* **fields.$setValue(field, value)** - programatically sets the field value, in
  case you can't rely on onChange event

## But where is the validation? Form submit?

Validation is out of the scope. This library just persists the state with redux
so you don't have to write a ton of boilerplate but gives you maximum freedom.
Some error displaying functionality should be delegated to `cf-component-input`.

Do you miss `<form>` and `onSubmit`? You can still use it. `redux-fields` works
great for a single input as well as for complex nested forms. It is completely
up to how to handle the submit.
