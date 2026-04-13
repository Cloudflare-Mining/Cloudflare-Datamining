/**
 * fleet-status-live command
 * @generated from apis/zero-trust/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface FleetStatusLiveArgs {
  'since-minutes': string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, FleetStatusLiveArgs> = {
  command: 'fleet-status-live',
  describe: 'List details for live (up to 60 minutes) devices using WARP',

  builder: (yargs: Argv): Argv<FleetStatusLiveArgs> => {
    return yargs
      .option('since-minutes', {
        type: 'string',
        description: 'Number of minutes before current time',
      })
      .option('fields', {
        type: 'string',
        description: 'Comma-separated list of fields to include in output',
      })
      .option('ndjson', {
        type: 'boolean',
        description: 'Output as newline-delimited JSON (one object per line)',
        default: false,
      }) as Argv<FleetStatusLiveArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<FleetStatusLiveArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.sinceMinutes !== undefined) params['since_minutes'] = argv.sinceMinutes;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.zeroTrust.dex.fleetStatusLive(
        accountId,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
