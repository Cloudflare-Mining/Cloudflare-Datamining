# TypeScript typings for Air Quality API v1

The Air Quality API.
For detailed description please check [documentation](https://developers.google.com/maps/documentation/air-quality).

## Installing

Install typings for Air Quality API:

```
npm install @types/gapi.client.airquality-v1 --save-dev
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
  'https://airquality.googleapis.com/$discovery/rest?version=v1',
  () => {
    // now we can use:
    // gapi.client.airquality
  }
);
```

```typescript
// Deprecated, use discovery document URL, see https://github.com/google/google-api-javascript-client/blob/master/docs/reference.md#----gapiclientloadname----version----callback--
gapi.client.load('airquality', 'v1', () => {
  // now we can use:
  // gapi.client.airquality
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

After that you can use Air Quality API resources: <!-- TODO: make this work for multiple namespaces -->

```typescript
/*
The Current Conditions endpoint provides hourly air quality information in more than 100 countries, up to a 500 x 500 meters resolution. Includes over 70 local indexes and global air quality index and categories.
*/
await gapi.client.airquality.currentConditions.lookup({});

/*
Returns air quality forecast for a specific location for a given time range.
*/
await gapi.client.airquality.forecast.lookup({});

/*
Returns air quality history for a specific location for a given time range.
*/
await gapi.client.airquality.history.lookup({});
```
