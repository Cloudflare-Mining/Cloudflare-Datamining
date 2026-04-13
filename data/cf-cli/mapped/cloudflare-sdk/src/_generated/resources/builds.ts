/**
 * builds resource
 * @generated from apis/builds/schema.ts
 *
 * Automated build and deployment pipeline for Workers — track builds, logs, and repo connections
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Account operations
 */
export class Account extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Retrieve account limits and usage information
   *
   * @see getAccountLimits
   */
  async limitsGet(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/builds/account/limits`);
  }
}

/**
 * Build job operations
 */
export class Jobs extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Retrieve builds for specific version IDs
   *
   * @see getBuildsByVersionIds
   */
  async getVersionIds(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/builds/builds`, {
      query: params,
    });
  }

  /**
   * Retrieve the most recent builds for multiple worker scripts
   *
   * @see getLatestBuildsByScripts
   */
  async latestGet(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/builds/builds/latest`, {
      query: params,
    });
  }

  /**
   * Retrieve detailed information about a specific build
   *
   * @see getBuildByUuid
   */
  async getByUuid(accountId: string, buildUuid: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/builds/builds/${buildUuid}`);
  }

  /**
   * Cancel a running or queued build
   *
   * @see cancelBuildByUuid
   */
  async cancelCancel(accountId: string, buildUuid: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/builds/builds/${buildUuid}/cancel`);
  }

  /**
   * Retrieve logs for a specific build with cursor-based pagination
   *
   * @see getBuildLogs
   */
  async logsGet(accountId: string, buildUuid: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/builds/builds/${buildUuid}/logs`, {
      query: params,
    });
  }
}

/**
 * Repos operations
 */
export class Repos extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Upsert a repository connection for CI/CD integration
   *
   * @see upsertRepoConnection
   */
  async connectionsUpdate(accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/builds/repos/connections`);
  }

  /**
   * Remove a repository connection
   *
   * @see deleteRepoConnection
   */
  async connectionsDelete(accountId: string, repoConnectionUuid: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/builds/repos/connections/${repoConnectionUuid}`);
  }

  /**
   * Analyze repository for automatic configuration detection
   *
   * @see getWorkerConfigAutofill
   */
  async configAutofillGet(
    accountId: string,
    providerType: string,
    providerAccountId: string,
    repoId: string,
    params?: Record<string, unknown>,
  ): Promise<unknown> {
    return this._client.get<unknown>(
      `/accounts/${accountId}/builds/repos/${providerType}/${providerAccountId}/${repoId}/config_autofill`,
      {
        query: params,
      },
    );
  }
}

/**
 * Tokens operations
 */
export class Tokens extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Get all build tokens with pagination
   *
   * @see listBuildTokens
   */
  async list(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/builds/tokens`, {
      query: params,
    });
  }

  /**
   * Create a new build authentication token
   *
   * @see createBuildToken
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/builds/tokens`);
  }

  /**
   * Remove a build authentication token
   *
   * @see deleteBuildToken
   */
  async delete(accountId: string, buildTokenUuid: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/builds/tokens/${buildTokenUuid}`);
  }
}

/**
 * Triggers operations
 */
export class Triggers extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Create a new CI/CD trigger
   *
   * @see createTrigger
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/builds/triggers`);
  }

  /**
   * Remove a CI/CD trigger
   *
   * @see deleteTrigger
   */
  async delete(accountId: string, triggerUuid: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/builds/triggers/${triggerUuid}`);
  }

  /**
   * Update an existing CI/CD trigger
   *
   * @see updateTrigger
   */
  async update(accountId: string, triggerUuid: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/builds/triggers/${triggerUuid}`);
  }

  /**
   * Trigger a manual build for a specific trigger
   *
   * @see createManualBuild
   */
  async buildsCreate(accountId: string, triggerUuid: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/builds/triggers/${triggerUuid}/builds`);
  }

  /**
   * Get all environment variables for a trigger
   *
   * @see listEnvironmentVariables
   */
  async environmentVariablesList(accountId: string, triggerUuid: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/builds/triggers/${triggerUuid}/environment_variables`);
  }

  /**
   * Create or update environment variables for a trigger
   *
   * @see upsertEnvironmentVariables
   */
  async environmentVariablesEdit(accountId: string, triggerUuid: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/builds/triggers/${triggerUuid}/environment_variables`);
  }

  /**
   * Remove a specific environment variable from a trigger
   *
   * @see deleteEnvironmentVariable
   */
  async environmentVariablesDelete(
    accountId: string,
    triggerUuid: string,
    environmentVariableKey: string,
  ): Promise<void> {
    return this._client.delete<void>(
      `/accounts/${accountId}/builds/triggers/${triggerUuid}/environment_variables/${environmentVariableKey}`,
    );
  }

  /**
   * Clear the build cache for a specific trigger
   *
   * @see purgeBuildCache
   */
  async purgeBuildCachePurge(accountId: string, triggerUuid: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/builds/triggers/${triggerUuid}/purge_build_cache`);
  }
}

/**
 * Workers operations
 */
export class Workers extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Get all builds for a specific worker script with pagination
   *
   * @see listBuildsByScript
   */
  async buildsList(accountId: string, externalScriptId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/builds/workers/${externalScriptId}/builds`, {
      query: params,
    });
  }

  /**
   * Get all triggers for a specific worker script
   *
   * @see listTriggersByScript
   */
  async triggersList(accountId: string, externalScriptId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/builds/workers/${externalScriptId}/triggers`);
  }
}

/**
 * Automated build and deployment pipeline for Workers — track builds, logs, and repo connections
 */
export class Builds extends APIResource {
  readonly account: Account;
  readonly jobs: Jobs;
  readonly repos: Repos;
  readonly tokens: Tokens;
  readonly triggers: Triggers;
  readonly workers: Workers;

  constructor(client: CloudflareClient) {
    super(client);
    this.account = new Account(client);
    this.jobs = new Jobs(client);
    this.repos = new Repos(client);
    this.tokens = new Tokens(client);
    this.triggers = new Triggers(client);
    this.workers = new Workers(client);
  }
}
