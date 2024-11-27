# medusa-file-r2

Cloudflare R2 storage plugin for Medusa. This plugin also supports CSV exports and imports. R2 is S3-compatible object storage service by Cloudflare and has a 10GB/month forever-free tier.

This plugin is written in Typescript and uses ESBuild to create the bundle and files needed to be included in the `medusa.config.js` file.

## Getting Started

1. Create a Cloudflare account: If you don't have one, you can create one [here](https://dash.cloudflare.com/sign-up).
2. Create a R2 bucket: Follow [this guide](https://developers.cloudflare.com/r2/get-started) to create a R2 bucket.
3. Make the bucket public: Follow [this guide](https://developers.cloudflare.com/r2/data-access/public-buckets) to make the bucket public. While managed public access for your buckets through r2.dev cloudflare subdomain is relatively easy, it's preferred to use a custom domain as the managed r2.dev subdomain is rate-limited, custom domain also makes use of Cloudflare Cache to accelerate access to your R2 bucket.
4. Obtain required credentials: You will need the following credentials to configure the plugin:
   - `account_id`: Login to your Cloudflare account and go to the `R2` section. The `account_id` is the `Account ID` in the top right corner.
   - `access_key` and `secret_key` - Follow [this guide](https://developers.cloudflare.com/r2/data-access/s3-api/tokens) to generate Access Key ID and Secret Access Key for your R2 bucket.
   - `bucket`: The name of the R2 bucket you created.
   - `public_url`: The public URL of the R2 bucket you created.
5. Install `medusa-file-r2` plugin: Run the following command in your terminal:

   ```bash
   yarn add medusa-file-r2
   ```

6. Add the plugin to medusa.config.js: Add the following code to your medusa.config.js file:

   ```js
   const plugins = [
     // other plugin configurations
     {
       resolve: "medusa-file-r2",
       options: {
         account_id: "YOUR_ACCOUNT_ID",
         access_key: "YOUR_ACCESS_KEY",
         secret_key: "YOUR_SECRET_KEY",
         bucket: "YOUR_R2_BUCKET_NAME",
         public_url: "YOUR_R2_BUCKET_PUBLIC_URL",
       },
     },
   ];
   ```
