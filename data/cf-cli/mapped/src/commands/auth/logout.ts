import type { CommandModule } from 'yargs';
import { getConfigPath, hasWranglerToken, isOAuthLoggedIn, loadApiToken, logout } from '../../lib/auth.js';
import { handleError } from '../../lib/errors.js';
import { hint, info, success, theme, warning } from '../../lib/ui/index.js';

const logoutCommand: CommandModule = {
  command: 'logout',
  describe: 'Log out and remove stored credentials',

  handler: async (): Promise<void> => {
    try {
      const hasOAuthTokens = isOAuthLoggedIn();
      const hasApiToken = loadApiToken() !== null;
      const hasEnvToken = !!process.env.CLOUDFLARE_API_TOKEN;

      if (!hasOAuthTokens && !hasApiToken) {
        // Not logged in via CF CLI, but check if other auth sources exist
        if (hasEnvToken) {
          console.log(info('No CF CLI credentials found, but CLOUDFLARE_API_TOKEN environment variable is set.'));
          console.log(info('Unset it with: unset CLOUDFLARE_API_TOKEN'));
        } else if (hasWranglerToken()) {
          console.log(info('No CF CLI credentials found, but Wrangler OAuth tokens exist.'));
          console.log(info('Run `wrangler logout` to remove Wrangler credentials.'));
        } else {
          console.log(info('You are not currently logged in.'));
          console.log(hint(`Run ${theme.code('cf auth login')} to authenticate.`));
        }
        return;
      }

      console.log(info('Logging out...'));

      const revoked = await logout();

      console.log(success('Successfully logged out.'));

      // Report what was removed
      if (hasApiToken) {
        console.log(`${theme.info('Removed:')} API token from ${theme.muted(getConfigPath())}`);
      } else if (hasOAuthTokens) {
        console.log(`${theme.info('Removed:')} OAuth tokens from ${theme.muted(getConfigPath())}`);
        if (!revoked) {
          console.log(warning('Could not revoke token on server (token may already be expired).'));
        }
      }

      // Warn about remaining auth sources that will still work
      if (hasEnvToken) {
        console.log('');
        console.log(warning('CLOUDFLARE_API_TOKEN environment variable is still set.'));
        console.log(info('You will remain authenticated via the env var. Unset it with: unset CLOUDFLARE_API_TOKEN'));
      } else if (hasWranglerToken()) {
        console.log('');
        console.log(warning('Wrangler OAuth tokens still exist and will be used as a fallback.'));
        console.log(info('Run `wrangler logout` to fully log out, or `cf auth login` to use CF CLI credentials.'));
      }
    } catch (error) {
      handleError(error);
    }
  },
};

export default logoutCommand;
