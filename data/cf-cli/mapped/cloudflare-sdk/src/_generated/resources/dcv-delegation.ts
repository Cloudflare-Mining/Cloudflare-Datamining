/**
 * dcv-delegation resource
 * @generated from apis/dcv-delegation/schema.ts
 *
 * Delegate domain control validation (DCV) to Cloudflare so certificates auto-renew without manual DNS changes
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Delegate domain control validation (DCV) to Cloudflare so certificates auto-renew without manual DNS changes
 */
export class DcvDelegation extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Retrieve the account and zone specific unique identifier used as part of the CNAME target for DCV Delegation.
   *
   * @see dcv-delegation-uuid-get
   */
  async get(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/dcv_delegation/uuid`);
  }
}
