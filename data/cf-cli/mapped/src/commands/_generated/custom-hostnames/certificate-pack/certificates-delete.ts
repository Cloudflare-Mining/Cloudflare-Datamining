/**
 * certificates-delete command
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
import { parseBody } from '../../../../lib/body-parser.js';

interface CertificatesDeleteArgs {
  customHostnameId: string;
  certificatePackId: string;
  certificateId: string;
  zoneId: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, CertificatesDeleteArgs> = {
  command: 'certificates-delete <customHostnameId> <certificatePackId> <certificateId> [zoneId]',
  describe:
    'Delete a single custom certificate from a certificate pack that contains two bundled certificates. Deletion is subject to the following constraints. You cannot delete a certificate if it is the only remaining certificate in the pack. At least one certificate must remain in the pack.',

  builder: (yargs: Argv): Argv<CertificatesDeleteArgs> => {
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
      }) as Argv<CertificatesDeleteArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CertificatesDeleteArgs>): Promise<void> => {
    try {
      validateResourceId(argv.customHostnameId as string | undefined, 'customHostnameId');
      validateResourceId(argv.certificatePackId as string | undefined, 'certificatePackId');
      validateResourceId(argv.certificateId as string | undefined, 'certificateId');

      if (argv.dryRun) {
        formatDryRun({
          command: 'cf custom-hostnames certificate-pack certificates-delete',
          method: 'DELETE',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/custom_hostnames/${argv.customHostnameId ?? '<customHostnameId>'}/certificate_pack/${argv.certificatePackId ?? '<certificatePackId>'}/certificates/${argv.certificateId ?? '<certificateId>'}`,
          pathParams: {
            customHostnameId: String(argv.customHostnameId ?? ''),
            certificatePackId: String(argv.certificatePackId ?? ''),
            certificateId: String(argv.certificateId ?? ''),
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

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.delete<unknown>(
          `/zones/${argv.zoneId}/custom_hostnames/${argv.customHostnameId}/certificate_pack/${argv.certificatePackId}/certificates/${argv.certificateId}`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      const result = await client.customHostnames.certificatepack.certificatesDelete(
        argv.customHostnameId,
        argv.certificatePackId,
        argv.certificateId,
        zoneId,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
