/**
 * schema-validation resource
 * @generated from apis/schema-validation/schema.ts
 *
 * API schema validation settings — enforce request/response schemas and configure validation behavior
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Uploaded API schemas used to validate incoming requests against expected formats
 */
export class Schemas extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists all OpenAPI schemas uploaded to API Shield with pagination support.
   *
   * @see schema-validation-list-schemas-paginated
   */
  async list(zoneId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/schema_validation/schemas`, {
      query: params,
    });
  }

  /**
   * Gets the contents and metadata of a specific OpenAPI schema uploaded to API Shield.
   *
   * @see schema-validation-get-schema
   */
  async get(zoneId: string, schemaId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/schema_validation/schemas/${schemaId}`, {
      query: params,
    });
  }

  /**
   * Uploads a new OpenAPI schema for API Shield schema validation. The schema defines expected request/response formats for API endpoints.
   *
   * @see schema-validation-create-schema
   */
  async create(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/schema_validation/schemas`);
  }

  /**
   * Modifies an existing OpenAPI schema in API Shield, updating the validation rules for associated API operations.
   *
   * @see schema-validation-edit-schema
   */
  async edit(zoneId: string, schemaId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/zones/${zoneId}/schema_validation/schemas/${schemaId}`);
  }

  /**
   * Permanently removes an uploaded OpenAPI schema from API Shield. Operations using this schema will lose their validation rules.
   *
   * @see schema-validation-delete-schema
   */
  async delete(zoneId: string, schemaId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/schema_validation/schemas/${schemaId}`);
  }
}

/**
 * Zone-level schema validation settings including default actions for unmatched requests
 */
export class Settings extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Retrieves the current global schema validation settings for a zone.
   *
   * @see schema-validation-get-settings
   */
  async get(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/schema_validation/settings`);
  }

  /**
   * Fully updates global schema validation settings for a zone, replacing existing configuration.
   *
   * @see schema-validation-update-settings
   */
  async update(zoneId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/schema_validation/settings`);
  }

  /**
   * Partially updates global schema validation settings for a zone using PATCH semantics.
   *
   * @see schema-validation-edit-settings
   */
  async edit(zoneId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/zones/${zoneId}/schema_validation/settings`);
  }

  /**
   * Lists all per-operation schema validation settings configured for the zone.
   *
   * @see schema-validation-list-per-operation-settings
   */
  async operationsList(zoneId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/schema_validation/settings/operations`, {
      query: params,
    });
  }

  /**
   * Retrieves the schema validation settings configured for a specific API operation.
   *
   * @see schema-validation-get-per-operation-setting
   */
  async operationsGet(zoneId: string, operationId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/schema_validation/settings/operations/${operationId}`);
  }

  /**
   * Fully updates schema validation settings for a specific API operation.
   *
   * @see schema-validation-update-per-operation-setting
   */
  async operationsUpdate(zoneId: string, operationId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/schema_validation/settings/operations/${operationId}`);
  }

  /**
   * Updates schema validation settings for multiple API operations in a single request. Efficient for applying consistent validation rules across endpoints.
   *
   * @see schema-validation-bulk-edit-per-operation-settings
   */
  async operationsBulkEdit(zoneId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/zones/${zoneId}/schema_validation/settings/operations`);
  }

  /**
   * Removes custom schema validation settings for a specific API operation, reverting to zone-level defaults.
   *
   * @see schema-validation-delete-per-operation-setting
   */
  async operationsDelete(zoneId: string, operationId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/schema_validation/settings/operations/${operationId}`);
  }
}

/**
 * Schemas (additional) operations
 */
export class SchemasExtra extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists all unique hosts found in uploaded OpenAPI schemas for the zone.
   *
   * @see schema-validation-list-schema-hosts
   */
  async hostsList(zoneId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/schema_validation/schemas/hosts`, {
      query: params,
    });
  }

  /**
   * Retrieves all operations from the schema. Operations that already exist in API Shield Endpoint Management will be returned as full operations.
   *
   * @see schema-validation-extract-operations-from-schema
   */
  async operationsGet(zoneId: string, schemaId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/schema_validation/schemas/${schemaId}/operations`, {
      query: params,
    });
  }
}

/**
 * API schema validation settings — enforce request/response schemas and configure validation behavior
 */
export class SchemaValidation extends APIResource {
  readonly schemas: Schemas;
  readonly settings: Settings;
  readonly schemasextra: SchemasExtra;

  constructor(client: CloudflareClient) {
    super(client);
    this.schemas = new Schemas(client);
    this.settings = new Settings(client);
    this.schemasextra = new SchemasExtra(client);
  }
}
