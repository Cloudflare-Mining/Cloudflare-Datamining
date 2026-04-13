/**
 * health-create command
 * @generated from apis/load-balancers/schema.ts
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

interface HealthCreateArgs {
  poolId: string;
  'allow-insecure'?: boolean;
  'consecutive-down'?: number;
  'consecutive-up'?: number;
  description?: string;
  'expected-body'?: string;
  'expected-codes'?: string;
  'follow-redirects'?: boolean;
  interval?: number;
  method?: string;
  path?: string;
  port?: number;
  'probe-zone'?: string;
  retries?: number;
  timeout?: number;
  type?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, HealthCreateArgs> = {
  command: 'health-create <poolId>',
  describe:
    'Preview pool health using provided monitor details. The returned preview_id can be used in the preview endpoint to retrieve the results.',

  builder: (yargs: Argv): Argv<HealthCreateArgs> => {
    return yargs
      .positional('poolId', {
        type: 'string',
        description: 'Pool ID',
        demandOption: true,
      })
      .option('allow-insecure', {
        type: 'boolean',
        description:
          'Do not validate the certificate when monitor use HTTPS. This parameter is currently only valid for HTTP and HTTPS monitors.',
        default: false,
      })
      .option('consecutive-down', {
        type: 'number',
        description: 'To be marked unhealthy the monitored origin must fail this healthcheck N consecutive times.',
        default: undefined,
      })
      .option('consecutive-up', {
        type: 'number',
        description: 'To be marked healthy the monitored origin must pass this healthcheck N consecutive times.',
        default: undefined,
      })
      .option('description', {
        type: 'string',
        description: 'Object description.',
        default: undefined,
      })
      .option('expected-body', {
        type: 'string',
        description:
          'A case-insensitive sub-string to look for in the response body. If this string is not found, the origin will be marked as unhealthy. This parameter is only valid for HTTP and HTTPS monitors.',
        default: undefined,
      })
      .option('expected-codes', {
        type: 'string',
        description:
          'The expected HTTP response code or code range of the health check. This parameter is only valid for HTTP and HTTPS monitors.',
        default: undefined,
      })
      .option('follow-redirects', {
        type: 'boolean',
        description:
          'Follow redirects if returned by the origin. This parameter is only valid for HTTP and HTTPS monitors.',
        default: false,
      })
      .option('interval', {
        type: 'number',
        description:
          'The interval between each health check. Shorter intervals may improve failover time, but will increase load on the origins as we check from multiple locations.',
        default: undefined,
      })
      .option('method', {
        type: 'string',
        description:
          "The method to use for the health check. This defaults to 'GET' for HTTP/HTTPS based checks and 'connection_established' for TCP based health checks.",
        default: undefined,
      })
      .option('path', {
        type: 'string',
        description:
          'The endpoint path you want to conduct a health check against. This parameter is only valid for HTTP and HTTPS monitors.',
        default: undefined,
      })
      .option('port', {
        type: 'number',
        description:
          'The port number to connect to for the health check. Required for TCP, UDP, and SMTP checks. HTTP and HTTPS checks should only define the port when using a non-standard port (HTTP: default 80, HTTPS: default 443).',
        default: undefined,
      })
      .option('probe-zone', {
        type: 'string',
        description:
          'Assign this monitor to emulate the specified zone while probing. This parameter is only valid for HTTP and HTTPS monitors.',
        default: undefined,
      })
      .option('retries', {
        type: 'number',
        description:
          'The number of retries to attempt in case of a timeout before marking the origin as unhealthy. Retries are attempted immediately.',
        default: undefined,
      })
      .option('timeout', {
        type: 'number',
        description: 'The timeout (in seconds) before marking the health check as failed.',
        default: undefined,
      })
      .option('type', {
        type: 'string',
        description:
          "The protocol to use for the health check. Currently supported protocols are 'HTTP','HTTPS', 'TCP', 'ICMP-PING', 'UDP-ICMP', and 'SMTP'.",
        choices: ['http', 'https', 'tcp', 'udp_icmp', 'icmp_ping', 'smtp'] as const,
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
      .choices('type', ['http', 'https', 'tcp', 'udp_icmp', 'icmp_ping', 'smtp'] as const) as Argv<HealthCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<HealthCreateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.poolId as string | undefined, 'poolId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf load-balancers pools health-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/load_balancers/pools/${argv.poolId ?? '<poolId>'}/preview`,
          pathParams: { poolId: String(argv.poolId ?? '') },
          body: {
            allowInsecure: argv.allowInsecure,
            consecutiveDown: argv.consecutiveDown,
            consecutiveUp: argv.consecutiveUp,
            description: argv.description,
            expectedBody: argv.expectedBody,
            expectedCodes: argv.expectedCodes,
            followRedirects: argv.followRedirects,
            interval: argv.interval,
            method: argv.method,
            path: argv.path,
            port: argv.port,
            probeZone: argv.probeZone,
            retries: argv.retries,
            timeout: argv.timeout,
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
        const result = await client.post<unknown>(
          `/accounts/${accountId}/load_balancers/pools/${argv.poolId}/preview`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.allowInsecure !== undefined) setNestedValue(bodyData, ['allow_insecure'], argv.allowInsecure);
      if (argv.consecutiveDown !== undefined) setNestedValue(bodyData, ['consecutive_down'], argv.consecutiveDown);
      if (argv.consecutiveUp !== undefined) setNestedValue(bodyData, ['consecutive_up'], argv.consecutiveUp);
      if (argv.description !== undefined) setNestedValue(bodyData, ['description'], argv.description);
      if (argv.expectedBody !== undefined) setNestedValue(bodyData, ['expected_body'], argv.expectedBody);
      if (argv.expectedCodes !== undefined) setNestedValue(bodyData, ['expected_codes'], argv.expectedCodes);
      if (argv.followRedirects !== undefined) setNestedValue(bodyData, ['follow_redirects'], argv.followRedirects);
      if (argv.interval !== undefined) setNestedValue(bodyData, ['interval'], argv.interval);
      if (argv.method !== undefined) setNestedValue(bodyData, ['method'], argv.method);
      if (argv.path !== undefined) setNestedValue(bodyData, ['path'], argv.path);
      if (argv.port !== undefined) setNestedValue(bodyData, ['port'], argv.port);
      if (argv.probeZone !== undefined) setNestedValue(bodyData, ['probe_zone'], argv.probeZone);
      if (argv.retries !== undefined) setNestedValue(bodyData, ['retries'], argv.retries);
      if (argv.timeout !== undefined) setNestedValue(bodyData, ['timeout'], argv.timeout);
      if (argv.type !== undefined) setNestedValue(bodyData, ['type'], argv.type);
      const result = await client.post<unknown>(`/accounts/${accountId}/load_balancers/pools/${argv.poolId}/preview`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
