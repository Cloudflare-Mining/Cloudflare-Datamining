# turnstile-firebase-app-check

This repository leverages the `cloudflare-turnstile-app-check-provider` Firebase extension, and offers an implementation
of a `CustomProvider` using Firebase App Check tokens.

## Sample code

```
const app = initializeApp(firebaseConfig);

const siteKey = 'YOUR-SITEKEY';
const HTTP_ENDPOINT = '${function:function-name.url}';

const cpo = new CloudflareProviderOptions(HTTP_ENDPOINT, siteKey);
const provider = new CustomProvider(cpo);

initializeAppCheck(app, { provider });
```

Note: the firebase function must be using the aforementioned extension.
