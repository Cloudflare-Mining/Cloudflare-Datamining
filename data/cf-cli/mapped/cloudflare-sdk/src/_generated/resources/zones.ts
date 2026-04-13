/**
 * zones resource
 * @generated from apis/zones/schema.ts
 *
 * Zones are domains on Cloudflare — list, create, and configure domain settings
 */
import type { components } from 'cloudflare-openapi';
import { APIResource, CloudflareClient } from '../../client.js';

// Type aliases from OpenAPI components
export type BillSubsAPIAvailableRatePlan = components['schemas']['bill-subs-api_available-rate-plan'];
export type GoogleTagGatewayGoogleTagGatewayConfig =
  components['schemas']['google-tag-gateway_google-tag-gateway-config'];

/**
 * Aegis operations
 */
export class Aegis extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Aegis provides dedicated egress IPs (from Cloudflare to your origin) for your layer 7 WAF and CDN services. The egress IPs are reserved exclusively for your account so that you can increase your origin security by only allowing traffic from a small list of IP addresses.
   *
   * @see zone-cache-settings-get-aegis-setting
   */
  async get(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/settings/aegis`);
  }

  /**
   * Aegis provides dedicated egress IPs (from Cloudflare to your origin) for your layer 7 WAF and CDN services. The egress IPs are reserved exclusively for your account so that you can increase your origin security by only allowing traffic from a small list of IP addresses.
   *
   * @see zone-cache-settings-change-aegis-setting
   */
  async edit(zoneId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/zones/${zoneId}/settings/aegis`);
  }
}

/**
 * Fonts operations
 */
export class Fonts extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Enhance your website's font delivery with Cloudflare Fonts. Deliver Google Hosted fonts from your own domain, boost performance, and enhance user privacy. Refer to the Cloudflare Fonts documentation for more information.
   *
   * @see zone-settings-get-fonts-setting
   */
  async get(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/settings/fonts`);
  }

  /**
   * Enhance your website's font delivery with Cloudflare Fonts. Deliver Google Hosted fonts from your own domain, boost performance, and enhance user privacy. Refer to the Cloudflare Fonts documentation for more information.
   *
   * @see zone-settings-change-fonts-setting
   */
  async edit(zoneId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/zones/${zoneId}/settings/fonts`);
  }
}

/**
 * Google Tag Gateway operations
 */
export class GoogleTagGateway extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Gets the Google Tag Gateway configuration for a zone.
   *
   * @see zone-settings-get-google-tag-gateway-config
   */
  async configGet(zoneId: string): Promise<components['schemas']['google-tag-gateway_google-tag-gateway-config']> {
    return this._client.get<components['schemas']['google-tag-gateway_google-tag-gateway-config']>(
      `/zones/${zoneId}/settings/google-tag-gateway/config`,
    );
  }

  /**
   * Updates the Google Tag Gateway configuration for a zone.
   *
   * @see zone-settings-change-google-tag-gateway-config
   */
  async configUpdate(zoneId: string): Promise<components['schemas']['google-tag-gateway_google-tag-gateway-config']> {
    return this._client.put<components['schemas']['google-tag-gateway_google-tag-gateway-config']>(
      `/zones/${zoneId}/settings/google-tag-gateway/config`,
    );
  }
}

/**
 * Origin H2 Max Streams operations
 */
export class OriginH2MaxStreams extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Origin H2 Max Streams configures the max number of concurrent requests that Cloudflare will send within the same connection when communicating with the origin server, if the origin supports it. Note that if your origin does not support H2 multiplexing, 5xx errors may be observed, particularly 520s. Also note that the default value is `100` for all plan types except Enterprise where it is `1`. `1` means that H2 multiplexing is disabled.
   *
   * @see zone-cache-settings-get-origin-h2-max-streams-setting
   */
  async get(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/settings/origin_h2_max_streams`);
  }

  /**
   * Origin H2 Max Streams configures the max number of concurrent requests that Cloudflare will send within the same connection when communicating with the origin server, if the origin supports it. Note that if your origin does not support H2 multiplexing, 5xx errors may be observed, particularly 520s. Also note that the default value is `100` for all plan types except Enterprise where it is `1`. `1` means that H2 multiplexing is disabled.
   *
   * @see zone-cache-settings-change-origin-h2-max-streams-setting
   */
  async edit(zoneId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/zones/${zoneId}/settings/origin_h2_max_streams`);
  }
}

