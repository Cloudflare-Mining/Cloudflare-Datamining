/**
 * origin-ca-certificates resource
 * @generated from apis/origin-ca-certificates/schema.ts
 *
 * Free Cloudflare-signed certificates installed on your origin server for Full (strict) SSL mode
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Free Cloudflare-signed certificates installed on your origin server for Full (strict) SSL mode
 */
export class OriginCaCertificates extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * List all existing Origin CA certificates for a given zone. You can use an Origin CA Key as your User Service Key or an API token when calling this endpoint ([see above](#requests)).
   *
   * @see origin-ca-list-certificates
   */
  async list(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/certificates`, {
      query: params,
    });
  }

  /**
   * Get an existing Origin CA certificate by its serial number. You can use an Origin CA Key as your User Service Key or an API token when calling this endpoint ([see above](#requests)).
   *
   * @see origin-ca-get-certificate
   */
  async get(certificateId: string): Promise<unknown> {
    return this._client.get<unknown>(`/certificates/${certificateId}`);
  }

  /**
   * Create an Origin CA certificate. You can use an Origin CA Key as your User Service Key or an API token when calling this endpoint ([see above](#requests)).
   *
   * @see origin-ca-create-certificate
   */
  async create(): Promise<unknown> {
    return this._client.post<unknown>(`/certificates`);
  }

  /**
   * Revoke an existing Origin CA certificate by its serial number. You can use an Origin CA Key as your User Service Key or an API token when calling this endpoint ([see above](#requests)).
   *
   * @see origin-ca-revoke-certificate
   */
  async delete(certificateId: string): Promise<void> {
    return this._client.delete<void>(`/certificates/${certificateId}`);
  }
}
