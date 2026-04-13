/**
 * posture-integrations-create command
 * @generated from apis/zero-trust/schema.ts
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

interface PostureIntegrationsCreateArgs {
  'config-api-url'?: string;
  'config-auth-url'?: string;
  'config-client-id'?: string;
  'config-client-secret'?: string;
  'config-customer-id'?: string;
  'config-client-key'?: string;
  'config-access-client-id'?: string;
  'config-access-client-secret'?: string;
  interval: string;
  name: string;
  type: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, PostureIntegrationsCreateArgs> = {
  command: 'posture-integrations-create',
  describe: 'Create a new device posture integration.',

  builder: (yargs: Argv): Argv<PostureIntegrationsCreateArgs> => {
    return yargs
      .option('config-api-url', {
        type: 'string',
        description: 'The Workspace One API URL provided in the Workspace One Admin Dashboard.',
        default: undefined,
      })
      .option('config-auth-url', {
        type: 'string',
        description: 'The Workspace One Authorization URL depending on your region.',
        default: undefined,
      })
      .option('config-client-id', {
        type: 'string',
        description: 'The Workspace One client ID provided in the Workspace One Admin Dashboard.',
        default: undefined,
      })
      .option('config-client-secret', {
        type: 'string',
        description: 'The Workspace One client secret provided in the Workspace One Admin Dashboard.',
        default: undefined,
      })
      .option('config-customer-id', {
        type: 'string',
        description: 'The Crowdstrike customer ID.',
        default: undefined,
      })
      .option('config-client-key', {
        type: 'string',
        description: 'The Uptycs client secret.',
        default: undefined,
      })
      .option('config-access-client-id', {
        type: 'string',
        description:
          'If present, this id will be passed in the \`CF-Access-Client-ID\` header when hitting the \`api_url\`.',
        default: undefined,
      })
      .option('config-access-client-secret', {
        type: 'string',
        description:
          'If present, this secret will be passed in the \`CF-Access-Client-Secret\` header when hitting the \`api_url\`.',
        default: undefined,
      })
      .option('interval', {
        type: 'string',
        description:
          'The interval between each posture check with the third-party API. Use \`m\` for minutes (e.g. \`5m\`) and \`h\` for hours (e.g. \`12h\`).',
      })
      .option('name', {
        type: 'string',
        description: 'The name of the device posture integration.',
      })
      .option('type', {
        type: 'string',
        description: 'The type of device posture integration.',
        choices: [
          'workspace_one',
          'crowdstrike_s2s',
          'uptycs',
          'intune',
          'kolide',
          'tanium_s2s',
          'sentinelone_s2s',
          'custom_s2s',
        ] as const,
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
      .conflicts('config-api-url', ['configCustomerId', 'configClientId', 'configClientSecret'])
      .implies('config-api-url', [
        'configAuthUrl',
        'configClientId',
        'configClientSecret',
        'configCustomerId',
        'configClientKey',
        'configAccessClientId',
        'configAccessClientSecret',
      ])
      .conflicts('config-auth-url', [
        'configCustomerId',
        'configClientKey',
        'configAccessClientId',
        'configAccessClientSecret',
      ])
      .implies('config-auth-url', ['configApiUrl', 'configClientId', 'configClientSecret'])
      .conflicts('config-client-id', [
        'configClientKey',
        'configCustomerId',
        'configAccessClientId',
        'configAccessClientSecret',
        'configApiUrl',
      ])
      .implies('config-client-id', ['configApiUrl', 'configAuthUrl', 'configClientSecret', 'configCustomerId'])
      .conflicts('config-client-secret', ['configAccessClientId', 'configAccessClientSecret', 'configApiUrl'])
      .implies('config-client-secret', [
        'configApiUrl',
        'configAuthUrl',
        'configClientId',
        'configCustomerId',
        'configClientKey',
      ])
      .conflicts('config-customer-id', [
        'configAuthUrl',
        'configClientId',
        'configApiUrl',
        'configAccessClientId',
        'configAccessClientSecret',
      ])
      .implies('config-customer-id', ['configApiUrl', 'configClientId', 'configClientSecret', 'configClientKey'])
      .conflicts('config-client-key', [
        'configAuthUrl',
        'configClientId',
        'configAccessClientId',
        'configAccessClientSecret',
      ])
      .implies('config-client-key', ['configApiUrl', 'configCustomerId', 'configClientSecret'])
      .conflicts('config-access-client-id', [
        'configAuthUrl',
        'configClientId',
        'configClientSecret',
        'configCustomerId',
        'configClientKey',
      ])
      .implies('config-access-client-id', ['configApiUrl', 'configAccessClientSecret'])
      .conflicts('config-access-client-secret', [
        'configAuthUrl',
        'configClientId',
        'configClientSecret',
        'configCustomerId',
        'configClientKey',
      ])
      .implies('config-access-client-secret', ['configApiUrl', 'configAccessClientId'])
      .choices('type', [
        'workspace_one',
        'crowdstrike_s2s',
        'uptycs',
        'intune',
        'kolide',
        'tanium_s2s',
        'sentinelone_s2s',
        'custom_s2s',
      ] as const) as Argv<PostureIntegrationsCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<PostureIntegrationsCreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf zero-trust devices posture-integrations-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/devices/posture/integration`,
          pathParams: {},
          body: {
            configApiUrl: argv.configApiUrl,
            configAuthUrl: argv.configAuthUrl,
            configClientId: argv.configClientId,
            configClientSecret: argv.configClientSecret,
            configCustomerId: argv.configCustomerId,
            configClientKey: argv.configClientKey,
            configAccessClientId: argv.configAccessClientId,
            configAccessClientSecret: argv.configAccessClientSecret,
            interval: argv.interval,
            name: argv.name,
            type: argv.type,
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
        const result = await client.post<unknown>(`/accounts/${accountId}/devices/posture/integration`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.configApiUrl !== undefined) setNestedValue(bodyData, ['config', 'api_url'], argv.configApiUrl);
      if (argv.configAuthUrl !== undefined) setNestedValue(bodyData, ['config', 'auth_url'], argv.configAuthUrl);
      if (argv.configClientId !== undefined) setNestedValue(bodyData, ['config', 'client_id'], argv.configClientId);
      if (argv.configClientSecret !== undefined)
        setNestedValue(bodyData, ['config', 'client_secret'], argv.configClientSecret);
      if (argv.configCustomerId !== undefined)
        setNestedValue(bodyData, ['config', 'customer_id'], argv.configCustomerId);
      if (argv.configClientKey !== undefined) setNestedValue(bodyData, ['config', 'client_key'], argv.configClientKey);
      if (argv.configAccessClientId !== undefined)
        setNestedValue(bodyData, ['config', 'access_client_id'], argv.configAccessClientId);
      if (argv.configAccessClientSecret !== undefined)
        setNestedValue(bodyData, ['config', 'access_client_secret'], argv.configAccessClientSecret);
      if (argv.interval !== undefined) setNestedValue(bodyData, ['interval'], argv.interval);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.type !== undefined) setNestedValue(bodyData, ['type'], argv.type);
      const result = await client.post<unknown>(`/accounts/${accountId}/devices/posture/integration`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
