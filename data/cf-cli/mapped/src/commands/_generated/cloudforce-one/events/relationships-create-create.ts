/**
 * relationships-create-create command
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

interface RelationshipsCreateCreateArgs {
  'child-ids': string;
  'dataset-id': string;
  'parent-id': string;
  'relationship-type': string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, RelationshipsCreateCreateArgs> = {
  command: 'relationships-create-create',
  describe:
    'Creates a directed relationship between two events. The relationship is from parent to child with a specified type.',

  builder: (yargs: Argv): Argv<RelationshipsCreateCreateArgs> => {
    return yargs
      .option('child-ids', {
        type: 'string',
        description:
          'Array of UUIDs for child events. Single child = 1:1 relationship, multiple = 1:many relationships',
      })
      .option('dataset-id', {
        type: 'string',
        description: 'Dataset identifier where the events are stored',
      })
      .option('parent-id', {
        type: 'string',
        description: 'UUID of the parent event that will be the source of the relationship',
      })
      .option('relationship-type', {
        type: 'string',
        description: 'Type of relationship to create between parent and child events',
        choices: ['related_to', 'caused_by', 'attributed_to'] as const,
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
      .choices('relationship-type', [
        'related_to',
        'caused_by',
        'attributed_to',
      ] as const) as Argv<RelationshipsCreateCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<RelationshipsCreateCreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf cloudforce-one events relationships-create-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/cloudforce-one/events/relationships/create`,
          pathParams: {},
          body: {
            childIds: argv.childIds,
            datasetId: argv.datasetId,
            parentId: argv.parentId,
            relationshipType: argv.relationshipType,
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
        const result = await client.post<unknown>(`/accounts/${accountId}/cloudforce-one/events/relationships/create`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.childIds !== undefined) setNestedValue(bodyData, ['childIds'], argv.childIds);
      if (argv.datasetId !== undefined) setNestedValue(bodyData, ['datasetId'], argv.datasetId);
      if (argv.parentId !== undefined) setNestedValue(bodyData, ['parentId'], argv.parentId);
      if (argv.relationshipType !== undefined) setNestedValue(bodyData, ['relationshipType'], argv.relationshipType);
      const result = await client.post<unknown>(`/accounts/${accountId}/cloudforce-one/events/relationships/create`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
