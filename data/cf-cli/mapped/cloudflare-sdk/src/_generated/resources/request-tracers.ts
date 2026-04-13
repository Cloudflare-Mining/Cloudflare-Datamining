/**
 * request-tracers resource
 * @generated from apis/request-tracers/schema.ts
 *
 * Trace how a request would be processed through Cloudflare's rules and configuration pipeline
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Simulate request processing to debug rule matches, transforms, and routing decisions
 */
export class Traces extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Traces a simulated HTTP request through Cloudflare's edge to analyze how rules, settings, and configurations would process the request. Useful for debugging firewall rules, page rules, and other request transformations without sending actual traffic. Supports custom headers, cookies, body content, and geolocation context.
   *
   * @see account-request-tracer-request-trace
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/request-tracer/trace`);
  }
}

/**
 * Trace how a request would be processed through Cloudflare's rules and configuration pipeline
 */
export class RequestTracers extends APIResource {
  readonly traces: Traces;

  constructor(client: CloudflareClient) {
    super(client);
    this.traces = new Traces(client);
  }
}
