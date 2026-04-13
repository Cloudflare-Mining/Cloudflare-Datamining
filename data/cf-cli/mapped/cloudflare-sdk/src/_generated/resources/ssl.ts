/**
 * ssl resource
 * @generated from apis/ssl/schema.ts
 *
 * SSL/TLS certificate management — certificate packs, Universal SSL, verification, and TLS mode recommendations
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Analyze a certificate or certificate chain for validity and compatibility issues
 */
export class Analyze extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Returns the set of hostnames, the signature algorithm, and the expiration date of the certificate.
   *
   * @see analyze-certificate-analyze-certificate
   */
  async create(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/ssl/analyze`);
  }
}

/**
 * Advanced Certificate Manager packs — order, renew, and manage dedicated SSL certificates
 */
export class CertificatePacks extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * For a given zone, list all active certificate packs.
   *
   * @see certificate-packs-list-certificate-packs
   */
  async list(zoneId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/ssl/certificate_packs`, {
      query: params,
    });
  }

  /**
   * For a given zone, get a certificate pack.
   *
   * @see certificate-packs-get-certificate-pack
   */
  async get(certificatePackId: string, zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/ssl/certificate_packs/${certificatePackId}`);
  }

  /**
   * For a given zone, order an advanced certificate pack.
   *
   * @see certificate-packs-order-advanced-certificate-manager-certificate-pack
   */
  async create(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/ssl/certificate_packs/order`);
  }

  /**
   * For a given zone, restart validation or add cloudflare branding for an advanced certificate pack. The former is only a validation operation for a Certificate Pack in a validation_timed_out status.
   *
   * @see certificate-packs-restart-validation-for-advanced-certificate-manager-certificate-pack
   */
  async edit(certificatePackId: string, zoneId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/zones/${zoneId}/ssl/certificate_packs/${certificatePackId}`);
  }

  /**
   * For a given zone, delete an advanced certificate pack.
   *
   * @see certificate-packs-delete-advanced-certificate-manager-certificate-pack
   */
  async delete(certificatePackId: string, zoneId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/ssl/certificate_packs/${certificatePackId}`);
  }

  /**
   * For a given zone, list certificate pack quotas.
   *
   * @see certificate-packs-get-certificate-pack-quotas
   */
  async quotaGet(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/ssl/certificate_packs/quota`);
  }
}

/**
 * Get the recommended SSL/TLS encryption mode based on your origin server's certificate configuration
 */
export class Recommendations extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Retrieve the SSL/TLS Recommender's recommendation for a zone.
   *
   * @see ssl/-tls-mode-recommendation-ssl/-tls-recommendation
   */
  async get(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/ssl/recommendation`);
  }
}

/**
 * Universal SSL settings — enable/disable automatic free SSL certificates for the zone
 */
export class Universal extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Get Universal SSL Settings for a Zone.
   *
   * @see universal-ssl-settings-for-a-zone-universal-ssl-settings-details
   */
  async settingsGet(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/ssl/universal/settings`);
  }

  /**
   * Patch Universal SSL Settings for a Zone.
   *
   * @see universal-ssl-settings-for-a-zone-edit-universal-ssl-settings
   */
  async settingsEdit(zoneId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/zones/${zoneId}/ssl/universal/settings`);
  }
}

/**
 * Check or modify the domain control validation (DCV) method for pending certificate orders
 */
export class Verification extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Get SSL Verification Info for a Zone.
   *
   * @see ssl-verification-ssl-verification-details
   */
  async get(zoneId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/ssl/verification`, {
      query: params,
    });
  }

  /**
   * Edit SSL validation method for a certificate pack. A PATCH request will request an immediate validation check on any certificate, and return the updated status. If a validation method is provided, the validation will be immediately attempted using that method.
   *
   * @see ssl-verification-edit-ssl-certificate-pack-validation-method
   */
  async edit(certificatePackId: string, zoneId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/zones/${zoneId}/ssl/verification/${certificatePackId}`);
  }
}

/**
 * SSL/TLS certificate management — certificate packs, Universal SSL, verification, and TLS mode recommendations
 */
export class SSL extends APIResource {
  readonly analyze: Analyze;
  readonly certificatepacks: CertificatePacks;
  readonly recommendations: Recommendations;
  readonly universal: Universal;
  readonly verification: Verification;

  constructor(client: CloudflareClient) {
    super(client);
    this.analyze = new Analyze(client);
    this.certificatepacks = new CertificatePacks(client);
    this.recommendations = new Recommendations(client);
    this.universal = new Universal(client);
    this.verification = new Verification(client);
  }
}
