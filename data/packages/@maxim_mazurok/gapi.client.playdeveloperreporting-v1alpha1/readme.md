# TypeScript typings for Google Play Developer Reporting API v1alpha1

For detailed description please check [documentation](https://developers.google.com/play/developer/reporting).

## Installing

Install typings for Google Play Developer Reporting API:

```
npm install @types/gapi.client.playdeveloperreporting-v1alpha1 --save-dev
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
  'https://playdeveloperreporting.googleapis.com/$discovery/rest?version=v1alpha1',
  () => {
    // now we can use:
    // gapi.client.playdeveloperreporting
  }
);
```

```typescript
// Deprecated, use discovery document URL, see https://github.com/google/google-api-javascript-client/blob/master/docs/reference.md#----gapiclientloadname----version----callback--
gapi.client.load('playdeveloperreporting', 'v1alpha1', () => {
  // now we can use:
  // gapi.client.playdeveloperreporting
});
```

Don't forget to authenticate your client before sending any request to resources:

```typescript
// declare client_id registered in Google Developers Console
var client_id = '',
  scope = [
    // See metrics and data about the apps in your Google Play Developer account
    'https://www.googleapis.com/auth/playdeveloperreporting',
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

After that you can use Google Play Developer Reporting API resources: <!-- TODO: make this work for multiple namespaces -->

```typescript
/*
Lists anomalies in any of the datasets.
*/
await gapi.client.playdeveloperreporting.anomalies.list({parent: 'parent'});

/*
Describes filtering options for releases.
*/
await gapi.client.playdeveloperreporting.apps.fetchReleaseFilterOptions({
  name: 'name',
});

/*
Searches for Apps accessible by the user.
*/
await gapi.client.playdeveloperreporting.apps.search({});
```
