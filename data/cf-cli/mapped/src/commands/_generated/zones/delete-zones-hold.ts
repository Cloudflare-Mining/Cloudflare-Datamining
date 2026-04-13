/**
 * delete-zones-hold command
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

interface DeleteZonesHoldArgs {
  zoneId?: string;
  'hold-after'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, DeleteZonesHoldArgs> = {
  command: 'delete-zones-hold [zoneId]',
  describe:
    "Stop enforcement of a zone hold on the zone, permanently or temporarily, allowing the creation and activation of zones with this zone's hostname.",

  builder: (yargs: Argv): Argv<DeleteZonesHoldArgs> => {
    return yargs
      .positional('zoneId', {
        type: 'string',
        description: 'Zone ID (or use --zone flag)',
      })
      .option('hold-after', {
        type: 'string',
        description:
          'If \`hold_after\` is provided, the hold will be temporarily disabled, then automatically re-enabled by the system at the time specified in this RFC3339-formatted timestamp. Otherwise, the hold will be disabled indefinitely.',
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
      }) as Argv<DeleteZonesHoldArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<DeleteZonesHoldArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.holdAfter !== undefined) params['hold_after'] = argv.holdAfter;

      if (argv.dryRun) {
        formatDryRun({
          command: 'cf zones delete-zones-hold',
          method: 'DELETE',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/hold`,
          pathParams: { zoneId: String(argv.zoneId ?? '') },
          body: { ...params },
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

      const result = await client.zones.deleteZonesHold(zoneId, Object.keys(params).length > 0 ? params : undefined);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
