/**
 * edit command
 * @generated from apis/client-certificates/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../lib/auth.js';
import { getDefaultHeaders } from '../../../lib/request-headers.js';
import { handleError } from '../../../lib/errors.js';
import { formatOutput } from '../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../lib/input-validation.js';
import { formatDryRun } from '../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../lib/body-parser.js';

interface EditArgs {
  zoneId?: string;
  clientCertificateId: string;
  reactivate?: boolean;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, EditArgs> = {
  command: 'edit [zoneId] <clientCertificateId>',
  describe:
    'If a API Shield mTLS Client Certificate is in a pending_revocation state, you may reactivate it with this endpoint.',

  builder: (yargs: Argv): Argv<EditArgs> => {
    return yargs
      .positional('zoneId', {
        type: 'string',
        description: 'Identifier. (or use --zone flag)',
      })
      .positional('clientCertificateId', {
        type: 'string',
        description: 'Identifier.',
        demandOption: true,
      })
      .option('reactivate', {
        type: 'boolean',
        description: 'The reactivate field',
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
      }) as Argv<EditArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<EditArgs>): Promise<void> => {
    try {
      validateResourceId(argv.clientCertificateId as string | undefined, 'clientCertificateId');

      if (argv.dryRun) {
        formatDryRun({
          command: 'cf client-certificates edit',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/client_certificates/${argv.clientCertificateId ?? '<clientCertificateId>'}`,
          pathParams: {
            zoneId: String(argv.zoneId ?? ''),
            clientCertificateId: String(argv.clientCertificateId ?? ''),
          },
          body: { reactivate: argv.reactivate },
          validation: 'passed',
        });
        return;
      }
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const zoneId = await getZoneId({ zone: argv.zone, zoneId: argv.zoneId }, client, { quiet: argv.quiet });

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.patch<unknown>(`/zones/${zoneId}/client_certificates/${argv.clientCertificateId}`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.reactivate !== undefined) setNestedValue(bodyData, ['reactivate'], argv.reactivate);
      const result = await client.patch<unknown>(`/zones/${zoneId}/client_certificates/${argv.clientCertificateId}`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
