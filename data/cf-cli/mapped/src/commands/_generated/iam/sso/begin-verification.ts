/**
 * begin-verification command
 * @generated from apis/iam/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';

interface BeginVerificationArgs {
  ssoConnectorId: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  accountId?: string;
}

const command: CommandModule<object, BeginVerificationArgs> = {
  command: 'begin-verification <ssoConnectorId>',
  describe: 'Begin SSO connector verification',

  builder: (yargs: Argv): Argv<BeginVerificationArgs> => {
    return yargs
      .positional('ssoConnectorId', {
        type: 'string',
        description: 'SSO Connector identifier tag.',
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
      }) as Argv<BeginVerificationArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<BeginVerificationArgs>): Promise<void> => {
    try {
      validateResourceId(argv.ssoConnectorId as string | undefined, 'ssoConnectorId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf iam sso begin-verification',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/sso_connectors/${argv.ssoConnectorId ?? '<ssoConnectorId>'}/begin_verification`,
          pathParams: { ssoConnectorId: String(argv.ssoConnectorId ?? '') },
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

      const result = await client.iam.sso.beginVerification(accountId, argv.ssoConnectorId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
