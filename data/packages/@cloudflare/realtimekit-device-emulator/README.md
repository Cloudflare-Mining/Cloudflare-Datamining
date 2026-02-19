<!-- PROJECT LOGO -->
<p align="center">
  <a href="https://realtime.cloudflare.com">
    <img src="https://docs.realtime.cloudflare.com/logo/cf.svg" alt="Logo" width="120" />
  </a>

  <h2 align="center">RealtimeKit Device Emulator</h3>

  <p align="center">
    Browser media devices emulation toolkit for Cloudflare RealtimeKit
    <br />
    <a href="https://docs.realtime.cloudflare.com"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://device-emulator.realtime.cloudflare.com/">View Demo</a>
    ·
    <a href="https://community.cloudflare.com">Report Bug</a>
    ·
    <a href="https://community.cloudflare.com">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About The Project](#about-the-project)
- [Examples](#examples)
- [Built With](#built-with)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Support](#support)
- [License](#license)
- [About](#about)

<!-- ABOUT THE PROJECT -->

## About The Project

For a WebRTC based solution like Cloudflare RealtimeKit, having integration tests that can test multi-user call with Audio/Video on is necessary. Part of the integration tests is the ability to attest different media behaviours. 

These are not straightforward as Media devices are usually not available in virtualised / testing environments, these interfaces (`getUserMedia`) are a reflection of actual hardware connected to the device, and therefore it is difficult to test real world scenarios in a software test run. 

Even if you have devices available, scenarios such as 

  - A new microphone device is plugged in, does my application switch the input to the new device
  - How does my application handle hardware failure

become difficult to test automatically

Dyte's Device Emulator is a solution for the above problems. It provides ways to add, remove media devices and mimic specific real world behaviour. By using this emulation toolkit, QA engineers, developers, and testers can ensure that WebRTC applications deliver a consistent and high-quality user experience across different hardware setups.

## Running locally

### Install dependencies
```
npm i
```

### Run the development server
```
npm run dev
```

NOTE: This demo app currently expects dyte authtokens for legacy reasons, while running locally you can just remove the part where the dyte sdk is initalized and run the commands you want to from the console

## Usage

### Adding a virtual device

```
navigator.mediaDevices.addEmulatedDevice('videoinput');
```

### Failing a virtual device

```
navigator.mediaDevices.failDevice(deviceId, true);
```

### Silencing a virtual device

```
navigator.mediaDevices.silenceDevice(deviceId, true);
```

Checkout the docs for complete guides and examples [https://docs.dyte.io/community-packages/device-emulator](https://docs.dyte.io/community-packages/device-emulator)

## Built With

- Canvas
- MediaDevices interface
- Typescript

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/dyte-io/device-emulator/issues) for a list of proposed features (and known issues).

Few upcoming features are:
1. Use any video file as a feed instead of default video feed.
2. Audio file support
3. Browser-like constraints
4. Custom device names

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**. Sincere thanks to all our contributors. Thank you, [contributors](https://github.com/dyte-io/device-emulator/graphs/contributors)!

You are requested to follow the contribution guidelines specified in [CONTRIBUTING.md](./CONTRIBUTING.md) and code of conduct at [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) while contributing to the project :smile:.

## Support
Contributions, issues, and feature requests are welcome!
Give a ⭐️ if you like this project!

<!-- LICENSE -->

## License

Distributed under the Apache License, Version 2.0. See [`LICENSE`](./LICENSE) for more information.

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

## About

`device-emulator` is created & maintained by dyte, Inc. You can find us on Twitter - [@dyte_io](https://twitter.com/dyte_io) or write to us at `dev [at] dyte.io`.

The names and logos for Dyte are trademarks of dyte, Inc.

We love open source software! See [our other projects](https://github.com/dyte-io) and [our products](https://dyte.io).
