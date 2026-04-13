/**
 * create command
 * @generated from apis/rate-limits/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../lib/auth.js';
import { getDefaultHeaders } from '../../../lib/request-headers.js';
import { handleError } from '../../../lib/errors.js';
import { formatOutput } from '../../../lib/output.js';
import { validateResourceId } from '../../../lib/input-validation.js';
import { formatDryRun } from '../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../lib/body-parser.js';

interface CreateArgs {
  zoneId?: string;
  'match-request-methods'?: string;
  'match-request-schemes'?: string;
  'match-request-url'?: string;
  'match-response-origin-traffic'?: boolean;
  period: number;
  threshold: number;
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
  describe: 'Creates a new rate limit for a zone. Refer to the object definition for a list of required attributes.',

  builder: (yargs: Argv): Argv<CreateArgs> => {
    return yargs
      .positional('zoneId', {
        type: 'string',
        description: 'Defines an identifier. (or use --zone flag)',
      })
      .option('match-request-methods', {
        type: 'string',
        description:
          "The HTTP methods to match. You can specify a subset (for example, \`['POST','PUT']\`) or all methods (\`['_ALL_']\`). This field is optional when creating a rate limit.",
        default: undefined,
      })
      .option('match-request-schemes', {
        type: 'string',
        description:
          "The HTTP schemes to match. You can specify one scheme (\`['HTTPS']\`), both schemes (\`['HTTP','HTTPS']\`), or all schemes (\`['_ALL_']\`). This field is optional.",
        default: undefined,
      })
      .option('match-request-url', {
        type: 'string',
        description:
          'The URL pattern to match, composed of a host and a path such as \`example.org/path*\`. Normalization is applied before the pattern is matched. \`*\` wildcards are expanded to match applicable traffic. Query strings are not matched. Set the value to \`*\` to match all traffic to your zone.',
        default: undefined,
      })
      .option('match-response-origin-traffic', {
        type: 'boolean',
        description:
          'When true, only the uncached traffic served from your origin servers will count towards rate limiting. In this case, any cached traffic served by Cloudflare will not count towards rate limiting. This field is optional. Notes: This field is deprecated. Instead, use response headers and set "origin_traffic" to "false" to avoid legacy behaviour interacting with the "response_headers" property.',
        default: false,
      })
      .option('period', {
        type: 'number',
        description:
          'The time in seconds (an integer value) to count matching traffic. If the count exceeds the configured threshold within this period, Cloudflare will perform the configured action.',
      })
      .option('threshold', {
        type: 'number',
        description:
          'The threshold that will trigger the configured mitigation action. Configure this value along with the \`period\` property to establish a threshold per period.',
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
        formatDryRun({
          command: 'cf rate-limits create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/rate_limits`,
          pathParams: { zoneId: String(argv.zoneId ?? '') },
          body: {
            matchRequestMethods: argv.matchRequestMethods,
            matchRequestSchemes: argv.matchRequestSchemes,
            matchRequestUrl: argv.matchRequestUrl,
            matchResponseOriginTraffic: argv.matchResponseOriginTraffic,
            period: argv.period,
            threshold: argv.threshold,
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
        const result = await client.post<unknown>(`/zones/${zoneId}/rate_limits`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.matchRequestMethods !== undefined)
        setNestedValue(bodyData, ['match', 'request', 'methods'], argv.matchRequestMethods);
      if (argv.matchRequestSchemes !== undefined)
        setNestedValue(bodyData, ['match', 'request', 'schemes'], argv.matchRequestSchemes);
      if (argv.matchRequestUrl !== undefined)
        setNestedValue(bodyData, ['match', 'request', 'url'], argv.matchRequestUrl);
      if (argv.matchResponseOriginTraffic !== undefined)
        setNestedValue(bodyData, ['match', 'response', 'origin_traffic'], argv.matchResponseOriginTraffic);
      if (argv.period !== undefined) setNestedValue(bodyData, ['period'], argv.period);
      if (argv.threshold !== undefined) setNestedValue(bodyData, ['threshold'], argv.threshold);
      const result = await client.post<unknown>(`/zones/${zoneId}/rate_limits`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
