[![npm version](https://badge.fury.io/js/strapi-provider-cloudflare-r2.svg)](https://badge.fury.io/js/strapi-provider-cloudflare-r2)

# strapi-provider-cloudflare-r2

## Installation

```bash
# using yarn
yarn add strapi-provider-cloudflare-r2

# using npm
npm install strapi-provider-cloudflare-r2 --save

# using pnpm
pnpm add strapi-provider-cloudflare-r2
```

## Configuration

- `provider` defines the name of the provider
- `providerOptions` is passed down during the construction of the provider. (ex: `new AWS.S3(config)`). [Complete list of options](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#constructor-property)
- `actionOptions` is passed directly to the parameters to each method respectively. You can find the complete list of [upload/ uploadStream options](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#upload-property) and [delete options](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#deleteObject-property)

See the [documentation about using a provider](https://docs.strapi.io/developer-docs/latest/plugins/upload.html#using-a-provider) for information on installing and using a provider. To understand how environment variables are used in Strapi, please refer to the [documentation about environment variables](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/configurations/optional/environment.html#environment-variables).

### Provider Configuration

`./config/plugins.js` or `./config/plugins.ts` for TypeScript projects:

```js
module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: "strapi-provider-cloudflare-r2",
      providerOptions: {
        accessKeyId: env("CF_ACCESS_KEY_ID"),
        secretAccessKey: env("CF_ACCESS_SECRET"),
        /**
         * `https://<ACCOUNT_ID>.r2.cloudflarestorage.com`
         */
        endpoint: env("CF_ENDPOINT"),
        params: {
          Bucket: env("CF_BUCKET"),
        },
        /**
         * Set this Option to store the CDN URL of your files and not the R2 endpoint URL in your DB.
         * Can be used in Cloudflare R2 with Domain-Access or Public URL: https://pub-<YOUR_PULIC_BUCKET_ID>.r2.dev
         * This option is required to upload files larger than 5MB, and is highly recommended to be set.
         * Check the cloudflare docs for the setup: https://developers.cloudflare.com/r2/data-access/public-buckets/#enable-public-access-for-your-bucket
         */
        cloudflarePublicAccessUrl: env("CF_PUBLIC_ACCESS_URL"),
        /**
         * Sets if all assets should be uploaded in the root dir regardless the strapi folder.
         * It is useful because strapi sets folder names with numbers, not by user's input folder name
         * By default it is false
         */
        pool: false,
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  // ...
});
```

**Where to find the configuration options**  
You can find all needed values in the Cloudflare dashboard unter `R2`. All your buckets, your account ID and the access keys can be found there.

- endpoint: `https://<ACCOUNT_ID>.r2.cloudflarestorage.com`
- accessKeyId: You need to click on `Manage R2 API Tokens` to create a new token.
- secretAccessKey: You need to click on `Manage R2 API Tokens` to create a new token.

### Security Middleware Configuration

Due to the default settings in the Strapi Security Middleware you will need to modify the `contentSecurityPolicy` settings to properly display thumbnail previews in the Media Library. You should replace the `strapi::security` string with the object below **instead as explained in the [middleware configuration](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/configurations/required/middlewares.html#loading-order) documentation**.

`./config/middlewares.js`

```js
module.exports = ({ env }) => [
  // ...
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            env("CF_PUBLIC_ACCESS_URL") ? env("CF_PUBLIC_ACCESS_URL").replace(/^https?:\/\//, "") : "",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            env("CF_PUBLIC_ACCESS_URL") ? env("CF_PUBLIC_ACCESS_URL").replace(/^https?:\/\//, "") : "",
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  // ...
];
```

### `aws-sdk` configuration and `AWS_...` env variables

As the Clouflare R2 spec follows the AWS S3 spec we make use of `aws-sdk` package to communicate with Cloudflare R2. Because of this dependency all `AWS_...` env variables used to configure the `aws-sdk` are still beeing pulled in by this dependency. If you do not want to configure any special functionality of the `aws-sdk` then make sure to remove all `AWS_...` env variables in you deployment.

## Bucket CORS Configuration

Do not forget to configure your R2 Endpoint CORS settings as described here: https://developers.cloudflare.com/r2/buckets/cors/

The simplest configuration is to allow GET from all origins:

```json
[
  {
    "AllowedOrigins": ["*"],
    "AllowedMethods": ["GET"]
  }
]
```

More safe would be to only allow it from your Strapi deployment Origins (**better for production**):

```json
[
  {
    "AllowedOrigins": ["YOUR STRAPI URL"],
    "AllowedMethods": ["GET"]
  }
]
```


## Sponsors

[Strapi Plugin developed and maintained by trieb.work cloud consulting](https://trieb.work/)
