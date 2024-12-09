# TypeScript typings for Manufacturer Center API v1

Public API for managing Manufacturer Center related data.
For detailed description please check [documentation](https://developers.google.com/manufacturers/).

## Installing

Install typings for Manufacturer Center API:

```
npm install @types/gapi.client.manufacturers-v1 --save-dev
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
  'https://manufacturers.googleapis.com/$discovery/rest?version=v1',
  () => {
    // now we can use:
    // gapi.client.manufacturers
  }
);
```

```typescript
// Deprecated, use discovery document URL, see https://github.com/google/google-api-javascript-client/blob/master/docs/reference.md#----gapiclientloadname----version----callback--
gapi.client.load('manufacturers', 'v1', () => {
  // now we can use:
  // gapi.client.manufacturers
});
```

Don't forget to authenticate your client before sending any request to resources:

```typescript
// declare client_id registered in Google Developers Console
var client_id = '',
  scope = [
    // Manage your product listings for Google Manufacturer Center
    'https://www.googleapis.com/auth/manufacturercenter',
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

After that you can use Manufacturer Center API resources: <!-- TODO: make this work for multiple namespaces -->

```typescript

```
