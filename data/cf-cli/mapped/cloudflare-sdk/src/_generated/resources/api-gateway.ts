/**
 * api-gateway resource
 * @generated from apis/api-gateway/schema.ts
 *
 * Discover, monitor, and protect your API endpoints with schema validation, abuse detection, and routing
 */
import type { components } from 'cloudflare-openapi';
import { APIResource, CloudflareClient } from '../../client.js';

// Type aliases from OpenAPI components
export type APIShieldDiscoveryOperation = components['schemas']['api-shield_discovery_operation'];
export type APIShieldOldOperationSchemaValidationSettingsMultipleRequest =
  components['schemas']['api-shield_old_operation_schema_validation_settings_multiple_request'];
export type APIShieldOldPublicSchema = components['schemas']['api-shield_old_public_schema'];
export type APIShieldOldSchemaUploadResponse = components['schemas']['api-shield_old_schema_upload_response'];
export type APIShieldOldResponseUserSchemasHosts = components['schemas']['api-shield_old_response_user_schemas_hosts'];
export type APIShieldResponseExpressionTemplatesFallthrough =
  components['schemas']['api-shield_response_expression_templates_fallthrough'];
export type APIShieldFullLabel = components['schemas']['api-shield_full_label'];
export type APIShieldFullManagedLabel = components['schemas']['api-shield_full_managed_label'];
export type APIShieldLabel = components['schemas']['api-shield_label'];
export type APIShieldOperationWithLabelsOnly = components['schemas']['api-shield_operation_with_labels_only'];

/**
 * API Shield configuration — authentication requirements and session identifiers
 */
export class Configurations extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Gets the current API Shield configuration settings for a zone, including validation behavior and enforcement mode.
   *
   * @see api-shield-settings-retrieve-information-about-specific-configuration-properties
   */
  async get(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/api_gateway/configuration`);
  }

  /**
   * Updates API Shield configuration settings for a zone. Can modify validation strictness, enforcement mode, and other global settings.
   *
   * @see api-shield-settings-set-configuration-properties
   */
  async update(zoneId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/api_gateway/configuration`);
  }
}

/**
 * Auto-discovered API endpoints from traffic analysis with schema inference
 */
export class Discovery extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Retrieve the most up to date view of discovered operations, rendered as OpenAPI schemas
   *
   * @see api-shield-api-discovery-retrieve-discovered-operations-on-a-zone-as-openapi
   */
  async get(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/api_gateway/discovery`);
  }

  /**
   * Retrieve the most up to date view of discovered operations
   *
   * @see api-shield-api-discovery-retrieve-discovered-operations-on-a-zone
   */
  async operationsList(
    zoneId: string,
    params?: Record<string, unknown>,
  ): Promise<components['schemas']['api-shield_discovery_operation'][]> {
    return this._client.get<components['schemas']['api-shield_discovery_operation'][]>(
      `/zones/${zoneId}/api_gateway/discovery/operations`,
      {
        query: params,
      },
    );
  }

  /**
   * Update the `state` on a discovered operation
   *
   * @see api-shield-api-patch-discovered-operation
   */
  async operationsEdit(zoneId: string, operationId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/zones/${zoneId}/api_gateway/discovery/operations/${operationId}`);
  }

  /**
   * Update the `state` on one or more discovered operations
   *
   * @see api-shield-api-patch-discovered-operations
   */
  async operationsBulkEdit(zoneId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/zones/${zoneId}/api_gateway/discovery/operations`);
  }
}

/**
 * Registered API operations (method + path) with traffic metrics and schema bindings
 */
export class Operations extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists all API operations tracked by API Shield for a zone with pagination. Returns operation details including method, path, and feature configurations.
   *
   * @see api-shield-endpoint-management-retrieve-information-about-all-operations-on-a-zone
   */
  async list(zoneId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/api_gateway/operations`, {
      query: params,
    });
  }

  /**
   * Gets detailed information about a specific API operation in API Shield, including its schema validation settings and traffic statistics.
   *
   * @see api-shield-endpoint-management-retrieve-information-about-an-operation
   */
  async get(zoneId: string, operationId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/api_gateway/operations/${operationId}`, {
      query: params,
    });
  }

  /**
   * Add one operation to a zone. Endpoints can contain path variables. Host, method, endpoint will be normalized to a canoncial form when creating an operation and must be unique on the zone. Inserting an operation that matches an existing one will return the record of the already existing operation and update its last_updated date.
   *
   * @see api-shield-endpoint-management-add-operation-to-a-zone
   */
  async create(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/api_gateway/operations/item`);
  }

  /**
   * Removes a single API operation from API Shield endpoint management. The operation will no longer be tracked or protected by API Shield rules.
   *
   * @see api-shield-endpoint-management-delete-an-operation
   */
  async delete(zoneId: string, operationId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/api_gateway/operations/${operationId}`);
  }

  /**
   * Add one or more operations to a zone. Endpoints can contain path variables. Host, method, endpoint will be normalized to a canoncial form when creating an operation and must be unique on the zone. Inserting an operation that matches an existing one will return the record of the already existing operation and update its last_updated date.
   *
   * @see api-shield-endpoint-management-add-operations-to-a-zone
   */
  async bulkCreate(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/api_gateway/operations`);
  }

  /**
   * Bulk removes multiple API operations from API Shield endpoint management in a single request. Efficient for cleaning up unused endpoints.
   *
   * @see api-shield-endpoint-management-delete-multiple-operations
   */
  async bulkDelete(zoneId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/api_gateway/operations`);
  }

  /**
   * Retrieves operation-level schema validation settings on the zone
   *
   * @see api-shield-schema-validation-retrieve-operation-level-settings
   */
  async schemaValidationGet(zoneId: string, operationId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/api_gateway/operations/${operationId}/schema_validation`);
  }

  /**
   * Updates operation-level schema validation settings on the zone
   *
   * @see api-shield-schema-validation-update-operation-level-settings
   */
  async schemaValidationUpdate(zoneId: string, operationId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/api_gateway/operations/${operationId}/schema_validation`);
  }

  /**
   * Updates multiple operation-level schema validation settings on the zone
   *
   * @see api-shield-schema-validation-update-multiple-operation-level-settings
   */
  async schemaValidationEdit(
    zoneId: string,
  ): Promise<components['schemas']['api-shield_old_operation_schema_validation_settings_multiple_request']> {
    return this._client.patch<
      components['schemas']['api-shield_old_operation_schema_validation_settings_multiple_request']
    >(`/zones/${zoneId}/api_gateway/operations/schema_validation`);
  }
}

/**
 * OpenAPI schemas learned from traffic for API endpoint validation
 */
export class Schemas extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Retrieves API operations and their features exported as OpenAPI schemas.
   *
   * @see api-shield-endpoint-management-retrieve-operations-and-features-as-open-api-schemas
   */
  async list(zoneId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/api_gateway/schemas`, {
      query: params,
    });
  }
}

