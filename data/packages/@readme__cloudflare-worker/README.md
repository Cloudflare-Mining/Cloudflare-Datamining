# ReadMe Metrics + Cloudflare

<p align="center">
  <img src="https://user-images.githubusercontent.com/33762/182927634-2aebeb46-c215-4ac3-9e98-61f931e33583.png" />
</p>

<p align="center">
  Track usage of your API and troubleshoot issues faster.
</p>

<p align="center">
  <a href="https://npm.im/@readme/cloudflare-worker"><img src="https://img.shields.io/npm/v/@readme/cloudflare-worker.svg?style=for-the-badge" alt="Latest release"></a>
  <a href="https://npm.im/@readme/cloudflare-worker"><img src="https://img.shields.io/node/v/@readme/cloudflare-worker.svg?style=for-the-badge" alt="Supported Node versions"></a>
  <a href="https://github.com/readmeio/metrics-sdks"><img src="https://img.shields.io/github/actions/workflow/status/readmeio/metrics-sdks/cloudflare-worker.yml?branch=main&style=for-the-badge" alt="Build status"></a>
</p>

With [ReadMe's Metrics API](https://readme.com/metrics) your team can get deep insights into your API's usage. If you're a developer, it takes a few small steps to send your API logs to [ReadMe](http://readme.com). Here's an overview of how the integration works:

- You add the Cloudflare Worker to your Cloudflare account
- The Cloudflare Worker sends ReadMe the details of your API's incoming requests and outgoing responses, with the option for you to redact any private parameters or headers.
- ReadMe uses these request and response details to create an API Metrics Dashboard which can be used to analyze specific API calls or monitor aggregate usage data.

**For information on how to set it up, check out our [integration documentation](https://docs.readme.com/docs/sending-logs-to-readme-with-cloudflare).**

> 🚧 Any Issues?
>
> Integrations can be tricky! [Contact support](https://docs.readme.com/guides/docs/contact-support) if you have any questions/issues.
