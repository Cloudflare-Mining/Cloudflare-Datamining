<!-- PROJECT LOGO -->
<p align="center">
  <a href="https://realtime.cloudflare.com">
    <img src="https://docs.realtime.cloudflare.com/logo/cf.svg" alt="Logo" width="120">
  </a>

  <h3 align="center">RealtimeKit Video Background Transformer</h3>

  <p align="center">
    A package that adds video background & blur to participant video feeds in your RealtimeKit Meetings.
    <br />
    <a href="https://docs.realtime.cloudflare.com"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://demo.realtime.cloudflare.com/">View Demo</a>
    ·
    <a href="https://dyte.io/contact">Report Bug</a>
    ·
    <a href="https://dyte.io/contact">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)



<!-- ABOUT THE PROJECT -->
## About The Project

This package provides the foundation to add video background and blur to a participant's video feed in your RealtimeKit Meeting with your custom UI implementation.

If you are using the `rtk-meeting` component directly and prefer abstraction over this package, refer to [UI Kit Addons](https://www.npmjs.com/package/@cloudflare/realtimekit-ui-addons).

### Built With

* [RealtimeKit](https://realtime.cloudflare.com/)
* [Typescript](https://typescriptlang.org)


<!-- GETTING STARTED -->
## Getting Started

### Installation

```sh
npm install @cloudflare/realtimekit-virtual-background
```

<!-- USAGE EXAMPLES -->
## Usage

Disable the default per frame rendering of video middleware to improve speed and quality by letting this middleware control it on its own.

```ts
await meeting.self.setVideoMiddlewareGlobalConfig({
  disablePerFrameCanvasRendering: true
});
```

A `videoBackgroundTransformer` object can be created using the `RealtimeKitVideoBackgroundTransformer.init({meeting: meeting})` method.

```ts
const videoBackgroundTransformer = await RealtimeKitVideoBackgroundTransformer.init({
  meeting,
});
```

Types of middlewares exposed by `videoBackgroundTransformer`:
1. ```createStaticBackgroundVideoMiddleware``` expects an ```imageUrl``` as a parameter and then creates the image the background for the current user. 
```ts
meeting.self.addVideoMiddleware(
    await videoBackgroundTransformer.createStaticBackgroundVideoMiddleware(imageUrl)
);
```

2. ```createBackgroundBlurVideoMiddleware``` expects ```blurStrength``` (0-100) as a parameter (50% by default) and blurs the background of the user by the given blurStrength.
```ts
meeting.self.addVideoMiddleware(
  await videoBackgroundTransformer.createBackgroundBlurVideoMiddleware(50)
);
``` 

**_Note:_** Some browsers or their old versions might not have support for WebGL or the browser APIs that this package uses. We would recommend checking the support beforehand using:

```ts
if(RealtimeKitVideoBackgroundTransformer.isSupported()){
  const videoBackgroundTransformer = await RealtimeKitVideoBackgroundTransformer.init({
    meeting: meeting,
  });
  meeting.self.addVideoMiddleware(
    await videoBackgroundTransformer.createStaticBackgroundVideoMiddleware(`REPLACE_THIS_WITH_IMAGE_URL`)
  );
}
```

**_Note:_** Image URLs must allow CORS to avoid tainting the canvas. You can find such images on <https://unsplash.com/> & <https://imgur.com>.

If in case you want to tweak the segmentation for better, sharper results, Please pass the desired segmentation config while initialising RealtimeKitVideoBackgroundTransformer.

```ts
const videoBackgroundTransformer = await RealtimeKitVideoBackgroundTransformer.init({
  meeting,
  segmentationConfig: {
    model: 'mlkit', // 'meet' | 'mlkit'
    backend: 'wasmSimd',
    inputResolution: '256x256', // '256x144' for meet
    pipeline: 'webgl2', // 'webgl2' | 'canvas2dCpu' // canvas2dCpu gives sharper blur, webgl2 is faster.
    targetFps: 35,
  }
});
```