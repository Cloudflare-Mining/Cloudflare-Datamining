/**
 * dns resource
 * @generated from apis/dns/schema.ts
 *
 * DNS management API for zones, records, DNSSEC, analytics, and zone transfers
 */
import type { components } from 'cloudflare-openapi';
import { APIResource, CloudflareClient } from '../../client.js';

// Type aliases from OpenAPI components
export type DNSAnalyticsReport = components['schemas']['dns-analytics_report'];
export type DNSAnalyticsReportBytime = components['schemas']['dns-analytics_report_bytime'];

/**
 * Manage DNSSEC settings for a zone
 */
export class Dnssec extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Details about DNSSEC status and configuration.
   *
   * @see dnssec-dnssec-details
   */
  async get(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/dnssec`);
  }

  /**
   * Enable or disable DNSSEC.
   *
   * @see dnssec-edit-dnssec-status
   */
  async edit(zoneId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/zones/${zoneId}/dnssec`);
  }

  /**
   * Delete DNSSEC.
   *
   * @see dnssec-delete-dnssec-records
   */
  async delete(zoneId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/dnssec`);
  }

  /**
   * List the Zone Signing Keys (ZSKs) that DNSSEC uses for the zone.
   *
   * @see dnssec-list-dnssec-zsks
   */
  async listZsks(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/dnssec/zsk`);
  }
}

/**
 * Manage DNS records for a zone
 */
