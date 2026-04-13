/**
 * intel resource
 * @generated from apis/intel/schema.ts
 *
 * Threat intelligence lookups — IP reputation, domain info, ASN details, WHOIS, and indicator feeds
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * ASN intelligence — ownership, geolocation, and subnet details for autonomous systems
 */
export class Asn extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Gets an overview of the Autonomous System Number (ASN) and a list of subnets for it.
   *
   * @see asn-intelligence-get-asn-overview
   */
  async get(asn: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/intel/asn/${asn}`);
  }

  /**
   * Get ASN Subnets.
   *
   * @see asn-intelligence-get-asn-subnets
   */
  async subnetsGet(asn: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/intel/asn/${asn}/subnets`);
  }
}

/**
 * Passive DNS data showing historical DNS resolution records for domains
 */
export class DNS extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Gets a list of all the domains that have resolved to a specific IP address.
   *
   * @see passive-dns-by-ip-get-passive-dns-by-ip
   */
  async list(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/intel/dns`, {
      query: params,
    });
  }
}

/**
 * Domain intelligence — risk scores, categories, and associated infrastructure
 */
export class Domains extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Gets security details and statistics about a domain.
   *
   * @see domain-intelligence-get-domain-details
   */
  async get(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/intel/domain`, {
      query: params,
    });
  }

  /**
   * Same as summary.
   *
   * @see domain-intelligence-get-multiple-domain-details
   */
  async bulksGet(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/intel/domain/bulk`, {
      query: params,
    });
  }
}

/**
 * Historical domain registration and categorization changes over time
 */
export class DomainHistory extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Gets historical security threat and content categories currently and previously assigned to a domain.
   *
   * @see domain-history-get-domain-history
   */
  async get(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/intel/domain-history`, {
      query: params,
    });
  }
}

/**
 * IP address intelligence — geolocation, risk assessment, and hosting provider details
 */
export class Ips extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Gets the geolocation, ASN, infrastructure type of the ASN, and any security threat categories of an IP address. **Must provide ip query parameters.** For example, `/intel/ip?ipv4=1.1.1.1` or `/intel/ip?ipv6=2001:db8::1`.
   *
   * @see ip-intelligence-get-ip-overview
   */
  async get(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/intel/ip`, {
      query: params,
    });
  }
}

/**
 * Curated IP lists used for threat detection and policy enforcement
 */
export class IPLists extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Returns a list of available IP list categories (e.g., anonymizer, botnetcc, malware, tor, vpn, open_proxies). This endpoint provides metadata about which IP lists are available in the system.
   *
   * @see ip-list-get-ip-lists
   */
  async get(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/intel/ip-lists`);
  }
}

/**
 * Report and track domain miscategorization corrections
 */
export class Miscategorizations extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Allows you to submit requests to change a domain’s category.
   *
   * @see miscategorization-create-miscategorization
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/intel/miscategorization`);
  }
}

/**
 * WHOIS registration data for domains including registrant, registrar, and nameservers
 */
export class Whois extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Retrieves WHOIS registration data for a domain, including registrant and nameserver information.
   *
   * @see whois-record-get-whois-record
   */
  async get(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/intel/whois`, {
      query: params,
    });
  }
}

/**
 * Threat indicator feeds — subscribe to and manage curated lists of malicious IPs, domains, and URLs
 */
