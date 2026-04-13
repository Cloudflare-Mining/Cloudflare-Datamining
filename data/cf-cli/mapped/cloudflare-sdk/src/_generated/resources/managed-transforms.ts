/**
 * managed-transforms resource
 * @generated from apis/managed-transforms/schema.ts
 *
 * Cloudflare-managed HTTP header transforms — automatically add security headers, remove server info, etc.
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Cloudflare-managed HTTP header transforms — automatically add security headers, remove server info, etc.
 */
export class ManagedTransforms extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Fetches a list of all Managed Transforms.
   *
   * @see listManagedTransforms
   */
  async list(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/managed_headers`);
  }

  /**
   * Updates the status of one or more Managed Transforms.
   *
   * @see updateManagedTransforms
   */
  async edit(zoneId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/zones/${zoneId}/managed_headers`);
  }

  /**
   * Disables all Managed Transforms.
   *
   * @see deleteManagedTransforms
   */
  async delete(zoneId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/managed_headers`);
  }
}
