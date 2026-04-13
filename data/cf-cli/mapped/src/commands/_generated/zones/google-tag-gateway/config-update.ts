/**
 * config-update command
 * @generated from apis/zones/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface ConfigUpdateArgs {
  zoneId?: string;
  enabled: boolean;
  endpoint: string;
  'hide-original-ip': boolean;
  'measurement-id': string;
  'set-up-tag'?: boolean;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, ConfigUpdateArgs> = {
  command: 'config-update [zoneId]',
  describe: 'Updates the Google Tag Gateway configuration for a zone.',

  builder: (yargs: Argv): Argv<ConfigUpdateArgs> => {
    return yargs
      .positional('zoneId', {
        type: 'string',
        description: 'Identifier. (or use --zone flag)',
      })
      .option('enabled', {
        type: 'boolean',
        description: 'Enables or disables Google Tag Gateway for this zone.',
      })
      .option('endpoint', {
        type: 'string',
        description:
          "Specifies the endpoint path for proxying Google Tag Manager requests. Use an absolute path starting with '/', with no nested paths and alphanumeric characters only (e.g. /metrics).",
      })
      .option('hide-original-ip', {
        type: 'boolean',
        description: 'Hides the original client IP address from Google when enabled.',
      })
      .option('measurement-id', {
        type: 'string',
        description: 'Specify the Google Tag Manager container or measurement ID (e.g. GTM-XXXXXXX or G-XXXXXXXXXX).',
      })
      .option('set-up-tag', {
        type: 'boolean',
        description: 'Set up the associated Google Tag on the zone automatically when enabled.',
        default: false,
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
      }) as Argv<ConfigUpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ConfigUpdateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        formatDryRun({
          command: 'cf zones google-tag-gateway config-update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/settings/google-tag-gateway/config`,
          pathParams: { zoneId: String(argv.zoneId ?? '') },
          body: {
            enabled: argv.enabled,
            endpoint: argv.endpoint,
            hideOriginalIp: argv.hideOriginalIp,
            measurementId: argv.measurementId,
            setUpTag: argv.setUpTag,
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
        const result = await client.put<unknown>(`/zones/${zoneId}/settings/google-tag-gateway/config`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.enabled !== undefined) setNestedValue(bodyData, ['enabled'], argv.enabled);
      if (argv.endpoint !== undefined) setNestedValue(bodyData, ['endpoint'], argv.endpoint);
      if (argv.hideOriginalIp !== undefined) setNestedValue(bodyData, ['hideOriginalIp'], argv.hideOriginalIp);
      if (argv.measurementId !== undefined) setNestedValue(bodyData, ['measurementId'], argv.measurementId);
      if (argv.setUpTag !== undefined) setNestedValue(bodyData, ['setUpTag'], argv.setUpTag);
      const result = await client.put<unknown>(`/zones/${zoneId}/settings/google-tag-gateway/config`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
