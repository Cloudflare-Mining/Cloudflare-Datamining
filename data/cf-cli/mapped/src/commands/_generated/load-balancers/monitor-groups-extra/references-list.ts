/**
 * references-list command
 * @generated from apis/load-balancers/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface ReferencesListArgs {
  monitorGroupId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ReferencesListArgs> = {
  command: 'references-list <monitorGroupId>',
  describe: 'Get the list of resources that reference the provided monitor group.',

  builder: (yargs: Argv): Argv<ReferencesListArgs> => {
    return yargs
      .positional('monitorGroupId', {
        type: 'string',
        description: 'Monitor group ID',
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
      }) as Argv<ReferencesListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ReferencesListArgs>): Promise<void> => {
    try {
      validateResourceId(argv.monitorGroupId as string | undefined, 'monitorGroupId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.loadBalancers.monitorgroupsextra.referencesList(argv.monitorGroupId, accountId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
