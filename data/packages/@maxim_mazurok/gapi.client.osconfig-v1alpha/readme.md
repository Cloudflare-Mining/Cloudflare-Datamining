# TypeScript typings for OS Config API v1alpha

OS management tools that can be used for patch management, patch compliance, and configuration management on VM instances.
For detailed description please check [documentation](https://cloud.google.com/compute/docs/osconfig/rest).

## Installing

Install typings for OS Config API:

```
npm install @types/gapi.client.osconfig-v1alpha --save-dev
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
  'https://osconfig.googleapis.com/$discovery/rest?version=v1alpha',
  () => {
    // now we can use:
    // gapi.client.osconfig
  }
);
```

```typescript
// Deprecated, use discovery document URL, see https://github.com/google/google-api-javascript-client/blob/master/docs/reference.md#----gapiclientloadname----version----callback--
gapi.client.load('osconfig', 'v1alpha', () => {
  // now we can use:
  // gapi.client.osconfig
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

After that you can use OS Config API resources: <!-- TODO: make this work for multiple namespaces -->

```typescript

```
