/**
 * variants-flat-get command
 * @generated from apis/images/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface VariantsFlatGetArgs {
  variantId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, VariantsFlatGetArgs> = {
  command: 'variants-flat-get <variantId>',
  describe: 'Fetch details for a single variant with properties at the top level of the result.',

  builder: (yargs: Argv): Argv<VariantsFlatGetArgs> => {
    return yargs
      .positional('variantId', {
        type: 'string',
        description: 'Variant ID',
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
      }) as Argv<VariantsFlatGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<VariantsFlatGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.variantId as string | undefined, 'variantId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.images.v1extra.variantsFlatGet(argv.variantId, accountId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
