<!-- PROJECT LOGO --> 
<p align="center">
  <a href="https://dyte.io">
    <img src="https://assets.dyte.io/logo-outlined.png" alt="Logo" width="120" />
  </a>

  <h2 align="center">React Native Core</h3>

  <p align="center">
    React Native SDK that provides Dyte's core functionality in mobile.
    <br />
    <a href="https://www.notion.so/dyte/React-Native-Core-1a17935890c0806d9ea6cabc9c496fd0?pvs=4"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    ·
    <a href="https://docs.dyte.io/discuss">Report Bug</a>
    ·
    <a href="https://docs.dyte.io/discuss">Request Feature</a>
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

The core SDK provides Dyte's core functionality, while letting a developer build a custom UI over it.

### Built With

- [Dyte](https://dyte.io/)
- [Typescript](https://www.typescriptlang.org/)
- [Java](https://dev.java/learn/)
- [Objective C](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html#//apple_ref/doc/uid/TP40011210)


## Installation

1. Install NPM packages

```sh
npm install @dytesdk/react-native-core @dyteinternals/react-native-webrtc
```  

_Note: For platform specific installation instructions, please refer to the [Documentation](https://docs.dyte.io/rn-core)._
<!-- USAGE EXAMPLES -->
## Usage

A `meeting` object can be created using the `DyteClient.init()` method.

```ts
const meeting = await DyteClient.init({
    authToken: '<authToken>',
    defaults: {
        audio: true,
        video: true,
    }
});
```

The `meeting` object is used for all interaction with Dyte's servers. For example, the following code snippet is used for a user to join a room.

```ts
await meeting.joinRoom();
```

_For more examples, please refer to the [Documentation](https://docs.dyte.in)._

## About

`@dytesdk/react-native-core` is created & maintained by Dyte, Inc. You can find us on Twitter - [@dyte_io](https://twitter.com/dyte_io) or write to us at `dev@dyte.io`.

The names and logos for Dyte are trademarks of Dyte, Inc.

We love open source software! See [our other projects](https://github.com/dyte-in) and [our products](https://dyte.io).
