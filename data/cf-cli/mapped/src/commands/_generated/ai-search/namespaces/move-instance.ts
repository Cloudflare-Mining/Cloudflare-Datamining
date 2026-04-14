/**
 * move-instance command
 * @generated from apis/ai-search/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface MoveInstanceArgs {
  name: string;
  id: string;
  'new-namespace': string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, MoveInstanceArgs> = {
  command: 'move-instance <name> <id>',
  describe:
    "Moves an instance from its current namespace to the specified target namespace. Use 'default' as new_namespace to move the instance back to the default namespace. Fails with 400 if the target namespace already has an instance with the same id (ids must be unique within a namespace — the same id can exist in different namespaces).",

  builder: (yargs: Argv): Argv<MoveInstanceArgs> => {
    return yargs
      .positional('name', {
        type: 'string',
        description: 'Current namespace of the instance.',
        demandOption: true,
      })
      .positional('id', {
        type: 'string',
        description: 'Instance id.',
        demandOption: true,
      })
      .option('new-namespace', {
        type: 'string',
        description: 'Target namespace to move the instance into.',
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
      }) as Argv<MoveInstanceArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<MoveInstanceArgs>): Promise<void> => {
    try {
      validateResourceId(argv.name as string | undefined, 'name');
      validateResourceId(argv.id as string | undefined, 'id');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf ai-search namespaces move-instance',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/ai-search/namespaces/${argv.name ?? '<name>'}/instances/${argv.id ?? '<id>'}`,
          pathParams: { name: String(argv.name ?? ''), id: String(argv.id ?? '') },
          body: { newNamespace: argv.newNamespace },
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
          `/accounts/${accountId}/ai-search/namespaces/${argv.name}/instances/${argv.id}`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.newNamespace !== undefined) setNestedValue(bodyData, ['new_namespace'], argv.newNamespace);
      const result = await client.patch<unknown>(
        `/accounts/${accountId}/ai-search/namespaces/${argv.name}/instances/${argv.id}`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
