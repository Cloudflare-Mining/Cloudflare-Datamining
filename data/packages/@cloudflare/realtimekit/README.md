<!-- PROJECT LOGO -->
<p align="center">
  <a href="https://cloudflare.com">
    <img src="https://cf-assets.www.cloudflare.com/slt3lc6tev37/6EYsdkdfBcHtgPmgp3YtkD/0b203affd2053988264b9253b13de6b3/logo-thumbnail.png" alt="Logo" width="180">
  </a>
  <h3 align="center">RealtimeKit</h3>

  <p align="center">
    A real-time video and audio SDK for building custom, collaborative communication experiences.
    <br />
    <a href="https://developers.cloudflare.com/realtime/realtimekit/"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://demo.realtime.cloudflare.com">View Demo</a>
    ·
    <a href="https://community.cloudflare.com/">Report Bug</a>
    ·
    <a href="https://community.cloudflare.com/">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->

## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Installation](#installation)
* [Usage](#usage)
* [About](#about)



<!-- ABOUT THE PROJECT -->
## About The Project

A real-time video and audio SDK for building custom, collaborative communication experiences.

### Built With

* [Cloudflare](https://cloudflare.com)
* [Typescript](https://typescriptlang.org)


<!-- INSTALLATION -->
## Installation

```sh
npm install @cloudflare/realtimekit
```



<!-- USAGE EXAMPLES -->
## Usage

A `meeting` object can be created using the `RealtimeKitClient.init()` method.

```ts
const meeting = await RealtimeKit.init({
    authToken: "<AuthTokenHere>",
    defaults: {
        audio: false,
        video: false,
    }
});
```

For React you can use the hooks wrapper package `@cloudflare/realtimekit-react`

The `meeting` object is used for all interaction with Cloudflare's servers. For example, the following code snippet is used for a user to join a room.

```ts
await meeting.join();
```

_For more examples, please refer to the [documentation](https://developers.cloudflare.com/realtime/realtimekit/)._

## About

`@cloudflare/realtimekit` is created & maintained by Cloudflare, Inc.

The names and logos are trademarks of Cloudflare, Inc.
