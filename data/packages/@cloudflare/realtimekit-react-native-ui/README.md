<!-- PROJECT LOGO -->
<p align="center">
  <a href="https://cloudflare.com">
    <img src="https://cf-assets.www.cloudflare.com/slt3lc6tev37/6EYsdkdfBcHtgPmgp3YtkD/0b203affd2053988264b9253b13de6b3/logo-thumbnail.png" alt="Logo" width="180">
  </a>
  
  <h2 align="center">RealtimeKit React Native UI</h2>

  <p align="center">
    A set of React Native UI components to create realtime communication applications
    <br />
    <a href="https://docs.realtime.cloudflare.com/react-native"><strong>Explore the docs »</strong></a>
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

- [Getting Started](#getting-started)
- [Usage](#usage)
- [About](#about)

<!-- GETTING STARTED -->

## Getting Started


First, you will need to install the [@cloudflare/realtimekit-react-native-ui](https://www.npmjs.com/package/@cloudflare/realtimekit-react-native-ui) along with the [@cloudflare/realtimekit-react-native](https://www.npmjs.com/package/@cloudflare/realtimekit-react-native) package:

```sh
npm i @cloudflare/realtimekit-react-native-ui @cloudflare/realtimekit-react-native
```

The `@cloudflare/realtimekit-react-native` package is the package which handles all the low level logic required for a meeting by interating with our servers. Use it to create a meeting object, which you can pass along to the UI Kit components.

Install the required **native** dependencies

```bash
npm install @cloudflare/react-native-webrtc @react-native-documents/picker react-native-file-viewer react-native-fs react-native-sound-player react-native-webview
```

Install these **required** dependencies as per your ```react-native``` version

- ```react-native-safe-area-context```
  - **react-native (0.64 - 0.74)** : 
    ```bash
    npm install react-native-safe-area-context@^4.0.0
    ```
  - **react-native (>= 0.74)** : 
    ```bash
    npm install react-native-safe-area-context@^5.0.0
    ```

- ```react-native-svg```
  - Follow the [installation instructions](https://github.com/react-native-svg/react-native-svg#installation) for react-native-svg.
  - ```bash
    npm install react-native-svg@<compatible-version>
    ```

## Usage

Here's a series of steps that you need to perform:

- Set up ```RealtimeKitProvider```. This provides the context that provides meeting object and other data to all the child components.
- Set up ```RtkUIProvider```. This provides design system to child components.
- Initialize the RealtimeKit client. Use the ```useRealtimeKitClient()``` hook and ```initMeeting``` to initialize a client.
- Pass the meeting object to UI Kit, which will use it to retrieve meeting information and display it on the user interface.

```jsx
import React, { useEffect } from 'react';
import { RealtimeKitProvider, useRealtimeKitClient } from '@cloudflare/realtimekit-react-native';
import { RtkUIProvider, RtkMeeting, RtkWaitingScreen } from '@cloudflare/realtimekit-react-native-ui';

export default function App() {
  const [meeting, initMeeting] = useRealtimeKitClient();

  useEffect(() => {
    const init = async () => {
      initMeeting({
        authToken: '<auth-token>',
        defaults: {
          audio: true,
          video: true,
        },
      });
    };
    init();
  }, []);

  return (
    <RealtimeKitProvider value={meeting}>
      <RtkUIProvider>
        { !meeting ? 
          <RtkWaitingScreen /> : 
          <RtkMeeting meeting={meeting} showSetupScreen={true} iOSScreenshareEnabled={true} />
        }
      </RtkUIProvider>
    </RealtimeKitProvider>
  );
}
```  

_For more examples, please refer to the [Documentation](https://docs.realtime.cloudflare.com/react-native)_  

## About

`@cloudflare/realtimekit-react-native-ui` is created & maintained by Cloudflare, Inc.

The names and logos for Cloudflare are trademarks of Cloudflare, Inc.
