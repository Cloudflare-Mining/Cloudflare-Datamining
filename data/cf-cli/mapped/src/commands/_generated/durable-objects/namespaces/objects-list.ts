/**
 * objects-list command
 * @generated from apis/durable-objects/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId } from '../../../../lib/input-validation.js';

interface ObjectsListArgs {
  id: string;
  limit?: number;
  cursor?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ObjectsListArgs> = {
  command: 'objects-list <id>',
  describe: 'Returns the Durable Objects in a given namespace.',

  builder: (yargs: Argv): Argv<ObjectsListArgs> => {
    return yargs
      .positional('id', {
        type: 'string',
        description: 'ID of the namespace.',
        demandOption: true,
      })
      .option('limit', {
        type: 'number',
        description:
          'The number of objects to return. The cursor attribute may be used to iterate over the next batch of objects if there are more than the limit.',
        default: undefined,
      })
      .option('cursor', {
        type: 'string',
        description:
          'Opaque token indicating the position from which to continue when requesting the next set of records. A valid value for the cursor can be obtained from the cursors object in the result_info structure.',
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
      }) as Argv<ObjectsListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ObjectsListArgs>): Promise<void> => {
    try {
      validateResourceId(argv.id as string | undefined, 'id');

      const params: Record<string, unknown> = {};
      if (argv.limit !== undefined) params['limit'] = argv.limit;
      if (argv.cursor !== undefined) params['cursor'] = argv.cursor;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.durableObjects.namespaces.objectsList(
        accountId,
        argv.id,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
