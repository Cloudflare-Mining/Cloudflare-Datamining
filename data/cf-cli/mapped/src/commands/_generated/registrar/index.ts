/**
 * registrar command
 * @generated from apis/registrar/schema.ts
 */
import type { CommandModule } from 'yargs';
import domains from './domains/index.js';

const command: CommandModule = {
  command: 'registrar',
  describe: 'Domain registration and transfer management through Cloudflare Registrar',

  builder: (yargs) => {
    return yargs.command(domains).demandCommand(1);
  },

  handler: () => {},
};

export default command;
