/**
 * healthchecks resource
 * @generated from apis/healthchecks/schema.ts
 *
 * Standalone health checks that monitor origin server availability from Cloudflare's edge
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Test a health check configuration before deploying it to production
 */
export class Previews extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Fetch a single configured health check preview.
   *
   * @see health-checks-health-check-preview-details
   */
  async get(healthcheckId: string, zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/healthchecks/preview/${healthcheckId}`);
  }

  /**
   * Create a new preview health check.
   *
   * @see health-checks-create-preview-health-check
   */
  async create(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/healthchecks/preview`);
  }

  /**
   * Delete a health check.
   *
   * @see health-checks-delete-preview-health-check
   */
  async delete(healthcheckId: string, zoneId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/healthchecks/preview/${healthcheckId}`);
  }
}

/**
 * Standalone health checks that monitor origin server availability from Cloudflare's edge
 */
export class Healthchecks extends APIResource {
  readonly previews: Previews;

  constructor(client: CloudflareClient) {
    super(client);
    this.previews = new Previews(client);
  }

  /**
   * List configured health checks.
   *
   * @see health-checks-list-health-checks
   */
  async list(zoneId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/healthchecks`, {
      query: params,
    });
  }

  /**
   * Fetch a single configured health check.
   *
   * @see health-checks-health-check-details
   */
  async get(healthcheckId: string, zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/healthchecks/${healthcheckId}`);
  }

  /**
   * Create a new health check.
   *
   * @see health-checks-create-health-check
   */
  async create(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/healthchecks`);
  }

  /**
   * Update a configured health check.
   *
   * @see health-checks-update-health-check
   */
  async update(healthcheckId: string, zoneId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/healthchecks/${healthcheckId}`);
  }

  /**
   * Patch a configured health check.
   *
   * @see health-checks-patch-health-check
   */
  async edit(healthcheckId: string, zoneId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/zones/${zoneId}/healthchecks/${healthcheckId}`);
  }

  /**
   * Delete a health check.
   *
   * @see health-checks-delete-health-check
   */
  async delete(healthcheckId: string, zoneId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/healthchecks/${healthcheckId}`);
  }
}
