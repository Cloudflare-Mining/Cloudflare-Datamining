/**
 * type-get command
 * @generated from apis/security-center/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface TypeGetArgs {
  zoneId?: string;
  dismissed?: string;
  'issue-class'?: string;
  'issue-type'?: string;
  product?: string;
  severity?: string;
  subject?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, TypeGetArgs> = {
  command: 'type-get [zoneId]',
  describe: 'Retrieves zone-specific Security Center insight counts aggregated by insight type.',

  builder: (yargs: Argv): Argv<TypeGetArgs> => {
    return yargs
      .positional('zoneId', {
        type: 'string',
        description: 'Identifier. (or use --zone flag)',
      })
      .option('dismissed', {
        type: 'string',
        description: 'Dismissed',
        default: undefined,
      })
      .option('issue-class', {
        type: 'string',
        description: 'Issue class',
        default: undefined,
      })
      .option('issue-type', {
        type: 'string',
        description: 'Issue type',
        default: undefined,
      })
      .option('product', {
        type: 'string',
        description: 'Product',
        default: undefined,
      })
      .option('severity', {
        type: 'string',
        description: 'Severity',
        default: undefined,
      })
      .option('subject', {
        type: 'string',
        description: 'Subject',
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
      }) as Argv<TypeGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<TypeGetArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.dismissed !== undefined) params['dismissed'] = argv.dismissed;
      if (argv.issueClass !== undefined) params['issue_class'] = argv.issueClass;
      if (argv.issueType !== undefined) params['issue_type'] = argv.issueType;
      if (argv.product !== undefined) params['product'] = argv.product;
      if (argv.severity !== undefined) params['severity'] = argv.severity;
      if (argv.subject !== undefined) params['subject'] = argv.subject;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const zoneId = await getZoneId({ zone: argv.zone, zoneId: argv.zoneId }, client, { quiet: argv.quiet });

      const result = await client.securityCenter.insightsextra.typeGet(
        zoneId,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
