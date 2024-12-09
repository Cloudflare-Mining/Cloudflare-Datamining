# TypeScript typings for Firebase Cloud Messaging API v1

FCM send API that provides a cross-platform messaging solution to reliably deliver messages at no cost.
For detailed description please check [documentation](https://firebase.google.com/docs/cloud-messaging).

## Installing

Install typings for Firebase Cloud Messaging API:

```
npm install @types/gapi.client.fcm-v1 --save-dev
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
  'https://fcm.googleapis.com/$discovery/rest?version=v1',
  () => {
    // now we can use:
    // gapi.client.fcm
  }
);
```

```typescript
// Deprecated, use discovery document URL, see https://github.com/google/google-api-javascript-client/blob/master/docs/reference.md#----gapiclientloadname----version----callback--
gapi.client.load('fcm', 'v1', () => {
  // now we can use:
  // gapi.client.fcm
});
```

Don't forget to authenticate your client before sending any request to resources:

```typescript
// declare client_id registered in Google Developers Console
var client_id = '',
  scope = [
    // See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.
    'https://www.googleapis.com/auth/cloud-platform',

    // Send messages and manage messaging subscriptions for your Firebase applications
    'https://www.googleapis.com/auth/firebase.messaging',
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

After that you can use Firebase Cloud Messaging API resources: <!-- TODO: make this work for multiple namespaces -->

```typescript

```
