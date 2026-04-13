/**
 * update-id-activation command
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

interface UpdateIdActivationArgs {
  zoneId?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, UpdateIdActivationArgs> = {
  command: 'update-id-activation [zoneId]',
  describe:
    'Triggeres a new activation check for a PENDING Zone. This can be triggered every 5 min for paygo/ent customers, every hour for FREE Zones.',

  builder: (yargs: Argv): Argv<UpdateIdActivationArgs> => {
    return yargs
      .positional('zoneId', {
        type: 'string',
        description: 'Zone ID (or use --zone flag)',
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
      }) as Argv<UpdateIdActivationArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<UpdateIdActivationArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        formatDryRun({
          command: 'cf zones update-id-activation',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/activation_check`,
          pathParams: { zoneId: String(argv.zoneId ?? '') },
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

      const result = await client.zones.updateIdActivation(zoneId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
