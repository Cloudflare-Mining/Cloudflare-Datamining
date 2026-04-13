/**
 * traceroute-tests-network-path command
 * @generated from apis/zero-trust/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface TracerouteTestsNetworkPathArgs {
  testId: string;
  'device-id': string;
  from: string;
  to: string;
  interval: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, TracerouteTestsNetworkPathArgs> = {
  command: 'traceroute-tests-network-path <testId>',
  describe: 'Get a breakdown of metrics by hop for individual traceroute test runs',

  builder: (yargs: Argv): Argv<TracerouteTestsNetworkPathArgs> => {
    return yargs
      .positional('testId', {
        type: 'string',
        description: 'unique identifier for a specific test',
        demandOption: true,
      })
      .option('device-id', {
        type: 'string',
        description: 'Device to filter tracroute result runs to',
      })
      .option('from', {
        type: 'string',
        description: 'Start time for aggregate metrics in ISO ms',
      })
      .option('to', {
        type: 'string',
        description: 'End time for aggregate metrics in ISO ms',
      })
      .option('interval', {
        type: 'string',
        description: 'Time interval for aggregate time slots.',
        choices: ['minute', 'hour'] as const,
      })
      .option('fields', {
        type: 'string',
        description: 'Comma-separated list of fields to include in output',
      })
      .option('ndjson', {
        type: 'boolean',
        description: 'Output as newline-delimited JSON (one object per line)',
        default: false,
      }) as Argv<TracerouteTestsNetworkPathArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<TracerouteTestsNetworkPathArgs>): Promise<void> => {
    try {
      validateResourceId(argv.testId as string | undefined, 'testId');

      const params: Record<string, unknown> = {};
      if (argv.deviceId !== undefined) params['deviceId'] = argv.deviceId;
      if (argv.from !== undefined) params['from'] = argv.from;
      if (argv.to !== undefined) params['to'] = argv.to;
      if (argv.interval !== undefined) params['interval'] = argv.interval;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.zeroTrust.dex.tracerouteTestsNetworkPath(
        accountId,
        argv.testId,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
