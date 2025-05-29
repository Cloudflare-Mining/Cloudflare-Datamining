# RealtimeKit UI

**RealtimeKit UI** provides pre-built, ready-to-use UI components for integrating with [Cloudflare RealtimeKit](https://npmjs.com/package/@cloudflare/realtimekit).

If you're using a specific framework (or no framework - see HTML), we also offer dedicated packages:

- [React](https://npmjs.com/package/@cloudflare/realtimekit-react-ui)
- [HTML (Web Components)](https://npmjs.com/package/@cloudflare/realtimekit-ui)

## Usage

First, install RealtimeKit UI along with [RealtimeKit](https://npmjs.com/package/@cloudflare/realtimekit):

> `@cloudflare/realtimekit` is the core package that offers APIs to handle meetings in the client side.
> You use it to access and perform actions in a meeting.

```sh
npm i @cloudflare/realtimekit-ui @cloudflare/realtimekit
```

Then you'll need to initialize a meeting object once you've received an `authToken` of a participant from your APIs.

> You call the RealtimeKit Add Participant API from your own backend API to get this `authToken`
> to use with RealtimeKit.

```js
import RealtimeKitClient from '@cloudflare/realtimekit';

const meeting = await RealtimeKitClient.init({
  authToken: '<your-auth-token>',
  defaults: {
    video: true,
    audio: true,
  },
});
```

### Simple Usage

Load the component in your template file (component.html):

```html
<rtk-meeting #myid></rtk-meeting>
```

Then initialize and pass the meeting object to the component:

```tsx
import { RtkMeeting } from '@cloudflare/realtimekit-ui';
import RealtimeKitClient from '@cloudflare/realtimekit';

class AppComponent {
  title = 'MyProject';
  @ViewChild('myid') meetingComponent: RtkMeeting;
  rtkMeeting: RtkClient;

  async ngAfterViewInit() {
    const meeting = await RealtimeKitClient.init({
      authToken: '<auth-token>',
      defaults: {
        video: true,
        audio: true,
      },
    });
    meeting.joinRoom();
    this.rtkMeeting = meeting;
    if (this.meetingComponent) this.meetingComponent.meeting = meeting;
  }
}
```

### Using RtkUiProvider

If you wish to use individual UI components to build your desired UI, you can use the `RtkUiProvider` component to provide the meeting instance to all child components to make development easier.

```html
<rtk-ui-provider #myid>
  <rtk-simple-grid />
</rtk-ui-provider>
```

Then initialize and pass the meeting object to the component:

```tsx
import { RtkMeeting } from '@cloudflare/realtimekit-ui';
import RealtimeKitClient from '@cloudflare/realtimekit';

class AppComponent {
  title = 'MyProject';
  @ViewChild('myid') uiProvider: RtkUiProvider;
  rtkMeeting: RtkClient;

  async ngAfterViewInit() {
    const meeting = await RealtimeKitClient.init({
      authToken: '<auth-token>',
      defaults: {
        video: true,
        audio: true,
      },
    });
    meeting.joinRoom();
    this.rtkMeeting = meeting;
    if (this.uiProvider) this.uiProvider.meeting = meeting;
  }
}
```
