/**
 * by-tag-list-by-tag command
 * @generated from apis/rulesets/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface ByTagListByTagArgs {
  ruleTag: string;
  rulesetVersion: string;
  rulesetId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ByTagListByTagArgs> = {
  command: 'by-tag-list-by-tag <ruleTag> <rulesetVersion> <rulesetId>',
  describe: 'Fetches the rules of a managed account ruleset version for a given tag.',

  builder: (yargs: Argv): Argv<ByTagListByTagArgs> => {
    return yargs
      .positional('ruleTag', {
        type: 'string',
        description: 'The category of a rule.',
        demandOption: true,
      })
      .positional('rulesetVersion', {
        type: 'string',
        description: 'The version of the ruleset.',
        demandOption: true,
      })
      .positional('rulesetId', {
        type: 'string',
        description: 'The unique ID of the ruleset.',
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
      }) as Argv<ByTagListByTagArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ByTagListByTagArgs>): Promise<void> => {
    try {
      validateResourceId(argv.ruleTag as string | undefined, 'ruleTag');
      validateResourceId(argv.rulesetVersion as string | undefined, 'rulesetVersion');
      validateResourceId(argv.rulesetId as string | undefined, 'rulesetId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.rulesets.versionsextra.byTagListByTag(
        argv.ruleTag,
        argv.rulesetVersion,
        argv.rulesetId,
        accountId,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
