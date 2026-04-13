/**
 * subdomains-delete command
 * @generated from apis/email-routing/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';

interface SubdomainsDeleteArgs {
  subdomainId: string;
  zoneId: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, SubdomainsDeleteArgs> = {
  command: 'subdomains-delete <subdomainId> [zoneId]',
  describe:
    'Disables sending on a subdomain and removes its DNS records. If routing is still active on the subdomain, only sending is disabled.',

  builder: (yargs: Argv): Argv<SubdomainsDeleteArgs> => {
    return yargs
      .positional('subdomainId', {
        type: 'string',
        description: 'Sending subdomain identifier.',
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
      }) as Argv<SubdomainsDeleteArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<SubdomainsDeleteArgs>): Promise<void> => {
    try {
      validateResourceId(argv.subdomainId as string | undefined, 'subdomainId');

      if (argv.dryRun) {
        formatDryRun({
          command: 'cf email-routing sending subdomains-delete',
          method: 'DELETE',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/email/sending/subdomains/${argv.subdomainId ?? '<subdomainId>'}`,
          pathParams: { subdomainId: String(argv.subdomainId ?? ''), zoneId: String(argv.zoneId ?? '') },
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

      const result = await client.emailRouting.sending.subdomainsDelete(argv.subdomainId, zoneId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
