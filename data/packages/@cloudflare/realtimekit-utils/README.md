# RealtimeKit Utils

Utility functions for Cloudflare RealtimeKit services.

## Overview

This package provides utility functions and helpers used across Cloudflare RealtimeKit services. It includes preset conversion methods, default preset values, and feature flag management integration.

## Installation

Install using npm:

```bash
npm install @cloudflare/realtimekit-utils
```

Or using yarn:

```bash
yarn add @cloudflare/realtimekit-utils
```

## Usage

```typescript
import {
  getDefaultPresetV2,
  convertHybridPresetToV1,
  convertHybridPresetToV2
} from '@cloudflare/realtimekit-utils';

// Use default presets
const preset = getDefaultPresetV2();
```

For detailed usage instructions and API documentation, visit the [official documentation](https://developers.cloudflare.com/realtime/realtimekit/).

## License

Distributed under the Apache-2.0 License.

## Support

For questions and support, visit the [Cloudflare Community](https://community.cloudflare.com) or check out our [documentation](https://developers.cloudflare.com/realtime/realtimekit/).