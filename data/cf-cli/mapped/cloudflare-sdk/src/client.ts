import { APIError, AuthenticationError, CloudflareError, RateLimitError } from './errors.js';

/**
 * Build a User-Agent string in standard `product/version` format.
 * Falls back to `cf-cli` when no version is provided.
 */
export function buildUserAgent(version?: string): string {
  return version ? `cf-cli/${version}` : 'cf-cli';
}

export interface ClientOptions {
  /** Cloudflare API token for authentication */
  apiToken: string;
  /** Base URL for API requests (default: https://api.cloudflare.com/client/v4) */
  baseURL?: string;
  /** Request timeout in milliseconds (default: 60000) */
  timeout?: number;
  /** Custom fetch implementation */
  fetch?: typeof globalThis.fetch;
  /** Default API version date (YYYY-MM-DD) sent via the `api-version` header. Per-request overrides take precedence. */
  apiVersion?: string;
  /** Additional headers sent on every request (e.g. User-Agent, X-CF-CLI-Mode). Per-request headers take precedence. */
  defaultHeaders?: Record<string, string>;
}

export interface RequestOptions {
  /** Additional headers to include */
  headers?: Record<string, string>;
  /** AbortSignal for request cancellation */
  signal?: AbortSignal;
  /** Override timeout for this request */
  timeout?: number;
}

interface RequestConfig extends RequestOptions {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  path: string;
  query?: Record<string, unknown>;
  body?: unknown;
}

/**
 * Base Cloudflare API client
 */
export class CloudflareClient {
  readonly apiToken: string;
  readonly baseURL: string;
  readonly timeout: number;
  readonly apiVersion: string | undefined;
  private readonly _fetch: typeof globalThis.fetch;
  private readonly _defaultHeaders: Record<string, string>;

  constructor(options: ClientOptions) {
    if (!options.apiToken) {
      throw new AuthenticationError('apiToken is required');
    }

    this.apiToken = options.apiToken;
    this.baseURL = options.baseURL ?? 'https://api.cloudflare.com/client/v4';
    this.timeout = options.timeout ?? 60000;
    this.apiVersion = options.apiVersion;
    this._fetch = options.fetch ?? globalThis.fetch;
    this._defaultHeaders = options.defaultHeaders ?? {};
  }

  /**
   * Make a GET request
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async get<T>(path: string, options?: RequestOptions & { query?: any }): Promise<T> {
    return this._request<T>({
      method: 'GET',
      path,
      query: options?.query,
      ...options,
    });
  }

  /**
   * Make a POST request
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async post<T>(path: string, options?: RequestOptions & { body?: unknown; query?: any }): Promise<T> {
    return this._request<T>({
      method: 'POST',
      path,
      body: options?.body,
      query: options?.query,
      ...options,
    });
  }

  /**
   * Make a PUT request
   */
  async put<T>(path: string, options?: RequestOptions & { body?: unknown }): Promise<T> {
    return this._request<T>({
      method: 'PUT',
      path,
      body: options?.body,
      ...options,
    });
  }

  /**
   * Make a PATCH request
   */
  async patch<T>(path: string, options?: RequestOptions & { body?: unknown }): Promise<T> {
    return this._request<T>({
      method: 'PATCH',
      path,
      body: options?.body,
      ...options,
    });
  }

