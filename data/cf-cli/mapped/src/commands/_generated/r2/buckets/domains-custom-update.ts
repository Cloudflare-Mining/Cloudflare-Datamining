/**
 * domains-custom-update command
 * @generated from apis/r2/schema.ts
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

interface DomainsCustomUpdateArgs {
  bucketName: string;
  domain: string;
  'cf-r2-jurisdiction'?: string;
  ciphers?: string;
  enabled?: boolean;
  'min-tls'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, DomainsCustomUpdateArgs> = {
  command: 'domains-custom-update <bucketName> <domain>',
  describe: 'Edit the configuration for a custom domain on an existing R2 bucket.',

  builder: (yargs: Argv): Argv<DomainsCustomUpdateArgs> => {
    return yargs
      .positional('bucketName', {
        type: 'string',
        description: 'Name of the bucket.',
        demandOption: true,
      })
      .positional('domain', {
        type: 'string',
        description: 'Name of the custom domain.',
        demandOption: true,
      })
      .option('cf-r2-jurisdiction', {
        type: 'string',
        description: 'Jurisdiction where objects in this bucket are guaranteed to be stored.',
        default: undefined,
      })
      .option('ciphers', {
        type: 'string',
        description: 'An allowlist of ciphers for TLS termination. These ciphers must be in the BoringSSL format.',
        default: undefined,
      })
      .option('enabled', {
        type: 'boolean',
        description: 'Whether to enable public bucket access at the specified custom domain.',
        default: false,
      })
      .option('min-tls', {
        type: 'string',
        description:
          'Minimum TLS Version the custom domain will accept for incoming connections. If not set, defaults to previous value.',
        choices: ['1.0', '1.1', '1.2', '1.3'] as const,
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
      .choices('min-tls', ['1.0', '1.1', '1.2', '1.3'] as const) as Argv<DomainsCustomUpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<DomainsCustomUpdateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.bucketName as string | undefined, 'bucketName');
      validateResourceId(argv.domain as string | undefined, 'domain');

      const headers: Record<string, string> = {};
      if (argv.cfR2Jurisdiction !== undefined) headers['cf-r2-jurisdiction'] = String(argv.cfR2Jurisdiction);

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf r2 buckets domains-custom-update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/r2/buckets/${argv.bucketName ?? '<bucketName>'}/domains/custom/${argv.domain ?? '<domain>'}`,
          pathParams: { bucketName: String(argv.bucketName ?? ''), domain: String(argv.domain ?? '') },
          body: { ciphers: argv.ciphers, enabled: argv.enabled, minTls: argv.minTls },
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
        const result = await client.put<unknown>(
          `/accounts/${accountId}/r2/buckets/${argv.bucketName}/domains/custom/${argv.domain}`,
          { body: bodyData, headers: Object.keys(headers).length > 0 ? headers : undefined },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.ciphers !== undefined) setNestedValue(bodyData, ['ciphers'], argv.ciphers);
      if (argv.enabled !== undefined) setNestedValue(bodyData, ['enabled'], argv.enabled);
      if (argv.minTls !== undefined) setNestedValue(bodyData, ['minTLS'], argv.minTls);
      const result = await client.put<unknown>(
        `/accounts/${accountId}/r2/buckets/${argv.bucketName}/domains/custom/${argv.domain}`,
        {
          body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
          headers: Object.keys(headers).length > 0 ? headers : undefined,
        },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
