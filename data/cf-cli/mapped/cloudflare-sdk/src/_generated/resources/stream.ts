/**
 * stream resource
 * @generated from apis/stream/schema.ts
 *
 * Video encoding, storage, and delivery — upload, live-stream, clip, caption, and embed video at scale
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Add, edit, or remove additional audio tracks on a video
 */
export class AudioTracks extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists additional audio tracks on a video. Note this API will not return information for audio attached to the video upload.
   *
   * @see list-audio-tracks
   */
  async get(accountId: string, identifier: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/stream/${identifier}/audio`);
  }

  /**
   * Edits additional audio tracks on a video. Editing the default status of an audio track to `true` will mark all other audio tracks on the video default status to `false`.
   *
   * @see edit-audio-tracks
   */
  async edit(accountId: string, identifier: string, audioIdentifier: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/stream/${identifier}/audio/${audioIdentifier}`);
  }

  /**
   * Deletes additional audio tracks on a video. Deleting a default audio track is not allowed. You must assign another audio track as default prior to deletion.
   *
   * @see delete-audio-tracks
   */
  async delete(accountId: string, identifier: string, audioIdentifier: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/stream/${identifier}/audio/${audioIdentifier}`);
  }

  /**
   * Adds an additional audio track to a video using the provided audio track URL.
   *
   * @see add-audio-track
   */
  async copy(accountId: string, identifier: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/stream/${identifier}/audio/copy`);
  }
}

/**
 * Aggregate video storage usage statistics for the account
 */
export class Videos extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Returns information about an account's storage use.
   *
   * @see stream-videos-storage-usage
   */
  async storageUsage(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/stream/storage-usage`, {
      query: params,
    });
  }
}

/**
 * Create a new video clip from an existing video by specifying start and end times
 */
export class Clip extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Clips a video based on the specified start and end times provided in seconds.
   *
   * @see stream-video-clipping-clip-videos-given-a-start-and-end-time
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/stream/clip`);
  }
}

/**
 * Import a video from a URL into Stream for processing and delivery
 */
export class Copy extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Uploads a video to Stream from a provided URL.
   *
   * @see stream-videos-upload-videos-from-a-url
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/stream/copy`);
  }
}

/**
 * Generate a tokenized URL that lets end-users upload video directly to Stream
 */
export class DirectUpload extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Creates a direct upload that allows video uploads without an API key.
   *
   * @see stream-videos-upload-videos-via-direct-upload-ur-ls
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/stream/direct_upload`);
  }
}

/**
 * Signing keys used to generate short-lived signed URLs for private video playback
 */
export class Keys extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists the video ID and creation date and time when a signing key was created.
   *
   * @see stream-signing-keys-list-signing-keys
   */
  async get(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/stream/keys`);
  }

  /**
   * Creates an RSA private key in PEM and JWK formats. Key files are only displayed once after creation. Keys are created, used, and deleted independently of videos, and every key can sign any video.
   *
   * @see stream-signing-keys-create-signing-keys
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/stream/keys`);
  }

  /**
   * Deletes signing keys and revokes all signed URLs generated with the key.
   *
   * @see stream-signing-keys-delete-signing-keys
   */
  async delete(identifier: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/stream/keys/${identifier}`);
  }
}

/**
 * RTMPS/SRT ingest endpoints for live streaming, including multi-output simulcasting
 */
export class LiveInputs extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists the live inputs created for an account. To get the credentials needed to stream to a specific live input, request a single live input.
   *
   * @see stream-live-inputs-list-live-inputs
   */
  async list(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/stream/live_inputs`, {
      query: params,
    });
  }

  /**
   * Retrieves details of an existing live input.
   *
   * @see stream-live-inputs-retrieve-a-live-input
   */
  async get(liveInputIdentifier: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/stream/live_inputs/${liveInputIdentifier}`);
  }

  /**
   * Creates a live input, and returns credentials that you or your users can use to stream live video to Cloudflare Stream.
   *
   * @see stream-live-inputs-create-a-live-input
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/stream/live_inputs`);
  }

  /**
   * Updates a specified live input.
   *
   * @see stream-live-inputs-update-a-live-input
   */
  async update(liveInputIdentifier: string, accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/stream/live_inputs/${liveInputIdentifier}`);
  }

  /**
   * Prevents a live input from being streamed to and makes the live input inaccessible to any future API calls.
   *
   * @see stream-live-inputs-delete-a-live-input
   */
  async delete(liveInputIdentifier: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/stream/live_inputs/${liveInputIdentifier}`);
  }

  /**
   * Retrieves all outputs associated with a specified live input.
   *
   * @see stream-live-inputs-list-all-outputs-associated-with-a-specified-live-input
   */
  async outputsList(liveInputIdentifier: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/stream/live_inputs/${liveInputIdentifier}/outputs`);
  }

  /**
   * Creates a new output that can be used to simulcast or restream live video to other RTMP or SRT destinations. Outputs are always linked to a specific live input — one live input can have many outputs.
   *
   * @see stream-live-inputs-create-a-new-output,-connected-to-a-live-input
   */
  async outputsCreate(liveInputIdentifier: string, accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/stream/live_inputs/${liveInputIdentifier}/outputs`);
  }

  /**
   * Updates the state of an output.
   *
   * @see stream-live-inputs-update-an-output
   */
  async outputsUpdate(outputIdentifier: string, liveInputIdentifier: string, accountId: string): Promise<unknown> {
    return this._client.put<unknown>(
      `/accounts/${accountId}/stream/live_inputs/${liveInputIdentifier}/outputs/${outputIdentifier}`,
    );
  }

  /**
   * Deletes an output and removes it from the associated live input.
   *
   * @see stream-live-inputs-delete-an-output
   */
  async outputsDelete(outputIdentifier: string, liveInputIdentifier: string, accountId: string): Promise<void> {
    return this._client.delete<void>(
      `/accounts/${accountId}/stream/live_inputs/${liveInputIdentifier}/outputs/${outputIdentifier}`,
    );
  }
}

