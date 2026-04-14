/**
 * mtls-certificates resource
 * @generated from apis/mtls-certificates/schema.ts
 *
 * Upload and manage mTLS certificates used by API Shield, Workers, and Gateway for client authentication
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * View which Cloudflare services and hostnames are using a specific mTLS certificate
 */
export class Associations extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists all active associations between the certificate and Cloudflare services.
   *
   * @see m-tls-certificate-management-list-m-tls-certificate-associations
   */
  async get(mtlsCertificateId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/mtls_certificates/${mtlsCertificateId}/associations`);
  }
}

/**
 * Upload and manage mTLS certificates used by API Shield, Workers, and Gateway for client authentication
 */
export class MtlsCertificates extends APIResource {
  readonly associations: Associations;

  constructor(client: CloudflareClient) {
    super(client);
    this.associations = new Associations(client);
  }

  /**
   * Lists all mTLS certificates uploaded to your account, such as Bring Your Own CA (BYO-CA) for mTLS. To list certificates issued by the Cloudflare managed CA, use the [List Client Certificates endpoint](/api/resources/client_certificates/methods/list/).
   *
   * @see m-tls-certificate-management-list-m-tls-certificates
   */
  async list(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/mtls_certificates`, {
      query: params,
    });
  }

  /**
   * Fetches a single mTLS certificate uploaded to your account. To get a certificate issued by the Cloudflare managed CA, use the [Client Certificate Details endpoint](/api/resources/client_certificates/methods/get/).
   *
   * @see m-tls-certificate-management-get-m-tls-certificate
   */
  async get(mtlsCertificateId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/mtls_certificates/${mtlsCertificateId}`);
  }

  /**
   * Upload a certificate that you want to use with mTLS-enabled Cloudflare services, such as Bring Your Own CA (BYO-CA) for mTLS. To create certificates issued by the Cloudflare managed CA, use the [Create Client Certificate endpoint](/api/resources/client_certificates/methods/create/).
   *
   * @see m-tls-certificate-management-upload-m-tls-certificate
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/mtls_certificates`);
  }

  /**
   * Deletes the mTLS certificate unless the certificate is in use by one or more Cloudflare services.
   *
   * @see m-tls-certificate-management-delete-m-tls-certificate
   */
  async delete(mtlsCertificateId: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/mtls_certificates/${mtlsCertificateId}`);
  }
}
