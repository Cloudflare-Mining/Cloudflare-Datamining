/**
 * get-subscription-details command
 * @generated from apis/zones/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../lib/auth.js';
import { getDefaultHeaders } from '../../../lib/request-headers.js';
import { handleError } from '../../../lib/errors.js';
import { formatOutput } from '../../../lib/output.js';

interface GetSubscriptionDetailsArgs {
  zoneId?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, GetSubscriptionDetailsArgs> = {
  command: 'get-subscription-details [zoneId]',
  describe: 'Lists zone subscription details.',

  builder: (yargs: Argv): Argv<GetSubscriptionDetailsArgs> => {
    return yargs
      .positional('zoneId', {
        type: 'string',
        description: 'Identifier (or use --zone flag)',
      })
      .option('fields', {
        type: 'string',
        description: 'Comma-separated list of fields to include in output',
      })
      .option('ndjson', {
        type: 'boolean',
        description: 'Output as newline-delimited JSON (one object per line)',
        default: false,
      }) as Argv<GetSubscriptionDetailsArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<GetSubscriptionDetailsArgs>): Promise<void> => {
    try {
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const zoneId = await getZoneId({ zone: argv.zone, zoneId: argv.zoneId }, client, { quiet: argv.quiet });

      const result = await client.zones.getSubscriptionDetails(zoneId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
