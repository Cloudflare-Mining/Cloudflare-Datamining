/**
 * cloudforce-one resource
 * @generated from apis/cloudforce-one/schema.ts
 *
 * Threat intelligence platform — request investigations, scan indicators, and track threat events
 */
import type { components } from 'cloudflare-openapi';
import { APIResource, CloudflareClient } from '../../client.js';

// Type aliases from OpenAPI components
export type CloudforceOnePortScanAPIScanConfig = components['schemas']['cloudforce-one-port-scan-api_scan-config'];
export type CloudforceOneRequestsRequestListItem = components['schemas']['cloudforce-one-requests_request-list-item'];
export type CloudforceOneRequestsRequestItem = components['schemas']['cloudforce-one-requests_request-item'];
export type CloudforceOneRequestsQuota = components['schemas']['cloudforce-one-requests_quota'];
export type CloudforceOneRequestsRequestTypes = components['schemas']['cloudforce-one-requests_request-types'];
export type CloudforceOneRequestsRequestConstants = components['schemas']['cloudforce-one-requests_request-constants'];
export type CloudforceOneRequestsRequestMessageItem =
  components['schemas']['cloudforce-one-requests_request-message-item'];
export type CloudforceOneRequestsPriorityItem = components['schemas']['cloudforce-one-requests_priority-item'];
export type CloudforceOneRequestsRequestAssetItem = components['schemas']['cloudforce-one-requests_request-asset-item'];

/**
 * Scan URLs, IPs, and domains for threat intelligence indicators
 */
export class Scans extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Get open ports scan results
   *
   * @see get_GetOpenPorts
   */
  async resultsGet(accountId: string, configId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/cloudforce-one/scans/results/${configId}`);
  }

  /**
   * List scan configurations
   *
   * @see get_ConfigFetch
   */
  async configList(accountId: string): Promise<components['schemas']['cloudforce-one-port-scan-api_scan-config'][]> {
    return this._client.get<components['schemas']['cloudforce-one-port-scan-api_scan-config'][]>(
      `/accounts/${accountId}/cloudforce-one/scans/config`,
    );
  }

  /**
   * Create a scan configuration
   *
   * @see post_ConfigCreate
   */
  async configCreate(accountId: string): Promise<components['schemas']['cloudforce-one-port-scan-api_scan-config']> {
    return this._client.post<components['schemas']['cloudforce-one-port-scan-api_scan-config']>(
      `/accounts/${accountId}/cloudforce-one/scans/config`,
    );
  }

  /**
   * Update a scan configuration
   *
   * @see post_ConfigUpdate
   */
  async configEdit(
    accountId: string,
    configId: string,
  ): Promise<components['schemas']['cloudforce-one-port-scan-api_scan-config']> {
    return this._client.patch<components['schemas']['cloudforce-one-port-scan-api_scan-config']>(
      `/accounts/${accountId}/cloudforce-one/scans/config/${configId}`,
    );
  }

  /**
   * Delete scan configurations
   *
   * @see delete_DeleteScans
   */
  async configDelete(accountId: string, configId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/cloudforce-one/scans/config/${configId}`);
  }
}

/**
 * Upload and retrieve malware samples and suspicious binaries for analysis
 */
export class BinaryStorage extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Retrieves a binary file from the Cloudforce One binary storage for analysis.
   *
   * @see get_BinDBGetBinary
   */
  async get(accountId: string, hash: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/cloudforce-one/binary/${hash}`);
  }

  /**
   * Uploads a binary file to Cloudforce One's binary database for malware analysis and threat intelligence correlation.
   *
   * @see post_BinDBPost
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/cloudforce-one/binary`);
  }
}

/**
 * Threat investigation requests — submit, track, and receive analyst findings
 */
