## Slack Cloudflare Workers

[![npm version](https://badge.fury.io/js/slack-cloudflare-workers.svg)](https://badge.fury.io/js/slack-cloudflare-workers) 

The **slack-cloudflare-workers** library is a Slack app development framework designed specifically for **Cloudflare Workers**. This framework draws significant inspiration from Slack's [Bolt framework](https://api.slack.com/tools/bolt), but its design does not strictly follow the [bolt-js](https://github.com/slackapi/bolt-js) blueprint.

```bash
npm i slack-cloudflare-workers@latest
```

Key differences include:

* **TypeScript focused**: Enhances type safety and clarifies typings for developers
* **Lazy listener enabled**: [bolt-python's lazy listener feature](https://slack.dev/bolt-python/concepts#lazy-listeners) is provided out of the box
* **Zero additional dependencies**: No other dependencies required beyond TypeScript types and our foundation module [slack-edge](https://github.com/seratch/slack-edge)

Check [our documents](https://github.com/seratch/slack-cloudflare-workers/blob/main/docs/index.md) for more details!
