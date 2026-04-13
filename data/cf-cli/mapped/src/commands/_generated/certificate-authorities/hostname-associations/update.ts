/**
 * update command
 * @generated from apis/certificate-authorities/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface UpdateArgs {
  zoneId?: string;
  hostnames?: string;
  'mtls-certificate-id'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, UpdateArgs> = {
  command: 'update [zoneId]',
  describe: 'Replace Hostname Associations',

  builder: (yargs: Argv): Argv<UpdateArgs> => {
    return yargs
      .positional('zoneId', {
        type: 'string',
        description: 'Identifier. (or use --zone flag)',
      })
      .option('hostnames', {
        type: 'string',
        description: 'The hostnames field',
        default: undefined,
      })
      .option('mtls-certificate-id', {
        type: 'string',
        description:
          'The UUID for a certificate that was uploaded to the mTLS Certificate Management endpoint. If no mtls_certificate_id is given, the hostnames will be associated to your active Cloudflare Managed CA.',
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
      }) as Argv<UpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<UpdateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        formatDryRun({
          command: 'cf certificate-authorities hostname-associations update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/certificate_authorities/hostname_associations`,
          pathParams: { zoneId: String(argv.zoneId ?? '') },
          body: { hostnames: argv.hostnames, mtlsCertificateId: argv.mtlsCertificateId },
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
        const result = await client.put<unknown>(`/zones/${zoneId}/certificate_authorities/hostname_associations`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.hostnames !== undefined) setNestedValue(bodyData, ['hostnames'], argv.hostnames);
      if (argv.mtlsCertificateId !== undefined)
        setNestedValue(bodyData, ['mtls_certificate_id'], argv.mtlsCertificateId);
      const result = await client.put<unknown>(`/zones/${zoneId}/certificate_authorities/hostname_associations`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
