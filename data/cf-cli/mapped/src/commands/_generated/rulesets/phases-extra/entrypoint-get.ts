/**
 * entrypoint-get command
 * @generated from apis/rulesets/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface EntrypointGetArgs {
  rulesetPhase: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, EntrypointGetArgs> = {
  command: 'entrypoint-get <rulesetPhase>',
  describe: 'Fetches the latest version of the account entry point ruleset for a given phase.',

  builder: (yargs: Argv): Argv<EntrypointGetArgs> => {
    return yargs
      .positional('rulesetPhase', {
        type: 'string',
        description: 'The phase of the ruleset.',
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
      }) as Argv<EntrypointGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<EntrypointGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.rulesetPhase as string | undefined, 'rulesetPhase');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.rulesets.phasesextra.entrypointGet(argv.rulesetPhase, accountId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
