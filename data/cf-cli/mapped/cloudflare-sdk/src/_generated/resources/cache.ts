/**
 * cache resource
 * @generated from apis/cache/schema.ts
 *
 * Purge cached content and configure Cache Reserve, tiered caching, and variant serving
 */
import type { components } from 'cloudflare-openapi';
import { APIResource, CloudflareClient } from '../../client.js';

// Type aliases from OpenAPI components
export type CacheRulesSmartTieredCache = components['schemas']['cache-rules_smart_tiered_cache'];
export type CacheRulesVariants = components['schemas']['cache-rules_variants'];

/**
 * Persistent storage tier that keeps cached assets even after eviction from edge caches
 */
export class CacheReserve extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Increase cache lifetimes by automatically storing all cacheable files into Cloudflare's persistent object storage buckets. Requires Cache Reserve subscription. Note: using Tiered Cache with Cache Reserve is highly recommended to reduce Reserve operations costs. See the [developer docs](https://developers.cloudflare.com/cache/about/cache-reserve) for more information.
   *
   * @see zone-cache-settings-get-cache-reserve-setting
   */
  async get(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/cache/cache_reserve`);
  }

  /**
   * Increase cache lifetimes by automatically storing all cacheable files into Cloudflare's persistent object storage buckets. Requires Cache Reserve subscription. Note: using Tiered Cache with Cache Reserve is highly recommended to reduce Reserve operations costs. See the [developer docs](https://developers.cloudflare.com/cache/about/cache-reserve) for more information.
   *
   * @see zone-cache-settings-change-cache-reserve-setting
   */
  async edit(zoneId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/zones/${zoneId}/cache/cache_reserve`);
  }

  /**
   * You can use Cache Reserve Clear to clear your Cache Reserve, but you must first disable Cache Reserve. In most cases, this will be accomplished within 24 hours. You cannot re-enable Cache Reserve while this process is ongoing. Keep in mind that you cannot undo or cancel this operation.
   *
   * @see zone-cache-settings-get-cache-reserve-clear
   */
  async status(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/cache/cache_reserve_clear`);
  }

  /**
   * You can use Cache Reserve Clear to clear your Cache Reserve, but you must first disable Cache Reserve. In most cases, this will be accomplished within 24 hours. You cannot re-enable Cache Reserve while this process is ongoing. Keep in mind that you cannot undo or cancel this operation.
   *
   * @see zone-cache-settings-start-cache-reserve-clear
   */
  async clear(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/cache/cache_reserve_clear`);
  }
}

/**
 * Automatically determine the best upper-tier data centers for tiered cache topology
 */
export class SmartTieredCache extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Smart Tiered Cache dynamically selects the single closest upper tier for each of your website’s origins with no configuration required, using our in-house performance and routing data. Cloudflare collects latency data for each request to an origin, and uses the latency data to determine how well any upper-tier data center is connected with an origin. As a result, Cloudflare can select the data center with the lowest latency to be the upper-tier for an origin.
   *
   * @see smart-tiered-cache-get-smart-tiered-cache-setting
   */
  async get(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/cache/tiered_cache_smart_topology_enable`);
  }

  /**
   * Smart Tiered Cache dynamically selects the single closest upper tier for each of your website’s origins with no configuration required, using our in-house performance and routing data. Cloudflare collects latency data for each request to an origin, and uses the latency data to determine how well any upper-tier data center is connected with an origin. As a result, Cloudflare can select the data center with the lowest latency to be the upper-tier for an origin.
   *
   * @see smart-tiered-cache-patch-smart-tiered-cache-setting
   */
  async edit(zoneId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/zones/${zoneId}/cache/tiered_cache_smart_topology_enable`);
  }

  /**
   * Smart Tiered Cache dynamically selects the single closest upper tier for each of your website’s origins with no configuration required, using our in-house performance and routing data. Cloudflare collects latency data for each request to an origin, and uses the latency data to determine how well any upper-tier data center is connected with an origin. As a result, Cloudflare can select the data center with the lowest latency to be the upper-tier for an origin.
   *
   * @see smart-tiered-cache-delete-smart-tiered-cache-setting
   */
  async delete(zoneId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/cache/tiered_cache_smart_topology_enable`);
  }
}

/**
 * Serve different cached versions of an image based on the Accept header (WebP, AVIF, etc.)
 */
export class Variants extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Variant support enables caching variants of images with certain file extensions in addition to the original. This only applies when the origin server sends the 'Vary: Accept' response header. If the origin server sends 'Vary: Accept' but does not serve the variant requested, the response will not be cached. This will be indicated with BYPASS cache status in the response headers.
   *
   * @see zone-cache-settings-get-variants-setting
   */
  async get(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/cache/variants`);
  }

  /**
   * Variant support enables caching variants of images with certain file extensions in addition to the original. This only applies when the origin server sends the 'Vary: Accept' response header. If the origin server sends 'Vary: Accept' but does not serve the variant requested, the response will not be cached. This will be indicated with BYPASS cache status in the response headers.
   *
   * @see zone-cache-settings-change-variants-setting
   */
  async edit(zoneId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/zones/${zoneId}/cache/variants`);
  }

  /**
   * Variant support enables caching variants of images with certain file extensions in addition to the original. This only applies when the origin server sends the 'Vary: Accept' response header. If the origin server sends 'Vary: Accept' but does not serve the variant requested, the response will not be cached. This will be indicated with BYPASS cache status in the response headers.
   *
   * @see zone-cache-settings-delete-variants-setting
   */
  async delete(zoneId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/cache/variants`);
  }
}

