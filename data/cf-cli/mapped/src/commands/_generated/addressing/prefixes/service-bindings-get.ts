/**
 * service-bindings-get command
 * @generated from apis/addressing/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface ServiceBindingsGetArgs {
  prefixId: string;
  bindingId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ServiceBindingsGetArgs> = {
  command: 'service-bindings-get <prefixId> <bindingId>',
  describe: 'Fetch a single Service Binding',

  builder: (yargs: Argv): Argv<ServiceBindingsGetArgs> => {
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
      }) as Argv<ServiceBindingsGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ServiceBindingsGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.prefixId as string | undefined, 'prefixId');
      validateResourceId(argv.bindingId as string | undefined, 'bindingId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.addressing.prefixes.serviceBindingsGet(accountId, argv.prefixId, argv.bindingId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
