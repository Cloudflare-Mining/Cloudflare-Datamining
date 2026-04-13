/**
 * client-certificates resource
 * @generated from apis/client-certificates/schema.ts
 *
 * Issue and manage client certificates for mutual TLS (mTLS) authentication on your zone
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Issue and manage client certificates for mutual TLS (mTLS) authentication on your zone
 */
export class ClientCertificates extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * List all of your Zone's API Shield mTLS Client Certificates by Status and/or using Pagination
   *
   * @see client-certificate-for-a-zone-list-client-certificates
   */
  async list(zoneId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/client_certificates`, {
      query: params,
    });
  }

  /**
   * Get Details for a single mTLS API Shield Client Certificate
   *
   * @see client-certificate-for-a-zone-client-certificate-details
   */
  async get(zoneId: string, clientCertificateId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/client_certificates/${clientCertificateId}`);
  }

  /**
   * Create a new API Shield mTLS Client Certificate
   *
   * @see client-certificate-for-a-zone-create-client-certificate
   */
  async create(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/client_certificates`);
  }

  /**
   * If a API Shield mTLS Client Certificate is in a pending_revocation state, you may reactivate it with this endpoint.
   *
   * @see client-certificate-for-a-zone-edit-client-certificate
   */
  async edit(zoneId: string, clientCertificateId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/zones/${zoneId}/client_certificates/${clientCertificateId}`);
  }

  /**
   * Set a API Shield mTLS Client Certificate to pending_revocation status for processing to revoked status.
   *
   * @see client-certificate-for-a-zone-delete-client-certificate
   */
  async delete(zoneId: string, clientCertificateId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/client_certificates/${clientCertificateId}`);
  }
}
