/**
 * edit-zones command
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

interface EditZonesArgs {
  zoneId?: string;
  paused?: boolean;
  'plan-id'?: string;
  type?: string;
  'vanity-name-servers'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, EditZonesArgs> = {
  command: 'edit-zones [zoneId]',
  describe: 'Edits a zone. Only one zone property can be changed at a time.',

  builder: (yargs: Argv): Argv<EditZonesArgs> => {
    return yargs
      .positional('zoneId', {
        type: 'string',
        description: 'Identifier (or use --zone flag)',
      })
      .option('paused', {
        type: 'boolean',
        description:
          'Indicates whether the zone is only using Cloudflare DNS services. A true value means the zone will not receive security or performance benefits. ',
        default: false,
      })
      .option('plan-id', {
        type: 'string',
        description: 'Identifier',
        default: undefined,
      })
      .option('type', {
        type: 'string',
        description:
          'A full zone implies that DNS is hosted with Cloudflare. A partial zone is typically a partner-hosted zone or a CNAME setup. This parameter is only available to Enterprise customers or if it has been explicitly enabled on a zone. ',
        choices: ['full', 'partial', 'secondary', 'internal'] as const,
        default: undefined,
      })
      .option('vanity-name-servers', {
        type: 'string',
        description:
          'An array of domains used for custom name servers. This is only available for Business and Enterprise plans.',
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
      .choices('type', ['full', 'partial', 'secondary', 'internal'] as const) as Argv<EditZonesArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<EditZonesArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        formatDryRun({
          command: 'cf zones edit-zones',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}`,
          pathParams: { zoneId: String(argv.zoneId ?? '') },
          body: {
            paused: argv.paused,
            planId: argv.planId,
            type: argv.type,
            vanityNameServers: argv.vanityNameServers,
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
        const result = await client.patch<unknown>(`/zones/${zoneId}`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.paused !== undefined) setNestedValue(bodyData, ['paused'], argv.paused);
      if (argv.planId !== undefined) setNestedValue(bodyData, ['plan', 'id'], argv.planId);
      if (argv.type !== undefined) setNestedValue(bodyData, ['type'], argv.type);
      if (argv.vanityNameServers !== undefined)
        setNestedValue(bodyData, ['vanity_name_servers'], argv.vanityNameServers);
      const result = await client.patch<unknown>(`/zones/${zoneId}`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