export class Records extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * List, search, sort, and filter a zones' DNS records.
   *
   * @see dns-records-for-a-zone-list-dns-records
   */
  async list(zoneId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/dns_records`, {
      query: params,
    });
  }

  /**
   * Retrieves details for a specific DNS record in the zone.
   *
   * @see dns-records-for-a-zone-dns-record-details
   */
  async get(dnsRecordId: string, zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/dns_records/${dnsRecordId}`);
  }

  /**
   * Create a new DNS record for a zone. Notes: - A/AAAA records cannot exist on the same name as CNAME records. - NS records cannot exist on the same name as any other record type. - Domain names are always represented in Punycode, even if Unicode characters were used when creating the record.
   *
   * @see dns-records-for-a-zone-create-dns-record
   */
  async create(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/dns_records`);
  }

  /**
   * Overwrite an existing DNS record. Notes: - A/AAAA records cannot exist on the same name as CNAME records. - NS records cannot exist on the same name as any other record type. - Domain names are always represented in Punycode, even if Unicode characters were used when creating the record.
   *
   * @see dns-records-for-a-zone-update-dns-record
   */
  async update(dnsRecordId: string, zoneId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/dns_records/${dnsRecordId}`);
  }

  /**
   * Permanently removes a DNS record from the zone.
   *
   * @see dns-records-for-a-zone-delete-dns-record
   */
  async delete(dnsRecordId: string, zoneId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/dns_records/${dnsRecordId}`);
  }

  /**
   * You can export your [BIND config](https://en.wikipedia.org/wiki/Zone_file "Zone file") through this endpoint. See [the documentation](https://developers.cloudflare.com/dns/manage-dns-records/how-to/import-and-export/ "Import and export records") for more information.
   *
   * @see dns-records-for-a-zone-export-dns-records
   */
  async export(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/dns_records/export`);
  }

  /**
   * You can upload your [BIND config](https://en.wikipedia.org/wiki/Zone_file "Zone file") through this endpoint. It assumes that cURL is called from a location with bind_config.txt (valid BIND config) present. See [the documentation](https://developers.cloudflare.com/dns/manage-dns-records/how-to/import-and-export/ "Import and export records") for more information.
   *
   * @see dns-records-for-a-zone-import-dns-records
   */
  async import(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/dns_records/import`);
  }

  /**
   * Scan for common DNS records on your domain and automatically add them to your zone. Useful if you haven't updated your nameservers yet.
   *
   * @see dns-records-for-a-zone-scan-dns-records
   */
  async scan(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/dns_records/scan`);
  }

  /**
   * Send a Batch of DNS Record API calls to be executed together. Notes: - Although Cloudflare will execute the batched operations in a single database transaction, Cloudflare's distributed KV store must treat each record change as a single key-value pair. This means that the propagation of changes is not atomic. See [the documentation](https://developers.cloudflare.com/dns/manage-dns-records/how-to/batch-record-changes/ "Batch DNS records") for more information. - The operations you specify within the /batch request body are always executed in the following order: - Deletes - Patches - Puts - Posts
   *
   * @see dns-records-for-a-zone-batch-dns-records
   */
  async batch(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/dns_records/batch`);
  }
}

/**
 * DNS settings management for zones
 */
export class Settings extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Show DNS settings for a zone
   *
   * @see dns-settings-for-a-zone-list-dns-settings
   */
  async get(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/dns_settings`);
  }

  /**
   * Update DNS settings for a zone
   *
   * @see dns-settings-for-a-zone-update-dns-settings
   */
  async edit(zoneId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/zones/${zoneId}/dns_settings`);
  }
}

/**
 * DNS analytics and reporting
 */
export class Analytics extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Retrieves a list of summarised aggregate metrics over a given time period. See [Analytics API properties](https://developers.cloudflare.com/dns/reference/analytics-api-properties/) for detailed information about the available query parameters.
   *
   * @see dns-analytics-table
   */
  async report(
    zoneId: string,
    params?: Record<string, unknown>,
  ): Promise<components['schemas']['dns-analytics_report']> {
    return this._client.get<components['schemas']['dns-analytics_report']>(`/zones/${zoneId}/dns_analytics/report`, {
      query: params,
    });
  }

  /**
   * Retrieves a list of aggregate metrics grouped by time interval. See [Analytics API properties](https://developers.cloudflare.com/dns/reference/analytics-api-properties/) for detailed information about the available query parameters.
   *
   * @see dns-analytics-by-time
   */
  async bytime(
    zoneId: string,
    params?: Record<string, unknown>,
  ): Promise<components['schemas']['dns-analytics_report_bytime']> {
    return this._client.get<components['schemas']['dns-analytics_report_bytime']>(
      `/zones/${zoneId}/dns_analytics/report/bytime`,
      {
        query: params,
      },
    );
  }
}

/**
 * Secondary DNS and zone transfer management
 */
export class ZoneTransfers extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Sends AXFR zone transfer request to primary nameserver(s).
   *
   * @see secondary-dns-(-secondary-zone)-force-axfr
   */
  async force_axfr(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/secondary_dns/force_axfr`);
  }

  /**
   * Get secondary zone configuration for incoming zone transfers.
   *
   * @see secondary-dns-(-secondary-zone)-secondary-zone-configuration-details
   */
  async incoming_get(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/secondary_dns/incoming`);
  }

  /**
   * Create secondary zone configuration for incoming zone transfers.
   *
   * @see secondary-dns-(-secondary-zone)-create-secondary-zone-configuration
   */
  async incoming_create(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/secondary_dns/incoming`);
  }

  /**
   * Delete secondary zone configuration for incoming zone transfers.
   *
   * @see secondary-dns-(-secondary-zone)-delete-secondary-zone-configuration
   */
  async incoming_delete(zoneId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/secondary_dns/incoming`);
  }

  /**
   * Get primary zone configuration for outgoing zone transfers.
   *
   * @see secondary-dns-(-primary-zone)-primary-zone-configuration-details
   */
  async outgoing_get(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/secondary_dns/outgoing`);
  }

  /**
   * Create primary zone configuration for outgoing zone transfers.
   *
   * @see secondary-dns-(-primary-zone)-create-primary-zone-configuration
   */
  async outgoing_create(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/secondary_dns/outgoing`);
  }

  /**
   * Delete primary zone configuration for outgoing zone transfers.
   *
   * @see secondary-dns-(-primary-zone)-delete-primary-zone-configuration
   */
  async outgoing_delete(zoneId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/secondary_dns/outgoing`);
  }

  /**
   * Disable outgoing zone transfers for primary zone and clears IXFR backlog of primary zone.
   *
   * @see secondary-dns-(-primary-zone)-disable-outgoing-zone-transfers
   */
  async outgoing_disable(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/secondary_dns/outgoing/disable`);
  }

  /**
   * Enable outgoing zone transfers for primary zone.
   *
   * @see secondary-dns-(-primary-zone)-enable-outgoing-zone-transfers
   */
  async outgoing_enable(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/secondary_dns/outgoing/enable`);
  }

  /**
   * Notifies the secondary nameserver(s) and clears IXFR backlog of primary zone.
   *
   * @see secondary-dns-(-primary-zone)-force-dns-notify
   */
  async outgoing_force_notify(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/secondary_dns/outgoing/force_notify`);
  }

  /**
   * Get primary zone transfer status.
   *
   * @see secondary-dns-(-primary-zone)-get-outgoing-zone-transfer-status
   */
  async outgoing_status(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/secondary_dns/outgoing/status`);
  }

  /**
   * List ACLs.
   *
   * @see secondary-dns-(-acl)-list-ac-ls
   */
  async acls_list(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/secondary_dns/acls`);
  }

  /**
   * Get ACL.
   *
   * @see secondary-dns-(-acl)-acl-details
   */
  async acls_get(aclId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/secondary_dns/acls/${aclId}`);
  }

  /**
   * Create ACL.
   *
   * @see secondary-dns-(-acl)-create-acl
   */
  async acls_create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/secondary_dns/acls`);
  }

  /**
   * Delete ACL.
   *
   * @see secondary-dns-(-acl)-delete-acl
   */
  async acls_delete(aclId: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/secondary_dns/acls/${aclId}`);
  }

  /**
   * List Peers.
   *
   * @see secondary-dns-(-peer)-list-peers
   */
  async peers_list(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/secondary_dns/peers`);
  }

  /**
   * Get Peer.
   *
   * @see secondary-dns-(-peer)-peer-details
   */
  async peers_get(peerId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/secondary_dns/peers/${peerId}`);
  }

  /**
   * Create Peer.
   *
   * @see secondary-dns-(-peer)-create-peer
   */
  async peers_create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/secondary_dns/peers`);
  }

  /**
   * Delete Peer.
   *
   * @see secondary-dns-(-peer)-delete-peer
   */
  async peers_delete(peerId: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/secondary_dns/peers/${peerId}`);
  }

  /**
   * List TSIGs.
   *
   * @see secondary-dns-(-tsig)-list-tsi-gs
   */
  async tsigs_list(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/secondary_dns/tsigs`);
  }

  /**
   * Get TSIG.
   *
   * @see secondary-dns-(-tsig)-tsig-details
   */
  async tsigs_get(tsigId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/secondary_dns/tsigs/${tsigId}`);
  }

  /**
   * Create TSIG.
   *
   * @see secondary-dns-(-tsig)-create-tsig
   */
  async tsigs_create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/secondary_dns/tsigs`);
  }

  /**
   * Delete TSIG.
   *
   * @see secondary-dns-(-tsig)-delete-tsig
   */
  async tsigs_delete(tsigId: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/secondary_dns/tsigs/${tsigId}`);
  }
}

