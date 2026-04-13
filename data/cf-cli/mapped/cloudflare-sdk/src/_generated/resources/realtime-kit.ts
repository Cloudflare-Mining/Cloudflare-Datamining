/**
 * realtime-kit resource
 * @generated from apis/realtime-kit/schema.ts
 *
 * Real-time video and audio — meetings, livestreams, recordings, and session management via Cloudflare Calls
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Realtime Kit applications that group meetings, sessions, and configuration together
 */
export class Apps extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Fetch all apps for your account
   *
   * @see get_apps
   */
  async get(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/realtime/kit/apps`);
  }

  /**
   * Create new app for your account
   *
   * @see create_app
   */
  async post(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/realtime/kit/apps`);
  }
}

/**
 * Video meetings with participant management, access tokens, and recording controls
 */
export class Meetings extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Returns all meetings for the given App ID.
   *
   * @see get_all_meetings
   */
  async get(accountId: string, appId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/realtime/kit/${appId}/meetings`, {
      query: params,
    });
  }

  /**
   * Create a meeting for the given App ID.
   *
   * @see create_meeting
   */
  async create(accountId: string, appId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/realtime/kit/${appId}/meetings`);
  }

  /**
   * Returns a meeting details in an App for the given meeting ID.
   *
   * @see get_meeting
   */
  async getMeetingById(
    meetingId: string,
    accountId: string,
    appId: string,
    params?: Record<string, unknown>,
  ): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/realtime/kit/${appId}/meetings/${meetingId}`, {
      query: params,
    });
  }

  /**
   * Updates a meeting in an App for the given meeting ID.
   *
   * @see update_meeting
   */
  async updateMeetingById(meetingId: string, accountId: string, appId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/realtime/kit/${appId}/meetings/${meetingId}`);
  }

  /**
   * Replaces all the details for the given meeting ID.
   *
   * @see replace_meeting
   */
  async replaceMeetingById(meetingId: string, accountId: string, appId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/realtime/kit/${appId}/meetings/${meetingId}`);
  }

  /**
   * Returns all participants detail for the given meeting ID.
   *
   * @see get_meeting_participants
   */
  async getMeetingParticipants(
    accountId: string,
    appId: string,
    meetingId: string,
    params?: Record<string, unknown>,
  ): Promise<unknown> {
    return this._client.get<unknown>(
      `/accounts/${accountId}/realtime/kit/${appId}/meetings/${meetingId}/participants`,
      {
        query: params,
      },
    );
  }

  /**
   * Adds a participant to the given meeting ID.
   *
   * @see add_participant
   */
  async addParticipant(accountId: string, appId: string, meetingId: string): Promise<unknown> {
    return this._client.post<unknown>(
      `/accounts/${accountId}/realtime/kit/${appId}/meetings/${meetingId}/participants`,
    );
  }

  /**
   * Returns a participant details for the given meeting and participant ID.
   *
   * @see get_meeting_participant
   */
  async getMeetingParticipant(
    meetingId: string,
    participantId: string,
    accountId: string,
    appId: string,
  ): Promise<unknown> {
    return this._client.get<unknown>(
      `/accounts/${accountId}/realtime/kit/${appId}/meetings/${meetingId}/participants/${participantId}`,
    );
  }

  /**
   * Updates a participant's details for the given meeting and participant ID.
   *
   * @see edit_participant
   */
  async editParticipant(meetingId: string, participantId: string, accountId: string, appId: string): Promise<unknown> {
    return this._client.patch<unknown>(
      `/accounts/${accountId}/realtime/kit/${appId}/meetings/${meetingId}/participants/${participantId}`,
    );
  }

  /**
   * Deletes a participant for the given meeting and participant ID.
   *
   * @see delete_meeting_participant
   */
  async deleteMeetingParticipant(
    meetingId: string,
    participantId: string,
    accountId: string,
    appId: string,
  ): Promise<void> {
    return this._client.delete<void>(
      `/accounts/${accountId}/realtime/kit/${appId}/meetings/${meetingId}/participants/${participantId}`,
    );
  }

  /**
   * Regenerates participant's authentication token for the given meeting and participant ID.
   *
   * @see regenerate_token
   */
  async refreshParticipantToken(
    accountId: string,
    appId: string,
    meetingId: string,
    participantId: string,
  ): Promise<unknown> {
    return this._client.post<unknown>(
      `/accounts/${accountId}/realtime/kit/${appId}/meetings/${meetingId}/participants/${participantId}/token`,
    );
  }
}

/**
 * Reusable meeting configuration presets for resolution, layout, and recording defaults
 */
export class Presets extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Fetches all the presets belonging to an App.
   *
   * @see get-presets
   */
  async get(accountId: string, appId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/realtime/kit/${appId}/presets`, {
      query: params,
    });
  }

  /**
   * Creates a preset belonging to the current App
   *
   * @see post-presets
   */
  async create(accountId: string, appId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/realtime/kit/${appId}/presets`);
  }

  /**
   * Fetches details of a preset using the provided preset ID
   *
   * @see get-presets-preset_id
   */
  async getPresetById(accountId: string, appId: string, presetId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/realtime/kit/${appId}/presets/${presetId}`);
  }

  /**
   * Deletes a preset using the provided preset ID
   *
   * @see delete-presets-preset_id
   */
  async delete(accountId: string, appId: string, presetId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/realtime/kit/${appId}/presets/${presetId}`);
  }

  /**
   * Update a preset by the provided preset ID
   *
   * @see patch-presets-preset_id
   */
  async update(accountId: string, appId: string, presetId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/realtime/kit/${appId}/presets/${presetId}`);
  }
}

