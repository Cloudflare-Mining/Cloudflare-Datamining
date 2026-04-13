/**
 * metadata-get command
 * @generated from apis/kv/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface MetadataGetArgs {
  keyName: string;
  namespaceId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, MetadataGetArgs> = {
  command: 'metadata-get <keyName> <namespaceId>',
  describe:
    'Returns the metadata associated with the given key in the given namespace. Use URL-encoding to use special characters (for example, \`:\`, \`!\`, \`%\`) in the key name.',

  builder: (yargs: Argv): Argv<MetadataGetArgs> => {
    return yargs
      .positional('keyName', {
        type: 'string',
        description:
          "A key's name. The name may be at most 512 bytes. All printable, non-whitespace characters are valid. Use percent-encoding to define key names as part of a URL.",
        demandOption: true,
      })
      .positional('namespaceId', {
        type: 'string',
        description: 'Namespace identifier tag.',
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
      }) as Argv<MetadataGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<MetadataGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.keyName as string | undefined, 'keyName');
      validateResourceId(argv.namespaceId as string | undefined, 'namespaceId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.kv.namespaces.metadataGet(argv.keyName, argv.namespaceId, accountId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
