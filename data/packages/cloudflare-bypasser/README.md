CloudflareBypasser
==================

A simple enough module to bypass Cloudflare's anti-bot page ("I'm Under Attack Mode", or IUAM). Cloudflare Inc. periodically updates logic of this page.

You can use this module to scrape different websites protected with Cloudflare. (I use it for connection to websockets of one site).

In general, CloudFlare has 4 types of common anti-bot pages:
- Simple html+javascript page with challenge.
- Page which redirects to original site (usually after solving challenge).
- Page with reCaptcha.
- Page with error.

**Note:** this module uses [request-promise](https://www.npmjs.com/package/request-promise) and [Bluebird](https://www.npmjs.com/package/bluebird).

Install
=======

```
npm i cloudflare-bypasser
```

Usage
=====

```js
const CloudflareBypasser = require('cloudflare-bypasser');

let cf = new CloudflareBypasser();

cf.request('https://website.org')
.then(res => {
  // res - full response
});

cf.request({
  url: 'https://website.org',
  headers: {
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    ...
  }
})
.then(res => {
  // res - full response
});
```

new CloudflareBypasser(options)
===============================

*options* is an optional object
- `delay` - milliseconds to wait before send solve challenge *(default: 5000)*
- `userAgent` - set default http header *user-agent* attached to each request *(default: random from prepared list)*
- `headers` - http-headers object with defaults for each request *(default: {})*



.request(options)
=================
*options* is same with [request-promise](https://www.npmjs.com/package/request-promise). But with some permanent options:
```js
{
  resolveWithFullResponse: true,
  simple                 : false,
  followRedirect         : false
}
```
Note: `followRedirect` - we must do the redirects ourselves.

get .jar
========
Returns request jar with cookies.

get .userAgent
==============
Returns random selected *user-agent* if it was not specified.


# PLEASE HElP!
Sorry, but i need a help to improve this package: tests and README. It's my first public package. I will be very grateful for the help.
