/**
 * namespaces-edit command
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
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface NamespacesEditArgs {
  dispatchNamespace: string;
  name?: string;
  'trusted-workers'?: boolean;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, NamespacesEditArgs> = {
  command: 'namespaces-edit <dispatchNamespace>',
  describe: 'Patch a Workers for Platforms namespace. Omitted fields are left unchanged.',

  builder: (yargs: Argv): Argv<NamespacesEditArgs> => {
    return yargs
      .positional('dispatchNamespace', {
        type: 'string',
        description: 'Name of the Workers for Platforms dispatch namespace.',
        demandOption: true,
      })
      .option('name', {
        type: 'string',
        description: 'The name of the dispatch namespace.',
        default: undefined,
      })
      .option('trusted-workers', {
        type: 'boolean',
        description:
          'Whether the Workers in the namespace are executed in a "trusted" manner. When a Worker is trusted, it has access to the shared caches for the zone in the Cache API, and has access to the \`request.cf\` object on incoming Requests. When a Worker is untrusted, caches are not shared across the zone, and \`request.cf\` is undefined. By default, Workers in a namespace are "untrusted".',
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
      }) as Argv<NamespacesEditArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<NamespacesEditArgs>): Promise<void> => {
    try {
      validateResourceId(argv.dispatchNamespace as string | undefined, 'dispatchNamespace');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf workers dispatch namespaces-edit',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/workers/dispatch/namespaces/${argv.dispatchNamespace ?? '<dispatchNamespace>'}`,
          pathParams: { dispatchNamespace: String(argv.dispatchNamespace ?? '') },
          body: { name: argv.name, trustedWorkers: argv.trustedWorkers },
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
          `/accounts/${accountId}/workers/dispatch/namespaces/${argv.dispatchNamespace}`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.trustedWorkers !== undefined) setNestedValue(bodyData, ['trusted_workers'], argv.trustedWorkers);
      const result = await client.patch<unknown>(
        `/accounts/${accountId}/workers/dispatch/namespaces/${argv.dispatchNamespace}`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