/**
 * Active and historical meeting sessions with participant details and duration tracking
 */
export class Sessions extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Returns details of all sessions of an App.
   *
   * @see GetSessions
   */
  async getSessions(accountId: string, appId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/realtime/kit/${appId}/sessions`, {
      query: params,
    });
  }

  /**
   * Returns data of the given session ID including recording details.
   *
   * @see GetSessionDetails
   */
  async getSessionDetails(
    accountId: string,
    appId: string,
    sessionId: string,
    params?: Record<string, unknown>,
  ): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/realtime/kit/${appId}/sessions/${sessionId}`, {
      query: params,
    });
  }

  /**
   * Returns a list of participants for the given session ID.
   *
   * @see GetSessionParticipants
   */
  async getSessionParticipants(
    accountId: string,
    appId: string,
    sessionId: string,
    params?: Record<string, unknown>,
  ): Promise<unknown> {
    return this._client.get<unknown>(
      `/accounts/${accountId}/realtime/kit/${appId}/sessions/${sessionId}/participants`,
      {
        query: params,
      },
    );
  }

  /**
   * Returns details of the given participant ID along with call statistics for the given session ID.
   *
   * @see GetParticipantDetails
   */
  async getSessionParticipantDetails(
    accountId: string,
    appId: string,
    participantId: string,
    sessionId: string,
    params?: Record<string, unknown>,
  ): Promise<unknown> {
    return this._client.get<unknown>(
      `/accounts/${accountId}/realtime/kit/${appId}/sessions/${sessionId}/participants/${participantId}`,
      {
        query: params,
      },
    );
  }

  /**
   * Returns a URL to download all chat messages of the session ID in CSV format.
   *
   * @see GetSessionChat
   */
  async getSessionChat(accountId: string, appId: string, sessionId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/realtime/kit/${appId}/sessions/${sessionId}/chat`);
  }

  /**
   * Returns a URL to download the transcript for the session ID in CSV format.
   *
   * @see GetSessionTranscript
   */
  async getSessionTranscripts(accountId: string, appId: string, sessionId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/realtime/kit/${appId}/sessions/${sessionId}/transcript`);
  }

  /**
   * Returns a Summary URL to download the Summary of Transcripts for the session ID as plain text.
   *
   * @see GetSessionSummary
   */
  async getSessionSummary(accountId: string, appId: string, sessionId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/realtime/kit/${appId}/sessions/${sessionId}/summary`);
  }

  /**
   * Trigger Summary generation of Transcripts for the session ID.
   *
   * @see post-sessions-session_id-summary
   */
  async generateSummaryOfTranscripts(accountId: string, appId: string, sessionId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/realtime/kit/${appId}/sessions/${sessionId}/summary`);
  }

  /**
   * Returns details of the given peer ID along with call statistics for the given session ID.
   *
   * @see GetParticipantDataFromPeerId
   */
  async getParticipantDataFromPeerId(
    accountId: string,
    appId: string,
    peerId: string,
    params?: Record<string, unknown>,
  ): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/realtime/kit/${appId}/sessions/peer-report/${peerId}`, {
      query: params,
    });
  }
}

/**
 * Meeting recordings — list, download, and manage recorded video and audio files
 */
export class Recordings extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Returns all recordings for an App. If the `meeting_id` parameter is passed, returns all recordings for the given meeting ID.
   *
   * @see get_all_recordings
   */
  async getRecordings(accountId: string, appId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/realtime/kit/${appId}/recordings`, {
      query: params,
    });
  }

  /**
   * Starts recording a meeting. The meeting can be started by an App admin directly, or a participant with permissions to start a recording, based on the type of authorization used.
   *
   * @see start_recording
   */
  async startRecordings(accountId: string, appId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/realtime/kit/${appId}/recordings`);
  }

  /**
   * Returns the active recording details for the given meeting ID.
   *
   * @see get_active_recording
   */
  async getActiveRecordings(accountId: string, appId: string, meetingId: string): Promise<unknown> {
    return this._client.get<unknown>(
      `/accounts/${accountId}/realtime/kit/${appId}/recordings/active-recording/${meetingId}`,
    );
  }

  /**
   * Returns details of a recording for the given recording ID.
   *
   * @see get_one_recording
   */
  async getOneRecording(accountId: string, appId: string, recordingId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/realtime/kit/${appId}/recordings/${recordingId}`);
  }

  /**
   * Pause/Resume/Stop a given recording ID.
   *
   * @see pause_resume_stop_recording
   */
  async pauseResumeStopRecording(accountId: string, appId: string, recordingId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/realtime/kit/${appId}/recordings/${recordingId}`);
  }

  /**
   * Starts a track recording in a meeting. Track recordings consist of "layers". Layers are used to map audio/video tracks in a meeting to output destinations. More information about track recordings is available in the [Track Recordings Guide Page](https://docs.realtime.cloudflare.com/guides/capabilities/recording/recording-overview).
   *
   * @see startTrackRecordingForAMeeting
   */
  async startTrackRecording(accountId: string, appId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/realtime/kit/${appId}/recordings/track`);
  }
}

