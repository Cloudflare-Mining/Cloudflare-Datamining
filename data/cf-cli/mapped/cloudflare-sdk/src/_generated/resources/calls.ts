/**
 * calls resource
 * @generated from apis/calls/schema.ts
 *
 * Real-time audio/video communication infrastructure — SFU apps for WebRTC and TURN relay keys
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Selective Forwarding Unit apps that route WebRTC media between participants
 */
export class Sfu extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists all apps in the Cloudflare account
   *
   * @see calls-apps-list
   */
  async list(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/calls/apps`);
  }

  /**
   * Fetches details for a single Calls app.
   *
   * @see calls-apps-retrieve-app-details
   */
  async get(appId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/calls/apps/${appId}`);
  }

  /**
   * Creates a new Cloudflare calls app. An app is an unique enviroment where each Session can access all Tracks within the app.
   *
   * @see calls-apps-create-a-new-app
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/calls/apps`);
  }

  /**
   * Edit details for a single app.
   *
   * @see calls-apps-update-app-details
   */
  async update(appId: string, accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/calls/apps/${appId}`);
  }

  /**
   * Deletes an app from Cloudflare Calls
   *
   * @see calls-apps-delete-app
   */
  async delete(appId: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/calls/apps/${appId}`);
  }
}

/**
 * TURN relay keys that help clients traverse NATs and firewalls for peer-to-peer connectivity
 */
export class Turn extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists all TURN keys in the Cloudflare account
   *
   * @see calls-turn-key-list
   */
  async list(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/calls/turn_keys`);
  }

  /**
   * Fetches details for a single TURN key.
   *
   * @see calls-retrieve-turn-key-details
   */
  async get(keyId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/calls/turn_keys/${keyId}`);
  }

  /**
   * Creates a new Cloudflare Calls TURN key.
   *
   * @see calls-turn-key-create
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/calls/turn_keys`);
  }

  /**
   * Edit details for a single TURN key.
   *
   * @see calls-update-turn-key
   */
  async update(keyId: string, accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/calls/turn_keys/${keyId}`);
  }

  /**
   * Deletes a TURN key from Cloudflare Calls
   *
   * @see calls-delete-turn-key
   */
  async delete(keyId: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/calls/turn_keys/${keyId}`);
  }
}

/**
 * Real-time audio/video communication infrastructure — SFU apps for WebRTC and TURN relay keys
 */
export class Calls extends APIResource {
  readonly sfu: Sfu;
  readonly turn: Turn;

  constructor(client: CloudflareClient) {
    super(client);
    this.sfu = new Sfu(client);
    this.turn = new Turn(client);
  }
}
