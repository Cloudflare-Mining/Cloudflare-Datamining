/**
 * edit-shield-settings command
 * @generated from apis/zones/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../lib/auth.js';
import { getDefaultHeaders } from '../../../lib/request-headers.js';
import { handleError } from '../../../lib/errors.js';
import { formatOutput } from '../../../lib/output.js';
import { validateResourceId } from '../../../lib/input-validation.js';
import { formatDryRun } from '../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../lib/body-parser.js';

interface EditShieldSettingsArgs {
  zoneId?: string;
  'cache-reserve-value'?: string;
  'regional-tiered-cache-value'?: string;
  'smart-routing-value'?: string;
  'smart-tiered-cache-value'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, EditShieldSettingsArgs> = {
  command: 'edit-shield-settings [zoneId]',
  describe: 'Set Smart Shield Settings.',

  builder: (yargs: Argv): Argv<EditShieldSettingsArgs> => {
    return yargs
      .positional('zoneId', {
        type: 'string',
        description: 'Identifier. (or use --zone flag)',
      })
      .option('cache-reserve-value', {
        type: 'string',
        description: 'Specifies the enablement value of Cache Reserve.',
        choices: ['on', 'off'] as const,
        default: undefined,
      })
      .option('regional-tiered-cache-value', {
        type: 'string',
        description: 'Specifies the enablement value of Regional Tiered Cache.',
        choices: ['on', 'off'] as const,
        default: undefined,
      })
      .option('smart-routing-value', {
        type: 'string',
        description: 'Specifies the enablement value of Smart Routing.',
        choices: ['on', 'off'] as const,
        default: undefined,
      })
      .option('smart-tiered-cache-value', {
        type: 'string',
        description: 'Specifies the enablement value of Smart Tiered Cache.',
        choices: ['on', 'off'] as const,
        default: undefined,
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
      .choices('cache-reserve-value', ['on', 'off'] as const)
      .choices('regional-tiered-cache-value', ['on', 'off'] as const)
      .choices('smart-routing-value', ['on', 'off'] as const)
      .choices('smart-tiered-cache-value', ['on', 'off'] as const) as Argv<EditShieldSettingsArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<EditShieldSettingsArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        formatDryRun({
          command: 'cf zones edit-shield-settings',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/smart_shield`,
          pathParams: { zoneId: String(argv.zoneId ?? '') },
          body: {
            cacheReserveValue: argv.cacheReserveValue,
            regionalTieredCacheValue: argv.regionalTieredCacheValue,
            smartRoutingValue: argv.smartRoutingValue,
            smartTieredCacheValue: argv.smartTieredCacheValue,
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
      const zoneId = await getZoneId({ zone: argv.zone, zoneId: argv.zoneId }, client, { quiet: argv.quiet });

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.patch<unknown>(`/zones/${zoneId}/smart_shield`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.cacheReserveValue !== undefined)
        setNestedValue(bodyData, ['cache_reserve', 'value'], argv.cacheReserveValue);
      if (argv.regionalTieredCacheValue !== undefined)
        setNestedValue(bodyData, ['regional_tiered_cache', 'value'], argv.regionalTieredCacheValue);
      if (argv.smartRoutingValue !== undefined)
        setNestedValue(bodyData, ['smart_routing', 'value'], argv.smartRoutingValue);
      if (argv.smartTieredCacheValue !== undefined)
        setNestedValue(bodyData, ['smart_tiered_cache', 'value'], argv.smartTieredCacheValue);
      const result = await client.patch<unknown>(`/zones/${zoneId}/smart_shield`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
