/**
 * origin-tls-client-auth resource
 * @generated from apis/origin-tls-client-auth/schema.ts
 *
 * Authenticated Origin Pulls — require Cloudflare to present a client certificate when connecting to your origin
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Zone-level client certificates used for authenticated origin pulls across all hostnames
 */
export class ZoneCertificates extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists all client certificates configured for zone-level authenticated origin pulls.
   *
   * @see zone-level-authenticated-origin-pulls-list-certificates
   */
  async list(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/origin_tls_client_auth`);
  }

  /**
   * Retrieves details for a specific client certificate used in zone-level authenticated origin pulls.
   *
   * @see zone-level-authenticated-origin-pulls-get-certificate-details
   */
  async get(certificateId: string, zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/origin_tls_client_auth/${certificateId}`);
  }

  /**
   * Upload your own certificate you want Cloudflare to use for edge-to-origin communication to override the shared certificate. Please note that it is important to keep only one certificate active. Also, make sure to enable zone-level authenticated origin pulls by making a PUT call to settings endpoint to see the uploaded certificate in use.
   *
   * @see zone-level-authenticated-origin-pulls-upload-certificate
   */
  async create(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/origin_tls_client_auth`);
  }

  /**
   * Removes a client certificate used for zone-level authenticated origin pulls.
   *
   * @see zone-level-authenticated-origin-pulls-delete-certificate
   */
  async delete(certificateId: string, zoneId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/origin_tls_client_auth/${certificateId}`);
  }
}

/**
 * Enable or disable authenticated origin pulls on individual hostnames
 */
export class Hostnames extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Retrieves the client certificate authentication status for a specific hostname, showing whether authenticated origin pulls are enabled.
   *
   * @see per-hostname-authenticated-origin-pull-get-the-hostname-status-for-client-authentication
   */
  async get(hostname: string, zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/origin_tls_client_auth/hostnames/${hostname}`);
  }

  /**
   * Associate a hostname to a certificate and enable, disable or invalidate the association. If disabled, client certificate will not be sent to the hostname even if activated at the zone level. 100 maximum associations on a single certificate are allowed. Note: Use a null value for parameter *enabled* to invalidate the association.
   *
   * @see per-hostname-authenticated-origin-pull-enable-or-disable-a-hostname-for-client-authentication
   */
  async update(zoneId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/origin_tls_client_auth/hostnames`);
  }
}

/**
 * Per-hostname client certificates for granular authenticated origin pull configurations
 */
export class HostnameCertificates extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists all client certificates configured for per-hostname authenticated origin pulls on the zone.
   *
   * @see per-hostname-authenticated-origin-pull-list-certificates
   */
  async list(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/origin_tls_client_auth/hostnames/certificates`);
  }

  /**
   * Get the certificate by ID to be used for client authentication on a hostname.
   *
   * @see per-hostname-authenticated-origin-pull-get-the-hostname-client-certificate
   */
  async get(certificateId: string, zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/origin_tls_client_auth/hostnames/certificates/${certificateId}`);
  }

  /**
   * Upload a certificate to be used for client authentication on a hostname. 10 hostname certificates per zone are allowed.
   *
   * @see per-hostname-authenticated-origin-pull-upload-a-hostname-client-certificate
   */
  async create(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/origin_tls_client_auth/hostnames/certificates`);
  }

  /**
   * Removes a client certificate used for authenticated origin pulls on a specific hostname. Note: Before deleting the certificate, you must first invalidate the hostname for client authentication by sending a PUT request with `enabled` set to null. After invalidating the association, the certificate can be safely deleted.
   *
   * @see per-hostname-authenticated-origin-pull-delete-hostname-client-certificate
   */
  async delete(certificateId: string, zoneId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/origin_tls_client_auth/hostnames/certificates/${certificateId}`);
  }
}

/**
 * Zone-wide toggle to enable or disable authenticated origin pulls
 */
export class Settings extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Get whether zone-level authenticated origin pulls is enabled or not. It is false by default.
   *
   * @see zone-level-authenticated-origin-pulls-get-enablement-setting-for-zone
   */
  async get(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/origin_tls_client_auth/settings`);
  }

  /**
   * Enable or disable zone-level authenticated origin pulls. 'enabled' should be set true either before/after the certificate is uploaded to see the certificate in use.
   *
   * @see zone-level-authenticated-origin-pulls-set-enablement-for-zone
   */
  async update(zoneId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/origin_tls_client_auth/settings`);
  }
}

/**
 * Hostnames (additional) operations
 */
export class HostnamesExtra extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * List certificate ID - hostname associations for the given zone. Shows which hostnames are associated to which certificates for authenticated origin pulls.
   *
   * @see per-hostname-authenticated-origin-pull-list-hostname-associations
   */
  async list(zoneId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/origin_tls_client_auth/hostnames`, {
      query: params,
    });
  }
}

/**
 * Authenticated Origin Pulls — require Cloudflare to present a client certificate when connecting to your origin
 */
export class OriginTLSClientAuth extends APIResource {
  readonly zonecertificates: ZoneCertificates;
  readonly hostnames: Hostnames;
  readonly hostnamecertificates: HostnameCertificates;
  readonly settings: Settings;
  readonly hostnamesextra: HostnamesExtra;

  constructor(client: CloudflareClient) {
    super(client);
    this.zonecertificates = new ZoneCertificates(client);
    this.hostnames = new Hostnames(client);
    this.hostnamecertificates = new HostnameCertificates(client);
    this.settings = new Settings(client);
    this.hostnamesextra = new HostnamesExtra(client);
  }

  /**
   * Lists all client certificates configured for zone-level authenticated origin pulls.
   *
   * @see zone-level-authenticated-origin-pulls-list-certificates
   */
  async list(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/origin_tls_client_auth`);
  }

  /**
   * Retrieves details for a specific client certificate used in zone-level authenticated origin pulls.
   *
   * @see zone-level-authenticated-origin-pulls-get-certificate-details
   */
  async get(certificateId: string, zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/origin_tls_client_auth/${certificateId}`);
  }

  /**
   * Upload your own certificate you want Cloudflare to use for edge-to-origin communication to override the shared certificate. Please note that it is important to keep only one certificate active. Also, make sure to enable zone-level authenticated origin pulls by making a PUT call to settings endpoint to see the uploaded certificate in use.
   *
   * @see zone-level-authenticated-origin-pulls-upload-certificate
   */
  async create(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/origin_tls_client_auth`);
  }

  /**
   * Removes a client certificate used for zone-level authenticated origin pulls.
   *
   * @see zone-level-authenticated-origin-pulls-delete-certificate
   */
  async delete(certificateId: string, zoneId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/origin_tls_client_auth/${certificateId}`);
  }
}
