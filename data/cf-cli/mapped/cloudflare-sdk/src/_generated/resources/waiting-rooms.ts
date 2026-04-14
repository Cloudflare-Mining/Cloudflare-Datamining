/**
 * waiting-rooms resource
 * @generated from apis/waiting-rooms/schema.ts
 *
 * Virtual queues that throttle traffic to your site during peak demand with customizable waiting pages
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Custom HTML waiting page templates and preview rendering
 */
export class Page extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Creates a waiting room page preview. Upload a custom waiting room page for preview. You will receive a preview URL in the form `http://waitingrooms.dev/preview/<uuid>`. You can use the following query parameters to change the state of the preview: 1. `force_queue`: Boolean indicating if all users will be queued in the waiting room and no one will be let into the origin website (also known as queueAll). 2. `queue_is_full`: Boolean indicating if the waiting room's queue is currently full and not accepting new users at the moment. 3. `queueing_method`: The queueing method currently used by the waiting room. - **fifo** indicates a FIFO queue. - **random** indicates a Random queue. - **passthrough** indicates a Passthrough queue. Keep in mind that the waiting room page will only be displayed if `force_queue=true` or `event=prequeueing` — for other cases the request will pass through to the origin. For our preview, this will be a fake origin website returning \"Welcome\". - **reject** indicates a Reject queue. 4. `event`: Used to preview a waiting room event. - **none** indicates no event is occurring. - **prequeueing** indicates that an event is prequeueing (between `prequeue_start_time` and `event_start_time`). - **started** indicates that an event has started (between `event_start_time` and `event_end_time`). 5. `shuffle_at_event_start`: Boolean indicating if the event will shuffle users in the prequeue when it starts. This can only be set to **true** if an event is active (`event` is not **none**). For example, you can make a request to `http://waitingrooms.dev/preview/<uuid>?force_queue=false&queue_is_full=false&queueing_method=random&event=started&shuffle_at_event_start=true` 6. `waitTime`: Non-zero, positive integer indicating the estimated wait time in minutes. The default value is 10 minutes. For example, you can make a request to `http://waitingrooms.dev/preview/<uuid>?waitTime=50` to configure the estimated wait time as 50 minutes.
   *
   * @see waiting-room-create-a-custom-waiting-room-page-preview
   */
  async preview(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/waiting_rooms/preview`);
  }
}

/**
 * Scheduled events that temporarily override waiting room settings for sales, launches, etc.
 */
export class Events extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists events for a waiting room.
   *
   * @see waiting-room-list-events
   */
  async list(waitingRoomId: string, zoneId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/waiting_rooms/${waitingRoomId}/events`, {
      query: params,
    });
  }

  /**
   * Fetches a single configured event for a waiting room.
   *
   * @see waiting-room-event-details
   */
  async get(eventId: string, waitingRoomId: string, zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/waiting_rooms/${waitingRoomId}/events/${eventId}`);
  }

  /**
   * Only available for the Waiting Room Advanced subscription. Creates an event for a waiting room. An event takes place during a specified period of time, temporarily changing the behavior of a waiting room. While the event is active, some of the properties in the event's configuration may either override or inherit from the waiting room's configuration. Note that events cannot overlap with each other, so only one event can be active at a time.
   *
   * @see waiting-room-create-event
   */
  async create(waitingRoomId: string, zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/waiting_rooms/${waitingRoomId}/events`);
  }

  /**
   * Updates a configured event for a waiting room.
   *
   * @see waiting-room-update-event
   */
  async update(eventId: string, waitingRoomId: string, zoneId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/waiting_rooms/${waitingRoomId}/events/${eventId}`);
  }

  /**
   * Patches a configured event for a waiting room.
   *
   * @see waiting-room-patch-event
   */
  async edit(eventId: string, waitingRoomId: string, zoneId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/zones/${zoneId}/waiting_rooms/${waitingRoomId}/events/${eventId}`);
  }

  /**
   * Deletes an event for a waiting room.
   *
   * @see waiting-room-delete-event
   */
  async delete(eventId: string, waitingRoomId: string, zoneId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/waiting_rooms/${waitingRoomId}/events/${eventId}`);
  }

  /**
   * Previews an event's configuration as if it was active. Inherited fields from the waiting room will be displayed with their current values.
   *
   * @see waiting-room-preview-active-event-details
   */
  async detailsGet(eventId: string, waitingRoomId: string, zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/waiting_rooms/${waitingRoomId}/events/${eventId}/details`);
  }
}

/**
 * Rules that bypass or modify waiting room behavior for specific request patterns
 */
