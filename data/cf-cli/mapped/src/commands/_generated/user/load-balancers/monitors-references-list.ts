/**
 * monitors-references-list command
 * @generated from apis/user/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface MonitorsReferencesListArgs {
  monitorId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, MonitorsReferencesListArgs> = {
  command: 'monitors-references-list <monitorId>',
  describe: 'Get the list of resources that reference the provided monitor.',

  builder: (yargs: Argv): Argv<MonitorsReferencesListArgs> => {
    return yargs
      .positional('monitorId', {
        type: 'string',
        description: 'Monitor ID',
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
      }) as Argv<MonitorsReferencesListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<MonitorsReferencesListArgs>): Promise<void> => {
    try {
      validateResourceId(argv.monitorId as string | undefined, 'monitorId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });

      const result = await client.user.loadbalancers.monitorsReferencesList(argv.monitorId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
