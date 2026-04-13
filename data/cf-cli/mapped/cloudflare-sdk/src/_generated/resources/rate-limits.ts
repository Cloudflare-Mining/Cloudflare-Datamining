/**
 * rate-limits resource
 * @generated from apis/rate-limits/schema.ts
 *
 * Legacy per-zone rate limiting rules — prefer Advanced Rate Limiting in Rulesets for new configurations
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Legacy per-zone rate limiting rules — prefer Advanced Rate Limiting in Rulesets for new configurations
 */
export class RateLimits extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Fetches the rate limits for a zone.
   *
   * @see rate-limits-for-a-zone-list-rate-limits
   */
  async list(zoneId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/rate_limits`, {
      query: params,
    });
  }

  /**
   * Fetches the details of a rate limit.
   *
   * @see rate-limits-for-a-zone-get-a-rate-limit
   */
  async get(rateLimitId: string, zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/rate_limits/${rateLimitId}`);
  }

  /**
   * Creates a new rate limit for a zone. Refer to the object definition for a list of required attributes.
   *
   * @see rate-limits-for-a-zone-create-a-rate-limit
   */
  async create(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/rate_limits`);
  }

  /**
   * Updates an existing rate limit.
   *
   * @see rate-limits-for-a-zone-update-a-rate-limit
   */
  async edit(rateLimitId: string, zoneId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/rate_limits/${rateLimitId}`);
  }

  /**
   * Deletes an existing rate limit.
   *
   * @see rate-limits-for-a-zone-delete-a-rate-limit
   */
  async delete(rateLimitId: string, zoneId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/rate_limits/${rateLimitId}`);
  }
}
