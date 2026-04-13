/**
 * page-shield resource
 * @generated from apis/page-shield/schema.ts
 *
 * Client-side security — monitor JavaScript, connections, and cookies on your pages for supply-chain attacks
 */
import type { components } from 'cloudflare-openapi';
import { APIResource, CloudflareClient } from '../../client.js';

// Type aliases from OpenAPI components
export type PageShieldGetZoneSettingsResponse = components['schemas']['page-shield_get-zone-settings-response'];
export type PageShieldUpdateZoneSettingsResponse = components['schemas']['page-shield_update-zone-settings-response'];

/**
 * Content Security Policies that control which scripts and connections are allowed on your pages
 */
export class Policies extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists all Page Shield policies.
   *
   * @see page-shield-list-policies
   */
  async list(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/page_shield/policies`);
  }

  /**
   * Fetches a Page Shield policy by ID.
   *
   * @see page-shield-get-policy
   */
  async get(zoneId: string, policyId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/page_shield/policies/${policyId}`);
  }

  /**
   * Create a Page Shield policy.
   *
   * @see page-shield-create-policy
   */
  async create(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/page_shield/policies`);
  }

  /**
   * Update a Page Shield policy by ID.
   *
   * @see page-shield-update-policy
   */
  async update(zoneId: string, policyId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/page_shield/policies/${policyId}`);
  }

  /**
   * Delete a Page Shield policy by ID.
   *
   * @see page-shield-delete-policy
   */
  async delete(zoneId: string, policyId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/page_shield/policies/${policyId}`);
  }
}

/**
 * Third-party connections made by scripts on your pages — track data exfiltration risks
 */
export class Connections extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists all connections detected by Page Shield.
   *
   * @see page-shield-list-connections
   */
  async list(zoneId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/page_shield/connections`, {
      query: params,
    });
  }

  /**
   * Fetches a connection detected by Page Shield by connection ID.
   *
   * @see page-shield-get-connection
   */
  async get(zoneId: string, connectionId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/page_shield/connections/${connectionId}`);
  }
}

/**
 * JavaScript files detected on your pages with change tracking and malicious code detection
 */
export class Scripts extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists all scripts detected by Page Shield.
   *
   * @see page-shield-list-scripts
   */
  async list(zoneId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/page_shield/scripts`, {
      query: params,
    });
  }

  /**
   * Fetches a script detected by Page Shield by script ID.
   *
   * @see page-shield-get-script
   */
  async get(zoneId: string, scriptId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/page_shield/scripts/${scriptId}`);
  }
}

/**
 * Cookies set by scripts on your pages with classification and same-site attribute tracking
 */
export class Cookies extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists all cookies collected by Page Shield.
   *
   * @see page-shield-list-cookies
   */
  async list(zoneId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/page_shield/cookies`, {
      query: params,
    });
  }

  /**
   * Fetches a cookie collected by Page Shield by cookie ID.
   *
   * @see page-shield-get-cookie
   */
  async get(zoneId: string, cookieId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/page_shield/cookies/${cookieId}`);
  }
}

/**
 * Client-side security — monitor JavaScript, connections, and cookies on your pages for supply-chain attacks
 */
export class PageShield extends APIResource {
  readonly policies: Policies;
  readonly connections: Connections;
  readonly scripts: Scripts;
  readonly cookies: Cookies;

  constructor(client: CloudflareClient) {
    super(client);
    this.policies = new Policies(client);
    this.connections = new Connections(client);
    this.scripts = new Scripts(client);
    this.cookies = new Cookies(client);
  }

  /**
   * Fetches the Page Shield settings.
   *
   * @see page-shield-get-settings
   */
  async get(zoneId: string): Promise<components['schemas']['page-shield_get-zone-settings-response']> {
    return this._client.get<components['schemas']['page-shield_get-zone-settings-response']>(
      `/zones/${zoneId}/page_shield`,
    );
  }

  /**
   * Updates Page Shield settings.
   *
   * @see page-shield-update-settings
   */
  async update(zoneId: string): Promise<components['schemas']['page-shield_update-zone-settings-response']> {
    return this._client.put<components['schemas']['page-shield_update-zone-settings-response']>(
      `/zones/${zoneId}/page_shield`,
    );
  }
}
