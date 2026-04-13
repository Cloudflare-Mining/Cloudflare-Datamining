/**
 * tags-categories-delete command
 * @generated from apis/cloudforce-one/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';

interface TagsCategoriesDeleteArgs {
  categoryUuid: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  accountId?: string;
}

const command: CommandModule<object, TagsCategoriesDeleteArgs> = {
  command: 'tags-categories-delete <categoryUuid>',
  describe: 'Deletes a Source-of-Truth tag category by UUID.',

  builder: (yargs: Argv): Argv<TagsCategoriesDeleteArgs> => {
    return yargs
      .positional('categoryUuid', {
        type: 'string',
        description: 'Tag Category UUID.',
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
      })
      .option('dry-run', {
        type: 'boolean',
        description: 'Validate and show what would happen without executing',
        default: false,
      }) as Argv<TagsCategoriesDeleteArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<TagsCategoriesDeleteArgs>): Promise<void> => {
    try {
      validateResourceId(argv.categoryUuid as string | undefined, 'categoryUuid');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf cloudforce-one events tags-categories-delete',
          method: 'DELETE',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/cloudforce-one/events/tags/categories/${argv.categoryUuid ?? '<categoryUuid>'}`,
          pathParams: { categoryUuid: String(argv.categoryUuid ?? '') },
          validation: 'passed',
        });
        return;
      }
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.cloudforceOne.events.tagsCategoriesDelete(accountId, argv.categoryUuid);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
