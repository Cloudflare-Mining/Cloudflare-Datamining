/**
 * instances-items-logs command
 * @generated from apis/ai-search/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface InstancesItemsLogsArgs {
  id: string;
  itemId: string;
  name: string;
  limit?: number;
  cursor?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, InstancesItemsLogsArgs> = {
  command: 'instances-items-logs <id> <itemId> <name>',
  describe: 'Lists processing logs for a specific item in an AI Search instance.',

  builder: (yargs: Argv): Argv<InstancesItemsLogsArgs> => {
    return yargs
      .positional('id', {
        type: 'string',
        description: 'AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.',
        demandOption: true,
      })
      .positional('itemId', {
        type: 'string',
        description: 'Item ID',
        demandOption: true,
      })
      .positional('name', {
        type: 'string',
        description: 'Namespace name',
        demandOption: true,
      })
      .option('limit', {
        type: 'number',
        description: 'Limit',
        default: undefined,
      })
      .option('cursor', {
        type: 'string',
        description: 'Cursor',
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
      }) as Argv<InstancesItemsLogsArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<InstancesItemsLogsArgs>): Promise<void> => {
    try {
      validateResourceId(argv.id as string | undefined, 'id');
      validateResourceId(argv.itemId as string | undefined, 'itemId');
      validateResourceId(argv.name as string | undefined, 'name');

      const params: Record<string, unknown> = {};
      if (argv.limit !== undefined) params['limit'] = argv.limit;
      if (argv.cursor !== undefined) params['cursor'] = argv.cursor;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.aiSearch.namespaces.instancesItemsLogs(
        argv.id,
        argv.itemId,
        accountId,
        argv.name,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
