/**
 * create command
 * @generated from apis/hyperdrive/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface CreateArgs {
  'caching-disabled'?: boolean;
  'caching-max-age'?: number;
  'caching-stale-while-revalidate'?: number;
  'mtls-ca-certificate-id'?: string;
  'mtls-mtls-certificate-id'?: string;
  'mtls-sslmode'?: string;
  name: string;
  'origin-database': string;
  'origin-password': string;
  'origin-scheme': string;
  'origin-user': string;
  'origin-host': string;
  'origin-port'?: number;
  'origin-access-client-id'?: string;
  'origin-access-client-secret'?: string;
  'origin-connection-limit'?: number;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, CreateArgs> = {
  command: 'create',
  describe: 'Creates and returns a new Hyperdrive configuration.',

  builder: (yargs: Argv): Argv<CreateArgs> => {
    return yargs
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
      })
      .option('origin-database', {
        type: 'string',
        description: 'Set the name of your origin database.',
      })
      .option('origin-password', {
        type: 'string',
        description:
          'Set the password needed to access your origin database. The API never returns this write-only value.',
      })
      .option('origin-scheme', {
        type: 'string',
        description: 'Specifies the URL scheme used to connect to your origin database.',
        choices: ['postgres', 'postgresql', 'mysql'] as const,
      })
      .option('origin-user', {
        type: 'string',
        description: 'Set the user of your origin database.',
      })
      .option('origin-host', {
        type: 'string',
        description: 'Defines the host (hostname or IP) of your origin database.',
      })
      .option('origin-port', {
        type: 'number',
        description:
          'Defines the port of your origin database. Defaults to 5432 for PostgreSQL or 3306 for MySQL if not specified.',
        default: undefined,
      })
      .option('origin-access-client-id', {
        type: 'string',
        description: 'Defines the Client ID of the Access token to use when connecting to the origin database.',
        default: undefined,
      })
      .option('origin-access-client-secret', {
        type: 'string',
        description:
          'Defines the Client Secret of the Access Token to use when connecting to the origin database. The API never returns this write-only value.',
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
      })
      .conflicts('origin-port', ['originAccessClientId', 'originAccessClientSecret'])
      .conflicts('origin-access-client-id', ['originPort'])
      .implies('origin-access-client-id', ['originAccessClientSecret'])
      .conflicts('origin-access-client-secret', ['originPort'])
      .implies('origin-access-client-secret', ['originAccessClientId'])
      .choices('origin-scheme', ['postgres', 'postgresql', 'mysql'] as const) as Argv<CreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf hyperdrive configs create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/hyperdrive/configs`,
          pathParams: {},
          body: {
            cachingDisabled: argv.cachingDisabled,
            cachingMaxAge: argv.cachingMaxAge,
            cachingStaleWhileRevalidate: argv.cachingStaleWhileRevalidate,
            mtlsCaCertificateId: argv.mtlsCaCertificateId,
            mtlsMtlsCertificateId: argv.mtlsMtlsCertificateId,
            mtlsSslmode: argv.mtlsSslmode,
            name: argv.name,
            originDatabase: argv.originDatabase,
            originPassword: argv.originPassword,
            originScheme: argv.originScheme,
            originUser: argv.originUser,
            originHost: argv.originHost,
            originPort: argv.originPort,
            originAccessClientId: argv.originAccessClientId,
            originAccessClientSecret: argv.originAccessClientSecret,
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
        const result = await client.post<unknown>(`/accounts/${accountId}/hyperdrive/configs`, { body: bodyData });
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
      if (argv.originDatabase !== undefined) setNestedValue(bodyData, ['origin', 'database'], argv.originDatabase);
      if (argv.originPassword !== undefined) setNestedValue(bodyData, ['origin', 'password'], argv.originPassword);
      if (argv.originScheme !== undefined) setNestedValue(bodyData, ['origin', 'scheme'], argv.originScheme);
      if (argv.originUser !== undefined) setNestedValue(bodyData, ['origin', 'user'], argv.originUser);
      if (argv.originHost !== undefined) setNestedValue(bodyData, ['origin', 'host'], argv.originHost);
      if (argv.originPort !== undefined) setNestedValue(bodyData, ['origin', 'port'], argv.originPort);
      if (argv.originAccessClientId !== undefined)
        setNestedValue(bodyData, ['origin', 'access_client_id'], argv.originAccessClientId);
      if (argv.originAccessClientSecret !== undefined)
        setNestedValue(bodyData, ['origin', 'access_client_secret'], argv.originAccessClientSecret);
      if (argv.originConnectionLimit !== undefined)
        setNestedValue(bodyData, ['origin_connection_limit'], argv.originConnectionLimit);
      const result = await client.post<unknown>(`/accounts/${accountId}/hyperdrive/configs`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
