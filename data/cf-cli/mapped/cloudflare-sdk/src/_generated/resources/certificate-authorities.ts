/**
 * certificate-authorities resource
 * @generated from apis/certificate-authorities/schema.ts
 *
 * Map client certificates to specific hostnames for mTLS authentication
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Associate client certificates with hostnames that require mutual TLS verification
 */
export class HostnameAssociations extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * List Hostname Associations
   *
   * @see client-certificate-for-a-zone-list-hostname-associations
   */
  async get(zoneId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/certificate_authorities/hostname_associations`, {
      query: params,
    });
  }

  /**
   * Replace Hostname Associations
   *
   * @see client-certificate-for-a-zone-put-hostname-associations
   */
  async update(zoneId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/certificate_authorities/hostname_associations`);
  }
}

/**
 * Map client certificates to specific hostnames for mTLS authentication
 */
export class CertificateAuthorities extends APIResource {
  readonly hostnameassociations: HostnameAssociations;

  constructor(client: CloudflareClient) {
    super(client);
    this.hostnameassociations = new HostnameAssociations(client);
  }
}
