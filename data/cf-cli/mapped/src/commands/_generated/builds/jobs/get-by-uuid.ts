/**
 * get-by-uuid command
 * @generated from apis/builds/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface GetByUuidArgs {
  buildUuid: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, GetByUuidArgs> = {
  command: 'get-by-uuid <buildUuid>',
  describe: 'Retrieve detailed information about a specific build',

  builder: (yargs: Argv): Argv<GetByUuidArgs> => {
    return yargs
      .positional('buildUuid', {
        type: 'string',
        description: 'Build UUID.',
        demandOption: true,
      })
      .option('fields', {
        type: 'string',
        description: 'Comma-separated list of fields to include in output',
      })
      .option('ndjson', {
        type: 'boolean',
        description: 'Output as newline-delimited JSON (one object per line)',
        default: false,
      }) as Argv<GetByUuidArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<GetByUuidArgs>): Promise<void> => {
    try {
      validateResourceId(argv.buildUuid as string | undefined, 'buildUuid');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.builds.jobs.getByUuid(accountId, argv.buildUuid);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
