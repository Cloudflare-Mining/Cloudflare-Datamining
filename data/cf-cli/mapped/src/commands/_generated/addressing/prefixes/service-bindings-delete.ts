/**
 * service-bindings-delete command
 * @generated from apis/addressing/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';

interface ServiceBindingsDeleteArgs {
  prefixId: string;
  bindingId: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ServiceBindingsDeleteArgs> = {
  command: 'service-bindings-delete <prefixId> <bindingId>',
  describe: 'Delete a Service Binding',

  builder: (yargs: Argv): Argv<ServiceBindingsDeleteArgs> => {
    return yargs
      .positional('prefixId', {
        type: 'string',
        description: 'Identifier of an IP Prefix.',
        demandOption: true,
      })
      .positional('bindingId', {
        type: 'string',
        description: 'Identifier of a Service Binding.',
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
      })
      .option('dry-run', {
        type: 'boolean',
        description: 'Validate and show what would happen without executing',
        default: false,
      }) as Argv<ServiceBindingsDeleteArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ServiceBindingsDeleteArgs>): Promise<void> => {
    try {
      validateResourceId(argv.prefixId as string | undefined, 'prefixId');
      validateResourceId(argv.bindingId as string | undefined, 'bindingId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf addressing prefixes service-bindings-delete',
          method: 'DELETE',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/addressing/prefixes/${argv.prefixId ?? '<prefixId>'}/bindings/${argv.bindingId ?? '<bindingId>'}`,
          pathParams: { prefixId: String(argv.prefixId ?? ''), bindingId: String(argv.bindingId ?? '') },
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

      const result = await client.addressing.prefixes.serviceBindingsDelete(accountId, argv.prefixId, argv.bindingId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
