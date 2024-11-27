# Key Generation Service (KGS)

## Requirements

-   [Wrangler](https://github.com/cloudflare/wrangler#installation) CLI for Cloudflare Workers deployment
-   [Miniflare](https://miniflare.dev/cli.html) CLI for testing cron trigger locally

## Installation

```sh
npm ci
```

## Development

To test out the cron trigger locally, run the following:

```sh
# At terminal 1
miniflare

# At terminal 2
curl "http://localhost:8787/.mf/scheduled"
```

Note that no actual keys will be created on your actual Cloudflare KV namespaces (not even `preview`). By default, KV data is stored in memory.

## Deployment

The deployment of this project is done using GitHub Actions CI/CD. For more details, check out [kgs.yml](../.github/workflows/kgs.yml).

Alternatively, to publish any new changes to your Cloudflare Worker, run `wrangler publish`.

Before publishing your code you need to edit [`wrangler.toml`](./wrangler.toml) file and add your Cloudflare `account_id` - more information about configuring and publishing your code can be found [in the documentation](https://developers.cloudflare.com/workers/learning/getting-started#7-configure-your-project-for-deployment).

## References

-   https://miniflare.dev/storage/kv
