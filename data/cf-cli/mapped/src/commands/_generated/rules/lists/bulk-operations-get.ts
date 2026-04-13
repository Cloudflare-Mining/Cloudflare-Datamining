/**
 * bulk-operations-get command
 * @generated from apis/rules/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface BulkOperationsGetArgs {
  operationId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, BulkOperationsGetArgs> = {
  command: 'bulk-operations-get <operationId>',
  describe:
    'Gets the current status of an asynchronous operation on a list. The \`status\` property can have one of the following values: \`pending\`, \`running\`, \`completed\`, or \`failed\`. If the status is \`failed\`, the \`error\` property will contain a message describing the error.',

  builder: (yargs: Argv): Argv<BulkOperationsGetArgs> => {
    return yargs
      .positional('operationId', {
        type: 'string',
        description: 'The unique operation ID of the asynchronous action.',
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
      }) as Argv<BulkOperationsGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<BulkOperationsGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.operationId as string | undefined, 'operationId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.rules.lists.bulkOperationsGet(argv.operationId, accountId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
