/**
 * fleet-status-get command
 * @generated from apis/zero-trust/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface FleetStatusGetArgs {
  deviceId: string;
  'since-minutes': string;
  'time-now'?: string;
  colo?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, FleetStatusGetArgs> = {
  command: 'fleet-status-get <deviceId>',
  describe: 'Get the live status of a latest device given device_id from the device_state table',

  builder: (yargs: Argv): Argv<FleetStatusGetArgs> => {
    return yargs
      .positional('deviceId', {
        type: 'string',
        description: 'Unique identifier for device',
        demandOption: true,
      })
      .option('since-minutes', {
        type: 'string',
        description: 'Number of minutes before current time',
      })
      .option('time-now', {
        type: 'string',
        description: 'Number of minutes before current time',
        default: undefined,
      })
      .option('colo', {
        type: 'string',
        description: 'List of data centers to filter results',
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
      }) as Argv<FleetStatusGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<FleetStatusGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.deviceId as string | undefined, 'deviceId');

      const params: Record<string, unknown> = {};
      if (argv.sinceMinutes !== undefined) params['since_minutes'] = argv.sinceMinutes;
      if (argv.timeNow !== undefined) params['time_now'] = argv.timeNow;
      if (argv.colo !== undefined) params['colo'] = argv.colo;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.zeroTrust.devices.fleetStatusGet(
        accountId,
        argv.deviceId,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
