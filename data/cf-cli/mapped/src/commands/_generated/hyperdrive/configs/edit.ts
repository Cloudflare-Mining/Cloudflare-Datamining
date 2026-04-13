/**
 * edit command
 * @generated from apis/hyperdrive/schema.ts
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

interface EditArgs {
  hyperdriveId: string;
  'caching-disabled'?: boolean;
  'caching-max-age'?: number;
  'caching-stale-while-revalidate'?: number;
  'mtls-ca-certificate-id'?: string;
  'mtls-mtls-certificate-id'?: string;
  'mtls-sslmode'?: string;
  name?: string;
  'origin-connection-limit'?: number;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, EditArgs> = {
  command: 'edit <hyperdriveId>',
  describe:
    'Patches and returns the specified Hyperdrive configuration. Custom caching settings are not kept if caching is disabled.',

  builder: (yargs: Argv): Argv<EditArgs> => {
    return yargs
      .positional('hyperdriveId', {
        type: 'string',
        description: 'The unique identifier of the Hyperdrive configuration.',
        demandOption: true,
      })
      .option('caching-disabled', {
        type: 'boolean',
        description: 'Set to true to disable caching of SQL responses. Default is false.',
        default: false,
      })
      .option('caching-max-age', {
        type: 'number',
        description:
          'Specify the maximum duration (in seconds) items should persist in the cache. Defaults to 60 seconds if not specified.',
        default: undefined,
      })
      .option('caching-stale-while-revalidate', {
        type: 'number',
        description:
          'Specify the number of seconds the cache may serve a stale response. Defaults to 15 seconds if not specified.',
        default: undefined,
      })
      .option('mtls-ca-certificate-id', {
        type: 'string',
        description: 'Define CA certificate ID obtained after uploading CA cert.',
        default: undefined,
      })
      .option('mtls-mtls-certificate-id', {
        type: 'string',
        description: 'Define mTLS certificate ID obtained after uploading client cert.',
        default: undefined,
      })
      .option('mtls-sslmode', {
        type: 'string',
        description: "Set SSL mode to 'require', 'verify-ca', or 'verify-full' to verify the CA.",
        default: undefined,
      })
      .option('name', {
        type: 'string',
        description:
          'The name of the Hyperdrive configuration. Used to identify the configuration in the Cloudflare dashboard and API.',
        default: undefined,
      })
      .option('origin-connection-limit', {
        type: 'number',
        description:
          'The (soft) maximum number of connections the Hyperdrive is allowed to make to the origin database.  Maximum allowed: 20 for free tier accounts, 100 for paid tier accounts. If not specified, defaults to 20 for free tier and 60 for paid tier. Contact Cloudflare if you need a higher limit. ',
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
      validateResourceId(argv.hyperdriveId as string | undefined, 'hyperdriveId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf hyperdrive configs edit',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/hyperdrive/configs/${argv.hyperdriveId ?? '<hyperdriveId>'}`,
          pathParams: { hyperdriveId: String(argv.hyperdriveId ?? '') },
          body: {
            cachingDisabled: argv.cachingDisabled,
            cachingMaxAge: argv.cachingMaxAge,
            cachingStaleWhileRevalidate: argv.cachingStaleWhileRevalidate,
            mtlsCaCertificateId: argv.mtlsCaCertificateId,
            mtlsMtlsCertificateId: argv.mtlsMtlsCertificateId,
            mtlsSslmode: argv.mtlsSslmode,
            name: argv.name,
            originConnectionLimit: argv.originConnectionLimit,
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
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.patch<unknown>(`/accounts/${accountId}/hyperdrive/configs/${argv.hyperdriveId}`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.cachingDisabled !== undefined) setNestedValue(bodyData, ['caching', 'disabled'], argv.cachingDisabled);
      if (argv.cachingMaxAge !== undefined) setNestedValue(bodyData, ['caching', 'max_age'], argv.cachingMaxAge);
      if (argv.cachingStaleWhileRevalidate !== undefined)
        setNestedValue(bodyData, ['caching', 'stale_while_revalidate'], argv.cachingStaleWhileRevalidate);
      if (argv.mtlsCaCertificateId !== undefined)
        setNestedValue(bodyData, ['mtls', 'ca_certificate_id'], argv.mtlsCaCertificateId);
      if (argv.mtlsMtlsCertificateId !== undefined)
        setNestedValue(bodyData, ['mtls', 'mtls_certificate_id'], argv.mtlsMtlsCertificateId);
      if (argv.mtlsSslmode !== undefined) setNestedValue(bodyData, ['mtls', 'sslmode'], argv.mtlsSslmode);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.originConnectionLimit !== undefined)
        setNestedValue(bodyData, ['origin_connection_limit'], argv.originConnectionLimit);
      const result = await client.patch<unknown>(`/accounts/${accountId}/hyperdrive/configs/${argv.hyperdriveId}`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
