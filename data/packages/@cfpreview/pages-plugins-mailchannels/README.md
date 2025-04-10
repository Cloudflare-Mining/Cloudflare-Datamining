## Pages Plugins

# MailChannels

This Plugin...TOOD

## Installation

```sh
npm install --save @cfpreview/pages-plugins-mailchannels
```

## Usage

```typescript
// ./functions/_middleware.ts

import mailChannelsPlugin from "@cfpreview/pages-plugins-mailchannels";

export const onRequest: PagesFunction = mailChannelsPlugin({
  "Access-Control-Allow-Origin": "*",
});
```
