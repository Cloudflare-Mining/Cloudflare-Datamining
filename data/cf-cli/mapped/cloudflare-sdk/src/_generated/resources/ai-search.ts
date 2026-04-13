/**
 * ai-search resource
 * @generated from apis/ai-search/schema.ts
 *
 * Managed search-as-a-service — crawl, index, and query content with AI-powered relevance and chat completions
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Search instances that hold indexed content — create, query, manage items, and run ingestion jobs
 */
export class Instances extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * List instances.
   *
   * @see ai-search-list-instances
   */
  async list(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/ai-search/instances`, {
      query: params,
    });
  }

  /**
   * Create a new instances.
   *
   * @see ai-search-create-instances
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai-search/instances`);
  }

  /**
   * Read instances.
   *
   * @see ai-search-fetch-instances
   */
  async read(id: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/ai-search/instances/${id}`);
  }

  /**
   * Update instances.
   *
   * @see ai-search-update-instances
   */
  async update(accountId: string, id: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/ai-search/instances/${id}`);
  }

  /**
   * Delete instances.
   *
   * @see ai-search-delete-instances
   */
  async delete(id: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/ai-search/instances/${id}`);
  }

  /**
   * Retrieves usage statistics for AI Search instances.
   *
   * @see ai-search-stats
   */
  async stats(id: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/ai-search/instances/${id}/stats`);
  }

  /**
   * Executes a semantic search query against an AI Search instance to find relevant indexed content.
   *
   * @see ai-search-instance-search
   */
  async search(id: string, accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai-search/instances/${id}/search`);
  }

  /**
   * Performs a chat completion request against an AI Search instance, using indexed content as context for generating responses.
   *
   * @see ai-search-instance-chat-completion
   */
  async chatCompletions(id: string, accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai-search/instances/${id}/chat/completions`);
  }

  /**
   * Lists indexing jobs for an AI Search instance.
   *
   * @see ai-search-instance-list-jobs
   */
  async jobsList(id: string, accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/ai-search/instances/${id}/jobs`, {
      query: params,
    });
  }

  /**
   * Creates a new indexing job for an AI Search instance.
   *
   * @see ai-search-instance-create-job
   */
  async jobsCreate(id: string, accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai-search/instances/${id}/jobs`);
  }

  /**
   * Retrieves details for a specific AI Search indexing job.
   *
   * @see ai-search-instance-get-job
   */
  async jobsGet(id: string, jobId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/ai-search/instances/${id}/jobs/${jobId}`);
  }

  /**
   * Lists log entries for an AI Search indexing job.
   *
   * @see ai-search-instance-list-job-logs
   */
  async jobsLogs(id: string, jobId: string, accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/ai-search/instances/${id}/jobs/${jobId}/logs`, {
      query: params,
    });
  }
}

/**
 * Scoped authentication tokens that grant access to specific AI Search instances
 */
export class Tokens extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * List tokens.
   *
   * @see ai-search-list-tokens
   */
  async list(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/ai-search/tokens`, {
      query: params,
    });
  }

  /**
   * Create a new tokens.
   *
   * @see ai-search-create-tokens
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai-search/tokens`);
  }

  /**
   * Read tokens.
   *
   * @see ai-search-fetch-tokens
   */
  async read(accountId: string, id: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/ai-search/tokens/${id}`);
  }

  /**
   * Update tokens.
   *
   * @see ai-search-update-tokens
   */
  async update(accountId: string, id: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/ai-search/tokens/${id}`);
  }

  /**
   * Delete tokens.
   *
   * @see ai-search-delete-tokens
   */
  async delete(accountId: string, id: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/ai-search/tokens/${id}`);
  }
}

/**
 * Instances (additional) operations
 */
export class InstancesExtra extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Updates the status of an AI Search indexing job.
   *
   * @see ai-search-instance-change-job-status
   */
  async jobsEdit(id: string, jobId: string, accountId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/ai-search/instances/${id}/jobs/${jobId}`);
  }
}

/**
 * Managed search-as-a-service — crawl, index, and query content with AI-powered relevance and chat completions
 */
export class AISearch extends APIResource {
  readonly instances: Instances;
  readonly tokens: Tokens;
  readonly instancesextra: InstancesExtra;

  constructor(client: CloudflareClient) {
    super(client);
    this.instances = new Instances(client);
    this.tokens = new Tokens(client);
    this.instancesextra = new InstancesExtra(client);
  }
}
