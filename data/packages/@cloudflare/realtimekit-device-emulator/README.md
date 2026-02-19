<!-- PROJECT LOGO -->
<p align="center">
  <a href="https://realtime.cloudflare.com">
    <img src="https://docs.realtime.cloudflare.com/logo/cf.svg" alt="Logo" width="120" />
  </a>

  <h2 align="center">RealtimeKit Device Emulator</h2>

  <p align="center">
    Browser media devices emulation toolkit for Cloudflare RealtimeKit
    <br />
    <a href="https://developers.cloudflare.com/realtime/realtimekit"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://device-emulator.realtime.cloudflare.com/">View Demo</a>
    ·
    <a href="https://community.cloudflare.com">Report Bug</a>
    ·
    <a href="https://community.cloudflare.com">Request Feature</a>
  </p>
</p>

<!-- ABOUT THE PROJECT -->

## About The Project

For a WebRTC-based solution like Cloudflare RealtimeKit, having integration tests that can test multi-user calls with audio/video enabled is necessary. Part of the integration testing is the ability to test different media behaviors. 

These are not straightforward as media devices are usually not available in virtualized or testing environments. These interfaces (`getUserMedia`) are a reflection of actual hardware connected to the device, and therefore it is difficult to test real-world scenarios in a software test run. 

Even if you have devices available, scenarios such as:

  - A new microphone device is plugged in—does my application switch the input to the new device?
  - How does my application handle hardware failure?

become difficult to test automatically.

Cloudflare RealtimeKit's Device Emulator is a solution for the above problems. It provides ways to add and remove media devices and mimic specific real-world behavior. By using this emulation toolkit, QA engineers, developers, and testers can ensure that WebRTC applications deliver a consistent and high-quality user experience across different hardware setups.

## Usage

### Install the package
```bash
npm install @cloudflare/realtimekit-device-emulator
```

### Import the package
```ts
import '@cloudflare/realtimekit-device-emulator';
```

### Listening for the Device Emulator Ready Event

The device emulator dispatches a `realtimekit:device-emulator:ready` event on the window when it's fully loaded and ready to use:

```javascript
window.addEventListener('realtimekit:device-emulator:ready', () => {
    // Device emulator is ready, you can now add emulated devices
    navigator.mediaDevices.addEmulatedDevice('videoinput');
});
```

### Adding a virtual device

```javascript
navigator.mediaDevices.addEmulatedDevice('videoinput');
```

### Failing a virtual device

```javascript
navigator.mediaDevices.failDevice(deviceId, true);
```

### Silencing a virtual device

```javascript
navigator.mediaDevices.silenceDevice(deviceId, true);
```

## Built With

- Canvas
- MediaDevices interface
- Typescript