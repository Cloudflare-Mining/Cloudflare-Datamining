/**
 * relationships-get command
 * @generated from apis/cloudforce-one/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface RelationshipsGetArgs {
  eventId: string;
  direction?: string;
  'max-depth'?: number;
  'relationship-types'?: string;
  'indicator-type-ids'?: string;
  'dataset-id': string;
  'include-parent'?: boolean;
  page?: number;
  'page-size'?: number;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, RelationshipsGetArgs> = {
  command: 'relationships-get <eventId>',
  describe:
    'The \`event_id\` must be defined (to list existing events (and their IDs), use the [\`Filter and List Events\`](https://developers.cloudflare.com/api/resources/cloudforce_one/subresources/threat_events/methods/list/) endpoint). Also, must provide query parameters.',

  builder: (yargs: Argv): Argv<RelationshipsGetArgs> => {
    return yargs
      .positional('eventId', {
        type: 'string',
        description: 'Event UUID.',
        demandOption: true,
      })
      .option('direction', {
        type: 'string',
        description: "The direction to traverse the graph. Defaults to 'both' to search all.",
        choices: ['ancestors', 'descendants', 'both'] as const,
        default: undefined,
      })
      .option('max-depth', {
        type: 'number',
        description: 'The maximum depth to traverse. Defaults to 5.',
        default: undefined,
      })
      .option('relationship-types', {
        type: 'string',
        description: 'An optional array of relationship types to filter by.',
        default: undefined,
      })
      .option('indicator-type-ids', {
        type: 'string',
        description: 'An optional array of indicator type IDs to filter the results by.',
        default: undefined,
      })
      .option('dataset-id', {
        type: 'string',
        description: 'The dataset ID to search within.',
      })
      .option('include-parent', {
        type: 'boolean',
        description: 'Whether to include the starting event in the results. Defaults to true.',
        default: false,
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
      .option('fields', {
        type: 'string',
        description: 'Comma-separated list of fields to include in output',
      })
      .option('ndjson', {
        type: 'boolean',
        description: 'Output as newline-delimited JSON (one object per line)',
        default: false,
      }) as Argv<RelationshipsGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<RelationshipsGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.eventId as string | undefined, 'eventId');

      const params: Record<string, unknown> = {};
      if (argv.direction !== undefined) params['direction'] = argv.direction;
      if (argv.maxDepth !== undefined) params['maxDepth'] = argv.maxDepth;
      if (argv.relationshipTypes !== undefined) params['relationshipTypes'] = argv.relationshipTypes;
      if (argv.indicatorTypeIds !== undefined) params['indicatorTypeIds'] = argv.indicatorTypeIds;
      if (argv.datasetId !== undefined) params['datasetId'] = argv.datasetId;
      if (argv.includeParent !== undefined) params['includeParent'] = argv.includeParent;
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.pageSize !== undefined) params['pageSize'] = argv.pageSize;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.cloudforceOne.events.relationshipsGet(
        accountId,
        argv.eventId,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
