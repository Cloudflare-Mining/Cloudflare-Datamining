# component-payment-form

> PaymentMethod Form for Dash and Zero Trust Dash

This component is created specifically to be used on Dash and Zero Trust dashboard. There are some setup requirements needed in order to properly consumer `@cloudflare/payment-form`.

1. import `fieldsReducer` and set this reducer to the `fields` key  (required by `@cloudflare/redux-fields`)
2. import `hCaptchaReducer` and set this reducer to `billing.captcha` key
3. Stripe PaymentElements provider will need to be initialized with a Stripe publishable key. Add the staging and prod public keys to the apps environment/configs and pass this key to `stripePk` prop on `<PaymentMethodForm>`. Ask a member on Billing Team for the key if needed.
4. `usageEnv` prop on `<PaymentMethodForm>` is required and will accept values `'teams' | 'dash'`. This is needed since there are slight differences in dependencies on Zero Trust Dash and Dash and this component will need knowledge of app context for conditional logic.
5. `updateBillingProfile` and `createBillingProfile` prop on `<PaymentMethodForm>` is required and each app is responsible for making this action / endpoint call to subscriptions-api `/api/v4/accounts/:accountId/profile`
6. import sparrow and initialize in the app as sparrow event calls will be made from this component. Documentation can be found https://www.npmjs.com/package/@cloudflare/util-sparrow

```jsx

import {
  fieldsReducer as billingFieldsReducer,
  hCaptchaReducer as billingHCaptchaReducer
} from '@cloudflare/component-payment-form'


const appReducers = combineReducers({
  fields: billingFieldsReducer,
  billing: combineReducers({
    captcha: billingHCaptchaReducer
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
$ yarn add @cloudflare/component-payment-form
```

## Usage

```jsx
import React from 'react';
import PaymentMethodForm from '@cloudflare/component-payment-form';

const ComponentWithPaymentMethodForm => {
  return (
    <PaymentMethodForm
        usageEnv={'teams'}
        stripePk={staging ? '123' : '456'}
        accountId={'12345'}
        updateBillingProfile={() => {}}
        createBillingProfile={() => {}}
      />
  );
}

```