/**
 * Watermark profiles that overlay an image on every video in the account
 */
export class Watermarks extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists all watermark profiles for an account.
   *
   * @see stream-watermark-profile-list-watermark-profiles
   */
  async list(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/stream/watermarks`);
  }

  /**
   * Retrieves details for a single watermark profile.
   *
   * @see stream-watermark-profile-watermark-profile-details
   */
  async get(identifier: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/stream/watermarks/${identifier}`);
  }

  /**
   * Creates watermark profiles using a single `HTTP POST multipart/form-data` request.
   *
   * @see stream-watermark-profile-create-watermark-profiles-via-basic-upload
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/stream/watermarks`);
  }

  /**
   * Deletes a watermark profile.
   *
   * @see stream-watermark-profile-delete-watermark-profiles
   */
  async delete(identifier: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/stream/watermarks/${identifier}`);
  }
}

/**
 * Webhook notifications for video lifecycle events (ready, error, etc.)
 */
export class Webhooks extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Retrieves a list of webhooks.
   *
   * @see stream-webhook-view-webhooks
   */
  async get(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/stream/webhook`);
  }

  /**
   * Creates a webhook notification.
   *
   * @see stream-webhook-create-webhooks
   */
  async update(accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/stream/webhook`);
  }

  /**
   * Deletes a webhook.
   *
   * @see stream-webhook-delete-webhooks
   */
  async delete(accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/stream/webhook`);
  }
}

/**
 * Upload, generate, or retrieve captions and subtitles for videos in multiple languages
 */
export class Captions extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists the available captions or subtitles for a specific video.
   *
   * @see stream-subtitles/-captions-list-captions-or-subtitles
   */
  async get(identifier: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/stream/${identifier}/captions`);
  }

  /**
   * Lists the captions or subtitles for provided language.
   *
   * @see stream-subtitles/-captions-get-caption-or-subtitle-for-language
   */
  async languageGet(language: string, identifier: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/stream/${identifier}/captions/${language}`);
  }

  /**
   * Generate captions or subtitles for provided language via AI.
   *
   * @see stream-subtitles/-captions-generate-caption-or-subtitle-for-language
   */
  async languageCreate(language: string, identifier: string, accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/stream/${identifier}/captions/${language}/generate`);
  }

  /**
   * Uploads the caption or subtitle file to the endpoint for a specific BCP47 language. One caption or subtitle file per language is allowed.
   *
   * @see stream-subtitles/-captions-upload-captions-or-subtitles
   */
  async languageUpdate(language: string, identifier: string, accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/stream/${identifier}/captions/${language}`);
  }

  /**
   * Removes the captions or subtitles from a video.
   *
   * @see stream-subtitles/-captions-delete-captions-or-subtitles
   */
  async languageDelete(language: string, identifier: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/stream/${identifier}/captions/${language}`);
  }

  /**
   * Return WebVTT captions for a provided language.
   *
   * @see stream-subtitles/-captions-get-vtt-caption-or-subtitle
   */
  async languageVttGet(language: string, identifier: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/stream/${identifier}/captions/${language}/vtt`);
  }
}

/**
 * Create downloadable MP4 renditions of a video for offline viewing
 */
