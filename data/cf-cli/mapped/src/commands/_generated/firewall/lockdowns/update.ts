/**
 * update command
 * @generated from apis/firewall/schema.ts
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

interface UpdateArgs {
  lockDownsId: string;
  zoneId: string;
  urls: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, UpdateArgs> = {
  command: 'update <lockDownsId> [zoneId]',
  describe: 'Updates an existing Zone Lockdown rule.',

  builder: (yargs: Argv): Argv<UpdateArgs> => {
    return yargs
      .positional('lockDownsId', {
        type: 'string',
        description: 'The unique identifier of the Zone Lockdown rule.',
        demandOption: true,
      })
      .positional('zoneId', {
        type: 'string',
        description: 'Defines an identifier. (or use --zone flag)',
      })
      .option('urls', {
        type: 'string',
        description:
          'The URLs to include in the current WAF override. You can use wildcards. Each entered URL will be escaped before use, which means you can only use simple wildcard patterns.',
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
      validateResourceId(argv.lockDownsId as string | undefined, 'lockDownsId');

      if (argv.dryRun) {
        formatDryRun({
          command: 'cf firewall lockdowns update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/firewall/lockdowns/${argv.lockDownsId ?? '<lockDownsId>'}`,
          pathParams: { lockDownsId: String(argv.lockDownsId ?? ''), zoneId: String(argv.zoneId ?? '') },
          body: { urls: argv.urls },
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
        const result = await client.put<unknown>(`/zones/${argv.zoneId}/firewall/lockdowns/${argv.lockDownsId}`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.urls !== undefined) setNestedValue(bodyData, ['urls'], argv.urls);
      const result = await client.put<unknown>(`/zones/${argv.zoneId}/firewall/lockdowns/${argv.lockDownsId}`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
