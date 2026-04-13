/**
 * update command
 * @generated from apis/rum/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface UpdateArgs {
  siteId: string;
  'auto-install'?: boolean;
  enabled?: boolean;
  host?: string;
  lite?: boolean;
  'zone-tag'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, UpdateArgs> = {
  command: 'update <siteId>',
  describe: 'Updates an existing Web Analytics site.',

  builder: (yargs: Argv): Argv<UpdateArgs> => {
    return yargs
      .positional('siteId', {
        type: 'string',
        description: 'Identifier.',
        demandOption: true,
      })
      .option('auto-install', {
        type: 'boolean',
        description: 'If enabled, the JavaScript snippet is automatically injected for orange-clouded sites.',
        default: false,
      })
      .option('enabled', {
        type: 'boolean',
        description: 'Enables or disables RUM. This option can be used only when auto_install is set to true.',
        default: false,
      })
      .option('host', {
        type: 'string',
        description: 'The hostname to use for gray-clouded sites.',
        default: undefined,
      })
      .option('lite', {
        type: 'boolean',
        description: 'If enabled, the JavaScript snippet will not be injected for visitors from the EU.',
        default: false,
      })
      .option('zone-tag', {
        type: 'string',
        description: 'The zone identifier.',
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
      }) as Argv<UpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<UpdateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.siteId as string | undefined, 'siteId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf rum site-info update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/rum/site_info/${argv.siteId ?? '<siteId>'}`,
          pathParams: { siteId: String(argv.siteId ?? '') },
          body: {
            autoInstall: argv.autoInstall,
            enabled: argv.enabled,
            host: argv.host,
            lite: argv.lite,
            zoneTag: argv.zoneTag,
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
        const result = await client.put<unknown>(`/accounts/${accountId}/rum/site_info/${argv.siteId}`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.autoInstall !== undefined) setNestedValue(bodyData, ['auto_install'], argv.autoInstall);
      if (argv.enabled !== undefined) setNestedValue(bodyData, ['enabled'], argv.enabled);
      if (argv.host !== undefined) setNestedValue(bodyData, ['host'], argv.host);
      if (argv.lite !== undefined) setNestedValue(bodyData, ['lite'], argv.lite);
      if (argv.zoneTag !== undefined) setNestedValue(bodyData, ['zone_tag'], argv.zoneTag);
      const result = await client.put<unknown>(`/accounts/${accountId}/rum/site_info/${argv.siteId}`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
