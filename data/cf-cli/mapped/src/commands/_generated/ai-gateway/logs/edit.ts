/**
 * edit command
 * @generated from apis/ai-gateway/schema.ts
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

interface EditArgs {
  id: string;
  gatewayId: string;
  feedback?: number;
  score?: number;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, EditArgs> = {
  command: 'edit <id> <gatewayId>',
  describe: 'Updates metadata for an AI Gateway log entry.',

  builder: (yargs: Argv): Argv<EditArgs> => {
    return yargs
      .positional('id', {
        type: 'string',
        description: 'ID',
        demandOption: true,
      })
      .positional('gatewayId', {
        type: 'string',
        description: 'gateway id',
        demandOption: true,
      })
      .option('feedback', {
        type: 'number',
        description: 'The feedback field',
        default: undefined,
      })
      .option('score', {
        type: 'number',
        description: 'The score field',
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
      }) as Argv<EditArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<EditArgs>): Promise<void> => {
    try {
      validateResourceId(argv.id as string | undefined, 'id');
      validateResourceId(argv.gatewayId as string | undefined, 'gatewayId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf ai-gateway logs edit',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/ai-gateway/gateways/${argv.gatewayId ?? '<gatewayId>'}/logs/${argv.id ?? '<id>'}`,
          pathParams: { id: String(argv.id ?? ''), gatewayId: String(argv.gatewayId ?? '') },
          body: { feedback: argv.feedback, score: argv.score },
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
          `/accounts/${accountId}/ai-gateway/gateways/${argv.gatewayId}/logs/${argv.id}`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.feedback !== undefined) setNestedValue(bodyData, ['feedback'], argv.feedback);
      if (argv.score !== undefined) setNestedValue(bodyData, ['score'], argv.score);
      const result = await client.patch<unknown>(
        `/accounts/${accountId}/ai-gateway/gateways/${argv.gatewayId}/logs/${argv.id}`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
