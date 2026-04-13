/**
 * integrations-references-get command
 * @generated from apis/zero-trust/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface IntegrationsReferencesGetArgs {
  referenceId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, IntegrationsReferencesGetArgs> = {
  command: 'integrations-references-get <referenceId>',
  describe: 'Retrieves a Zero Trust risk score integration using its external reference ID.',

  builder: (yargs: Argv): Argv<IntegrationsReferencesGetArgs> => {
    return yargs
      .positional('referenceId', {
        type: 'string',
        description: 'Reference ID',
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
      }) as Argv<IntegrationsReferencesGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<IntegrationsReferencesGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.referenceId as string | undefined, 'referenceId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.zeroTrust.riskscoring.integrationsReferencesGet(accountId, argv.referenceId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
