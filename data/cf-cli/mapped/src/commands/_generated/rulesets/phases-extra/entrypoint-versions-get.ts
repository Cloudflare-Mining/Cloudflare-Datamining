/**
 * entrypoint-versions-get command
 * @generated from apis/rulesets/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface EntrypointVersionsGetArgs {
  rulesetVersion: string;
  rulesetPhase: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, EntrypointVersionsGetArgs> = {
  command: 'entrypoint-versions-get <rulesetVersion> <rulesetPhase>',
  describe: 'Fetches a specific version of an account entry point ruleset.',

  builder: (yargs: Argv): Argv<EntrypointVersionsGetArgs> => {
    return yargs
      .positional('rulesetVersion', {
        type: 'string',
        description: 'The version of the ruleset.',
        demandOption: true,
      })
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
      }) as Argv<EntrypointVersionsGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<EntrypointVersionsGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.rulesetVersion as string | undefined, 'rulesetVersion');
      validateResourceId(argv.rulesetPhase as string | undefined, 'rulesetPhase');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.rulesets.phasesextra.entrypointVersionsGet(
        argv.rulesetVersion,
        argv.rulesetPhase,
        accountId,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
