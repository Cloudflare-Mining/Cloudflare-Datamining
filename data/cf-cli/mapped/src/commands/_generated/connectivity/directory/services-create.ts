/**
 * services-create command
 * @generated from apis/connectivity/schema.ts
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

interface ServicesCreateArgs {
  name: string;
  'tls-settings-cert-verification-mode': string;
  type: string;
  'http-port'?: number;
  'https-port'?: number;
  'app-protocol'?: string;
  'tcp-port'?: number;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, ServicesCreateArgs> = {
  command: 'services-create',
  describe: 'Creates a new connectivity service entry in the directory.',

  builder: (yargs: Argv): Argv<ServicesCreateArgs> => {
    return yargs
      .option('name', {
        type: 'string',
        description: 'The name field',
      })
      .option('tls-settings-cert-verification-mode', {
        type: 'string',
        description:
          'TLS certificate verification mode for the connection to the origin.  - \`"verify_full"\` — verify certificate chain and hostname (default) - \`"verify_ca"\` — verify certificate chain only, skip hostname check - \`"disabled"\` — do not verify the server certificate at all',
      })
      .option('type', {
        type: 'string',
        description: 'The type field',
        choices: ['tcp', 'http'] as const,
      })
      .option('http-port', {
        type: 'number',
        description: 'The http_port field',
        default: undefined,
      })
      .option('https-port', {
        type: 'number',
        description: 'The https_port field',
        default: undefined,
      })
      .option('app-protocol', {
        type: 'string',
        description: 'The app_protocol field',
        choices: ['postgresql', 'mysql'] as const,
        default: undefined,
      })
      .option('tcp-port', {
        type: 'number',
        description: 'The tcp_port field',
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
      .conflicts('http-port', ['appProtocol', 'tcpPort'])
      .conflicts('https-port', ['appProtocol', 'tcpPort'])
      .conflicts('app-protocol', ['httpPort', 'httpsPort'])
      .conflicts('tcp-port', ['httpPort', 'httpsPort'])
      .choices('type', ['tcp', 'http'] as const)
      .choices('app-protocol', ['postgresql', 'mysql'] as const) as Argv<ServicesCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ServicesCreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf connectivity directory services-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/connectivity/directory/services`,
          pathParams: {},
          body: {
            name: argv.name,
            tlsSettingsCertVerificationMode: argv.tlsSettingsCertVerificationMode,
            type: argv.type,
            httpPort: argv.httpPort,
            httpsPort: argv.httpsPort,
            appProtocol: argv.appProtocol,
            tcpPort: argv.tcpPort,
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
        const result = await client.post<unknown>(`/accounts/${accountId}/connectivity/directory/services`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.tlsSettingsCertVerificationMode !== undefined)
        setNestedValue(bodyData, ['tls_settings', 'cert_verification_mode'], argv.tlsSettingsCertVerificationMode);
      if (argv.type !== undefined) setNestedValue(bodyData, ['type'], argv.type);
      if (argv.httpPort !== undefined) setNestedValue(bodyData, ['http_port'], argv.httpPort);
      if (argv.httpsPort !== undefined) setNestedValue(bodyData, ['https_port'], argv.httpsPort);
      if (argv.appProtocol !== undefined) setNestedValue(bodyData, ['app_protocol'], argv.appProtocol);
      if (argv.tcpPort !== undefined) setNestedValue(bodyData, ['tcp_port'], argv.tcpPort);
      const result = await client.post<unknown>(`/accounts/${accountId}/connectivity/directory/services`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
