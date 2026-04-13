/**
 * ai-gateway resource
 * @generated from apis/ai-gateway/schema.ts
 *
 * Proxy, cache, rate-limit, and observe requests to AI providers — OpenAI, Anthropic, Workers AI, and more
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Available evaluator types for scoring AI gateway responses (accuracy, toxicity, etc.)
 */
export class EvaluationTypes extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists all available evaluator types for scoring AI gateway responses.
   *
   * @see aig-config-list-evaluators
   */
  async list(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/ai-gateway/evaluation-types`, {
      query: params,
    });
  }
}

/**
 * Inspect individual request/response pairs that passed through the gateway
 */
export class Logs extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists request/response log entries for the AI gateway with filtering and pagination.
   *
   * @see aig-config-list-gateway-logs
   */
  async list(accountId: string, gatewayId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/ai-gateway/gateways/${gatewayId}/logs`, {
      query: params,
    });
  }

  /**
   * Retrieves detailed information for a specific AI Gateway log entry.
   *
   * @see aig-config-get-gateway-log-detail
   */
  async get(id: string, gatewayId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/ai-gateway/gateways/${gatewayId}/logs/${id}`);
  }

  /**
   * Updates metadata for an AI Gateway log entry.
   *
   * @see aig-config-patch-gateway-log
   */
  async edit(id: string, gatewayId: string, accountId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/ai-gateway/gateways/${gatewayId}/logs/${id}`);
  }

  /**
   * Deletes gateway log entries matching the specified criteria.
   *
   * @see aig-config-delete-gateway-logs
   */
  async delete(accountId: string, gatewayId: string, params?: Record<string, unknown>): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/ai-gateway/gateways/${gatewayId}/logs`, {
      query: params,
    });
  }

  /**
   * Retrieves the original request payload for an AI Gateway log entry.
   *
   * @see aig-config-get-gateway-log-request
   */
  async request(id: string, gatewayId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/ai-gateway/gateways/${gatewayId}/logs/${id}/request`);
  }

  /**
   * Retrieves the response payload for an AI Gateway log entry.
   *
   * @see aig-config-get-gateway-log-response
   */
  async response(id: string, gatewayId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/ai-gateway/gateways/${gatewayId}/logs/${id}/response`);
  }
}

/**
 * Curated collections of gateway logs used as inputs for evaluations and fine-tuning
 */
export class Datasets extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists all AI Gateway evaluator types configured for the account.
   *
   * @see aig-config-list-dataset
   */
  async list(accountId: string, gatewayId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/ai-gateway/gateways/${gatewayId}/datasets`, {
      query: params,
    });
  }

  /**
   * Retrieves details for a specific AI Gateway dataset.
   *
   * @see aig-config-fetch-dataset
   */
  async get(accountId: string, gatewayId: string, id: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/ai-gateway/gateways/${gatewayId}/datasets/${id}`);
  }

  /**
   * Creates a new AI Gateway.
   *
   * @see aig-config-create-dataset
   */
  async create(gatewayId: string, accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai-gateway/gateways/${gatewayId}/datasets`);
  }

  /**
   * Updates an existing AI Gateway dataset.
   *
   * @see aig-config-update-dataset
   */
  async update(accountId: string, gatewayId: string, id: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/ai-gateway/gateways/${gatewayId}/datasets/${id}`);
  }

  /**
   * Deletes an AI Gateway dataset.
   *
   * @see aig-config-delete-dataset
   */
  async delete(accountId: string, gatewayId: string, id: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/ai-gateway/gateways/${gatewayId}/datasets/${id}`);
  }
}

/**
 * Run quality evaluations against gateway logs or datasets to score model outputs
 */
export class Evaluations extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists all AI Gateway evaluator types configured for the account.
   *
   * @see aig-config-list-evaluations
   */
  async list(accountId: string, gatewayId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/ai-gateway/gateways/${gatewayId}/evaluations`, {
      query: params,
    });
  }

  /**
   * Retrieves details for a specific AI Gateway dataset.
   *
   * @see aig-config-fetch-evaluations
   */
  async get(accountId: string, gatewayId: string, id: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/ai-gateway/gateways/${gatewayId}/evaluations/${id}`);
  }

  /**
   * Creates a new AI Gateway.
   *
   * @see aig-config-create-evaluations
   */
  async create(gatewayId: string, accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai-gateway/gateways/${gatewayId}/evaluations`);
  }

  /**
   * Deletes an AI Gateway dataset.
   *
   * @see aig-config-delete-evaluations
   */
  async delete(accountId: string, gatewayId: string, id: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/ai-gateway/gateways/${gatewayId}/evaluations/${id}`);
  }
}

/**
 * Route requests across multiple AI providers with fallback, load-balancing, and versioned deployments
 */
