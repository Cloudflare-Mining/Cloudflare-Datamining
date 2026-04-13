/**
 * list command
 * @generated from apis/rum/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface ListArgs {
  rulesetId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ListArgs> = {
  command: 'list <rulesetId>',
  describe: 'Lists all the rules in a Web Analytics ruleset.',

  builder: (yargs: Argv): Argv<ListArgs> => {
    return yargs
      .positional('rulesetId', {
        type: 'string',
        description: 'The Web Analytics ruleset identifier.',
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
      }) as Argv<ListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ListArgs>): Promise<void> => {
    try {
      validateResourceId(argv.rulesetId as string | undefined, 'rulesetId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.rum.rules.list(accountId, argv.rulesetId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
