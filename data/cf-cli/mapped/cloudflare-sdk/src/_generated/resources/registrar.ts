/**
 * registrar resource
 * @generated from apis/registrar/schema.ts
 *
 * Domain registration and transfer management through Cloudflare Registrar
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Registered domains — view details, update contacts, and configure auto-renewal and WHOIS privacy
 */
export class Domains extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * List domains handled by Registrar.
   *
   * @see registrar-domains-list-domains
   */
  async list(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/registrar/domains`);
  }

  /**
   * Show individual domain.
   *
   * @see registrar-domains-get-domain
   */
  async get(domainName: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/registrar/domains/${domainName}`);
  }

  /**
   * Update individual domain.
   *
   * @see registrar-domains-update-domain
   */
  async update(domainName: string, accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/registrar/domains/${domainName}`);
  }
}

/**
 * Domain registration and transfer management through Cloudflare Registrar
 */
export class Registrar extends APIResource {
  readonly domains: Domains;

  constructor(client: CloudflareClient) {
    super(client);
    this.domains = new Domains(client);
  }
}
