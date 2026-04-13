/**
 * email-routing resource
 * @generated from apis/email-routing/schema.ts
 *
 * Route incoming emails to destination addresses using custom rules, catch-all handlers, and DNS configuration
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * DNS records required for email routing (MX, SPF, DKIM) — enable, lock, or disable
 */
export class DNS extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Show the DNS records needed to configure your Email Routing zone.
   *
   * @see email-routing-settings-email-routing-dns-settings
   */
  async get(zoneId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/email/routing/dns`, {
      query: params,
    });
  }

  /**
   * Enable you Email Routing zone. Add and lock the necessary MX and SPF records.
   *
   * @see email-routing-settings-enable-email-routing-dns
   */
  async create(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/email/routing/dns`);
  }

  /**
   * Unlock MX Records previously locked by Email Routing.
   *
   * @see email-routing-settings-unlock-email-routing-dns
   */
  async edit(zoneId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/zones/${zoneId}/email/routing/dns`);
  }

  /**
   * Disable your Email Routing zone. Also removes additional MX records previously required for Email Routing to work.
   *
   * @see email-routing-settings-disable-email-routing-dns
   */
  async delete(zoneId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/email/routing/dns`);
  }
}

/**
 * Routing rules that match incoming email addresses and forward to destination mailboxes
 */
export class Rules extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists existing routing rules.
   *
   * @see email-routing-routing-rules-list-routing-rules
   */
  async list(zoneId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/email/routing/rules`, {
      query: params,
    });
  }

  /**
   * Get information for a specific routing rule already created.
   *
   * @see email-routing-routing-rules-get-routing-rule
   */
  async get(ruleIdentifier: string, zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/email/routing/rules/${ruleIdentifier}`);
  }

  /**
   * Rules consist of a set of criteria for matching emails (such as an email being sent to a specific custom email address) plus a set of actions to take on the email (like forwarding it to a specific destination address).
   *
   * @see email-routing-routing-rules-create-routing-rule
   */
  async create(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/email/routing/rules`);
  }

  /**
   * Update actions and matches, or enable/disable specific routing rules.
   *
   * @see email-routing-routing-rules-update-routing-rule
   */
  async update(ruleIdentifier: string, zoneId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/email/routing/rules/${ruleIdentifier}`);
  }

  /**
   * Delete a specific routing rule.
   *
   * @see email-routing-routing-rules-delete-routing-rule
   */
  async delete(ruleIdentifier: string, zoneId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/email/routing/rules/${ruleIdentifier}`);
  }

  /**
   * Get information on the default catch-all routing rule.
   *
   * @see email-routing-routing-rules-get-catch-all-rule
   */
  async catchAllsGet(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/email/routing/rules/catch_all`);
  }

  /**
   * Enable or disable catch-all routing rule, or change action to forward to specific destination address.
   *
   * @see email-routing-routing-rules-update-catch-all-rule
   */
  async catchAllsUpdate(zoneId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/email/routing/rules/catch_all`);
  }
}

/**
 * Verified destination email addresses that can receive forwarded mail
 */
export class Addresses extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists existing destination addresses.
   *
   * @see email-routing-destination-addresses-list-destination-addresses
   */
  async list(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/email/routing/addresses`, {
      query: params,
    });
  }

  /**
   * Gets information for a specific destination email already created.
   *
   * @see email-routing-destination-addresses-get-a-destination-address
   */
  async get(destinationAddressIdentifier: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/email/routing/addresses/${destinationAddressIdentifier}`);
  }

  /**
   * Create a destination address to forward your emails to. Destination addresses need to be verified before they can be used.
   *
   * @see email-routing-destination-addresses-create-a-destination-address
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/email/routing/addresses`);
  }

  /**
   * Deletes a specific destination address.
   *
   * @see email-routing-destination-addresses-delete-destination-address
   */
  async delete(destinationAddressIdentifier: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/email/routing/addresses/${destinationAddressIdentifier}`);
  }
}

/**
 * Sending operations
 */
export class Sending extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Send an email
   *
   * @see email-sending-account-send-builder
   */
  async sendCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/email/sending/send`);
  }

  /**
   * Send a raw MIME email
   *
   * @see email-sending-account-send-raw-message
   */
  async sendRawCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/email/sending/send_raw`);
  }

  /**
   * Lists all sending-enabled subdomains for the zone.
   *
   * @see email-sending-subdomains-list-sending-subdomains
   */
  async subdomainsList(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/email/sending/subdomains`);
  }

  /**
   * Creates a new sending subdomain or re-enables sending on an existing subdomain that had it disabled. If zone-level Email Sending has not been enabled yet, the zone flag is automatically set when the entitlement is present.
   *
   * @see email-sending-subdomains-create-sending-subdomain
   */
  async subdomainsCreate(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/email/sending/subdomains`);
  }

  /**
   * Returns the DNS records that would be created for a sending subdomain, flags which records are missing, and reports any conflicts with existing DNS records. This is a read-only dry-run — no records are created or modified. Use before or after creating a subdomain to check DNS status.
   *
   * @see email-sending-subdomains-preview-sending-subdomain
   */
  async subdomainsPreviewCreate(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/email/sending/subdomains/preview`);
  }

  /**
   * Disables sending on a subdomain and removes its DNS records. If routing is still active on the subdomain, only sending is disabled.
   *
   * @see email-sending-subdomains-delete-sending-subdomain
   */
  async subdomainsDelete(subdomainId: string, zoneId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/email/sending/subdomains/${subdomainId}`);
  }

  /**
   * Gets information for a specific sending subdomain.
   *
   * @see email-sending-subdomains-get-sending-subdomain
   */
  async subdomainsGet(subdomainId: string, zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/email/sending/subdomains/${subdomainId}`);
  }

  /**
   * Returns the expected DNS records for a sending subdomain.
   *
   * @see email-sending-subdomains-get-sending-subdomain-dns
   */
  async subdomainsDnsGet(subdomainId: string, zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/email/sending/subdomains/${subdomainId}/dns`);
  }
}

/**
 * Route incoming emails to destination addresses using custom rules, catch-all handlers, and DNS configuration
 */
export class EmailRouting extends APIResource {
  readonly dns: DNS;
  readonly rules: Rules;
  readonly addresses: Addresses;
  readonly sending: Sending;

  constructor(client: CloudflareClient) {
    super(client);
    this.dns = new DNS(client);
    this.rules = new Rules(client);
    this.addresses = new Addresses(client);
    this.sending = new Sending(client);
  }

  /**
   * Get information about the settings for your Email Routing zone.
   *
   * @see email-routing-settings-get-email-routing-settings
   */
  async get(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/email/routing`);
  }

  /**
   * Disable your Email Routing zone. Also removes additional MX records previously required for Email Routing to work.
   *
   * @see email-routing-settings-disable-email-routing
   */
  async disable(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/email/routing/disable`);
  }

  /**
   * Enable you Email Routing zone. Add and lock the necessary MX and SPF records.
   *
   * @see email-routing-settings-enable-email-routing
   */
  async enable(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/email/routing/enable`);
  }
}
