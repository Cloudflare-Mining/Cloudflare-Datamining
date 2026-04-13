/**
 * edit command
 * @generated from apis/web3/schema.ts
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

interface EditArgs {
  identifier: string;
  zoneId: string;
  description?: string;
  dnslink?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, EditArgs> = {
  command: 'edit <identifier> [zoneId]',
  describe: 'Updates a Web3 hostname configuration.',

  builder: (yargs: Argv): Argv<EditArgs> => {
    return yargs
      .positional('identifier', {
        type: 'string',
        description: 'Specify the identifier of the hostname.',
        demandOption: true,
      })
      .positional('zoneId', {
        type: 'string',
        description: 'Specify the identifier of the hostname. (or use --zone flag)',
      })
      .option('description', {
        type: 'string',
        description: 'Specify an optional description of the hostname.',
        default: undefined,
      })
      .option('dnslink', {
        type: 'string',
        description: 'Specify the DNSLink value used if the target is ipfs.',
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
      }) as Argv<EditArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<EditArgs>): Promise<void> => {
    try {
      validateResourceId(argv.identifier as string | undefined, 'identifier');

      if (argv.dryRun) {
        formatDryRun({
          command: 'cf web3 hostnames edit',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/web3/hostnames/${argv.identifier ?? '<identifier>'}`,
          pathParams: { identifier: String(argv.identifier ?? ''), zoneId: String(argv.zoneId ?? '') },
          body: { description: argv.description, dnslink: argv.dnslink },
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
        const result = await client.patch<unknown>(`/zones/${argv.zoneId}/web3/hostnames/${argv.identifier}`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.description !== undefined) setNestedValue(bodyData, ['description'], argv.description);
      if (argv.dnslink !== undefined) setNestedValue(bodyData, ['dnslink'], argv.dnslink);
      const result = await client.patch<unknown>(`/zones/${argv.zoneId}/web3/hostnames/${argv.identifier}`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
