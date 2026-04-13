/**
 * certificates-update command
 * @generated from apis/custom-hostnames/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface CertificatesUpdateArgs {
  customHostnameId: string;
  certificatePackId: string;
  certificateId: string;
  zoneId: string;
  'custom-certificate': string;
  'custom-key': string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, CertificatesUpdateArgs> = {
  command: 'certificates-update <customHostnameId> <certificatePackId> <certificateId> [zoneId]',
  describe:
    'Replace a single custom certificate within a certificate pack that contains two bundled certificates. The replacement must adhere to the following constraints. You can only replace an RSA certificate with another RSA certificate or an ECDSA certificate with another ECDSA certificate.',

  builder: (yargs: Argv): Argv<CertificatesUpdateArgs> => {
    return yargs
      .positional('customHostnameId', {
        type: 'string',
        description: 'Identifier.',
        demandOption: true,
      })
      .positional('certificatePackId', {
        type: 'string',
        description: 'Identifier.',
        demandOption: true,
      })
      .positional('certificateId', {
        type: 'string',
        description: 'Identifier.',
        demandOption: true,
      })
      .positional('zoneId', {
        type: 'string',
        description: 'Identifier. (or use --zone flag)',
      })
      .option('custom-certificate', {
        type: 'string',
        description: 'If a custom uploaded certificate is used.',
      })
      .option('custom-key', {
        type: 'string',
        description: 'The key for a custom uploaded certificate.',
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
      validateResourceId(argv.customHostnameId as string | undefined, 'customHostnameId');
      validateResourceId(argv.certificatePackId as string | undefined, 'certificatePackId');
      validateResourceId(argv.certificateId as string | undefined, 'certificateId');

      if (argv.dryRun) {
        formatDryRun({
          command: 'cf custom-hostnames certificate-pack certificates-update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/custom_hostnames/${argv.customHostnameId ?? '<customHostnameId>'}/certificate_pack/${argv.certificatePackId ?? '<certificatePackId>'}/certificates/${argv.certificateId ?? '<certificateId>'}`,
          pathParams: {
            customHostnameId: String(argv.customHostnameId ?? ''),
            certificatePackId: String(argv.certificatePackId ?? ''),
            certificateId: String(argv.certificateId ?? ''),
            zoneId: String(argv.zoneId ?? ''),
          },
          body: { customCertificate: argv.customCertificate, customKey: argv.customKey },
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

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.put<unknown>(
          `/zones/${argv.zoneId}/custom_hostnames/${argv.customHostnameId}/certificate_pack/${argv.certificatePackId}/certificates/${argv.certificateId}`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.customCertificate !== undefined)
        setNestedValue(bodyData, ['custom_certificate'], argv.customCertificate);
      if (argv.customKey !== undefined) setNestedValue(bodyData, ['custom_key'], argv.customKey);
      const result = await client.put<unknown>(
        `/zones/${argv.zoneId}/custom_hostnames/${argv.customHostnameId}/certificate_pack/${argv.certificatePackId}/certificates/${argv.certificateId}`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
