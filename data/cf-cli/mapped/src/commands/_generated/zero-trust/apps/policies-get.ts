/**
 * policies-get command
 * @generated from apis/zero-trust/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface PoliciesGetArgs {
  policyId: string;
  appId: string;
  zoneId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, PoliciesGetArgs> = {
  command: 'policies-get <policyId> <appId> [zoneId]',
  describe: 'Fetches a single Access policy.',

  builder: (yargs: Argv): Argv<PoliciesGetArgs> => {
    return yargs
      .positional('policyId', {
        type: 'string',
        description: 'UUID.',
        demandOption: true,
      })
      .positional('appId', {
        type: 'string',
        description: 'UUID.',
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
      }) as Argv<PoliciesGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<PoliciesGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.policyId as string | undefined, 'policyId');
      validateResourceId(argv.appId as string | undefined, 'appId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const zoneId = await getZoneId({ zone: argv.zone }, client, { quiet: argv.quiet });

      const result = await client.zeroTrust.apps.policiesGet(argv.policyId, argv.appId, zoneId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