/**
 * Webhook endpoints for real-time event notifications (meeting started, participant joined, etc.)
 */
export class Webhooks extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Returns details of all webhooks for an App.
   *
   * @see getAllWebhooks
   */
  async getWebhooks(accountId: string, appId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/realtime/kit/${appId}/webhooks`);
  }

  /**
   * Adds a new webhook to an App.
   *
   * @see addWebhook
   */
  async createWebhook(accountId: string, appId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/realtime/kit/${appId}/webhooks`);
  }

  /**
   * Returns webhook details for the given webhook ID.
   *
   * @see getWebhook
   */
  async getWebhookById(accountId: string, appId: string, webhookId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/realtime/kit/${appId}/webhooks/${webhookId}`);
  }

  /**
   * Replace all details for the given webhook ID.
   *
   * @see replaceWebhook
   */
  async replaceWebhook(accountId: string, appId: string, webhookId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/realtime/kit/${appId}/webhooks/${webhookId}`);
  }

  /**
   * Edits the webhook details for the given webhook ID.
   *
   * @see editWebhook
   */
  async editWebhook(accountId: string, appId: string, webhookId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/realtime/kit/${appId}/webhooks/${webhookId}`);
  }

  /**
   * Removes a webhook for the given webhook ID.
   *
   * @see deleteWebhook
   */
  async deleteWebhook(accountId: string, appId: string, webhookId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/realtime/kit/${appId}/webhooks/${webhookId}`);
  }
}

/**
 * Currently active meeting sessions with live participant counts and controls
 */
