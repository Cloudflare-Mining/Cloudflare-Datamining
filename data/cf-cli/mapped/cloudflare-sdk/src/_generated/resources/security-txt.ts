/**
 * security-txt resource
 * @generated from apis/security-txt/schema.ts
 *
 * Manage the /.well-known/security.txt file that tells security researchers how to report vulnerabilities
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Manage the /.well-known/security.txt file that tells security researchers how to report vulnerabilities
 */
export class SecurityTxt extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Retrieves the current security.txt file configuration for a zone, used for security vulnerability reporting.
   *
   * @see get-security-txt
   */
  async get(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/security-center/securitytxt`);
  }

  /**
   * Updates the security.txt file configuration for a zone, which provides security researchers with vulnerability reporting information.
   *
   * @see update-security-txt
   */
  async update(zoneId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/security-center/securitytxt`);
  }

  /**
   * Removes the security.txt file configuration for a zone. The /.well-known/security.txt endpoint will no longer be served.
   *
   * @see delete-security-txt
   */
  async delete(zoneId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/security-center/securitytxt`);
  }
}
