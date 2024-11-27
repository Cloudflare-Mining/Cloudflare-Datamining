# util-http-poll

> Cloudflare HTTP Polling Util

## Installation

```sh
$ yarn add @cloudflare/util-http-poll
```

## Usage

```js
import { Poller } from '@cloudflare/util-http-poll';

const pollingFn = () => {
  /* do something fancy */
};

/*
 The following options can be configured:

  backoffs {Number} - The number of times to backoff and retry
                      after exceeding timeout before quitting
  pollInterval {Number} - The frequency at which to poll
  pollTimeout {Number} - The time after which we stop polling and decide what to do next
  backoffFn: {Function} - Used to decrease the pollInterval frequency
  onError: {Function} - Called when an error is thrown in pollingFn
  haltOnError: {Boolean} - Should stop polling if an error is encountered
*/
const options = { pollTimeout: 30 * 1000 };
const poller = new Poller(pollingFn, options);
poller.startPolling();

// When you're done or unmounting:
poller.destroy();
```
