/**
 * namespaces-scripts-delete command
 * @generated from apis/workers/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';

interface NamespacesScriptsDeleteArgs {
  dispatchNamespace: string;
  tags?: string;
  limit?: number;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  accountId?: string;
}

const command: CommandModule<object, NamespacesScriptsDeleteArgs> = {
  command: 'namespaces-scripts-delete <dispatchNamespace>',
  describe: 'Delete multiple scripts from a Workers for Platforms namespace based on optional tag filters.',

  builder: (yargs: Argv): Argv<NamespacesScriptsDeleteArgs> => {
    return yargs
      .positional('dispatchNamespace', {
        type: 'string',
        description: 'Name of the Workers for Platforms dispatch namespace.',
        demandOption: true,
      })
      .option('tags', {
        type: 'string',
        description:
          "Filter scripts by tags before deletion. Format: comma-separated list of tag:allowed pairs where allowed is 'yes' or 'no'.",
        default: undefined,
      })
      .option('limit', {
        type: 'number',
        description: 'Limit the number of scripts to delete.',
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
      })
      .option('dry-run', {
        type: 'boolean',
        description: 'Validate and show what would happen without executing',
        default: false,
      }) as Argv<NamespacesScriptsDeleteArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<NamespacesScriptsDeleteArgs>): Promise<void> => {
    try {
      validateResourceId(argv.dispatchNamespace as string | undefined, 'dispatchNamespace');

      const params: Record<string, unknown> = {};
      if (argv.tags !== undefined) params['tags'] = argv.tags;
      if (argv.limit !== undefined) params['limit'] = argv.limit;

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf workers dispatch namespaces-scripts-delete',
          method: 'DELETE',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/workers/dispatch/namespaces/${argv.dispatchNamespace ?? '<dispatchNamespace>'}/scripts`,
          pathParams: { dispatchNamespace: String(argv.dispatchNamespace ?? '') },
          body: { ...params },
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

      const result = await client.workers.dispatch.namespacesScriptsDelete(
        accountId,
        argv.dispatchNamespace,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
