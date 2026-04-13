/**
 * entrypoint-update command
 * @generated from apis/rulesets/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody } from '../../../../lib/body-parser.js';

interface EntrypointUpdateArgs {
  rulesetPhase: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, EntrypointUpdateArgs> = {
  command: 'entrypoint-update <rulesetPhase>',
  describe: 'Updates an account entry point ruleset, creating a new version.',

  builder: (yargs: Argv): Argv<EntrypointUpdateArgs> => {
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
      })
      .option('dry-run', {
        type: 'boolean',
        description: 'Validate and show what would happen without executing',
        default: false,
      })
      .option('body', {
        type: 'string',
        description: 'Raw JSON request body (bypasses individual flags)',
      }) as Argv<EntrypointUpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<EntrypointUpdateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.rulesetPhase as string | undefined, 'rulesetPhase');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf rulesets phases-extra entrypoint-update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/rulesets/phases/${argv.rulesetPhase ?? '<rulesetPhase>'}/entrypoint`,
          pathParams: { rulesetPhase: String(argv.rulesetPhase ?? '') },
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
        const result = await client.put<unknown>(
          `/accounts/${accountId}/rulesets/phases/${argv.rulesetPhase}/entrypoint`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      const result = await client.rulesets.phasesextra.entrypointUpdate(argv.rulesetPhase, accountId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
