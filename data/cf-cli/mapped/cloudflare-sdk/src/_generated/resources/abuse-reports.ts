/**
 * abuse-reports resource
 * @generated from apis/abuse-reports/schema.ts
 *
 * Submit and track abuse reports for phishing, malware, and other policy violations on Cloudflare-proxied sites
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Mitigation actions taken in response to abuse reports
 */
export class Mitigations extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * List mitigations done to remediate the abuse report.
   *
   * @see ListMitigations
   */
  async list(accountId: string, reportId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/abuse-reports/${reportId}/mitigations`, {
      query: params,
    });
  }

  /**
   * Request a review for mitigations on an account.
   *
   * @see RequestReview
   */
  async review(accountId: string, reportId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/abuse-reports/${reportId}/mitigations/appeal`);
  }
}

/**
 * Emails operations
 */
export class Emails extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * List emails sent to the customer for an abuse report. Returns all successful customer emails sent for the specified abuse report. Does not include emails sent to hosts or submitters.
   *
   * @see ListEmails
   */
  async list(accountId: string, reportId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/abuse-reports/${reportId}/emails`, {
      query: params,
    });
  }
}

/**
 * Submit and track abuse reports for phishing, malware, and other policy violations on Cloudflare-proxied sites
 */
export class AbuseReports extends APIResource {
  readonly mitigations: Mitigations;
  readonly emails: Emails;

  constructor(client: CloudflareClient) {
    super(client);
    this.mitigations = new Mitigations(client);
    this.emails = new Emails(client);
  }

  /**
   * Submit the Abuse Report of a particular type
   *
   * @see SubmitAbuseReport
   */
  async create(accountId: string, reportParam: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/abuse-reports/${reportParam}`);
  }

  /**
   * Retrieve the details of an abuse report.
   *
   * @see GetAbuseReport
   */
  async get(accountId: string, reportParam: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/abuse-reports/${reportParam}`);
  }

  /**
   * List the abuse reports for a given account
   *
   * @see ListAbuseReports
   */
  async list(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/abuse-reports`, {
      query: params,
    });
  }
}
