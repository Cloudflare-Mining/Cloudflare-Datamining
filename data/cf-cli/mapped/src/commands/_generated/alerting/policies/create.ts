/**
 * create command
 * @generated from apis/alerting/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface CreateArgs {
  'alert-interval'?: string;
  'alert-type': string;
  description?: string;
  enabled: boolean;
  'filters-actions'?: string;
  'filters-affected-asns'?: string;
  'filters-affected-components'?: string;
  'filters-affected-locations'?: string;
  'filters-airport-code'?: string;
  'filters-alert-trigger-preferences'?: string;
  'filters-alert-trigger-preferences-value'?: string;
  'filters-enabled'?: string;
  'filters-environment'?: string;
  'filters-event'?: string;
  'filters-event-source'?: string;
  'filters-event-type'?: string;
  'filters-group-by'?: string;
  'filters-health-check-id'?: string;
  'filters-incident-impact'?: string;
  'filters-input-id'?: string;
  'filters-insight-class'?: string;
  'filters-limit'?: string;
  'filters-logo-tag'?: string;
  'filters-megabits-per-second'?: string;
  'filters-new-health'?: string;
  'filters-new-status'?: string;
  'filters-packets-per-second'?: string;
  'filters-pool-id'?: string;
  'filters-pop-names'?: string;
  'filters-product'?: string;
  'filters-project-id'?: string;
  'filters-protocol'?: string;
  'filters-query-tag'?: string;
  'filters-requests-per-second'?: string;
  'filters-selectors'?: string;
  'filters-services'?: string;
  'filters-slo'?: string;
  'filters-status'?: string;
  'filters-target-hostname'?: string;
  'filters-target-ip'?: string;
  'filters-target-zone-name'?: string;
  'filters-traffic-exclusions'?: string;
  'filters-tunnel-id'?: string;
  'filters-tunnel-name'?: string;
  'filters-type'?: string;
  'filters-where'?: string;
  'filters-zones'?: string;
  name: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, CreateArgs> = {
  command: 'create',
  describe: 'Creates a new Notification policy.',

  builder: (yargs: Argv): Argv<CreateArgs> => {
    return yargs
      .option('alert-interval', {
        type: 'string',
        description:
          'Optional specification of how often to re-alert from the same incident, not support on all alert types.',
        default: undefined,
      })
      .option('alert-type', {
        type: 'string',
        description:
          'Refers to which event will trigger a Notification dispatch. You can use the endpoint to get available alert types which then will give you a list of possible values.',
        choices: [
          'abuse_report_alert',
          'access_custom_certificate_expiration_type',
          'advanced_ddos_attack_l4_alert',
          'advanced_ddos_attack_l7_alert',
          'advanced_http_alert_error',
          'bgp_hijack_notification',
          'billing_usage_alert',
          'block_notification_block_removed',
          'block_notification_new_block',
          'block_notification_review_rejected',
          'bot_traffic_basic_alert',
          'brand_protection_alert',
          'brand_protection_digest',
          'clickhouse_alert_fw_anomaly',
          'clickhouse_alert_fw_ent_anomaly',
          'cloudforce_one_request_notification',
          'custom_analytics',
          'custom_bot_detection_alert',
          'custom_ssl_certificate_event_type',
          'dedicated_ssl_certificate_event_type',
          'device_connectivity_anomaly_alert',
          'dos_attack_l4',
          'dos_attack_l7',
          'expiring_service_token_alert',
          'failing_logpush_job_disabled_alert',
          'fbm_auto_advertisement',
          'fbm_dosd_attack',
          'fbm_volumetric_attack',
          'health_check_status_notification',
          'hostname_aop_custom_certificate_expiration_type',
          'http_alert_edge_error',
          'http_alert_origin_error',
          'image_notification',
          'image_resizing_notification',
          'incident_alert',
          'load_balancing_health_alert',
          'load_balancing_pool_enablement_alert',
          'logo_match_alert',
          'magic_tunnel_health_check_event',
          'magic_wan_tunnel_health',
          'maintenance_event_notification',
          'mtls_certificate_store_certificate_expiration_type',
          'pages_event_alert',
          'radar_notification',
          'real_origin_monitoring',
          'scriptmonitor_alert_new_code_change_detections',
          'scriptmonitor_alert_new_hosts',
          'scriptmonitor_alert_new_malicious_hosts',
          'scriptmonitor_alert_new_malicious_scripts',
          'scriptmonitor_alert_new_malicious_url',
          'scriptmonitor_alert_new_max_length_resource_url',
          'scriptmonitor_alert_new_resources',
          'secondary_dns_all_primaries_failing',
          'secondary_dns_primaries_failing',
          'secondary_dns_warning',
          'secondary_dns_zone_successfully_updated',
          'secondary_dns_zone_validation_warning',
          'security_insights_alert',
          'sentinel_alert',
          'stream_live_notifications',
          'synthetic_test_latency_alert',
          'synthetic_test_low_availability_alert',
          'traffic_anomalies_alert',
          'tunnel_health_event',
          'tunnel_update_event',
          'universal_ssl_event_type',
          'web_analytics_metrics_update',
          'zone_aop_custom_certificate_expiration_type',
        ] as const,
      })
      .option('description', {
        type: 'string',
        description: 'Optional description for the Notification policy.',
        default: undefined,
      })
      .option('enabled', {
        type: 'boolean',
        description: 'Whether or not the Notification policy is enabled.',
      })
      .option('filters-actions', {
        type: 'string',
        description: 'Usage depends on specific alert type',
        default: undefined,
      })
      .option('filters-affected-asns', {
        type: 'string',
        description: 'Used for configuring radar_notification',
        default: undefined,
      })
      .option('filters-affected-components', {
        type: 'string',
        description: 'Used for configuring incident_alert',
        default: undefined,
      })
      .option('filters-affected-locations', {
        type: 'string',
        description: 'Used for configuring radar_notification',
        default: undefined,
      })
      .option('filters-airport-code', {
        type: 'string',
        description: 'Used for configuring maintenance_event_notification',
        default: undefined,
      })
      .option('filters-alert-trigger-preferences', {
        type: 'string',
        description: 'Usage depends on specific alert type',
        default: undefined,
      })
      .option('filters-alert-trigger-preferences-value', {
        type: 'string',
        description: 'Usage depends on specific alert type',
        default: undefined,
      })
      .option('filters-enabled', {
        type: 'string',
        description: 'Used for configuring load_balancing_pool_enablement_alert',
        default: undefined,
      })
      .option('filters-environment', {
        type: 'string',
        description: 'Used for configuring pages_event_alert',
        default: undefined,
      })
      .option('filters-event', {
        type: 'string',
        description: 'Used for configuring pages_event_alert',
        default: undefined,
      })
      .option('filters-event-source', {
        type: 'string',
        description: 'Used for configuring load_balancing_health_alert',
        default: undefined,
      })
      .option('filters-event-type', {
        type: 'string',
        description: 'Usage depends on specific alert type',
        default: undefined,
      })
      .option('filters-group-by', {
        type: 'string',
        description: 'Usage depends on specific alert type',
        default: undefined,
      })
      .option('filters-health-check-id', {
        type: 'string',
        description: 'Used for configuring health_check_status_notification',
        default: undefined,
      })
      .option('filters-incident-impact', {
        type: 'string',
        description: 'Used for configuring incident_alert',
        default: undefined,
      })
      .option('filters-input-id', {
        type: 'string',
        description: 'Used for configuring stream_live_notifications',
        default: undefined,
      })
      .option('filters-insight-class', {
        type: 'string',
        description: 'Used for configuring security_insights_alert',
        default: undefined,
      })
      .option('filters-limit', {
        type: 'string',
        description: 'Used for configuring billing_usage_alert',
        default: undefined,
      })
      .option('filters-logo-tag', {
        type: 'string',
        description: 'Used for configuring logo_match_alert',
        default: undefined,
      })
      .option('filters-megabits-per-second', {
        type: 'string',
        description: 'Used for configuring advanced_ddos_attack_l4_alert',
        default: undefined,
      })
      .option('filters-new-health', {
        type: 'string',
        description: 'Used for configuring load_balancing_health_alert',
        default: undefined,
      })
      .option('filters-new-status', {
        type: 'string',
        description: 'Used for configuring tunnel_health_event',
        default: undefined,
      })
      .option('filters-packets-per-second', {
        type: 'string',
        description: 'Used for configuring advanced_ddos_attack_l4_alert',
        default: undefined,
      })
      .option('filters-pool-id', {
        type: 'string',
        description: 'Usage depends on specific alert type',
        default: undefined,
      })
      .option('filters-pop-names', {
        type: 'string',
        description: 'Usage depends on specific alert type',
        default: undefined,
      })
      .option('filters-product', {
        type: 'string',
        description: 'Used for configuring billing_usage_alert',
        default: undefined,
      })
      .option('filters-project-id', {
        type: 'string',
        description: 'Used for configuring pages_event_alert',
        default: undefined,
      })
      .option('filters-protocol', {
        type: 'string',
        description: 'Used for configuring advanced_ddos_attack_l4_alert',
        default: undefined,
      })
      .option('filters-query-tag', {
        type: 'string',
        description: 'Usage depends on specific alert type',
        default: undefined,
      })
      .option('filters-requests-per-second', {
        type: 'string',
        description: 'Used for configuring advanced_ddos_attack_l7_alert',
        default: undefined,
      })
      .option('filters-selectors', {
        type: 'string',
        description: 'Usage depends on specific alert type',
        default: undefined,
      })
      .option('filters-services', {
        type: 'string',
        description: 'Used for configuring clickhouse_alert_fw_ent_anomaly',
        default: undefined,
      })
      .option('filters-slo', {
        type: 'string',
        description: 'Usage depends on specific alert type',
        default: undefined,
      })
      .option('filters-status', {
        type: 'string',
        description: 'Used for configuring health_check_status_notification',
        default: undefined,
      })
      .option('filters-target-hostname', {
        type: 'string',
        description: 'Used for configuring advanced_ddos_attack_l7_alert',
        default: undefined,
      })
      .option('filters-target-ip', {
        type: 'string',
        description: 'Used for configuring advanced_ddos_attack_l4_alert',
        default: undefined,
      })
      .option('filters-target-zone-name', {
        type: 'string',
        description: 'Used for configuring advanced_ddos_attack_l7_alert',
        default: undefined,
      })
      .option('filters-traffic-exclusions', {
        type: 'string',
        description: 'Used for configuring traffic_anomalies_alert',
        default: undefined,
      })
      .option('filters-tunnel-id', {
        type: 'string',
        description: 'Used for configuring tunnel_health_event',
        default: undefined,
      })
      .option('filters-tunnel-name', {
        type: 'string',
        description: 'Usage depends on specific alert type',
        default: undefined,
      })
      .option('filters-type', {
        type: 'string',
        description: 'Usage depends on specific alert type',
        default: undefined,
      })
      .option('filters-where', {
        type: 'string',
        description: 'Usage depends on specific alert type',
        default: undefined,
      })
      .option('filters-zones', {
        type: 'string',
        description: 'Usage depends on specific alert type',
        default: undefined,
      })
      .option('name', {
        type: 'string',
        description: 'Name of the policy.',
      })
      .option('fields', {
        type: 'string',
        description: 'Comma-separated list of fields to include in output',
      })
      .option('ndjson', {
        type: 'boolean',
        description: 'Output as newline-delimited JSON (one object per line)',
        default: false,
      })
      .option('dry-run', {
        type: 'boolean',
        description: 'Validate and show what would happen without executing',
        default: false,
      })
      .option('body', {
        type: 'string',
        description: 'Raw JSON request body (bypasses individual flags)',
      })
      .choices('alert-type', [
        'abuse_report_alert',
        'access_custom_certificate_expiration_type',
        'advanced_ddos_attack_l4_alert',
        'advanced_ddos_attack_l7_alert',
        'advanced_http_alert_error',
        'bgp_hijack_notification',
        'billing_usage_alert',
        'block_notification_block_removed',
        'block_notification_new_block',
        'block_notification_review_rejected',
        'bot_traffic_basic_alert',
        'brand_protection_alert',
        'brand_protection_digest',
        'clickhouse_alert_fw_anomaly',
        'clickhouse_alert_fw_ent_anomaly',
        'cloudforce_one_request_notification',
        'custom_analytics',
        'custom_bot_detection_alert',
        'custom_ssl_certificate_event_type',
        'dedicated_ssl_certificate_event_type',
        'device_connectivity_anomaly_alert',
        'dos_attack_l4',
        'dos_attack_l7',
        'expiring_service_token_alert',
        'failing_logpush_job_disabled_alert',
        'fbm_auto_advertisement',
        'fbm_dosd_attack',
        'fbm_volumetric_attack',
        'health_check_status_notification',
        'hostname_aop_custom_certificate_expiration_type',
        'http_alert_edge_error',
        'http_alert_origin_error',
        'image_notification',
        'image_resizing_notification',
        'incident_alert',
        'load_balancing_health_alert',
        'load_balancing_pool_enablement_alert',
        'logo_match_alert',
        'magic_tunnel_health_check_event',
        'magic_wan_tunnel_health',
        'maintenance_event_notification',
        'mtls_certificate_store_certificate_expiration_type',
        'pages_event_alert',
        'radar_notification',
        'real_origin_monitoring',
        'scriptmonitor_alert_new_code_change_detections',
        'scriptmonitor_alert_new_hosts',
        'scriptmonitor_alert_new_malicious_hosts',
        'scriptmonitor_alert_new_malicious_scripts',
        'scriptmonitor_alert_new_malicious_url',
        'scriptmonitor_alert_new_max_length_resource_url',
        'scriptmonitor_alert_new_resources',
        'secondary_dns_all_primaries_failing',
        'secondary_dns_primaries_failing',
        'secondary_dns_warning',
        'secondary_dns_zone_successfully_updated',
        'secondary_dns_zone_validation_warning',
        'security_insights_alert',
        'sentinel_alert',
        'stream_live_notifications',
        'synthetic_test_latency_alert',
        'synthetic_test_low_availability_alert',
        'traffic_anomalies_alert',
        'tunnel_health_event',
        'tunnel_update_event',
        'universal_ssl_event_type',
        'web_analytics_metrics_update',
        'zone_aop_custom_certificate_expiration_type',
      ] as const) as Argv<CreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf alerting policies create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/alerting/v3/policies`,
          pathParams: {},
          body: {
            alertInterval: argv.alertInterval,
            alertType: argv.alertType,
            description: argv.description,
            enabled: argv.enabled,
            filtersActions: argv.filtersActions,
            filtersAffectedAsns: argv.filtersAffectedAsns,
            filtersAffectedComponents: argv.filtersAffectedComponents,
            filtersAffectedLocations: argv.filtersAffectedLocations,
            filtersAirportCode: argv.filtersAirportCode,
            filtersAlertTriggerPreferences: argv.filtersAlertTriggerPreferences,
            filtersAlertTriggerPreferencesValue: argv.filtersAlertTriggerPreferencesValue,
            filtersEnabled: argv.filtersEnabled,
            filtersEnvironment: argv.filtersEnvironment,
            filtersEvent: argv.filtersEvent,
            filtersEventSource: argv.filtersEventSource,
            filtersEventType: argv.filtersEventType,
            filtersGroupBy: argv.filtersGroupBy,
            filtersHealthCheckId: argv.filtersHealthCheckId,
            filtersIncidentImpact: argv.filtersIncidentImpact,
            filtersInputId: argv.filtersInputId,
            filtersInsightClass: argv.filtersInsightClass,
            filtersLimit: argv.filtersLimit,
            filtersLogoTag: argv.filtersLogoTag,
            filtersMegabitsPerSecond: argv.filtersMegabitsPerSecond,
            filtersNewHealth: argv.filtersNewHealth,
            filtersNewStatus: argv.filtersNewStatus,
            filtersPacketsPerSecond: argv.filtersPacketsPerSecond,
            filtersPoolId: argv.filtersPoolId,
            filtersPopNames: argv.filtersPopNames,
            filtersProduct: argv.filtersProduct,
            filtersProjectId: argv.filtersProjectId,
            filtersProtocol: argv.filtersProtocol,
            filtersQueryTag: argv.filtersQueryTag,
            filtersRequestsPerSecond: argv.filtersRequestsPerSecond,
            filtersSelectors: argv.filtersSelectors,
            filtersServices: argv.filtersServices,
            filtersSlo: argv.filtersSlo,
            filtersStatus: argv.filtersStatus,
            filtersTargetHostname: argv.filtersTargetHostname,
            filtersTargetIp: argv.filtersTargetIp,
            filtersTargetZoneName: argv.filtersTargetZoneName,
            filtersTrafficExclusions: argv.filtersTrafficExclusions,
            filtersTunnelId: argv.filtersTunnelId,
            filtersTunnelName: argv.filtersTunnelName,
            filtersType: argv.filtersType,
            filtersWhere: argv.filtersWhere,
            filtersZones: argv.filtersZones,
            name: argv.name,
          },
          validation: 'passed',
        });
        return;
      }
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.post<unknown>(`/accounts/${accountId}/alerting/v3/policies`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.alertInterval !== undefined) setNestedValue(bodyData, ['alert_interval'], argv.alertInterval);
      if (argv.alertType !== undefined) setNestedValue(bodyData, ['alert_type'], argv.alertType);
      if (argv.description !== undefined) setNestedValue(bodyData, ['description'], argv.description);
      if (argv.enabled !== undefined) setNestedValue(bodyData, ['enabled'], argv.enabled);
      if (argv.filtersActions !== undefined) setNestedValue(bodyData, ['filters', 'actions'], argv.filtersActions);
      if (argv.filtersAffectedAsns !== undefined)
        setNestedValue(bodyData, ['filters', 'affected_asns'], argv.filtersAffectedAsns);
      if (argv.filtersAffectedComponents !== undefined)
        setNestedValue(bodyData, ['filters', 'affected_components'], argv.filtersAffectedComponents);
      if (argv.filtersAffectedLocations !== undefined)
        setNestedValue(bodyData, ['filters', 'affected_locations'], argv.filtersAffectedLocations);
      if (argv.filtersAirportCode !== undefined)
        setNestedValue(bodyData, ['filters', 'airport_code'], argv.filtersAirportCode);
      if (argv.filtersAlertTriggerPreferences !== undefined)
        setNestedValue(bodyData, ['filters', 'alert_trigger_preferences'], argv.filtersAlertTriggerPreferences);
      if (argv.filtersAlertTriggerPreferencesValue !== undefined)
        setNestedValue(
          bodyData,
          ['filters', 'alert_trigger_preferences_value'],
          argv.filtersAlertTriggerPreferencesValue,
        );
      if (argv.filtersEnabled !== undefined) setNestedValue(bodyData, ['filters', 'enabled'], argv.filtersEnabled);
      if (argv.filtersEnvironment !== undefined)
        setNestedValue(bodyData, ['filters', 'environment'], argv.filtersEnvironment);
      if (argv.filtersEvent !== undefined) setNestedValue(bodyData, ['filters', 'event'], argv.filtersEvent);
      if (argv.filtersEventSource !== undefined)
        setNestedValue(bodyData, ['filters', 'event_source'], argv.filtersEventSource);
      if (argv.filtersEventType !== undefined)
        setNestedValue(bodyData, ['filters', 'event_type'], argv.filtersEventType);
      if (argv.filtersGroupBy !== undefined) setNestedValue(bodyData, ['filters', 'group_by'], argv.filtersGroupBy);
      if (argv.filtersHealthCheckId !== undefined)
        setNestedValue(bodyData, ['filters', 'health_check_id'], argv.filtersHealthCheckId);
      if (argv.filtersIncidentImpact !== undefined)
        setNestedValue(bodyData, ['filters', 'incident_impact'], argv.filtersIncidentImpact);
      if (argv.filtersInputId !== undefined) setNestedValue(bodyData, ['filters', 'input_id'], argv.filtersInputId);
      if (argv.filtersInsightClass !== undefined)
        setNestedValue(bodyData, ['filters', 'insight_class'], argv.filtersInsightClass);
      if (argv.filtersLimit !== undefined) setNestedValue(bodyData, ['filters', 'limit'], argv.filtersLimit);
      if (argv.filtersLogoTag !== undefined) setNestedValue(bodyData, ['filters', 'logo_tag'], argv.filtersLogoTag);
      if (argv.filtersMegabitsPerSecond !== undefined)
        setNestedValue(bodyData, ['filters', 'megabits_per_second'], argv.filtersMegabitsPerSecond);
      if (argv.filtersNewHealth !== undefined)
        setNestedValue(bodyData, ['filters', 'new_health'], argv.filtersNewHealth);
      if (argv.filtersNewStatus !== undefined)
        setNestedValue(bodyData, ['filters', 'new_status'], argv.filtersNewStatus);
      if (argv.filtersPacketsPerSecond !== undefined)
        setNestedValue(bodyData, ['filters', 'packets_per_second'], argv.filtersPacketsPerSecond);
      if (argv.filtersPoolId !== undefined) setNestedValue(bodyData, ['filters', 'pool_id'], argv.filtersPoolId);
      if (argv.filtersPopNames !== undefined) setNestedValue(bodyData, ['filters', 'pop_names'], argv.filtersPopNames);
      if (argv.filtersProduct !== undefined) setNestedValue(bodyData, ['filters', 'product'], argv.filtersProduct);
      if (argv.filtersProjectId !== undefined)
        setNestedValue(bodyData, ['filters', 'project_id'], argv.filtersProjectId);
      if (argv.filtersProtocol !== undefined) setNestedValue(bodyData, ['filters', 'protocol'], argv.filtersProtocol);
      if (argv.filtersQueryTag !== undefined) setNestedValue(bodyData, ['filters', 'query_tag'], argv.filtersQueryTag);
      if (argv.filtersRequestsPerSecond !== undefined)
        setNestedValue(bodyData, ['filters', 'requests_per_second'], argv.filtersRequestsPerSecond);
      if (argv.filtersSelectors !== undefined)
        setNestedValue(bodyData, ['filters', 'selectors'], argv.filtersSelectors);
      if (argv.filtersServices !== undefined) setNestedValue(bodyData, ['filters', 'services'], argv.filtersServices);
      if (argv.filtersSlo !== undefined) setNestedValue(bodyData, ['filters', 'slo'], argv.filtersSlo);
      if (argv.filtersStatus !== undefined) setNestedValue(bodyData, ['filters', 'status'], argv.filtersStatus);
      if (argv.filtersTargetHostname !== undefined)
        setNestedValue(bodyData, ['filters', 'target_hostname'], argv.filtersTargetHostname);
      if (argv.filtersTargetIp !== undefined) setNestedValue(bodyData, ['filters', 'target_ip'], argv.filtersTargetIp);
      if (argv.filtersTargetZoneName !== undefined)
        setNestedValue(bodyData, ['filters', 'target_zone_name'], argv.filtersTargetZoneName);
      if (argv.filtersTrafficExclusions !== undefined)
        setNestedValue(bodyData, ['filters', 'traffic_exclusions'], argv.filtersTrafficExclusions);
      if (argv.filtersTunnelId !== undefined) setNestedValue(bodyData, ['filters', 'tunnel_id'], argv.filtersTunnelId);
      if (argv.filtersTunnelName !== undefined)
        setNestedValue(bodyData, ['filters', 'tunnel_name'], argv.filtersTunnelName);
      if (argv.filtersType !== undefined) setNestedValue(bodyData, ['filters', 'type'], argv.filtersType);
      if (argv.filtersWhere !== undefined) setNestedValue(bodyData, ['filters', 'where'], argv.filtersWhere);
      if (argv.filtersZones !== undefined) setNestedValue(bodyData, ['filters', 'zones'], argv.filtersZones);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      const result = await client.post<unknown>(`/accounts/${accountId}/alerting/v3/policies`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
