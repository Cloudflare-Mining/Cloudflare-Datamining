/**
 * queries-create-create command
 * @generated from apis/cloudforce-one/schema.ts
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

interface QueriesCreateCreateArgs {
  'alert-enabled': boolean;
  'alert-rollup-enabled': boolean;
  name: string;
  'query-json': string;
  'rule-enabled': boolean;
  'rule-scope'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, QueriesCreateCreateArgs> = {
  command: 'queries-create-create',
  describe: 'Create a new saved event query for the account',

  builder: (yargs: Argv): Argv<QueriesCreateCreateArgs> => {
    return yargs
      .option('alert-enabled', {
        type: 'boolean',
        description: 'Enable alerts for this query',
      })
      .option('alert-rollup-enabled', {
        type: 'boolean',
        description: 'Enable alert rollup for this query',
      })
      .option('name', {
        type: 'string',
        description: 'Unique name for the saved query',
      })
      .option('query-json', {
        type: 'string',
        description: 'JSON string containing the query parameters',
      })
      .option('rule-enabled', {
        type: 'boolean',
        description: 'Enable rule for this query',
      })
      .option('rule-scope', {
        type: 'string',
        description: 'Scope for the rule',
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
      }) as Argv<QueriesCreateCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<QueriesCreateCreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf cloudforce-one events queries-create-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/cloudforce-one/events/queries/create`,
          pathParams: {},
          body: {
            alertEnabled: argv.alertEnabled,
            alertRollupEnabled: argv.alertRollupEnabled,
            name: argv.name,
            queryJson: argv.queryJson,
            ruleEnabled: argv.ruleEnabled,
            ruleScope: argv.ruleScope,
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
        const result = await client.post<unknown>(`/accounts/${accountId}/cloudforce-one/events/queries/create`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.alertEnabled !== undefined) setNestedValue(bodyData, ['alert_enabled'], argv.alertEnabled);
      if (argv.alertRollupEnabled !== undefined)
        setNestedValue(bodyData, ['alert_rollup_enabled'], argv.alertRollupEnabled);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.queryJson !== undefined) setNestedValue(bodyData, ['query_json'], argv.queryJson);
      if (argv.ruleEnabled !== undefined) setNestedValue(bodyData, ['rule_enabled'], argv.ruleEnabled);
      if (argv.ruleScope !== undefined) setNestedValue(bodyData, ['rule_scope'], argv.ruleScope);
      const result = await client.post<unknown>(`/accounts/${accountId}/cloudforce-one/events/queries/create`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
