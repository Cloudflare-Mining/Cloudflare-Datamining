/**
 * token-validation resource
 * @generated from apis/token-validation/schema.ts
 *
 * Validate JWT tokens at the edge — configure token sources, signing keys, and validation rules
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Token validation configurations defining JWT sources, JWKS endpoints, and claim requirements
 */
export class Configuration extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists all token validation configurations for this zone
   *
   * @see token-validation-config-list
   */
  async list(zoneId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/token_validation/config`, {
      query: params,
    });
  }

  /**
   * Get a single Token Configuration
   *
   * @see token-validation-config-get
   */
  async get(zoneId: string, configId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/token_validation/config/${configId}`);
  }

  /**
   * Create a new Token Validation configuration
   *
   * @see token-validation-config-create
   */
  async create(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/token_validation/config`);
  }

  /**
   * Edit fields of an existing Token Configuration
   *
   * @see token-validation-config-edit
   */
  async edit(zoneId: string, configId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/zones/${zoneId}/token_validation/config/${configId}`);
  }

  /**
   * Delete Token Configuration
   *
   * @see token-validation-config-delete
   */
  async delete(zoneId: string, configId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/token_validation/config/${configId}`);
  }

  /**
   * Update Token Configuration credentials
   *
   * @see token-validation-config-credentials-update
   */
  async credentialsUpdate(zoneId: string, configId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/token_validation/config/${configId}/credentials`);
  }
}

/**
 * Validation rules that enforce token requirements on specific API endpoints
 */
export class Rules extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * List token validation rules
   *
   * @see token-validation-rules-list
   */
  async list(zoneId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/token_validation/rules`, {
      query: params,
    });
  }

  /**
   * Create a token validation rule.
   *
   * @see token-validation-rules-create
   */
  async create(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/token_validation/rules`);
  }

  /**
   * Create zone token validation rules. A request can create multiple Token Validation Rules.
   *
   * @see token-validation-rules-bulk-create
   */
  async bulkCreate(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/token_validation/rules/bulk`);
  }

  /**
   * Edit token validation rules. A request can update multiple Token Validation Rules. Rules can be re-ordered using the `position` field. Returns all updated rules.
   *
   * @see token-validation-rules-bulk-edit
   */
  async bulkEdit(zoneId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/zones/${zoneId}/token_validation/rules/bulk`);
  }

  /**
   * Get a zone token validation rule.
   *
   * @see token-validation-rules-get
   */
  async get(zoneId: string, ruleId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/token_validation/rules/${ruleId}`);
  }

  /**
   * Delete a zone token validation rule.
   *
   * @see token-validation-rules-delete
   */
  async delete(zoneId: string, ruleId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/token_validation/rules/${ruleId}`);
  }

  /**
   * Edit a zone token validation rule.
   *
   * @see token-validation-rules-edit
   */
  async edit(zoneId: string, ruleId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/zones/${zoneId}/token_validation/rules/${ruleId}`);
  }
}

/**
 * Rules (additional) operations
 */
export class RulesExtra extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Preview operations covered by a Token Validation rule. The API will return all operations on a zone annotated with an additional `state` field. Operations with an `included` `state` will be covered by a Token Validation Rule.
   *
   * @see token-validation-rules-preview
   */
  async previewCreate(zoneId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/token_validation/rules/preview`, {
      body: { ...params },
    });
  }
}

/**
 * Validate JWT tokens at the edge — configure token sources, signing keys, and validation rules
 */
export class TokenValidation extends APIResource {
  readonly configuration: Configuration;
  readonly rules: Rules;
  readonly rulesextra: RulesExtra;

  constructor(client: CloudflareClient) {
    super(client);
    this.configuration = new Configuration(client);
    this.rules = new Rules(client);
    this.rulesextra = new RulesExtra(client);
  }
}
