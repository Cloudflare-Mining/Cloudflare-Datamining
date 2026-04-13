/**
 * audit-logs resource
 * @generated from apis/audit-logs/schema.ts
 *
 * Immutable audit trail of actions taken by account members — who changed what and when
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Immutable audit trail of actions taken by account members — who changed what and when
 */
export class AuditLogs extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Gets a list of audit logs for an account. Can be filtered by who made the change, on which zone, and the timeframe of the change.
   *
   * @see audit-logs-get-account-audit-logs
   */
  async list(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/audit_logs`, {
      query: params,
    });
  }
}