export class Requests extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists Cloudforce One intelligence requests with filtering and pagination.
   *
   * @see cloudforce-one-request-list
   */
  async list(accountId: string): Promise<components['schemas']['cloudforce-one-requests_request-list-item'][]> {
    return this._client.post<components['schemas']['cloudforce-one-requests_request-list-item'][]>(
      `/accounts/${accountId}/cloudforce-one/requests`,
    );
  }

  /**
   * Retrieves details for a specific Cloudforce One intelligence request.
   *
   * @see cloudforce-one-request-get
   */
  async get(
    accountId: string,
    requestId: string,
  ): Promise<components['schemas']['cloudforce-one-requests_request-item']> {
    return this._client.get<components['schemas']['cloudforce-one-requests_request-item']>(
      `/accounts/${accountId}/cloudforce-one/requests/${requestId}`,
    );
  }

  /**
   * Creating a request adds the request into the Cloudforce One queue for analysis. In addition to the content, a short title, type, priority, and releasability should be provided. If one is not provided, a default will be assigned.
   *
   * @see cloudforce-one-request-new
   */
  async create(accountId: string): Promise<components['schemas']['cloudforce-one-requests_request-item']> {
    return this._client.post<components['schemas']['cloudforce-one-requests_request-item']>(
      `/accounts/${accountId}/cloudforce-one/requests/new`,
    );
  }

  /**
   * Updating a request alters the request in the Cloudforce One queue. This API may be used to update any attributes of the request after the initial submission. Only fields that you choose to update need to be add to the request body.
   *
   * @see cloudforce-one-request-update
   */
  async update(
    accountId: string,
    requestId: string,
  ): Promise<components['schemas']['cloudforce-one-requests_request-item']> {
    return this._client.put<components['schemas']['cloudforce-one-requests_request-item']>(
      `/accounts/${accountId}/cloudforce-one/requests/${requestId}`,
    );
  }

  /**
   * Deletes a Cloudforce One intelligence request and all associated data.
   *
   * @see cloudforce-one-request-delete
   */
  async delete(accountId: string, requestId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/cloudforce-one/requests/${requestId}`);
  }

  /**
   * Retrieves quota usage for Cloudforce One standard requests.
   *
   * @see cloudforce-one-request-quota
   */
  async quota(accountId: string): Promise<components['schemas']['cloudforce-one-requests_quota']> {
    return this._client.get<components['schemas']['cloudforce-one-requests_quota']>(
      `/accounts/${accountId}/cloudforce-one/requests/quota`,
    );
  }

  /**
   * Lists available request types for Cloudforce One intelligence requests.
   *
   * @see cloudforce-one-request-types
   */
  async types(accountId: string): Promise<components['schemas']['cloudforce-one-requests_request-types']> {
    return this._client.get<components['schemas']['cloudforce-one-requests_request-types']>(
      `/accounts/${accountId}/cloudforce-one/requests/types`,
    );
  }

  /**
   * Retrieves constant values used in Cloudforce One requests, including valid statuses and types.
   *
   * @see cloudforce-one-request-constants
   */
  async constants(accountId: string): Promise<components['schemas']['cloudforce-one-requests_request-constants']> {
    return this._client.get<components['schemas']['cloudforce-one-requests_request-constants']>(
      `/accounts/${accountId}/cloudforce-one/requests/constants`,
    );
  }

  /**
   * Lists messages in a Cloudforce One intelligence request conversation.
   *
   * @see cloudforce-one-request-message-list
   */
  async messageGet(
    accountId: string,
    requestId: string,
  ): Promise<components['schemas']['cloudforce-one-requests_request-message-item'][]> {
    return this._client.post<components['schemas']['cloudforce-one-requests_request-message-item'][]>(
      `/accounts/${accountId}/cloudforce-one/requests/${requestId}/message`,
    );
  }

  /**
   * Adds a message to a Cloudforce One intelligence request conversation.
   *
   * @see cloudforce-one-request-message-new
   */
  async messageCreate(
    accountId: string,
    requestId: string,
  ): Promise<components['schemas']['cloudforce-one-requests_request-message-item']> {
    return this._client.post<components['schemas']['cloudforce-one-requests_request-message-item']>(
      `/accounts/${accountId}/cloudforce-one/requests/${requestId}/message/new`,
    );
  }

  /**
   * Updates a message in a Cloudforce One intelligence request thread.
   *
   * @see cloudforce-one-request-message-update
   */
  async messageUpdate(
    accountId: string,
    requestId: string,
    messageId: string,
  ): Promise<components['schemas']['cloudforce-one-requests_request-message-item']> {
    return this._client.put<components['schemas']['cloudforce-one-requests_request-message-item']>(
      `/accounts/${accountId}/cloudforce-one/requests/${requestId}/message/${messageId}`,
    );
  }

  /**
   * Removes a message from a Cloudforce One intelligence request thread.
   *
   * @see cloudforce-one-request-message-delete
   */
  async messageDelete(accountId: string, requestId: string, messageId: string): Promise<void> {
    return this._client.delete<void>(
      `/accounts/${accountId}/cloudforce-one/requests/${requestId}/message/${messageId}`,
    );
  }

  /**
   * Retrieves a specific priority intelligence request from Cloudforce One.
   *
   * @see cloudforce-one-priority-get
   */
  async priorityGet(accountId: string, priorityId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/cloudforce-one/requests/priority/${priorityId}`);
  }

  /**
   * Creates a new priority intelligence request in Cloudforce One.
   *
   * @see cloudforce-one-priority-new
   */
  async priorityCreate(accountId: string): Promise<components['schemas']['cloudforce-one-requests_priority-item']> {
    return this._client.post<components['schemas']['cloudforce-one-requests_priority-item']>(
      `/accounts/${accountId}/cloudforce-one/requests/priority/new`,
    );
  }

  /**
   * Updates a priority intelligence request in Cloudforce One.
   *
   * @see cloudforce-one-priority-update
   */
  async priorityUpdate(accountId: string, priorityId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/cloudforce-one/requests/priority/${priorityId}`);
  }

  /**
   * Deletes a priority intelligence request from Cloudforce One.
   *
   * @see cloudforce-one-priority-delete
   */
  async priorityDelete(accountId: string, priorityId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/cloudforce-one/requests/priority/${priorityId}`);
  }

  /**
   * Retrieves quota usage for Cloudforce One priority requests.
   *
   * @see cloudforce-one-priority-quota
   */
  async priorityQuota(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/cloudforce-one/requests/priority/quota`);
  }

  /**
   * Retrieves an asset attached to a Cloudforce One intelligence request.
   *
   * @see cloudforce-one-request-asset-get
   */
  async assetsGet(
    accountId: string,
    requestId: string,
    assetId: string,
  ): Promise<components['schemas']['cloudforce-one-requests_request-asset-item'][]> {
    return this._client.get<components['schemas']['cloudforce-one-requests_request-asset-item'][]>(
      `/accounts/${accountId}/cloudforce-one/requests/${requestId}/asset/${assetId}`,
    );
  }

  /**
   * Lists assets attached to a Cloudforce One intelligence request.
   *
   * @see cloudforce-one-request-asset-list
   */
  async assetsCreate(
    accountId: string,
    requestId: string,
  ): Promise<components['schemas']['cloudforce-one-requests_request-asset-item'][]> {
    return this._client.post<components['schemas']['cloudforce-one-requests_request-asset-item'][]>(
      `/accounts/${accountId}/cloudforce-one/requests/${requestId}/asset`,
    );
  }

  /**
   * Updates an asset in a Cloudforce One intelligence request.
   *
   * @see cloudforce-one-request-asset-update
   */
  async assetsUpdate(
    accountId: string,
    requestId: string,
    assetId: string,
  ): Promise<components['schemas']['cloudforce-one-requests_request-asset-item']> {
    return this._client.put<components['schemas']['cloudforce-one-requests_request-asset-item']>(
      `/accounts/${accountId}/cloudforce-one/requests/${requestId}/asset/${assetId}`,
    );
  }

  /**
   * Removes an asset from a Cloudforce One intelligence request.
   *
   * @see cloudforce-one-request-asset-delete
   */
  async assetsDelete(accountId: string, requestId: string, assetId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/cloudforce-one/requests/${requestId}/asset/${assetId}`);
  }
}

