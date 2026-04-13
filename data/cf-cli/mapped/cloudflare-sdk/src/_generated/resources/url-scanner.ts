/**
 * url-scanner resource
 * @generated from apis/url-scanner/schema.ts
 *
 * Scan URLs for phishing, malware, and other threats — submit scans and retrieve detailed results
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Raw HTTP response data captured during URL scans
 */
export class Responses extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Returns the raw response of the network request. Find the `response_id` in the `data.requests.response.hash`.
   *
   * @see urlscanner-get-response-v2
   */
  async get(responseId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/urlscanner/v2/responses/${responseId}`);
  }
}

/**
 * URL scan requests and results — submit URLs for analysis and retrieve threat verdicts
 */
export class Scans extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Use a subset of ElasticSearch Query syntax to filter scans. Some example queries:<br/> <br/>- 'path:"/bundles/jquery.js"': Searches for scans who requested resources with the given path.<br/>- 'page.asn:AS24940 AND hash:xxx': Websites hosted in AS24940 where a resource with the given hash was downloaded.<br/>- 'page.domain:microsoft* AND verdicts.malicious:true AND NOT page.domain:microsoft.com': malicious scans whose hostname starts with "microsoft".<br/>- 'apikey:me AND date:[2025-01 TO 2025-02]': my scans from 2025 January to 2025 February.
   *
   * @see urlscanner-search-scans-v2
   */
  async list(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/urlscanner/v2/search`, {
      query: params,
    });
  }

  /**
   * Get URL scan by uuid
   *
   * @see urlscanner-get-scan-v2
   */
  async get(scanId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/urlscanner/v2/result/${scanId}`);
  }

  /**
   * Submit a URL to scan. Check limits at https://developers.cloudflare.com/security-center/investigate/scan-limits/.
   *
   * @see urlscanner-create-scan-v2
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/urlscanner/v2/scan`);
  }

  /**
   * Submit URLs to scan. Check limits at https://developers.cloudflare.com/security-center/investigate/scan-limits/ and take into account scans submitted in bulk have lower priority and may take longer to finish.
   *
   * @see urlscanner-create-scan-bulk-v2
   */
  async bulkCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/urlscanner/v2/bulk`);
  }

  /**
   * Get a URL scan's HAR file. See HAR spec at http://www.softwareishard.com/blog/har-12-spec/.
   *
   * @see urlscanner-get-scan-har-v2
   */
  async har(scanId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/urlscanner/v2/har/${scanId}`);
  }

  /**
   * Get scan's screenshot by resolution (desktop/mobile/tablet).
   *
   * @see urlscanner-get-scan-screenshot-v2
   */
  async screenshot(scanId: string, accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/urlscanner/v2/screenshots/${scanId}.png`, {
      query: params,
    });
  }

  /**
   * Returns a plain text response, with the scan's DOM content as rendered by Chrome.
   *
   * @see urlscanner-get-scan-dom-v2
   */
  async dom(scanId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/urlscanner/v2/dom/${scanId}`);
  }
}

/**
 * Response operations
 */
export class Response extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Returns the plain response of the network request.
   *
   * @see urlscanner-get-response-text
   */
  async get(responseId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/urlscanner/response/${responseId}`);
  }
}

/**
 * Scan operations
 */
export class Scan extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Search scans by date and webpages' requests, including full URL (after redirects), hostname, and path. <br/> A successful scan will appear in search results a few minutes after finishing but may take much longer if the system in under load. By default, only successfully completed scans will appear in search results, unless searching by `scanId`. Please take into account that older scans may be removed from the search index at an unspecified time.
   *
   * @see urlscanner-search-scans
   */
  async getUrlscannerScans(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/urlscanner/scan`, {
      query: params,
    });
  }

  /**
   * Submit a URL to scan. You can also set some options, like the visibility level and custom headers. Check limits at https://developers.cloudflare.com/security-center/investigate/scan-limits/.
   *
   * @see urlscanner-create-scan
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/urlscanner/scan`);
  }

  /**
   * Get URL scan by uuid
   *
   * @see urlscanner-get-scan
   */
  async getUrlscannerScan(scanId: string, accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/urlscanner/scan/${scanId}`, {
      query: params,
    });
  }

  /**
   * Get a URL scan's HAR file. See HAR spec at http://www.softwareishard.com/blog/har-12-spec/.
   *
   * @see urlscanner-get-scan-har
   */
  async harGet(scanId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/urlscanner/scan/${scanId}/har`);
  }

  /**
   * Get scan's screenshot by resolution (desktop/mobile/tablet).
   *
   * @see urlscanner-get-scan-screenshot
   */
  async screenshotGet(scanId: string, accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/urlscanner/scan/${scanId}/screenshot`, {
      query: params,
    });
  }
}

/**
 * Scan URLs for phishing, malware, and other threats — submit scans and retrieve detailed results
 */
export class URLScanner extends APIResource {
  readonly responses: Responses;
  readonly scans: Scans;
  readonly response: Response;
  readonly scan: Scan;

  constructor(client: CloudflareClient) {
    super(client);
    this.responses = new Responses(client);
    this.scans = new Scans(client);
    this.response = new Response(client);
    this.scan = new Scan(client);
  }
}
