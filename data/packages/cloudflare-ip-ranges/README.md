# Cloudflare IP ranges

![npm](https://img.shields.io/npm/v/cloudflare-ip-ranges.svg)
![npm](https://img.shields.io/npm/dy/cloudflare-ip-ranges.svg)
![Travis (.org)](https://img.shields.io/travis/sampsakuronen/cloudflare-ip-ranges.svg)

Get Cloudflare IPs for use in trust proxy configurations.

This package will be updated if Cloudflare ever decides to change the endpoints for retrieving current IPs. We will most likely never see a breaking change for this package.

<p align="center">
  <img width="460" src="https://github.com/sampsakuronen/cloudflare-ip-ranges/raw/master/README-image.png?raw=true">
</p>

## Install

    npm install --save cloudflare-ip-ranges

## Usage

For use in an Express environment please see [Express documentation on trust proxies](https://expressjs.com/en/guide/behind-proxies.html).

It is recommended to use `setInterval` for updating the IP list periodically.

#### Directly update trust proxies for an Express app

    const cloudflareIPRanges = require('cloudflare-ip-ranges')

    updateTrustProxy(app)
    setInterval(() => {
      updateTrustProxy(app)
    }, 1000*60*60*12)

#### Getting a list of IPs and updating trust proxies manually

Useful if you need to list other proxies alongside the Cloudflare ones.

      cloudflareIPRanges.updateIPs()
        .then((ips) => {
          app.set('trust proxy', ['loopback', ...ips])
        })

## API

Method | Info
------------ | -------------
updateIPs | By default returns `Promise<string[]>`. By specifying `{ versioned: true }` as an argument you get an object that contains `V4` and `V6` separately (`Promise<{ V4: string[], V6: string[] }>`).
updateTrustProxy | Takes an Express app instance as an argument. Returns `Promise<void>`.
