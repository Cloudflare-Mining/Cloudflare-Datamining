/**
 * diagnostics resource
 * @generated from apis/diagnostics/schema.ts
 *
 * Network diagnostic tools — traceroutes from Cloudflare's edge and endpoint health checks
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Run traceroutes from Cloudflare data centers to diagnose network path issues
 */
export class Traceroutes extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Run traceroutes from Cloudflare colos.
   *
   * @see diagnostics-traceroute
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/diagnostics/traceroute`);
  }
}

/**
 * Monitor external endpoint availability with periodic HTTP/HTTPS health checks
 */
export class EndpointHealthchecks extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * List Endpoint Health Checks.
   *
   * @see diagnostics-endpoint-healthcheck-list
   */
  async list(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/diagnostics/endpoint-healthchecks`);
  }

  /**
   * Create Endpoint Health Check.
   *
   * @see diagnostics-endpoint-healthcheck-create
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/diagnostics/endpoint-healthchecks`);
  }

  /**
   * Get a single Endpoint Health Check.
   *
   * @see diagnostics-endpoint-healthcheck-get
   */
  async get(accountId: string, id: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/diagnostics/endpoint-healthchecks/${id}`);
  }

  /**
   * Delete Endpoint Health Check.
   *
   * @see diagnostics-endpoint-healthcheck-delete
   */
  async delete(accountId: string, id: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/diagnostics/endpoint-healthchecks/${id}`);
  }

  /**
   * Update a Endpoint Health Check.
   *
   * @see diagnostics-endpoint-healthcheck-update
   */
  async update(accountId: string, id: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/diagnostics/endpoint-healthchecks/${id}`);
  }
}

/**
 * Network diagnostic tools — traceroutes from Cloudflare's edge and endpoint health checks
 */
export class Diagnostics extends APIResource {
  readonly traceroutes: Traceroutes;
  readonly endpointhealthchecks: EndpointHealthchecks;

  constructor(client: CloudflareClient) {
    super(client);
    this.traceroutes = new Traceroutes(client);
    this.endpointhealthchecks = new EndpointHealthchecks(client);
  }
}
