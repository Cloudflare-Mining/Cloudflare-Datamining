# `@flatfile/listener-driver-pubsub`

This document provides instructions on how to use the `PubSubDriver` class, a utility for the `@flatfile/listener` package.

## Introduction

`PubSubDriver` is an `EventDriver` that uses a real-time messaging system to listen for events. It uses the Flatfile API to authenticate, and automatically handles re-authentication if necessary.

The driver requires a `scope`, which can either be an environment or space ID. It also sets up an interceptor for Axios, which helps in debugging HTTP requests.

## Usage

Import the necessary dependencies:

```javascript
import { EventDriver } from '@flatfile/listener'
import { PubSubDriver } from './PubSubDriver'
```

Create a new `PubSubDriver` instance, passing the `scope` as a string (either an environment ID or a space ID):

```javascript
const pubSubDriver = new PubSubDriver('your-environment-or-space-id')
```

Start the driver:

```javascript
pubSubDriver.mount(instanceOfListenerClient)
pubSubDriver.start()
```

Please note that the `start` method is asynchronous and returns a Promise.

The `PubSubDriver` instance will automatically subscribe to the event channel corresponding to the provided `scope`, and will start processing events as they come in.

It also handles connection status events, logging successful connections and errors, and automatically reauthenticating if necessary.

## Logging

The `PubSubDriver` uses the `Debugger` from the `@flatfile/utils-debugger` package to log events. Log entries include successful connections, errors, and event processing info.

For example, when the driver successfully connects to the event stream, it logs a success message with the scope:

```shell
  ✅ Connected to event stream for scope your-environment-or-space-id
```

Please refer to the `@flatfile/utils-debugger` package documentation for more information on how logging works.

## Axios Interceptor

The `axiosInterceptor` from `@flatfile/utils-debugger` is automatically set up when the `PubSubDriver` is started, which can help with debugging HTTP requests made using Axios.

Please refer to the `@flatfile/utils-debugger` package documentation for more information on how the Axios interceptor works.

## Errors

If the `scope` is not provided during the initialization of `PubSubDriver`, an error is thrown:

```shell
Error: scope is required (must be an environment or space id)
```

Please ensure that a valid `scope` is provided when creating a new `PubSubDriver` instance.
