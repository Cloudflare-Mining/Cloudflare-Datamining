# Cloudflare MCP Server (WIP)

This is a Model Context Protocol (MCP) server for interacting with Cloudflare services. It provides a unified interface for managing Cloudflare KV Store, Workers, and Analytics.

## Features

### Workers Management
- `worker_list`: List all Workers in your account
- `worker_get`: Get a Worker's script content
- `worker_put`: Create or update a Worker script
- `worker_delete`: Delete a Worker script

### Analytics
- `analytics_get`: Retrieve analytics data for your domain
  - Includes metrics like requests, bandwidth, threats, and page views
  - Supports date range filtering

## Setup

1. Run `npx @cloudflare/mcp-server-cloudflare init`
2. Restart Claude Desktop, you should see a small 🔨 icon that shows the following tools available for use:

### KV Store
```javascript
// Get value
kv_get({ key: "myKey" })

// Store value
kv_put({ key: "myKey", value: "myValue" })

// List keys
kv_list({ prefix: "app_", limit: 10 })
```

### Workers
```javascript
// List workers
worker_list()

// Get worker code
worker_get({ name: "my-worker" })

// Update worker
worker_put({ 
    name: "my-worker",
    script: "addEventListener('fetch', event => { ... })"
})
```

### Analytics
```javascript
// Get today's analytics
analytics_get({ 
    zoneId: "your_zone_id",
    since: "2024-11-26T00:00:00Z",
    until: "2024-11-26T23:59:59Z"
})
```

## Contributing

In the current project folder, run:

```
pnpm install
pnpm build:watch
```

Then, in a second terminal:

```
node dist/index.js
```

Contributions are welcome! Please feel free to submit a Pull Request.