export class IndicatorFeeds extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Retrieves details for all accessible custom threat indicator feeds.
   *
   * @see custom-indicator-feeds-get-indicator-feeds
   */
  async list(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/intel/indicator-feeds`);
  }

  /**
   * Retrieves details for a specific custom threat indicator feed.
   *
   * @see custom-indicator-feeds-get-indicator-feed-metadata
   */
  async get(accountId: string, feedId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/intel/indicator-feeds/${feedId}`);
  }

  /**
   * Creates a new custom threat indicator feed for sharing threat intelligence data.
   *
   * @see custom-indicator-feeds-create-indicator-feeds
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/intel/indicator-feeds`);
  }

  /**
   * Revises details for a specific custom threat indicator feed.
   *
   * @see custom-indicator-feeds-update-indicator-feed-metadata
   */
  async update(accountId: string, feedId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/intel/indicator-feeds/${feedId}`);
  }

  /**
   * Retrieves the raw data entries in a custom threat indicator feed.
   *
   * @see custom-indicator-feeds-get-indicator-feed-data
   */
  async data(accountId: string, feedId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/intel/indicator-feeds/${feedId}/data`);
  }

  /**
   * Revises the raw data entries in a custom threat indicator feed.
   *
   * @see custom-indicator-feeds-update-indicator-feed-data
   */
  async snapshotsUpdate(accountId: string, feedId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/intel/indicator-feeds/${feedId}/snapshot`);
  }

  /**
   * Lists current access permissions for custom threat indicator feeds.
   *
   * @see custom-indicator-feeds-view-permissions
   */
  async permissionsList(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/intel/indicator-feeds/permissions/view`);
  }

  /**
   * Grants access permissions for a custom threat indicator feed to other accounts.
   *
   * @see custom-indicator-feeds-add-permission
   */
  async permissionsCreate(accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/intel/indicator-feeds/permissions/add`);
  }

  /**
   * Revokes access permissions for a custom threat indicator feed.
   *
   * @see custom-indicator-feeds-remove-permission
   */
  async permissionsDelete(accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/intel/indicator-feeds/permissions/remove`);
  }

  /**
   * Downloads the content of a custom threat indicator feed.
   *
   * @see custom-indicator-feeds-download-indicator-feed-data
   */
  async downloadsGet(accountId: string, feedId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/intel/indicator-feeds/${feedId}/download`);
  }
}

/**
 * DNS sinkhole addresses used to redirect malicious traffic for analysis
 */
export class Sinkholes extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Retrieves DNS sinkhole configurations used for redirecting malicious domain traffic to safe destinations.
   *
   * @see sinkhole-config-get-sinkholes
   */
  async list(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/intel/sinkholes`);
  }
}

/**
 * Attack surface intelligence — exposed assets, vulnerabilities, and infrastructure mapping
 */
export class AttackSurfaceReport extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists all available issue types in Security Center, describing categories of security issues.
   *
   * @see get-security-center-issue-types
   */
  async issueTypesGet(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/intel/attack-surface-report/issue-types`);
  }

  /**
   * Lists all Security Center issues for the account, showing active security problems requiring attention.
   *
   * @see get-security-center-issues
   */
  async issuesList(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/intel/attack-surface-report/issues`, {
      query: params,
    });
  }

  /**
   * Retrieves Security Center issue counts aggregated by classification class.
   *
   * @see get-security-center-issue-counts-by-class
   */
  async issuesClass(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/intel/attack-surface-report/issues/class`, {
      query: params,
    });
  }

  /**
   * Retrieves Security Center issue counts aggregated by severity level.
   *
   * @see get-security-center-issue-counts-by-severity
   */
  async issuesSeverity(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/intel/attack-surface-report/issues/severity`, {
      query: params,
    });
  }

  /**
   * Retrieves Security Center issue counts aggregated by issue type.
   *
   * @see get-security-center-issue-counts-by-type
   */
  async issuesType(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/intel/attack-surface-report/issues/type`, {
      query: params,
    });
  }

  /**
   * Deprecated endpoint for archiving Security Center insights. Use the newer archive-security-center-insight endpoint instead.
   *
   * @see archive-security-center-insight-deprecated
   */
  async issuesDismiss(accountId: string, issueId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/intel/attack-surface-report/${issueId}/dismiss`);
  }
}

/**
 * Threat intelligence lookups — IP reputation, domain info, ASN details, WHOIS, and indicator feeds
 */
export class Intel extends APIResource {
  readonly asn: Asn;
  readonly dns: DNS;
  readonly domains: Domains;
  readonly domainhistory: DomainHistory;
  readonly ips: Ips;
  readonly iplists: IPLists;
  readonly miscategorizations: Miscategorizations;
  readonly whois: Whois;
  readonly indicatorfeeds: IndicatorFeeds;
  readonly sinkholes: Sinkholes;
  readonly attacksurfacereport: AttackSurfaceReport;

  constructor(client: CloudflareClient) {
    super(client);
    this.asn = new Asn(client);
    this.dns = new DNS(client);
    this.domains = new Domains(client);
    this.domainhistory = new DomainHistory(client);
    this.ips = new Ips(client);
    this.iplists = new IPLists(client);
    this.miscategorizations = new Miscategorizations(client);
    this.whois = new Whois(client);
    this.indicatorfeeds = new IndicatorFeeds(client);
    this.sinkholes = new Sinkholes(client);
    this.attacksurfacereport = new AttackSurfaceReport(client);
  }
}
