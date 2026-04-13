/**
 * create command
 * @generated from apis/magic-transit/schema.ts
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
  description?: string;
  nexthop: string;
  prefix: string;
  priority: number;
  'scope-colo-names'?: string;
  'scope-colo-regions'?: string;
  weight?: number;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, CreateArgs> = {
  command: 'create',
  describe:
    'Creates a new Magic static route. Use \`?validate_only=true\` as an optional query parameter to run validation only without persisting changes.',

  builder: (yargs: Argv): Argv<CreateArgs> => {
    return yargs
      .option('description', {
        type: 'string',
        description: 'An optional human provided description of the static route.',
        default: undefined,
      })
      .option('nexthop', {
        type: 'string',
        description: 'The next-hop IP Address for the static route.',
      })
      .option('prefix', {
        type: 'string',
        description: 'IP Prefix in Classless Inter-Domain Routing format.',
      })
      .option('priority', {
        type: 'number',
        description: 'Priority of the static route.',
      })
      .option('scope-colo-names', {
        type: 'string',
        description: 'List of colo names for the ECMP scope.',
        default: undefined,
      })
      .option('scope-colo-regions', {
        type: 'string',
        description: 'List of colo regions for the ECMP scope.',
        default: undefined,
      })
      .option('weight', {
        type: 'number',
        description: 'Optional weight of the ECMP scope - if provided.',
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
          command: 'cf magic-transit routes create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/magic/routes`,
          pathParams: {},
          body: {
            description: argv.description,
            nexthop: argv.nexthop,
            prefix: argv.prefix,
            priority: argv.priority,
            scopeColoNames: argv.scopeColoNames,
            scopeColoRegions: argv.scopeColoRegions,
            weight: argv.weight,
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
        const result = await client.post<unknown>(`/accounts/${accountId}/magic/routes`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.description !== undefined) setNestedValue(bodyData, ['description'], argv.description);
      if (argv.nexthop !== undefined) setNestedValue(bodyData, ['nexthop'], argv.nexthop);
      if (argv.prefix !== undefined) setNestedValue(bodyData, ['prefix'], argv.prefix);
      if (argv.priority !== undefined) setNestedValue(bodyData, ['priority'], argv.priority);
      if (argv.scopeColoNames !== undefined) setNestedValue(bodyData, ['scope', 'colo_names'], argv.scopeColoNames);
      if (argv.scopeColoRegions !== undefined)
        setNestedValue(bodyData, ['scope', 'colo_regions'], argv.scopeColoRegions);
      if (argv.weight !== undefined) setNestedValue(bodyData, ['weight'], argv.weight);
      const result = await client.post<unknown>(`/accounts/${accountId}/magic/routes`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
