/**
 * namespaces-scripts-delete command
 * @generated from apis/workers-for-platforms/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody } from '../../../../lib/body-parser.js';

interface NamespacesScriptsDeleteArgs {
  dispatchNamespace: string;
  scriptName: string;
  force?: boolean;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, NamespacesScriptsDeleteArgs> = {
  command: 'namespaces-scripts-delete <dispatchNamespace> <scriptName>',
  describe:
    'Delete a worker from a Workers for Platforms namespace. This call has no response body on a successful delete.',

  builder: (yargs: Argv): Argv<NamespacesScriptsDeleteArgs> => {
    return yargs
      .positional('dispatchNamespace', {
        type: 'string',
        description: 'Name of the Workers for Platforms dispatch namespace.',
        demandOption: true,
      })
      .positional('scriptName', {
        type: 'string',
        description: 'Name of the script, used in URLs and route configuration.',
        demandOption: true,
      })
      .option('force', {
        type: 'boolean',
        description:
          'If set to true, delete will not be stopped by associated service binding, durable object, or other binding. Any of these associated bindings/durable objects will be deleted along with the script.',
        default: false,
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
      }) as Argv<NamespacesScriptsDeleteArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<NamespacesScriptsDeleteArgs>): Promise<void> => {
    try {
      validateResourceId(argv.dispatchNamespace as string | undefined, 'dispatchNamespace');
      validateResourceId(argv.scriptName as string | undefined, 'scriptName');

      const params: Record<string, unknown> = {};
      if (argv.force !== undefined) params['force'] = argv.force;

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf workers-for-platforms dispatch namespaces-scripts-delete',
          method: 'DELETE',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/workers/dispatch/namespaces/${argv.dispatchNamespace ?? '<dispatchNamespace>'}/scripts/${argv.scriptName ?? '<scriptName>'}`,
          pathParams: {
            dispatchNamespace: String(argv.dispatchNamespace ?? ''),
            scriptName: String(argv.scriptName ?? ''),
          },
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

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.delete<unknown>(
          `/accounts/${accountId}/workers/dispatch/namespaces/${argv.dispatchNamespace}/scripts/${argv.scriptName}`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      const result = await client.workersForPlatforms.dispatch.namespacesScriptsDelete(
        accountId,
        argv.dispatchNamespace,
        argv.scriptName,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
