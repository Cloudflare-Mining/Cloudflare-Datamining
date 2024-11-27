# cloudflare-worker-adapter

This is a simple Cloudflare Workers adapter that allows this project to run independently without the need for Cloudflare Worker. Currently supported features include:

- TOML configuration file parsing
- Multiple KVNameSpace implementations
- fetch with proxy functionality

## Installation

```sh
npm i cloudflare-worker-adapter --save
```

## Usage

```typescript
const config: Config = {
    port: 8787, // Port to listen on
    hostname: '0.0.0.0', // Hostname to listen on
    options: {
        DATABASE: cache, // Cloudflare Workers bindings
    },
    config: './test/wrangler.toml', // Path to wrangler.toml
    setting: {
        baseURL: 'https://example.com', // Base URL for the worker fetch
    },
};

// Replace the following code with your own code
async function workerFetch(req: Request) {
    console.log('Request:', req.url);
    return await fetch('https://api.github.com/users/tbxark');
}

startServer(config.port, config.hostname, config.config, config.options, config.setting, workerFetch);
```

## About
This project is designed to provide a simple Cloudflare Worker runtime for the **ChatGPT-Telegram-Workers** project, and more Cloudflare Worker features may be added in the future. For more detailed usage, please refer to the [ChatGPT-Telegram-Workers](https://github.com/TBXark/ChatGPT-Telegram-Workers) project.

## License

**cloudflare-worker-adapter** is released under the MIT license. [See LICENSE](LICENSE) for details.