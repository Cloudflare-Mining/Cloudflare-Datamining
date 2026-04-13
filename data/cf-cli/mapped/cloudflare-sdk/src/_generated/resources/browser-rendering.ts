/**
 * browser-rendering resource
 * @generated from apis/browser-rendering/schema.ts
 *
 * Headless browser API — render pages, take screenshots, generate PDFs, scrape content, and extract structured data
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Render a page and return its full HTML content after JavaScript execution
 */
export class Content extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Fetches rendered HTML content from provided URL or HTML. Check available options like `gotoOptions` and `waitFor*` to control page load behaviour.
   *
   * @see brapi-post_Content
   */
  async create(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/browser-rendering/content`, {
      body: { ...params },
    });
  }
}

/**
 * Generate PDF documents from rendered web pages
 */
export class Pdf extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Fetches rendered PDF from provided URL or HTML. Check available options like `gotoOptions` and `waitFor*` to control page load behaviour.
   *
   * @see brapi-post_Pdf
   */
  async create(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/browser-rendering/pdf`, {
      body: { ...params },
    });
  }
}

/**
 * Scrape structured data from web pages using CSS selectors
 */
export class Scrape extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Get meta attributes like height, width, text and others of selected elements.
   *
   * @see brapi-post_Scrape
   */
  async create(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/browser-rendering/scrape`, {
      body: { ...params },
    });
  }
}

/**
 * Capture viewport or full-page screenshots as PNG or JPEG images
 */
export class Screenshot extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Takes a screenshot of a webpage from provided URL or HTML. Control page loading with `gotoOptions` and `waitFor*` options. Customize screenshots with `viewport`, `fullPage`, `clip` and others.
   *
   * @see brapi-post_Screenshot
   */
  async create(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/browser-rendering/screenshot`, {
      body: { ...params },
    });
  }
}

/**
 * Capture a complete DOM snapshot including styles and resources
 */
export class Snapshot extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Returns the page's HTML content and screenshot. Control page loading with `gotoOptions` and `waitFor*` options. Customize screenshots with `viewport`, `fullPage`, `clip` and others.
   *
   * @see brapi-post_Snapshot
   */
  async create(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/browser-rendering/snapshot`, {
      body: { ...params },
    });
  }
}

/**
 * Extract structured JSON data from rendered pages using selectors
 */
export class Json extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Gets json from a webpage from a provided URL or HTML. Pass `prompt` or `schema` in the body. Control page loading with `gotoOptions` and `waitFor*` options.
   *
   * @see brapi-post_Json
   */
  async create(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/browser-rendering/json`, {
      body: { ...params },
    });
  }
}

/**
 * Extract all links from a rendered web page
 */
export class Links extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Get links from a web page.
   *
   * @see brapi-post_Links
   */
  async create(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/browser-rendering/links`, {
      body: { ...params },
    });
  }
}

/**
 * Convert rendered web page content to clean Markdown format
 */
export class Markdown extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Gets markdown of a webpage from provided URL or HTML. Control page loading with `gotoOptions` and `waitFor*` options.
   *
   * @see brapi-post_Markdown
   */
  async create(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/browser-rendering/markdown`, {
      body: { ...params },
    });
  }
}

/**
 * Crawl operations
 */
export class Crawl extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Starts a crawl job for the provided URL and its children. Check available options like `gotoOptions` and `waitFor*` to control page load behaviour.
   *
   * @see brapi-post_Crawl
   */
  async create(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/browser-rendering/crawl`, {
      body: { ...params },
    });
  }

  /**
   * Cancels an ongoing crawl job by setting its status to cancelled and stopping all queued URLs.
   *
   * @see brapi-delete_CancelCrawl
   */
  async delete(accountId: string, jobId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/browser-rendering/crawl/${jobId}`);
  }

  /**
   * Returns the result of a crawl job.
   *
   * @see brapi-get_CrawlResult
   */
  async get(accountId: string, jobId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/browser-rendering/crawl/${jobId}`, {
      query: params,
    });
  }
}

/**
 * Headless browser API — render pages, take screenshots, generate PDFs, scrape content, and extract structured data
 */
export class BrowserRendering extends APIResource {
  readonly content: Content;
  readonly pdf: Pdf;
  readonly scrape: Scrape;
  readonly screenshot: Screenshot;
  readonly snapshot: Snapshot;
  readonly json: Json;
  readonly links: Links;
  readonly markdown: Markdown;
  readonly crawl: Crawl;

  constructor(client: CloudflareClient) {
    super(client);
    this.content = new Content(client);
    this.pdf = new Pdf(client);
    this.scrape = new Scrape(client);
    this.screenshot = new Screenshot(client);
    this.snapshot = new Snapshot(client);
    this.json = new Json(client);
    this.links = new Links(client);
    this.markdown = new Markdown(client);
    this.crawl = new Crawl(client);
  }
}
