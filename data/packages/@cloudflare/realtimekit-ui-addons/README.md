<!-- PROJECT LOGO -->
<p align="center">
  <a href="https://cloudflare.com">
    <img src="https://cf-assets.www.cloudflare.com/slt3lc6tev37/6EYsdkdfBcHtgPmgp3YtkD/0b203affd2053988264b9253b13de6b3/logo-thumbnail.png" alt="Logo" width="180">
  </a>
  <h3 align="center">RealtimeKit Ui Addons</h3>

  <p align="center">
    A collection of ui-kit addons that extends the RealtimeKit's prebuilt ui-kit capability.
    <br />
    <a href="https://developers.cloudflare.com/realtime/realtimekit/"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://examples.realtime.cloudflare.com/">View Demo</a>
    ·
    <a href="https://github.com/cloudflare/realtimekit-ui-addons/issues">Report Bug</a>
    ·
    <a href="https://github.com/cloudflare/realtimekit-ui-addons/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
- [Samples](#samples)
- [Usage](#usage)
- [About](#about)


<!-- ABOUT THE PROJECT -->
## About The Project

This [repository](https://github.com/cloudflare/realtimekit-ui-addons) contains all the ui-kit addons available for the RealtimeKit Web SDK.

A comprehensive guide to using RealtimeKit UI addons is available in the [Cloudflare documentation](https://developers.cloudflare.com/realtime/realtimekit/ui-kit/addons/).

## Examples

Here are the list of available examples at the moment.

### Host controls
1. [Camera Host Control](./src/camera-host-control/)
2. [Mic Host Control](./src/mic-host-control/)
3. [Chat Host Control](./src/chat-host-control/)

### Reactions
1. [Hand Raise](./src/hand-raise/)
2. [Reactions](./src/reactions-manager/)

### Participant Tile
1. [Participant Tile Menu](./src/participant-tile-menu/)

### Participants Tab Actions
1. [Participant Menu Item](./src/participant-menu-item/)
2. [Participants Tab Action](./src/participants-tab-action/)
3. [Participants Tab Toggle](./src/participants-tab-toggle/)

### Video Background
1. [Video Background](./src/video-background/)

### Control Bar
1. [Custom Controlbar button](./src/custom-controlbar-button/)

## Usage

To use these addons you would need to perform the following steps:

1. Install the addon package:

```sh
npm install @cloudflare/realtimekit-ui-addons
```

2. Import the addons that you need.

```ts
// Host controls
import CameraHostControl from '@cloudflare/realtimekit-ui-addons/camera-host-control';
import MicHostControl from '@cloudflare/realtimekit-ui-addons/mic-host-control';
import ChatHostControl from '@cloudflare/realtimekit-ui-addons/chat-host-control';

// Reactions
import HandRaise from '@cloudflare/realtimekit-ui-addons/hand-raise';
import ReactionsManagerAddon from '@cloudflare/realtimekit-ui-addons/reactions-manager';

// Participant Tile
import ParticipantTileMenu from "@cloudflare/realtimekit-ui-addons/participant-tile-menu";

// Participant Tab Actions
import ParticipantMenuItem from '@cloudflare/realtimekit-ui-addons/participant-menu-item';
import ParticipantsTabAction from "@cloudflare/realtimekit-ui-addons/participants-tab-action";
import ParticipantsTabToggle from "@cloudflare/realtimekit-ui-addons/participants-tab-toggle";

// Video Background (Effects)
import RealtimeKitVideoBackground from '@cloudflare/realtimekit-ui-addons/video-background';

// Control bar button
import CustomControlbarButton from '@cloudflare/realtimekit-ui-addons/custom-controlbar-button';
```

3. Initialize the addons

```ts
// Host controls
const cameraHostControl = await CameraHostControl.init({
    meeting,
    hostPresets: ['webinar_presenter'],
    targetPresets: ['webinar_viewer'],
    addActionInParticipantMenu: true,
});

const micHostControl = await MicHostControl.init({
    meeting,
    hostPresets: ['webinar_presenter'],
    targetPresets: ['webinar_viewer'],
    addActionInParticipantMenu: true,
});

const chatHostControl = await ChatHostControl.init({
    meeting,
    hostPresets: ['webinar_presenter'],
    targetPresets: ['webinar_viewer'],
    addActionInParticipantMenu: true,

});

// Reactions
const handRaise = await HandRaise.init({
    meeting,
    canRaiseHand: true,
    canManageRaisedHand: true,
    handRaiseIcon: '<svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4 12.02c0 1.06.2 2.1.6 3.08l.6 1.42c.22.55.64 1.01 1.17 1.29.27.14.56.21.86.21h2.55c.77 0 1.49-.41 1.87-1.08.5-.87 1.02-1.7 1.72-2.43l1.32-1.39c.44-.46.97-.84 1.49-1.23l.59-.45a.6.6 0 0 0 .23-.47c0-.75-.54-1.57-1.22-1.79a3.34 3.34 0 0 0-2.78.29V4.5a1.5 1.5 0 0 0-2.05-1.4 1.5 1.5 0 0 0-2.9 0A1.5 1.5 0 0 0 6 4.5v.09A1.5 1.5 0 0 0 4 6v6.02ZM8 4.5v4a.5.5 0 0 0 1 0v-5a.5.5 0 0 1 1 0v5a.5.5 0 0 0 1 0v-4a.5.5 0 0 1 1 0v6a.5.5 0 0 0 .85.37h.01c.22-.22.44-.44.72-.58.7-.35 2.22-.57 2.4.5l-.53.4c-.52.4-1.04.78-1.48 1.24l-1.33 1.38c-.75.79-1.31 1.7-1.85 2.63-.21.36-.6.58-1.01.58H7.23a.87.87 0 0 1-.4-.1 1.55 1.55 0 0 1-.71-.78l-.59-1.42a7.09 7.09 0 0 1-.53-2.7V6a.5.5 0 0 1 1 0v3.5a.5.5 0 0 0 1 0v-5a.5.5 0 0 1 1 0Z" fill="#ff0000"></path></svg>'
});

const CUSTOM_REACTIONS = [
    { emoji: "🔥", label: "fire" },
    { emoji: "😢", label: "sad" },
    { emoji: '👍', label: 'thumbs up' },
    { emoji: '👎', label: 'thumbs down' },
    { emoji: '❤️', label: 'heart' },
    { emoji: '😂', label: 'laugh' },
    { emoji: '👏', label: 'clap' },
    { emoji: '🎉', label: 'celebrate' },
];

const reactionsAddon = await ReactionsManagerAddon.init({
    meeting,
    reactions: CUSTOM_REACTIONS,    
    canSendReactions: true,
});

// Participant Tile
const participantTileMenu = new ParticipantTileMenu([{
    label: "Custom Toggle",
    onClick: (participantId) => {
    console.log('Clicked on custom toggle for ', participantId);
    }
}], 'top-right');

// Participant Tab Actions
const rightTickSVG = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'><path d='M4 12l6 6 10-14' fill='none' stroke='currentColor' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/></svg>";
const participantMenuItem = new ParticipantMenuItem({
    label: "Custom Menu Item",
    icon: rightTickSVG,
    styles: "rtk-icon { color: green !important; }",
    onClick: () => {
        alert('Participant Menu Item clicked');
    }
});

const participantsTabAction = new ParticipantsTabAction({
    onClick: () => {
        alert("Clicked!");
    },
    label: "Click me",
    position: "start"
});

// Participant Tab Toggle
const participantsTabToggle = new ParticipantsTabToggle({
  onEnabled: () => {
    alert('toggled true!');
  },
  onDisabled: () => {
    alert('toggled true!');
  },
  label: 'Click me',
  initialValue: () => true,
  position: 'start',
});

// Video Background (Effects)
const videoBackground = await RealtimeKitVideoBackground.init({
    modes: ["blur", "virtual", "random"],
    blurStrength: 30, // 0 - 100 for opacity
    meeting,
    images: [
        "https://images.unsplash.com/photo-1487088678257-3a541e6e3922?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3",
        "https://images.unsplash.com/photo-1496715976403-7e36dc43f17b?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3",
        "https://images.unsplash.com/photo-1600431521340-491eca880813?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3"
    ],
    randomCount: 10,
    onVideoBackgroundUpdate: ({backgroundMode, backgroundURL}) => { 
      console.log('videoBackgroundUpdated => ', {backgroundMode, backgroundURL});
    }, // Listen to background update action
});

// Control Bar
const customControlBarButton = new CustomControlbarButton({
   position: 'left',
   icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 17.75a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5zM12 14c0-2.5 4-2.5 4-6a4 4 0 1 0-8 0" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>',
   label: 'Click Me!',
   onClick: () => alert('Custom Control Bar Button Clicked'),
});
```

4. Register addon

```ts
import { registerAddons } from "@cloudflare/realtimekit-ui";
...
const newConfig = registerAddons([cameraHostControl, micHostControl, chatHostControl, handRaise, reactionsAddon, participantTileMenu, participantMenuItem, participantsTabAction, participantsTabToggle, videoBackground, customControlBarButton], meeting);
```

5. Pass the config to meeting UI

```
<rtk-meeting meeting={meeting} config={newConfig}></rtk-meeting> 
```

### Video Background
you can apply, replace, or remove a background programmatically.

```tsx
await videoBackground.applyVirtualBackground('https://images.unsplash.com/photo-1600431521340-491eca880813?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3')
await videoBackground.applyBlurBackground();

// Common for virtual and blur backgrounds.
await videoBackground.removeBackground();
```

## About

This project is created & maintained by Cloudflare, Inc.

The names and logos for Cloudflare are trademarks of Cloudflare, Inc.

We love open source software! See [our other projects](https://github.com/cloudflare) and [our products](https://cloudflare.com).