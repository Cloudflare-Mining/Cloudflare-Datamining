/**
 * indicator-types-get command
 * @generated from apis/cloudforce-one/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface IndicatorTypesGetArgs {
  'dataset-ids'?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, IndicatorTypesGetArgs> = {
  command: 'indicator-types-get',
  describe: 'Lists indicator types across multiple datasets',

  builder: (yargs: Argv): Argv<IndicatorTypesGetArgs> => {
    return yargs
      .option('dataset-ids', {
        type: 'string',
        description:
          'Array of dataset IDs to query indicator types from. If not provided, queries all datasets for the account.',
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
      }) as Argv<IndicatorTypesGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<IndicatorTypesGetArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.datasetIds !== undefined) params['datasetIds'] = argv.datasetIds;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.cloudforceOne.events.indicatorTypesGet(
        accountId,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
