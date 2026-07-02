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
import { RecordingSDK } from '@cloudflare/realtimekit-recording-sdk';

// Initialize the recording SDK
const recording = new RecordingSDK({
  // Your configuration here
});

// Start recording
await recording.start();

// Stop recording
await recording.stop();
```

For detailed usage instructions and API documentation, visit the [official documentation](https://developers.cloudflare.com/realtime/realtimekit/).

## Development

### Prerequisites

- Node.js (>= 16)
- npm or yarn

### Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build the project
npm run build

# Run tests
npm run test

# Run linting
npm run lint
```

### Contributing

Contributions are welcome! Please read our [DEVELOPMENT.md](./DEVELOPMENT.md) guide for details on our development workflow and how to submit changes.

## License

Distributed under the Apache-2.0 License. See [LICENSE](./LICENSE) for more information.

## Support

For questions and support, visit the [Cloudflare Community](https://community.cloudflare.com) or check out our [documentation](https://developers.cloudflare.com/realtime/realtimekit/).
