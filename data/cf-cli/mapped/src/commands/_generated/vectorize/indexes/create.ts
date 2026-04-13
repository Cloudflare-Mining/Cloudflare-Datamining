/**
 * create command
 * @generated from apis/vectorize/schema.ts
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
  'config-dimensions'?: number;
  'config-metric'?: string;
  'config-preset'?: string;
  description?: string;
  name: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, CreateArgs> = {
  command: 'create',
  describe: 'Creates and returns a new Vectorize Index.',

  builder: (yargs: Argv): Argv<CreateArgs> => {
    return yargs
      .option('config-dimensions', {
        type: 'number',
        description: 'Specifies the number of dimensions for the index',
        default: undefined,
      })
      .option('config-metric', {
        type: 'string',
        description: 'Specifies the type of metric to use calculating distance.',
        choices: ['cosine', 'euclidean', 'dot-product'] as const,
        default: undefined,
      })
      .option('config-preset', {
        type: 'string',
        description: 'Specifies the preset to use for the index.',
        choices: [
          '@cf/baai/bge-small-en-v1.5',
          '@cf/baai/bge-base-en-v1.5',
          '@cf/baai/bge-large-en-v1.5',
          'openai/text-embedding-ada-002',
          'cohere/embed-multilingual-v2.0',
        ] as const,
        default: undefined,
      })
      .option('description', {
        type: 'string',
        description: 'Specifies the description of the index.',
        default: undefined,
      })
      .option('name', {
        type: 'string',
        description: 'The name field',
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
      .conflicts('config-dimensions', ['configPreset'])
      .implies('config-dimensions', ['configMetric'])
      .conflicts('config-metric', ['configPreset'])
      .implies('config-metric', ['configDimensions'])
      .conflicts('config-preset', ['configDimensions', 'configMetric'])
      .choices('config-metric', ['cosine', 'euclidean', 'dot-product'] as const)
      .choices('config-preset', [
        '@cf/baai/bge-small-en-v1.5',
        '@cf/baai/bge-base-en-v1.5',
        '@cf/baai/bge-large-en-v1.5',
        'openai/text-embedding-ada-002',
        'cohere/embed-multilingual-v2.0',
      ] as const) as Argv<CreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf vectorize indexes create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/vectorize/v2/indexes`,
          pathParams: {},
          body: {
            configDimensions: argv.configDimensions,
            configMetric: argv.configMetric,
            configPreset: argv.configPreset,
            description: argv.description,
            name: argv.name,
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
        const result = await client.post<unknown>(`/accounts/${accountId}/vectorize/v2/indexes`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.configDimensions !== undefined)
        setNestedValue(bodyData, ['config', 'dimensions'], argv.configDimensions);
      if (argv.configMetric !== undefined) setNestedValue(bodyData, ['config', 'metric'], argv.configMetric);
      if (argv.configPreset !== undefined) setNestedValue(bodyData, ['config', 'preset'], argv.configPreset);
      if (argv.description !== undefined) setNestedValue(bodyData, ['description'], argv.description);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      const result = await client.post<unknown>(`/accounts/${accountId}/vectorize/v2/indexes`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
