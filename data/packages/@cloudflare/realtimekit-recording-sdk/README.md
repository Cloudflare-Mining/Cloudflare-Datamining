# Cloudflare RealtimeKit Recording SDK

A powerful SDK for building custom recording UIs for Cloudflare RealtimeKit meetings.

## Overview

The Cloudflare RealtimeKit Recording SDK provides the business logic and tools needed to create custom recording interfaces for real-time communications. Built with TypeScript, it offers a flexible and type-safe way to integrate recording capabilities into your applications.

## Installation

Install using npm:

```bash
npm install @cloudflare/realtimekit-recording-sdk
```

Or using yarn:

```bash
yarn add @cloudflare/realtimekit-recording-sdk
```

## Usage

```typescript
import { RealtimeKitRecording } from '@cloudflare/realtimekit-recording-sdk';
import RealtimeKitClient from '@cloudflare/realtimekit';

// Create the recording SDK instance
const recordingSDK = new RealtimeKitRecording({
  autoStart: true,   // start recording as soon as init is called (default: true)
  autoStop: true,    // automatically stop when all peers leave (default: true)
  waitTimeMs: 60000, // wait 1 min after last peer leaves before stopping (default)
});

// Initialize with a RealtimeKitClient instance
const meeting = await RealtimeKitClient.init({ authToken: '...' });
await recordingSDK.init(meeting);
```

For detailed usage instructions and API documentation, visit the [official documentation](https://developers.cloudflare.com/realtime/realtimekit/recording-guide/create-record-app-using-sdks/).

## License

Distributed under the Apache-2.0 License. See [LICENSE](./LICENSE) for more information.

## Support

For questions and support, visit the [Cloudflare Community](https://community.cloudflare.com) or check out our [documentation](https://developers.cloudflare.com/realtime/realtimekit/).