/**
 * Origin Max Http Version operations
 */
export class OriginMaxHTTPVersion extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Origin Max HTTP Setting Version sets the highest HTTP version Cloudflare will attempt to use with your origin. This setting allows Cloudflare to make HTTP/2 requests to your origin. (Refer to [Enable HTTP/2 to Origin](https://developers.cloudflare.com/cache/how-to/enable-http2-to-origin/), for more information.). The default value is "2" for all plan types except Enterprise where it is "1".
   *
   * @see zone-cache-settings-get-origin-max-http-version-setting
   */
  async get(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/settings/origin_max_http_version`);
  }

  /**
   * Origin Max HTTP Setting Version sets the highest HTTP version Cloudflare will attempt to use with your origin. This setting allows Cloudflare to make HTTP/2 requests to your origin. (Refer to [Enable HTTP/2 to Origin](https://developers.cloudflare.com/cache/how-to/enable-http2-to-origin/), for more information.). The default value is "2" for all plan types except Enterprise where it is "1".
   *
   * @see zone-cache-settings-change-origin-max-http-version-setting
   */
  async edit(zoneId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/zones/${zoneId}/settings/origin_max_http_version`);
  }
}

/**
 * Rum operations
 */
export class Rum extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Retrieves RUM status for a zone.
   *
   * @see web-analytics-get-rum-status
   */
  async get(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/settings/rum`);
  }

  /**
   * Toggles RUM on/off for an existing zone.
   *
   * @see web-analytics-toggle-rum
   */
  async edit(zoneId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/zones/${zoneId}/settings/rum`);
  }
}

/**
 * Speed Brain operations
 */
export class SpeedBrain extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Speed Brain lets compatible browsers speculate on content which can be prefetched or preloaded, making website navigation faster. Refer to the Cloudflare Speed Brain documentation for more information.
   *
   * @see zone-settings-get-speed-brain-setting
   */
  async get(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/settings/speed_brain`);
  }

  /**
   * Speed Brain lets compatible browsers speculate on content which can be prefetched or preloaded, making website navigation faster. Refer to the Cloudflare Speed Brain documentation for more information.
   *
   * @see zone-settings-change-speed-brain-setting
   */
  async edit(zoneId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/zones/${zoneId}/settings/speed_brain`);
  }
}

/**
 * Ssl Automatic Mode operations
 */
export class SSLAutomaticMode extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * If the system is enabled, the response will include next_scheduled_scan, representing the next time this zone will be scanned and the zone's ssl/tls encryption mode is potentially upgraded by the system. If the system is disabled, next_scheduled_scan will not be present in the response body.
   *
   * @see ssl-detector-automatic-mode-get-enrollment
   */
  async get(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/settings/ssl_automatic_mode`);
  }

  /**
   * The automatic system is enabled when this endpoint is hit with value in the request body is set to "auto", and disabled when the request body value is set to "custom".
   *
   * @see ssl-detector-automatic-mode-patch-enrollment
   */
  async edit(zoneId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/zones/${zoneId}/settings/ssl_automatic_mode`);
  }
}

/**
 * Cache Reserve Clear operations
 */
export class CacheReserveClear extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * You can use Cache Reserve Clear to clear your Cache Reserve, but you must first disable Cache Reserve. In most cases, this will be accomplished within 24 hours. You cannot re-enable Cache Reserve while this process is ongoing. Keep in mind that you cannot undo or cancel this operation.
   *
   * @see smart-shield-settings-get-cache-reserve-clear
   */
  async get(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/smart_shield/cache_reserve_clear`);
  }

  /**
   * You can use Cache Reserve Clear to clear your Cache Reserve, but you must first disable Cache Reserve. In most cases, this will be accomplished within 24 hours. You cannot re-enable Cache Reserve while this process is ongoing. Keep in mind that you cannot undo or cancel this operation.
   *
   * @see smart-shield-settings-start-cache-reserve-clear
   */
  async create(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/smart_shield/cache_reserve_clear`);
  }
}

/**
 * Healthchecks operations
 */