export class Rules extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists rules for a waiting room.
   *
   * @see waiting-room-list-waiting-room-rules
   */
  async get(waitingRoomId: string, zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/waiting_rooms/${waitingRoomId}/rules`);
  }

  /**
   * Only available for the Waiting Room Advanced subscription. Creates a rule for a waiting room.
   *
   * @see waiting-room-create-waiting-room-rule
   */
  async create(waitingRoomId: string, zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/waiting_rooms/${waitingRoomId}/rules`);
  }

  /**
   * Only available for the Waiting Room Advanced subscription. Replaces all rules for a waiting room.
   *
   * @see waiting-room-replace-waiting-room-rules
   */
  async update(waitingRoomId: string, zoneId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/waiting_rooms/${waitingRoomId}/rules`);
  }

  /**
   * Patches a rule for a waiting room.
   *
   * @see waiting-room-patch-waiting-room-rule
   */
  async edit(ruleId: string, waitingRoomId: string, zoneId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/zones/${zoneId}/waiting_rooms/${waitingRoomId}/rules/${ruleId}`);
  }

  /**
   * Deletes a rule for a waiting room.
   *
   * @see waiting-room-delete-waiting-room-rule
   */
  async delete(ruleId: string, waitingRoomId: string, zoneId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/waiting_rooms/${waitingRoomId}/rules/${ruleId}`);
  }
}

/**
 * Real-time queue status showing active users, queued users, and estimated wait times
 */
export class Statuses extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Fetches the status of a configured waiting room. Response fields include: 1. `status`: String indicating the status of the waiting room. The possible status are: - **not_queueing** indicates that the configured thresholds have not been met and all users are going through to the origin. - **queueing** indicates that the thresholds have been met and some users are held in the waiting room. - **event_prequeueing** indicates that an event is active and is currently prequeueing users before it starts. - **suspended** indicates that the room is suspended. 2. `event_id`: String of the current event's `id` if an event is active, otherwise an empty string. 3. `estimated_queued_users`: Integer of the estimated number of users currently waiting in the queue. 4. `estimated_total_active_users`: Integer of the estimated number of users currently active on the origin. 5. `max_estimated_time_minutes`: Integer of the maximum estimated time currently presented to the users.
   *
   * @see waiting-room-get-waiting-room-status
   */
  async get(waitingRoomId: string, zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/waiting_rooms/${waitingRoomId}/status`);
  }
}

/**
 * Zone-level waiting room defaults and cookie configuration
 */
export class Settings extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Get zone-level waiting room settings
   *
   * @see waiting-room-get-zone-settings
   */
  async get(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/waiting_rooms/settings`);
  }

  /**
   * Update zone-level waiting room settings
   *
   * @see waiting-room-update-zone-settings
   */
  async update(zoneId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/waiting_rooms/settings`);
  }

  /**
   * Edit zone-level waiting room settings
   *
   * @see waiting-room-patch-zone-settings
   */
  async edit(zoneId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/zones/${zoneId}/waiting_rooms/settings`);
  }
}

/**
 * Virtual queues that throttle traffic to your site during peak demand with customizable waiting pages
 */
export class WaitingRooms extends APIResource {
  readonly page: Page;
  readonly events: Events;
  readonly rules: Rules;
  readonly statuses: Statuses;
  readonly settings: Settings;

  constructor(client: CloudflareClient) {
    super(client);
    this.page = new Page(client);
    this.events = new Events(client);
    this.rules = new Rules(client);
    this.statuses = new Statuses(client);
    this.settings = new Settings(client);
  }

  /**
   * Lists waiting rooms for zone.
   *
   * @see waiting-room-list-waiting-rooms
   */
  async list(zoneId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/waiting_rooms`, {
      query: params,
    });
  }

  /**
   * Fetches a single configured waiting room.
   *
   * @see waiting-room-waiting-room-details
   */
  async get(waitingRoomId: string, zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/waiting_rooms/${waitingRoomId}`);
  }

  /**
   * Creates a new waiting room.
   *
   * @see waiting-room-create-waiting-room
   */
  async create(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/waiting_rooms`);
  }

  /**
   * Updates a configured waiting room.
   *
   * @see waiting-room-update-waiting-room
   */
  async update(waitingRoomId: string, zoneId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/waiting_rooms/${waitingRoomId}`);
  }

  /**
   * Patches a configured waiting room.
   *
   * @see waiting-room-patch-waiting-room
   */
  async edit(waitingRoomId: string, zoneId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/zones/${zoneId}/waiting_rooms/${waitingRoomId}`);
  }

  /**
   * Deletes a waiting room.
   *
   * @see waiting-room-delete-waiting-room
   */
  async delete(waitingRoomId: string, zoneId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/waiting_rooms/${waitingRoomId}`);
  }

  /**
   * Lists waiting rooms for account.
   *
   * @see waiting-room-list-waiting-rooms-account
   */
  async listExtra(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/waiting_rooms`, {
      query: params,
    });
  }
}