/**
 * Threat event feed — structured intelligence on attacks, campaigns, and indicators of compromise
 */
export class ThreatEvents extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * When `datasetId` is unspecified, events will be listed from the `Cloudforce One Threat Events` dataset. To list existing datasets (and their IDs), use the [`List Datasets`](https://developers.cloudflare.com/api/resources/cloudforce_one/subresources/threat_events/subresources/datasets/methods/list/) endpoint). Also, must provide query parameters.
   *
   * @see get_EventListGet
   */
  async list(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/cloudforce-one/events`, {
      query: params,
    });
  }

  /**
   * This Method is deprecated. Please use /events/dataset/:dataset_id/events/:event_id instead.
   *
   * @see get_EventReadDeprecated
   */
  async get(accountId: string, eventId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/cloudforce-one/events/${eventId}`);
  }

  /**
   * To create a dataset, see the [`Create Dataset`](https://developers.cloudflare.com/api/resources/cloudforce_one/subresources/threat_events/subresources/datasets/methods/create/) endpoint. When `datasetId` parameter is unspecified, it will be created in a default dataset named `Cloudforce One Threat Events`.
   *
   * @see post_EventCreate
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/cloudforce-one/events/create`);
  }

  /**
   * Partially updates a threat event in Cloudforce One, modifying specific fields without replacing the entire event.
   *
   * @see patch_EventUpdate
   */
  async edit(accountId: string, eventId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/cloudforce-one/events/${eventId}`);
  }

  /**
   * The `datasetId` parameter must be defined. To list existing datasets (and their IDs) in your account, use the [`List Datasets`](https://developers.cloudflare.com/api/resources/cloudforce_one/subresources/threat_events/subresources/datasets/methods/list/) endpoint.
   *
   * @see post_EventCreateBulk
   */
  async bulkCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/cloudforce-one/events/create/bulk`);
  }

  /**
   * Lists known threat attackers tracked in Cloudforce One threat intelligence.
   *
   * @see get_AttackerList
   */
  async attackersList(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/cloudforce-one/events/attackers`, {
      query: params,
    });
  }

  /**
   * Lists all threat event categories configured for classifying and organizing threat events.
   *
   * @see get_CategoryList
   */
  async categoriesList(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/cloudforce-one/events/categories`, {
      query: params,
    });
  }

  /**
   * Retrieves details for a specific threat event category.
   *
   * @see get_CategoryRead
   */
  async categoriesGet(accountId: string, categoryId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/cloudforce-one/events/categories/${categoryId}`);
  }

  /**
   * Creates a new threat event category in Cloudforce One for organizing and classifying threat events.
   *
   * @see post_CategoryCreate
   */
  async categoriesCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/cloudforce-one/events/categories/create`);
  }

  /**
   * Partially updates a threat event category in Cloudforce One, modifying specific fields without replacing the entire category.
   *
   * @see patch_CategoryUpdate
   */
  async categoriesEdit(accountId: string, categoryId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/cloudforce-one/events/categories/${categoryId}`);
  }

  /**
   * Removes a threat event category from Cloudforce One.
   *
   * @see delete_CategoryDelete
   */
  async categoriesDelete(accountId: string, categoryId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/cloudforce-one/events/categories/${categoryId}`);
  }

  /**
   * Lists countries referenced in Cloudforce One threat intelligence data.
   *
   * @see get_CountryRead
   */
  async countriesList(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/cloudforce-one/events/countries`);
  }

  /**
   * Lists all threat event datasets configured in Cloudforce One.
   *
   * @see get_DatasetList
   */
  async datasetsList(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/cloudforce-one/events/dataset`);
  }

  /**
   * Retrieves details for a specific threat event dataset.
   *
   * @see get_DatasetRead
   */
  async datasetsGet(accountId: string, datasetId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/cloudforce-one/events/dataset/${datasetId}`);
  }

  /**
   * Creates a new threat event dataset in Cloudforce One for organizing related threat events.
   *
   * @see post_DatasetCreate
   */
  async datasetsCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/cloudforce-one/events/dataset/create`);
  }

  /**
   * Partially updates a threat event dataset in Cloudforce One, modifying specific fields without replacing the entire dataset configuration.
   *
   * @see patch_DatasetUpdate
   */
  async datasetsEdit(accountId: string, datasetId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/cloudforce-one/events/dataset/${datasetId}`);
  }

  /**
   * Retrieves the raw data associated with an event. Searches across all shards in the dataset.
   *
   * @see get_EventRawReadDS
   */
  async datasetsRaw(accountId: string, eventId: string, datasetId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/cloudforce-one/events/raw/${datasetId}/${eventId}`);
  }

  /**
   * This Method is deprecated. Please use /events/dataset/:dataset_id/indicatorTypes instead.
   *
   * @see get_LegacyIndicatorTypesList
   */
  async indicatorTypesList(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/cloudforce-one/events/indicatorTypes`);
  }

  /**
   * Retrieves raw threat event data for a specific event in Cloudforce One.
   *
   * @see get_EventRawRead
   */
  async rawGet(accountId: string, eventId: string, rawId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/cloudforce-one/events/${eventId}/raw/${rawId}`);
  }

  /**
   * Partially updates raw threat event data in Cloudforce One, modifying specific fields of the event.
   *
   * @see patch_EventRawUpdate
   */
  async rawEdit(accountId: string, eventId: string, rawId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/cloudforce-one/events/${eventId}/raw/${rawId}`);
  }

  /**
   * Removes a reference link between related threat events in Cloudforce One.
   *
   * @see delete_EventReferenceDelete
   */
  async relateDelete(accountId: string, eventId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/cloudforce-one/events/relate/${eventId}`);
  }

  /**
   * Creates a new tag to be used accross threat events.
   *
   * @see post_TagCreate
   */
  async tagsCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/cloudforce-one/events/tags/create`);
  }

  /**
   * Adds a tag to a threat event in Cloudforce One for classification and filtering.
   *
   * @see post_EventTagCreate
   */
  async eventTagsCreate(accountId: string, eventId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/cloudforce-one/events/event_tag/${eventId}/create`);
  }

  /**
   * Removes a tag from a threat event in Cloudforce One.
   *
   * @see delete_EventTagDelete
   */
  async eventTagsDelete(accountId: string, eventId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/cloudforce-one/events/event_tag/${eventId}`);
  }

  /**
   * Retrieves the catalog of industry classifications used in Cloudforce One threat intelligence.
   *
   * @see get_TargetIndustryList
   */
  async targetIndustriesList(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/cloudforce-one/events/targetIndustries`, {
      query: params,
    });
  }
}

