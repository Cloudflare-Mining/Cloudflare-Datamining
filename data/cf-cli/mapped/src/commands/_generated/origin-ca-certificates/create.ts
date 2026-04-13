/**
 * create command
 * @generated from apis/origin-ca-certificates/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../lib/auth.js';
import { getDefaultHeaders } from '../../../lib/request-headers.js';
import { handleError } from '../../../lib/errors.js';
import { formatOutput } from '../../../lib/output.js';
import { validateResourceId } from '../../../lib/input-validation.js';
import { formatDryRun } from '../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../lib/body-parser.js';

interface CreateArgs {
  csr: string;
  hostnames: string;
  'request-type': string;
  'requested-validity'?: number;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, CreateArgs> = {
  command: 'create',
  describe:
    'Create an Origin CA certificate. You can use an Origin CA Key as your User Service Key or an API token when calling this endpoint ([see above](#requests)).',

  builder: (yargs: Argv): Argv<CreateArgs> => {
    return yargs
      .option('csr', {
        type: 'string',
        description: 'The Certificate Signing Request (CSR). Must be newline-encoded.',
      })
      .option('hostnames', {
        type: 'string',
        description:
          'Array of hostnames or wildcard names bound to the certificate. Hostnames must be fully qualified domain names (FQDNs) belonging to zones on your account (e.g., \`example.com\` or \`sub.example.com\`). Wildcards are supported only as a \`*.\` prefix for a single level (e.g., \`*.example.com\`). Double wildcards (\`*.*.example.com\`) and interior wildcards (\`foo.*.example.com\`) are not allowed. The wildcard suffix must be a multi-label domain (\`*.example.com\` is valid, but \`*.com\` is not). Unicode/IDN hostnames are accepted and automatically converted to punycode.',
      })
      .option('request-type', {
        type: 'string',
        description:
          'Signature type desired on certificate ("origin-rsa" (rsa), "origin-ecc" (ecdsa), or "keyless-certificate" (for Keyless SSL servers).',
        choices: ['origin-rsa', 'origin-ecc', 'keyless-certificate'] as const,
      })
      .option('requested-validity', {
        type: 'number',
        description: 'The number of days for which the certificate should be valid.',
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
      })
      .choices('request-type', ['origin-rsa', 'origin-ecc', 'keyless-certificate'] as const) as Argv<CreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        formatDryRun({
          command: 'cf origin-ca-certificates create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/certificates`,
          pathParams: {},
          body: {
            csr: argv.csr,
            hostnames: argv.hostnames,
            requestType: argv.requestType,
            requestedValidity: argv.requestedValidity,
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

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.post<unknown>(`/certificates`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.csr !== undefined) setNestedValue(bodyData, ['csr'], argv.csr);
      if (argv.hostnames !== undefined) setNestedValue(bodyData, ['hostnames'], argv.hostnames);
      if (argv.requestType !== undefined) setNestedValue(bodyData, ['request_type'], argv.requestType);
      if (argv.requestedValidity !== undefined)
        setNestedValue(bodyData, ['requested_validity'], argv.requestedValidity);
      const result = await client.post<unknown>(`/certificates`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
