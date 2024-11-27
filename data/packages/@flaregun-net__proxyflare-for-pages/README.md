# Proxyflare for Cloudflare Pages

[Visit our website](https://flaregun.net/docs/latest/proxyflare/plugin/getting-started) for the full documentation.

## Overview

Proxyflare is a reverse proxy that makes it easy to move HTTP traffic around your domain and across the internet.

This package provides Proxyflare as a [Cloudflare Pages](https://developers.cloudflare.com/pages) plugin. Any website deployed on Cloudflare Pages may use Proxyflare.

Proxyflare is a middleware layer that matches incoming requests to `Routes` in your `Configuration`.

Refer to the Cloudflare documentation for more information about [Pages Middleware](https://developers.cloudflare.com/pages/platform/functions/middleware/), [Pages Functions](https://developers.cloudflare.com/pages/platform/functions) and other awesome community [Plugins](https://developers.cloudflare.com/pages/platform/functions/plugins/) that can enhance your website.

## Use cases

### Proxy traffic to another service

Proxy traffic from a part of your domain to another service on the same domain or elsewhere on the internet

#### Examples

1. Move traffic from `https://yoursite.com/api/*` to `https://your-hosted-api.com`
1. Host a service on `https://torrents.yoursite.com/*` that points to `http://yoursite.com:41321`

#### Notes

- Proxyflare works over `http(s):` and `ws(s):` (websockets)
- A proxied service must be available on the public internet
- Both standard and custom ports are supported (e.g. `80`, `443`, `8787`, etc.)

[Learn more](https://flaregun.net/docs/latest/proxyflare/plugin/tutorials/proxying-services)

### Mount a hosted website on your domain

#### Examples

1. Mount your React-powered documentation hosted at `https://hosted-docs.com` on `https://yoursite.com/docs/*`
1. Mount a WordPress site hosted at `https://some-wordpress-blog.com` on `https://yoursite.com/blog/*`

#### Notes

- Mounted websites should configure the base url to match its mounted pathname
- Static resources such as stylesheets must be carefully added to `Route["to.website.resources"]`

[Learn more](https://flaregun.net/docs/latest/proxyflare/plugin/tutorials/proxying-websites)

### Redirect traffic from one place to another

1. Version an API (e.g. redirect `/v2/api`)
1. Redirect stale content URLs

#### Notes

- Redirects are wildcard-compatible
- Any 300-level status code is supported

[Learn more](https://flaregun.net/docs/latest/proxyflare/plugin/tutorials/redirecting-traffic)

### Serve static content through Proxyflare

1. Publish unique `robots.txt` and other website metadata files around your domain

#### Notes

- Custom response headers are supported to set `Content-Type` for text, JSON, or others
- Text files should be no larger than 16KB

[Learn more](https://flaregun.net/docs/latest/proxyflare/plugin/tutorials/serving-static-responses)

## Install

Install `@flaregun-net/proxyflare-for-pages` and `@cloudflare/workers-types` using your preferred Node.js package manager

```bash
npm install @flaregun-net/proxyflare-for-pages
npm install -D @cloudflare/workers-types
```

## Plug in

### Scaffold

In your Cloudflare Pages project, create a `functions/_middleware.ts` file. The name of this file must be exactly as written because Cloudflare Pages uses the file name internally for routing. If your project already has a `functions/_middleware.ts` that exports a single `onRequest` object, convert it to a list of middleware for convenience. Middleware is called in the order listed.

The `onRequest` middlewares should include the following configuration. Notice that we wrap Proxyflare in a `PagesFunction` in order to use environment variables with Proxyflare. [Learn more](https://flaregun.net/docs/latest/proxyflare/plugin/tutorials/using-environment-variables/) about environment variables and secrets.

```ts
import proxyflare from "@flaregun-net/proxyflare-for-pages"

const routes: Route[] = []

// `PagesFunction` is from @cloudflare/workers-types
export const onRequest: PagesFunction[] = [
  (context) =>
    proxyflare({
      config: {
        global: { debug: true },
        routes,
      },
    })(context),
  // other Pages plugins and middleware
]
```

This is a barebones Proxyflare configuration with `debug` enabled that will help with set up and configuration. Learn more about [debugging Proxyflare](https://flaregun.net/docs/latest/proxyflare/plugin/tutorials/debugging-proxyflare/).

### Configure

Next, you'll need to write your first `Route`. Check out the [use cases](#use-cases) section to find `Route` ideas. If you don't have one yet, try this example:

```ts
const routes: Route[] = [
  {
    from: {
      pattern: "yourdomain.com/proxyflare-example",
      alsoMatchWWWSubdomain: true,
    },
    to: { url: "https://example.com" },
  },
]
```

Replace `yoursite.com` with your domain name.

### Deploy

Once you have a `Route` set up, deploy a new version of your Cloudflare Pages website, and keep an eye on the deployment. Once the deployment is successful, navigate to your domain.

For the example `Route` above, you should see `https://example.com` rendered at `yourdomain.com/proxyflare-example`. If you don't see it, refer to the [debugging Proxyflare](https://flaregun.net/docs/latest/proxyflare/plugin/tutorials/debugging-proxyflare/) section or reach out for help in Discord.

## Next steps

Now that you're up and running, check out the [Tutorials](https://flaregun.net/docs/latest/proxyflare/plugin/tutorials/proxying-services/) to learn more about what you can do with Proxyflare.
