# TypeScript typings for AdSense Management API v2

The AdSense Management API allows publishers to access their inventory and run earnings and performance reports.
For detailed description please check [documentation](https://developers.google.com/adsense/management/).

## Installing

Install typings for AdSense Management API:

```
npm install @types/gapi.client.adsense-v2 --save-dev
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
  'https://adsense.googleapis.com/$discovery/rest?version=v2',
  () => {
    // now we can use:
    // gapi.client.adsense
  }
);
```

```typescript
// Deprecated, use discovery document URL, see https://github.com/google/google-api-javascript-client/blob/master/docs/reference.md#----gapiclientloadname----version----callback--
gapi.client.load('adsense', 'v2', () => {
  // now we can use:
  // gapi.client.adsense
});
```

Don't forget to authenticate your client before sending any request to resources:

```typescript
// declare client_id registered in Google Developers Console
var client_id = '',
  scope = [
    // View and manage your AdSense data
    'https://www.googleapis.com/auth/adsense',

    // View your AdSense data
    'https://www.googleapis.com/auth/adsense.readonly',
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

After that you can use AdSense Management API resources: <!-- TODO: make this work for multiple namespaces -->

```typescript
/*
Gets information about the selected AdSense account.
*/
await gapi.client.adsense.accounts.get({name: 'name'});

/*
Gets the ad blocking recovery tag of an account.
*/
await gapi.client.adsense.accounts.getAdBlockingRecoveryTag({name: 'name'});

/*
Lists all accounts available to this user.
*/
await gapi.client.adsense.accounts.list({});

/*
Lists all accounts directly managed by the given AdSense account.
*/
await gapi.client.adsense.accounts.listChildAccounts({parent: 'parent'});
```
