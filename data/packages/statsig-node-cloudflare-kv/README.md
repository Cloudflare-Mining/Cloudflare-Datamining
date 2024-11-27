# Statsig Node Server SDK - Edge Config Adapter
[![npm version](https://badge.fury.io/js/statsig-node-cloudflare-kv.svg)](https://badge.fury.io/js/statsig-node-cloudflare-kv) 

A first party Cloudflare integration with the [Statsig server-side Node.js SDK](https://github.com/statsig-io/node-js-server-sdk).

## Quick Setup
1. Install the Statsig Node SDK
```
npm install statsig-node@5.3.0
```
2. Install this package
```
npm install statsig-node-cloudflare-kv
```
3. Setup the [Statsig Cloudflare Integration](https://console.statsig.com/integrations)
4. Import the package
```
import { CloudflareKVDataAdapter } from 'statsig-node-cloudflare-kv'
```
5. Create an instance of the `CloudflareKVDataAdapter`
```
const dataAdapter = new CloudflareKVDataAdapter(env.YOUR_KV_BINDING, 'statsig-YOUR_COMPANY_ID');
```
6. When initializing the `statsig` sdk, add the adapter to options
```
await statsig.initialize(
    'server-secret-key',
    { dataAdapter: dataAdapter },
);
```
