# @cloudflare/realtimekit-noise-cancellation

Noise cancellation for RealtimeKit Web. This library can filter out background noise from the participant's microphone audio on their device before it is sent to the meeting.

## Install

```sh
npm install @cloudflare/realtimekit-noise-cancellation
```

## Enable noise cancellation

Pass your existing RealtimeKit meeting instance to `init()`:

```ts
import { RealtimeKitNoiseCancellation } from '@cloudflare/realtimekit-noise-cancellation';

const noiseCanceller = await RealtimeKitNoiseCancellation.init({
  meeting,
  autoManage: true,
});
```

`autoManage` defaults to `true`. It enables noise cancellation when the microphone is available and maintains it through mute/unmute and reconnections. If the microphone is muted during initialization, processing starts when it is enabled. The package does not unmute the microphone.

Initialize one noise canceller per meeting instance.

## Toggle at runtime

```ts
// Turn noise cancellation off.
await noiseCanceller.disable();

// Turn it back on while the microphone is active and unmuted.
await noiseCanceller.enable();
```

Disabling noise cancellation restores the microphone's previous processing settings. The meeting's usual microphone controls continue to work.

## Initialization options

| Option       | Required | Description                                                                                                          |
| ------------ | -------- | -------------------------------------------------------------------------------------------------------------------- |
| `meeting`    | Yes      | The RealtimeKit meeting instance.                                                                                    |
| `autoManage` | No       | Defaults to `true`. Automatically enables processing when the microphone is available and disposes on meeting leave. |
| `onError`    | No       | Receives runtime and automatic lifecycle errors as an `Error`.                                                       |
| `signal`     | No       | An `AbortSignal` that cancels initialization and disposes the instance when aborted.                                 |

`init()`, `enable()`, `disable()`, and `dispose()` return promises. Handle their rejections in your application; `onError` does not replace error handling for explicit method calls.

## Cleanup

With `autoManage: true`, the package automatically disposes the noise canceller when the participant leaves the meeting. Temporary disconnections do not dispose it. Switching to a connected meeting disposes the old noise canceller; initialize a new one with the new meeting object. The package does not automatically transfer noise cancellation between meetings.

To release the noise canceller earlier, call:

```ts
await noiseCanceller.dispose();
```

For application-managed cleanup, pass `autoManage: false` and call `enable()`, `disable()`, and `dispose()` yourself. To tie cleanup to an application or component lifecycle, pass an `AbortController`'s signal and abort it on teardown.

The package retains RealtimeKit's microphone and AudioContext ownership. It does not stop the microphone track or close RealtimeKit's AudioContext.

## Read the current state

```ts
const isEnabled = noiseCanceller.enabled;

// Available only while noise cancellation is active.
const status = noiseCanceller.getStatus();
```

`getStatus()` returns processing and capture metadata, including the sample rate and model packaging. TypeScript types are included: `NoiseCancellationOptions` and `NoiseCancellationStatus`.

See the [RealtimeKit documentation](https://developers.cloudflare.com/realtime/realtimekit/) for meeting setup and SDK usage.