  /**
   * Make a DELETE request
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async delete<T>(path: string, options?: RequestOptions & { body?: unknown; query?: any }): Promise<T> {
    return this._request<T>({
      method: 'DELETE',
      path,
      query: options?.query,
      ...options,
    });
  }

  /**
   * Internal request method
   */
  private async _request<T>(config: RequestConfig): Promise<T> {
    const url = this._buildURL(config.path, config.query);
    const timeout = config.timeout ?? this.timeout;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    // Combine signals if user provided one
    const signal = config.signal ? AbortSignal.any([config.signal, controller.signal]) : controller.signal;

    try {
      const isRawBody =
        config.body instanceof FormData ||
        config.body instanceof Blob ||
        config.body instanceof ArrayBuffer ||
        config.body instanceof ReadableStream ||
        config.body instanceof URLSearchParams ||
        typeof config.body === 'string';

      const headers: Record<string, string> = {
        Authorization: `Bearer ${this.apiToken}`,
        // Only set JSON content-type for non-raw bodies (FormData etc. set their own)
        ...(!isRawBody ? { 'Content-Type': 'application/json' } : {}),
        ...(this.apiVersion ? { 'api-version': this.apiVersion } : {}),
        // Default User-Agent, then defaultHeaders (may override), then per-request headers (highest precedence)
        'User-Agent': buildUserAgent(),
        ...this._defaultHeaders,
        ...config.headers,
      };

      // Serialize body: raw types pass through, objects get JSON.stringified
      let serializedBody: BodyInit | null = null;
      if (config.body != null) {
        serializedBody = isRawBody ? (config.body as BodyInit) : JSON.stringify(config.body);
      }

      const response = await this._fetch(url, {
        method: config.method,
        headers,
        body: serializedBody,
        signal,
      });

      clearTimeout(timeoutId);

      return this._handleResponse<T>(response);
    } catch (error) {
      clearTimeout(timeoutId);

      if (error instanceof CloudflareError) {
        throw error;
      }

      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          throw new CloudflareError(`Request timed out after ${timeout}ms`);
        }
        throw new CloudflareError(`Request failed: ${error.message}`);
      }

      throw new CloudflareError('Unknown error occurred');
    }
  }

  /**
   * Build the full URL with query parameters
   */
  private _buildURL(path: string, query?: Record<string, unknown>): string {
    // Ensure baseURL ends with / and path doesn't start with / for proper joining
    const base = this.baseURL.endsWith('/') ? this.baseURL : `${this.baseURL}/`;
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    const url = new URL(cleanPath, base);

    if (query) {
      for (const [key, value] of Object.entries(query)) {
        if (value !== undefined && value !== null && value !== '') {
          url.searchParams.set(key, String(value));
        }
      }
    }

    return url.toString();
  }

  /**
   * Handle API response
   */
  private async _handleResponse<T>(response: Response): Promise<T> {
    const contentType = response.headers.get('content-type');
    const isJson = contentType?.includes('application/json');

    if (!response.ok) {
      let errorData: unknown;

      try {
        errorData = isJson ? await response.json() : await response.text();
      } catch {
        errorData = null;
      }

      if (response.status === 401) {
        throw new AuthenticationError('Invalid API token', response.status, errorData);
      }

      if (response.status === 429) {
        throw new RateLimitError('Rate limit exceeded', response.status, errorData);
      }

      throw new APIError(`API request failed with status ${response.status}`, response.status, errorData);
    }

    if (!isJson) {
      // For non-JSON responses (like text exports), return as-is
      return (await response.text()) as T;
    }

    const data = (await response.json()) as CloudflareAPIResponse<T>;

    // Check for API-level errors (success: false with errors array)
    if (data.success === false && data.errors && data.errors.length > 0) {
      const errorMessages = data.errors.map((e) => e.message).join(', ');
      throw new APIError(`API error: ${errorMessages}`, response.status, data);
    }

    // Cloudflare API wraps results in a standard envelope
    if ('result' in data) {
      return data.result as T;
    }

    return data as T;
  }
}

/**
 * Standard Cloudflare API response envelope
 */
interface CloudflareAPIResponse<T> {
  result?: T;
  success: boolean;
  errors: Array<{ code: number; message: string }>;
  messages: Array<{ code: number; message: string }>;
  result_info?: {
    page: number;
    per_page: number;
    count: number;
    total_count: number;
  };
}

/**
 * Base class for API resources
 */
export abstract class APIResource {
  protected _client: CloudflareClient;

  constructor(client: CloudflareClient) {
    this._client = client;
  }
}
