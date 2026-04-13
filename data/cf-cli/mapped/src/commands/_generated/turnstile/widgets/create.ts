/**
 * create command
 * @generated from apis/turnstile/schema.ts
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
  'bot-fight-mode'?: boolean;
  'clearance-level'?: string;
  domains: string;
  'ephemeral-id'?: boolean;
  mode: string;
  name: string;
  offlabel?: boolean;
  region?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, CreateArgs> = {
  command: 'create',
  describe: 'Lists challenge widgets.',

  builder: (yargs: Argv): Argv<CreateArgs> => {
    return yargs
      .option('bot-fight-mode', {
        type: 'boolean',
        description:
          'If bot_fight_mode is set to \`true\`, Cloudflare issues computationally expensive challenges in response to malicious bots (ENT only). ',
        default: false,
      })
      .option('clearance-level', {
        type: 'string',
        description:
          'If Turnstile is embedded on a Cloudflare site and the widget should grant challenge clearance, this setting can determine the clearance level to be set ',
        choices: ['no_clearance', 'jschallenge', 'managed', 'interactive'] as const,
        default: undefined,
      })
      .option('domains', {
        type: 'string',
        description: 'The domains field',
      })
      .option('ephemeral-id', {
        type: 'boolean',
        description: 'Return the Ephemeral ID in /siteverify (ENT only). ',
        default: false,
      })
      .option('mode', {
        type: 'string',
        description: 'Widget Mode',
        choices: ['non-interactive', 'invisible', 'managed'] as const,
      })
      .option('name', {
        type: 'string',
        description:
          'Human readable widget name. Not unique. Cloudflare suggests that you set this to a meaningful string to make it easier to identify your widget, and where it is used. ',
      })
      .option('offlabel', {
        type: 'boolean',
        description: 'Do not show any Cloudflare branding on the widget (ENT only). ',
        default: false,
      })
      .option('region', {
        type: 'string',
        description: 'Region where this widget can be used. This cannot be changed after creation. ',
        choices: ['world', 'china'] as const,
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
      .choices('clearance-level', ['no_clearance', 'jschallenge', 'managed', 'interactive'] as const)
      .choices('mode', ['non-interactive', 'invisible', 'managed'] as const)
      .choices('region', ['world', 'china'] as const) as Argv<CreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf turnstile widgets create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/challenges/widgets`,
          pathParams: {},
          body: {
            botFightMode: argv.botFightMode,
            clearanceLevel: argv.clearanceLevel,
            domains: argv.domains,
            ephemeralId: argv.ephemeralId,
            mode: argv.mode,
            name: argv.name,
            offlabel: argv.offlabel,
            region: argv.region,
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
        const result = await client.post<unknown>(`/accounts/${accountId}/challenges/widgets`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.botFightMode !== undefined) setNestedValue(bodyData, ['bot_fight_mode'], argv.botFightMode);
      if (argv.clearanceLevel !== undefined) setNestedValue(bodyData, ['clearance_level'], argv.clearanceLevel);
      if (argv.domains !== undefined) setNestedValue(bodyData, ['domains'], argv.domains);
      if (argv.ephemeralId !== undefined) setNestedValue(bodyData, ['ephemeral_id'], argv.ephemeralId);
      if (argv.mode !== undefined) setNestedValue(bodyData, ['mode'], argv.mode);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.offlabel !== undefined) setNestedValue(bodyData, ['offlabel'], argv.offlabel);
      if (argv.region !== undefined) setNestedValue(bodyData, ['region'], argv.region);
      const result = await client.post<unknown>(`/accounts/${accountId}/challenges/widgets`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
