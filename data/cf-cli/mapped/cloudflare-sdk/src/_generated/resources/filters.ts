/**
 * filters resource
 * @generated from apis/filters/schema.ts
 *
 * Filter expressions used by legacy firewall rules to match requests — prefer Rulesets for new configurations
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Filter expressions used by legacy firewall rules to match requests — prefer Rulesets for new configurations
 */
export class Filters extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Fetches filters in a zone. You can filter the results using several optional parameters.
   *
   * @see filters-list-filters
   */
  async list(zoneId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/filters`, {
      query: params,
    });
  }

  /**
   * Fetches the details of a filter.
   *
   * @see filters-get-a-filter
   */
  async get(filterId: string, zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/filters/${filterId}`);
  }

  /**
   * Creates one or more filters.
   *
   * @see filters-create-filters
   */
  async create(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/filters`);
  }

  /**
   * Updates an existing filter.
   *
   * @see filters-update-a-filter
   */
  async update(filterId: string, zoneId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/filters/${filterId}`);
  }

  /**
   * Deletes an existing filter.
   *
   * @see filters-delete-a-filter
   */
  async delete(filterId: string, zoneId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/filters/${filterId}`);
  }

  /**
   * Updates one or more existing filters.
   *
   * @see filters-update-filters
   */
  async bulkUpdate(zoneId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/filters`);
  }

  /**
   * Deletes one or more existing filters.
   *
   * @see filters-delete-filters
   */
  async bulkDelete(zoneId: string, params?: Record<string, unknown>): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/filters`, {
      query: params,
    });
  }
}
