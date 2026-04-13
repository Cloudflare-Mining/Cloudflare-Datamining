/**
 * create command
 * @generated from apis/brand-protection/schema.ts
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
  'image-data': string;
  'search-lookback'?: boolean;
  'similarity-threshold': number;
  tag: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, CreateArgs> = {
  command: 'create',
  describe: 'Create a new saved brand protection logo query for visual similarity matching',

  builder: (yargs: Argv): Argv<CreateArgs> => {
    return yargs
      .option('image-data', {
        type: 'string',
        description:
          "Base64 encoded image data. Can include data URI prefix (e.g., 'data:image/png;base64,...') or just the base64 string.",
      })
      .option('search-lookback', {
        type: 'boolean',
        description: 'If true, search historic scanned images for matches above the similarity threshold',
        default: false,
      })
      .option('similarity-threshold', {
        type: 'number',
        description: 'Minimum similarity score (0-1) required for visual matches',
      })
      .option('tag', {
        type: 'string',
        description: 'Unique identifier for the logo query',
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
          command: 'cf brand-protection queries create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/cloudforce-one/v2/brand-protection/logo/queries`,
          pathParams: {},
          body: {
            imageData: argv.imageData,
            searchLookback: argv.searchLookback,
            similarityThreshold: argv.similarityThreshold,
            tag: argv.tag,
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
        const result = await client.post<unknown>(
          `/accounts/${accountId}/cloudforce-one/v2/brand-protection/logo/queries`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.imageData !== undefined) setNestedValue(bodyData, ['image_data'], argv.imageData);
      if (argv.searchLookback !== undefined) setNestedValue(bodyData, ['search_lookback'], argv.searchLookback);
      if (argv.similarityThreshold !== undefined)
        setNestedValue(bodyData, ['similarity_threshold'], argv.similarityThreshold);
      if (argv.tag !== undefined) setNestedValue(bodyData, ['tag'], argv.tag);
      const result = await client.post<unknown>(
        `/accounts/${accountId}/cloudforce-one/v2/brand-protection/logo/queries`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
