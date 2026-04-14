/**
 * instances-items-sync command
 * @generated from apis/ai-search/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface InstancesItemsSyncArgs {
  id: string;
  itemId: string;
  name: string;
  'next-action': string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, InstancesItemsSyncArgs> = {
  command: 'instances-items-sync <id> <itemId> <name>',
  describe: 'Syncs an item to an AI Search instance index.',

  builder: (yargs: Argv): Argv<InstancesItemsSyncArgs> => {
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
      .option('next-action', {
        type: 'string',
        description: 'The next_action field',
        choices: ['INDEX'] as const,
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
      })
      .option('body', {
        type: 'string',
        description: 'Raw JSON request body (bypasses individual flags)',
      })
      .choices('next-action', ['INDEX'] as const) as Argv<InstancesItemsSyncArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<InstancesItemsSyncArgs>): Promise<void> => {
    try {
      validateResourceId(argv.id as string | undefined, 'id');
      validateResourceId(argv.itemId as string | undefined, 'itemId');
      validateResourceId(argv.name as string | undefined, 'name');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf ai-search namespaces instances-items-sync',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/ai-search/namespaces/${argv.name ?? '<name>'}/instances/${argv.id ?? '<id>'}/items/${argv.itemId ?? '<itemId>'}`,
          pathParams: { id: String(argv.id ?? ''), itemId: String(argv.itemId ?? ''), name: String(argv.name ?? '') },
          body: { nextAction: argv.nextAction },
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

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.patch<unknown>(
          `/accounts/${accountId}/ai-search/namespaces/${argv.name}/instances/${argv.id}/items/${argv.itemId}`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.nextAction !== undefined) setNestedValue(bodyData, ['next_action'], argv.nextAction);
      const result = await client.patch<unknown>(
        `/accounts/${accountId}/ai-search/namespaces/${argv.name}/instances/${argv.id}/items/${argv.itemId}`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
