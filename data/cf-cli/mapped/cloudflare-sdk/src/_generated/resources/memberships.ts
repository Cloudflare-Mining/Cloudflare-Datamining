/**
 * memberships resource
 * @generated from apis/memberships/schema.ts
 *
 * List, accept, and manage the Cloudflare accounts your user belongs to
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * List, accept, and manage the Cloudflare accounts your user belongs to
 */
export class Memberships extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * List memberships of accounts the user can access.
   *
   * @see user-s-account-memberships-list-memberships
   */
  async list(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/memberships`, {
      query: params,
    });
  }

  /**
   * Get a specific membership.
   *
   * @see user-s-account-memberships-membership-details
   */
  async get(membershipId: string): Promise<unknown> {
    return this._client.get<unknown>(`/memberships/${membershipId}`);
  }

  /**
   * Accept or reject this account invitation.
   *
   * @see user-s-account-memberships-update-membership
   */
  async update(membershipId: string): Promise<unknown> {
    return this._client.put<unknown>(`/memberships/${membershipId}`);
  }

  /**
   * Remove the associated member from an account.
   *
   * @see user-s-account-memberships-delete-membership
   */
  async delete(membershipId: string): Promise<void> {
    return this._client.delete<void>(`/memberships/${membershipId}`);
  }
}
