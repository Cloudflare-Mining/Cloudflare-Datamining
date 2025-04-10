# Trace Worker

This worker allows us to add tracking to our product in a provider agnostic way.

Currently it just sends events to Heap.

Sparrow api

sparrow.track(<event name>, {blob})

API /tr/:type

Where type is one of t, pv, c.

```json
body: {
    identity: "sachin@cloudflare.com",
    identity_type: "<some string describing>",
    timestamp: Date.now(),
    event: <event_name>,
    properties: {blob}, <- may contain category in which case we'll log it in GA
}
```
