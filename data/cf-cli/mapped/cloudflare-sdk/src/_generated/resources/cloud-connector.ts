/**
 * cloud-connector resource
 * @generated from apis/cloud-connector/schema.ts
 *
 * Route traffic from Cloudflare directly to cloud provider services (AWS, Azure, GCP) without origin servers
 */
import type { components } from 'cloudflare-openapi';
import { APIResource, CloudflareClient } from '../../client.js';

// Type aliases from OpenAPI components
export type CloudConnectorRules = components['schemas']['cloud-connector_rules'];

/**
 * Routing rules that map request patterns to cloud provider endpoints
 */
export class Rules extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Retrieves the Cloud Connector rules configured for a zone. Rules define how traffic is routed to cloud services.
   *
   * @see zone-cloud-connector-rules
   */
  async list(zoneId: string): Promise<components['schemas']['cloud-connector_rules']> {
    return this._client.get<components['schemas']['cloud-connector_rules']>(`/zones/${zoneId}/cloud_connector/rules`);
  }

  /**
   * Updates Cloud Connector rules for a zone, replacing the existing rule configuration.
   *
   * @see zone-cloud-conenctor-rules-put
   */
  async update(zoneId: string): Promise<components['schemas']['cloud-connector_rules']> {
    return this._client.put<components['schemas']['cloud-connector_rules']>(`/zones/${zoneId}/cloud_connector/rules`);
  }
}

/**
 * Route traffic from Cloudflare directly to cloud provider services (AWS, Azure, GCP) without origin servers
 */
export class CloudConnector extends APIResource {
  readonly rules: Rules;

  constructor(client: CloudflareClient) {
    super(client);
    this.rules = new Rules(client);
  }
}
