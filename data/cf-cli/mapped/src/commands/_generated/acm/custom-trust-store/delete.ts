/**
 * delete command
 * @generated from apis/acm/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';

interface DeleteArgs {
  customOriginTrustStoreId: string;
  zoneId: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, DeleteArgs> = {
  command: 'delete <customOriginTrustStoreId> [zoneId]',
  describe:
    'Removes a CA certificate from the custom origin trust store. Origins using certificates signed by this CA will no longer be trusted.',

  builder: (yargs: Argv): Argv<DeleteArgs> => {
    return yargs
      .positional('customOriginTrustStoreId', {
        type: 'string',
        description: 'Identifier.',
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
      }) as Argv<DeleteArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<DeleteArgs>): Promise<void> => {
    try {
      validateResourceId(argv.customOriginTrustStoreId as string | undefined, 'customOriginTrustStoreId');

      if (argv.dryRun) {
        formatDryRun({
          command: 'cf acm custom-trust-store delete',
          method: 'DELETE',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/acm/custom_trust_store/${argv.customOriginTrustStoreId ?? '<customOriginTrustStoreId>'}`,
          pathParams: {
            customOriginTrustStoreId: String(argv.customOriginTrustStoreId ?? ''),
            zoneId: String(argv.zoneId ?? ''),
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
      const zoneId = await getZoneId({ zone: argv.zone }, client, { quiet: argv.quiet });

      const result = await client.acm.customtruststore.delete(argv.customOriginTrustStoreId, zoneId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
