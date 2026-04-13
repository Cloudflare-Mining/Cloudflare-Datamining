/**
 * pagerduty-link command
 * @generated from apis/alerting/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface PagerdutyLinkArgs {
  tokenId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, PagerdutyLinkArgs> = {
  command: 'pagerduty-link <tokenId>',
  describe: 'Links PagerDuty with the account using the integration token.',

  builder: (yargs: Argv): Argv<PagerdutyLinkArgs> => {
    return yargs
      .positional('tokenId', {
        type: 'string',
        description: 'The token integration key',
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
      }) as Argv<PagerdutyLinkArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<PagerdutyLinkArgs>): Promise<void> => {
    try {
      validateResourceId(argv.tokenId as string | undefined, 'tokenId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.alerting.destinations.pagerdutyLink(accountId, argv.tokenId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
