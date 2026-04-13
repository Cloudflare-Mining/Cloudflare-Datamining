import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import {
  getConfigPath,
  getValidToken,
  isLoggedIn,
  isOAuthLoggedIn,
  loadApiToken,
  loadTokens,
  login,
  saveApiToken,
} from '../../lib/auth.js';
import { handleError } from '../../lib/errors.js';
import { hint, info, success, theme, warning } from '../../lib/ui/index.js';

interface LoginArgs {
  token?: string;
  force?: boolean;
}

const loginCommand: CommandModule<object, LoginArgs> = {
  command: 'login',
  describe: 'Authenticate with Cloudflare',

  builder: (yargs: Argv): Argv<LoginArgs> => {
    return yargs
      .option('token', {
        type: 'string',
        description: 'API token (skips OAuth flow)',
      })
      .option('force', {
        type: 'boolean',
        description: 'Force re-authentication even if already logged in',
        default: false,
      }) as Argv<LoginArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<LoginArgs>): Promise<void> => {
    try {
      // If --token is provided, save it directly
      if (argv.token) {
        await saveApiToken(argv.token);
        console.log(success('API token saved successfully!'));
        console.log(`${theme.info('Config file:')} ${theme.muted(getConfigPath())}`);
        return;
      }

      if (!argv.force) {
        // Check for existing API token — don't silently overwrite with OAuth
        if (loadApiToken()) {
          console.log(info('Already authenticated via API token.'));
          console.log(`${theme.info('Config file:')} ${theme.muted(getConfigPath())}`);
          console.log(
            hint(
              `Run ${theme.code('cf auth login --force')} to switch to OAuth (replaces API token), or ${theme.code('cf auth logout')} first.`,
            ),
          );
          return;
        }

        // Check for existing OAuth tokens
        if (isOAuthLoggedIn()) {
          // Verify they actually work by attempting a refresh if needed
          const validToken = await getValidToken();
          if (validToken) {
            const tokens = loadTokens();
            console.log(info('You are already logged in.'));
            console.log(`${theme.info('Config file:')} ${theme.muted(getConfigPath())}`);
            if (tokens) {
              console.log(`${theme.info('Token expires:')} ${new Date(tokens.expiresAt).toLocaleString()}`);
            }
            console.log(
              hint(
                `Run ${theme.code('cf auth login --force')} to re-authenticate, or ${theme.code('cf auth logout')} to log out.`,
              ),
            );
            return;
          }

          // Token refresh failed — proceed with fresh login
          console.log(warning('Existing tokens are invalid or expired. Starting fresh login...\n'));
        }
      } else if (isLoggedIn()) {
        console.log(info('Re-authenticating...\n'));
      }

      console.log(info('Starting OAuth login flow...\n'));

      const tokens = await login();

      console.log('\n' + success('Successfully authenticated!'));
      console.log(`${theme.info('Config file:')} ${theme.muted(getConfigPath())}`);
      console.log(`${theme.info('Scopes:')} ${tokens.scopes.join(', ')}`);
      console.log(`${theme.info('Token expires:')} ${new Date(tokens.expiresAt).toLocaleString()}`);
    } catch (error) {
      handleError(error);
    }
  },
};

export default loginCommand;
