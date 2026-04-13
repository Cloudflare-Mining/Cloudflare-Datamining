/**
 * cf context show
 *
 * Display current context values and their sources
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../lib/auth.js';
import { getConfigFile, loadConfig } from '../../lib/config.js';
import { findProjectConfig, getContext } from '../../lib/context.js';
import { handleError } from '../../lib/errors.js';
import { formatOutput } from '../../lib/output.js';

interface ShowArgs {}

interface Account {
  id: string;
  name: string;
}

interface Zone {
  id: string;
  name: string;
}

/**
 * Fetch account name for display
 */
async function getAccountName(accountId: string, client: Cloudflare): Promise<string | undefined> {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const accounts = (await (client as any).accounts.list()) as Account[];
    const account = accounts.find((a) => a.id === accountId);
    return account?.name;
  } catch {
    return undefined;
  }
}

/**
 * Fetch zone name for display (if we have an ID)
 */
async function getZoneName(zoneIdOrName: string, client: Cloudflare): Promise<string | undefined> {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const zones = (await (client as any).zones.list()) as Zone[];
    const zone = zones.find((z) => z.id === zoneIdOrName || z.name === zoneIdOrName);
    return zone?.name;
  } catch {
    return undefined;
  }
}

const showCommand: CommandModule<object, ShowArgs> = {
  command: 'show',
  describe: 'Show current context (default account and zone)',

  builder: (yargs: Argv): Argv<ShowArgs> => {
    return yargs as Argv<ShowArgs>;
  },

  handler: async (_argv: ArgumentsCamelCase<ShowArgs>): Promise<void> => {
    try {
      const context = await getContext();
      const userConfig = loadConfig();
      const projectConfig = findProjectConfig();

      // Try to get names for display
      let client: Cloudflare | undefined;
      try {
        const token = await getAuthToken();
        client = new Cloudflare({ apiToken: token });
      } catch {
        // Not authenticated, can't fetch names
      }

      // Enrich context with names
      if (client) {
        if (context.accountId) {
          const name = await getAccountName(context.accountId.value, client);
          if (name) {
            context.accountId.name = name;
          }
        }
        if (context.zone) {
          const name = await getZoneName(context.zone.value, client);
          if (name) {
            context.zone.name = name;
          }
        }
      }

      const output = {
        accountId: context.accountId || null,
        zone: context.zone || null,
        env: {
          CLOUDFLARE_ACCOUNT_ID: process.env.CLOUDFLARE_ACCOUNT_ID || null,
          CLOUDFLARE_ZONE_ID: process.env.CLOUDFLARE_ZONE_ID || null,
        },
        files: {
          userConfig: getConfigFile(),
          userConfigExists: !!userConfig,
          projectConfig: projectConfig?.path || null,
        },
      };
      formatOutput(output);
    } catch (error) {
      handleError(error);
    }
  },
};

export default showCommand;
