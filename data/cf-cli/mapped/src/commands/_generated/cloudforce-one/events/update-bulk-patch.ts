/**
 * update-bulk-patch command
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

interface UpdateBulkPatchArgs {
  'dataset-id': string;
  'event-ids': string;
  'updates-attacker'?: string;
  'updates-attacker-country'?: string;
  'updates-category'?: string;
  'updates-created-at'?: string;
  'updates-event'?: string;
  'updates-indicator'?: string;
  'updates-indicator-type'?: string;
  'updates-insight'?: string;
  'updates-raw-source'?: string;
  'updates-raw-tlp'?: string;
  'updates-target-country'?: string;
  'updates-target-industry'?: string;
  'updates-tlp'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, UpdateBulkPatchArgs> = {
  command: 'update-bulk-patch',
  describe: 'Updates multiple events with the same field values. Maximum 100 events per request.',

  builder: (yargs: Argv): Argv<UpdateBulkPatchArgs> => {
    return yargs
      .option('dataset-id', {
        type: 'string',
        description: 'Dataset ID containing the events to update. Required to prevent cross-account modifications.',
      })
      .option('event-ids', {
        type: 'string',
        description: 'List of event UUIDs to update (1-100)',
      })
      .option('updates-attacker', {
        type: 'string',
        description: 'The updates.attacker field',
        default: undefined,
      })
      .option('updates-attacker-country', {
        type: 'string',
        description: 'The updates.attackerCountry field',
        default: undefined,
      })
      .option('updates-category', {
        type: 'string',
        description: 'The updates.category field',
        default: undefined,
      })
      .option('updates-created-at', {
        type: 'string',
        description: 'The updates.createdAt field',
        default: undefined,
      })
      .option('updates-event', {
        type: 'string',
        description: 'The updates.event field',
        default: undefined,
      })
      .option('updates-indicator', {
        type: 'string',
        description: 'The updates.indicator field',
        default: undefined,
      })
      .option('updates-indicator-type', {
        type: 'string',
        description: 'The updates.indicatorType field',
        default: undefined,
      })
      .option('updates-insight', {
        type: 'string',
        description: 'The updates.insight field',
        default: undefined,
      })
      .option('updates-raw-source', {
        type: 'string',
        description: 'The updates.raw.source field',
        default: undefined,
      })
      .option('updates-raw-tlp', {
        type: 'string',
        description: 'The updates.raw.tlp field',
        default: undefined,
      })
      .option('updates-target-country', {
        type: 'string',
        description: 'The updates.targetCountry field',
        default: undefined,
      })
      .option('updates-target-industry', {
        type: 'string',
        description: 'The updates.targetIndustry field',
        default: undefined,
      })
      .option('updates-tlp', {
        type: 'string',
        description: 'The updates.tlp field',
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
      }) as Argv<UpdateBulkPatchArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<UpdateBulkPatchArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf cloudforce-one events update-bulk-patch',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/cloudforce-one/events/update/bulk`,
          pathParams: {},
          body: {
            datasetId: argv.datasetId,
            eventIds: argv.eventIds,
            updatesAttacker: argv.updatesAttacker,
            updatesAttackerCountry: argv.updatesAttackerCountry,
            updatesCategory: argv.updatesCategory,
            updatesCreatedAt: argv.updatesCreatedAt,
            updatesEvent: argv.updatesEvent,
            updatesIndicator: argv.updatesIndicator,
            updatesIndicatorType: argv.updatesIndicatorType,
            updatesInsight: argv.updatesInsight,
            updatesRawSource: argv.updatesRawSource,
            updatesRawTlp: argv.updatesRawTlp,
            updatesTargetCountry: argv.updatesTargetCountry,
            updatesTargetIndustry: argv.updatesTargetIndustry,
            updatesTlp: argv.updatesTlp,
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
        const result = await client.patch<unknown>(`/accounts/${accountId}/cloudforce-one/events/update/bulk`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.datasetId !== undefined) setNestedValue(bodyData, ['datasetId'], argv.datasetId);
      if (argv.eventIds !== undefined) setNestedValue(bodyData, ['eventIds'], argv.eventIds);
      if (argv.updatesAttacker !== undefined) setNestedValue(bodyData, ['updates', 'attacker'], argv.updatesAttacker);
      if (argv.updatesAttackerCountry !== undefined)
        setNestedValue(bodyData, ['updates', 'attackerCountry'], argv.updatesAttackerCountry);
      if (argv.updatesCategory !== undefined) setNestedValue(bodyData, ['updates', 'category'], argv.updatesCategory);
      if (argv.updatesCreatedAt !== undefined)
        setNestedValue(bodyData, ['updates', 'createdAt'], argv.updatesCreatedAt);
      if (argv.updatesEvent !== undefined) setNestedValue(bodyData, ['updates', 'event'], argv.updatesEvent);
      if (argv.updatesIndicator !== undefined)
        setNestedValue(bodyData, ['updates', 'indicator'], argv.updatesIndicator);
      if (argv.updatesIndicatorType !== undefined)
        setNestedValue(bodyData, ['updates', 'indicatorType'], argv.updatesIndicatorType);
      if (argv.updatesInsight !== undefined) setNestedValue(bodyData, ['updates', 'insight'], argv.updatesInsight);
      if (argv.updatesRawSource !== undefined)
        setNestedValue(bodyData, ['updates', 'raw', 'source'], argv.updatesRawSource);
      if (argv.updatesRawTlp !== undefined) setNestedValue(bodyData, ['updates', 'raw', 'tlp'], argv.updatesRawTlp);
      if (argv.updatesTargetCountry !== undefined)
        setNestedValue(bodyData, ['updates', 'targetCountry'], argv.updatesTargetCountry);
      if (argv.updatesTargetIndustry !== undefined)
        setNestedValue(bodyData, ['updates', 'targetIndustry'], argv.updatesTargetIndustry);
      if (argv.updatesTlp !== undefined) setNestedValue(bodyData, ['updates', 'tlp'], argv.updatesTlp);
      const result = await client.patch<unknown>(`/accounts/${accountId}/cloudforce-one/events/update/bulk`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
