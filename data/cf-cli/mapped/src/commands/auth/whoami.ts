import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getConfigPath, loadApiToken, loadTokens } from '../../lib/auth.js';
import { handleError } from '../../lib/errors.js';
import { formatOutput } from '../../lib/output.js';

interface WhoamiArgs {}

const whoamiCommand: CommandModule<object, WhoamiArgs> = {
  command: 'whoami',
  describe: 'Show current user and authentication status',

  builder: (yargs: Argv): Argv<WhoamiArgs> => {
    return yargs as Argv<WhoamiArgs>;
  },

  handler: async (_argv: ArgumentsCamelCase<WhoamiArgs>): Promise<void> => {
    try {
      // Check authentication source
      const envToken = process.env.CLOUDFLARE_API_TOKEN;
      const apiToken = loadApiToken();
      const oauthTokens = loadTokens();

      let authSource: string;
      if (envToken) {
        authSource = 'CLOUDFLARE_API_TOKEN environment variable';
      } else if (apiToken) {
        authSource = `API token from ${getConfigPath()}`;
      } else if (oauthTokens) {
        authSource = `OAuth token from ${getConfigPath()}`;
      } else {
        authSource = 'Wrangler OAuth token';
      }

      // Try to get token and make an API call
      let token: string;
      try {
        token = await getAuthToken();
      } catch {
        formatOutput({ authenticated: false, error: 'Not logged in' });
        return;
      }

      // Verify token by making a simple API call
      const client = new Cloudflare({ apiToken: token });
      let tokenValid = false;
      let userEmail: string | undefined;
      try {
        const user = (await client.get('/user')) as { email?: string };
        tokenValid = true;
        userEmail = user.email;
      } catch (err) {
        tokenValid = false;
        if (process.env.DEBUG) {
          console.error('Token verification error:', err);
        }
      }

      const output: Record<string, unknown> = {
        authenticated: true,
        authSource,
        tokenValid,
        ...(userEmail && { email: userEmail }),
      };

      if (oauthTokens) {
        output.scopes = oauthTokens.scopes;
        output.expiresAt = oauthTokens.expiresAt;
      }

      formatOutput(output);
    } catch (error) {
      handleError(error);
    }
  },
};

export default whoamiCommand;
