/**
 * dns-firewall resource
 * @generated from apis/dns-firewall/schema.ts
 *
 * DNS proxy clusters that filter and forward DNS queries with DDoS protection and caching
 */
import type { components } from 'cloudflare-openapi';
import { APIResource, CloudflareClient } from '../../client.js';

// Type aliases from OpenAPI components
export type DNSAnalyticsReport = components['schemas']['dns-analytics_report'];
export type DNSAnalyticsReportBytime = components['schemas']['dns-analytics_report_bytime'];

/**
 * Query volume, latency, and response code analytics for DNS Firewall clusters
 */
export class Analytics extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Retrieves a list of summarised aggregate metrics over a given time period. See [Analytics API properties](https://developers.cloudflare.com/dns/reference/analytics-api-properties/) for detailed information about the available query parameters.
   *
   * @see dns-firewall-analytics-table
   */
  async reportsGet(
    dnsFirewallId: string,
    accountId: string,
    params?: Record<string, unknown>,
  ): Promise<components['schemas']['dns-analytics_report']> {
    return this._client.get<components['schemas']['dns-analytics_report']>(
      `/accounts/${accountId}/dns_firewall/${dnsFirewallId}/dns_analytics/report`,
      {
        query: params,
      },
    );
  }

  /**
   * Retrieves a list of aggregate metrics grouped by time interval. See [Analytics API properties](https://developers.cloudflare.com/dns/reference/analytics-api-properties/) for detailed information about the available query parameters.
   *
   * @see dns-firewall-analytics-by-time
   */
  async reportsBytimesGet(
    dnsFirewallId: string,
    accountId: string,
    params?: Record<string, unknown>,
  ): Promise<components['schemas']['dns-analytics_report_bytime']> {
    return this._client.get<components['schemas']['dns-analytics_report_bytime']>(
      `/accounts/${accountId}/dns_firewall/${dnsFirewallId}/dns_analytics/report/bytime`,
      {
        query: params,
      },
    );
  }
}

/**
 * PTR record configuration for reverse DNS lookups on DNS Firewall cluster IPs
 */
export class ReverseDNS extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Show reverse DNS configuration (PTR records) for a DNS Firewall cluster
   *
   * @see dns-firewall-show-dns-firewall-cluster-reverse-dns
   */
  async get(dnsFirewallId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/dns_firewall/${dnsFirewallId}/reverse_dns`);
  }

  /**
   * Update reverse DNS configuration (PTR records) for a DNS Firewall cluster
   *
   * @see dns-firewall-update-dns-firewall-cluster-reverse-dns
   */
  async edit(dnsFirewallId: string, accountId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/dns_firewall/${dnsFirewallId}/reverse_dns`);
  }
}

/**
 * DNS proxy clusters that filter and forward DNS queries with DDoS protection and caching
 */
export class DNSFirewall extends APIResource {
  readonly analytics: Analytics;
  readonly reversedns: ReverseDNS;

  constructor(client: CloudflareClient) {
    super(client);
    this.analytics = new Analytics(client);
    this.reversedns = new ReverseDNS(client);
  }

  /**
   * List DNS Firewall clusters for an account
   *
   * @see dns-firewall-list-dns-firewall-clusters
   */
  async list(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/dns_firewall`, {
      query: params,
    });
  }

  /**
   * Show a single DNS Firewall cluster for an account
   *
   * @see dns-firewall-dns-firewall-cluster-details
   */
  async get(dnsFirewallId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/dns_firewall/${dnsFirewallId}`);
  }

  /**
   * Create a DNS Firewall cluster
   *
   * @see dns-firewall-create-dns-firewall-cluster
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/dns_firewall`);
  }

  /**
   * Modify the configuration of a DNS Firewall cluster
   *
   * @see dns-firewall-update-dns-firewall-cluster
   */
  async edit(dnsFirewallId: string, accountId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/dns_firewall/${dnsFirewallId}`);
  }

  /**
   * Delete a DNS Firewall cluster
   *
   * @see dns-firewall-delete-dns-firewall-cluster
   */
  async delete(dnsFirewallId: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/dns_firewall/${dnsFirewallId}`);
  }
}
