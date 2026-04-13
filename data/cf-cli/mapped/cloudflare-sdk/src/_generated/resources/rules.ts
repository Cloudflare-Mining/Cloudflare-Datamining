/**
 * rules resource
 * @generated from apis/rules/schema.ts
 *
 * Account-level IP lists, hostname lists, and other reusable lists referenced by firewall rules and rulesets
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Named lists of IPs, hostnames, ASNs, or redirects that can be referenced in rule expressions
 */
export class Lists extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Fetches all lists in the account.
   *
   * @see lists-get-lists
   */
  async list(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/rules/lists`);
  }

  /**
   * Fetches the details of a list.
   *
   * @see lists-get-a-list
   */
  async get(listId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/rules/lists/${listId}`);
  }

  /**
   * Creates a new list of the specified kind.
   *
   * @see lists-create-a-list
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/rules/lists`);
  }

  /**
   * Updates the description of a list.
   *
   * @see lists-update-a-list
   */
  async update(listId: string, accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/rules/lists/${listId}`);
  }

  /**
   * Deletes a specific list and all its items.
   *
   * @see lists-delete-a-list
   */
  async delete(listId: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/rules/lists/${listId}`);
  }

  /**
   * Gets the current status of an asynchronous operation on a list. The `status` property can have one of the following values: `pending`, `running`, `completed`, or `failed`. If the status is `failed`, the `error` property will contain a message describing the error.
   *
   * @see lists-get-bulk-operation-status
   */
  async bulkOperationsGet(operationId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/rules/lists/bulk_operations/${operationId}`);
  }

  /**
   * Fetches all the items in the list.
   *
   * @see lists-get-list-items
   */
  async itemsList(listId: string, accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/rules/lists/${listId}/items`, {
      query: params,
    });
  }

  /**
   * Fetches a list item in the list.
   *
   * @see lists-get-a-list-item
   */
  async itemsGet(itemId: string, listId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/rules/lists/${listId}/items/${itemId}`);
  }

  /**
   * Appends new items to the list. This operation is asynchronous. To get current the operation status, invoke the `Get bulk operation status` endpoint with the returned `operation_id`. There is a limit of 1 pending bulk operation per account. If an outstanding bulk operation is in progress, the request will be rejected.
   *
   * @see lists-create-list-items
   */
  async itemsCreate(listId: string, accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/rules/lists/${listId}/items`);
  }

  /**
   * Removes all existing items from the list and adds the provided items to the list. This operation is asynchronous. To get current the operation status, invoke the `Get bulk operation status` endpoint with the returned `operation_id`. There is a limit of 1 pending bulk operation per account. If an outstanding bulk operation is in progress, the request will be rejected.
   *
   * @see lists-update-all-list-items
   */
  async itemsUpdate(listId: string, accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/rules/lists/${listId}/items`);
  }

  /**
   * Removes one or more items from a list. This operation is asynchronous. To get current the operation status, invoke the `Get bulk operation status` endpoint with the returned `operation_id`. There is a limit of 1 pending bulk operation per account. If an outstanding bulk operation is in progress, the request will be rejected.
   *
   * @see lists-delete-list-items
   */
  async itemsDelete(listId: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/rules/lists/${listId}/items`);
  }
}

/**
 * Account-level IP lists, hostname lists, and other reusable lists referenced by firewall rules and rulesets
 */
export class Rules extends APIResource {
  readonly lists: Lists;

  constructor(client: CloudflareClient) {
    super(client);
    this.lists = new Lists(client);
  }
}
