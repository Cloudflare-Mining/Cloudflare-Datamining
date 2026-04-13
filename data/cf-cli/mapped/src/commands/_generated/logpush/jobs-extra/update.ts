/**
 * update command
 * @generated from apis/logpush/schema.ts
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

interface UpdateArgs {
  jobId: string;
  'destination-conf'?: string;
  enabled?: boolean;
  filter?: string;
  frequency?: string;
  kind?: string;
  'logpull-options'?: string;
  name?: string;
  'output-options-cve-2021-44228'?: boolean;
  'output-options-batch-prefix'?: string;
  'output-options-batch-suffix'?: string;
  'output-options-field-delimiter'?: string;
  'output-options-field-names'?: string;
  'output-options-merge-subrequests'?: boolean;
  'output-options-output-type'?: string;
  'output-options-record-delimiter'?: string;
  'output-options-record-prefix'?: string;
  'output-options-record-suffix'?: string;
  'output-options-record-template'?: string;
  'output-options-sample-rate'?: number;
  'output-options-timestamp-format'?: string;
  'ownership-challenge'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, UpdateArgs> = {
  command: 'update <jobId>',
  describe: 'Updates a Logpush job.',

  builder: (yargs: Argv): Argv<UpdateArgs> => {
    return yargs
      .positional('jobId', {
        type: 'string',
        description: 'Unique id of the job.',
        demandOption: true,
      })
      .option('destination-conf', {
        type: 'string',
        description:
          'Uniquely identifies a resource (such as an s3 bucket) where data. will be pushed. Additional configuration parameters supported by the destination may be included.',
        default: undefined,
      })
      .option('enabled', {
        type: 'boolean',
        description: 'Flag that indicates if the job is enabled.',
        default: false,
      })
      .option('filter', {
        type: 'string',
        description:
          'The filters to select the events to include and/or remove from your logs. For more information, refer to [Filters](https://developers.cloudflare.com/logs/reference/filters/).',
        default: undefined,
      })
      .option('frequency', {
        type: 'string',
        description:
          'This field is deprecated. Please use \`max_upload_*\` parameters instead. . The frequency at which Cloudflare sends batches of logs to your destination. Setting frequency to high sends your logs in larger quantities of smaller files. Setting frequency to low sends logs in smaller quantities of larger files.',
        choices: ['high', 'low'] as const,
        default: undefined,
      })
      .option('kind', {
        type: 'string',
        description:
          'The kind parameter (optional) is used to differentiate between Logpush and Edge Log Delivery jobs (when supported by the dataset).',
        choices: ['edge'] as const,
        default: undefined,
      })
      .option('logpull-options', {
        type: 'string',
        description:
          'This field is deprecated. Use \`output_options\` instead. Configuration string. It specifies things like requested fields and timestamp formats. If migrating from the logpull api, copy the url (full url or just the query string) of your call here, and logpush will keep on making this call for you, setting start and end times appropriately.',
        default: undefined,
      })
      .option('name', {
        type: 'string',
        description:
          'Optional human readable job name. Not unique. Cloudflare suggests. that you set this to a meaningful string, like the domain name, to make it easier to identify your job.',
        default: undefined,
      })
      .option('output-options-cve-2021-44228', {
        type: 'boolean',
        description:
          'If set to true, will cause all occurrences of \`\${\` in the generated files to be replaced with \`x{\`.',
        default: false,
      })
      .option('output-options-batch-prefix', {
        type: 'string',
        description: 'String to be prepended before each batch.',
        default: undefined,
      })
      .option('output-options-batch-suffix', {
        type: 'string',
        description: 'String to be appended after each batch.',
        default: undefined,
      })
      .option('output-options-field-delimiter', {
        type: 'string',
        description: 'String to join fields. This field be ignored when \`record_template\` is set.',
        default: undefined,
      })
      .option('output-options-field-names', {
        type: 'string',
        description:
          'List of field names to be included in the Logpush output. For the moment, there is no option to add all fields at once, so you must specify all the fields names you are interested in.',
        default: undefined,
      })
      .option('output-options-merge-subrequests', {
        type: 'boolean',
        description:
          'If set to true, subrequests will be merged into the parent request. Only supported for the \`http_requests\` dataset.',
        default: false,
      })
      .option('output-options-output-type', {
        type: 'string',
        description:
          'Specifies the output type, such as \`ndjson\` or \`csv\`. This sets default values for the rest of the settings, depending on the chosen output type. Some formatting rules, like string quoting, are different between output types.',
        choices: ['ndjson', 'csv'] as const,
        default: undefined,
      })
      .option('output-options-record-delimiter', {
        type: 'string',
        description: 'String to be inserted in-between the records as separator.',
        default: undefined,
      })
      .option('output-options-record-prefix', {
        type: 'string',
        description: 'String to be prepended before each record.',
        default: undefined,
      })
      .option('output-options-record-suffix', {
        type: 'string',
        description: 'String to be appended after each record.',
        default: undefined,
      })
      .option('output-options-record-template', {
        type: 'string',
        description:
          'String to use as template for each record instead of the default json key value mapping. All fields used in the template must be present in \`field_names\` as well, otherwise they will end up as null. Format as a Go \`text/template\` without any standard functions, like conditionals, loops, sub-templates, etc.',
        default: undefined,
      })
      .option('output-options-sample-rate', {
        type: 'number',
        description:
          'Floating number to specify sampling rate. Sampling is applied on top of filtering, and regardless of the current \`sample_interval\` of the data.',
        default: undefined,
      })
      .option('output-options-timestamp-format', {
        type: 'string',
        description:
          'String to specify the format for timestamps, such as \`unixnano\`, \`unix\`, \`rfc3339\`, \`rfc3339ms\` or \`rfc3339ns\`.',
        choices: ['unixnano', 'unix', 'rfc3339', 'rfc3339ms', 'rfc3339ns'] as const,
        default: undefined,
      })
      .option('ownership-challenge', {
        type: 'string',
        description: 'Ownership challenge token to prove destination ownership.',
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
      .choices('frequency', ['high', 'low'] as const)
      .choices('kind', ['edge'] as const)
      .choices('output-options-output-type', ['ndjson', 'csv'] as const)
      .choices('output-options-timestamp-format', [
        'unixnano',
        'unix',
        'rfc3339',
        'rfc3339ms',
        'rfc3339ns',
      ] as const) as Argv<UpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<UpdateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.jobId as string | undefined, 'jobId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf logpush jobs-extra update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/logpush/jobs/${argv.jobId ?? '<jobId>'}`,
          pathParams: { jobId: String(argv.jobId ?? '') },
          body: {
            destinationConf: argv.destinationConf,
            enabled: argv.enabled,
            filter: argv.filter,
            frequency: argv.frequency,
            kind: argv.kind,
            logpullOptions: argv.logpullOptions,
            name: argv.name,
            outputOptionsCve202144228: argv.outputOptionsCve202144228,
            outputOptionsBatchPrefix: argv.outputOptionsBatchPrefix,
            outputOptionsBatchSuffix: argv.outputOptionsBatchSuffix,
            outputOptionsFieldDelimiter: argv.outputOptionsFieldDelimiter,
            outputOptionsFieldNames: argv.outputOptionsFieldNames,
            outputOptionsMergeSubrequests: argv.outputOptionsMergeSubrequests,
            outputOptionsOutputType: argv.outputOptionsOutputType,
            outputOptionsRecordDelimiter: argv.outputOptionsRecordDelimiter,
            outputOptionsRecordPrefix: argv.outputOptionsRecordPrefix,
            outputOptionsRecordSuffix: argv.outputOptionsRecordSuffix,
            outputOptionsRecordTemplate: argv.outputOptionsRecordTemplate,
            outputOptionsSampleRate: argv.outputOptionsSampleRate,
            outputOptionsTimestampFormat: argv.outputOptionsTimestampFormat,
            ownershipChallenge: argv.ownershipChallenge,
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
        const result = await client.put<unknown>(`/accounts/${accountId}/logpush/jobs/${argv.jobId}`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.destinationConf !== undefined) setNestedValue(bodyData, ['destination_conf'], argv.destinationConf);
      if (argv.enabled !== undefined) setNestedValue(bodyData, ['enabled'], argv.enabled);
      if (argv.filter !== undefined) setNestedValue(bodyData, ['filter'], argv.filter);
      if (argv.frequency !== undefined) setNestedValue(bodyData, ['frequency'], argv.frequency);
      if (argv.kind !== undefined) setNestedValue(bodyData, ['kind'], argv.kind);
      if (argv.logpullOptions !== undefined) setNestedValue(bodyData, ['logpull_options'], argv.logpullOptions);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.outputOptionsCve202144228 !== undefined)
        setNestedValue(bodyData, ['output_options', 'CVE-2021-44228'], argv.outputOptionsCve202144228);
      if (argv.outputOptionsBatchPrefix !== undefined)
        setNestedValue(bodyData, ['output_options', 'batch_prefix'], argv.outputOptionsBatchPrefix);
      if (argv.outputOptionsBatchSuffix !== undefined)
        setNestedValue(bodyData, ['output_options', 'batch_suffix'], argv.outputOptionsBatchSuffix);
      if (argv.outputOptionsFieldDelimiter !== undefined)
        setNestedValue(bodyData, ['output_options', 'field_delimiter'], argv.outputOptionsFieldDelimiter);
      if (argv.outputOptionsFieldNames !== undefined)
        setNestedValue(bodyData, ['output_options', 'field_names'], argv.outputOptionsFieldNames);
      if (argv.outputOptionsMergeSubrequests !== undefined)
        setNestedValue(bodyData, ['output_options', 'merge_subrequests'], argv.outputOptionsMergeSubrequests);
      if (argv.outputOptionsOutputType !== undefined)
        setNestedValue(bodyData, ['output_options', 'output_type'], argv.outputOptionsOutputType);
      if (argv.outputOptionsRecordDelimiter !== undefined)
        setNestedValue(bodyData, ['output_options', 'record_delimiter'], argv.outputOptionsRecordDelimiter);
      if (argv.outputOptionsRecordPrefix !== undefined)
        setNestedValue(bodyData, ['output_options', 'record_prefix'], argv.outputOptionsRecordPrefix);
      if (argv.outputOptionsRecordSuffix !== undefined)
        setNestedValue(bodyData, ['output_options', 'record_suffix'], argv.outputOptionsRecordSuffix);
      if (argv.outputOptionsRecordTemplate !== undefined)
        setNestedValue(bodyData, ['output_options', 'record_template'], argv.outputOptionsRecordTemplate);
      if (argv.outputOptionsSampleRate !== undefined)
        setNestedValue(bodyData, ['output_options', 'sample_rate'], argv.outputOptionsSampleRate);
      if (argv.outputOptionsTimestampFormat !== undefined)
        setNestedValue(bodyData, ['output_options', 'timestamp_format'], argv.outputOptionsTimestampFormat);
      if (argv.ownershipChallenge !== undefined)
        setNestedValue(bodyData, ['ownership_challenge'], argv.ownershipChallenge);
      const result = await client.put<unknown>(`/accounts/${accountId}/logpush/jobs/${argv.jobId}`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
