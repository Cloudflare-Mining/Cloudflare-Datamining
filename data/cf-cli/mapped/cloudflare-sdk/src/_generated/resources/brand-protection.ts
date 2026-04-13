/**
 * brand-protection resource
 * @generated from apis/brand-protection/schema.ts
 *
 * Monitor the Internet for phishing sites, lookalike domains, and unauthorized use of your brand assets
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Brand monitoring queries that define search patterns for detecting brand abuse
 */
export class Queries extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Get all saved brand protection queries for an account
   *
   * @see get_GetDomainQueries
   */
  async list(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/cloudforce-one/v2/brand-protection/domain/queries`, {
      query: params,
    });
  }

  /**
   * Create a new saved brand protection logo query for visual similarity matching
   *
   * @see post_InsertLogoQuery
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/cloudforce-one/v2/brand-protection/logo/queries`);
  }

  /**
   * Delete a saved brand protection logo query. Returns 404 if the query ID doesn't exist.
   *
   * @see delete_DeleteLogoQuery
   */
  async delete(accountId: string, queryId: string): Promise<void> {
    return this._client.delete<void>(
      `/accounts/${accountId}/cloudforce-one/v2/brand-protection/logo/queries/${queryId}`,
    );
  }
}

/**
 * Detected brand abuse matches from monitoring queries with evidence downloads
 */
export class Matches extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Get paginated list of domain matches for a specific brand protection query
   *
   * @see get_DomainMatchList
   */
  async get(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/cloudforce-one/v2/brand-protection/domain/matches`, {
      query: params,
    });
  }
}

/**
 * Brand logos uploaded for visual similarity matching against phishing sites
 */
export class Logos extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Get all saved brand protection logo queries for an account. Optionally specify id to get a single query. Set download=true to include base64-encoded image data.
   *
   * @see get_GetLogoQueries
   */
  async list(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/cloudforce-one/v2/brand-protection/logo/queries`, {
      query: params,
    });
  }
}

/**
 * Detected visual logo matches found on potentially infringing websites
 */
export class LogoMatches extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Get paginated list of logo matches for a specific brand protection logo query
   *
   * @see get_LogoMatchList
   */
  async get(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/cloudforce-one/v2/brand-protection/logo/matches`, {
      query: params,
    });
  }
}

/**
 * Monitor the Internet for phishing sites, lookalike domains, and unauthorized use of your brand assets
 */
export class BrandProtection extends APIResource {
  readonly queries: Queries;
  readonly matches: Matches;
  readonly logos: Logos;
  readonly logomatches: LogoMatches;

  constructor(client: CloudflareClient) {
    super(client);
    this.queries = new Queries(client);
    this.matches = new Matches(client);
    this.logos = new Logos(client);
    this.logomatches = new LogoMatches(client);
  }

  /**
   * Submit an image and find the n closest matches from the scanned images index without creating any match records. Returns similarity scores and metadata for each match.
   *
   * @see post_SearchLogoSimilarity
   */
  async submit(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/cloudforce-one/v2/brand-protection/logo/search`, {
      body: { ...params },
    });
  }

  /**
   * Get the total number of saved brand protection queries (domain + logo) for an account
   *
   * @see get_TotalQueries
   */
  async urlInfo(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/cloudforce-one/v2/brand-protection/total-queries`);
  }
}
