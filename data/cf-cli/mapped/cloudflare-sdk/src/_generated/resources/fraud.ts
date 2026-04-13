/**
 * fraud resource
 * @generated from apis/fraud/schema.ts
 *
 * Fraud detection for login and signup flows — identify credential stuffing, account takeover, and fake accounts
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Fraud detection for login and signup flows — identify credential stuffing, account takeover, and fake accounts
 */
export class Fraud extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Retrieve Fraud Detection settings for a zone.
   *
   * @see fraud-detection-zone-get-settings
   */
  async get(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/fraud_detection/settings`);
  }

  /**
   * Update Fraud Detection settings for a zone. Notes on `username_expressions` behavior: - If omitted or set to null, expressions are not modified. - If provided as an empty array `[]`, all expressions will be cleared.
   *
   * @see fraud-detection-zone-update-settings
   */
  async update(zoneId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/fraud_detection/settings`);
  }
}
