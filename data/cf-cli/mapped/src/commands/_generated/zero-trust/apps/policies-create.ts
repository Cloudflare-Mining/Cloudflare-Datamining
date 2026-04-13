/**
 * policies-create command
 * @generated from apis/zero-trust/schema.ts
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

interface PoliciesCreateArgs {
  appId: string;
  zoneId: string;
  'approval-required'?: boolean;
  decision: string;
  'isolation-required'?: boolean;
  name: string;
  precedence?: number;
  'purpose-justification-prompt'?: string;
  'purpose-justification-required'?: boolean;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, PoliciesCreateArgs> = {
  command: 'policies-create <appId> [zoneId]',
  describe: 'Create a new Access policy for an application.',

  builder: (yargs: Argv): Argv<PoliciesCreateArgs> => {
    return yargs
      .positional('appId', {
        type: 'string',
        description: 'UUID.',
        demandOption: true,
      })
      .positional('zoneId', {
        type: 'string',
        description: 'Identifier. (or use --zone flag)',
      })
      .option('approval-required', {
        type: 'boolean',
        description: 'Requires the user to request access from an administrator at the start of each session.',
        default: false,
      })
      .option('decision', {
        type: 'string',
        description: 'The action Access will take if a user matches this policy.',
        choices: ['allow', 'deny', 'non_identity', 'bypass'] as const,
      })
      .option('isolation-required', {
        type: 'boolean',
        description: 'Require this application to be served in an isolated browser for users matching this policy.',
        default: false,
      })
      .option('name', {
        type: 'string',
        description: 'The name of the Access policy.',
      })
      .option('precedence', {
        type: 'number',
        description: 'The order of execution for this policy. Must be unique for each policy.',
        default: undefined,
      })
      .option('purpose-justification-prompt', {
        type: 'string',
        description: 'A custom message that will appear on the purpose justification screen.',
        default: undefined,
      })
      .option('purpose-justification-required', {
        type: 'boolean',
        description: 'Require users to enter a justification when they log in to the application.',
        default: false,
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
      .choices('decision', ['allow', 'deny', 'non_identity', 'bypass'] as const) as Argv<PoliciesCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<PoliciesCreateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.appId as string | undefined, 'appId');

      if (argv.dryRun) {
        formatDryRun({
          command: 'cf zero-trust apps policies-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/access/apps/${argv.appId ?? '<appId>'}/policies`,
          pathParams: { appId: String(argv.appId ?? ''), zoneId: String(argv.zoneId ?? '') },
          body: {
            approvalRequired: argv.approvalRequired,
            decision: argv.decision,
            isolationRequired: argv.isolationRequired,
            name: argv.name,
            precedence: argv.precedence,
            purposeJustificationPrompt: argv.purposeJustificationPrompt,
            purposeJustificationRequired: argv.purposeJustificationRequired,
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
        const result = await client.post<unknown>(`/zones/${argv.zoneId}/access/apps/${argv.appId}/policies`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.approvalRequired !== undefined) setNestedValue(bodyData, ['approval_required'], argv.approvalRequired);
      if (argv.decision !== undefined) setNestedValue(bodyData, ['decision'], argv.decision);
      if (argv.isolationRequired !== undefined)
        setNestedValue(bodyData, ['isolation_required'], argv.isolationRequired);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.precedence !== undefined) setNestedValue(bodyData, ['precedence'], argv.precedence);
      if (argv.purposeJustificationPrompt !== undefined)
        setNestedValue(bodyData, ['purpose_justification_prompt'], argv.purposeJustificationPrompt);
      if (argv.purposeJustificationRequired !== undefined)
        setNestedValue(bodyData, ['purpose_justification_required'], argv.purposeJustificationRequired);
      const result = await client.post<unknown>(`/zones/${argv.zoneId}/access/apps/${argv.appId}/policies`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
