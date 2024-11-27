[![Actions Status](https://github.com/pulumi/pulumi-cloudflare/workflows/master/badge.svg)](https://github.com/pulumi/pulumi-cloudflare/actions)
[![Slack](http://www.pulumi.com/images/docs/badges/slack.svg)](https://slack.pulumi.com)
[![NPM version](https://badge.fury.io/js/%40pulumi%2Fcloudflare.svg)](https://www.npmjs.com/package/@pulumi/cloudflare)
[![Python version](https://badge.fury.io/py/pulumi-cloudflare.svg)](https://pypi.org/project/pulumi-cloudflare)
[![NuGet version](https://badge.fury.io/nu/pulumi.cloudflare.svg)](https://badge.fury.io/nu/pulumi.cloudflare)
[![PkgGoDev](https://pkg.go.dev/badge/github.com/pulumi/pulumi-cloudflare/sdk/v5/go/cloudflare)](https://pkg.go.dev/github.com/pulumi/pulumi-cloudflare/sdk/v5/go/cloudflare)
[![License](https://img.shields.io/npm/l/%40pulumi%2Fpulumi.svg)](https://github.com/pulumi/pulumi-cloudflare/blob/master/LICENSE)

# Cloudflare Provider

The Cloudflare resource provider for Pulumi lets you use Cloudflare resources
in your cloud programs. To use this package, please [install the Pulumi CLI
first](https://pulumi.io/).

## Installing

This package is available in many languages in the standard packaging formats.

### Node.js (Java/TypeScript)

To use from JavaScript or TypeScript in Node.js, install using either `npm`:

    $ npm install @pulumi/cloudflare

or `yarn`:

    $ yarn add @pulumi/cloudflare

### Python

To use from Python, install using `pip`:

    $ pip install pulumi_cloudflare

### Go

To use from Go, use `go get` to grab the latest version of the library

    $ go get github.com/pulumi/pulumi-cloudflare/sdk/v5

### .NET

To use from .NET, install using `dotnet add package`:

    $ dotnet add package Pulumi.Cloudflare

## Configuration

The following configuration points are available:

- `cloudflare:apiBasePath` - (Optional) Configure the base path used by the API client. Alternatively, can be configured using the `CLOUDFLARE_API_BASE_PATH` environment variable.
- `cloudflare:apiClientLogging` - (Optional) Whether to print logs from the API client (using the default log library logger). Alternatively, can be configured using the `CLOUDFLARE_API_CLIENT_LOGGING` environment variable.
- `cloudflare:apiHostname` - (Optional) Configure the hostname used by the API client. Alternatively, can be configured using the `CLOUDFLARE_API_HOSTNAME` environment variable.
- `cloudflare:apiKey` - (Optional) The API key for operations. Alternatively, can be configured using the `CLOUDFLARE_API_KEY` environment variable. API keys are now considered legacy by Cloudflare, API tokens should be used instead. Must provide only one of `cloudflare:apiKey`, `cloudflare:apiToken`, `cloudflare:apiUserServiceKey`.
- `cloudflare:apiKey` - (Optional) The Cloudflare API key. May be set via the `CLOUDFLARE_API_KEY` environment variable. 
- `cloudflare:apiToken` - (Optional) The API Token for operations. Alternatively, can be configured using the `CLOUDFLARE_API_TOKEN` environment variable. Must provide only one of `cloudflare:apiKey`, `cloudflare:apiToken`, `cloudflare:apiUserServiceKey`.
- `cloudflare:apiUserServiceKey` - (Optional) A special Cloudflare API key good for a restricted set of endpoints. Alternatively, can be configured using the `CLOUDFLARE_API_USER_SERVICE_KEY` environment variable. Must provide only one of `cloudflare:apiKey`, `cloudflare:apiToken`, `cloudflare:apiUserServiceKey`.
- `cloudflare:email` - (Optional) A registered Cloudflare email address. Alternatively, can be configured using the `CLOUDFLARE_EMAIL` environment variable. Required when using `cloudflare:apiKey`. Conflicts with `cloudflare:apiToken`.
- `cloudflare:maxBackoff` - (Optional) Maximum backoff period in seconds after failed API calls. Default: `30`. May be set via the `CLOUDFLARE_MAX_BACKOFF` environment variable.
- `cloudflare:minBackoff` - (Optional) Minimum backoff period in seconds after failed API calls. Default: `1`. May be set via the `CLOUDFLARE_MIN_BACKOFF` environment variable.
- `cloudflare:retries` - (Optional) Maximum number of retries to perform when an API request fails. Default: `3`. May be set via the `CLOUDFLARE_RETRIES` environment variable.
- `cloudflare:rps` - (Optional) RPS limit to apply when making calls to the API. Default: `4`. May be set via the `CLOUDFLARE_RPS` environment variable.
- `cloudflare:userAgentOperatorSuffix` - (Optional) A value to append to the HTTP User Agent for all API calls. This value is not something most users need to modify however, if you are using a non-standard provider or operator configuration, this is recommended to assist in uniquely identifying your traffic. **Setting this value will remove the Pulumi version from the HTTP User Agent string and may have unintended consequences.** Alternatively, can be configured using the `CLOUDFLARE_USER_AGENT_OPERATOR_SUFFIX` environment variable.

## Reference

For further information, please visit [the Cloudflare provider docs](https://www.pulumi.com/docs/intro/cloud-providers/cloudflare) or for detailed reference documentation, please visit [the API docs](https://www.pulumi.com/docs/reference/pkg/cloudflare).
