/**
 * email-security resource
 * @generated from apis/email-security/schema.ts
 *
 * Cloud email security (Area 1) — investigate threats, manage allow/block policies, and detect phishing
 */
import type { components } from 'cloudflare-openapi';
import { APIResource, CloudflareClient } from '../../client.js';

// Type aliases from OpenAPI components
export type EmailSecurityInvestigatemessage = components['schemas']['email-security_InvestigateMessage'];
export type EmailSecurityMoveresponseitem = components['schemas']['email-security_MoveResponseItem'];
export type EmailSecurityReleaseresponse = components['schemas']['email-security_ReleaseResponse'];
export type EmailSecurityPhishguardreport = components['schemas']['email-security_PhishGuardReport'];
export type EmailSecurityAllowpolicy = components['schemas']['email-security_AllowPolicy'];
export type EmailSecurityBlockedsender = components['schemas']['email-security_BlockedSender'];
export type EmailSecurityDomain = components['schemas']['email-security_Domain'];
export type EmailSecurityDisplayname = components['schemas']['email-security_DisplayName'];
export type EmailSecurityTrusteddomain = components['schemas']['email-security_TrustedDomain'];
export type EmailSecuritySubmission = components['schemas']['email-security_Submission'];

/**
 * Search and investigate email messages — view detections, traces, raw content, and take remediation actions
 */
