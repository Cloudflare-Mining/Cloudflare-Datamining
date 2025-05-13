# RealtimeKit UI

**RealtimeKit UI** provides pre-built, ready-to-use UI components for integrating with [Cloudflare RealtimeKit](https://npmjs.com/package/@cloudflare/realtimekit).

This package includes Web Components that work natively in HTML — so no framework required.

If you're using a specific framework, we also offer dedicated packages:

- [React](https://npmjs.com/package/@cloudflare/realtimekit-react-ui)
- [Angular](https://npmjs.com/package/@cloudflare/realtimekit-angular-ui)

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

You can now pass this meeting instance to any of the components:

```html
<!-- Load the component -->
<rtk-meeting id="my-meeting"></rtk-meeting>

<script>
  const init = async () => {
    const meeting = await RealtimeKitClient.init({
      authToken: '<your-auth-token>',
      defaults: {
        video: true,
        audio: true,
      },
    });

    const meetingEl = document.getElementById('my-meeting');
    meetingEl.meeting = meeting;
  };

  init();
</script>
```
