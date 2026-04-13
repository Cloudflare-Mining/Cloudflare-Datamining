/**
 * proxy-endpoints-edit command
 * @generated from apis/zero-trust/schema.ts
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

interface ProxyEndpointsEditArgs {
  proxyEndpointId: string;
  ips?: string;
  name?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, ProxyEndpointsEditArgs> = {
  command: 'proxy-endpoints-edit <proxyEndpointId>',
  describe: 'Update a configured Zero Trust Gateway proxy endpoint.',

  builder: (yargs: Argv): Argv<ProxyEndpointsEditArgs> => {
    return yargs
      .positional('proxyEndpointId', {
        type: 'string',
        description: 'Proxy endpoint ID',
        demandOption: true,
      })
      .option('ips', {
        type: 'string',
        description: 'Specify the list of CIDRs to restrict ingress connections.',
        default: undefined,
      })
      .option('name', {
        type: 'string',
        description: 'Specify the name of the proxy endpoint.',
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
      }) as Argv<ProxyEndpointsEditArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ProxyEndpointsEditArgs>): Promise<void> => {
    try {
      validateResourceId(argv.proxyEndpointId as string | undefined, 'proxyEndpointId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf zero-trust gateway proxy-endpoints-edit',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/gateway/proxy_endpoints/${argv.proxyEndpointId ?? '<proxyEndpointId>'}`,
          pathParams: { proxyEndpointId: String(argv.proxyEndpointId ?? '') },
          body: { ips: argv.ips, name: argv.name },
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
        const result = await client.patch<unknown>(
          `/accounts/${accountId}/gateway/proxy_endpoints/${argv.proxyEndpointId}`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.ips !== undefined) setNestedValue(bodyData, ['ips'], argv.ips);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      const result = await client.patch<unknown>(
        `/accounts/${accountId}/gateway/proxy_endpoints/${argv.proxyEndpointId}`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
