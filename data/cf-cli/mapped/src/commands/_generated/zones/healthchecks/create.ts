/**
 * create command
 * @generated from apis/zones/schema.ts
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

interface CreateArgs {
  zoneId?: string;
  address: string;
  'check-regions'?: string;
  'consecutive-fails'?: number;
  'consecutive-successes'?: number;
  description?: string;
  'http-config-allow-insecure'?: boolean;
  'http-config-expected-body'?: string;
  'http-config-expected-codes'?: string;
  'http-config-follow-redirects'?: boolean;
  'http-config-method'?: string;
  'http-config-path'?: string;
  'http-config-port'?: number;
  interval?: number;
  name: string;
  retries?: number;
  suspended?: boolean;
  'tcp-config-method'?: string;
  'tcp-config-port'?: number;
  timeout?: number;
  type?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, CreateArgs> = {
  command: 'create [zoneId]',
  describe: 'Create a new health check.',

  builder: (yargs: Argv): Argv<CreateArgs> => {
    return yargs
      .positional('zoneId', {
        type: 'string',
        description: 'Identifier. (or use --zone flag)',
      })
      .option('address', {
        type: 'string',
        description: 'The hostname or IP address of the origin server to run health checks on.',
      })
      .option('check-regions', {
        type: 'string',
        description:
          'A list of regions from which to run health checks. Null means Cloudflare will pick a default region.',
        default: undefined,
      })
      .option('consecutive-fails', {
        type: 'number',
        description:
          'The number of consecutive fails required from a health check before changing the health to unhealthy.',
        default: undefined,
      })
      .option('consecutive-successes', {
        type: 'number',
        description:
          'The number of consecutive successes required from a health check before changing the health to healthy.',
        default: undefined,
      })
      .option('description', {
        type: 'string',
        description: 'A human-readable description of the health check.',
        default: undefined,
      })
      .option('http-config-allow-insecure', {
        type: 'boolean',
        description: 'Do not validate the certificate when the health check uses HTTPS.',
        default: false,
      })
      .option('http-config-expected-body', {
        type: 'string',
        description:
          'A case-insensitive sub-string to look for in the response body. If this string is not found, the origin will be marked as unhealthy.',
        default: undefined,
      })
      .option('http-config-expected-codes', {
        type: 'string',
        description:
          'The expected HTTP response codes (e.g. "200") or code ranges (e.g. "2xx" for all codes starting with 2) of the health check.',
        default: undefined,
      })
      .option('http-config-follow-redirects', {
        type: 'boolean',
        description: 'Follow redirects if the origin returns a 3xx status code.',
        default: false,
      })
      .option('http-config-method', {
        type: 'string',
        description: 'The HTTP method to use for the health check.',
        choices: ['GET', 'HEAD'] as const,
        default: undefined,
      })
      .option('http-config-path', {
        type: 'string',
        description: 'The endpoint path to health check against.',
        default: undefined,
      })
      .option('http-config-port', {
        type: 'number',
        description:
          'Port number to connect to for the health check. Defaults to 80 if type is HTTP or 443 if type is HTTPS.',
        default: undefined,
      })
      .option('interval', {
        type: 'number',
        description:
          'The interval between each health check. Shorter intervals may give quicker notifications if the origin status changes, but will increase load on the origin as we check from multiple locations.',
        default: undefined,
      })
      .option('name', {
        type: 'string',
        description:
          'A short name to identify the health check. Only alphanumeric characters, hyphens and underscores are allowed.',
      })
      .option('retries', {
        type: 'number',
        description:
          'The number of retries to attempt in case of a timeout before marking the origin as unhealthy. Retries are attempted immediately.',
        default: undefined,
      })
      .option('suspended', {
        type: 'boolean',
        description: 'If suspended, no health checks are sent to the origin.',
        default: false,
      })
      .option('tcp-config-method', {
        type: 'string',
        description: 'The TCP connection method to use for the health check.',
        choices: ['connection_established'] as const,
        default: undefined,
      })
      .option('tcp-config-port', {
        type: 'number',
        description: 'Port number to connect to for the health check. Defaults to 80.',
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
          "The protocol to use for the health check. Currently supported protocols are 'HTTP', 'HTTPS' and 'TCP'.",
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
      .choices('http-config-method', ['GET', 'HEAD'] as const)
      .choices('tcp-config-method', ['connection_established'] as const) as Argv<CreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        formatDryRun({
          command: 'cf zones healthchecks create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/smart_shield/healthchecks`,
          pathParams: { zoneId: String(argv.zoneId ?? '') },
          body: {
            address: argv.address,
            checkRegions: argv.checkRegions,
            consecutiveFails: argv.consecutiveFails,
            consecutiveSuccesses: argv.consecutiveSuccesses,
            description: argv.description,
            httpConfigAllowInsecure: argv.httpConfigAllowInsecure,
            httpConfigExpectedBody: argv.httpConfigExpectedBody,
            httpConfigExpectedCodes: argv.httpConfigExpectedCodes,
            httpConfigFollowRedirects: argv.httpConfigFollowRedirects,
            httpConfigMethod: argv.httpConfigMethod,
            httpConfigPath: argv.httpConfigPath,
            httpConfigPort: argv.httpConfigPort,
            interval: argv.interval,
            name: argv.name,
            retries: argv.retries,
            suspended: argv.suspended,
            tcpConfigMethod: argv.tcpConfigMethod,
            tcpConfigPort: argv.tcpConfigPort,
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
      const zoneId = await getZoneId({ zone: argv.zone, zoneId: argv.zoneId }, client, { quiet: argv.quiet });

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.post<unknown>(`/zones/${zoneId}/smart_shield/healthchecks`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.address !== undefined) setNestedValue(bodyData, ['address'], argv.address);
      if (argv.checkRegions !== undefined) setNestedValue(bodyData, ['check_regions'], argv.checkRegions);
      if (argv.consecutiveFails !== undefined) setNestedValue(bodyData, ['consecutive_fails'], argv.consecutiveFails);
      if (argv.consecutiveSuccesses !== undefined)
        setNestedValue(bodyData, ['consecutive_successes'], argv.consecutiveSuccesses);
      if (argv.description !== undefined) setNestedValue(bodyData, ['description'], argv.description);
      if (argv.httpConfigAllowInsecure !== undefined)
        setNestedValue(bodyData, ['http_config', 'allow_insecure'], argv.httpConfigAllowInsecure);
      if (argv.httpConfigExpectedBody !== undefined)
        setNestedValue(bodyData, ['http_config', 'expected_body'], argv.httpConfigExpectedBody);
      if (argv.httpConfigExpectedCodes !== undefined)
        setNestedValue(bodyData, ['http_config', 'expected_codes'], argv.httpConfigExpectedCodes);
      if (argv.httpConfigFollowRedirects !== undefined)
        setNestedValue(bodyData, ['http_config', 'follow_redirects'], argv.httpConfigFollowRedirects);
      if (argv.httpConfigMethod !== undefined)
        setNestedValue(bodyData, ['http_config', 'method'], argv.httpConfigMethod);
      if (argv.httpConfigPath !== undefined) setNestedValue(bodyData, ['http_config', 'path'], argv.httpConfigPath);
      if (argv.httpConfigPort !== undefined) setNestedValue(bodyData, ['http_config', 'port'], argv.httpConfigPort);
      if (argv.interval !== undefined) setNestedValue(bodyData, ['interval'], argv.interval);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.retries !== undefined) setNestedValue(bodyData, ['retries'], argv.retries);
      if (argv.suspended !== undefined) setNestedValue(bodyData, ['suspended'], argv.suspended);
      if (argv.tcpConfigMethod !== undefined) setNestedValue(bodyData, ['tcp_config', 'method'], argv.tcpConfigMethod);
      if (argv.tcpConfigPort !== undefined) setNestedValue(bodyData, ['tcp_config', 'port'], argv.tcpConfigPort);
      if (argv.timeout !== undefined) setNestedValue(bodyData, ['timeout'], argv.timeout);
      if (argv.type !== undefined) setNestedValue(bodyData, ['type'], argv.type);
      const result = await client.post<unknown>(`/zones/${zoneId}/smart_shield/healthchecks`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