export class Downloads extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists the downloads created for a video.
   *
   * @see stream-m-p-4-downloads-list-downloads
   */
  async get(identifier: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/stream/${identifier}/downloads`);
  }

  /**
   * Creates a download for a video when a video is ready to view. Use `/downloads/{download_type}` instead for type-specific downloads. Available types are `default` and `audio`.
   *
   * @see stream-m-p-4-downloads-create-downloads
   */
  async create(identifier: string, accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/stream/${identifier}/downloads`);
  }

  /**
   * Delete the downloads for a video. Use `/downloads/{download_type}` instead for type-specific downloads. Available types are `default` and `audio`.
   *
   * @see stream-m-p-4-downloads-delete-downloads
   */
  async delete(identifier: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/stream/${identifier}/downloads`);
  }
}

/**
 * Retrieve the HTML embed code snippet for a video
 */
export class Embed extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Fetches an HTML code snippet to embed a video in a web page delivered through Cloudflare. On success, returns an HTML fragment for use on web pages to display a video. On failure, returns a JSON response body.
   *
   * @see stream-videos-retreieve-embed-code-html
   */
  async get(identifier: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/stream/${identifier}/embed`);
  }
}

/**
 * Generate short-lived signed URL tokens for secure private video playback
 */
export class Token extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Creates a signed URL token for a video. If a body is not provided in the request, a token is created with default values.
   *
   * @see stream-videos-create-signed-url-tokens-for-videos
   */
  async create(identifier: string, accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/stream/${identifier}/token`);
  }
}

/**
 * Live Inputs (additional) operations
 */
export class LiveInputsExtra extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Prevents a live input from being streamed to and makes the live input inaccessible to any future API calls until enabled.
   *
   * @see stream-live-inputs-disable-a-live-input
   */
  async disableCreate(liveInputIdentifier: string, accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/stream/live_inputs/${liveInputIdentifier}/disable`);
  }

  /**
   * Allows a live input to be streamed to and makes the live input accessible to any future API calls.
   *
   * @see stream-live-inputs-enable-a-live-input
   */
  async enableCreate(liveInputIdentifier: string, accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/stream/live_inputs/${liveInputIdentifier}/enable`);
  }
}

/**
 * Downloads (additional) operations
 */
export class DownloadsExtra extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Delete specific type of download. For backwards-compatibility, DELETE requests to /downloads will delete the default download.
   *
   * @see stream-downloads-delete-type-specific-downloads
   */
  async delete(identifier: string, accountId: string, downloadType: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/stream/${identifier}/downloads/${downloadType}`);
  }

  /**
   * Creates a download for a video of specified type. For backwards-compatibility, POST requests to /downloads will enable the default download.
   *
   * @see stream-downloads-create-type-specific-downloads
   */
  async create(identifier: string, accountId: string, downloadType: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/stream/${identifier}/downloads/${downloadType}`);
  }
}

/**
 * Video encoding, storage, and delivery — upload, live-stream, clip, caption, and embed video at scale
 */
export class Stream extends APIResource {
  readonly audiotracks: AudioTracks;
  readonly videos: Videos;
  readonly clip: Clip;
  readonly copy: Copy;
  readonly directupload: DirectUpload;
  readonly keys: Keys;
  readonly liveinputs: LiveInputs;
  readonly watermarks: Watermarks;
  readonly webhooks: Webhooks;
  readonly captions: Captions;
  readonly downloads: Downloads;
  readonly embed: Embed;
  readonly token: Token;
  readonly liveinputsextra: LiveInputsExtra;
  readonly downloadsextra: DownloadsExtra;

  constructor(client: CloudflareClient) {
    super(client);
    this.audiotracks = new AudioTracks(client);
    this.videos = new Videos(client);
    this.clip = new Clip(client);
    this.copy = new Copy(client);
    this.directupload = new DirectUpload(client);
    this.keys = new Keys(client);
    this.liveinputs = new LiveInputs(client);
    this.watermarks = new Watermarks(client);
    this.webhooks = new Webhooks(client);
    this.captions = new Captions(client);
    this.downloads = new Downloads(client);
    this.embed = new Embed(client);
    this.token = new Token(client);
    this.liveinputsextra = new LiveInputsExtra(client);
    this.downloadsextra = new DownloadsExtra(client);
  }

  /**
   * Lists up to 1000 videos from a single request. For a specific range, refer to the optional parameters.
   *
   * @see stream-videos-list-videos
   */
  async list(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/stream`, {
      query: params,
    });
  }

  /**
   * Fetches details for a single video.
   *
   * @see stream-videos-retrieve-video-details
   */
  async get(identifier: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/stream/${identifier}`);
  }

  /**
   * Initiates a video upload using the TUS protocol. On success, the server responds with a status code 201 (created) and includes a `location` header to indicate where the content should be uploaded. Refer to https://tus.io for protocol details.
   *
   * @see stream-videos-initiate-video-uploads-using-tus
   */
  async create(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/stream`, {
      query: params,
    });
  }

  /**
   * Edit details for a single video.
   *
   * @see stream-videos-update-video-details
   */
  async edit(identifier: string, accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/stream/${identifier}`);
  }

  /**
   * Deletes a video and its copies from Cloudflare Stream.
   *
   * @see stream-videos-delete-video
   */
  async delete(identifier: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/stream/${identifier}`);
  }
}