export class Healthchecks extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * List configured health checks.
   *
   * @see smart-shield-list-health-checks
   */
  async list(zoneId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/smart_shield/healthchecks`, {
      query: params,
    });
  }

  /**
   * Create a new health check.
   *
   * @see smart-shield-create-health-check
   */
  async create(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/smart_shield/healthchecks`);
  }

  /**
   * Delete a health check.
   *
   * @see smart-shield-delete-health-check
   */
  async delete(healthcheckId: string, zoneId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/smart_shield/healthchecks/${healthcheckId}`);
  }

  /**
   * Fetch a single configured health check.
   *
   * @see smart-shield-health-check-details
   */
  async get(healthcheckId: string, zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/smart_shield/healthchecks/${healthcheckId}`);
  }

  /**
   * Patch a configured health check.
   *
   * @see smart-shield-patch-health-check
   */
  async edit(healthcheckId: string, zoneId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/zones/${zoneId}/smart_shield/healthchecks/${healthcheckId}`);
  }

  /**
   * Update a configured health check.
   *
   * @see smart-shield-update-health-check
   */
  async update(healthcheckId: string, zoneId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/smart_shield/healthchecks/${healthcheckId}`);
  }
}

/**
 * Zones are domains on Cloudflare — list, create, and configure domain settings
 */
export class Zones extends APIResource {
  readonly aegis: Aegis;
  readonly fonts: Fonts;
  readonly googletaggateway: GoogleTagGateway;
  readonly originh2maxstreams: OriginH2MaxStreams;
  readonly originmaxhttpversion: OriginMaxHTTPVersion;
  readonly rum: Rum;
  readonly speedbrain: SpeedBrain;
  readonly sslautomaticmode: SSLAutomaticMode;
  readonly cachereserveclear: CacheReserveClear;
  readonly healthchecks: Healthchecks;

  constructor(client: CloudflareClient) {
    super(client);
    this.aegis = new Aegis(client);
    this.fonts = new Fonts(client);
    this.googletaggateway = new GoogleTagGateway(client);
    this.originh2maxstreams = new OriginH2MaxStreams(client);
    this.originmaxhttpversion = new OriginMaxHTTPVersion(client);
    this.rum = new Rum(client);
    this.speedbrain = new SpeedBrain(client);
    this.sslautomaticmode = new SSLAutomaticMode(client);
    this.cachereserveclear = new CacheReserveClear(client);
    this.healthchecks = new Healthchecks(client);
  }

