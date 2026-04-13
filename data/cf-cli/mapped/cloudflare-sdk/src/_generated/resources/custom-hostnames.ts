/**
 * custom-hostnames resource
 * @generated from apis/custom-hostnames/schema.ts
 *
 * Bring custom vanity domains to your SaaS zone with per-hostname SSL and origin mapping
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Default origin server used when a custom hostname does not have its own specific origin
 */
export class FallbackOrigin extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Retrieves the current fallback origin configuration for custom hostnames on a zone. The fallback origin handles traffic when specific custom hostname origins are unavailable.
   *
   * @see custom-hostname-fallback-origin-for-a-zone-get-fallback-origin-for-custom-hostnames
   */
  async get(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/custom_hostnames/fallback_origin`);
  }

  /**
   * Updates the fallback origin configuration for custom hostnames on a zone. Sets the default origin server for custom hostname traffic.
   *
   * @see custom-hostname-fallback-origin-for-a-zone-update-fallback-origin-for-custom-hostnames
   */
  async update(zoneId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/custom_hostnames/fallback_origin`);
  }

  /**
   * Removes the fallback origin configuration for custom hostnames on a zone. Custom hostnames without specific origins will no longer have a fallback.
   *
   * @see custom-hostname-fallback-origin-for-a-zone-delete-fallback-origin-for-custom-hostnames
   */
  async delete(zoneId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/custom_hostnames/fallback_origin`);
  }
}

/**
 * SSL certificates attached to individual custom hostnames
 */
export class CertificatePack extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Replace a single custom certificate within a certificate pack that contains two bundled certificates. The replacement must adhere to the following constraints. You can only replace an RSA certificate with another RSA certificate or an ECDSA certificate with another ECDSA certificate.
   *
   * @see custom-hostname-for-a-zone-edit-custom-certificate-custom-hostname
   */
  async certificatesUpdate(
    customHostnameId: string,
    certificatePackId: string,
    certificateId: string,
    zoneId: string,
  ): Promise<unknown> {
    return this._client.put<unknown>(
      `/zones/${zoneId}/custom_hostnames/${customHostnameId}/certificate_pack/${certificatePackId}/certificates/${certificateId}`,
    );
  }

  /**
   * Delete a single custom certificate from a certificate pack that contains two bundled certificates. Deletion is subject to the following constraints. You cannot delete a certificate if it is the only remaining certificate in the pack. At least one certificate must remain in the pack.
   *
   * @see custom-hostname-for-a-zone-delete_single_certificate_and_key_in_a_custom_hostname
   */
  async certificatesDelete(
    customHostnameId: string,
    certificatePackId: string,
    certificateId: string,
    zoneId: string,
  ): Promise<void> {
    return this._client.delete<void>(
      `/zones/${zoneId}/custom_hostnames/${customHostnameId}/certificate_pack/${certificatePackId}/certificates/${certificateId}`,
    );
  }
}

/**
 * Bring custom vanity domains to your SaaS zone with per-hostname SSL and origin mapping
 */
export class CustomHostnames extends APIResource {
  readonly fallbackorigin: FallbackOrigin;
  readonly certificatepack: CertificatePack;

  constructor(client: CloudflareClient) {
    super(client);
    this.fallbackorigin = new FallbackOrigin(client);
    this.certificatepack = new CertificatePack(client);
  }

  /**
   * List, search, sort, and filter all of your custom hostnames.
   *
   * @see custom-hostname-for-a-zone-list-custom-hostnames
   */
  async list(zoneId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/custom_hostnames`, {
      query: params,
    });
  }

  /**
   * Retrieves detailed information about a specific custom hostname, including SSL certificate status, ownership verification, and origin configuration.
   *
   * @see custom-hostname-for-a-zone-custom-hostname-details
   */
  async get(customHostnameId: string, zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/custom_hostnames/${customHostnameId}`);
  }

  /**
   * Add a new custom hostname and request that an SSL certificate be issued for it. One of three validation methods—http, txt, email—should be used, with 'http' recommended if the CNAME is already in place (or will be soon). Specifying 'email' will send an email to the WHOIS contacts on file for the base domain plus hostmaster, postmaster, webmaster, admin, administrator. If http is used and the domain is not already pointing to the Managed CNAME host, the PATCH method must be used once it is (to complete validation). Enable bundling of certificates using the custom_cert_bundle field. The bundling process requires the following condition One certificate in the bundle must use an RSA, and the other must use an ECDSA.
   *
   * @see custom-hostname-for-a-zone-create-custom-hostname
   */
  async create(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/custom_hostnames`);
  }

  /**
   * Modify SSL configuration for a custom hostname. When sent with SSL config that matches existing config, used to indicate that hostname should pass domain control validation (DCV). Can also be used to change validation type, e.g., from 'http' to 'email'. Bundle an existing certificate with another certificate by using the "custom_cert_bundle" field. The bundling process supports combining certificates as long as the following condition is met. One certificate must use the RSA algorithm, and the other must use the ECDSA algorithm.
   *
   * @see custom-hostname-for-a-zone-edit-custom-hostname
   */
  async edit(customHostnameId: string, zoneId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/zones/${zoneId}/custom_hostnames/${customHostnameId}`);
  }

  /**
   * Permanently deletes a custom hostname and revokes any SSL certificates that were issued for it. This action cannot be undone.
   *
   * @see custom-hostname-for-a-zone-delete-custom-hostname-(-and-any-issued-ssl-certificates)
   */
  async delete(customHostnameId: string, zoneId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/custom_hostnames/${customHostnameId}`);
  }
}
