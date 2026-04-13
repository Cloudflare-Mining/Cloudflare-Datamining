/**
 * create command
 * @generated from apis/accounts/schema.ts
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
  'application-type-id': string;
  'human-id': string;
  'ip-subnets'?: string;
  name: string;
  'port-protocols'?: string;
  'support-domains'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, CreateArgs> = {
  command: 'create',
  describe: 'Create application.',

  builder: (yargs: Argv): Argv<CreateArgs> => {
    return yargs
      .option('application-type-id', {
        type: 'string',
        description: 'Provide as string to perform a lookup to check if the source exists.',
      })
      .option('human-id', {
        type: 'string',
        description: 'Returns the human readable ID.',
      })
      .option('ip-subnets', {
        type: 'string',
        description: 'Returns the list of IP subnets for the application.',
        default: undefined,
      })
      .option('name', {
        type: 'string',
        description: 'Returns the application name.',
      })
      .option('port-protocols', {
        type: 'string',
        description: 'Returns the list of port protocols for the application.',
        default: undefined,
      })
      .option('support-domains', {
        type: 'string',
        description: 'Returns the list of support domains for the application.',
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
      }) as Argv<CreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf accounts applications create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/resource-library/applications`,
          pathParams: { accountId: String(argv.accountId ?? '') },
          body: {
            applicationTypeId: argv.applicationTypeId,
            humanId: argv.humanId,
            ipSubnets: argv.ipSubnets,
            name: argv.name,
            portProtocols: argv.portProtocols,
            supportDomains: argv.supportDomains,
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
        const result = await client.post<unknown>(`/accounts/${accountId}/resource-library/applications`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.applicationTypeId !== undefined)
        setNestedValue(bodyData, ['application_type_id'], argv.applicationTypeId);
      if (argv.humanId !== undefined) setNestedValue(bodyData, ['human_id'], argv.humanId);
      if (argv.ipSubnets !== undefined) setNestedValue(bodyData, ['ip_subnets'], argv.ipSubnets);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.portProtocols !== undefined) setNestedValue(bodyData, ['port_protocols'], argv.portProtocols);
      if (argv.supportDomains !== undefined) setNestedValue(bodyData, ['support_domains'], argv.supportDomains);
      const result = await client.post<unknown>(`/accounts/${accountId}/resource-library/applications`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