  /**
   * Lists, searches, sorts, and filters your zones. Listing zones across more than 500 accounts is currently not allowed.
   *
   * @see zones-get
   */
  async list(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/zones`, {
      query: params,
    });
  }

  /**
   * Create Zone
   *
   * @see zones-post
   */
  async createZonesPost(): Promise<unknown> {
    return this._client.post<unknown>(`/zones`);
  }

  /**
   * Deletes an existing zone.
   *
   * @see zones-0-delete
   */
  async deleteZones(zoneId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}`);
  }

  /**
   * Zone Details
   *
   * @see zones-0-get
   */
  async getZones(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}`);
  }

  /**
   * Edits a zone. Only one zone property can be changed at a time.
   *
   * @see zones-0-patch
   */
  async editZones(zoneId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/zones/${zoneId}`);
  }

  /**
   * Triggeres a new activation check for a PENDING Zone. This can be triggered every 5 min for paygo/ent customers, every hour for FREE Zones.
   *
   * @see put-zones-zone_id-activation_check
   */
  async updateIdActivation(zoneId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/activation_check`);
  }

  /**
   * Lists available plans the zone can subscribe to.
   *
   * @see zone-rate-plan-list-available-plans
   */
  async listAvailablePlans(zoneId: string): Promise<components['schemas']['bill-subs-api_available-rate-plan'][]> {
    return this._client.get<components['schemas']['bill-subs-api_available-rate-plan'][]>(
      `/zones/${zoneId}/available_plans`,
    );
  }

  /**
   * Details of the available plan that the zone can subscribe to.
   *
   * @see zone-rate-plan-available-plan-details
   */
  async getPlanDetails(
    planIdentifier: string,
    zoneId: string,
  ): Promise<components['schemas']['bill-subs-api_available-rate-plan']> {
    return this._client.get<components['schemas']['bill-subs-api_available-rate-plan']>(
      `/zones/${zoneId}/available_plans/${planIdentifier}`,
    );
  }

  /**
   * Lists all rate plans the zone can subscribe to.
   *
   * @see zone-rate-plan-list-available-rate-plans
   */
  async listRatePlans(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/available_rate_plans`);
  }

  /**
   * List zone environments
   *
   * @see zonesEnvironmentsList
   */
  async listZonesEnvironments(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/environments`);
  }

  /**
   * Partially update zone environments
   *
   * @see zonesEnvironmentsEdit
   */
  async editZonesEnvironments(zoneId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/zones/${zoneId}/environments`);
  }

  /**
   * Create zone environments
   *
   * @see zonesEnvironmentsCreate
   */
  async createZonesEnvironments(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/environments`);
  }

  /**
   * Upsert zone environments
   *
   * @see zonesEnvironmentsUpdate
   */
  async updateZonesEnvironments(zoneId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/environments`);
  }

  /**
   * Delete zone environment
   *
   * @see zonesEnvironmentsDelete
   */
  async deleteZonesEnvironments(zoneId: string, environmentId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/environments/${environmentId}`);
  }

  /**
   * Roll back zone environment
   *
   * @see zonesEnvironmentsRollback
   */
  async rollback(zoneId: string, environmentId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/environments/${environmentId}/rollback`);
  }

  /**
   * Stop enforcement of a zone hold on the zone, permanently or temporarily, allowing the creation and activation of zones with this zone's hostname.
   *
   * @see zones-0-hold-delete
   */
  async deleteZonesHold(zoneId: string, params?: Record<string, unknown>): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/hold`, {
      query: params,
    });
  }

  /**
   * Retrieve whether the zone is subject to a zone hold, and metadata about the hold.
   *
   * @see zones-0-hold-get
   */
  async getZonesHold(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/hold`);
  }

  /**
   * Update the `hold_after` and/or `include_subdomains` values on an existing zone hold. The hold is enabled if the `hold_after` date-time value is in the past.
   *
   * @see zones-0-hold-patch
   */
  async editZonesHold(zoneId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/zones/${zoneId}/hold`);
  }

  /**
   * Enforce a zone hold on the zone, blocking the creation and activation of zones with this zone's hostname.
   *
   * @see zones-0-hold-post
   */
  async createHoldPost(zoneId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/hold`, {
      query: params,
    });
  }

  /**
   * Available settings for your user in relation to a zone.
   *
   * @see zone-settings-get-all-zone-settings
   */
  async getZoneSettings(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/settings`);
  }

  /**
   * Edit settings for a zone.
   *
   * @see zone-settings-edit-zone-settings-info
   */
  async editSettingsInfo(zoneId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/zones/${zoneId}/settings`);
  }

  /**
   * Fetch a single zone setting by name
   *
   * @see zone-settings-get-single-setting
   */
  async getSingleSetting(zoneId: string, settingId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/settings/${settingId}`);
  }

  /**
   * Updates a single zone setting by the identifier
   *
   * @see zone-settings-edit-single-setting
   */
  async editSingleSetting(zoneId: string, settingId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/zones/${zoneId}/settings/${settingId}`);
  }

  /**
   * Retrieve Smart Shield Settings.
   *
   * @see smart-shield-get-settings
   */
  async getShieldSettings(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/smart_shield`);
  }

  /**
   * Set Smart Shield Settings.
   *
   * @see smart-shield-patch-settings
   */
  async editShieldSettings(zoneId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/zones/${zoneId}/smart_shield`);
  }

  /**
   * Lists zone subscription details.
   *
   * @see zone-subscription-zone-subscription-details
   */
  async getSubscriptionDetails(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/subscription`);
  }

  /**
   * Create a zone subscription, either plan or add-ons.
   *
   * @see zone-subscription-create-zone-subscription
   */
  async createZoneSubscription(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/subscription`);
  }

  /**
   * Updates zone subscriptions, either plan or add-ons.
   *
   * @see zone-subscription-update-zone-subscription
   */
  async updateZoneSubscription(zoneId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/subscription`);
  }
}
