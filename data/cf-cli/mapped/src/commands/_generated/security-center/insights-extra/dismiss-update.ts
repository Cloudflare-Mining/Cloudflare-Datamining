/**
 * dismiss-update command
 * @generated from apis/security-center/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface DismissUpdateArgs {
  zoneId?: string;
  issueId: string;
  dismiss?: boolean;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, DismissUpdateArgs> = {
  command: 'dismiss-update [zoneId] <issueId>',
  describe:
    'Archives a zone-specific Security Center insight, removing it from the active zone insights while preserving historical data.',

  builder: (yargs: Argv): Argv<DismissUpdateArgs> => {
    return yargs
      .positional('zoneId', {
        type: 'string',
        description: 'Identifier. (or use --zone flag)',
      })
      .positional('issueId', {
        type: 'string',
        description: 'Issue ID',
        demandOption: true,
      })
      .option('dismiss', {
        type: 'boolean',
        description: 'The dismiss field',
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
      }) as Argv<DismissUpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<DismissUpdateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.issueId as string | undefined, 'issueId');

      if (argv.dryRun) {
        formatDryRun({
          command: 'cf security-center insights-extra dismiss-update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/security-center/insights/${argv.issueId ?? '<issueId>'}/dismiss`,
          pathParams: { zoneId: String(argv.zoneId ?? ''), issueId: String(argv.issueId ?? '') },
          body: { dismiss: argv.dismiss },
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
        const result = await client.put<unknown>(`/zones/${zoneId}/security-center/insights/${argv.issueId}/dismiss`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.dismiss !== undefined) setNestedValue(bodyData, ['dismiss'], argv.dismiss);
      const result = await client.put<unknown>(`/zones/${zoneId}/security-center/insights/${argv.issueId}/dismiss`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
