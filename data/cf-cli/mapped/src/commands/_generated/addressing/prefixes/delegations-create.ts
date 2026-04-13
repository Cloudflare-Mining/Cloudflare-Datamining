/**
 * delegations-create command
 * @generated from apis/addressing/schema.ts
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

interface DelegationsCreateArgs {
  prefixId: string;
  cidr: string;
  'delegated-account-id': string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, DelegationsCreateArgs> = {
  command: 'delegations-create <prefixId>',
  describe: 'Create a new account delegation for a given IP prefix.',

  builder: (yargs: Argv): Argv<DelegationsCreateArgs> => {
    return yargs
      .positional('prefixId', {
        type: 'string',
        description: 'Identifier of an IP Prefix.',
        demandOption: true,
      })
      .option('cidr', {
        type: 'string',
        description: 'IP Prefix in Classless Inter-Domain Routing format.',
      })
      .option('delegated-account-id', {
        type: 'string',
        description: 'Account identifier for the account to which prefix is being delegated.',
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
      }) as Argv<DelegationsCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<DelegationsCreateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.prefixId as string | undefined, 'prefixId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf addressing prefixes delegations-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/addressing/prefixes/${argv.prefixId ?? '<prefixId>'}/delegations`,
          pathParams: { prefixId: String(argv.prefixId ?? '') },
          body: { cidr: argv.cidr, delegatedAccountId: argv.delegatedAccountId },
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
        const result = await client.post<unknown>(
          `/accounts/${accountId}/addressing/prefixes/${argv.prefixId}/delegations`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.cidr !== undefined) setNestedValue(bodyData, ['cidr'], argv.cidr);
      if (argv.delegatedAccountId !== undefined)
        setNestedValue(bodyData, ['delegated_account_id'], argv.delegatedAccountId);
      const result = await client.post<unknown>(
        `/accounts/${accountId}/addressing/prefixes/${argv.prefixId}/delegations`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
