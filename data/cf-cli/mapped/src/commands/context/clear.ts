/**
 * cf context clear
 *
 * Clear default context values
 */
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getConfigFile } from '../../lib/config.js';
import { clearDefault, findProjectConfig, getProjectConfigPath } from '../../lib/context.js';
import { handleError } from '../../lib/errors.js';
import { info, success, theme } from '../../lib/ui/index.js';

interface ClearArgs {
  key?: string;
  all?: boolean;
  project?: boolean;
}

const clearCommand: CommandModule<object, ClearArgs> = {
  command: 'clear [key]',
  describe: 'Clear a default context value',

  builder: (yargs: Argv): Argv<ClearArgs> => {
    return yargs
      .positional('key', {
        type: 'string',
        description: 'Context key to clear (account-id or zone)',
        choices: ['account-id', 'zone'] as const,
      })
      .option('all', {
        type: 'boolean',
        description: 'Clear all context defaults',
        default: false,
      })
      .option('project', {
        type: 'boolean',
        alias: 'p',
        description: 'Clear from project .cfrc instead of user config',
        default: false,
      })
      .check((argv) => {
        if (!argv.key && !argv.all) {
          throw new Error('Please specify a key to clear, or use --all to clear everything');
        }
        return true;
      }) as Argv<ClearArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ClearArgs>): Promise<void> => {
    try {
      const scope = argv.project ? 'project' : 'user';

      // Map CLI key names to internal key names
      const keyMap: Record<string, 'accountId' | 'zone'> = {
        'account-id': 'accountId',
        zone: 'zone',
      };

      if (argv.all) {
        clearDefault('all', scope);
        const configPath = scope === 'project' ? getProjectConfigPath() : getConfigFile();

        if (scope === 'project') {
          const existing = findProjectConfig();
          if (existing) {
            console.log(success(`Deleted ${theme.muted(existing.path)}`));
          } else {
            console.log(info('No project config found to delete'));
          }
        } else {
          console.log(success(`Cleared all defaults from ${theme.muted(configPath)}`));
        }
        return;
      }

      const internalKey = keyMap[argv.key!];
      if (!internalKey) {
        console.error(theme.error(`Unknown key "${argv.key}". Use "account-id" or "zone".`));
        process.exit(1);
      }

      clearDefault(internalKey, scope);

      const configPath = scope === 'project' ? getProjectConfigPath() : getConfigFile();
      console.log(success(`Cleared ${argv.key} from ${theme.muted(configPath)}`));
    } catch (error) {
      handleError(error);
    }
  },
};

export default clearCommand;