/**
 * Usage operations
 */
export class Usage extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Get the current DNS record usage and quota for an account. May include internal DNS usage and quota.
   *
   * @see dns-records-for-an-account-get-usage
   */
  async getAccountUsage(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/dns_records/usage`);
  }

  /**
   * Get the current DNS record usage for a zone, including the number of records and the quota limit.
   *
   * @see dns-records-for-a-zone-get-usage
   */
  async getZoneUsage(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/dns_records/usage`);
  }
}

/**
 * Views operations
 */
export class Views extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * List DNS Internal Views for an Account
   *
   * @see dns-views-for-an-account-list-internal-dns-views
   */
  async list(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/dns_settings/views`, {
      query: params,
    });
  }

  /**
   * Create Internal DNS View for an account
   *
   * @see dns-views-for-an-account-create-internal-dns-views
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/dns_settings/views`);
  }

  /**
   * Delete an existing Internal DNS View
   *
   * @see dns-views-for-an-account-delete-internal-dns-view
   */
  async delete(accountId: string, viewId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/dns_settings/views/${viewId}`);
  }

  /**
   * Get DNS Internal View
   *
   * @see dns-views-for-an-account-get-internal-dns-view
   */
  async get(accountId: string, viewId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/dns_settings/views/${viewId}`);
  }

  /**
   * Update an existing Internal DNS View
   *
   * @see dns-views-for-an-account-update-internal-dns-view
   */
  async edit(accountId: string, viewId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/dns_settings/views/${viewId}`);
  }
}

/**
 * Acls operations
 */
export class Acls extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Modify ACL.
   *
   * @see secondary-dns-(-acl)-update-acl
   */
  async update(aclId: string, accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/secondary_dns/acls/${aclId}`);
  }
}