export class DynamicRouting extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * List all AI Gateway Dynamic Routes.
   *
   * @see aig-config-list-gateway-dynamic-routes
   */
  async list(accountId: string, gatewayId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/ai-gateway/gateways/${gatewayId}/routes`);
  }

  /**
   * Get an AI Gateway Dynamic Route.
   *
   * @see aig-config-get-gateway-dynamic-route
   */
  async get(accountId: string, gatewayId: string, id: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/ai-gateway/gateways/${gatewayId}/routes/${id}`);
  }

  /**
   * Create a new AI Gateway Dynamic Route.
   *
   * @see aig-config-post-gateway-dynamic-route
   */
  async create(accountId: string, gatewayId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai-gateway/gateways/${gatewayId}/routes`);
  }

  /**
   * Update an AI Gateway Dynamic Route.
   *
   * @see aig-config-update-gateway-dynamic-route
   */
  async update(accountId: string, gatewayId: string, id: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/ai-gateway/gateways/${gatewayId}/routes/${id}`);
  }

  /**
   * Delete an AI Gateway Dynamic Route.
   *
   * @see aig-config-delete-gateway-dynamic-route
   */
  async delete(accountId: string, gatewayId: string, id: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/ai-gateway/gateways/${gatewayId}/routes/${id}`);
  }

  /**
   * List all AI Gateway Dynamic Route Deployments.
   *
   * @see aig-config-list-gateway-dynamic-route-deployments
   */
  async listDeployments(accountId: string, gatewayId: string, id: string): Promise<unknown> {
    return this._client.get<unknown>(
      `/accounts/${accountId}/ai-gateway/gateways/${gatewayId}/routes/${id}/deployments`,
    );
  }

  /**
   * Create a new AI Gateway Dynamic Route Deployment.
   *
   * @see aig-config-post-gateway-dynamic-route-deployment
   */
  async createDeployment(accountId: string, gatewayId: string, id: string): Promise<unknown> {
    return this._client.post<unknown>(
      `/accounts/${accountId}/ai-gateway/gateways/${gatewayId}/routes/${id}/deployments`,
    );
  }

  /**
   * List all AI Gateway Dynamic Route Versions.
   *
   * @see aig-config-list-gateway-dynamic-route-versions
   */
  async listVersions(accountId: string, gatewayId: string, id: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/ai-gateway/gateways/${gatewayId}/routes/${id}/versions`);
  }

  /**
   * Create a new AI Gateway Dynamic Route Version.
   *
   * @see aig-config-post-gateway-dynamic-route-version
   */
  async createVersion(accountId: string, gatewayId: string, id: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai-gateway/gateways/${gatewayId}/routes/${id}/versions`);
  }

  /**
   * Get an AI Gateway Dynamic Route Version.
   *
   * @see aig-config-get-gateway-dynamic-route-version
   */
  async getVersion(accountId: string, gatewayId: string, id: string, versionId: string): Promise<unknown> {
    return this._client.get<unknown>(
      `/accounts/${accountId}/ai-gateway/gateways/${gatewayId}/routes/${id}/versions/${versionId}`,
    );
  }
}

/**
 * Store API keys and endpoint settings for each upstream AI provider
 */
export class ProviderConfigs extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists all AI Gateway evaluator types configured for the account.
   *
   * @see aig-config-list-providers
   */
  async list(accountId: string, gatewayId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/ai-gateway/gateways/${gatewayId}/provider_configs`, {
      query: params,
    });
  }

  /**
   * Creates a new AI Gateway.
   *
   * @see aig-config-create-providers
   */
  async create(accountId: string, gatewayId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai-gateway/gateways/${gatewayId}/provider_configs`);
  }

  /**
   * Updates an existing AI Gateway dataset.
   *
   * @see aig-config-update-providers
   */
  async update(accountId: string, gatewayId: string, id: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/ai-gateway/gateways/${gatewayId}/provider_configs/${id}`);
  }

  /**
   * Deletes an AI Gateway dataset.
   *
   * @see aig-config-delete-providers
   */
  async delete(accountId: string, gatewayId: string, id: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/ai-gateway/gateways/${gatewayId}/provider_configs/${id}`);
  }
}

/**
 * Retrieve the gateway's proxy URL used by clients to send inference requests
 */
export class Urls extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Retrieves the endpoint URL for an AI Gateway.
   *
   * @see aig-config-get-gateway-url
   */
  async get(gatewayId: string, accountId: string, provider: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/ai-gateway/gateways/${gatewayId}/url/${provider}`);
  }
}

/**
 * Proxy, cache, rate-limit, and observe requests to AI providers — OpenAI, Anthropic, Workers AI, and more
 */
export class AIGateway extends APIResource {
  readonly evaluationtypes: EvaluationTypes;
  readonly logs: Logs;
  readonly datasets: Datasets;
  readonly evaluations: Evaluations;
  readonly dynamicrouting: DynamicRouting;
  readonly providerconfigs: ProviderConfigs;
  readonly urls: Urls;

  constructor(client: CloudflareClient) {
    super(client);
    this.evaluationtypes = new EvaluationTypes(client);
    this.logs = new Logs(client);
    this.datasets = new Datasets(client);
    this.evaluations = new Evaluations(client);
    this.dynamicrouting = new DynamicRouting(client);
    this.providerconfigs = new ProviderConfigs(client);
    this.urls = new Urls(client);
  }

  /**
   * Lists all AI Gateway evaluator types configured for the account.
   *
   * @see aig-config-list-gateway
   */
  async list(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/ai-gateway/gateways`, {
      query: params,
    });
  }

  /**
   * Retrieves details for a specific AI Gateway dataset.
   *
   * @see aig-config-fetch-gateway
   */
  async get(accountId: string, id: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/ai-gateway/gateways/${id}`);
  }

  /**
   * Creates a new AI Gateway.
   *
   * @see aig-config-create-gateway
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai-gateway/gateways`);
  }

  /**
   * Updates an existing AI Gateway dataset.
   *
   * @see aig-config-update-gateway
   */
  async update(accountId: string, id: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/ai-gateway/gateways/${id}`);
  }

  /**
   * Deletes an AI Gateway dataset.
   *
   * @see aig-config-delete-gateway
   */
  async delete(accountId: string, id: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/ai-gateway/gateways/${id}`);
  }
}
