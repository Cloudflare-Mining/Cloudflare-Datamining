/**
 * ips resource
 * @generated from apis/ips/schema.ts
 *
 * List Cloudflare's IP ranges used for proxying traffic — useful for firewall allowlisting
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * List Cloudflare's IP ranges used for proxying traffic — useful for firewall allowlisting
 */
export class Ips extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Get IPs used on the Cloudflare/JD Cloud network, see https://www.cloudflare.com/ips for Cloudflare IPs or https://developers.cloudflare.com/china-network/reference/infrastructure/ for JD Cloud IPs.
   *
   * @see cloudflare-ips-cloudflare-ip-details
   */
  async list(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/ips`, {
      query: params,
    });
  }
}
