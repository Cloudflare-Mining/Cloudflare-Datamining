# RealtimeKit React UI

**RealtimeKit React UI** provides pre-built, ready-to-use UI components for React for integrating with [Cloudflare RealtimeKit](https://npmjs.com/package/@cloudflare/realtimekit).

If you're using a different framework or no framework (see HTML), we also offer dedicated packages:

- [Angular](https://npmjs.com/package/@cloudflare/realtimekit-angular-ui)
- [HTML (Web Components)](https://npmjs.com/package/@cloudflare/realtimekit-ui)

## Usage

First, install RealtimeKit UI along with [RealtimeKit](https://npmjs.com/package/@cloudflare/realtimekit):

> `@cloudflare/realtimekit` is the core package that offers APIs to handle meetings in the client side.
> You use it to access and perform actions in a meeting.

```sh
npm i @cloudflare/realtimekit-react-ui @cloudflare/realtimekit
```

### Simple Usage

This is the simplest way to use RealtimeKit UI, where you don't have to manage the entire meeting UI on your own. Everything will be taken care of by the `RtkMeeting` component.

Use the `useRealtimeKitClient()` hook to access the `meeting` instance state, as well as the `meeting` instance initializer method.

Then pass the `authToken` of a participant that you receive from your API.

> You call the RealtimeKit Add Participant API from your own backend API to get this `authToken`
> to use with RealtimeKit.

```jsx
import { useRealtimeKitClient } from '@cloudflare/realtimekit/react';

function App() {
  const [meeting, initMeeting] = useRealtimeKitClient();

  useEffect(() => {
    initMeeting({
      authToken: '<auth-token>',
      roomName: '<room-name>',
      defaults: {
        audio: true,
        video: true,
      },
    });
  }, []);

  return <RtkMeeting meeting={meeting} />;
}
```

### Using `<RtkUiProvider>`

If you wish to use individual UI components to build your desired UI, you can use the `RtkUiProvider` component to provide the meeting instance to all child components to make development easier:

```jsx
import { useRealtimeKitClient } from '@cloudflare/realtimekit/react';
import {
  RtkUiProvider,
  RtkMeeting,
  RtkSimpleGrid,
} from '@cloudflare/realtimekit-react-ui';

function App() {
  const [meeting, initMeeting] = useRealtimeKitClient();

  useEffect(() => {
    initMeeting({
      authToken: '<auth-token>',
      roomName: '<room-name>',
      defaults: {
        audio: true,
        video: true,
      },
    });
  }, []);

  return (
    <RtkUiProvider meeting={meeting}>
      <RtkSimpleGrid />
    </RtkUiProvider>
  );
}
```
