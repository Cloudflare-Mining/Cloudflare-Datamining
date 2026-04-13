/**
 * content-scanning resource
 * @generated from apis/content-scanning/schema.ts
 *
 * Scan uploaded content in HTTP requests for malware and malicious payloads
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Scanned payload logs showing detection results for uploaded content
 */
export class Payloads extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Get a list of existing custom scan expressions for Content Scanning.
   *
   * @see waf-content-scanning-list-custom-scan-expressions
   */
  async list(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/content-upload-scan/payloads`);
  }

  /**
   * Add custom scan expressions for Content Scanning.
   *
   * @see waf-content-scanning-add-custom-scan-expressions
   */
  async create(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/content-upload-scan/payloads`);
  }

  /**
   * Delete a Content Scan Custom Expression.
   *
   * @see waf-content-scanning-delete-custom-scan-expressions
   */
  async delete(zoneId: string, expressionId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/content-upload-scan/payloads/${expressionId}`);
  }
}

/**
 * Content scanning expressions that define which request body fields to inspect
 */
export class Settings extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Retrieve the current status of Content Scanning.
   *
   * @see waf-content-scanning-get-status
   */
  async get(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/content-upload-scan/settings`);
  }
}

/**
 * Scan uploaded content in HTTP requests for malware and malicious payloads
 */
export class ContentScanning extends APIResource {
  readonly payloads: Payloads;
  readonly settings: Settings;

  constructor(client: CloudflareClient) {
    super(client);
    this.payloads = new Payloads(client);
    this.settings = new Settings(client);
  }

  /**
   * Enable Content Scanning.
   *
   * @see waf-content-scanning-enable
   */
  async enable(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/content-upload-scan/enable`);
  }

  /**
   * Disable Content Scanning.
   *
   * @see waf-content-scanning-disable
   */
  async disable(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/content-upload-scan/disable`);
  }

  /**
   * Update the Content Scanning status.
   *
   * @see waf-content-scanning-update-settings
   */
  async create(zoneId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/content-upload-scan/settings`);
  }

  /**
   * Update the Content Scanning status.
   *
   * @see waf-content-scanning-update-settings
   */
  async update(zoneId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/content-upload-scan/settings`);
  }

  /**
   * Retrieve the current status of Content Scanning.
   *
   * @see waf-content-scanning-get-status
   */
  async get(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/content-upload-scan/settings`);
  }
}
