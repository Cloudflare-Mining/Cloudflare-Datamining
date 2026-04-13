/**
 * certificates-update command
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

interface CertificatesUpdateArgs {
  certificateId: string;
  'associated-hostnames': string;
  name?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, CertificatesUpdateArgs> = {
  command: 'certificates-update <certificateId>',
  describe: 'Updates a configured mTLS certificate.',

  builder: (yargs: Argv): Argv<CertificatesUpdateArgs> => {
    return yargs
      .positional('certificateId', {
        type: 'string',
        description: 'UUID.',
        demandOption: true,
      })
      .option('associated-hostnames', {
        type: 'string',
        description: 'The hostnames of the applications that will use this certificate.',
      })
      .option('name', {
        type: 'string',
        description: 'The name of the certificate.',
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
      }) as Argv<CertificatesUpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CertificatesUpdateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.certificateId as string | undefined, 'certificateId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf zero-trust access certificates-update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/access/certificates/${argv.certificateId ?? '<certificateId>'}`,
          pathParams: { certificateId: String(argv.certificateId ?? '') },
          body: { associatedHostnames: argv.associatedHostnames, name: argv.name },
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
        const result = await client.put<unknown>(`/accounts/${accountId}/access/certificates/${argv.certificateId}`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.associatedHostnames !== undefined)
        setNestedValue(bodyData, ['associated_hostnames'], argv.associatedHostnames);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      const result = await client.put<unknown>(`/accounts/${accountId}/access/certificates/${argv.certificateId}`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
