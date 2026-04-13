/**
 * queries-alerts-get-v2 command
 * @generated from apis/cloudforce-one/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface QueriesAlertsGetV2Args {
  alertId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, QueriesAlertsGetV2Args> = {
  command: 'queries-alerts-get-v2 <alertId>',
  describe: 'Retrieve an event query alert by its ID',

  builder: (yargs: Argv): Argv<QueriesAlertsGetV2Args> => {
    return yargs
      .positional('alertId', {
        type: 'string',
        description: 'Event query alert ID',
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
      }) as Argv<QueriesAlertsGetV2Args>;
  },

  handler: async (argv: ArgumentsCamelCase<QueriesAlertsGetV2Args>): Promise<void> => {
    try {
      validateResourceId(argv.alertId as string | undefined, 'alertId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.cloudforceOne.events.queriesAlertsGetV2(accountId, argv.alertId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
