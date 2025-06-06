<!-- PROJECT LOGO --> 
<p align="center">
  <a href="https://cloudflare.com">
    <img src="https://cf-assets.www.cloudflare.com/slt3lc6tev37/6EYsdkdfBcHtgPmgp3YtkD/0b203affd2053988264b9253b13de6b3/logo-thumbnail.png" alt="Logo" width="180">
  </a>

  <h2 align="center">RealtimeKit React Native</h3>

  <p align="center">
    React Native SDK that provides RealtimeKit's core functionality in mobile.
    <br />
    <a href="https://docs.realtime.cloudflare.com/rn-core"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    ·
    <a href="https://community.cloudflare.com/">Report Bug</a>
    ·
    <a href="https://community.cloudflare.com/">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)
- [Installation](#installation)
- [Usage](#usage)
- [About](#about)

<!-- ABOUT THE PROJECT -->
## About The Project

The core SDK provides RealtimeKit's core functionality, while letting a developer build a custom UI over it.

### Built With

- [Cloudflare](https://cloudflare.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Java](https://dev.java/learn/)
- [Objective C](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html#//apple_ref/doc/uid/TP40011210)


## Installation

1. Install NPM packages

```sh
npm install @cloudflare/realtimekit-react-native @cloudflare/react-native-webrtc
```  

_Note: For platform specific installation instructions, please refer to the [Documentation](https://docs.realtime.cloudflare.com/rn-core)._
<!-- USAGE EXAMPLES -->
## Usage

A `meeting` object can be created using the `useRealtimeKitClient()` hook.

```ts
import React from 'react';
import { useRealtimeKitClient, RealtimeKitProvider } from '@cloudflare/realtimekit-react-native';

export default function App() {
  const [meeting, initMeeting] = useRealtimeKitClient();
  React.useEffect(() => {
    const init = async () => {
      const meetingOptions = {
        audio: true,
        video: true,
      };
      await initMeeting({
        authToken: 'YourAuthToken',
        defaults: meetingOptions,
      });
    };
    init();
    if (meeting) meeting.joinRoom();
  }, []);

  if (meeting)
    return (
      <RealtimeKitProvider value={meeting}>
        {/* Render you Components here*/}
        {/* Components rendered inside RealtimeKitProvider can access RealtimeKitClient object using useRealtimeKitMeeting() hook */}
      </RealtimeKitProvider>
    );
}
```

The `meeting` object is used for all interaction with Cloudflare's servers. For example, the following code snippet is used for a user to join a room.

```ts
await meeting.joinRoom();
```

_For more examples, please refer to the [Documentation](https://docs.realtime.cloudflare.com/rn-core)._

## About

`@cloudflare/realtimekit-react-native` is created & maintained by Cloudflare, Inc.

The names and logos for Cloudflare are trademarks of Cloudflare, Inc.
