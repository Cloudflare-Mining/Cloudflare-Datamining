/**
 * secrets-store command
 * @generated from apis/secrets-store/schema.ts
 */
import type { CommandModule } from 'yargs';
import quota from './quota/index.js';
import stores from './stores/index.js';
import storesextra from './stores-extra/index.js';

const command: CommandModule = {
  command: 'secrets-store',
  describe:
    'Centralized secret management — store API keys, tokens, and credentials for use across Workers and other products',

  builder: (yargs) => {
    return yargs.command(quota).command(stores).command(storesextra).demandCommand(1);
  },

  handler: () => {},
};

export default command;
