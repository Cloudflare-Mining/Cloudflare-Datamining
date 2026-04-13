/**
 * bulk-create command
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

interface BulkCreateArgs {
  rulesetId: string;
  'delete-rules'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, BulkCreateArgs> = {
  command: 'bulk-create <rulesetId>',
  describe: 'Modifies one or more rules in a Web Analytics ruleset with a single request.',

  builder: (yargs: Argv): Argv<BulkCreateArgs> => {
    return yargs
      .positional('rulesetId', {
        type: 'string',
        description: 'The Web Analytics ruleset identifier.',
        demandOption: true,
      })
      .option('delete-rules', {
        type: 'string',
        description: 'A list of rule identifiers to delete.',
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
      }) as Argv<BulkCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<BulkCreateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.rulesetId as string | undefined, 'rulesetId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf rum rules bulk-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/rum/v2/${argv.rulesetId ?? '<rulesetId>'}/rules`,
          pathParams: { rulesetId: String(argv.rulesetId ?? '') },
          body: { deleteRules: argv.deleteRules },
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
        const result = await client.post<unknown>(`/accounts/${accountId}/rum/v2/${argv.rulesetId}/rules`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.deleteRules !== undefined) setNestedValue(bodyData, ['delete_rules'], argv.deleteRules);
      const result = await client.post<unknown>(`/accounts/${accountId}/rum/v2/${argv.rulesetId}/rules`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