/**
 * Restrict tiered cache topology to data centers within a specific geographic region
 */
export class RegionalTieredCache extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Instructs Cloudflare to check a regional hub data center on the way to your upper tier. This can help improve performance for smart and custom tiered cache topologies.
   *
   * @see zone-cache-settings-get-regional-tiered-cache-setting
   */
  async get(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/cache/regional_tiered_cache`);
  }

  /**
   * Instructs Cloudflare to check a regional hub data center on the way to your upper tier. This can help improve performance for smart and custom tiered cache topologies.
   *
   * @see zone-cache-settings-change-regional-tiered-cache-setting
   */
  async edit(zoneId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/zones/${zoneId}/cache/regional_tiered_cache`);
  }
}

/**
 * Purge cached content and configure Cache Reserve, tiered caching, and variant serving
 */
export class Cache extends APIResource {
  readonly cachereserve: CacheReserve;
  readonly smarttieredcache: SmartTieredCache;
  readonly variants: Variants;
  readonly regionaltieredcache: RegionalTieredCache;

  constructor(client: CloudflareClient) {
    super(client);
    this.cachereserve = new CacheReserve(client);
    this.smarttieredcache = new SmartTieredCache(client);
    this.variants = new Variants(client);
    this.regionaltieredcache = new RegionalTieredCache(client);
  }

  /**
   * ### Purge All Cached Content Removes ALL files from Cloudflare's cache. All tiers can purge everything. ``` {"purge_everything": true} ``` ### Purge Cached Content by URL Granularly removes one or more files from Cloudflare's cache by specifying URLs. All tiers can purge by URL. To purge files with custom cache keys, include the headers used to compute the cache key as in the example. If you have a device type or geo in your cache key, you will need to include the CF-Device-Type or CF-IPCountry headers. If you have lang in your cache key, you will need to include the Accept-Language header. **NB:** When including the Origin header, be sure to include the **scheme** and **hostname**. The port number can be omitted if it is the default port (80 for http, 443 for https), but must be included otherwise. Single file purge example with files: ``` {"files": ["http://www.example.com/css/styles.css", "http://www.example.com/js/index.js"]} ``` Single file purge example with url and header pairs: ``` {"files": [{url: "http://www.example.com/cat_picture.jpg", headers: { "CF-IPCountry": "US", "CF-Device-Type": "desktop", "Accept-Language": "zh-CN" }}, {url: "http://www.example.com/dog_picture.jpg", headers: { "CF-IPCountry": "EU", "CF-Device-Type": "mobile", "Accept-Language": "en-US" }}]} ``` ### Purge Cached Content by Tag, Host or Prefix Granularly removes one or more files from Cloudflare's cache either by specifying the host, the associated Cache-Tag, or a Prefix. Flex purge with tags: ``` {"tags": ["a-cache-tag", "another-cache-tag"]} ``` Flex purge with hosts: ``` {"hosts": ["www.example.com", "images.example.com"]} ``` Flex purge with prefixes: ``` {"prefixes": ["www.example.com/foo", "images.example.com/bar/baz"]} ``` ### Availability and limits please refer to [purge cache availability and limits documentation page](https://developers.cloudflare.com/cache/how-to/purge-cache/#availability-and-limits).
   *
   * @see zone-purge
   */
  async purge(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/purge_cache`);
  }
}
