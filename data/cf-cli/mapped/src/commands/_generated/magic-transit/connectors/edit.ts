/**
 * edit command
 * @generated from apis/magic-transit/schema.ts
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
  connectorId: string;
  activated?: boolean;
  'interrupt-window-days-of-week'?: string;
  'interrupt-window-duration-hours'?: number;
  'interrupt-window-embargo-dates'?: string;
  'interrupt-window-hour-of-day'?: number;
  notes?: string;
  timezone?: string;
  'provision-license'?: boolean;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, EditArgs> = {
  command: 'edit <connectorId>',
  describe: 'Updates the configuration of an existing Magic WAN Connector, such as network settings or policies.',

  builder: (yargs: Argv): Argv<EditArgs> => {
    return yargs
      .positional('connectorId', {
        type: 'string',
        description: 'Connector ID',
        demandOption: true,
      })
      .option('activated', {
        type: 'boolean',
        description: 'The activated field',
        default: false,
      })
      .option('interrupt-window-days-of-week', {
        type: 'string',
        description: 'Allowed days of the week for upgrades. Default is all days.',
        default: undefined,
      })
      .option('interrupt-window-duration-hours', {
        type: 'number',
        description: 'The interrupt_window_duration_hours field',
        default: undefined,
      })
      .option('interrupt-window-embargo-dates', {
        type: 'string',
        description: 'List of dates (YYYY-MM-DD) when upgrades are blocked.',
        default: undefined,
      })
      .option('interrupt-window-hour-of-day', {
        type: 'number',
        description: 'The interrupt_window_hour_of_day field',
        default: undefined,
      })
      .option('notes', {
        type: 'string',
        description: 'The notes field',
        default: undefined,
      })
      .option('timezone', {
        type: 'string',
        description: 'The timezone field',
        default: undefined,
      })
      .option('provision-license', {
        type: 'boolean',
        description: 'When true, regenerate license key for the connector.',
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
      }) as Argv<EditArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<EditArgs>): Promise<void> => {
    try {
      validateResourceId(argv.connectorId as string | undefined, 'connectorId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf magic-transit connectors edit',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/magic/connectors/${argv.connectorId ?? '<connectorId>'}`,
          pathParams: { connectorId: String(argv.connectorId ?? '') },
          body: {
            activated: argv.activated,
            interruptWindowDaysOfWeek: argv.interruptWindowDaysOfWeek,
            interruptWindowDurationHours: argv.interruptWindowDurationHours,
            interruptWindowEmbargoDates: argv.interruptWindowEmbargoDates,
            interruptWindowHourOfDay: argv.interruptWindowHourOfDay,
            notes: argv.notes,
            timezone: argv.timezone,
            provisionLicense: argv.provisionLicense,
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
        const result = await client.patch<unknown>(`/accounts/${accountId}/magic/connectors/${argv.connectorId}`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.activated !== undefined) setNestedValue(bodyData, ['activated'], argv.activated);
      if (argv.interruptWindowDaysOfWeek !== undefined)
        setNestedValue(bodyData, ['interrupt_window_days_of_week'], argv.interruptWindowDaysOfWeek);
      if (argv.interruptWindowDurationHours !== undefined)
        setNestedValue(bodyData, ['interrupt_window_duration_hours'], argv.interruptWindowDurationHours);
      if (argv.interruptWindowEmbargoDates !== undefined)
        setNestedValue(bodyData, ['interrupt_window_embargo_dates'], argv.interruptWindowEmbargoDates);
      if (argv.interruptWindowHourOfDay !== undefined)
        setNestedValue(bodyData, ['interrupt_window_hour_of_day'], argv.interruptWindowHourOfDay);
      if (argv.notes !== undefined) setNestedValue(bodyData, ['notes'], argv.notes);
      if (argv.timezone !== undefined) setNestedValue(bodyData, ['timezone'], argv.timezone);
      if (argv.provisionLicense !== undefined) setNestedValue(bodyData, ['provision_license'], argv.provisionLicense);
      const result = await client.patch<unknown>(`/accounts/${accountId}/magic/connectors/${argv.connectorId}`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
