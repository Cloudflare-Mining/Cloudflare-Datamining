/**
 * leaked-credential-checks resource
 * @generated from apis/leaked-credential-checks/schema.ts
 *
 * Detect compromised credentials in login requests by checking against known breach databases
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Custom detection rules that define which request fields contain usernames and passwords to check
 */
export class Detections extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * List user-defined detection patterns for Leaked Credential Checks.
   *
   * @see waf-product-api-leaked-credentials-list-detections
   */
  async list(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/leaked-credential-checks/detections`);
  }

  /**
   * Create user-defined detection pattern for Leaked Credential Checks.
   *
   * @see waf-product-api-leaked-credentials-create-detection
   */
  async create(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/leaked-credential-checks/detections`);
  }

  /**
   * Get user-defined detection pattern for Leaked Credential Checks.
   *
   * @see waf-product-api-leaked-credentials-get-detection
   */
  async get(zoneId: string, detectionId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/leaked-credential-checks/detections/${detectionId}`);
  }

  /**
   * Update user-defined detection pattern for Leaked Credential Checks.
   *
   * @see waf-product-api-leaked-credentials-update-detection
   */
  async update(zoneId: string, detectionId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/leaked-credential-checks/detections/${detectionId}`);
  }

  /**
   * Remove user-defined detection pattern for Leaked Credential Checks.
   *
   * @see waf-product-api-leaked-credentials-delete-detection
   */
  async delete(zoneId: string, detectionId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/leaked-credential-checks/detections/${detectionId}`);
  }
}

/**
 * Detect compromised credentials in login requests by checking against known breach databases
 */
export class LeakedCredentialChecks extends APIResource {
  readonly detections: Detections;

  constructor(client: CloudflareClient) {
    super(client);
    this.detections = new Detections(client);
  }

  /**
   * Retrieves the current status of Leaked Credential Checks.
   *
   * @see waf-product-api-leaked-credentials-get-status
   */
  async get(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/leaked-credential-checks`);
  }

  /**
   * Updates the current status of Leaked Credential Checks.
   *
   * @see waf-product-api-leaked-credentials-set-status
   */
  async create(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/leaked-credential-checks`);
  }
}
