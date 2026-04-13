/**
 * durable-objects resource
 * @generated from apis/durable-objects/schema.ts
 *
 * Stateful serverless objects with transactional storage, ideal for coordination, sessions, and real-time collaboration
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * List Durable Object namespaces and inspect individual object instances within them
 */
export class Namespaces extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Returns the Durable Object namespaces owned by an account.
   *
   * @see durable-objects-namespace-list-namespaces
   */
  async list(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/workers/durable_objects/namespaces`, {
      query: params,
    });
  }

  /**
   * Returns the Durable Objects in a given namespace.
   *
   * @see durable-objects-namespace-list-objects
   */
  async objectsList(accountId: string, id: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/workers/durable_objects/namespaces/${id}/objects`, {
      query: params,
    });
  }
}

/**
 * Stateful serverless objects with transactional storage, ideal for coordination, sessions, and real-time collaboration
 */
export class DurableObjects extends APIResource {
  readonly namespaces: Namespaces;

  constructor(client: CloudflareClient) {
    super(client);
    this.namespaces = new Namespaces(client);
  }
}
