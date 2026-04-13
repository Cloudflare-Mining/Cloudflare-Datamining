/**
 * metadata-index-list command
 * @generated from apis/vectorize/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface MetadataIndexListArgs {
  indexName: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, MetadataIndexListArgs> = {
  command: 'metadata-index-list <indexName>',
  describe: 'List Metadata Indexes for the specified Vectorize Index.',

  builder: (yargs: Argv): Argv<MetadataIndexListArgs> => {
    return yargs
      .positional('indexName', {
        type: 'string',
        description: 'Index name',
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
      }) as Argv<MetadataIndexListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<MetadataIndexListArgs>): Promise<void> => {
    try {
      validateResourceId(argv.indexName as string | undefined, 'indexName');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.vectorize.indexes.metadataIndexList(accountId, argv.indexName);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
