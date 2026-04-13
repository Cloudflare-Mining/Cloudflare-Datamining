/**
 * turnstile resource
 * @generated from apis/turnstile/schema.ts
 *
 * CAPTCHA-free bot verification widgets that protect forms and APIs without degrading user experience
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Turnstile widget configurations — site keys, secret rotation, and challenge mode settings
 */
export class Widgets extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists all turnstile widgets of an account.
   *
   * @see accounts-turnstile-widgets-list
   */
  async list(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/challenges/widgets`);
  }

  /**
   * Show a single challenge widget configuration.
   *
   * @see accounts-turnstile-widget-get
   */
  async get(accountId: string, sitekey: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/challenges/widgets/${sitekey}`);
  }

  /**
   * Lists challenge widgets.
   *
   * @see accounts-turnstile-widget-create
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/challenges/widgets`);
  }

  /**
   * Update the configuration of a widget.
   *
   * @see accounts-turnstile-widget-update
   */
  async update(accountId: string, sitekey: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/challenges/widgets/${sitekey}`);
  }

  /**
   * Destroy a Turnstile Widget.
   *
   * @see accounts-turnstile-widget-delete
   */
  async delete(accountId: string, sitekey: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/challenges/widgets/${sitekey}`);
  }

  /**
   * Generate a new secret key for this widget. If `invalidate_immediately` is set to `false`, the previous secret remains valid for 2 hours. Note that secrets cannot be rotated again during the grace period.
   *
   * @see accounts-turnstile-widget-rotate-secret
   */
  async rotateSecret(accountId: string, sitekey: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/challenges/widgets/${sitekey}/rotate_secret`);
  }
}

/**
 * CAPTCHA-free bot verification widgets that protect forms and APIs without degrading user experience
 */
export class Turnstile extends APIResource {
  readonly widgets: Widgets;

  constructor(client: CloudflareClient) {
    super(client);
    this.widgets = new Widgets(client);
  }
}
