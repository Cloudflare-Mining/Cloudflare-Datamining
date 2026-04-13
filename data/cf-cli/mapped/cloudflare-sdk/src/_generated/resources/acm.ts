/**
 * acm resource
 * @generated from apis/acm/schema.ts
 *
 * Advanced Certificate Manager — Total TLS auto-issuance and custom origin trust store certificates
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Automatically issue certificates for all hostnames and subdomains in your zone
 */
export class TotalTLS extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Get Total TLS Settings for a Zone.
   *
   * @see total-tls-total-tls-settings-details
   */
  async get(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/acm/total_tls`);
  }

  /**
   * Set Total TLS Settings or disable the feature for a Zone.
   *
   * @see total-tls-enable-or-disable-total-tls
   */
  async update(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/acm/total_tls`);
  }

  /**
   * Set Total TLS Settings or disable the feature for a Zone.
   *
   * @see total-tls-enable-or-disable-total-tls
   */
  async edit(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/acm/total_tls`);
  }
}

/**
 * Upload CA certificates that Cloudflare trusts when connecting to your origin server
 */
export class CustomTrustStore extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Get Custom Origin Trust Store for a Zone.
   *
   * @see custom-origin-trust-store-list-details
   */
  async list(zoneId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/acm/custom_trust_store`, {
      query: params,
    });
  }

  /**
   * Add Custom Origin Trust Store for a Zone.
   *
   * @see custom-origin-trust-store-create
   */
  async create(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/acm/custom_trust_store`);
  }

  /**
   * Retrieves details about a specific certificate in the custom origin trust store, including expiration and subject information.
   *
   * @see custom-origin-trust-store-details
   */
  async get(customOriginTrustStoreId: string, zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/acm/custom_trust_store/${customOriginTrustStoreId}`);
  }

  /**
   * Removes a CA certificate from the custom origin trust store. Origins using certificates signed by this CA will no longer be trusted.
   *
   * @see custom-origin-trust-store-delete
   */
  async delete(customOriginTrustStoreId: string, zoneId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/acm/custom_trust_store/${customOriginTrustStoreId}`);
  }
}

/**
 * Advanced Certificate Manager — Total TLS auto-issuance and custom origin trust store certificates
 */
export class Acm extends APIResource {
  readonly totaltls: TotalTLS;
  readonly customtruststore: CustomTrustStore;

  constructor(client: CloudflareClient) {
    super(client);
    this.totaltls = new TotalTLS(client);
    this.customtruststore = new CustomTrustStore(client);
  }
}
