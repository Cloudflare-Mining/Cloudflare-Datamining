/**
 * scm resource
 * @generated from apis/scm/schema.ts
 *
 * Source code management connections — link Git providers, browse repos, create pull requests, and manage grants
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Source code management connections — link Git providers, browse repos, create pull requests, and manage grants
 */
export class Scm extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }
}