/**
 * Peers operations
 */
export class Peers extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Modify Peer.
   *
   * @see secondary-dns-(-peer)-update-peer
   */
  async update(peerId: string, accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/secondary_dns/peers/${peerId}`);
  }
}

/**
 * Tsigs operations
 */
export class Tsigs extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Modify TSIG.
   *
   * @see secondary-dns-(-tsig)-update-tsig
   */
  async update(tsigId: string, accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/secondary_dns/tsigs/${tsigId}`);
  }
}

/**
 * Scan operations
 */
export class Scan extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Retrieves the list of DNS records discovered up to this point by the asynchronous scan. These records are temporary until explicitly accepted or rejected via `POST /scan/review`. Additional records may be discovered by the scan later.
   *
   * @see dns-records-for-a-zone-review-dns-scan
   */
  async reviewGet(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/dns_records/scan/review`);
  }

  /**
   * Accept or reject DNS records found by the DNS records scan. Accepted records will be permanently added to the zone, while rejected records will be permanently deleted.
   *
   * @see dns-records-for-a-zone-apply-dns-scan-results
   */
  async reviewCreate(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/dns_records/scan/review`);
  }

  /**
   * Initiates an asynchronous scan for common DNS records on your domain. Note that this **does not** automatically add records to your zone. The scan runs in the background, and results can be reviewed later using the `/scan/review` endpoints. Useful if you haven't updated your nameservers yet.
   *
   * @see dns-records-for-a-zone-trigger-dns-scan
   */
  async triggerCreate(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/dns_records/scan/trigger`);
  }
}

/**
 * Incoming operations
 */
export class Incoming extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Update secondary zone configuration for incoming zone transfers.
   *
   * @see secondary-dns-(-secondary-zone)-update-secondary-zone-configuration
   */
  async update(zoneId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/secondary_dns/incoming`);
  }
}

/**
 * Outgoing operations
 */
export class Outgoing extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Update primary zone configuration for outgoing zone transfers.
   *
   * @see secondary-dns-(-primary-zone)-update-primary-zone-configuration
   */
  async update(zoneId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/secondary_dns/outgoing`);
  }
}

/**
 * DNS management API for zones, records, DNSSEC, analytics, and zone transfers
 */
export class DNS extends APIResource {
  readonly dnssec: Dnssec;
  readonly records: Records;
  readonly settings: Settings;
  readonly analytics: Analytics;
  readonly zonetransfers: ZoneTransfers;
  readonly usage: Usage;
  readonly views: Views;
  readonly acls: Acls;
  readonly peers: Peers;
  readonly tsigs: Tsigs;
  readonly scan: Scan;
  readonly incoming: Incoming;
  readonly outgoing: Outgoing;

  constructor(client: CloudflareClient) {
    super(client);
    this.dnssec = new Dnssec(client);
    this.records = new Records(client);
    this.settings = new Settings(client);
    this.analytics = new Analytics(client);
    this.zonetransfers = new ZoneTransfers(client);
    this.usage = new Usage(client);
    this.views = new Views(client);
    this.acls = new Acls(client);
    this.peers = new Peers(client);
    this.tsigs = new Tsigs(client);
    this.scan = new Scan(client);
    this.incoming = new Incoming(client);
    this.outgoing = new Outgoing(client);
  }

  /**
   * Show DNS settings for an account
   *
   * @see dns-settings-for-an-account-list-dns-settings
   */
  async list(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/dns_settings`);
  }

  /**
   * Update DNS settings for an account
   *
   * @see dns-settings-for-an-account-update-dns-settings
   */
  async editDnsSettings(accountId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/dns_settings`);
  }

  /**
   * Update an existing DNS record. Notes: - A/AAAA records cannot exist on the same name as CNAME records. - NS records cannot exist on the same name as any other record type. - Domain names are always represented in Punycode, even if Unicode characters were used when creating the record.
   *
   * @see dns-records-for-a-zone-patch-dns-record
   */
  async editDnsRecord(dnsRecordId: string, zoneId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/zones/${zoneId}/dns_records/${dnsRecordId}`);
  }
}
