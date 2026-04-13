/**
 * custom-certificates resource
 * @generated from apis/custom-certificates/schema.ts
 *
 * Upload and manage your own SSL/TLS certificates for a zone, with priority ordering
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Reorder the priority of custom SSL certificates to control which one is served first
 */
export class Prioritize extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * If a zone has multiple SSL certificates, you can set the order in which they should be used during a request. The higher priority will break ties across overlapping 'legacy_custom' certificates.
   *
   * @see custom-ssl-for-a-zone-re-prioritize-ssl-certificates
   */
  async update(zoneId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/custom_certificates/prioritize`);
  }
}

/**
 * Upload and manage your own SSL/TLS certificates for a zone, with priority ordering
 */
export class CustomCertificates extends APIResource {
  readonly prioritize: Prioritize;

  constructor(client: CloudflareClient) {
    super(client);
    this.prioritize = new Prioritize(client);
  }

  /**
   * List, search, and filter all of your custom SSL certificates. The higher priority will break ties across overlapping 'legacy_custom' certificates, but 'legacy_custom' certificates will always supercede 'sni_custom' certificates.
   *
   * @see custom-ssl-for-a-zone-list-ssl-configurations
   */
  async list(zoneId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/custom_certificates`, {
      query: params,
    });
  }

  /**
   * Retrieves details for a specific custom SSL certificate, including certificate metadata, bundle method, geographic restrictions, and associated keyless server configuration.
   *
   * @see custom-ssl-for-a-zone-ssl-configuration-details
   */
  async get(customCertificateId: string, zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/custom_certificates/${customCertificateId}`);
  }

  /**
   * Upload a new SSL certificate for a zone.
   *
   * @see custom-ssl-for-a-zone-create-ssl-configuration
   */
  async create(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/custom_certificates`);
  }

  /**
   * Upload a new private key and/or PEM/CRT for the SSL certificate. Note: PATCHing a configuration for sni_custom certificates will result in a new resource id being returned, and the previous one being deleted.
   *
   * @see custom-ssl-for-a-zone-edit-ssl-configuration
   */
  async edit(customCertificateId: string, zoneId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/zones/${zoneId}/custom_certificates/${customCertificateId}`);
  }

  /**
   * Remove a SSL certificate from a zone.
   *
   * @see custom-ssl-for-a-zone-delete-ssl-configuration
   */
  async delete(customCertificateId: string, zoneId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/custom_certificates/${customCertificateId}`);
  }
}