export class ActiveSession extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Returns details of an ongoing active session for the given meeting ID.
   *
   * @see GetActiveSession
   */
  async getActiveSession(meetingId: string, accountId: string, appId: string): Promise<unknown> {
    return this._client.get<unknown>(
      `/accounts/${accountId}/realtime/kit/${appId}/meetings/${meetingId}/active-session`,
    );
  }

  /**
   * Kicks one or more participants from an active session using user ID or custom participant ID.
   *
   * @see KickPartcipants
   */
  async kickParticipants(accountId: string, appId: string, meetingId: string): Promise<unknown> {
    return this._client.post<unknown>(
      `/accounts/${accountId}/realtime/kit/${appId}/meetings/${meetingId}/active-session/kick`,
    );
  }

  /**
   * Kicks all participants from an active session for the given meeting ID.
   *
   * @see KickAllParticipants
   */
  async kickAllParticipants(accountId: string, appId: string, meetingId: string): Promise<unknown> {
    return this._client.post<unknown>(
      `/accounts/${accountId}/realtime/kit/${appId}/meetings/${meetingId}/active-session/kick-all`,
    );
  }

  /**
   * Creates a new poll in an active session for the given meeting ID.
   *
   * @see CreatePoll
   */
  async createPoll(accountId: string, appId: string, meetingId: string): Promise<unknown> {
    return this._client.post<unknown>(
      `/accounts/${accountId}/realtime/kit/${appId}/meetings/${meetingId}/active-session/poll`,
    );
  }
}

/**
 * Live streaming from meetings to external platforms with stream key management
 */
export class Livestreams extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Returns details of livestreams associated with the given App ID. It includes livestreams created by your App and RealtimeKit meetings that are livestreamed by your App. If you only want details of livestreams created by your App and not RealtimeKit meetings, you can use the `exclude_meetings` query parameter.
   *
   * @see fetch_all_livestreams
   */
  async getAllLivestreams(accountId: string, appId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/realtime/kit/${appId}/livestreams`, {
      query: params,
    });
  }

  /**
   * Stops the active livestream of a meeting associated with the given meeting ID. Retreive the meeting ID using the `Create a meeting` API.
   *
   * @see stop_livestreaming
   */
  async stopLivestreamingAMeeting(meetingId: string, accountId: string, appId: string): Promise<unknown> {
    return this._client.post<unknown>(
      `/accounts/${accountId}/realtime/kit/${appId}/meetings/${meetingId}/active-livestream/stop`,
    );
  }

  /**
   * Starts livestream of a meeting associated with the given meeting ID. Retreive the meeting ID using the `Create a meeting` API.
   *
   * @see start-livestreaming
   */
  async startLivestreamingAMeeting(meetingId: string, accountId: string, appId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/realtime/kit/${appId}/meetings/${meetingId}/livestreams`);
  }

  /**
   * Returns livestream analytics for the specified time range.
   *
   * @see get-livestream-analytics-complete
   */
  async getLivestreamAnalyticsComplete(
    accountId: string,
    appId: string,
    params?: Record<string, unknown>,
  ): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/realtime/kit/${appId}/analytics/livestreams/overall`, {
      query: params,
    });
  }

  /**
   * Returns day-wise session and recording analytics data of an App for the specified time range start_date to end_date. If start_date and end_date are not provided, the default time range is set from 30 days ago to the current date.
   *
   * @see get-org-analytics
   */
  async getOrgAnalytics(accountId: string, appId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/realtime/kit/${appId}/analytics/daywise`, {
      query: params,
    });
  }

  /**
   * Returns details of all active livestreams for the given meeting ID.
   *
   * @see get-v2-meetings-meetingId-active-livestream
   */
  async getMeetingActiveLivestreams(meetingId: string, accountId: string, appId: string): Promise<unknown> {
    return this._client.get<unknown>(
      `/accounts/${accountId}/realtime/kit/${appId}/meetings/${meetingId}/active-livestream`,
    );
  }

  /**
   * Returns livestream session details for the given livestream session ID. Retrieve the `livestream_session_id`using the `Fetch livestream session details using a session ID` API.
   *
   * @see get-v2-livestreams-livestream-session-id
   */
  async getLivestreamSessionDetailsForSessionId(
    accountId: string,
    appId: string,
    livestreamSessionId: string,
  ): Promise<unknown> {
    return this._client.get<unknown>(
      `/accounts/${accountId}/realtime/kit/${appId}/livestreams/sessions/${livestreamSessionId}`,
    );
  }

  /**
   * Returns details of all active livestreams for the given livestream ID. Retreive the livestream ID using the `Start livestreaming a meeting` API.
   *
   * @see get-v2-active-livestream-session-details
   */
  async getActiveLivestreamsForLivestreamId(accountId: string, appId: string, livestreamId: string): Promise<unknown> {
    return this._client.get<unknown>(
      `/accounts/${accountId}/realtime/kit/${appId}/livestreams/${livestreamId}/active-livestream-session`,
    );
  }

  /**
   * Returns details of a livestream with sessions for the given livestream ID. Retreive the livestream ID using the `Start livestreaming a meeting` API.
   *
   * @see get-v2-livestream-session-livestream-id
   */
  async getLivestreamSessionForLivestreamId(
    accountId: string,
    appId: string,
    livestreamId: string,
    params?: Record<string, unknown>,
  ): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/realtime/kit/${appId}/livestreams/${livestreamId}`, {
      query: params,
    });
  }
}

/**
 * Usage analytics — meeting minutes, participant counts, and bandwidth consumption
 */
export class Analytics extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Returns day-wise session and recording analytics data of an App for the specified time range start_date to end_date. If start_date and end_date are not provided, the default time range is set from 30 days ago to the current date.
   *
   * @see get-org-analytics
   */
  async getOrgAnalytics(accountId: string, appId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/realtime/kit/${appId}/analytics/daywise`, {
      query: params,
    });
  }
}

