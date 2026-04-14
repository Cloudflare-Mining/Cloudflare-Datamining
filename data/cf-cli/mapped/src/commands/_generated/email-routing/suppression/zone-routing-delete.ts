/**
 * zone-routing-delete command
 * @generated from apis/email-routing/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';

interface ZoneRoutingDeleteArgs {
  zoneId?: string;
  suppressionId: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, ZoneRoutingDeleteArgs> = {
  command: 'zone-routing-delete [zoneId] <suppressionId>',
  describe: 'Delete a zone routing suppression entry',

  builder: (yargs: Argv): Argv<ZoneRoutingDeleteArgs> => {
    return yargs
      .positional('zoneId', {
        type: 'string',
        description: 'Zone ID (or use --zone flag)',
      })
      .positional('suppressionId', {
        type: 'string',
        description: 'Suppression ID',
        demandOption: true,
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
      }) as Argv<ZoneRoutingDeleteArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ZoneRoutingDeleteArgs>): Promise<void> => {
    try {
      validateResourceId(argv.suppressionId as string | undefined, 'suppressionId');

      if (argv.dryRun) {
        formatDryRun({
          command: 'cf email-routing suppression zone-routing-delete',
          method: 'DELETE',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/email/routing/suppression/${argv.suppressionId ?? '<suppressionId>'}`,
          pathParams: { zoneId: String(argv.zoneId ?? ''), suppressionId: String(argv.suppressionId ?? '') },
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

      const result = await client.emailRouting.suppression.zoneRoutingDelete(zoneId, argv.suppressionId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
