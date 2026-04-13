/**
 * create command
 * @generated from apis/abuse-reports/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../lib/auth.js';
import { getDefaultHeaders } from '../../../lib/request-headers.js';
import { handleError } from '../../../lib/errors.js';
import { formatOutput } from '../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../lib/input-validation.js';
import { formatDryRun } from '../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../lib/body-parser.js';

interface CreateArgs {
  reportParam: string;
  comments?: string;
  company?: string;
  email: string;
  email2: string;
  name: string;
  'reported-country'?: string;
  'reported-user-agent'?: string;
  tele?: string;
  title?: string;
  urls: string;
  address1?: string;
  'agent-name'?: string;
  agree?: number;
  city?: string;
  country?: string;
  'host-notification'?: string;
  'original-work'?: string;
  'owner-notification': string;
  signature?: string;
  state?: string;
  justification?: string;
  'trademark-number'?: string;
  'trademark-office'?: string;
  'trademark-symbol'?: string;
  'destination-ips'?: string;
  'ports-protocols'?: string;
  'source-ips'?: string;
  'ncmec-notification'?: string;
  'ncsei-subject-representation'?: boolean;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, CreateArgs> = {
  command: 'create <reportParam>',
  describe: 'Submit the Abuse Report of a particular type',

  builder: (yargs: Argv): Argv<CreateArgs> => {
    return yargs
      .positional('reportParam', {
        type: 'string',
        description: 'The report type to be submitted. Example: abuse_general',
        demandOption: true,
      })
      .option('comments', {
        type: 'string',
        description: 'Any additional comments about the infringement not exceeding 2000 characters',
        default: undefined,
      })
      .option('company', {
        type: 'string',
        description:
          'Text not exceeding 100 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
        default: undefined,
      })
      .option('email', {
        type: 'string',
        description:
          'A valid email of the abuse reporter. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
      })
      .option('email2', {
        type: 'string',
        description: 'Should match the value provided in \`email\`',
      })
      .option('name', {
        type: 'string',
        description:
          'Text not exceeding 255 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
      })
      .option('reported-country', {
        type: 'string',
        description: 'Text containing 2 characters',
        default: undefined,
      })
      .option('reported-user-agent', {
        type: 'string',
        description: 'Text not exceeding 255 characters',
        default: undefined,
      })
      .option('tele', {
        type: 'string',
        description:
          'Text not exceeding 20 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
        default: undefined,
      })
      .option('title', {
        type: 'string',
        description: 'Text not exceeding 255 characters',
        default: undefined,
      })
      .option('urls', {
        type: 'string',
        description:
          'A list of valid URLs separated by ‘\\n’ (new line character). The list of the URLs should not exceed 250 URLs. All URLs should have the same hostname. Each URL should be unique. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
      })
      .option('address1', {
        type: 'string',
        description:
          'Text not exceeding 100 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
        default: undefined,
      })
      .option('agent-name', {
        type: 'string',
        description:
          'The name of the copyright holder. Text not exceeding 60 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
        default: undefined,
      })
      .option('agree', {
        type: 'number',
        description: 'Can be \`0\` for false or \`1\` for true. Must be value: 1 for DMCA reports',
        default: undefined,
      })
      .option('city', {
        type: 'string',
        description:
          'Text not exceeding 255 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
        default: undefined,
      })
      .option('country', {
        type: 'string',
        description:
          'Text not exceeding 255 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/). ',
        default: undefined,
      })
      .option('host-notification', {
        type: 'string',
        description:
          'Notification type based on the abuse type. NOTE: Copyright (DMCA) and Trademark reports cannot be anonymous. ',
        choices: ['send'] as const,
        default: undefined,
      })
      .option('original-work', {
        type: 'string',
        description:
          'Text not exceeding 255 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/). ',
        default: undefined,
      })
      .option('owner-notification', {
        type: 'string',
        description:
          'Notification type based on the abuse type. NOTE: Copyright (DMCA) and Trademark reports cannot be anonymous. ',
        choices: ['send'] as const,
      })
      .option('signature', {
        type: 'string',
        description:
          "Required for DMCA reports, should be same as Name. An affirmation that all information in the report is true and accurate while agreeing to the policies of Cloudflare's abuse reports",
        default: undefined,
      })
      .option('state', {
        type: 'string',
        description:
          'Text not exceeding 255 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
        default: undefined,
      })
      .option('justification', {
        type: 'string',
        description:
          'A detailed description of the infringement, including any necessary access details and the exact steps needed to view the content, not exceeding 5000 characters. ',
        default: undefined,
      })
      .option('trademark-number', {
        type: 'string',
        description: 'Text not exceeding 1000 characters',
        default: undefined,
      })
      .option('trademark-office', {
        type: 'string',
        description: 'Text not exceeding 1000 characters',
        default: undefined,
      })
      .option('trademark-symbol', {
        type: 'string',
        description: 'Text not exceeding 1000 characters',
        default: undefined,
      })
      .option('destination-ips', {
        type: 'string',
        description:
          'A list of IP addresses separated by ‘\\n’ (new line character). The list of destination IPs should not exceed 30 IP addresses. Each one of the IP addresses ought to be unique.',
        default: undefined,
      })
      .option('ports-protocols', {
        type: 'string',
        description:
          'A comma separated list of ports and protocols e.g. 80/TCP, 22/UDP. The total size of the field should not exceed 2000 characters. Each individual port/protocol should not exceed 100 characters. The list should not have more than 30 unique ports and protocols.',
        default: undefined,
      })
      .option('source-ips', {
        type: 'string',
        description:
          'A list of IP addresses separated by ‘\\n’ (new line character). The list of source IPs should not exceed 30 IP addresses. Each one of the IP addresses ought to be unique.',
        default: undefined,
      })
      .option('ncmec-notification', {
        type: 'string',
        description:
          'Notification type based on the abuse type. NOTE: Copyright (DMCA) and Trademark reports cannot be anonymous. ',
        choices: ['send', 'send-anon'] as const,
        default: undefined,
      })
      .option('ncsei-subject-representation', {
        type: 'boolean',
        description: 'If the submitter is the target of NCSEI in the URLs of the abuse report.',
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
      .conflicts('address1', [
        'justification',
        'trademarkNumber',
        'trademarkOffice',
        'trademarkSymbol',
        'destinationIps',
        'portsProtocols',
        'sourceIps',
        'ncmecNotification',
        'ncseiSubjectRepresentation',
      ])
      .implies('address1', [
        'agentName',
        'agree',
        'city',
        'country',
        'hostNotification',
        'originalWork',
        'signature',
        'state',
      ])
      .conflicts('agent-name', [
        'justification',
        'trademarkNumber',
        'trademarkOffice',
        'trademarkSymbol',
        'destinationIps',
        'portsProtocols',
        'sourceIps',
        'ncmecNotification',
        'ncseiSubjectRepresentation',
      ])
      .implies('agent-name', [
        'address1',
        'agree',
        'city',
        'country',
        'hostNotification',
        'originalWork',
        'signature',
        'state',
      ])
      .conflicts('agree', [
        'justification',
        'trademarkNumber',
        'trademarkOffice',
        'trademarkSymbol',
        'destinationIps',
        'portsProtocols',
        'sourceIps',
        'ncmecNotification',
        'ncseiSubjectRepresentation',
      ])
      .implies('agree', [
        'address1',
        'agentName',
        'city',
        'country',
        'hostNotification',
        'originalWork',
        'signature',
        'state',
      ])
      .conflicts('city', [
        'justification',
        'trademarkNumber',
        'trademarkOffice',
        'trademarkSymbol',
        'destinationIps',
        'portsProtocols',
        'sourceIps',
        'ncmecNotification',
        'ncseiSubjectRepresentation',
      ])
      .implies('city', [
        'address1',
        'agentName',
        'agree',
        'country',
        'hostNotification',
        'originalWork',
        'signature',
        'state',
      ])
      .conflicts('country', [
        'justification',
        'trademarkNumber',
        'trademarkOffice',
        'trademarkSymbol',
        'destinationIps',
        'portsProtocols',
        'sourceIps',
        'originalWork',
      ])
      .implies('country', [
        'address1',
        'agentName',
        'agree',
        'city',
        'hostNotification',
        'originalWork',
        'signature',
        'state',
      ])
      .implies('host-notification', [
        'address1',
        'agentName',
        'agree',
        'city',
        'country',
        'originalWork',
        'signature',
        'state',
        'justification',
        'trademarkNumber',
        'trademarkOffice',
        'trademarkSymbol',
        'ncmecNotification',
        'ncseiSubjectRepresentation',
      ])
      .conflicts('original-work', [
        'justification',
        'trademarkNumber',
        'trademarkOffice',
        'trademarkSymbol',
        'destinationIps',
        'portsProtocols',
        'sourceIps',
        'ncmecNotification',
        'ncseiSubjectRepresentation',
        'country',
      ])
      .implies('original-work', [
        'address1',
        'agentName',
        'agree',
        'city',
        'country',
        'hostNotification',
        'signature',
        'state',
      ])
      .conflicts('signature', [
        'justification',
        'trademarkNumber',
        'trademarkOffice',
        'trademarkSymbol',
        'destinationIps',
        'portsProtocols',
        'sourceIps',
        'ncmecNotification',
        'ncseiSubjectRepresentation',
      ])
      .implies('signature', [
        'address1',
        'agentName',
        'agree',
        'city',
        'country',
        'hostNotification',
        'originalWork',
        'state',
      ])
      .conflicts('state', [
        'justification',
        'trademarkNumber',
        'trademarkOffice',
        'trademarkSymbol',
        'destinationIps',
        'portsProtocols',
        'sourceIps',
        'ncmecNotification',
        'ncseiSubjectRepresentation',
      ])
      .implies('state', [
        'address1',
        'agentName',
        'agree',
        'city',
        'country',
        'hostNotification',
        'originalWork',
        'signature',
      ])
      .conflicts('justification', [
        'address1',
        'agentName',
        'agree',
        'city',
        'country',
        'originalWork',
        'signature',
        'state',
        'ncseiSubjectRepresentation',
      ])
      .implies('justification', [
        'hostNotification',
        'trademarkNumber',
        'trademarkOffice',
        'trademarkSymbol',
        'ncmecNotification',
      ])
      .conflicts('trademark-number', [
        'address1',
        'agentName',
        'agree',
        'city',
        'country',
        'originalWork',
        'signature',
        'state',
        'destinationIps',
        'portsProtocols',
        'sourceIps',
        'ncmecNotification',
        'ncseiSubjectRepresentation',
      ])
      .implies('trademark-number', ['hostNotification', 'justification', 'trademarkOffice', 'trademarkSymbol'])
      .conflicts('trademark-office', [
        'address1',
        'agentName',
        'agree',
        'city',
        'country',
        'originalWork',
        'signature',
        'state',
        'destinationIps',
        'portsProtocols',
        'sourceIps',
        'ncmecNotification',
        'ncseiSubjectRepresentation',
      ])
      .implies('trademark-office', ['hostNotification', 'justification', 'trademarkNumber', 'trademarkSymbol'])
      .conflicts('trademark-symbol', [
        'address1',
        'agentName',
        'agree',
        'city',
        'country',
        'originalWork',
        'signature',
        'state',
        'destinationIps',
        'portsProtocols',
        'sourceIps',
        'ncmecNotification',
        'ncseiSubjectRepresentation',
      ])
      .implies('trademark-symbol', ['hostNotification', 'justification', 'trademarkNumber', 'trademarkOffice'])
      .conflicts('destination-ips', [
        'address1',
        'agentName',
        'agree',
        'city',
        'country',
        'originalWork',
        'signature',
        'state',
        'trademarkNumber',
        'trademarkOffice',
        'trademarkSymbol',
        'ncmecNotification',
        'ncseiSubjectRepresentation',
      ])
      .conflicts('ports-protocols', [
        'address1',
        'agentName',
        'agree',
        'city',
        'country',
        'originalWork',
        'signature',
        'state',
        'trademarkNumber',
        'trademarkOffice',
        'trademarkSymbol',
        'ncmecNotification',
        'ncseiSubjectRepresentation',
      ])
      .conflicts('source-ips', [
        'address1',
        'agentName',
        'agree',
        'city',
        'country',
        'originalWork',
        'signature',
        'state',
        'trademarkNumber',
        'trademarkOffice',
        'trademarkSymbol',
        'ncmecNotification',
        'ncseiSubjectRepresentation',
      ])
      .conflicts('ncmec-notification', [
        'address1',
        'agentName',
        'agree',
        'city',
        'originalWork',
        'signature',
        'state',
        'trademarkNumber',
        'trademarkOffice',
        'trademarkSymbol',
        'destinationIps',
        'portsProtocols',
        'sourceIps',
        'ncseiSubjectRepresentation',
      ])
      .implies('ncmec-notification', ['hostNotification', 'justification'])
      .conflicts('ncsei-subject-representation', [
        'address1',
        'agentName',
        'agree',
        'city',
        'originalWork',
        'signature',
        'state',
        'justification',
        'trademarkNumber',
        'trademarkOffice',
        'trademarkSymbol',
        'destinationIps',
        'portsProtocols',
        'sourceIps',
        'ncmecNotification',
      ])
      .implies('ncsei-subject-representation', ['hostNotification'])
      .choices('host-notification', ['send'] as const)
      .choices('owner-notification', ['send'] as const)
      .choices('ncmec-notification', ['send', 'send-anon'] as const) as Argv<CreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CreateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.reportParam as string | undefined, 'reportParam');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf abuse-reports create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/abuse-reports/${argv.reportParam ?? '<reportParam>'}`,
          pathParams: { reportParam: String(argv.reportParam ?? '') },
          body: {
            comments: argv.comments,
            company: argv.company,
            email: argv.email,
            email2: argv.email2,
            name: argv.name,
            reportedCountry: argv.reportedCountry,
            reportedUserAgent: argv.reportedUserAgent,
            tele: argv.tele,
            title: argv.title,
            urls: argv.urls,
            address1: argv.address1,
            agentName: argv.agentName,
            agree: argv.agree,
            city: argv.city,
            country: argv.country,
            hostNotification: argv.hostNotification,
            originalWork: argv.originalWork,
            ownerNotification: argv.ownerNotification,
            signature: argv.signature,
            state: argv.state,
            justification: argv.justification,
            trademarkNumber: argv.trademarkNumber,
            trademarkOffice: argv.trademarkOffice,
            trademarkSymbol: argv.trademarkSymbol,
            destinationIps: argv.destinationIps,
            portsProtocols: argv.portsProtocols,
            sourceIps: argv.sourceIps,
            ncmecNotification: argv.ncmecNotification,
            ncseiSubjectRepresentation: argv.ncseiSubjectRepresentation,
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
        const result = await client.post<unknown>(`/accounts/${accountId}/abuse-reports/${argv.reportParam}`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.comments !== undefined) setNestedValue(bodyData, ['comments'], argv.comments);
      if (argv.company !== undefined) setNestedValue(bodyData, ['company'], argv.company);
      if (argv.email !== undefined) setNestedValue(bodyData, ['email'], argv.email);
      if (argv.email2 !== undefined) setNestedValue(bodyData, ['email2'], argv.email2);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.reportedCountry !== undefined) setNestedValue(bodyData, ['reported_country'], argv.reportedCountry);
      if (argv.reportedUserAgent !== undefined)
        setNestedValue(bodyData, ['reported_user_agent'], argv.reportedUserAgent);
      if (argv.tele !== undefined) setNestedValue(bodyData, ['tele'], argv.tele);
      if (argv.title !== undefined) setNestedValue(bodyData, ['title'], argv.title);
      if (argv.urls !== undefined) setNestedValue(bodyData, ['urls'], argv.urls);
      if (argv.address1 !== undefined) setNestedValue(bodyData, ['address1'], argv.address1);
      if (argv.agentName !== undefined) setNestedValue(bodyData, ['agent_name'], argv.agentName);
      if (argv.agree !== undefined) setNestedValue(bodyData, ['agree'], argv.agree);
      if (argv.city !== undefined) setNestedValue(bodyData, ['city'], argv.city);
      if (argv.country !== undefined) setNestedValue(bodyData, ['country'], argv.country);
      if (argv.hostNotification !== undefined) setNestedValue(bodyData, ['host_notification'], argv.hostNotification);
      if (argv.originalWork !== undefined) setNestedValue(bodyData, ['original_work'], argv.originalWork);
      if (argv.ownerNotification !== undefined)
        setNestedValue(bodyData, ['owner_notification'], argv.ownerNotification);
      if (argv.signature !== undefined) setNestedValue(bodyData, ['signature'], argv.signature);
      if (argv.state !== undefined) setNestedValue(bodyData, ['state'], argv.state);
      if (argv.justification !== undefined) setNestedValue(bodyData, ['justification'], argv.justification);
      if (argv.trademarkNumber !== undefined) setNestedValue(bodyData, ['trademark_number'], argv.trademarkNumber);
      if (argv.trademarkOffice !== undefined) setNestedValue(bodyData, ['trademark_office'], argv.trademarkOffice);
      if (argv.trademarkSymbol !== undefined) setNestedValue(bodyData, ['trademark_symbol'], argv.trademarkSymbol);
      if (argv.destinationIps !== undefined) setNestedValue(bodyData, ['destination_ips'], argv.destinationIps);
      if (argv.portsProtocols !== undefined) setNestedValue(bodyData, ['ports_protocols'], argv.portsProtocols);
      if (argv.sourceIps !== undefined) setNestedValue(bodyData, ['source_ips'], argv.sourceIps);
      if (argv.ncmecNotification !== undefined)
        setNestedValue(bodyData, ['ncmec_notification'], argv.ncmecNotification);
      if (argv.ncseiSubjectRepresentation !== undefined)
        setNestedValue(bodyData, ['ncsei_subject_representation'], argv.ncseiSubjectRepresentation);
      const result = await client.post<unknown>(`/accounts/${accountId}/abuse-reports/${argv.reportParam}`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
