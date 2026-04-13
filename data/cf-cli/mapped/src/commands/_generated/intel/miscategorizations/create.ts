/**
 * create command
 * @generated from apis/intel/schema.ts
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
  'content-adds'?: string;
  'content-removes'?: string;
  'indicator-type'?: string;
  ip?: string;
  'security-adds'?: string;
  'security-removes'?: string;
  url?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, CreateArgs> = {
  command: 'create',
  describe: 'Allows you to submit requests to change a domain’s category.',

  builder: (yargs: Argv): Argv<CreateArgs> => {
    return yargs
      .option('content-adds', {
        type: 'string',
        description: 'Content category IDs to add.',
        default: undefined,
      })
      .option('content-removes', {
        type: 'string',
        description: 'Content category IDs to remove.',
        default: undefined,
      })
      .option('indicator-type', {
        type: 'string',
        description: 'The indicator_type field',
        choices: ['domain', 'ipv4', 'ipv6', 'url'] as const,
        default: undefined,
      })
      .option('ip', {
        type: 'string',
        description: 'Provide only if indicator_type is \`ipv4\` or \`ipv6\`.',
        default: undefined,
      })
      .option('security-adds', {
        type: 'string',
        description: 'Security category IDs to add.',
        default: undefined,
      })
      .option('security-removes', {
        type: 'string',
        description: 'Security category IDs to remove.',
        default: undefined,
      })
      .option('url', {
        type: 'string',
        description:
          'Provide only if indicator_type is \`domain\` or \`url\`. Example if indicator_type is \`domain\`: \`example.com\`. Example if indicator_type is \`url\`: \`https://example.com/news/\`.',
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
      .choices('indicator-type', ['domain', 'ipv4', 'ipv6', 'url'] as const) as Argv<CreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf intel miscategorizations create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/intel/miscategorization`,
          pathParams: {},
          body: {
            contentAdds: argv.contentAdds,
            contentRemoves: argv.contentRemoves,
            indicatorType: argv.indicatorType,
            ip: argv.ip,
            securityAdds: argv.securityAdds,
            securityRemoves: argv.securityRemoves,
            url: argv.url,
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
        const result = await client.post<unknown>(`/accounts/${accountId}/intel/miscategorization`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.contentAdds !== undefined) setNestedValue(bodyData, ['content_adds'], argv.contentAdds);
      if (argv.contentRemoves !== undefined) setNestedValue(bodyData, ['content_removes'], argv.contentRemoves);
      if (argv.indicatorType !== undefined) setNestedValue(bodyData, ['indicator_type'], argv.indicatorType);
      if (argv.ip !== undefined) setNestedValue(bodyData, ['ip'], argv.ip);
      if (argv.securityAdds !== undefined) setNestedValue(bodyData, ['security_adds'], argv.securityAdds);
      if (argv.securityRemoves !== undefined) setNestedValue(bodyData, ['security_removes'], argv.securityRemoves);
      if (argv.url !== undefined) setNestedValue(bodyData, ['url'], argv.url);
      const result = await client.post<unknown>(`/accounts/${accountId}/intel/miscategorization`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
