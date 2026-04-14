/**
 * tests-list command
 * @generated from apis/zero-trust/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface TestsListArgs {
  colo?: string;
  'test-name'?: string;
  'device-id'?: string;
  'registration-id'?: string;
  page?: number;
  'per-page'?: number;
  kind?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, TestsListArgs> = {
  command: 'tests-list',
  describe: 'List DEX tests with overview metrics',

  builder: (yargs: Argv): Argv<TestsListArgs> => {
    return yargs
      .option('colo', {
        type: 'string',
        description:
          'Optionally filter result stats to a Cloudflare colo. Cannot be used in combination with deviceId param.',
        default: undefined,
      })
      .option('test-name', {
        type: 'string',
        description: 'Optionally filter results by test name',
        default: undefined,
      })
      .option('device-id', {
        type: 'string',
        description:
          'Optionally filter result stats to a specific device(s). Cannot be used in combination with colo param.',
        default: undefined,
      })
      .option('registration-id', {
        type: 'string',
        description:
          'Optionally filter results to a specific device registration. Must be used in combination with a single deviceId.',
        default: undefined,
      })
      .option('page', {
        type: 'number',
        description: 'Page number of paginated results',
        default: undefined,
      })
      .option('per-page', {
        type: 'number',
        description: 'Number of items per page',
        default: undefined,
      })
      .option('kind', {
        type: 'string',
        description: 'Filter by test type',
        choices: ['http', 'traceroute'] as const,
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
      }) as Argv<TestsListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<TestsListArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.colo !== undefined) params['colo'] = argv.colo;
      if (argv.testName !== undefined) params['testName'] = argv.testName;
      if (argv.deviceId !== undefined) params['deviceId'] = argv.deviceId;
      if (argv.registrationId !== undefined) params['registration_id'] = argv.registrationId;
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.kind !== undefined) params['kind'] = argv.kind;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.zeroTrust.dex.testsList(
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
