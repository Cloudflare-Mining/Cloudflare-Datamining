/**
 * list-vectors command
 * @generated from apis/vectorize/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface ListVectorsArgs {
  indexName: string;
  count?: number;
  cursor?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ListVectorsArgs> = {
  command: 'list-vectors <indexName>',
  describe: 'Returns a paginated list of vector identifiers from the specified index.',

  builder: (yargs: Argv): Argv<ListVectorsArgs> => {
    return yargs
      .positional('indexName', {
        type: 'string',
        description: 'Index name',
        demandOption: true,
      })
      .option('count', {
        type: 'number',
        description: 'Maximum number of vectors to return',
        default: undefined,
      })
      .option('cursor', {
        type: 'string',
        description: 'Cursor for pagination to get the next page of results',
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
      }) as Argv<ListVectorsArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ListVectorsArgs>): Promise<void> => {
    try {
      validateResourceId(argv.indexName as string | undefined, 'indexName');

      const params: Record<string, unknown> = {};
      if (argv.count !== undefined) params['count'] = argv.count;
      if (argv.cursor !== undefined) params['cursor'] = argv.cursor;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.vectorize.indexes.listVectors(
        accountId,
        argv.indexName,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
