/**
 * keyless-certificates resource
 * @generated from apis/keyless-certificates/schema.ts
 *
 * Use your own SSL certificates without exposing private keys — keys stay on your infrastructure
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Use your own SSL certificates without exposing private keys — keys stay on your infrastructure
 */
export class KeylessCertificates extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * List all Keyless SSL configurations for a given zone.
   *
   * @see keyless-ssl-for-a-zone-list-keyless-ssl-configurations
   */
  async list(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/keyless_certificates`);
  }

  /**
   * Get details for one Keyless SSL configuration.
   *
   * @see keyless-ssl-for-a-zone-get-keyless-ssl-configuration
   */
  async get(keylessCertificateId: string, zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/keyless_certificates/${keylessCertificateId}`);
  }

  /**
   * Creates a Keyless SSL configuration that allows SSL/TLS termination without exposing private keys to Cloudflare. Keys remain on your infrastructure.
   *
   * @see keyless-ssl-for-a-zone-create-keyless-ssl-configuration
   */
  async create(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/keyless_certificates`);
  }

  /**
   * This will update attributes of a Keyless SSL. Consists of one or more of the following: host,name,port.
   *
   * @see keyless-ssl-for-a-zone-edit-keyless-ssl-configuration
   */
  async edit(keylessCertificateId: string, zoneId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/zones/${zoneId}/keyless_certificates/${keylessCertificateId}`);
  }

  /**
   * Removes a Keyless SSL configuration. SSL connections will no longer use the keyless server for cryptographic operations.
   *
   * @see keyless-ssl-for-a-zone-delete-keyless-ssl-configuration
   */
  async delete(keylessCertificateId: string, zoneId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/keyless_certificates/${keylessCertificateId}`);
  }
}
