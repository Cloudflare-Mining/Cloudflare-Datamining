/**
 * update command
 * @generated from apis/page-shield/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../lib/auth.js';
import { getDefaultHeaders } from '../../../lib/request-headers.js';
import { handleError } from '../../../lib/errors.js';
import { formatOutput } from '../../../lib/output.js';
import { validateResourceId } from '../../../lib/input-validation.js';
import { formatDryRun } from '../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../lib/body-parser.js';

interface UpdateArgs {
  zoneId?: string;
  enabled?: boolean;
  'use-cloudflare-reporting-endpoint'?: boolean;
  'use-connection-url-path'?: boolean;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, UpdateArgs> = {
  command: 'update [zoneId]',
  describe: 'Updates Page Shield settings.',

  builder: (yargs: Argv): Argv<UpdateArgs> => {
    return yargs
      .positional('zoneId', {
        type: 'string',
        description: 'Identifier (or use --zone flag)',
      })
      .option('enabled', {
        type: 'boolean',
        description: 'When true, indicates that Page Shield is enabled.',
        default: false,
      })
      .option('use-cloudflare-reporting-endpoint', {
        type: 'boolean',
        description:
          'When true, CSP reports will be sent to https://csp-reporting.cloudflare.com/cdn-cgi/script_monitor/report',
        default: false,
      })
      .option('use-connection-url-path', {
        type: 'boolean',
        description: 'When true, the paths associated with connections URLs will also be analyzed.',
        default: false,
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
      }) as Argv<UpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<UpdateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        formatDryRun({
          command: 'cf page-shield update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/page_shield`,
          pathParams: { zoneId: String(argv.zoneId ?? '') },
          body: {
            enabled: argv.enabled,
            useCloudflareReportingEndpoint: argv.useCloudflareReportingEndpoint,
            useConnectionUrlPath: argv.useConnectionUrlPath,
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
      const zoneId = await getZoneId({ zone: argv.zone, zoneId: argv.zoneId }, client, { quiet: argv.quiet });

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.put<unknown>(`/zones/${zoneId}/page_shield`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.enabled !== undefined) setNestedValue(bodyData, ['enabled'], argv.enabled);
      if (argv.useCloudflareReportingEndpoint !== undefined)
        setNestedValue(bodyData, ['use_cloudflare_reporting_endpoint'], argv.useCloudflareReportingEndpoint);
      if (argv.useConnectionUrlPath !== undefined)
        setNestedValue(bodyData, ['use_connection_url_path'], argv.useConnectionUrlPath);
      const result = await client.put<unknown>(`/zones/${zoneId}/page_shield`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
