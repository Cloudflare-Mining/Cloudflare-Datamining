# TypeScript typings for Cloud Document AI API v1beta3

Service to parse structured information from unstructured or semi-structured documents using state-of-the-art Google AI such as natural language, computer vision, translation, and AutoML.
For detailed description please check [documentation](https://cloud.google.com/document-ai/docs/).

## Installing

Install typings for Cloud Document AI API:

```
npm install @types/gapi.client.documentai-v1beta3 --save-dev
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
  'https://documentai.googleapis.com/$discovery/rest?version=v1beta3',
  () => {
    // now we can use:
    // gapi.client.documentai
  }
);
```

```typescript
// Deprecated, use discovery document URL, see https://github.com/google/google-api-javascript-client/blob/master/docs/reference.md#----gapiclientloadname----version----callback--
gapi.client.load('documentai', 'v1beta3', () => {
  // now we can use:
  // gapi.client.documentai
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

After that you can use Cloud Document AI API resources: <!-- TODO: make this work for multiple namespaces -->

```typescript

```
