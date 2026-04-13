/**
 * dex-tests-list command
 * @generated from apis/zero-trust/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface DexTestsListArgs {
  page?: number;
  'per-page'?: number;
  'test-name'?: string;
  kind?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, DexTestsListArgs> = {
  command: 'dex-tests-list',
  describe: 'Fetch all DEX tests',

  builder: (yargs: Argv): Argv<DexTestsListArgs> => {
    return yargs
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
      .option('test-name', {
        type: 'string',
        description: 'Filter by test name',
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
      }) as Argv<DexTestsListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<DexTestsListArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.testName !== undefined) params['testName'] = argv.testName;
      if (argv.kind !== undefined) params['kind'] = argv.kind;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.zeroTrust.devices.dexTestsList(
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
