/**
 * applications-settings-update command
 * @generated from apis/zero-trust/schema.ts
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

interface ApplicationsSettingsUpdateArgs {
  appId: string;
  'allow-iframe'?: boolean;
  'skip-interstitial'?: boolean;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, ApplicationsSettingsUpdateArgs> = {
  command: 'applications-settings-update <appId>',
  describe: 'Updates Access application settings.',

  builder: (yargs: Argv): Argv<ApplicationsSettingsUpdateArgs> => {
    return yargs
      .positional('appId', {
        type: 'string',
        description: 'App ID',
        demandOption: true,
      })
      .option('allow-iframe', {
        type: 'boolean',
        description: 'Enables loading application content in an iFrame.',
        default: false,
      })
      .option('skip-interstitial', {
        type: 'boolean',
        description: 'Enables automatic authentication through cloudflared.',
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
      }) as Argv<ApplicationsSettingsUpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ApplicationsSettingsUpdateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.appId as string | undefined, 'appId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf zero-trust access applications-settings-update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/access/apps/${argv.appId ?? '<appId>'}/settings`,
          pathParams: { appId: String(argv.appId ?? '') },
          body: { allowIframe: argv.allowIframe, skipInterstitial: argv.skipInterstitial },
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
        const result = await client.put<unknown>(`/accounts/${accountId}/access/apps/${argv.appId}/settings`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.allowIframe !== undefined) setNestedValue(bodyData, ['allow_iframe'], argv.allowIframe);
      if (argv.skipInterstitial !== undefined) setNestedValue(bodyData, ['skip_interstitial'], argv.skipInterstitial);
      const result = await client.put<unknown>(`/accounts/${accountId}/access/apps/${argv.appId}/settings`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
