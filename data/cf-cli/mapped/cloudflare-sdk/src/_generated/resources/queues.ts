/**
 * queues resource
 * @generated from apis/queues/schema.ts
 *
 * Reliable message queuing between Workers — produce, consume, and batch-process messages at scale
 */
import type { components } from 'cloudflare-openapi';
import { APIResource, CloudflareClient } from '../../client.js';

// Type aliases from OpenAPI components
export type QueueBatch = components['schemas']['mq_queue-batch'];

/**
 * Push messages to a queue and pull or acknowledge them from consumers
 */
export class Messages extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Acknowledge + Retry messages from a Queue
   *
   * @see queues-ack-messages
   */
  async ack(queueId: string, accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/queues/${queueId}/messages/ack`);
  }

  /**
   * Pull a batch of messages from a Queue
   *
   * @see queues-pull-messages
   */
  async pull(queueId: string, accountId: string): Promise<components['schemas']['mq_queue-batch']> {
    return this._client.post<components['schemas']['mq_queue-batch']>(
      `/accounts/${accountId}/queues/${queueId}/messages/pull`,
    );
  }
}

/**
 * Remove all pending messages from a queue
 */
export class Purge extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Get details about a Queue's purge status.
   *
   * @see queues-purge-get
   */
  async status(queueId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/queues/${queueId}/purge`);
  }

  /**
   * Deletes all messages from the Queue.
   *
   * @see queues-purge
   */
  async start(queueId: string, accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/queues/${queueId}/purge`);
  }
}

/**
 * Workers that automatically receive and process messages from a queue
 */
export class Consumers extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Returns the consumers for a Queue
   *
   * @see queues-list-consumers
   */
  async list(queueId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/queues/${queueId}/consumers`);
  }

  /**
   * Creates a new consumer for a Queue
   *
   * @see queues-create-consumer
   */
  async create(queueId: string, accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/queues/${queueId}/consumers`);
  }

  /**
   * Updates the consumer for a queue, or creates one if it does not exist.
   *
   * @see queues-update-consumer
   */
  async update(consumerId: string, queueId: string, accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/queues/${queueId}/consumers/${consumerId}`);
  }

  /**
   * Deletes the consumer for a queue.
   *
   * @see queues-delete-consumer
   */
  async delete(consumerId: string, queueId: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/queues/${queueId}/consumers/${consumerId}`);
  }
}

/**
 * Reliable message queuing between Workers — produce, consume, and batch-process messages at scale
 */
export class Queues extends APIResource {
  readonly messages: Messages;
  readonly purge: Purge;
  readonly consumers: Consumers;

  constructor(client: CloudflareClient) {
    super(client);
    this.messages = new Messages(client);
    this.purge = new Purge(client);
    this.consumers = new Consumers(client);
  }

  /**
   * Returns the queues owned by an account.
   *
   * @see queues-list
   */
  async list(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/queues`);
  }

  /**
   * Get details about a specific queue.
   *
   * @see queues-get
   */
  async get(queueId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/queues/${queueId}`);
  }

  /**
   * Create a new queue
   *
   * @see queues-create
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/queues`);
  }

  /**
   * Updates a Queue. Note that this endpoint does not support partial updates. If successful, the Queue's configuration is overwritten with the supplied configuration.
   *
   * @see queues-update
   */
  async update(queueId: string, accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/queues/${queueId}`);
  }

  /**
   * Updates a Queue.
   *
   * @see queues-update-partial
   */
  async edit(queueId: string, accountId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/queues/${queueId}`);
  }

  /**
   * Deletes a queue
   *
   * @see queues-delete
   */
  async delete(queueId: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/queues/${queueId}`);
  }
}