/**
 * Events operations
 */
export class Events extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Aggregate threat events by one or more columns (e.g., attacker, targetIndustry) with optional date filtering and daily grouping. Supports multi-dimensional aggregation for cross-analysis.
   *
   * @see get_EventAggregate
   */
  async aggregateGet(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/cloudforce-one/events/aggregate`, {
      query: params,
    });
  }

  /**
   * Lists categories
   *
   * @see get_CategoryListComplete
   */
  async categoriesCatalogGet(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/cloudforce-one/events/categories/catalog`);
  }

  /**
   * Updates a category
   *
   * @see post_CategoryUpdate
   */
  async categoriesCreate(accountId: string, categoryId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/cloudforce-one/events/categories/${categoryId}`);
  }

  /**
   * This method is deprecated. Please use `event_create_bulk` instead
   *
   * @see post_DOSEventCreateBulkWithRelationships
   */
  async createBulkRelationshipsCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/cloudforce-one/events/create/bulk/relationships`);
  }

  /**
   * List groups for an account
   *
   * @see get_GroupList
   */
  async datasetGroupsGetGroup(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/cloudforce-one/events/dataset/-/groups`);
  }

  /**
   * Create a group
   *
   * @see post_GroupCreate
   */
  async datasetGroupsCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/cloudforce-one/events/dataset/-/groups`);
  }

  /**
   * Delete a group for an account
   *
   * @see delete_GroupDelete
   */
  async datasetGroupsDelete(accountId: string, groupId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/cloudforce-one/events/dataset/-/groups/${groupId}`);
  }

  /**
   * Read a group for an account
   *
   * @see get_GroupRead
   */
  async datasetGroupsGetV2(accountId: string, groupId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/cloudforce-one/events/dataset/-/groups/${groupId}`);
  }

  /**
   * Update a group
   *
   * @see put_GroupUpdate
   */
  async datasetGroupsUpdate(accountId: string, groupId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/cloudforce-one/events/dataset/-/groups/${groupId}`);
  }

  /**
   * List group members
   *
   * @see get_GroupMemberList
   */
  async datasetGroupsMembersGet(accountId: string, groupId: string): Promise<unknown> {
    return this._client.get<unknown>(
      `/accounts/${accountId}/cloudforce-one/events/dataset/-/groups/${groupId}/members`,
    );
  }

  /**
   * Create a group member
   *
   * @see post_GroupMemberCreate
   */
  async datasetGroupsMembersCreate(accountId: string, groupId: string): Promise<unknown> {
    return this._client.post<unknown>(
      `/accounts/${accountId}/cloudforce-one/events/dataset/-/groups/${groupId}/members`,
    );
  }

  /**
   * Delete a group member
   *
   * @see delete_GroupMemberDelete
   */
  async datasetGroupsMembersDelete(accountId: string, groupId: string, memberId: string): Promise<void> {
    return this._client.delete<void>(
      `/accounts/${accountId}/cloudforce-one/events/dataset/-/groups/${groupId}/members/${memberId}`,
    );
  }

  /**
   * Deletes a dataset given a datasetId.
   *
   * @see delete_DatasetDelete
   */
  async datasetDelete(accountId: string, datasetId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/cloudforce-one/events/dataset/${datasetId}`);
  }

  /**
   * Updates an existing dataset
   *
   * @see post_DatasetUpdate
   */
  async datasetCreate(accountId: string, datasetId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/cloudforce-one/events/dataset/${datasetId}`);
  }

  /**
   * Copies specified events from one dataset to another dataset
   *
   * @see post_EventCopyToNewDS
   */
  async datasetCopyCreate(accountId: string, datasetId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/cloudforce-one/events/dataset/${datasetId}/copy`, {
      body: { ...params },
    });
  }

  /**
   * Retrieves a specific event by its UUID.
   *
   * @see get_EventRead
   */
  async datasetEventsGet(accountId: string, datasetId: string, eventId: string): Promise<unknown> {
    return this._client.get<unknown>(
      `/accounts/${accountId}/cloudforce-one/events/dataset/${datasetId}/events/${eventId}`,
    );
  }

  /**
   * Creates a new indicator type and initializes its dedicated Durable Object
   *
   * @see post_IndicatorTypeCreate
   */
  async datasetIndicatorTypesCreateCreate(accountId: string, datasetId: string): Promise<unknown> {
    return this._client.post<unknown>(
      `/accounts/${accountId}/cloudforce-one/events/dataset/${datasetId}/indicatorTypes/create`,
    );
  }

  /**
   * This method is deprecated. Please use /events/indicators to retrieve a paginated list of indicators.
   *
   * @see get_IndicatorListLegacy
   */
  async datasetIndicatorsGetIndicatorLegacy(
    accountId: string,
    datasetId: string,
    params?: Record<string, unknown>,
  ): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/cloudforce-one/events/dataset/${datasetId}/indicators`, {
      query: params,
    });
  }

  /**
   * Creates multiple indicators at once with their respective types and related datasets.
   *
   * @see post_IndicatorCreateBulk
   */
  async datasetIndicatorsBulkCreate(accountId: string, datasetId: string): Promise<unknown> {
    return this._client.post<unknown>(
      `/accounts/${accountId}/cloudforce-one/events/dataset/${datasetId}/indicators/bulk`,
    );
  }

  /**
   * Creates a new indicator with the specified type and related datasets.
   *
   * @see post_IndicatorCreate
   */
  async datasetIndicatorsCreateCreate(accountId: string, datasetId: string): Promise<unknown> {
    return this._client.post<unknown>(
      `/accounts/${accountId}/cloudforce-one/events/dataset/${datasetId}/indicators/create`,
    );
  }

  /**
   * Returns all mirrored tags from the indicator dataset (DO mirror table). No pagination.
   *
   * @see get_IndicatorTagsList
   */
  async datasetIndicatorsTagsGet(accountId: string, datasetId: string): Promise<unknown> {
    return this._client.get<unknown>(
      `/accounts/${accountId}/cloudforce-one/events/dataset/${datasetId}/indicators/tags`,
    );
  }

  /**
   * Deletes a specific indicator by its UUID.
   *
   * @see delete_IndicatorDelete
   */
  async datasetIndicatorsDelete(accountId: string, datasetId: string, indicatorId: string): Promise<void> {
    return this._client.delete<void>(
      `/accounts/${accountId}/cloudforce-one/events/dataset/${datasetId}/indicators/${indicatorId}`,
    );
  }

  /**
   * Retrieves a specific indicator by its UUID.
   *
   * @see get_IndicatorRead
   */
  async datasetIndicatorsGetIndicator(accountId: string, datasetId: string, indicatorId: string): Promise<unknown> {
    return this._client.get<unknown>(
      `/accounts/${accountId}/cloudforce-one/events/dataset/${datasetId}/indicators/${indicatorId}`,
    );
  }

  /**
   * Updates an existing indicator's properties.
   *
   * @see patch_IndicatorUpdate
   */
  async datasetIndicatorsPatch(accountId: string, datasetId: string, indicatorId: string): Promise<unknown> {
    return this._client.patch<unknown>(
      `/accounts/${accountId}/cloudforce-one/events/dataset/${datasetId}/indicators/${indicatorId}`,
    );
  }

  /**
   * Moves specified events from one dataset to another dataset
   *
   * @see post_EventMoveToNewDS
   */
  async datasetMoveCreate(accountId: string, datasetId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/cloudforce-one/events/dataset/${datasetId}/move`, {
      body: { ...params },
    });
  }

  /**
   * List permissions
   *
   * @see get_PermissionList
   */
  async datasetPermissionsGet(accountId: string, datasetId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/cloudforce-one/events/dataset/${datasetId}/permissions`);
  }

  /**
   * Create a permission
   *
   * @see post_PermissionCreate
   */
  async datasetPermissionsCreate(accountId: string, datasetId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/cloudforce-one/events/dataset/${datasetId}/permissions`);
  }

  /**
   * Delete a permission
   *
   * @see delete_PermissionDelete
   */
  async datasetPermissionsDelete(accountId: string, datasetId: string, grantId: string): Promise<void> {
    return this._client.delete<void>(
      `/accounts/${accountId}/cloudforce-one/events/dataset/${datasetId}/permissions/${grantId}`,
    );
  }

  /**
   * Update a permission
   *
   * @see put_PermissionUpdate
   */
  async datasetPermissionsUpdate(accountId: string, datasetId: string, grantId: string): Promise<unknown> {
    return this._client.put<unknown>(
      `/accounts/${accountId}/cloudforce-one/events/dataset/${datasetId}/permissions/${grantId}`,
    );
  }

  /**
   * Returns indicators associated with the provided tag UUID across all indicator datasets, with pagination.
   *
   * @see get_TagIndicatorsList
   */
  async datasetTagsIndicatorsGet(
    accountId: string,
    tagUuid: string,
    datasetId: string,
    params?: Record<string, unknown>,
  ): Promise<unknown> {
    return this._client.get<unknown>(
      `/accounts/${accountId}/cloudforce-one/events/dataset/${datasetId}/tags/${tagUuid}/indicators`,
      {
        query: params,
      },
    );
  }

  /**
   * Lists all target industries for a specific dataset
   *
   * @see get_TargetIndustryListByDataset
   */
  async datasetTargetIndustriesGet(accountId: string, datasetId: string): Promise<unknown> {
    return this._client.get<unknown>(
      `/accounts/${accountId}/cloudforce-one/events/dataset/${datasetId}/targetIndustries`,
    );
  }

  /**
   * Populate dataset-specific lookup tables from existing Events data with batch processing
   *
   * @see post_DatasetPopulate
   */
  async datasetsPopulateCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/cloudforce-one/events/datasets/populate`);
  }

  /**
   * Execute GraphQL aggregations over threat events. Supports multi-dimensional group-bys, optional date range filtering, and multi-dataset aggregation.
   *
   * @see post_EventGraphQL
   */
  async graphqlCreateGraphQl(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/cloudforce-one/events/graphql`);
  }

  /**
   * Lists indicator types across multiple datasets
   *
   * @see get_IndicatorTypesList
   */
  async indicatorTypesGet(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/cloudforce-one/events/indicator-types`, {
      query: params,
    });
  }

  /**
   * Retrieves a paginated list of indicators across specified datasets. Use datasetIds=all or datasetIds=* to query all datasets for the account. If no datasetIds provided, uses the default dataset.
   *
   * @see get_IndicatorList
   */
  async indicatorsGet(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/cloudforce-one/events/indicators`, {
      query: params,
    });
  }

  /**
   * Retrieve all saved event queries for the account
   *
   * @see get_EventQueryList
   */
  async queriesGetEvent(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/cloudforce-one/events/queries`);
  }

  /**
   * Create a new saved event query for the account
   *
   * @see post_EventQueryCreate
   */
  async queriesCreateCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/cloudforce-one/events/queries/create`);
  }

  /**
   * Delete a saved event query by its ID
   *
   * @see delete_EventQueryDelete
   */
  async queriesDelete(accountId: string, queryId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/cloudforce-one/events/queries/${queryId}`);
  }

  /**
   * Retrieve a saved event query by its ID
   *
   * @see get_EventQueryRead
   */
  async queriesGetV2(accountId: string, queryId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/cloudforce-one/events/queries/${queryId}`);
  }

  /**
   * Update an existing saved event query by its ID
   *
   * @see patch_EventQueryUpdate
   */
  async queriesPatch(accountId: string, queryId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/cloudforce-one/events/queries/${queryId}`);
  }

  /**
   * Update an existing saved event query by its ID
   *
   * @see post_EventQueryUpdate
   */
  async queriesCreate(accountId: string, queryId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/cloudforce-one/events/queries/${queryId}`);
  }

  /**
   * Creates event references for a event
   *
   * @see post_EventReferenceCreate
   */
  async relateCreateCreate(accountId: string, eventId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/cloudforce-one/events/relate/${eventId}/create`);
  }

  /**
   * Creates a directed relationship between two events. The relationship is from parent to child with a specified type.
   *
   * @see post_CreateEventRelationship
   */
  async relationshipsCreateCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/cloudforce-one/events/relationships/create`);
  }

  /**
   * Returns all Source-of-Truth tags for an account.
   *
   * @see get_TagList
   */
  async tagsGet(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/cloudforce-one/events/tags`, {
      query: params,
    });
  }

  /**
   * Returns all Source-of-Truth tag categories for an account.
   *
   * @see get_TagCategoryList
   */
  async tagsCategoriesGet(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/cloudforce-one/events/tags/categories`, {
      query: params,
    });
  }

  /**
   * Creates a new Source-of-Truth tag category for an account.
   *
   * @see post_TagCategoryCreate
   */
  async tagsCategoriesCreateCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/cloudforce-one/events/tags/categories/create`);
  }

  /**
   * Deletes a Source-of-Truth tag category by UUID.
   *
   * @see delete_TagCategoryDelete
   */
  async tagsCategoriesDelete(accountId: string, categoryUuid: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/cloudforce-one/events/tags/categories/${categoryUuid}`);
  }

  /**
   * Updates a Source-of-Truth tag category by UUID.
   *
   * @see patch_TagCategoryUpdate
   */
  async tagsCategoriesPatch(accountId: string, categoryUuid: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/cloudforce-one/events/tags/categories/${categoryUuid}`);
  }

  /**
   * Deletes a Source-of-Truth tag by UUID.
   *
   * @see delete_TagDelete
   */
  async tagsDelete(accountId: string, tagUuid: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/cloudforce-one/events/tags/${tagUuid}`);
  }

  /**
   * Updates a Source-of-Truth tag by UUID.
   *
   * @see patch_TagUpdate
   */
  async tagsPatch(accountId: string, tagUuid: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/cloudforce-one/events/tags/${tagUuid}`);
  }

  /**
   * Lists all target industries from industry map catalog
   *
   * @see get_TargetIndustryListComplete
   */
  async targetIndustriesCatalogGet(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/cloudforce-one/events/targetIndustries/catalog`);
  }

  /**
   * Updates multiple events with the same field values. Maximum 100 events per request.
   *
   * @see patch_EventUpdateBulk
   */
  async updateBulkPatch(accountId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/cloudforce-one/events/update/bulk`);
  }

  /**
   * Deletes one or more events
   *
   * @see delete_EventDelete
   */
  async deleteDelete(accountId: string, datasetId: string, params?: Record<string, unknown>): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/cloudforce-one/events/${datasetId}/delete`, {
      query: params,
    });
  }

  /**
   * Revert an Events Durable Object to a point in time
   *
   * @see post_EventDoRevert
   */
  async revertDoCreate(accountId: string, datasetId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/cloudforce-one/events/${datasetId}/revert-do`);
  }

  /**
   * Updates an event
   *
   * @see post_EventUpdate
   */
  async create(accountId: string, eventId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/cloudforce-one/events/${eventId}`);
  }

  /**
   * Updates a raw event
   *
   * @see post_EventRawUpdate
   */
  async rawCreate(accountId: string, eventId: string, rawId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/cloudforce-one/events/${eventId}/raw/${rawId}`);
  }

  /**
   * The `event_id` must be defined (to list existing events (and their IDs), use the [`Filter and List Events`](https://developers.cloudflare.com/api/resources/cloudforce_one/subresources/threat_events/methods/list/) endpoint). Also, must provide query parameters.
   *
   * @see get_EventRelationships
   */
  async relationshipsGet(accountId: string, eventId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/cloudforce-one/events/${eventId}/relationships`, {
      query: params,
    });
  }

  /**
   * Execute GraphQL aggregations over threat events. Supports multi-dimensional group-bys, optional date range filtering, and multi-dataset aggregation.
   *
   * @see post_EventGraphQLV2
   */
  async graphqlCreateGraphQlv2(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/cloudforce-one/v2/events/graphql`);
  }
}

/**
 * Requests (additional) operations
 */
export class RequestsExtra extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists priority intelligence requests in Cloudforce One.
   *
   * @see cloudforce-one-priority-list
   */
  async priorityCreate(accountId: string): Promise<components['schemas']['cloudforce-one-requests_priority-item'][]> {
    return this._client.post<components['schemas']['cloudforce-one-requests_priority-item'][]>(
      `/accounts/${accountId}/cloudforce-one/requests/priority`,
    );
  }

  /**
   * Uploads a new asset to a Cloudforce One intelligence request.
   *
   * @see cloudforce-one-request-asset-new
   */
  async assetNewCreate(
    accountId: string,
    requestId: string,
  ): Promise<components['schemas']['cloudforce-one-requests_request-asset-item']> {
    return this._client.post<components['schemas']['cloudforce-one-requests_request-asset-item']>(
      `/accounts/${accountId}/cloudforce-one/requests/${requestId}/asset/new`,
    );
  }
}

/**
 * Rules operations
 */
export class Rules extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Delete all rules in an account.
   *
   * @see cloudforce-one-delete-all-rules
   */
  async deleteAllRules(accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/cloudforce-one/rules`);
  }

  /**
   * List all rules for an account with optional filtering.
   *
   * @see cloudforce-one-list-rules
   */
  async list(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/cloudforce-one/rules`, {
      query: params,
    });
  }

  /**
   * Create a new detection rule.
   *
   * @see cloudforce-one-create-rule
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/cloudforce-one/rules`);
  }

  /**
   * Get statistics about rules for the dashboard.
   *
   * @see cloudforce-one-get-rule-stats
   */
  async statsGet(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/cloudforce-one/rules/stats`);
  }

  /**
   * Get the folder tree structure for rules navigation.
   *
   * @see cloudforce-one-get-rule-tree
   */
  async treeGet(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/cloudforce-one/rules/tree`);
  }

  /**
   * Validate rule syntax, name uniqueness, namespace, and meta checks.
   *
   * @see cloudforce-one-validate-rule
   */
  async validateCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/cloudforce-one/rules/validate`);
  }

  /**
   * Delete an existing rule.
   *
   * @see cloudforce-one-delete-rule
   */
  async deleteOneRule(accountId: string, id: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/cloudforce-one/rules/${id}`);
  }

  /**
   * Get a single rule by ID.
   *
   * @see cloudforce-one-get-rule
   */
  async get(accountId: string, id: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/cloudforce-one/rules/${id}`);
  }

  /**
   * Update an existing rule.
   *
   * @see cloudforce-one-update-rule
   */
  async update(accountId: string, id: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/cloudforce-one/rules/${id}`);
  }
}

/**
 * Threat intelligence platform — request investigations, scan indicators, and track threat events
 */
export class CloudforceOne extends APIResource {
  readonly scans: Scans;
  readonly binarystorage: BinaryStorage;
  readonly requests: Requests;
  readonly threatevents: ThreatEvents;
  readonly events: Events;
  readonly requestsextra: RequestsExtra;
  readonly rules: Rules;

  constructor(client: CloudflareClient) {
    super(client);
    this.scans = new Scans(client);
    this.binarystorage = new BinaryStorage(client);
    this.requests = new Requests(client);
    this.threatevents = new ThreatEvents(client);
    this.events = new Events(client);
    this.requestsextra = new RequestsExtra(client);
    this.rules = new Rules(client);
  }
}
