/**
 * builds-list command
 * @generated from apis/builds/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface BuildsListArgs {
  externalScriptId: string;
  page?: number;
  'per-page'?: number;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, BuildsListArgs> = {
  command: 'builds-list <externalScriptId>',
  describe: 'Get all builds for a specific worker script with pagination',

  builder: (yargs: Argv): Argv<BuildsListArgs> => {
    return yargs
      .positional('externalScriptId', {
        type: 'string',
        description: 'External script identifier.',
        demandOption: true,
      })
      .option('page', {
        type: 'number',
        description: 'Page number for pagination',
        default: undefined,
      })
      .option('per-page', {
        type: 'number',
        description: 'Number of items per page',
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
      }) as Argv<BuildsListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<BuildsListArgs>): Promise<void> => {
    try {
      validateResourceId(argv.externalScriptId as string | undefined, 'externalScriptId');

      const params: Record<string, unknown> = {};
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.builds.workers.buildsList(
        accountId,
        argv.externalScriptId,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
