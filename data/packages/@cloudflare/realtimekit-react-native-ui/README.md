<!-- PROJECT LOGO -->
<p align="center">
  <a href="https://dyte.io">
    <img src="https://assets.dyte.io/logo-outlined.png" alt="Logo" width="120" />
  </a>
  
  <h2 align="center">React Native UI Kit</h3>

  <p align="center">
    A set of React Native UI components to create realtime communication applications
    <br />
    <a href="https://www.notion.so/dyte/React-Native-UI-Kit-1a17935890c08059830cecbc0f96c932?pvs=4"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://app.dyte.io">View Demo</a>
    ·
    <a href="https://docs.dyte.io/discuss">Report Bug</a>
    ·
    <a href="https://docs.dyte.io/discuss">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Getting Started](#getting-started)
- [Usage](#usage)
- [About](#about)

<!-- GETTING STARTED -->

## Getting Started


First, you will need to install the [react-native-ui-kit](https://npmjs.com/package/@dytesdk/react-native-ui-kit) along with the [react-native-core](https://npmjs.com/package/@dytesdk/react-native-core) package:

```sh
npm i @dytesdk/react-native-ui-kit @dytesdk/react-native-core
```

The `@dytesdk/react-native-core` package is the package which handles all the low level logic required for a meeting by interating with our servers. Use it to create a meeting object, which you can pass along to the UI Kit components.

Install the following peer dependencies:

```sh
npm install @dyteinternals/react-native-webrtc react-native-document-picker react-native-file-viewer react-native-fs react-native-safe-area-context react-native-sound-player react-native-svg react-native-webview
```

## Usage

Use the `useDyteClient()` hook to initialize a client

```jsx
function App() {
  const [client, initClient] = useDyteClient();

  useEffect(() => {
    initClient({
        authToken: '<auth-token>',
        defaults: {
          audio: true,
          video: true,
        },
      });
  },[])

  return (
    <DyteProvider>
      <DyteUIProvider>
        <DyteMeeting meeting={client} />
      </DyteUIProvider>
    </DyteProvider>
  );
}
```  

_For more examples, please refer to the [Documentation](https://docs.dyte.in/react-native/)_  

## About

`@dytesdk/react-native-ui-kit` is created & maintained by Dyte, Inc. You can find us on Twitter - [@dyte_io](https://twitter.com/dyte_io) or write to us at `dev@dyte.io`.

The names and logos for Dyte are trademarks of Dyte, Inc.

We love open source software! See [our other projects](https://github.com/dyte-in) and [our products](https://dyte.io).
