/**
 * bot-management resource
 * @generated from apis/bot-management/schema.ts
 *
 * Bot detection and mitigation settings — configure bot scores, JavaScript detections, and challenge behavior
 */
import type { components } from 'cloudflare-openapi';
import { APIResource, CloudflareClient } from '../../client.js';

// Type aliases from OpenAPI components
export type BotManagementFeedbackReport = components['schemas']['bot-management_feedback_report'];

/**
 * Feedback operations
 */
export class Feedback extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Returns all feedback reports previously submitted for the specified zone. Feedback reports help improve detection by sharing samples of traffic that were misclassified as bots or humans.
   *
   * @see bot-management-zone-feedback-list
   */
  async list(zoneId: string): Promise<components['schemas']['bot-management_feedback_report'][]> {
    return this._client.get<components['schemas']['bot-management_feedback_report'][]>(
      `/zones/${zoneId}/bot_management/feedback`,
    );
  }

  /**
   * Submit a feedback report for the specified zone. Use `type` to indicate whether the report is a false positive (good traffic flagged as bot) or a false negative (bot traffic missed). Furthermore, you can also use `expression` as a wirefilter to identify the affected traffic sample. See more accepted API fields and expression types at https://developers.cloudflare.com/bots/concepts/feedback-loop/#api-fields and https://developers.cloudflare.com/bots/concepts/feedback-loop/#expression-fields, respectively.
   *
   * @see bot-management-zone-feedback-create
   */
  async create(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/bot_management/feedback`);
  }
}

/**
 * Bot detection and mitigation settings — configure bot scores, JavaScript detections, and challenge behavior
 */
export class BotManagement extends APIResource {
  readonly feedback: Feedback;

  constructor(client: CloudflareClient) {
    super(client);
    this.feedback = new Feedback(client);
  }

  /**
   * Retrieve a zone's Bot Management Config
   *
   * @see bot-management-for-a-zone-get-config
   */
  async get(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/bot_management`);
  }

  /**
   * Updates the Bot Management configuration for a zone. This API is used to update: - **Bot Fight Mode** - **Super Bot Fight Mode** - **Bot Management for Enterprise** See [Bot Plans](https://developers.cloudflare.com/bots/plans/) for more information on the different plans \ If you recently upgraded or downgraded your plan, refer to the following examples to clean up old configurations. Copy and paste the example body to remove old zone configurations based on your current plan. #### Clean up configuration for Bot Fight Mode plan ```json { "sbfm_likely_automated": "allow", "sbfm_definitely_automated": "allow", "sbfm_verified_bots": "allow", "sbfm_static_resource_protection": false, "optimize_wordpress": false, "suppress_session_score": false } ``` #### Clean up configuration for SBFM Pro plan ```json { "sbfm_likely_automated": "allow", "fight_mode": false } ``` #### Clean up configuration for SBFM Biz plan ```json { "fight_mode": false } ``` #### Clean up configuration for BM Enterprise Subscription plan It is strongly recommended that you ensure you have [custom rules](https://developers.cloudflare.com/waf/custom-rules/) in place to protect your zone before disabling the SBFM rules. Without these protections, your zone is vulnerable to attacks. ```json { "sbfm_likely_automated": "allow", "sbfm_definitely_automated": "allow", "sbfm_verified_bots": "allow", "sbfm_static_resource_protection": false, "optimize_wordpress": false, "fight_mode": false } ```
   *
   * @see bot-management-for-a-zone-update-config
   */
  async update(zoneId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/bot_management`);
  }
}