/**
 * Zone-level API Gateway settings including schema validation behavior
 */
export class Settings extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Retrieves zone level schema validation settings currently set on the zone
   *
   * @see api-shield-schema-validation-retrieve-zone-level-settings
   */
  async schemaValidationGet(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/api_gateway/settings/schema_validation`);
  }

  /**
   * Updates zone level schema validation settings on the zone
   *
   * @see api-shield-schema-validation-update-zone-level-settings
   */
  async schemaValidationUpdate(zoneId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/api_gateway/settings/schema_validation`);
  }

  /**
   * Updates zone level schema validation settings on the zone
   *
   * @see api-shield-schema-validation-patch-zone-level-settings
   */
  async schemaValidationEdit(zoneId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/zones/${zoneId}/api_gateway/settings/schema_validation`);
  }
}

/**
 * User-uploaded OpenAPI schemas for validating API request and response payloads
 */
export class UserSchemas extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists all OpenAPI schemas uploaded to API Shield for the zone, including their validation status and associated operations.
   *
   * @see api-shield-schema-validation-retrieve-information-about-all-schemas
   */
  async list(
    zoneId: string,
    params?: Record<string, unknown>,
  ): Promise<components['schemas']['api-shield_old_public_schema'][]> {
    return this._client.get<components['schemas']['api-shield_old_public_schema'][]>(
      `/zones/${zoneId}/api_gateway/user_schemas`,
      {
        query: params,
      },
    );
  }

  /**
   * Gets detailed information about a specific uploaded OpenAPI schema, including its contents and validation configuration.
   *
   * @see api-shield-schema-validation-retrieve-information-about-specific-schema
   */
  async get(
    zoneId: string,
    schemaId: string,
    params?: Record<string, unknown>,
  ): Promise<components['schemas']['api-shield_old_public_schema']> {
    return this._client.get<components['schemas']['api-shield_old_public_schema']>(
      `/zones/${zoneId}/api_gateway/user_schemas/${schemaId}`,
      {
        query: params,
      },
    );
  }

  /**
   * Uploads a new OpenAPI schema for API Shield schema validation. The schema defines expected request/response formats for API endpoints.
   *
   * @see api-shield-schema-validation-post-schema
   */
  async create(zoneId: string): Promise<components['schemas']['api-shield_old_schema_upload_response']> {
    return this._client.post<components['schemas']['api-shield_old_schema_upload_response']>(
      `/zones/${zoneId}/api_gateway/user_schemas`,
    );
  }

  /**
   * Activates schema validation for an uploaded OpenAPI schema. Requests to matching endpoints will be validated against the schema definitions.
   *
   * @see api-shield-schema-validation-enable-validation-for-a-schema
   */
  async edit(zoneId: string, schemaId: string): Promise<components['schemas']['api-shield_old_public_schema']> {
    return this._client.patch<components['schemas']['api-shield_old_public_schema']>(
      `/zones/${zoneId}/api_gateway/user_schemas/${schemaId}`,
    );
  }

  /**
   * Permanently removes an uploaded OpenAPI schema from API Shield schema validation. Operations using this schema will lose their validation rules.
   *
   * @see api-shield-schema-delete-a-schema
   */
  async delete(zoneId: string, schemaId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/api_gateway/user_schemas/${schemaId}`);
  }

  /**
   * Retrieves all operations from the schema. Operations that already exist in API Shield Endpoint Management will be returned as full operations.
   *
   * @see api-shield-schema-validation-extract-operations-from-schema
   */
  async operationsList(zoneId: string, schemaId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/api_gateway/user_schemas/${schemaId}/operations`, {
      query: params,
    });
  }

  /**
   * Lists all unique hosts found in uploaded OpenAPI schemas for the zone. Useful for understanding which domains have schema coverage.
   *
   * @see api-shield-schema-validation-retrieve-user-schema-hosts
   */
  async hostsList(zoneId: string): Promise<components['schemas']['api-shield_old_response_user_schemas_hosts'][]> {
    return this._client.get<components['schemas']['api-shield_old_response_user_schemas_hosts'][]>(
      `/zones/${zoneId}/api_gateway/user_schemas/hosts`,
    );
  }
}

/**
 * Reusable expression templates for API Gateway rule configurations
 */
export class ExpressionTemplate extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Creates an expression template fallthrough rule for API Shield. Used for configuring default behavior when no other expression templates match.
   *
   * @see api-shield-expression-templates-fallthrough
   */
  async fallthroughCreate(
    zoneId: string,
  ): Promise<components['schemas']['api-shield_response_expression_templates_fallthrough']> {
    return this._client.post<components['schemas']['api-shield_response_expression_templates_fallthrough']>(
      `/zones/${zoneId}/api_gateway/expression-template/fallthrough`,
    );
  }
}

/**
 * Labels operations
 */
export class Labels extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Retrieve all labels
   *
   * @see api-shield-labels-get-labels
   */
  async get(
    zoneId: string,
    params?: Record<string, unknown>,
  ): Promise<components['schemas']['api-shield_full_label'][]> {
    return this._client.get<components['schemas']['api-shield_full_label'][]>(`/zones/${zoneId}/api_gateway/labels`, {
      query: params,
    });
  }

  /**
   * Retrieve managed label
   *
   * @see api-shield-labels-get-managed-label
   */
  async managedGet(
    zoneId: string,
    name: string,
    params?: Record<string, unknown>,
  ): Promise<components['schemas']['api-shield_full_managed_label']> {
    return this._client.get<components['schemas']['api-shield_full_managed_label']>(
      `/zones/${zoneId}/api_gateway/labels/managed/${name}`,
      {
        query: params,
      },
    );
  }

  /**
   * Replace all operations(s) attached to a managed label
   *
   * @see api-shield-labels-replace-operations-attached-to-managed-label
   */
  async managedResourcesOperationUpdate(
    zoneId: string,
    name: string,
  ): Promise<components['schemas']['api-shield_full_managed_label']> {
    return this._client.put<components['schemas']['api-shield_full_managed_label']>(
      `/zones/${zoneId}/api_gateway/labels/managed/${name}/resources/operation`,
    );
  }

  /**
   * Delete user labels
   *
   * @see api-shield-labels-delete-user-labels
   */
  async userDeleteUserLabels(zoneId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/api_gateway/labels/user`);
  }

  /**
   * Create user labels
   *
   * @see api-shield-labels-create-user-labels
   */
  async userCreate(zoneId: string): Promise<components['schemas']['api-shield_label'][]> {
    return this._client.post<components['schemas']['api-shield_label'][]>(`/zones/${zoneId}/api_gateway/labels/user`);
  }

  /**
   * Delete user label
   *
   * @see api-shield-delete-user-label
   */
  async userDeleteUserLabel(zoneId: string, name: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/api_gateway/labels/user/${name}`);
  }

  /**
   * Retrieve user label
   *
   * @see api-shield-labels-get-user-label
   */
  async userGet(
    zoneId: string,
    name: string,
    params?: Record<string, unknown>,
  ): Promise<components['schemas']['api-shield_full_label']> {
    return this._client.get<components['schemas']['api-shield_full_label']>(
      `/zones/${zoneId}/api_gateway/labels/user/${name}`,
      {
        query: params,
      },
    );
  }

  /**
   * Update certain fields on a label
   *
   * @see api-shield-patch-user-label
   */
  async userEdit(zoneId: string, name: string): Promise<components['schemas']['api-shield_label']> {
    return this._client.patch<components['schemas']['api-shield_label']>(
      `/zones/${zoneId}/api_gateway/labels/user/${name}`,
    );
  }

  /**
   * Update all fields on a label
   *
   * @see api-shield-put-user-label
   */
  async userUpdate(zoneId: string, name: string): Promise<components['schemas']['api-shield_label']> {
    return this._client.put<components['schemas']['api-shield_label']>(
      `/zones/${zoneId}/api_gateway/labels/user/${name}`,
    );
  }

  /**
   * Replace all operations(s) attached to a user label
   *
   * @see api-shield-labels-replace-operations-attached-to-user-label
   */
  async userResourcesOperationUpdate(
    zoneId: string,
    name: string,
  ): Promise<components['schemas']['api-shield_full_label']> {
    return this._client.put<components['schemas']['api-shield_full_label']>(
      `/zones/${zoneId}/api_gateway/labels/user/${name}/resources/operation`,
    );
  }
}

/**
 * Operations (additional) operations
 */
export class OperationsExtra extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Bulk remove label(s) on operation(s) in endpoint management
   *
   * @see api-shield-operations-bulk-delete-labels-to-operations
   */
  async labelsDeleteToOperations(zoneId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/api_gateway/operations/labels`);
  }

  /**
   * Bulk attach label(s) on operation(s) in endpoint management
   *
   * @see api-shield-operations-bulk-post-labels-to-operations
   */
  async labelsCreateToOperations(
    zoneId: string,
  ): Promise<components['schemas']['api-shield_operation_with_labels_only'][]> {
    return this._client.post<components['schemas']['api-shield_operation_with_labels_only'][]>(
      `/zones/${zoneId}/api_gateway/operations/labels`,
    );
  }

  /**
   * Bulk replace label(s) on operation(s) in endpoint management
   *
   * @see api-shield-operations-bulk-put-labels-to-operations
   */
  async labelsUpdateToOperations(
    zoneId: string,
  ): Promise<components['schemas']['api-shield_operation_with_labels_only'][]> {
    return this._client.put<components['schemas']['api-shield_operation_with_labels_only'][]>(
      `/zones/${zoneId}/api_gateway/operations/labels`,
    );
  }

  /**
   * Remove label(s) on an operation in endpoint management
   *
   * @see api-shield-operations-delete-labels-from-operation
   */
  async labelsDeleteFromOperation(zoneId: string, operationId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/api_gateway/operations/${operationId}/labels`);
  }

  /**
   * Attach label(s) on an operation in endpoint management
   *
   * @see api-shield-operations-post-labels-to-operation
   */
  async labelsCreateToOperation(
    zoneId: string,
    operationId: string,
  ): Promise<components['schemas']['api-shield_operation_with_labels_only']> {
    return this._client.post<components['schemas']['api-shield_operation_with_labels_only']>(
      `/zones/${zoneId}/api_gateway/operations/${operationId}/labels`,
    );
  }

  /**
   * Replace label(s) on an operation in endpoint management
   *
   * @see api-shield-operations-put-labels-to-operation
   */
  async labelsUpdateToOperation(
    zoneId: string,
    operationId: string,
  ): Promise<components['schemas']['api-shield_operation_with_labels_only']> {
    return this._client.put<components['schemas']['api-shield_operation_with_labels_only']>(
      `/zones/${zoneId}/api_gateway/operations/${operationId}/labels`,
    );
  }
}

/**
 * Discover, monitor, and protect your API endpoints with schema validation, abuse detection, and routing
 */
export class APIGateway extends APIResource {
  readonly configurations: Configurations;
  readonly discovery: Discovery;
  readonly operations: Operations;
  readonly schemas: Schemas;
  readonly settings: Settings;
  readonly userschemas: UserSchemas;
  readonly expressiontemplate: ExpressionTemplate;
  readonly labels: Labels;
  readonly operationsextra: OperationsExtra;

  constructor(client: CloudflareClient) {
    super(client);
    this.configurations = new Configurations(client);
    this.discovery = new Discovery(client);
    this.operations = new Operations(client);
    this.schemas = new Schemas(client);
    this.settings = new Settings(client);
    this.userschemas = new UserSchemas(client);
    this.expressiontemplate = new ExpressionTemplate(client);
    this.labels = new Labels(client);
    this.operationsextra = new OperationsExtra(client);
  }
}
