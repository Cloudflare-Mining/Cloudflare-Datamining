/**
 * registrations-get command
 * @generated from apis/zero-trust/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface RegistrationsGetArgs {
  registrationId: string;
  include?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, RegistrationsGetArgs> = {
  command: 'registrations-get <registrationId>',
  describe: 'Fetches a single WARP registration.',

  builder: (yargs: Argv): Argv<RegistrationsGetArgs> => {
    return yargs
      .positional('registrationId', {
        type: 'string',
        description: 'Registration ID',
        demandOption: true,
      })
      .option('include', {
        type: 'string',
        description:
          'Comma-separated list of additional information that should be included in the registration response. Supported values are: "policy".',
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
      }) as Argv<RegistrationsGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<RegistrationsGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.registrationId as string | undefined, 'registrationId');

      const params: Record<string, unknown> = {};
      if (argv.include !== undefined) params['include'] = argv.include;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.zeroTrust.devices.registrationsGet(
        argv.registrationId,
        accountId,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
