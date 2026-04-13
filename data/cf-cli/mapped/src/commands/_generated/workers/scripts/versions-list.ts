/**
 * versions-list command
 * @generated from apis/workers/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface VersionsListArgs {
  scriptName: string;
  deployable?: boolean;
  page?: number;
  'per-page'?: number;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, VersionsListArgs> = {
  command: 'versions-list <scriptName>',
  describe: 'List of Worker Versions. The first version in the list is the latest version.',

  builder: (yargs: Argv): Argv<VersionsListArgs> => {
    return yargs
      .positional('scriptName', {
        type: 'string',
        description: 'Name of the script.',
        demandOption: true,
      })
      .option('deployable', {
        type: 'boolean',
        description: 'Only return versions that can be used in a deployment. Ignores pagination.',
        default: false,
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
      }) as Argv<VersionsListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<VersionsListArgs>): Promise<void> => {
    try {
      validateResourceId(argv.scriptName as string | undefined, 'scriptName');

      const params: Record<string, unknown> = {};
      if (argv.deployable !== undefined) params['deployable'] = argv.deployable;
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.workers.scripts.versionsList(
        accountId,
        argv.scriptName,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
