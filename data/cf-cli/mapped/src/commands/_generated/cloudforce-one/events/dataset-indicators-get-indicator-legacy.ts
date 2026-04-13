/**
 * dataset-indicators-get-indicator-legacy command
 * @generated from apis/cloudforce-one/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface DatasetIndicatorsGetIndicatorLegacyArgs {
  datasetId: string;
  page?: number;
  'page-size'?: number;
  name?: string;
  'indicator-type'?: string;
  'related-event'?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, DatasetIndicatorsGetIndicatorLegacyArgs> = {
  command: 'dataset-indicators-get-indicator-legacy <datasetId>',
  describe: 'This method is deprecated. Please use /events/indicators to retrieve a paginated list of indicators.',

  builder: (yargs: Argv): Argv<DatasetIndicatorsGetIndicatorLegacyArgs> => {
    return yargs
      .positional('datasetId', {
        type: 'string',
        description: 'Dataset UUID.',
        demandOption: true,
      })
      .option('page', {
        type: 'number',
        description: 'Page',
        default: undefined,
      })
      .option('page-size', {
        type: 'number',
        description: 'PageSize',
        default: undefined,
      })
      .option('name', {
        type: 'string',
        description: 'Filter by indicator value (substring match)',
        default: undefined,
      })
      .option('indicator-type', {
        type: 'string',
        description: 'IndicatorType',
        default: undefined,
      })
      .option('related-event', {
        type: 'string',
        description:
          'Filter indicators by related event UUID(s). Multiple UUIDs can be provided by repeating the parameter.',
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
      }) as Argv<DatasetIndicatorsGetIndicatorLegacyArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<DatasetIndicatorsGetIndicatorLegacyArgs>): Promise<void> => {
    try {
      validateResourceId(argv.datasetId as string | undefined, 'datasetId');

      const params: Record<string, unknown> = {};
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.pageSize !== undefined) params['pageSize'] = argv.pageSize;
      if (argv.name !== undefined) params['name'] = argv.name;
      if (argv.indicatorType !== undefined) params['indicatorType'] = argv.indicatorType;
      if (argv.relatedEvent !== undefined) params['relatedEvent'] = argv.relatedEvent;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.cloudforceOne.events.datasetIndicatorsGetIndicatorLegacy(
        accountId,
        argv.datasetId,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
