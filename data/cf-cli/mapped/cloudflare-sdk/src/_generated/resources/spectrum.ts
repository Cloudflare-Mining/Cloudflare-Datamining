/**
 * spectrum resource
 * @generated from apis/spectrum/schema.ts
 *
 * Proxy and protect arbitrary TCP/UDP applications through Cloudflare's network with DDoS mitigation
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Real-time and historical connection analytics for Spectrum applications
 */
export class Analytics extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Retrieves analytics aggregated from the last minute of usage on Spectrum applications underneath a given zone.
   *
   * @see spectrum-aggregate-analytics-get-current-aggregated-analytics
   */
  async aggregatesCurrentsGet(zoneId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/spectrum/analytics/aggregate/current`, {
      query: params,
    });
  }

  /**
   * Retrieves a list of aggregate metrics grouped by time interval.
   *
   * @see spectrum-analytics-(-by-time)-get-analytics-by-time
   */
  async eventsBytimesGet(zoneId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/spectrum/analytics/events/bytime`, {
      query: params,
    });
  }

  /**
   * Retrieves a list of summarised aggregate metrics over a given time period.
   *
   * @see spectrum-analytics-(-summary)-get-analytics-summary
   */
  async eventsSummariesGet(zoneId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/spectrum/analytics/events/summary`, {
      query: params,
    });
  }
}

/**
 * Spectrum application configurations that map protocols and ports to origin servers
 */
export class Apps extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Retrieves a list of currently existing Spectrum applications inside a zone.
   *
   * @see spectrum-applications-list-spectrum-applications
   */
  async list(zoneId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/spectrum/apps`, {
      query: params,
    });
  }

  /**
   * Gets the application configuration of a specific application inside a zone.
   *
   * @see spectrum-applications-get-spectrum-application-configuration
   */
  async get(appId: string, zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/spectrum/apps/${appId}`);
  }

  /**
   * Creates a new Spectrum application from a configuration using a name for the origin.
   *
   * @see spectrum-applications-create-spectrum-application-using-a-name-for-the-origin
   */
  async create(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/spectrum/apps`);
  }

  /**
   * Updates a previously existing application's configuration that uses a name for the origin.
   *
   * @see spectrum-applications-update-spectrum-application-configuration-using-a-name-for-the-origin
   */
  async update(appId: string, zoneId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/spectrum/apps/${appId}`);
  }

  /**
   * Deletes a previously existing application.
   *
   * @see spectrum-applications-delete-spectrum-application
   */
  async delete(appId: string, zoneId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/spectrum/apps/${appId}`);
  }
}

/**
 * Proxy and protect arbitrary TCP/UDP applications through Cloudflare's network with DDoS mitigation
 */
export class Spectrum extends APIResource {
  readonly analytics: Analytics;
  readonly apps: Apps;

  constructor(client: CloudflareClient) {
    super(client);
    this.analytics = new Analytics(client);
    this.apps = new Apps(client);
  }
}
