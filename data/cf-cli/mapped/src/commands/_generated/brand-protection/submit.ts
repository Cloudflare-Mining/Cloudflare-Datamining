/**
 * submit command
 * @generated from apis/brand-protection/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../lib/auth.js';
import { getDefaultHeaders } from '../../../lib/request-headers.js';
import { handleError } from '../../../lib/errors.js';
import { formatOutput } from '../../../lib/output.js';
import { validateResourceId } from '../../../lib/input-validation.js';
import { formatDryRun } from '../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../lib/body-parser.js';

interface SubmitArgs {
  'show-historic'?: string;
  download?: string;
  'image-data': string;
  'score-threshold'?: number;
  'top-k'?: number;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, SubmitArgs> = {
  command: 'submit',
  describe:
    'Submit an image and find the n closest matches from the scanned images index without creating any match records. Returns similarity scores and metadata for each match.',

  builder: (yargs: Argv): Argv<SubmitArgs> => {
    return yargs
      .option('show-historic', {
        type: 'string',
        description:
          'Include scanned images without domain metadata (historic data). Default: false (only show images with domain)',
        default: undefined,
      })
      .option('download', {
        type: 'string',
        description: 'If true, include base64-encoded image data in the response',
        default: undefined,
      })
      .option('image-data', {
        type: 'string',
        description:
          "Base64 encoded image data. Can include data URI prefix (e.g., 'data:image/png;base64,...') or just the base64 string.",
      })
      .option('score-threshold', {
        type: 'number',
        description: 'Minimum similarity score threshold for matches (0-1, default: 0)',
        default: undefined,
      })
      .option('top-k', {
        type: 'number',
        description: 'Number of closest matches to return (1-100, default: 10)',
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
      }) as Argv<SubmitArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<SubmitArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.showHistoric !== undefined) params['showHistoric'] = argv.showHistoric;
      if (argv.download !== undefined) params['download'] = argv.download;

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf brand-protection submit',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/cloudforce-one/v2/brand-protection/logo/search`,
          pathParams: {},
          body: { ...params, imageData: argv.imageData, scoreThreshold: argv.scoreThreshold, topK: argv.topK },
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
          `/accounts/${accountId}/cloudforce-one/v2/brand-protection/logo/search`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.imageData !== undefined) setNestedValue(bodyData, ['image_data'], argv.imageData);
      if (argv.scoreThreshold !== undefined) setNestedValue(bodyData, ['score_threshold'], argv.scoreThreshold);
      if (argv.topK !== undefined) setNestedValue(bodyData, ['top_k'], argv.topK);
      const qs = new URLSearchParams(
        Object.entries(params)
          .filter(([, v]) => v !== undefined)
          .map(([k, v]) => [k, String(v)]),
      ).toString();
      const result = await client.post<unknown>(
        `/accounts/${accountId}/cloudforce-one/v2/brand-protection/logo/search${qs ? '?' + qs : ''}`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
