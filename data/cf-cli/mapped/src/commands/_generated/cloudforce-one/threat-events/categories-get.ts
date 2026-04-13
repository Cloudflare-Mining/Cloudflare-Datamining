/**
 * categories-get command
 * @generated from apis/cloudforce-one/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface CategoriesGetArgs {
  categoryId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, CategoriesGetArgs> = {
  command: 'categories-get <categoryId>',
  describe: 'Retrieves details for a specific threat event category.',

  builder: (yargs: Argv): Argv<CategoriesGetArgs> => {
    return yargs
      .positional('categoryId', {
        type: 'string',
        description: 'Category UUID.',
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
      }) as Argv<CategoriesGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CategoriesGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.categoryId as string | undefined, 'categoryId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.cloudforceOne.threatevents.categoriesGet(accountId, argv.categoryId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
