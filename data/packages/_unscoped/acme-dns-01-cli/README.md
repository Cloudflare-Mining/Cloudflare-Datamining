# [acme-dns-01-cli](https://git.rootprojects.org/root/acme-dns-01-cli.js) | a [Root](https://rootprojects.org) project

An extremely simple reference implementation
of an ACME (Let's Encrypt) dns-01 challenge strategy.

This generic implementation can be adapted to work with any node.js ACME client,
although it was built for [Greenlock](https://git.rootprojects.org/root/greenlock-express.js)
and [ACME.js](https://git.rootprojects.org/root/acme-v2.js).

```
_acme-challenge.example.com   TXT   xxxxxxxxxxxxxxxx    TTL 60
```

* Prints the ACME challenge DNS Host and DNS Key Authorization Digest to the terminal
  * (waits for you to hit enter before continuing)
* Let's you know when the challenge as succeeded or failed, and is safe to remove.

Other ACME Challenge Reference Implementations:

* [acme-http-01-cli](https://git.rootprojects.org/root/acme-http-01-cli.js.git)
* [acme-http-01-fs](https://git.rootprojects.org/root/acme-http-01-webroot.js.git)
* [**acme-dns-01-cli**](https://git.rootprojects.org/root/acme-dns-01-cli.js.git)

## Install

```bash
npm install --save acme-dns-01-cli@3.x
```

If you have `greenlock@v2.6` or lower, you'll need the old `le-challenge-dns@2.x` instead.

## Usage

```bash
var Greenlock = require('greenlock');

Greenlock.create({
  ...
, challenges: { 'http-01': require('acme-http-01-fs')
              , 'dns-01': require('acme-dns-01-cli').create({ debug: true })
              , 'tls-alpn-01': require('acme-tls-alpn-01-cli')
              }
  ...
});
```

You can also switch between different implementations by
overwriting the default with the one that you want in `approveDomains()`:

```js
function approveDomains(opts) {
  ...

  if (!opts.challenges) { opts.challenges = {}; }
  opts.challenges['dns-01'] = acmeDns01Cli;
  opts.challenges['http-01'] = ...

  return Promise.resolve({ ... });
}
```

NOTE: If you request a certificate with 6 domains listed,
it will require 6 individual challenges.

## Exposed (Promise) Methods

For ACME Challenge:

* `set(opts)`
* `remove(opts)`

The `dns-01` strategy supports wildcards (whereas `http-01` does not).

The options object has whatever options were set in `approveDomains()`
as well as the `challenge`, which looks like this:

```js
{ challenge: {
    identifier: { type: 'dns', value: 'example.com'
  , wildcard: true
  , altname: '*.example.com'
  , type: 'dns-01'
  , token: 'xxxxxx'
  , keyAuthorization: 'xxxxxx.abc123'
  , dnsHost: '_acme-challenge.example.com'
  , dnsAuthorization: 'xyz567'
  , expires: '1970-01-01T00:00:00Z'
  }
}
```

For greenlock.js internals:

* `options` stores the internal defaults merged with the user-supplied options

Optional:

* `get(limitedOpts)`

Note: Typically there wouldn't be a `get()` for DNS because the NameServer (not Greenlock) answers the requests.
It could be used for testing implementations, but that's about it.
(though I suppose you could implement it if you happen to run your DNS and webserver together... kinda weird though)

If there were an implementation of Greenlock integrated directly into
a NameServer (which currently there is not), it would probably look like this:

```js
{ challenge: {
    type: 'dns-01'
  , identifier: { type: 'dns', value: 'example.com' }
  , token: 'abc123'
  , dnsHost: '_acme-challenge.example.com'
  }
}
```

# Legal &amp; Rules of the Road

Greenlock&trade; and Bluecrypt&trade; are [trademarks](https://rootprojects.org/legal/#trademark) of AJ ONeal

The rule of thumb is "attribute, but don't confuse". For example:

> Built with [Greenlock](https://git.rootprojects.org/root/greenlock.js) (a [Root](https://rootprojects.org) project).

Please [contact us](mailto:aj@therootcompany.com) if you have any questions in regards to our trademark,
attribution, and/or visible source policies. We want to build great software and a great community.

[Greenlock&trade;](https://git.rootprojects.org/root/greenlock.js) |
MPL-2.0 |
[Terms of Use](https://therootcompany.com/legal/#terms) |
[Privacy Policy](https://therootcompany.com/legal/#privacy)
