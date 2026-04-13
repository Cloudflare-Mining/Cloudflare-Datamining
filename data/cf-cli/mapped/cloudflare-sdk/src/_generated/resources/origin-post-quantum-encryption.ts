/**
 * origin-post-quantum-encryption resource
 * @generated from apis/origin-post-quantum-encryption/schema.ts
 *
 * Enable post-quantum key exchange for connections between Cloudflare and your origin server
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Enable post-quantum key exchange for connections between Cloudflare and your origin server
 */
export class OriginPostQuantumEncryption extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Instructs Cloudflare to use Post-Quantum (PQ) key agreement algorithms when connecting to your origin. Preferred instructs Cloudflare to opportunistically send a Post-Quantum keyshare in the first message to the origin (for fastest connections when the origin supports and prefers PQ), supported means that PQ algorithms are advertised but only used when requested by the origin, and off means that PQ algorithms are not advertised.
   *
   * @see zone-cache-settings-get-origin-post-quantum-encryption-setting
   */
  async get(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/cache/origin_post_quantum_encryption`);
  }

  /**
   * Instructs Cloudflare to use Post-Quantum (PQ) key agreement algorithms when connecting to your origin. Preferred instructs Cloudflare to opportunistically send a Post-Quantum keyshare in the first message to the origin (for fastest connections when the origin supports and prefers PQ), supported means that PQ algorithms are advertised but only used when requested by the origin, and off means that PQ algorithms are not advertised.
   *
   * @see zone-cache-settings-change-origin-post-quantum-encryption-setting
   */
  async update(zoneId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/cache/origin_post_quantum_encryption`);
  }
}
