/**
 * custom-nameservers resource
 * @generated from apis/custom-nameservers/schema.ts
 *
 * Vanity nameservers that use your own domain instead of Cloudflare-assigned NS records
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Vanity nameservers that use your own domain instead of Cloudflare-assigned NS records
 */
export class CustomNameservers extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * List an account's custom nameservers.
   *
   * @see account-level-custom-nameservers-list-account-custom-nameservers
   */
  async get(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/custom_ns`);
  }

  /**
   * Adds a custom nameserver to the account for use as a vanity nameserver on zones.
   *
   * @see account-level-custom-nameservers-add-account-custom-nameserver
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/custom_ns`);
  }

  /**
   * Removes a custom nameserver from the account.
   *
   * @see account-level-custom-nameservers-delete-account-custom-nameserver
   */
  async delete(customNsId: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/custom_ns/${customNsId}`);
  }

  /**
   * Get metadata for account-level custom nameservers on a zone. Deprecated in favor of [Show DNS Settings](https://developers.cloudflare.com/api/operations/dns-settings-for-a-zone-list-dns-settings).
   *
   * @see account-level-custom-nameservers-usage-for-a-zone-get-account-custom-nameserver-related-zone-metadata
   */
  async getExtra(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/custom_ns`);
  }

  /**
   * Set metadata for account-level custom nameservers on a zone. If you would like new zones in the account to use account custom nameservers by default, use PUT /accounts/:identifier to set the account setting use_account_custom_ns_by_default to true. Deprecated in favor of [Update DNS Settings](https://developers.cloudflare.com/api/operations/dns-settings-for-a-zone-update-dns-settings).
   *
   * @see account-level-custom-nameservers-usage-for-a-zone-set-account-custom-nameserver-related-zone-metadata
   */
  async update(zoneId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/custom_ns`);
  }
}
