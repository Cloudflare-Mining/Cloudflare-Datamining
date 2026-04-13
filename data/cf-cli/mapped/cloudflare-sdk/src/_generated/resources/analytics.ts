/**
 * analytics resource
 * @generated from apis/analytics/schema.ts
 *
 * Zone-level traffic analytics — dashboard summaries, per-colo breakdowns, and Argo latency metrics
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Per-data-center (colo) traffic analytics breakdown for the zone
 */
export class Colo extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * This view provides a breakdown of analytics data by datacenter. Note: This is available to Enterprise customers only.
   *
   * @see zone-analytics-(-deprecated)-get-analytics-by-co-locations
   */
  async get(zoneIdentifier: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneIdentifier}/analytics/colos`, {
      query: params,
    });
  }
}

/**
 * Aggregated zone dashboard analytics — requests, bandwidth, threats, and page views
 */
export class Dashboard extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * The dashboard view provides both totals and timeseries data for the given zone and time period across the entire Cloudflare network.
   *
   * @see zone-analytics-(-deprecated)-get-dashboard
   */
  async get(zoneIdentifier: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneIdentifier}/analytics/dashboard`, {
      query: params,
    });
  }
}

/**
 * Argo Smart Routing latency analytics showing time-to-first-byte improvements
 */
export class Latency extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Retrieves Argo Smart Routing latency analytics for the zone, showing time-to-first-byte improvements.
   *
   * @see argo-analytics-for-zone-argo-analytics-for-a-zone
   */
  async get(zoneId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/analytics/latency`, {
      query: params,
    });
  }

  /**
   * Retrieves Argo Smart Routing latency analytics broken down by data center (PoP) for the zone.
   *
   * @see argo-analytics-for-geolocation-argo-analytics-for-a-zone-at-different-po-ps
   */
  async colosGet(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/analytics/latency/colos`);
  }
}

/**
 * Zone-level traffic analytics — dashboard summaries, per-colo breakdowns, and Argo latency metrics
 */
export class Analytics extends APIResource {
  readonly colo: Colo;
  readonly dashboard: Dashboard;
  readonly latency: Latency;

  constructor(client: CloudflareClient) {
    super(client);
    this.colo = new Colo(client);
    this.dashboard = new Dashboard(client);
    this.latency = new Latency(client);
  }
}
