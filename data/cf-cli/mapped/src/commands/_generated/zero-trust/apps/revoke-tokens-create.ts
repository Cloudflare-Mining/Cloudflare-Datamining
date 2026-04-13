/**
 * revoke-tokens-create command
 * @generated from apis/zero-trust/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';

interface RevokeTokensCreateArgs {
  appId: string;
  zoneId: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, RevokeTokensCreateArgs> = {
  command: 'revoke-tokens-create <appId> [zoneId]',
  describe: 'Revokes all tokens issued for an application.',

  builder: (yargs: Argv): Argv<RevokeTokensCreateArgs> => {
    return yargs
      .positional('appId', {
        type: 'string',
        description: 'App ID',
        demandOption: true,
      })
      .positional('zoneId', {
        type: 'string',
        description: 'Identifier. (or use --zone flag)',
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
      }) as Argv<RevokeTokensCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<RevokeTokensCreateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.appId as string | undefined, 'appId');

      if (argv.dryRun) {
        formatDryRun({
          command: 'cf zero-trust apps revoke-tokens-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/access/apps/${argv.appId ?? '<appId>'}/revoke_tokens`,
          pathParams: { appId: String(argv.appId ?? ''), zoneId: String(argv.zoneId ?? '') },
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

      const result = await client.zeroTrust.apps.revokeTokensCreate(argv.appId, zoneId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