export class Investigate extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Returns information for each email that matches the search parameter(s). If the search takes too long, the endpoint returns 202 with a Location header pointing to a polling endpoint where results can be retrieved once ready.
   *
   * @see email_security_investigate
   */
  async list(
    accountId: string,
    params?: Record<string, unknown>,
  ): Promise<components['schemas']['email-security_InvestigateMessage'][]> {
    return this._client.get<components['schemas']['email-security_InvestigateMessage'][]>(
      `/accounts/${accountId}/email-security/investigate`,
      {
        query: params,
      },
    );
  }

  /**
   * Retrieves detailed information about a specific email message, including headers, metadata, and security scan results.
   *
   * @see email_security_get_message
   */
  async get(accountId: string, postfixId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/email-security/investigate/${postfixId}`);
  }

  /**
   * Returns detection details such as threat categories and sender information for non-benign messages.
   *
   * @see email_security_get_message_detections
   */
  async detectionsGet(accountId: string, postfixId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/email-security/investigate/${postfixId}/detections`);
  }

  /**
   * Returns a preview of the message body as a base64 encoded PNG image for non-benign messages.
   *
   * @see email_security_get_message_preview
   */
  async previewGet(accountId: string, postfixId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/email-security/investigate/${postfixId}/preview`);
  }

  /**
   * Generates a preview of an email message for safe viewing without executing any embedded content.
   *
   * @see email_security_post_preview
   */
  async previewCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/email-security/investigate/preview`);
  }

  /**
   * Returns the raw eml of any non-benign message.
   *
   * @see email_security_get_message_raw
   */
  async rawGet(accountId: string, postfixId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/email-security/investigate/${postfixId}/raw`);
  }

  /**
   * Gets the delivery trace for an email message, showing its path through email security processing.
   *
   * @see email_security_get_message_trace
   */
  async traceGet(accountId: string, postfixId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/email-security/investigate/${postfixId}/trace`);
  }

  /**
   * Moves a single email message to a different folder or changes its quarantine status.
   *
   * @see email_security_post_message_move
   */
  async moveCreate(
    accountId: string,
    postfixId: string,
  ): Promise<components['schemas']['email-security_MoveResponseItem'][]> {
    return this._client.post<components['schemas']['email-security_MoveResponseItem'][]>(
      `/accounts/${accountId}/email-security/investigate/${postfixId}/move`,
    );
  }

  /**
   * Maximum batch size: 1000 messages per request
   *
   * @see email_security_post_bulk_message_move
   */
  async moveBulk(accountId: string): Promise<components['schemas']['email-security_MoveResponseItem'][]> {
    return this._client.post<components['schemas']['email-security_MoveResponseItem'][]>(
      `/accounts/${accountId}/email-security/investigate/move`,
    );
  }

  /**
   * Submits an email message for reclassification, updating its threat assessment based on new analysis.
   *
   * @see email_security_post_reclassify
   */
  async reclassifyCreate(accountId: string, postfixId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/email-security/investigate/${postfixId}/reclassify`);
  }

  /**
   * Releases a quarantined email message, allowing it to be delivered to the recipient.
   *
   * @see email_security_post_release
   */
  async releaseBulk(accountId: string): Promise<components['schemas']['email-security_ReleaseResponse'][]> {
    return this._client.post<components['schemas']['email-security_ReleaseResponse'][]>(
      `/accounts/${accountId}/email-security/investigate/release`,
    );
  }
}

/**
 * PhishGuard user-reported phishing submissions and analysis reports
 */
export class Phishguard extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Retrieves `PhishGuard` reports showing phishing attempts and suspicious email patterns detected.
   *
   * @see email_security_get_phishguard_reports
   */
  async reportsList(
    accountId: string,
    params?: Record<string, unknown>,
  ): Promise<components['schemas']['email-security_PhishGuardReport'][]> {
    return this._client.get<components['schemas']['email-security_PhishGuardReport'][]>(
      `/accounts/${accountId}/email-security/phishguard/reports`,
      {
        query: params,
      },
    );
  }
}

/**
 * Email security policies — allow lists, blocked senders, trusted domains, and impersonation registry
 */
export class Settings extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists, searches, and sorts an account’s email allow policies.
   *
   * @see email_security_list_allow_policies
   */
  async allowPoliciesList(
    accountId: string,
    params?: Record<string, unknown>,
  ): Promise<components['schemas']['email-security_AllowPolicy'][]> {
    return this._client.get<components['schemas']['email-security_AllowPolicy'][]>(
      `/accounts/${accountId}/email-security/settings/allow_policies`,
      {
        query: params,
      },
    );
  }

  /**
   * Retrieves details for a specific email allow policy, including its matching criteria and scope.
   *
   * @see email_security_get_allow_policy
   */
  async allowPoliciesGet(accountId: string, policyId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/email-security/settings/allow_policies/${policyId}`);
  }

  /**
   * Creates a new email allow policy that permits specific senders, domains, or patterns to bypass security scanning.
   *
   * @see email_security_create_allow_policy
   */
  async allowPoliciesCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/email-security/settings/allow_policies`);
  }

  /**
   * Updates an existing email allow policy, modifying its matching criteria or scope.
   *
   * @see email_security_update_allow_policy
   */
  async allowPoliciesEdit(accountId: string, policyId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/email-security/settings/allow_policies/${policyId}`);
  }

  /**
   * Removes an email allow policy. Previously allowed senders will be subject to normal security scanning.
   *
   * @see email_security_delete_allow_policy
   */
  async allowPoliciesDelete(accountId: string, policyId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/email-security/settings/allow_policies/${policyId}`);
  }

  /**
   * Lists all blocked sender entries with their patterns and block reasons.
   *
   * @see email_security_list_blocked_senders
   */
  async blockSendersList(
    accountId: string,
    params?: Record<string, unknown>,
  ): Promise<components['schemas']['email-security_BlockedSender'][]> {
    return this._client.get<components['schemas']['email-security_BlockedSender'][]>(
      `/accounts/${accountId}/email-security/settings/block_senders`,
      {
        query: params,
      },
    );
  }

  /**
   * Gets information about a specific blocked sender entry, including the pattern and block reason.
   *
   * @see email_security_get_blocked_sender
   */
  async blockSendersGet(accountId: string, patternId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/email-security/settings/block_senders/${patternId}`);
  }

  /**
   * Adds a sender pattern to the email block list, preventing messages from matching senders from being delivered.
   *
   * @see email_security_create_blocked_sender
   */
  async blockSendersCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/email-security/settings/block_senders`);
  }

  /**
   * Modifies a blocked sender entry, updating its pattern or block reason.
   *
   * @see email_security_update_blocked_sender
   */
  async blockSendersEdit(accountId: string, patternId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/email-security/settings/block_senders/${patternId}`);
  }

  /**
   * Removes a sender from the email block list, allowing their messages to be delivered normally.
   *
   * @see email_security_delete_blocked_sender
   */
  async blockSendersDelete(accountId: string, patternId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/email-security/settings/block_senders/${patternId}`);
  }

  /**
   * Lists, searches, and sorts an account’s email domains.
   *
   * @see email_security_list_domains
   */
  async domainsList(
    accountId: string,
    params?: Record<string, unknown>,
  ): Promise<components['schemas']['email-security_Domain'][]> {
    return this._client.get<components['schemas']['email-security_Domain'][]>(
      `/accounts/${accountId}/email-security/settings/domains`,
      {
        query: params,
      },
    );
  }

  /**
   * Gets configuration details for a specific domain in email security.
   *
   * @see email_security_get_domain
   */
  async domainsGet(accountId: string, domainId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/email-security/settings/domains/${domainId}`);
  }

  /**
   * Updates configuration for a domain in email security.
   *
   * @see email_security_update_domain
   */
  async domainsEdit(accountId: string, domainId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/email-security/settings/domains/${domainId}`);
  }

  /**
   * Removes a domain from the email security configuration.
   *
   * @see email_security_delete_domain
   */
  async domainsDelete(accountId: string, domainId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/email-security/settings/domains/${domainId}`);
  }

  /**
   * Bulk removes multiple domains from email security configuration in a single request.
   *
   * @see email_security_delete_domains
   */
  async domainsBulkDelete(accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/email-security/settings/domains`);
  }

  /**
   * Lists, searches, and sorts entries in the impersonation registry.
   *
   * @see email_security_list_display_names
   */
  async impersonationRegistryList(
    accountId: string,
    params?: Record<string, unknown>,
  ): Promise<components['schemas']['email-security_DisplayName'][]> {
    return this._client.get<components['schemas']['email-security_DisplayName'][]>(
      `/accounts/${accountId}/email-security/settings/impersonation_registry`,
      {
        query: params,
      },
    );
  }

  /**
   * Retrieves a display name entry used for impersonation protection.
   *
   * @see email_security_get_display_name
   */
  async impersonationRegistryGet(accountId: string, displayNameId: string): Promise<unknown> {
    return this._client.get<unknown>(
      `/accounts/${accountId}/email-security/settings/impersonation_registry/${displayNameId}`,
    );
  }

  /**
   * Creates a display name entry for email security impersonation protection.
   *
   * @see email_security_create_display_name
   */
  async impersonationRegistryCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/email-security/settings/impersonation_registry`);
  }

  /**
   * Updates a display name entry used for impersonation protection.
   *
   * @see email_security_update_display_name
   */
  async impersonationRegistryEdit(accountId: string, displayNameId: string): Promise<unknown> {
    return this._client.patch<unknown>(
      `/accounts/${accountId}/email-security/settings/impersonation_registry/${displayNameId}`,
    );
  }

  /**
   * Removes a display name from impersonation protection monitoring.
   *
   * @see email_security_delete_display_name
   */
  async impersonationRegistryDelete(accountId: string, displayNameId: string): Promise<void> {
    return this._client.delete<void>(
      `/accounts/${accountId}/email-security/settings/impersonation_registry/${displayNameId}`,
    );
  }

  /**
   * Lists, searches, and sorts an account’s trusted email domains.
   *
   * @see email_security_list_trusted_domains
   */
  async trustedDomainsList(
    accountId: string,
    params?: Record<string, unknown>,
  ): Promise<components['schemas']['email-security_TrustedDomain'][]> {
    return this._client.get<components['schemas']['email-security_TrustedDomain'][]>(
      `/accounts/${accountId}/email-security/settings/trusted_domains`,
      {
        query: params,
      },
    );
  }

  /**
   * Gets information about a specific trusted domain entry.
   *
   * @see email_security_get_trusted_domain
   */
  async trustedDomainsGet(accountId: string, trustedDomainId: string): Promise<unknown> {
    return this._client.get<unknown>(
      `/accounts/${accountId}/email-security/settings/trusted_domains/${trustedDomainId}`,
    );
  }

  /**
   * Adds a domain to the trusted domains list for email security, reducing false positive detections.
   *
   * @see email_security_create_trusted_domain
   */
  async trustedDomainsCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/email-security/settings/trusted_domains`);
  }

  /**
   * Modifies a trusted domain entry's configuration.
   *
   * @see email_security_update_trusted_domain
   */
  async trustedDomainsEdit(accountId: string, trustedDomainId: string): Promise<unknown> {
    return this._client.patch<unknown>(
      `/accounts/${accountId}/email-security/settings/trusted_domains/${trustedDomainId}`,
    );
  }

  /**
   * Removes a domain from the trusted domains list, subjecting it to normal security scanning.
   *
   * @see email_security_delete_trusted_domain
   */
  async trustedDomainsDelete(accountId: string, trustedDomainId: string): Promise<void> {
    return this._client.delete<void>(
      `/accounts/${accountId}/email-security/settings/trusted_domains/${trustedDomainId}`,
    );
  }
}

/**
 * User and admin email submissions for classification review
 */
export class Submissions extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * This endpoint returns information for submissions to made to reclassify emails.
   *
   * @see email_security_submissions
   */
  async list(
    accountId: string,
    params?: Record<string, unknown>,
  ): Promise<components['schemas']['email-security_Submission'][]> {
    return this._client.get<components['schemas']['email-security_Submission'][]>(
      `/accounts/${accountId}/email-security/submissions`,
      {
        query: params,
      },
    );
  }
}

/**
 * Settings (additional) operations
 */
export class SettingsExtra extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Send a Batch of Allow Policies API calls to be executed together.
   *
   * @see email_security_batch_allow_policies
   */
  async allowPoliciesBatchCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/email-security/settings/allow_policies/batch`);
  }

  /**
   * Send a Batch of Block Senders API calls to be executed together.
   *
   * @see email_security_batch_blocked_senders
   */
  async blockSendersBatchCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/email-security/settings/block_senders/batch`);
  }

  /**
   * Send a Batch of `sending_domain_restrictions` API calls to be executed together.
   *
   * @see email_security_batch_sending_domain_restrictions
   */
  async sendingDomainRestrictionsBatchCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(
      `/accounts/${accountId}/email-security/settings/sending_domain_restrictions/batch`,
    );
  }

  /**
   * Send a Batch of Trusted Domains API calls to be executed together.
   *
   * @see email_security_batch_trusted_domains
   */
  async trustedDomainsBatchCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/email-security/settings/trusted_domains/batch`);
  }
}

/**
 * Cloud email security (Area 1) — investigate threats, manage allow/block policies, and detect phishing
 */
export class EmailSecurity extends APIResource {
  readonly investigate: Investigate;
  readonly phishguard: Phishguard;
  readonly settings: Settings;
  readonly submissions: Submissions;
  readonly settingsextra: SettingsExtra;

  constructor(client: CloudflareClient) {
    super(client);
    this.investigate = new Investigate(client);
    this.phishguard = new Phishguard(client);
    this.settings = new Settings(client);
    this.submissions = new Submissions(client);
    this.settingsextra = new SettingsExtra(client);
  }
}
