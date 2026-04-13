/**
 * get command
 * @generated from apis/resource-sharing/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface GetArgs {
  shareId: string;
  resourceId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, GetArgs> = {
  command: 'get <shareId> <resourceId>',
  describe: 'Get share resource by ID.',

  builder: (yargs: Argv): Argv<GetArgs> => {
    return yargs
      .positional('shareId', {
        type: 'string',
        description: 'Share identifier tag.',
        demandOption: true,
      })
      .positional('resourceId', {
        type: 'string',
        description: 'Share Resource identifier.',
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
      }) as Argv<GetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<GetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.shareId as string | undefined, 'shareId');
      validateResourceId(argv.resourceId as string | undefined, 'resourceId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.resourceSharing.resources.get(accountId, argv.shareId, argv.resourceId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
