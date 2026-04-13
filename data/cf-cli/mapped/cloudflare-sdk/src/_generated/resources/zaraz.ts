/**
 * zaraz resource
 * @generated from apis/zaraz/schema.ts
 *
 * Server-side tag manager — load third-party tools (analytics, pixels, etc.) from Cloudflare's edge without client-side JS
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Full Zaraz configuration including tools, triggers, and variables for the zone
 */
export class Config extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Gets latest Zaraz configuration for a zone. It can be preview or published configuration, whichever was the last updated. Secret variables values will not be included.
   *
   * @see get-zones-zone_identifier-zaraz-config
   */
  async get(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/settings/zaraz/config`);
  }

  /**
   * Updates Zaraz configuration for a zone.
   *
   * @see put-zones-zone_identifier-zaraz-config
   */
  async update(zoneId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/settings/zaraz/config`);
  }
}

/**
 * Default Zaraz configuration template used as a starting point for new zones
 */
export class Default extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Gets default Zaraz configuration for a zone.
   *
   * @see get-zones-zone_identifier-zaraz-default
   */
  async get(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/settings/zaraz/default`);
  }
}

/**
 * Export the current Zaraz configuration as a portable JSON document
 */
export class Export extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Exports full current published Zaraz configuration for a zone, secret variables included.
   *
   * @see get-zones-zone_identifier-zaraz-export
   */
  async get(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/settings/zaraz/export`);
  }
}

/**
 * Configuration version history — browse and restore previous Zaraz configurations
 */
export class History extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists a history of published Zaraz configuration records for a zone.
   *
   * @see get-zones-zone_identifier-zaraz-history
   */
  async list(zoneId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/settings/zaraz/history`, {
      query: params,
    });
  }

  /**
   * Restores a historical published Zaraz configuration by ID for a zone.
   *
   * @see put-zones-zone_identifier-zaraz-history
   */
  async update(zoneId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/settings/zaraz/history`);
  }

  /**
   * Gets a history of published Zaraz configurations by ID(s) for a zone.
   *
   * @see get-zones-zone_identifier-zaraz-config-history
   */
  async configsGet(zoneId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/settings/zaraz/history/configs`, {
      query: params,
    });
  }
}

/**
 * Publish pending Zaraz configuration changes to make them live on the zone
 */
export class Publish extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Publish current Zaraz preview configuration for a zone.
   *
   * @see post-zones-zone_identifier-zaraz-publish
   */
  async create(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/settings/zaraz/publish`);
  }
}

/**
 * Workflow state for Zaraz configuration changes (draft vs. published)
 */
export class Workflow extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Gets Zaraz workflow for a zone.
   *
   * @see get-zones-zone_identifier-zaraz-workflow
   */
  async get(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/settings/zaraz/workflow`);
  }
}

/**
 * Server-side tag manager — load third-party tools (analytics, pixels, etc.) from Cloudflare's edge without client-side JS
 */
export class Zaraz extends APIResource {
  readonly config: Config;
  readonly default: Default;
  readonly export: Export;
  readonly history: History;
  readonly publish: Publish;
  readonly workflow: Workflow;

  constructor(client: CloudflareClient) {
    super(client);
    this.config = new Config(client);
    this.default = new Default(client);
    this.export = new Export(client);
    this.history = new History(client);
    this.publish = new Publish(client);
    this.workflow = new Workflow(client);
  }

  /**
   * Updates Zaraz workflow for a zone.
   *
   * @see put-zones-zone_identifier-zaraz-workflow
   */
  async update(zoneId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/settings/zaraz/workflow`);
  }
}