/**
 * Kit operations
 */
export class Kit extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Mutes one or more participants from an active session using user ID or custom participant ID.
   *
   * @see MuteParticipants
   */
  async meetingsActiveSessionMuteCreate(accountId: string, appId: string, meetingId: string): Promise<unknown> {
    return this._client.post<unknown>(
      `/accounts/${accountId}/realtime/kit/${appId}/meetings/${meetingId}/active-session/mute`,
    );
  }

  /**
   * Mutes all participants of an active session for the given meeting ID.
   *
   * @see MuteAllParticipants
   */
  async meetingsActiveSessionMuteAllCreate(accountId: string, appId: string, meetingId: string): Promise<unknown> {
    return this._client.post<unknown>(
      `/accounts/${accountId}/realtime/kit/${appId}/meetings/${meetingId}/active-session/mute-all`,
    );
  }

  /**
   * Returns livestream session details for the given meeting ID. Retreive the meeting ID using the `Create a meeting` API.
   *
   * @see livestream-session-details
   */
  async meetingsLivestreamGet(
    meetingId: string,
    accountId: string,
    appId: string,
    params?: Record<string, unknown>,
  ): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/realtime/kit/${appId}/meetings/${meetingId}/livestream`, {
      query: params,
    });
  }

  /**
   * Returns livestream session details for the given session ID. Retreive the session ID using the `Fetch all sessions of an App` API.
   *
   * @see get-v2-livestreamsession-session-meetingId-active-livestream
   */
  async sessionsLivestreamSessionsGet(
    accountId: string,
    appId: string,
    sessionId: string,
    params?: Record<string, unknown>,
  ): Promise<unknown> {
    return this._client.get<unknown>(
      `/accounts/${accountId}/realtime/kit/${appId}/sessions/${sessionId}/livestream-sessions`,
      {
        query: params,
      },
    );
  }
}

/**
 * Real-time video and audio — meetings, livestreams, recordings, and session management via Cloudflare Calls
 */
export class RealtimeKit extends APIResource {
  readonly apps: Apps;
  readonly meetings: Meetings;
  readonly presets: Presets;
  readonly sessions: Sessions;
  readonly recordings: Recordings;
  readonly webhooks: Webhooks;
  readonly activesession: ActiveSession;
  readonly livestreams: Livestreams;
  readonly analytics: Analytics;
  readonly kit: Kit;

  constructor(client: CloudflareClient) {
    super(client);
    this.apps = new Apps(client);
    this.meetings = new Meetings(client);
    this.presets = new Presets(client);
    this.sessions = new Sessions(client);
    this.recordings = new Recordings(client);
    this.webhooks = new Webhooks(client);
    this.activesession = new ActiveSession(client);
    this.livestreams = new Livestreams(client);
    this.analytics = new Analytics(client);
    this.kit = new Kit(client);
  }
}
