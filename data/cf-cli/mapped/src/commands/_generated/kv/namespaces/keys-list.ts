/**
 * keys-list command
 * @generated from apis/kv/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface KeysListArgs {
  namespaceId: string;
  limit?: number;
  prefix?: string;
  cursor?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, KeysListArgs> = {
  command: 'keys-list <namespaceId>',
  describe: "Lists a namespace's keys.",

  builder: (yargs: Argv): Argv<KeysListArgs> => {
    return yargs
      .positional('namespaceId', {
        type: 'string',
        description: 'Namespace identifier tag.',
        demandOption: true,
      })
      .option('limit', {
        type: 'number',
        description:
          'Limits the number of keys returned in the response. The cursor attribute may be used to iterate over the next batch of keys if there are more than the limit.',
        default: undefined,
      })
      .option('prefix', {
        type: 'string',
        description:
          'Filters returned keys by a name prefix. Exact matches and any key names that begin with the prefix will be returned.',
        default: undefined,
      })
      .option('cursor', {
        type: 'string',
        description:
          'Opaque token indicating the position from which to continue when requesting the next set of records if the amount of list results was limited by the limit parameter. A valid value for the cursor can be obtained from the \`cursors\` object in the \`result_info\` structure.',
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
      }) as Argv<KeysListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<KeysListArgs>): Promise<void> => {
    try {
      validateResourceId(argv.namespaceId as string | undefined, 'namespaceId');

      const params: Record<string, unknown> = {};
      if (argv.limit !== undefined) params['limit'] = argv.limit;
      if (argv.prefix !== undefined) params['prefix'] = argv.prefix;
      if (argv.cursor !== undefined) params['cursor'] = argv.cursor;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.kv.namespaces.keysList(
        argv.namespaceId,
        accountId,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
