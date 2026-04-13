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
 * Operations operations
 */
export class Operations extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Returns the current status of an async operation.
   *
   * @see registrar-domain-registration-lro-get-operation
   */
  async get(accountId: string, operationId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/lro-registrar/operations/${operationId}`);
  }
}

/**
 * Registrations operations
 */
export class Registrations extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Starts a domain registration workflow. This endpoint is async-by-default. If `Prefer: wait=N` is provided, the server may wait up to N seconds for completion.
   *
   * @see registrar-domain-registration-lro-create
   */
  async createRegistrationLro(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/lro-registrar/registrations`);
  }

  /**
   * Updates an existing domain registration. This endpoint is async-by-default. Supports updating: - `auto_renew` - Enable/disable automatic renewal - `privacy_enabled` - Enable/disable WHOIS privacy - `locked` - Lock/unlock domain for transfer - `dns_settings` - Change nameservers or DNS type All updates are atomic - if any field fails, the entire update is rolled back. Simple updates (e.g., `auto_renew`) may complete immediately with `completed: true`. Complex updates (e.g., `dns_settings`) may require polling. If `Prefer: wait=N` is provided, the server may wait up to N seconds for completion.
   *
   * @see registrar-domain-registration-lro-update
   */
  async editRegistrationLro(accountId: string, domainName: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/lro-registrar/registrations/${domainName}`);
  }

  /**
   * Returns all domain registrations owned by the account. Results are paginated using cursor-based pagination.
   *
   * @see registrar-domain-registration-list
   */
  async list(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/registrar/registrations`, {
      query: params,
    });
  }

  /**
   * Starts a domain registration workflow. By default, the server holds the connection for up to 10 seconds while the registration completes. Most registrations finish within this window and return `201 Created` with a completed workflow status. If the registration is still processing after 10 seconds, the server returns `202 Accepted`. Poll the URL in `links.self` to track progress. To skip the wait and receive an immediate `202`, send `Prefer: respond-async`.
   *
   * @see registrar-domain-registration-create
   */
  async createDomainRegistration(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/registrar/registrations`);
  }

  /**
   * Returns the current state of a domain registration. This is the canonical read endpoint for a domain you own. It returns the full registration resource including current settings, expiration, and DNS configuration.
   *
   * @see registrar-domain-registration-get
   */
  async get(accountId: string, domainName: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/registrar/registrations/${domainName}`);
  }

  /**
   * Updates an existing domain registration. By default, the server holds the connection for up to 10 seconds while the update completes. Most updates finish within this window and return `200 OK` with a completed workflow status. If the update is still processing after 10 seconds, the server returns `202 Accepted`. Poll the URL in `links.self` to track progress. To skip the wait and receive an immediate `202`, send `Prefer: respond-async`. Supports updating: - `auto_renew` — Enable/disable automatic renewal - `privacy_enabled` — Enable/disable WHOIS privacy - `locked` — Lock/unlock domain for transfer - `dns_settings` — Change nameservers or DNS type All updates are atomic — if any field fails, the entire update is rolled back.
   *
   * @see registrar-domain-registration-update
   */
  async editDomainRegistration(accountId: string, domainName: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/registrar/registrations/${domainName}`);
  }

  /**
   * Returns the current status of a domain registration workflow. Use this endpoint to poll for completion when the POST response returned `202 Accepted`. The URL is provided in the `links.self` field of the workflow status response. Supports long-polling via `Prefer: wait=N` — the server will hold the connection for up to N seconds and respond immediately when the workflow completes or the timeout expires, whichever comes first.
   *
   * @see registrar-domain-registration-get-status
   */
  async registrationStatusGet(accountId: string, domainName: string): Promise<unknown> {
    return this._client.get<unknown>(
      `/accounts/${accountId}/registrar/registrations/${domainName}/registration-status`,
    );
  }

  /**
   * Returns the current status of a domain update workflow. Use this endpoint to poll for completion when the PATCH response returned `202 Accepted`. The URL is provided in the `links.self` field of the workflow status response. Supports long-polling via `Prefer: wait=N` — the server will hold the connection for up to N seconds and respond immediately when the workflow completes or the timeout expires, whichever comes first.
   *
   * @see registrar-domain-registration-get-update-status
   */
  async updateStatusGet(accountId: string, domainName: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/registrar/registrations/${domainName}/update-status`);
  }
}

/**
 * Domain registration and transfer management through Cloudflare Registrar
 */
export class Registrar extends APIResource {
  readonly domains: Domains;
  readonly operations: Operations;
  readonly registrations: Registrations;

  constructor(client: CloudflareClient) {
    super(client);
    this.domains = new Domains(client);
    this.operations = new Operations(client);
    this.registrations = new Registrations(client);
  }
}
