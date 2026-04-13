/**
 * fleet-status-over-time command
 * @generated from apis/zero-trust/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface FleetStatusOverTimeArgs {
  to: string;
  from: string;
  colo?: string;
  'device-id'?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, FleetStatusOverTimeArgs> = {
  command: 'fleet-status-over-time',
  describe: 'List details for devices using WARP, up to 7 days',

  builder: (yargs: Argv): Argv<FleetStatusOverTimeArgs> => {
    return yargs
      .option('to', {
        type: 'string',
        description: 'Time range end in ISO format',
      })
      .option('from', {
        type: 'string',
        description: 'Time range beginning in ISO format',
      })
      .option('colo', {
        type: 'string',
        description: 'Cloudflare colo',
        default: undefined,
      })
      .option('device-id', {
        type: 'string',
        description: 'Device-specific ID, given as UUID v4',
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
      }) as Argv<FleetStatusOverTimeArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<FleetStatusOverTimeArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.to !== undefined) params['to'] = argv.to;
      if (argv.from !== undefined) params['from'] = argv.from;
      if (argv.colo !== undefined) params['colo'] = argv.colo;
      if (argv.deviceId !== undefined) params['device_id'] = argv.deviceId;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.zeroTrust.dex.fleetStatusOverTime(
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
