# LaunchDarkly Cloudflare SDK

[![NPM][sdk-cloudflare-npm-badge]][sdk-cloudflare-npm-link]
[![Actions Status][sdk-cloudflare-ci-badge]][sdk-cloudflare-ci]
[![Documentation][sdk-cloudflare-ghp-badge]][sdk-cloudflare-ghp-link]
[![NPM][sdk-cloudflare-dm-badge]][sdk-cloudflare-npm-link]
[![NPM][sdk-cloudflare-dt-badge]][sdk-cloudflare-npm-link]

The LaunchDarkly Cloudflare SDK is designed primarily for use in multi-user Cloudflare workers. It follows the server-side LaunchDarkly model for multi-user contexts. It is not intended for use in desktop and embedded systems applications.

This SDK is a replacement of [launchdarkly-cloudflare-edge-sdk](https://github.com/launchdarkly/cloudflare-edge-sdk). Please consider updating your application to use this package instead.

For more information, see the [complete reference guide for this SDK](https://docs.launchdarkly.com/sdk/server-side/cloudflare).

## Install

```shell
# npm
npm i @launchdarkly/cloudflare-server-sdk

# yarn
yarn add @launchdarkly/cloudflare-server-sdk

# jsr
npx jsr add @launchdarkly/cloudflare-server-sdk
```

Then turn on the Node.js compatibility flag in your `wrangler.toml`. This allows the SDK to use `node:events`:

```toml
compatibility_flags = [ "nodejs_compat" ]
```

## Additional JSR setup

If you want to install this package as a JSR package, you will need to use [`esbuild` version >= 19.7](https://github.com/evanw/esbuild/releases/tag/v0.19.7) to enable support for `import attributes`.

## Quickstart

Initialize the ldClient with your client side sdk key and the [Cloudflare KV namespace](https://developers.cloudflare.com/workers/runtime-apis/kv#kv-bindings):

```typescript
import { init as initLD } from '@launchdarkly/cloudflare-server-sdk';

export default {
  async fetch(request: Request, env: Bindings): Promise<Response> {
    const clientSideID = 'test-client-side-id';
    const flagKey = 'testFlag1';
    const context = { kind: 'user', key: 'test-user-key-1' };

    // init the ldClient, wait and finally evaluate
    const client = initLD(clientSideID, env.LD_KV);
    await client.waitForInitialization();
    const flagValue = await client.variation(flagKey, context, false);

    return new Response(`${flagKey}: ${flagValue}`);
  },
};
```

See the full [example app](https://github.com/launchdarkly/js-core/tree/main/packages/sdk/cloudflare/example).

## Developing this SDK

```shell
# at js-core repo root
yarn && yarn build && cd packages/sdk/cloudflare

# run tests
yarn test
```

## Verifying SDK build provenance with the SLSA framework

LaunchDarkly uses the [SLSA framework](https://slsa.dev/spec/v1.0/about) (Supply-chain Levels for Software Artifacts) to help developers make their supply chain more secure by ensuring the authenticity and build integrity of our published SDK packages. To learn more, see the [provenance guide](PROVENANCE.md).

## About LaunchDarkly

- LaunchDarkly is a continuous delivery platform that provides feature flags as a service and allows developers to iterate quickly and safely. We allow you to easily flag your features and manage them from the LaunchDarkly dashboard. With LaunchDarkly, you can:
  - Roll out a new feature to a subset of your users (like a group of users who opt-in to a beta tester group), gathering feedback and bug reports from real-world use cases.
  - Gradually roll out a feature to an increasing percentage of users, and track the effect that the feature has on key metrics (for instance, how likely is a user to complete a purchase if they have feature A versus feature B?).
  - Turn off a feature that you realize is causing performance problems in production, without needing to re-deploy, or even restart the application with a changed configuration file.
  - Grant access to certain features based on user attributes, like payment plan (eg: users on the ‘gold’ plan get access to more features than users in the ‘silver’ plan).
  - Disable parts of your application to facilitate maintenance, without taking everything offline.
- LaunchDarkly provides feature flag SDKs for a wide variety of languages and technologies. Read [our documentation](https://docs.launchdarkly.com/sdk) for a complete list.
- Explore LaunchDarkly
  - [launchdarkly.com](https://www.launchdarkly.com/ 'LaunchDarkly Main Website') for more information
  - [docs.launchdarkly.com](https://docs.launchdarkly.com/ 'LaunchDarkly Documentation') for our documentation and SDK reference guides
  - [apidocs.launchdarkly.com](https://apidocs.launchdarkly.com/ 'LaunchDarkly API Documentation') for our API documentation
  - [blog.launchdarkly.com](https://blog.launchdarkly.com/ 'LaunchDarkly Blog Documentation') for the latest product updates

[sdk-cloudflare-ci-badge]: https://github.com/launchdarkly/js-core/actions/workflows/cloudflare.yml/badge.svg
[sdk-cloudflare-ci]: https://github.com/launchdarkly/js-core/actions/workflows/cloudflare.yml
[sdk-cloudflare-npm-badge]: https://img.shields.io/npm/v/@launchdarkly/cloudflare-server-sdk.svg?style=flat-square
[sdk-cloudflare-npm-link]: https://www.npmjs.com/package/@launchdarkly/cloudflare-server-sdk
[sdk-cloudflare-ghp-badge]: https://img.shields.io/static/v1?label=GitHub+Pages&message=API+reference&color=00add8
[sdk-cloudflare-ghp-link]: https://launchdarkly.github.io/js-core/packages/sdk/cloudflare/docs/
[sdk-cloudflare-dm-badge]: https://img.shields.io/npm/dm/@launchdarkly/cloudflare-server-sdk.svg?style=flat-square
[sdk-cloudflare-dt-badge]: https://img.shields.io/npm/dt/@launchdarkly/cloudflare-server-sdk.svg?style=flat-square
