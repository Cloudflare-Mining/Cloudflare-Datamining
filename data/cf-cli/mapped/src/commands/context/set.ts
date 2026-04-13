/**
 * cf context set
 *
 * Set default context values (account-id, zone)
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../lib/auth.js';
import { getConfigFile } from '../../lib/config.js';
import { getProjectConfigPath, setDefault } from '../../lib/context.js';
import { handleError } from '../../lib/errors.js';
import { success, theme } from '../../lib/ui/index.js';

interface SetArgs {
  key: string;
  value: string;
  project?: boolean;
}

const setCommand: CommandModule<object, SetArgs> = {
  command: 'set <key> <value>',
  describe: 'Set a default context value',

  builder: (yargs: Argv): Argv<SetArgs> => {
    return yargs
      .positional('key', {
        type: 'string',
        description: 'Context key to set (account-id or zone)',
        choices: ['account-id', 'zone'] as const,
        demandOption: true,
      })
      .positional('value', {
        type: 'string',
        description: 'Value to set (account ID/name, or zone ID/domain)',
        demandOption: true,
      })
      .option('project', {
        type: 'boolean',
        alias: 'p',
        description: 'Save to project .cfrc instead of user config',
        default: false,
      }) as Argv<SetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<SetArgs>): Promise<void> => {
    try {
      // Require authentication for validation
      let token: string;
      try {
        token = await getAuthToken();
      } catch {
        console.error(theme.error('Please authenticate first with ') + theme.code('cf auth login'));
        process.exit(1);
      }

      const client = new Cloudflare({ apiToken: token });
      const scope = argv.project ? 'project' : 'user';

      // Map CLI key names to internal key names
      const keyMap: Record<string, 'accountId' | 'zone'> = {
        'account-id': 'accountId',
        zone: 'zone',
      };

      const internalKey = keyMap[argv.key];
      if (!internalKey) {
        console.error(theme.error(`Unknown key "${argv.key}". Use "account-id" or "zone".`));
        process.exit(1);
      }

      // Set the default (with validation)
      const result = await setDefault(internalKey, argv.value, scope, client);

      // Success message
      const configPath = scope === 'project' ? getProjectConfigPath() : getConfigFile();
      console.log(success(`Saved ${argv.key} "${theme.bold(result.displayName)}" to ${theme.muted(configPath)}`));
    } catch (error) {
      handleError(error);
    }
  },
};

export default setCommand;
