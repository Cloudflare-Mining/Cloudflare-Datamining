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
 * Namespaces for organizing and managing AI Search instances, items, and jobs
 */
export class Namespaces extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * List namespaces.
   *
   * @see ai-search-list-namespaces
   */
  async list(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/ai-search/namespaces`, {
      query: params,
    });
  }

  /**
   * Create a new namespaces.
   *
   * @see ai-search-create-namespaces
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai-search/namespaces`);
  }

  /**
   * Read namespace.
   *
   * @see ai-search-fetch-namespace
   */
  async get(name: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/ai-search/namespaces/${name}`);
  }

  /**
   * Update namespace.
   *
   * @see ai-search-update-namespace
   */
  async update(accountId: string, name: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/ai-search/namespaces/${name}`);
  }

  /**
   * Delete namespace.
   *
   * @see ai-search-delete-namespace
   */
  async delete(name: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/ai-search/namespaces/${name}`);
  }

  /**
   * Moves an instance from its current namespace to the specified target namespace. Use 'default' as new_namespace to move the instance back to the default namespace. Fails with 400 if the target namespace already has an instance with the same id (ids must be unique within a namespace — the same id can exist in different namespaces).
   *
   * @see ai-search-move-instance
   */
  async moveInstance(accountId: string, name: string, id: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/ai-search/namespaces/${name}/instances/${id}`);
  }

  /**
   * List instances.
   *
   * @see ai-search-namespace-list-instances
   */
  async instancesList(accountId: string, name: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/ai-search/namespaces/${name}/instances`, {
      query: params,
    });
  }

  /**
   * Create a new instances.
   *
   * @see ai-search-namespace-create-instances
   */
  async instancesCreate(accountId: string, name: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai-search/namespaces/${name}/instances`);
  }

  /**
   * Read instances.
   *
   * @see ai-search-namespace-fetch-instances
   */
  async instancesGet(id: string, accountId: string, name: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/ai-search/namespaces/${name}/instances/${id}`);
  }

  /**
   * Update instances.
   *
   * @see ai-search-namespace-update-instances
   */
  async instancesUpdate(accountId: string, id: string, name: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/ai-search/namespaces/${name}/instances/${id}`);
  }

  /**
   * Delete instances.
   *
   * @see ai-search-namespace-delete-instances
   */
  async instancesDelete(id: string, accountId: string, name: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/ai-search/namespaces/${name}/instances/${id}`);
  }

  /**
   * Performs a chat completion request against an AI Search instance, using indexed content as context for generating responses.
   *
   * @see ai-search-namespace-instance-chat-completion
   */
  async instancesChatCompletions(id: string, accountId: string, name: string): Promise<unknown> {
    return this._client.post<unknown>(
      `/accounts/${accountId}/ai-search/namespaces/${name}/instances/${id}/chat/completions`,
    );
  }

  /**
   * Executes a semantic search query against an AI Search instance to find relevant indexed content.
   *
   * @see ai-search-namespace-instance-search
   */
  async instancesSearch(id: string, accountId: string, name: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai-search/namespaces/${name}/instances/${id}/search`);
  }

  /**
   * Retrieves usage statistics for AI Search instances.
   *
   * @see ai-search-namespace-stats
   */
  async stats(id: string, accountId: string, name: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/ai-search/namespaces/${name}/instances/${id}/stats`);
  }

  /**
   * Lists indexed items in an AI Search instance.
   *
   * @see ai-search-namespace-instance-list-items
   */
  async instancesItemsList(
    id: string,
    accountId: string,
    name: string,
    params?: Record<string, unknown>,
  ): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/ai-search/namespaces/${name}/instances/${id}/items`, {
      query: params,
    });
  }

  /**
   * Uploads a file to a managed AI Search instance via multipart/form-data (max 4MB).
   *
   * @see ai-search-namespace-instance-upload-item
   */
  async instancesItemsUpload(id: string, accountId: string, name: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai-search/namespaces/${name}/instances/${id}/items`);
  }

  /**
   * Creates or updates an indexed item in an AI Search instance.
   *
   * @see ai-search-namespace-instance-create-or-update-item
   */
  async instancesItemsCreateOrUpdate(id: string, accountId: string, name: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/ai-search/namespaces/${name}/instances/${id}/items`);
  }

  /**
   * Deletes a file from a managed AI Search instance and triggers a reindex.
   *
   * @see ai-search-namespace-instance-delete-item
   */
  async instancesItemsDelete(id: string, itemId: string, accountId: string, name: string): Promise<void> {
    return this._client.delete<void>(
      `/accounts/${accountId}/ai-search/namespaces/${name}/instances/${id}/items/${itemId}`,
    );
  }

  /**
   * Retrieves a specific indexed item from an AI Search instance.
   *
   * @see ai-search-namespace-instance-get-item
   */
  async instancesItemsGet(id: string, itemId: string, accountId: string, name: string): Promise<unknown> {
    return this._client.get<unknown>(
      `/accounts/${accountId}/ai-search/namespaces/${name}/instances/${id}/items/${itemId}`,
    );
  }

  /**
   * Syncs an item to an AI Search instance index.
   *
   * @see ai-search-namespace-instance-sync-item
   */
  async instancesItemsSync(id: string, itemId: string, accountId: string, name: string): Promise<unknown> {
    return this._client.patch<unknown>(
      `/accounts/${accountId}/ai-search/namespaces/${name}/instances/${id}/items/${itemId}`,
    );
  }

  /**
   * Lists chunks for a specific item in an AI Search instance, including their text content.
   *
   * @see ai-search-namespace-instance-list-item-chunks
   */
  async instancesItemsChunksList(
    id: string,
    itemId: string,
    accountId: string,
    name: string,
    params?: Record<string, unknown>,
  ): Promise<unknown> {
    return this._client.get<unknown>(
      `/accounts/${accountId}/ai-search/namespaces/${name}/instances/${id}/items/${itemId}/chunks`,
      {
        query: params,
      },
    );
  }

  /**
   * Downloads the raw file content for a specific item from the managed AI Search instance storage.
   *
   * @see ai-search-namespace-instance-get-item-content
   */
  async instancesItemsContentGet(id: string, itemId: string, accountId: string, name: string): Promise<unknown> {
    return this._client.get<unknown>(
      `/accounts/${accountId}/ai-search/namespaces/${name}/instances/${id}/items/${itemId}/download`,
    );
  }

  /**
   * Lists processing logs for a specific item in an AI Search instance.
   *
   * @see ai-search-namespace-instance-logs-item
   */
  async instancesItemsLogs(
    id: string,
    itemId: string,
    accountId: string,
    name: string,
    params?: Record<string, unknown>,
  ): Promise<unknown> {
    return this._client.get<unknown>(
      `/accounts/${accountId}/ai-search/namespaces/${name}/instances/${id}/items/${itemId}/logs`,
      {
        query: params,
      },
    );
  }

  /**
   * Lists indexing jobs for an AI Search instance.
   *
   * @see ai-search-namespace-instance-list-jobs
   */
  async instancesJobsList(
    id: string,
    accountId: string,
    name: string,
    params?: Record<string, unknown>,
  ): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/ai-search/namespaces/${name}/instances/${id}/jobs`, {
      query: params,
    });
  }

  /**
   * Creates a new indexing job for an AI Search instance.
   *
   * @see ai-search-namespace-instance-create-job
   */
  async instancesJobsCreate(id: string, accountId: string, name: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai-search/namespaces/${name}/instances/${id}/jobs`);
  }

  /**
   * Retrieves details for a specific AI Search indexing job.
   *
   * @see ai-search-namespace-instance-get-job
   */
  async instancesJobsGet(id: string, jobId: string, accountId: string, name: string): Promise<unknown> {
    return this._client.get<unknown>(
      `/accounts/${accountId}/ai-search/namespaces/${name}/instances/${id}/jobs/${jobId}`,
    );
  }

  /**
   * Updates the status of an AI Search indexing job.
   *
   * @see ai-search-namespace-instance-change-job-status
   */
  async instancesJobsEdit(id: string, jobId: string, accountId: string, name: string): Promise<unknown> {
    return this._client.patch<unknown>(
      `/accounts/${accountId}/ai-search/namespaces/${name}/instances/${id}/jobs/${jobId}`,
    );
  }

  /**
   * Lists log entries for an AI Search indexing job.
   *
   * @see ai-search-namespace-instance-list-job-logs
   */
  async instancesJobsLogs(
    id: string,
    jobId: string,
    accountId: string,
    name: string,
    params?: Record<string, unknown>,
  ): Promise<unknown> {
    return this._client.get<unknown>(
      `/accounts/${accountId}/ai-search/namespaces/${name}/instances/${id}/jobs/${jobId}/logs`,
      {
        query: params,
      },
    );
  }

  /**
   * Performs a chat completion request against multiple AI Search instances in parallel, merging retrieved content as context for generating a response.
   *
   * @see ai-search-namespace-multi-instance-chat-completion
   */
  async multiInstanceChatCompletions(accountId: string, name: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai-search/namespaces/${name}/chat/completions`);
  }

  /**
   * Search across multiple instances in a namespace
   *
   * @see ai-search-namespace-multi-instance-search
   */
  async multiInstanceSearch(accountId: string, name: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai-search/namespaces/${name}/search`);
  }
}

/**
 * Managed search-as-a-service — crawl, index, and query content with AI-powered relevance and chat completions
 */
export class AISearch extends APIResource {
  readonly instances: Instances;
  readonly tokens: Tokens;
  readonly instancesextra: InstancesExtra;
  readonly namespaces: Namespaces;

  constructor(client: CloudflareClient) {
    super(client);
    this.instances = new Instances(client);
    this.tokens = new Tokens(client);
    this.instancesextra = new InstancesExtra(client);
    this.namespaces = new Namespaces(client);
  }
}
