/**
 * url-normalization resource
 * @generated from apis/url-normalization/schema.ts
 *
 * Normalize incoming request URLs to a consistent format before rule evaluation and caching
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Normalize incoming request URLs to a consistent format before rule evaluation and caching
 */
export class URLNormalization extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Fetches the current URL Normalization settings.
   *
   * @see getUrlNormalization
   */
  async get(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/url_normalization`);
  }

  /**
   * Updates the URL Normalization settings.
   *
   * @see updateUrlNormalization
   */
  async update(zoneId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/url_normalization`);
  }

  /**
   * Deletes the URL Normalization settings.
   *
   * @see deleteUrlNormalization
   */
  async delete(zoneId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/url_normalization`);
  }
}
