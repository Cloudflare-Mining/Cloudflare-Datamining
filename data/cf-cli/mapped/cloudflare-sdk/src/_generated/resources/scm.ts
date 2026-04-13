/**
 * scm resource
 * @generated from apis/scm/schema.ts
 *
 * Source code management connections — link Git providers, browse repos, create pull requests, and manage grants
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Manage SCM provider connections for linking Git repositories to your Cloudflare account
 */
export class Connections extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Returns all SCM provider connections for the authenticated user. Response shape varies by api-version header.
   *
   * @see scm-list-connections
   */
  async list(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/scm/connections`, {
      query: params,
    });
  }

  /**
   * Delete an SCM provider connection, optionally revoking the provider token.
   *
   * @see scm-delete-connection
   */
  async delete(accountId: string, connectionid: string, params?: Record<string, unknown>): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/scm/connections/${connectionid}`, {
      query: params,
    });
  }

  /**
   * Create a pull request on the SCM provider via the specified connection.
   *
   * @see scm-create-pull-request
   */
  async createPullRequest(accountId: string, connectionid: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/scm/connections/${connectionid}/pulls`);
  }

  /**
   * Returns repositories accessible via the specified SCM connection.
   *
   * @see scm-list-repositories
   */
  async listRepos(accountId: string, connectionid: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/scm/connections/${connectionid}/repos`, {
      query: params,
    });
  }

  /**
   * Retrieve a fresh access token for the specified SCM connection.
   *
   * @see scm-get-access-token
   */
  async getToken(accountId: string, connectionid: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/scm/connections/${connectionid}/token`);
  }
}

/**
 * Repository connection grants and webhook subscriptions for automated workflows
 */
export class Grants extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Creates or updates a repository connection grant with an associated webhook subscription.
   *
   * @see scm-create-grant
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/scm/grants`);
  }

  /**
   * Returns repository branches accessible via a repository connection grant.
   *
   * @see scm-list-branches-by-grant
   */
  async listBranches(accountId: string, grantid: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/scm/grants/${grantid}/branches`, {
      query: params,
    });
  }
}

/**
 * Source code management connections — link Git providers, browse repos, create pull requests, and manage grants
 */
export class Scm extends APIResource {
  readonly connections: Connections;
  readonly grants: Grants;

  constructor(client: CloudflareClient) {
    super(client);
    this.connections = new Connections(client);
    this.grants = new Grants(client);
  }
}
