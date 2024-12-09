# TypeScript typings for Pollen API v1

The Pollen API.
For detailed description please check [documentation](https://developers.google.com/maps/documentation/pollen).

## Installing

Install typings for Pollen API:

```
npm install @types/gapi.client.pollen-v1 --save-dev
```

## Usage

You need to initialize Google API client in your code:

```typescript
gapi.load('client', () => {
  // now we can use gapi.client
  // ...
});
```

Then load api client wrapper:

```typescript
gapi.client.load(
  'https://pollen.googleapis.com/$discovery/rest?version=v1',
  () => {
    // now we can use:
    // gapi.client.pollen
  }
);
```

```typescript
// Deprecated, use discovery document URL, see https://github.com/google/google-api-javascript-client/blob/master/docs/reference.md#----gapiclientloadname----version----callback--
gapi.client.load('pollen', 'v1', () => {
  // now we can use:
  // gapi.client.pollen
});
```

Don't forget to authenticate your client before sending any request to resources:

```typescript
// declare client_id registered in Google Developers Console
var client_id = '',
  scope = [
    // See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.
    'https://www.googleapis.com/auth/cloud-platform',
  ],
  immediate = true;
// ...

gapi.auth.authorize(
  {client_id: client_id, scope: scope, immediate: immediate},
  authResult => {
    if (authResult && !authResult.error) {
      /* handle successful authorization */
    } else {
      /* handle authorization error */
    }
  }
);
```

After that you can use Pollen API resources: <!-- TODO: make this work for multiple namespaces -->

```typescript
/*
Returns up to 5 days of daily pollen information in more than 65 countries, up to 1km resolution.
*/
await gapi.client.pollen.forecast.lookup({});
```
