/**
 * edit command
 * @generated from apis/ssl/schema.ts
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

interface EditArgs {
  certificatePackId: string;
  zoneId: string;
  'cloudflare-branding'?: boolean;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, EditArgs> = {
  command: 'edit <certificatePackId> [zoneId]',
  describe:
    'For a given zone, restart validation or add cloudflare branding for an advanced certificate pack. The former is only a validation operation for a Certificate Pack in a validation_timed_out status.',

  builder: (yargs: Argv): Argv<EditArgs> => {
    return yargs
      .positional('certificatePackId', {
        type: 'string',
        description: 'Identifier.',
        demandOption: true,
      })
      .positional('zoneId', {
        type: 'string',
        description: 'Identifier. (or use --zone flag)',
      })
      .option('cloudflare-branding', {
        type: 'boolean',
        description:
          'Whether or not to add Cloudflare Branding for the order.  This will add a subdomain of sni.cloudflaressl.com as the Common Name if set to true.',
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
      validateResourceId(argv.certificatePackId as string | undefined, 'certificatePackId');

      if (argv.dryRun) {
        formatDryRun({
          command: 'cf ssl certificate-packs edit',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/ssl/certificate_packs/${argv.certificatePackId ?? '<certificatePackId>'}`,
          pathParams: { certificatePackId: String(argv.certificatePackId ?? ''), zoneId: String(argv.zoneId ?? '') },
          body: { cloudflareBranding: argv.cloudflareBranding },
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
        const result = await client.patch<unknown>(
          `/zones/${argv.zoneId}/ssl/certificate_packs/${argv.certificatePackId}`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.cloudflareBranding !== undefined)
        setNestedValue(bodyData, ['cloudflare_branding'], argv.cloudflareBranding);
      const result = await client.patch<unknown>(
        `/zones/${argv.zoneId}/ssl/certificate_packs/${argv.certificatePackId}`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
