/**
 * create command
 * @generated from apis/accounts/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface CreateArgs {
  'app-install-id'?: string;
  frequency?: string;
  'rate-plan-currency'?: string;
  'rate-plan-externally-managed'?: boolean;
  'rate-plan-id'?: string;
  'rate-plan-is-contract'?: boolean;
  'rate-plan-public-name'?: string;
  'rate-plan-scope'?: string;
  'rate-plan-sets'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, CreateArgs> = {
  command: 'create',
  describe: 'Creates an account subscription.',

  builder: (yargs: Argv): Argv<CreateArgs> => {
    return yargs
      .option('app-install-id', {
        type: 'string',
        description: 'app install id.',
        default: undefined,
      })
      .option('frequency', {
        type: 'string',
        description: 'How often the subscription is renewed automatically.',
        choices: ['weekly', 'monthly', 'quarterly', 'yearly'] as const,
        default: undefined,
      })
      .option('rate-plan-currency', {
        type: 'string',
        description: 'The currency applied to the rate plan subscription.',
        default: undefined,
      })
      .option('rate-plan-externally-managed', {
        type: 'boolean',
        description: 'Whether this rate plan is managed externally from Cloudflare.',
        default: false,
      })
      .option('rate-plan-id', {
        type: 'string',
        description: 'The ID of the rate plan.',
        default: undefined,
      })
      .option('rate-plan-is-contract', {
        type: 'boolean',
        description: 'Whether a rate plan is enterprise-based (or newly adopted term contract).',
        default: false,
      })
      .option('rate-plan-public-name', {
        type: 'string',
        description: 'The full name of the rate plan.',
        default: undefined,
      })
      .option('rate-plan-scope', {
        type: 'string',
        description: 'The scope that this rate plan applies to.',
        default: undefined,
      })
      .option('rate-plan-sets', {
        type: 'string',
        description: 'The list of sets this rate plan applies to. Returns array of strings.',
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
      })
      .choices('frequency', ['weekly', 'monthly', 'quarterly', 'yearly'] as const) as Argv<CreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf accounts subscriptions create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/subscriptions`,
          pathParams: {},
          body: {
            appInstallId: argv.appInstallId,
            frequency: argv.frequency,
            ratePlanCurrency: argv.ratePlanCurrency,
            ratePlanExternallyManaged: argv.ratePlanExternallyManaged,
            ratePlanId: argv.ratePlanId,
            ratePlanIsContract: argv.ratePlanIsContract,
            ratePlanPublicName: argv.ratePlanPublicName,
            ratePlanScope: argv.ratePlanScope,
            ratePlanSets: argv.ratePlanSets,
          },
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
        const result = await client.post<unknown>(`/accounts/${accountId}/subscriptions`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.appInstallId !== undefined) setNestedValue(bodyData, ['app', 'install_id'], argv.appInstallId);
      if (argv.frequency !== undefined) setNestedValue(bodyData, ['frequency'], argv.frequency);
      if (argv.ratePlanCurrency !== undefined)
        setNestedValue(bodyData, ['rate_plan', 'currency'], argv.ratePlanCurrency);
      if (argv.ratePlanExternallyManaged !== undefined)
        setNestedValue(bodyData, ['rate_plan', 'externally_managed'], argv.ratePlanExternallyManaged);
      if (argv.ratePlanId !== undefined) setNestedValue(bodyData, ['rate_plan', 'id'], argv.ratePlanId);
      if (argv.ratePlanIsContract !== undefined)
        setNestedValue(bodyData, ['rate_plan', 'is_contract'], argv.ratePlanIsContract);
      if (argv.ratePlanPublicName !== undefined)
        setNestedValue(bodyData, ['rate_plan', 'public_name'], argv.ratePlanPublicName);
      if (argv.ratePlanScope !== undefined) setNestedValue(bodyData, ['rate_plan', 'scope'], argv.ratePlanScope);
      if (argv.ratePlanSets !== undefined) setNestedValue(bodyData, ['rate_plan', 'sets'], argv.ratePlanSets);
      const result = await client.post<unknown>(`/accounts/${accountId}/subscriptions`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
