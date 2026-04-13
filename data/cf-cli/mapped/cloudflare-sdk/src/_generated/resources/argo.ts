/**
 * argo resource
 * @generated from apis/argo/schema.ts
 *
 * Network optimization features that speed up and improve reliability of traffic to your origins
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Route traffic through the fastest network paths to your origin using real-time latency data
 */
export class SmartRouting extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Retrieves the value of Argo Smart Routing enablement setting.
   *
   * @see argo-smart-routing-get-argo-smart-routing-setting
   */
  async get(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/argo/smart_routing`);
  }

  /**
   * Configures the value of the Argo Smart Routing enablement setting.
   *
   * @see argo-smart-routing-patch-argo-smart-routing-setting
   */
  async edit(zoneId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/zones/${zoneId}/argo/smart_routing`);
  }
}

/**
 * Reduce origin load by having upper-tier data centers serve cache misses before reaching your origin
 */
export class TieredCaching extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Tiered Cache works by dividing Cloudflare's data centers into a hierarchy of lower-tiers and upper-tiers. If content is not cached in lower-tier data centers (generally the ones closest to a visitor), the lower-tier must ask an upper-tier to see if it has the content. If the upper-tier does not have the content, only the upper-tier can ask the origin for content. This practice improves bandwidth efficiency by limiting the number of data centers that can ask the origin for content, which reduces origin load and makes websites more cost-effective to operate. Additionally, Tiered Cache concentrates connections to origin servers so they come from a small number of data centers rather than the full set of network locations. This results in fewer open connections using server resources.
   *
   * @see tiered-caching-get-tiered-caching-setting
   */
  async get(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/argo/tiered_caching`);
  }

  /**
   * Tiered Cache works by dividing Cloudflare's data centers into a hierarchy of lower-tiers and upper-tiers. If content is not cached in lower-tier data centers (generally the ones closest to a visitor), the lower-tier must ask an upper-tier to see if it has the content. If the upper-tier does not have the content, only the upper-tier can ask the origin for content. This practice improves bandwidth efficiency by limiting the number of data centers that can ask the origin for content, which reduces origin load and makes websites more cost-effective to operate. Additionally, Tiered Cache concentrates connections to origin servers so they come from a small number of data centers rather than the full set of network locations. This results in fewer open connections using server resources.
   *
   * @see tiered-caching-patch-tiered-caching-setting
   */
  async edit(zoneId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/zones/${zoneId}/argo/tiered_caching`);
  }
}

/**
 * Network optimization features that speed up and improve reliability of traffic to your origins
 */
export class Argo extends APIResource {
  readonly smartrouting: SmartRouting;
  readonly tieredcaching: TieredCaching;

  constructor(client: CloudflareClient) {
    super(client);
    this.smartrouting = new SmartRouting(client);
    this.tieredcaching = new TieredCaching(client);
  }
}
