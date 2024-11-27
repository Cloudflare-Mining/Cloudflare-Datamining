# gatsby-plugin-cloudflare-pages

This plugin adds support for Gatsby redirects and headers on Cloudflare Pages.

The plugin works by automatically generating a `_headers` and `_redirects` file at the root of the public folder to
configure [HTTP headers](https://developers.cloudflare.com/pages/platform/headers/) and
[redirects](https://developers.cloudflare.com/pages/platform/redirects/) on Cloudflare Pages.

By default, the plugin will add some basic security headers. These can be disabled via the plugin config, and you can
also add additional headers through the plugin config.

## Install

```shell
npm install gatsby-plugin-cloudflare-pages
yarn add gatsby-plugin-cloudflare-pages
```

## How to use

Add `gatsby-plugin-cloudflare-pages` to your `gatsby-config`'s `plugins` entry:

```js:title=gatsby-config.ts
module.exports = {
  plugins: [`gatsby-plugin-cloudflare-pages`]
}
```

## Configuration

If you just need the critical assets, you don't need to add any additional config. However, if you want to add headers,
remove default headers, or transform the given headers, you can use the following configuration options:

```js:title=gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-cloudflare-pages`,
      options: {
        headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
  ]
}
```

The `allPageHeaders` option **does not** add a wildcard entry to the `_headers` file. Instead, it adds the headers to every
entry within that file. For a wildcard entry, you should use the `headers` option with a path of `/*`.

### Headers

The headers object represents a JS version of the
[Cloudflare Pages `_headers` file format](https://developers.cloudflare.com/pages/platform/headers/). You should pass in
an object with string keys (representing the paths) and an array of strings for each header.

> Warning
>
> Headers do not apply to responses from Functions which are part of your Pages deployment, even if the route matches
> the URL pattern.

> Warning
>
> Cloudflare only allows a maximum of 100 header rules per project. The plugin will warn you if your file is over this,
> but it will not error your build.

An example:

```js
{
  options: {
    headers: {
      "/*": [
        "Basic-Auth: someuser:somepassword anotheruser:anotherpassword",
      ],
      "/my-page": [
        // This will result in a header of `Basic-Auth: someuser:somepassword anotheruser:anotherpassword, differentuser:differentpassword`
        //.which is likely not what you want
        "Basic-Auth: differentuser:differentpassword",
      ],
    },
  }
}
```

Link paths are specially handled by this plugin. Since most files are processed and cache-busted through Gatsby (with a
file hash), the plugin will transform any base file names to the hashed variants. If the file is not hashed, it will
ensure the path is valid relative to the output `public` folder. You should be able to reference assets imported through
javascript in the `static` folder.

Do not specify the public path in the config, as the plugin will provide it for you.

The Cloudflare Pages `_headers` file allows for routes to inherit headers from multiple definitions. Pages will also
combine headers defined multiple times and concatenate their values with commas. For more info, please read the example
in the [Cloudflare Pages documentation](https://developers.cloudflare.com/pages/platform/headers/).

An `!` entry will override any previous entries for that header on that path.

```javascript
{
  options: {
    allPageHeaders: [
      "Link: </static/my-logo.png>; rel=preload; as=image",
    ],
    headers: {
      "/*": [
        "Basic-Auth: someuser:somepassword anotheruser:anotherpassword",
      ],
      "/no-auth/*": [
        // Unset `Basic-Auth` header for routes under /no-auth/*
        "! Basic-Auth",
      ],
      "/blog/:slug": [
        "X-Article-Name: :slug",
      ],
    },
  }
}
```

### Redirects

You can create redirects using the
[`createRedirect`](https://www.gatsbyjs.com/docs/reference/config-files/actions/#createRedirect) action.

> Warning
>
> Cloudflare Pages cannot create redirects based on language or country, and the `force` option also has no effect.

An example:

```js:title=gatsby-node.js
exports.createPages = ({ actions }) => {
  const { createRedirect } = actions

  createRedirect({ fromPath: '/old-url', toPath: '/new-url', isPermanent: true })
  createRedirect({
    fromPath: '/url_that_is/not_pretty',
    toPath: '/pretty/url',
    statusCode: 307,
  })
  createRedirect({
    fromPath: '/url_that_is/not_pretty',
    toPath: '/pretty/url',
    statusCode: 307,
  })
}
```

You can also create a `_redirects` file in the `static` folder for the same effect. Any programmatically created
redirects will be appended to the file.

```shell
# my manually set redirects
/home              /
/blog/my-post.php  /blog/my-post
```

Redirect rules are automatically added for
[client only paths](https://www.gatsbyjs.com/docs/how-to/routing/client-only-routes-and-user-authentication/). The
plugin uses the [matchPath](https://www.gatsbyjs.com/docs/gatsby-internals-terminology/#matchpath) syntax to match all
possible requests in the range of your client-side routes and serves the HTML file for the client-side route. Without
it, only the exact route of the client-side route works.

If those rules are conflicting with custom rules or if you want to have more control over them you can disable them in
[configuration](#configuration) by setting `generateMatchPathRewrites` to `false`.
