/**
 * update command
 * @generated from apis/rum/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface UpdateArgs {
  rulesetId: string;
  ruleId: string;
  host?: string;
  inclusive?: boolean;
  'is-paused'?: boolean;
  paths?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, UpdateArgs> = {
  command: 'update <rulesetId> <ruleId>',
  describe: 'Updates a rule in a Web Analytics ruleset.',

  builder: (yargs: Argv): Argv<UpdateArgs> => {
    return yargs
      .positional('rulesetId', {
        type: 'string',
        description: 'The Web Analytics ruleset identifier.',
        demandOption: true,
      })
      .positional('ruleId', {
        type: 'string',
        description: 'The Web Analytics rule identifier.',
        demandOption: true,
      })
      .option('host', {
        type: 'string',
        description: 'The host field',
        default: undefined,
      })
      .option('inclusive', {
        type: 'boolean',
        description: 'Whether the rule includes or excludes traffic from being measured.',
        default: false,
      })
      .option('is-paused', {
        type: 'boolean',
        description: 'Whether the rule is paused or not.',
        default: false,
      })
      .option('paths', {
        type: 'string',
        description: 'The paths field',
        default: undefined,
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
      }) as Argv<UpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<UpdateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.rulesetId as string | undefined, 'rulesetId');
      validateResourceId(argv.ruleId as string | undefined, 'ruleId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf rum rules update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/rum/v2/${argv.rulesetId ?? '<rulesetId>'}/rule/${argv.ruleId ?? '<ruleId>'}`,
          pathParams: { rulesetId: String(argv.rulesetId ?? ''), ruleId: String(argv.ruleId ?? '') },
          body: { host: argv.host, inclusive: argv.inclusive, isPaused: argv.isPaused, paths: argv.paths },
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
          `/accounts/${accountId}/rum/v2/${argv.rulesetId}/rule/${argv.ruleId}`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.host !== undefined) setNestedValue(bodyData, ['host'], argv.host);
      if (argv.inclusive !== undefined) setNestedValue(bodyData, ['inclusive'], argv.inclusive);
      if (argv.isPaused !== undefined) setNestedValue(bodyData, ['is_paused'], argv.isPaused);
      if (argv.paths !== undefined) setNestedValue(bodyData, ['paths'], argv.paths);
      const result = await client.put<unknown>(`/accounts/${accountId}/rum/v2/${argv.rulesetId}/rule/${argv.ruleId}`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
