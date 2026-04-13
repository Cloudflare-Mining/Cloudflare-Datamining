/**
 * create command
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

interface CreateArgs {
  attacker?: string;
  'attacker-country'?: string;
  category: string;
  'dataset-id'?: string;
  date: string;
  event: string;
  indicator?: string;
  'indicator-type'?: string;
  insight?: string;
  'raw-source'?: string;
  'raw-tlp'?: string;
  tags?: string;
  'target-country'?: string;
  'target-industry'?: string;
  tlp: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, CreateArgs> = {
  command: 'create',
  describe:
    'To create a dataset, see the [\`Create Dataset\`](https://developers.cloudflare.com/api/resources/cloudforce_one/subresources/threat_events/subresources/datasets/methods/create/) endpoint. When \`datasetId\` parameter is unspecified, it will be created in a default dataset named \`Cloudforce One Threat Events\`.',

  builder: (yargs: Argv): Argv<CreateArgs> => {
    return yargs
      .option('attacker', {
        type: 'string',
        description: 'The attacker field',
        default: undefined,
      })
      .option('attacker-country', {
        type: 'string',
        description: 'The attackerCountry field',
        default: undefined,
      })
      .option('category', {
        type: 'string',
        description: 'The category field',
      })
      .option('dataset-id', {
        type: 'string',
        description: 'The datasetId field',
        default: undefined,
      })
      .option('date', {
        type: 'string',
        description: 'The date field',
      })
      .option('event', {
        type: 'string',
        description: 'The event field',
      })
      .option('indicator', {
        type: 'string',
        description: 'The indicator field',
        default: undefined,
      })
      .option('indicator-type', {
        type: 'string',
        description: 'The indicatorType field',
        default: undefined,
      })
      .option('insight', {
        type: 'string',
        description: 'The insight field',
        default: undefined,
      })
      .option('raw-source', {
        type: 'string',
        description: 'The raw.source field',
        default: undefined,
      })
      .option('raw-tlp', {
        type: 'string',
        description: 'The raw.tlp field',
        default: undefined,
      })
      .option('tags', {
        type: 'string',
        description: 'The tags field',
        default: undefined,
      })
      .option('target-country', {
        type: 'string',
        description: 'The targetCountry field',
        default: undefined,
      })
      .option('target-industry', {
        type: 'string',
        description: 'The targetIndustry field',
        default: undefined,
      })
      .option('tlp', {
        type: 'string',
        description: 'The tlp field',
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
      }) as Argv<CreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf cloudforce-one threat-events create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/cloudforce-one/events/create`,
          pathParams: {},
          body: {
            attacker: argv.attacker,
            attackerCountry: argv.attackerCountry,
            category: argv.category,
            datasetId: argv.datasetId,
            date: argv.date,
            event: argv.event,
            indicator: argv.indicator,
            indicatorType: argv.indicatorType,
            insight: argv.insight,
            rawSource: argv.rawSource,
            rawTlp: argv.rawTlp,
            tags: argv.tags,
            targetCountry: argv.targetCountry,
            targetIndustry: argv.targetIndustry,
            tlp: argv.tlp,
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
        const result = await client.post<unknown>(`/accounts/${accountId}/cloudforce-one/events/create`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.attacker !== undefined) setNestedValue(bodyData, ['attacker'], argv.attacker);
      if (argv.attackerCountry !== undefined) setNestedValue(bodyData, ['attackerCountry'], argv.attackerCountry);
      if (argv.category !== undefined) setNestedValue(bodyData, ['category'], argv.category);
      if (argv.datasetId !== undefined) setNestedValue(bodyData, ['datasetId'], argv.datasetId);
      if (argv.date !== undefined) setNestedValue(bodyData, ['date'], argv.date);
      if (argv.event !== undefined) setNestedValue(bodyData, ['event'], argv.event);
      if (argv.indicator !== undefined) setNestedValue(bodyData, ['indicator'], argv.indicator);
      if (argv.indicatorType !== undefined) setNestedValue(bodyData, ['indicatorType'], argv.indicatorType);
      if (argv.insight !== undefined) setNestedValue(bodyData, ['insight'], argv.insight);
      if (argv.rawSource !== undefined) setNestedValue(bodyData, ['raw', 'source'], argv.rawSource);
      if (argv.rawTlp !== undefined) setNestedValue(bodyData, ['raw', 'tlp'], argv.rawTlp);
      if (argv.tags !== undefined) setNestedValue(bodyData, ['tags'], argv.tags);
      if (argv.targetCountry !== undefined) setNestedValue(bodyData, ['targetCountry'], argv.targetCountry);
      if (argv.targetIndustry !== undefined) setNestedValue(bodyData, ['targetIndustry'], argv.targetIndustry);
      if (argv.tlp !== undefined) setNestedValue(bodyData, ['tlp'], argv.tlp);
      const result = await client.post<unknown>(`/accounts/${accountId}/cloudforce-one/events/create`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
