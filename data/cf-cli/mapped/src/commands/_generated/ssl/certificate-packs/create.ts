/**
 * create command
 * @generated from apis/ssl/schema.ts
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

interface CreateArgs {
  zoneId?: string;
  'certificate-authority': string;
  'cloudflare-branding'?: boolean;
  hosts: string;
  type: string;
  'validation-method': string;
  'validity-days': number;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, CreateArgs> = {
  command: 'create [zoneId]',
  describe: 'For a given zone, order an advanced certificate pack.',

  builder: (yargs: Argv): Argv<CreateArgs> => {
    return yargs
      .positional('zoneId', {
        type: 'string',
        description: 'Identifier. (or use --zone flag)',
      })
      .option('certificate-authority', {
        type: 'string',
        description:
          'Certificate Authority selected for the order.  For information on any certificate authority specific details or restrictions [see this page for more details.](https://developers.cloudflare.com/ssl/reference/certificate-authorities)',
        choices: ['google', 'lets_encrypt', 'ssl_com'] as const,
      })
      .option('cloudflare-branding', {
        type: 'boolean',
        description:
          'Whether or not to add Cloudflare Branding for the order.  This will add a subdomain of sni.cloudflaressl.com as the Common Name if set to true.',
        default: false,
      })
      .option('hosts', {
        type: 'string',
        description:
          'Comma separated list of valid host names for the certificate packs. Must contain the zone apex, may not contain more than 50 hosts, and may not be empty.',
      })
      .option('type', {
        type: 'string',
        description: 'Type of certificate pack.',
        choices: ['advanced'] as const,
      })
      .option('validation-method', {
        type: 'string',
        description: 'Validation Method selected for the order.',
        choices: ['txt', 'http', 'email'] as const,
      })
      .option('validity-days', {
        type: 'number',
        description: 'Validity Days selected for the order.',
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
      })
      .choices('certificate-authority', ['google', 'lets_encrypt', 'ssl_com'] as const)
      .choices('type', ['advanced'] as const)
      .choices('validation-method', ['txt', 'http', 'email'] as const) as Argv<CreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        formatDryRun({
          command: 'cf ssl certificate-packs create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/ssl/certificate_packs/order`,
          pathParams: { zoneId: String(argv.zoneId ?? '') },
          body: {
            certificateAuthority: argv.certificateAuthority,
            cloudflareBranding: argv.cloudflareBranding,
            hosts: argv.hosts,
            type: argv.type,
            validationMethod: argv.validationMethod,
            validityDays: argv.validityDays,
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
      const zoneId = await getZoneId({ zone: argv.zone, zoneId: argv.zoneId }, client, { quiet: argv.quiet });

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.post<unknown>(`/zones/${zoneId}/ssl/certificate_packs/order`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.certificateAuthority !== undefined)
        setNestedValue(bodyData, ['certificate_authority'], argv.certificateAuthority);
      if (argv.cloudflareBranding !== undefined)
        setNestedValue(bodyData, ['cloudflare_branding'], argv.cloudflareBranding);
      if (argv.hosts !== undefined) setNestedValue(bodyData, ['hosts'], argv.hosts);
      if (argv.type !== undefined) setNestedValue(bodyData, ['type'], argv.type);
      if (argv.validationMethod !== undefined) setNestedValue(bodyData, ['validation_method'], argv.validationMethod);
      if (argv.validityDays !== undefined) setNestedValue(bodyData, ['validity_days'], argv.validityDays);
      const result = await client.post<unknown>(`/zones/${zoneId}/ssl/certificate_packs/order`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
