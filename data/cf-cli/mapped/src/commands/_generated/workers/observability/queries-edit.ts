/**
 * queries-edit command
 * @generated from apis/workers/schema.ts
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

interface QueriesEditArgs {
  queryId: string;
  description: string;
  name: string;
  'parameters-datasets'?: string;
  'parameters-filter-combination'?: string;
  'parameters-limit'?: number;
  'parameters-needle-is-regex'?: boolean;
  'parameters-needle-match-case'?: boolean;
  'parameters-order-by-order'?: string;
  'parameters-order-by-value': string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, QueriesEditArgs> = {
  command: 'queries-edit <queryId>',
  describe: 'Update saved query.',

  builder: (yargs: Argv): Argv<QueriesEditArgs> => {
    return yargs
      .positional('queryId', {
        type: 'string',
        description: 'QueryId',
        demandOption: true,
      })
      .option('description', {
        type: 'string',
        description: 'The description field',
      })
      .option('name', {
        type: 'string',
        description: 'Query name',
      })
      .option('parameters-datasets', {
        type: 'string',
        description: 'Set the Datasets to query. Leave it empty to query all the datasets.',
        default: undefined,
      })
      .option('parameters-filter-combination', {
        type: 'string',
        description: 'Set a Flag to describe how to combine the filters on the query.',
        choices: ['and', 'or', 'AND', 'OR'] as const,
        default: undefined,
      })
      .option('parameters-limit', {
        type: 'number',
        description: 'Set a limit on the number of results / records returned by the query',
        default: undefined,
      })
      .option('parameters-needle-is-regex', {
        type: 'boolean',
        description: 'The parameters.needle.isRegex field',
        default: false,
      })
      .option('parameters-needle-match-case', {
        type: 'boolean',
        description: 'The parameters.needle.matchCase field',
        default: false,
      })
      .option('parameters-order-by-order', {
        type: 'string',
        description: 'Set the order of the results',
        choices: ['asc', 'desc'] as const,
        default: undefined,
      })
      .option('parameters-order-by-value', {
        type: 'string',
        description: 'Configure which Calculation to order the results by.',
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
      .choices('parameters-filter-combination', ['and', 'or', 'AND', 'OR'] as const)
      .choices('parameters-order-by-order', ['asc', 'desc'] as const) as Argv<QueriesEditArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<QueriesEditArgs>): Promise<void> => {
    try {
      validateResourceId(argv.queryId as string | undefined, 'queryId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf workers observability queries-edit',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/workers/observability/queries/${argv.queryId ?? '<queryId>'}`,
          pathParams: { queryId: String(argv.queryId ?? '') },
          body: {
            description: argv.description,
            name: argv.name,
            parametersDatasets: argv.parametersDatasets,
            parametersFilterCombination: argv.parametersFilterCombination,
            parametersLimit: argv.parametersLimit,
            parametersNeedleIsRegex: argv.parametersNeedleIsRegex,
            parametersNeedleMatchCase: argv.parametersNeedleMatchCase,
            parametersOrderByOrder: argv.parametersOrderByOrder,
            parametersOrderByValue: argv.parametersOrderByValue,
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
        const result = await client.patch<unknown>(
          `/accounts/${accountId}/workers/observability/queries/${argv.queryId}`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.description !== undefined) setNestedValue(bodyData, ['description'], argv.description);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.parametersDatasets !== undefined)
        setNestedValue(bodyData, ['parameters', 'datasets'], argv.parametersDatasets);
      if (argv.parametersFilterCombination !== undefined)
        setNestedValue(bodyData, ['parameters', 'filterCombination'], argv.parametersFilterCombination);
      if (argv.parametersLimit !== undefined) setNestedValue(bodyData, ['parameters', 'limit'], argv.parametersLimit);
      if (argv.parametersNeedleIsRegex !== undefined)
        setNestedValue(bodyData, ['parameters', 'needle', 'isRegex'], argv.parametersNeedleIsRegex);
      if (argv.parametersNeedleMatchCase !== undefined)
        setNestedValue(bodyData, ['parameters', 'needle', 'matchCase'], argv.parametersNeedleMatchCase);
      if (argv.parametersOrderByOrder !== undefined)
        setNestedValue(bodyData, ['parameters', 'orderBy', 'order'], argv.parametersOrderByOrder);
      if (argv.parametersOrderByValue !== undefined)
        setNestedValue(bodyData, ['parameters', 'orderBy', 'value'], argv.parametersOrderByValue);
      const result = await client.patch<unknown>(
        `/accounts/${accountId}/workers/observability/queries/${argv.queryId}`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
