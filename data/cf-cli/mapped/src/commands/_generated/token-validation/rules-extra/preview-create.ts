/**
 * preview-create command
 * @generated from apis/token-validation/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody } from '../../../../lib/body-parser.js';

interface PreviewCreateArgs {
  'per-page'?: number;
  page?: number;
  state?: string;
  host?: string;
  hostname?: string;
  method?: string;
  endpoint?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, PreviewCreateArgs> = {
  command: 'preview-create',
  describe:
    'Preview operations covered by a Token Validation rule. The API will return all operations on a zone annotated with an additional \`state\` field. Operations with an \`included\` \`state\` will be covered by a Token Validation Rule.',

  builder: (yargs: Argv): Argv<PreviewCreateArgs> => {
    return yargs
      .option('per-page', {
        type: 'number',
        description: 'Maximum number of results per page.',
        default: undefined,
      })
      .option('page', {
        type: 'number',
        description: 'Page number of paginated results.',
        default: undefined,
      })
      .option('state', {
        type: 'string',
        description: 'State',
        default: undefined,
      })
      .option('host', {
        type: 'string',
        description: 'Filter operations by host.',
        default: undefined,
      })
      .option('hostname', {
        type: 'string',
        description: 'Filter operations by host.',
        default: undefined,
      })
      .option('method', {
        type: 'string',
        description: 'Filter operations by method.',
        default: undefined,
      })
      .option('endpoint', {
        type: 'string',
        description: 'Filter operations by endpoint. Allows substring matching.',
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
      }) as Argv<PreviewCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<PreviewCreateArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.state !== undefined) params['state'] = argv.state;
      if (argv.host !== undefined) params['host'] = argv.host;
      if (argv.hostname !== undefined) params['hostname'] = argv.hostname;
      if (argv.method !== undefined) params['method'] = argv.method;
      if (argv.endpoint !== undefined) params['endpoint'] = argv.endpoint;

      if (argv.dryRun) {
        formatDryRun({
          command: 'cf token-validation rules-extra preview-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/token_validation/rules/preview`,
          pathParams: { zoneId: String(argv.zoneId ?? '') },
          body: { ...params },
          validation: 'passed',
        });
        return;
      }
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const zoneId = await getZoneId({ zone: argv.zone }, client, { quiet: argv.quiet });

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.post<unknown>(`/zones/${argv.zoneId}/token_validation/rules/preview`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      const result = await client.tokenValidation.rulesextra.previewCreate(
        zoneId,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
