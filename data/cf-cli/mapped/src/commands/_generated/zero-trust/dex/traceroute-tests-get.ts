/**
 * traceroute-tests-get command
 * @generated from apis/zero-trust/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface TracerouteTestsGetArgs {
  testId: string;
  'device-id'?: string;
  from: string;
  to: string;
  interval: string;
  colo?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, TracerouteTestsGetArgs> = {
  command: 'traceroute-tests-get <testId>',
  describe:
    'Get test details and aggregate performance metrics for an traceroute test for a given time period between 1 hour and 7 days.',

  builder: (yargs: Argv): Argv<TracerouteTestsGetArgs> => {
    return yargs
      .positional('testId', {
        type: 'string',
        description: 'Unique identifier for a specific test',
        demandOption: true,
      })
      .option('device-id', {
        type: 'string',
        description:
          'Optionally filter result stats to a specific device(s). Cannot be used in combination with colo param.',
        default: undefined,
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
      .option('colo', {
        type: 'string',
        description:
          'Optionally filter result stats to a Cloudflare colo. Cannot be used in combination with deviceId param.',
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
      }) as Argv<TracerouteTestsGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<TracerouteTestsGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.testId as string | undefined, 'testId');

      const params: Record<string, unknown> = {};
      if (argv.deviceId !== undefined) params['deviceId'] = argv.deviceId;
      if (argv.from !== undefined) params['from'] = argv.from;
      if (argv.to !== undefined) params['to'] = argv.to;
      if (argv.interval !== undefined) params['interval'] = argv.interval;
      if (argv.colo !== undefined) params['colo'] = argv.colo;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.zeroTrust.dex.tracerouteTestsGet(
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
