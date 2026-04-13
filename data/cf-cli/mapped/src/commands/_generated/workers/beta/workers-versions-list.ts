/**
 * workers-versions-list command
 * @generated from apis/workers/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface WorkersVersionsListArgs {
  workerId: string;
  page?: number;
  'per-page'?: number;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, WorkersVersionsListArgs> = {
  command: 'workers-versions-list <workerId>',
  describe: 'List all versions for a Worker.',

  builder: (yargs: Argv): Argv<WorkersVersionsListArgs> => {
    return yargs
      .positional('workerId', {
        type: 'string',
        description: 'Identifier for the Worker, which can be ID or name.',
        demandOption: true,
      })
      .option('page', {
        type: 'number',
        description: 'Current page.',
        default: undefined,
      })
      .option('per-page', {
        type: 'number',
        description: 'Items per-page.',
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
      }) as Argv<WorkersVersionsListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<WorkersVersionsListArgs>): Promise<void> => {
    try {
      validateResourceId(argv.workerId as string | undefined, 'workerId');

      const params: Record<string, unknown> = {};
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.workers.beta.workersVersionsList(
        accountId,
        argv.workerId,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
