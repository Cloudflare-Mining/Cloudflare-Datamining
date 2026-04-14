/**
 * queues resource
 * @generated from apis/queues/schema.ts
 *
 * Reliable message queuing between Workers — produce, consume, and batch-process messages at scale
 */
import { APIResource, CloudflareClient } from '../../client.js';

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
  async pull(queueId: string, accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/queues/${queueId}/messages/pull`);
  }

  /**
   * Push a message to a Queue
   *
   * @see queues-push-message
   */
  async push(queueId: string, accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/queues/${queueId}/messages`);
  }

  /**
   * Push a batch of message to a Queue
   *
   * @see queues-push-messages
   */
  async pushBatch(queueId: string, accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/queues/${queueId}/messages/batch`);
  }

  /**
   * Preview messages from a Queue without leasing them. Messages remain available for subsequent preview or pull operations.
   *
   * @see queues-preview-messages
   */
  async preview(queueId: string, accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/queues/${queueId}/messages/preview`);
  }

  /**
   * Delete previewed messages from a Queue. Note that messages acknowledged this way aren't considered delivered, they are instantly deleted from this queue and do not affect metrics.
   *
   * @see queues-ack-preview-messages
   */
  async ackPreview(queueId: string, accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/queues/${queueId}/messages/preview/ack`);
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
   * Fetches the consumer for a queue by consumer id
   *
   * @see queues-get-consumer
   */
  async get(consumerId: string, queueId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/queues/${queueId}/consumers/${consumerId}`);
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
 * Manage queue subscriptions for event-driven message routing
 */
export class Subscriptions extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Get a paginated list of event subscriptions with optional sorting and filtering
   *
   * @see subscriptions-list
   */
  async list(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/event_subscriptions/subscriptions`, {
      query: params,
    });
  }

  /**
   * Get details about an existing event subscription
   *
   * @see subscriptions-get
   */
  async get(accountId: string, subscriptionId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/event_subscriptions/subscriptions/${subscriptionId}`);
  }

  /**
   * Create a new event subscription for a queue
   *
   * @see subscriptions-create
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/event_subscriptions/subscriptions`);
  }

  /**
   * Update an existing event subscription
   *
   * @see subscriptions-patch
   */
  async edit(accountId: string, subscriptionId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/event_subscriptions/subscriptions/${subscriptionId}`);
  }

  /**
   * Delete an existing event subscription
   *
   * @see subscriptions-delete
   */
  async delete(accountId: string, subscriptionId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/event_subscriptions/subscriptions/${subscriptionId}`);
  }
}

/**
 * Reliable message queuing between Workers — produce, consume, and batch-process messages at scale
 */
export class Queues extends APIResource {
  readonly messages: Messages;
  readonly purge: Purge;
  readonly consumers: Consumers;
  readonly subscriptions: Subscriptions;

  constructor(client: CloudflareClient) {
    super(client);
    this.messages = new Messages(client);
    this.purge = new Purge(client);
    this.consumers = new Consumers(client);
    this.subscriptions = new Subscriptions(client);
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
