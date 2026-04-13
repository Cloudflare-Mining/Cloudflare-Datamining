/**
 * edit-zones-hold command
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

interface EditZonesHoldArgs {
  zoneId?: string;
  'hold-after'?: string;
  'include-subdomains'?: boolean;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, EditZonesHoldArgs> = {
  command: 'edit-zones-hold [zoneId]',
  describe:
    'Update the \`hold_after\` and/or \`include_subdomains\` values on an existing zone hold. The hold is enabled if the \`hold_after\` date-time value is in the past.',

  builder: (yargs: Argv): Argv<EditZonesHoldArgs> => {
    return yargs
      .positional('zoneId', {
        type: 'string',
        description: 'Zone ID (or use --zone flag)',
      })
      .option('hold-after', {
        type: 'string',
        description:
          'If \`hold_after\` is provided and future-dated, the hold will be temporarily disabled, then automatically re-enabled by the system at the time specified in this RFC3339-formatted timestamp. A past-dated \`hold_after\` value will have no effect on an existing, enabled hold. Providing an empty string will set its value to the current time.',
        default: undefined,
      })
      .option('include-subdomains', {
        type: 'boolean',
        description:
          "If \`true\`, the zone hold will extend to block any subdomain of the given zone, as well as SSL4SaaS Custom Hostnames. For example, a zone hold on a zone with the hostname 'example.com' and include_subdomains=true will block 'example.com', 'staging.example.com', 'api.staging.example.com', etc.",
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
      }) as Argv<EditZonesHoldArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<EditZonesHoldArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        formatDryRun({
          command: 'cf zones edit-zones-hold',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/hold`,
          pathParams: { zoneId: String(argv.zoneId ?? '') },
          body: { holdAfter: argv.holdAfter, includeSubdomains: argv.includeSubdomains },
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
        const result = await client.patch<unknown>(`/zones/${zoneId}/hold`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.holdAfter !== undefined) setNestedValue(bodyData, ['hold_after'], argv.holdAfter);
      if (argv.includeSubdomains !== undefined)
        setNestedValue(bodyData, ['include_subdomains'], argv.includeSubdomains);
      const result = await client.patch<unknown>(`/zones/${zoneId}/hold`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
