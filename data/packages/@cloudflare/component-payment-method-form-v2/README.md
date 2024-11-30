# component-payment-method-form-v2

> PaymentMethod Form for Dash and Teams Dash

This component is created specifically to be used on Dash and Teams dashboard. There are some setup requirements needed in order to properly consumer `@cloudflare/payment-method-form-v2`.

1. import `fieldsReducer` and set it to fields key (required by `@cloudflare/redux-fields`)
2. import `hCaptchaReducer` and set it to the billing.captcha key
3. import `creditCardProcessorReducer` and set it to billing.creditCardProcessor key
4. Bootstrap Stripe Elements provider during app init. Documentation can be found https://stripe.com/docs/stripe-js/react#elements-provider. 
5. We want to defer loading of stripe-js script until `loadStripe` is called. Explaination can be found https://github.com/stripe/stripe-js#importing-loadstripe-without-side-effects
6. import sparrow and initial. Documentaiotn can be found https://www.npmjs.com/package/@cloudflare/util-sparrow

```jsx
import { loadStripe } from '@stripe/stripe-js/pure';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_12345678');

render(
  <Elements stripe={stripePromise}>
    <App/>
  </Elements>
);
```

```jsx

import {
  fieldsReducer as billingFieldsReducer,
  hCaptchaReducer as billingHCaptchaReducer,
  credititCardProcessorReducer
} from '@cloudflare/component-payment-method-form-v2'


const appReducers = combineReducers({
  fields: billingFieldsReducer,
  billing: combineReducers({
    captcha: billingHCaptchaReducer,
    creditCardProcessor: credititCardProcessorReducer
  }),
})
```

```jsx
import sparrow from '@cloudflare/util-sparrow'

sparrow.init({
  clientId: 'client-id-string',
  debug: production ? true : false,
  enabled: production ? true : false
  url: production ? 'https://sparrow.cloudflare.com' : ''
})
```

## Installation

```sh
$ yarn add @cloudflare/component-payment-method-form-v2
```

## Usage

```jsx
import React from 'react';
import PaymentMethodForm from './src/index';

class ComponentWithPaymentMethodForm extends React.Component {
  render() {
    return (
      <PaymentMethodForm
          accountId={'12345'}
          updateBillingProfile={() => {}}
          createBillingProfile={() => {}}
        />
    );
  }
}

export default ComponentWithRecaptcha;

```
