# @cloudflare/stream-react

Official React component for [Cloudflare Stream](https://www.cloudflare.com/products/cloudflare-stream/).

## Installation

```sh
yarn add @cloudflare/stream-react
```

## Usage

```js
import { Stream } from "@cloudflare/stream-react";

export const App = () => {
  const videoIdOrSignedToken = "YOUR_VIDEO_ID_OR_SIGNED_TOKEN";
  return (
    <div>
      <Stream controls src={videoIdOrSignedToken} />
    </div>
  );
};
```

## Props

```ts
export type StreamProps = {
  /**
   * Either the video UID or the signed token for the video you’ve uploaded to Cloudflare Stream should be included here.
   */
  src: string;
  /**
   * Ref for accessing the underlying Stream player API. Useful for providing imperative access:
   * https://developers.cloudflare.com/stream/viewing-videos/using-the-stream-player/using-the-player-api
   */
  streamRef?: MutableRefObject<StreamPlayerApi | undefined>;
  /**
   * URL to a VAST advertising tag. If specified, the player will attempt to display ads speficied by the VAST ad schema.
   */
  adUrl?: string;
  /**
   * The height of the video’s display area, in CSS pixels.
   */
  height?: string;
  /**
   * The width of the video’s display area, in CSS pixels.
   */
  width?: string;
  /**
   * A URL for an image to be shown before the video is started or while the video is downloading. If this attribute isn’t specified, a thumbnail image of the video is shown.
   */
  poster?: string;
  /**
   * Tells the browser to immediately start downloading the video and play it as soon as it can. Note that mobile browsers generally do not support this attribute, the user must tap the screen to begin video playback. Please consider mobile users or users with Internet usage limits as some users don’t have unlimited Internet access before using this attribute.
   *
   * In addition, some browsers now prevent videos with audio from playing automatically. You may add the mute attribute to allow your videos to autoplay. For more information, [go here](https://webkit.org/blog/6784/new-video-policies-for-ios/).
   */
  autoplay?: boolean;
  /**
   * Shows the default video controls such as buttons for play/pause, volume controls. You may choose to build buttons and controls that work with the player.
   */
  controls?: boolean;
  /**
   * Use unique subdomain for iframe source
   * customer-<CODE>.cloudflarestream.com
   */
  customerCode?: string;
  /**
   * Setting this value seeks the video to a new time. Note that seeking only occurs when a new value is set. If this is problematic for your use-case, consider using the streamRef prop to set the currentTime directly on
   * the stream player which will seek every time the value is set.
   */
  currentTime?: number;
  /**
   * A Boolean attribute which indicates the default setting of the audio contained in the video. If set, the audio will be initially silenced.
   */
  muted?: boolean;
  /**
   * Any valid CSS color value provided will be applied to the letterboxing/pillarboxing of the player’s UI. This can be set to transparent to avoid letterboxing/pillarboxing when not in fullscreen mode.
   * https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
   */
  letterboxColor?: string;
  /**
   * A Boolean attribute; if included the player will automatically seek back to the start upon reaching the end of the video.
   */
  loop?: boolean;
  /**
   * A `double` that indicates the rate at which the media is being played back.
   */
  playbackRate?: number;
  /**
   * This enumerated attribute is intended to provide a hint to the browser about what the author thinks will lead to the best user experience. You may choose to include this attribute as a boolean attribute without a value, or you may specify the value preload="auto" to preload the beginning of the video. Not including the attribute or using preload="metadata" will just load the metadata needed to start video playback when requested.
   *
   * The <video> element does not force the browser to follow the value of this attribute; it is a mere hint. Even though the preload="none" option is a valid HTML5 attribute, Stream player will always load some metadata to initialize the player. The amount of data loaded in this case is negligable.
   */
  preload?: "auto" | "metadata" | "none" | boolean;
  /**
   * Any valid CSS color value provided will be applied to certain elements of the player's UI.
   * https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
   */
  primaryColor?: string;
  /**
   * A timestamp that specifies the time when playback begins.
   * If a plain number is used such as ?startTime=123, it will
   * be interpreted as 123 seconds. More human readable timestamps
   * can also be used, such as ?startTime=1h12m27s for 1 hour,
   * 12 minutes, and 27 seconds.
   */
  startTime?: string | number;
  /**
   * Automatically manages the aspect ratio of the iframe for you. Defaults to true. If you want to manually handle the styles yourself, set this to false.
   */
  responsive?: boolean;
  /**
   * Sets volume from 0.0 (silent) to 1.0 (maximum value)
   */
  volume?: number;
  /**
   * Will initialize the player with the specified text track enabled. The value should be the BCP-47 language code that was used to [upload the text track](https://developers.cloudflare.com/stream/uploading-videos/adding-captions).
   * Note: This will _only_ work once during initialization. Beyond that point the user has full control over their text track settings.
   */
  defaultTextTrack?: string;
  /**
   * Sent when playback is aborted; for example, if the media is playing and is restarted from the beginning, this event is sent.
   */
  onAbort?: EventListener;
  /**
   * Sent when enough data is available that the media can be played, at least for a couple of frames.
   */
  onCanPlay?: EventListener;
  /**
   * Sent when the entire media can be played without interruption, assuming the download rate remains at least at the current level. It will also be fired when playback is toggled between paused and playing. Note: Manually setting the currentTime will eventually fire a canplaythrough event in firefox. Other browsers might not fire this event.
   */
  onCanPlayThrough?: EventListener;
  /**
   * The metadata has loaded or changed, indicating a change in duration of the media. This is sent, for example, when the media has loaded enough that the duration is known.
   */
  onDurationChange?: EventListener;
  /**
   * Sent when playback completes.
   */
  onEnded?: EventListener;
  /**
   * Sent when an error occurs. (e.g. the video has not finished encoding yet, or the video fails to load due to an invalid signed token)
   */
  onError?: EventListener;
  /**
   * The first frame of the media has finished loading.
   */
  onLoadedData?: EventListener;
  /**
   * The media’s metadata has finished loading; all attributes now contain as much useful information as they’re going to.
   */
  onLoadedMetaData?: EventListener;
  /**
   * Sent when loading of the media begins.
   */
  onLoadStart?: EventListener;
  /**
   * Sent when the playback state is changed to paused (paused property is true).
   */
  onPause?: EventListener;
  /**
   * Sent when the playback state is no longer paused, as a result of the play method, or the autoplay attribute.
   */
  onPlay?: EventListener;
  /**
   * Sent when the media has enough data to start playing, after the play event, but also when recovering from being stalled, when looping media restarts, and after seeked, if it was playing before seeking.
   */
  onPlaying?: EventListener;
  /**
   * Sent periodically to inform interested parties of progress downloading the media. Information about the current amount of the media that has been downloaded is available in the media element’s buffered attribute.
   */
  onProgress?: EventListener;
  /**
   * Sent when the playback speed changes.
   */
  onRateChange?: EventListener;
  /**
   * Sent when a seek operation completes.
   */
  onSeeked?: EventListener;
  /**
   * Sent when a seek operation begins.
   */
  onSeeking?: EventListener;
  /**
   * Sent when the user agent is trying to fetch media data, but data is unexpectedly not forthcoming.
   */
  onStalled?: EventListener;
  /**
   * Sent when loading of the media is suspended; this may happen either because the download has completed or because it has been paused for any other reason.
   */
  onSuspend?: EventListener;
  /**
   * The time indicated by the element’s currentTime attribute has changed.
   */
  onTimeUpdate?: EventListener;
  /**
   * Sent when the audio volume changes (both when the volume is set and when the muted attribute is changed).
   */
  onVolumeChange?: EventListener;
  /**
   * Sent when the requested operation (such as playback) is delayed pending the completion of another operation (such as a seek).
   */
  onWaiting?: EventListener;
  /**
   * Fires when ad-url attribute is present and the ad begins playback
   */
  onStreamAdStart?: EventListener;
  /**
   * Fires when ad-url attribute is present and the ad finishes playback
   */
  onStreamAdEnd?: EventListener;
  /**
   * Fires when ad-url attribute is present and the ad took too long to load.
   */
  onStreamAdTimeout?: EventListener;
};
```
