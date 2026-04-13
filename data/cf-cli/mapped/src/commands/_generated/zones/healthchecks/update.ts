/**
 * update command
 * @generated from apis/zones/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface UpdateArgs {
  healthcheckId: string;
  zoneId: string;
  'result-address'?: string;
  'result-check-regions'?: string;
  'result-consecutive-fails'?: number;
  'result-consecutive-successes'?: number;
  'result-description'?: string;
  'result-http-config-allow-insecure'?: boolean;
  'result-http-config-expected-body'?: string;
  'result-http-config-expected-codes'?: string;
  'result-http-config-follow-redirects'?: boolean;
  'result-http-config-method'?: string;
  'result-http-config-path'?: string;
  'result-http-config-port'?: number;
  'result-interval'?: number;
  'result-name'?: string;
  'result-retries'?: number;
  'result-suspended'?: boolean;
  'result-tcp-config-method'?: string;
  'result-tcp-config-port'?: number;
  'result-timeout'?: number;
  'result-type'?: string;
  success: boolean;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, UpdateArgs> = {
  command: 'update <healthcheckId> [zoneId]',
  describe: 'Update a configured health check.',

  builder: (yargs: Argv): Argv<UpdateArgs> => {
    return yargs
      .positional('healthcheckId', {
        type: 'string',
        description: 'Identifier.',
        demandOption: true,
      })
      .positional('zoneId', {
        type: 'string',
        description: 'Identifier. (or use --zone flag)',
      })
      .option('result-address', {
        type: 'string',
        description: 'The hostname or IP address of the origin server to run health checks on.',
        default: undefined,
      })
      .option('result-check-regions', {
        type: 'string',
        description:
          'A list of regions from which to run health checks. Null means Cloudflare will pick a default region.',
        default: undefined,
      })
      .option('result-consecutive-fails', {
        type: 'number',
        description:
          'The number of consecutive fails required from a health check before changing the health to unhealthy.',
        default: undefined,
      })
      .option('result-consecutive-successes', {
        type: 'number',
        description:
          'The number of consecutive successes required from a health check before changing the health to healthy.',
        default: undefined,
      })
      .option('result-description', {
        type: 'string',
        description: 'A human-readable description of the health check.',
        default: undefined,
      })
      .option('result-http-config-allow-insecure', {
        type: 'boolean',
        description: 'Do not validate the certificate when the health check uses HTTPS.',
        default: false,
      })
      .option('result-http-config-expected-body', {
        type: 'string',
        description:
          'A case-insensitive sub-string to look for in the response body. If this string is not found, the origin will be marked as unhealthy.',
        default: undefined,
      })
      .option('result-http-config-expected-codes', {
        type: 'string',
        description:
          'The expected HTTP response codes (e.g. "200") or code ranges (e.g. "2xx" for all codes starting with 2) of the health check.',
        default: undefined,
      })
      .option('result-http-config-follow-redirects', {
        type: 'boolean',
        description: 'Follow redirects if the origin returns a 3xx status code.',
        default: false,
      })
      .option('result-http-config-method', {
        type: 'string',
        description: 'The HTTP method to use for the health check.',
        choices: ['GET', 'HEAD'] as const,
        default: undefined,
      })
      .option('result-http-config-path', {
        type: 'string',
        description: 'The endpoint path to health check against.',
        default: undefined,
      })
      .option('result-http-config-port', {
        type: 'number',
        description:
          'Port number to connect to for the health check. Defaults to 80 if type is HTTP or 443 if type is HTTPS.',
        default: undefined,
      })
      .option('result-interval', {
        type: 'number',
        description:
          'The interval between each health check. Shorter intervals may give quicker notifications if the origin status changes, but will increase load on the origin as we check from multiple locations.',
        default: undefined,
      })
      .option('result-name', {
        type: 'string',
        description:
          'A short name to identify the health check. Only alphanumeric characters, hyphens and underscores are allowed.',
        default: undefined,
      })
      .option('result-retries', {
        type: 'number',
        description:
          'The number of retries to attempt in case of a timeout before marking the origin as unhealthy. Retries are attempted immediately.',
        default: undefined,
      })
      .option('result-suspended', {
        type: 'boolean',
        description: 'If suspended, no health checks are sent to the origin.',
        default: false,
      })
      .option('result-tcp-config-method', {
        type: 'string',
        description: 'The TCP connection method to use for the health check.',
        choices: ['connection_established'] as const,
        default: undefined,
      })
      .option('result-tcp-config-port', {
        type: 'number',
        description: 'Port number to connect to for the health check. Defaults to 80.',
        default: undefined,
      })
      .option('result-timeout', {
        type: 'number',
        description: 'The timeout (in seconds) before marking the health check as failed.',
        default: undefined,
      })
      .option('result-type', {
        type: 'string',
        description:
          "The protocol to use for the health check. Currently supported protocols are 'HTTP', 'HTTPS' and 'TCP'.",
        default: undefined,
      })
      .option('success', {
        type: 'boolean',
        description: 'Whether the API call was successful.',
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
      .choices('result-http-config-method', ['GET', 'HEAD'] as const)
      .choices('result-tcp-config-method', ['connection_established'] as const) as Argv<UpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<UpdateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.healthcheckId as string | undefined, 'healthcheckId');

      if (argv.dryRun) {
        formatDryRun({
          command: 'cf zones healthchecks update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/smart_shield/healthchecks/${argv.healthcheckId ?? '<healthcheckId>'}`,
          pathParams: { healthcheckId: String(argv.healthcheckId ?? ''), zoneId: String(argv.zoneId ?? '') },
          body: {
            resultAddress: argv.resultAddress,
            resultCheckRegions: argv.resultCheckRegions,
            resultConsecutiveFails: argv.resultConsecutiveFails,
            resultConsecutiveSuccesses: argv.resultConsecutiveSuccesses,
            resultDescription: argv.resultDescription,
            resultHttpConfigAllowInsecure: argv.resultHttpConfigAllowInsecure,
            resultHttpConfigExpectedBody: argv.resultHttpConfigExpectedBody,
            resultHttpConfigExpectedCodes: argv.resultHttpConfigExpectedCodes,
            resultHttpConfigFollowRedirects: argv.resultHttpConfigFollowRedirects,
            resultHttpConfigMethod: argv.resultHttpConfigMethod,
            resultHttpConfigPath: argv.resultHttpConfigPath,
            resultHttpConfigPort: argv.resultHttpConfigPort,
            resultInterval: argv.resultInterval,
            resultName: argv.resultName,
            resultRetries: argv.resultRetries,
            resultSuspended: argv.resultSuspended,
            resultTcpConfigMethod: argv.resultTcpConfigMethod,
            resultTcpConfigPort: argv.resultTcpConfigPort,
            resultTimeout: argv.resultTimeout,
            resultType: argv.resultType,
            success: argv.success,
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
      const zoneId = await getZoneId({ zone: argv.zone }, client, { quiet: argv.quiet });

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.put<unknown>(
          `/zones/${argv.zoneId}/smart_shield/healthchecks/${argv.healthcheckId}`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.resultAddress !== undefined) setNestedValue(bodyData, ['result', 'address'], argv.resultAddress);
      if (argv.resultCheckRegions !== undefined)
        setNestedValue(bodyData, ['result', 'check_regions'], argv.resultCheckRegions);
      if (argv.resultConsecutiveFails !== undefined)
        setNestedValue(bodyData, ['result', 'consecutive_fails'], argv.resultConsecutiveFails);
      if (argv.resultConsecutiveSuccesses !== undefined)
        setNestedValue(bodyData, ['result', 'consecutive_successes'], argv.resultConsecutiveSuccesses);
      if (argv.resultDescription !== undefined)
        setNestedValue(bodyData, ['result', 'description'], argv.resultDescription);
      if (argv.resultHttpConfigAllowInsecure !== undefined)
        setNestedValue(bodyData, ['result', 'http_config', 'allow_insecure'], argv.resultHttpConfigAllowInsecure);
      if (argv.resultHttpConfigExpectedBody !== undefined)
        setNestedValue(bodyData, ['result', 'http_config', 'expected_body'], argv.resultHttpConfigExpectedBody);
      if (argv.resultHttpConfigExpectedCodes !== undefined)
        setNestedValue(bodyData, ['result', 'http_config', 'expected_codes'], argv.resultHttpConfigExpectedCodes);
      if (argv.resultHttpConfigFollowRedirects !== undefined)
        setNestedValue(bodyData, ['result', 'http_config', 'follow_redirects'], argv.resultHttpConfigFollowRedirects);
      if (argv.resultHttpConfigMethod !== undefined)
        setNestedValue(bodyData, ['result', 'http_config', 'method'], argv.resultHttpConfigMethod);
      if (argv.resultHttpConfigPath !== undefined)
        setNestedValue(bodyData, ['result', 'http_config', 'path'], argv.resultHttpConfigPath);
      if (argv.resultHttpConfigPort !== undefined)
        setNestedValue(bodyData, ['result', 'http_config', 'port'], argv.resultHttpConfigPort);
      if (argv.resultInterval !== undefined) setNestedValue(bodyData, ['result', 'interval'], argv.resultInterval);
      if (argv.resultName !== undefined) setNestedValue(bodyData, ['result', 'name'], argv.resultName);
      if (argv.resultRetries !== undefined) setNestedValue(bodyData, ['result', 'retries'], argv.resultRetries);
      if (argv.resultSuspended !== undefined) setNestedValue(bodyData, ['result', 'suspended'], argv.resultSuspended);
      if (argv.resultTcpConfigMethod !== undefined)
        setNestedValue(bodyData, ['result', 'tcp_config', 'method'], argv.resultTcpConfigMethod);
      if (argv.resultTcpConfigPort !== undefined)
        setNestedValue(bodyData, ['result', 'tcp_config', 'port'], argv.resultTcpConfigPort);
      if (argv.resultTimeout !== undefined) setNestedValue(bodyData, ['result', 'timeout'], argv.resultTimeout);
      if (argv.resultType !== undefined) setNestedValue(bodyData, ['result', 'type'], argv.resultType);
      if (argv.success !== undefined) setNestedValue(bodyData, ['success'], argv.success);
      const result = await client.put<unknown>(
        `/zones/${argv.zoneId}/smart_shield/healthchecks/${argv.healthcheckId}`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
