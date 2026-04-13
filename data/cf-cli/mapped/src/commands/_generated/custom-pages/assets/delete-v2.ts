/**
 * delete-v2 command
 * @generated from apis/custom-pages/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';

interface DeleteV2Args {
  assetName: string;
  zoneIdentifier: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, DeleteV2Args> = {
  command: 'delete-v2 <assetName> <zoneIdentifier>',
  describe: 'Deletes an existing custom asset.',

  builder: (yargs: Argv): Argv<DeleteV2Args> => {
    return yargs
      .positional('assetName', {
        type: 'string',
        description:
          'The unique name of the custom asset. Can only contain letters (A-Z, a-z), numbers (0-9), and underscores (_).',
        demandOption: true,
      })
      .positional('zoneIdentifier', {
        type: 'string',
        description: 'Identifier.',
        demandOption: true,
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
      }) as Argv<DeleteV2Args>;
  },

  handler: async (argv: ArgumentsCamelCase<DeleteV2Args>): Promise<void> => {
    try {
      validateResourceId(argv.assetName as string | undefined, 'assetName');
      validateResourceId(argv.zoneIdentifier as string | undefined, 'zoneIdentifier');

      if (argv.dryRun) {
        formatDryRun({
          command: 'cf custom-pages assets delete-v2',
          method: 'DELETE',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneIdentifier ?? '<zoneIdentifier>'}/custom_pages/assets/${argv.assetName ?? '<assetName>'}`,
          pathParams: { assetName: String(argv.assetName ?? ''), zoneIdentifier: String(argv.zoneIdentifier ?? '') },
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

      const result = await client.customPages.assets.deleteV2(argv.assetName, zoneId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
