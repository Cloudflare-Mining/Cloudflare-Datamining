/**
 * hostnames resource
 * @generated from apis/hostnames/schema.ts
 *
 * Per-hostname TLS settings — minimum TLS version, ciphers, and certificate pinning overrides
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Individual hostname TLS configuration overrides (min TLS version, ciphers, HTTP/2, etc.)
 */
export class Settings extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * List the requested TLS setting for the hostnames under this zone.
   *
   * @see per-hostname-tls-settings-list
   */
  async tlsGet(zoneId: string, settingId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/hostnames/settings/${settingId}`);
  }

  /**
   * Update the tls setting value for the hostname.
   *
   * @see per-hostname-tls-settings-put
   */
  async tlsUpdate(zoneId: string, settingId: string, hostname: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/hostnames/settings/${settingId}/${hostname}`);
  }

  /**
   * Delete the tls setting value for the hostname.
   *
   * @see per-hostname-tls-settings-delete
   */
  async tlsDelete(zoneId: string, settingId: string, hostname: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/hostnames/settings/${settingId}/${hostname}`);
  }
}

/**
 * Settings (additional) operations
 */
export class SettingsExtra extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Get the requested TLS setting for the hostname.
   *
   * @see per-hostname-tls-settings-get
   */
  async get(zoneId: string, settingId: string, hostname: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/hostnames/settings/${settingId}/${hostname}`);
  }
}

/**
 * Per-hostname TLS settings — minimum TLS version, ciphers, and certificate pinning overrides
 */
export class Hostnames extends APIResource {
  readonly settings: Settings;
  readonly settingsextra: SettingsExtra;

  constructor(client: CloudflareClient) {
    super(client);
    this.settings = new Settings(client);
    this.settingsextra = new SettingsExtra(client);
  }
}
