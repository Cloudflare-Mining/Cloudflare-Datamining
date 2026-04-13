/**
 * snippets resource
 * @generated from apis/snippets/schema.ts
 *
 * Lightweight JavaScript snippets that run on requests before Workers — for quick header modifications and redirects
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Raw JavaScript source code content of individual snippets
 */
export class Content extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Fetches the content of a snippet belonging to the zone.
   *
   * @see getZoneSnippetContent
   */
  async get(zoneId: string, snippetName: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/snippets/${snippetName}/content`);
  }
}

/**
 * Rules that determine which requests trigger specific snippets based on URL patterns
 */
export class Rules extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Fetches all snippet rules belonging to the zone.
   *
   * @see listZoneSnippetRules
   */
  async list(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/snippets/snippet_rules`);
  }

  /**
   * Updates all snippet rules belonging to the zone.
   *
   * @see updateZoneSnippetRules
   */
  async update(zoneId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/snippets/snippet_rules`);
  }

  /**
   * Deletes all snippet rules belonging to the zone.
   *
   * @see deleteZoneSnippetRules
   */
  async delete(zoneId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/snippets/snippet_rules`);
  }
}

/**
 * Lightweight JavaScript snippets that run on requests before Workers — for quick header modifications and redirects
 */
export class Snippets extends APIResource {
  readonly content: Content;
  readonly rules: Rules;

  constructor(client: CloudflareClient) {
    super(client);
    this.content = new Content(client);
    this.rules = new Rules(client);
  }

  /**
   * Fetches all snippets belonging to the zone.
   *
   * @see listZoneSnippets
   */
  async list(zoneId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/snippets`, {
      query: params,
    });
  }

  /**
   * Fetches a snippet belonging to the zone.
   *
   * @see getZoneSnippet
   */
  async get(zoneId: string, snippetName: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/snippets/${snippetName}`);
  }

  /**
   * Creates or updates a snippet belonging to the zone.
   *
   * @see updateZoneSnippet
   */
  async update(zoneId: string, snippetName: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/snippets/${snippetName}`);
  }

  /**
   * Deletes a snippet belonging to the zone.
   *
   * @see deleteZoneSnippet
   */
  async delete(zoneId: string, snippetName: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/snippets/${snippetName}`);
  }
}
