/**
 * page-rules resource
 * @generated from apis/page-rules/schema.ts
 *
 * Legacy URL-pattern rules that override zone settings for matching requests — prefer Rules/Transform Rules instead
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Settings operations
 */
export class Settings extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Returns a list of settings (and their details) that Page Rules can apply to matching requests.
   *
   * @see available-page-rules-settings-list-available-page-rules-settings
   */
  async list(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/pagerules/settings`);
  }
}

/**
 * Legacy URL-pattern rules that override zone settings for matching requests — prefer Rules/Transform Rules instead
 */
export class PageRules extends APIResource {
  readonly settings: Settings;

  constructor(client: CloudflareClient) {
    super(client);
    this.settings = new Settings(client);
  }

  /**
   * Fetches Page Rules in a zone.
   *
   * @see page-rules-list-page-rules
   */
  async list(zoneId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/pagerules`, {
      query: params,
    });
  }

  /**
   * Fetches the details of a Page Rule.
   *
   * @see page-rules-get-a-page-rule
   */
  async get(pageruleId: string, zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/pagerules/${pageruleId}`);
  }

  /**
   * Creates a new Page Rule.
   *
   * @see page-rules-create-a-page-rule
   */
  async create(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/pagerules`);
  }

  /**
   * Replaces the configuration of an existing Page Rule. The configuration of the updated Page Rule will exactly match the data passed in the API request.
   *
   * @see page-rules-update-a-page-rule
   */
  async update(pageruleId: string, zoneId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/pagerules/${pageruleId}`);
  }

  /**
   * Updates one or more fields of an existing Page Rule.
   *
   * @see page-rules-edit-a-page-rule
   */
  async edit(pageruleId: string, zoneId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/zones/${zoneId}/pagerules/${pageruleId}`);
  }

  /**
   * Deletes an existing Page Rule.
   *
   * @see page-rules-delete-a-page-rule
   */
  async delete(pageruleId: string, zoneId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/pagerules/${pageruleId}`);
  }
}
