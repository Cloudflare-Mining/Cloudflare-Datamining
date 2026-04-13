/**
 * images resource
 * @generated from apis/images/schema.ts
 *
 * Store, resize, and deliver optimized images globally — variants, signing keys, and direct uploads
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Upload, transform, and serve images with named variants, signing keys, and usage stats
 */
export class V1 extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * List up to 100 images with one request. Use the optional parameters below to get a specific range of images.
   *
   * @see cloudflare-images-list-images
   */
  async list(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/images/v1`, {
      query: params,
    });
  }

  /**
   * Fetch details for a single image.
   *
   * @see cloudflare-images-image-details
   */
  async get(imageId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/images/v1/${imageId}`);
  }

  /**
   * Upload an image with up to 10 Megabytes using a single HTTP POST (multipart/form-data) request. An image can be uploaded by sending an image file or passing an accessible to an API url.
   *
   * @see cloudflare-images-upload-an-image-via-url
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/images/v1`);
  }

  /**
   * Update image access control. On access control change, all copies of the image are purged from cache.
   *
   * @see cloudflare-images-update-image
   */
  async edit(imageId: string, accountId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/images/v1/${imageId}`);
  }

  /**
   * Delete an image on Cloudflare Images. On success, all copies of the image are deleted and purged from cache.
   *
   * @see cloudflare-images-delete-image
   */
  async delete(imageId: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/images/v1/${imageId}`);
  }

  /**
   * Lists your signing keys. These can be found on your Cloudflare Images dashboard.
   *
   * @see cloudflare-images-keys-list-signing-keys
   */
  async keysList(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/images/v1/keys`);
  }

  /**
   * Create a new signing key with specified name. Returns all keys available.
   *
   * @see cloudflare-images-keys-add-signing-key
   */
  async keysUpdate(signingKeyName: string, accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/images/v1/keys/${signingKeyName}`);
  }

  /**
   * Delete signing key with specified name. Returns all keys available. When last key is removed, a new default signing key will be generated.
   *
   * @see cloudflare-images-keys-delete-signing-key
   */
  async keysDelete(signingKeyName: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/images/v1/keys/${signingKeyName}`);
  }

  /**
   * Fetch image statistics details for Cloudflare Images. The returned statistics detail storage usage, including the current image count vs this account's allowance.
   *
   * @see cloudflare-images-images-usage-statistics
   */
  async statsGet(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/images/v1/stats`);
  }

  /**
   * Lists existing variants.
   *
   * @see cloudflare-images-variants-list-variants
   */
  async variantsList(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/images/v1/variants`);
  }

  /**
   * Fetch details for a single variant.
   *
   * @see cloudflare-images-variants-variant-details
   */
  async variantsGet(variantId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/images/v1/variants/${variantId}`);
  }

  /**
   * Specify variants that allow you to resize images for different use cases.
   *
   * @see cloudflare-images-variants-create-a-variant
   */
  async variantsCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/images/v1/variants`);
  }

  /**
   * Updating a variant purges the cache for all images associated with the variant.
   *
   * @see cloudflare-images-variants-update-a-variant
   */
  async variantsEdit(variantId: string, accountId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/images/v1/variants/${variantId}`);
  }

  /**
   * Deleting a variant purges the cache for all images associated with the variant.
   *
   * @see cloudflare-images-variants-delete-a-variant
   */
  async variantsDelete(variantId: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/images/v1/variants/${variantId}`);
  }

  /**
   * Fetch base image. For most images this will be the originally uploaded file. For larger images it can be a near-lossless version of the original.
   *
   * @see cloudflare-images-base-image
   */
  async blobsGet(imageId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/images/v1/${imageId}/blob`);
  }
}

/**
 * V2 image listing with cursor-based pagination and authenticated direct upload URLs
 */
export class V2 extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * List up to 10000 images with up to 1000 results per page. Use the optional parameters below to get a specific range of images. Pagination is supported via continuation_token. **Metadata Filtering (Optional):** You can optionally filter images by custom metadata fields using the `meta.<field>[<operator>]=<value>` syntax. **Supported Operators:** - `eq` / `eq:string` / `eq:number` / `eq:boolean` - Exact match - `in` / `in:string` / `in:number` - Match any value in list (pipe-separated) **Metadata Filter Constraints:** - Maximum 5 metadata filters per request - Maximum 5 levels of nesting (e.g., `meta.first.second.third.fourth.fifth`) - Maximum 10 elements for list operators (`in`) - Supports string, number, and boolean value types **Examples:** ``` # List all images /images/v2 # Filter by metadata [eq] /images/v2?meta.status[eq:string]=active # Filter by metadata [in] /images/v2?meta.status[in]=pending|deleted|flagged # Filter by metadata [in:number] /images/v2?meta.ratings[in:number]=4|5 # Filter by nested metadata /images/v2?meta.region.name[eq]=eu-west # Combine metadata filters with creator /images/v2?meta.status[eq]=active&creator=user123 # Multiple metadata filters (AND logic) /images/v2?meta.status[eq]=active&meta.priority[eq:number]=5 ```
   *
   * @see cloudflare-images-list-images-v2
   */
  async list(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/images/v2`, {
      query: params,
    });
  }

  /**
   * Direct uploads allow users to upload images without API keys. A common use case are web apps, client-side applications, or mobile devices where users upload content directly to Cloudflare Images. This method creates a draft record for a future image. It returns an upload URL and an image identifier. To verify if the image itself has been uploaded, send an image details request (accounts/:account_identifier/images/v1/:identifier), and check that the `draft: true` property is not present.
   *
   * @see cloudflare-images-create-authenticated-direct-upload-url-v-2
   */
  async directUploadsCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/images/v2/direct_upload`);
  }
}

/**
 * V1 (additional) operations
 */
export class V1Extra extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Fetch details for a single variant with properties at the top level of the result.
   *
   * @see cloudflare-images-variants-variant-details-flat
   */
  async variantsFlatGet(variantId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/images/v1/variants/${variantId}/flat`);
  }
}

/**
 * Store, resize, and deliver optimized images globally — variants, signing keys, and direct uploads
 */
export class Images extends APIResource {
  readonly v1: V1;
  readonly v2: V2;
  readonly v1extra: V1Extra;

  constructor(client: CloudflareClient) {
    super(client);
    this.v1 = new V1(client);
    this.v2 = new V2(client);
    this.v1extra = new V1Extra(client);
  }
}
