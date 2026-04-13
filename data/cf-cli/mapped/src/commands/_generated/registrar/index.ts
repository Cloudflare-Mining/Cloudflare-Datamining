/**
 * registrar command
 * @generated from apis/registrar/schema.ts
 */
import type { CommandModule } from 'yargs';
import domains from './domains/index.js';
import operations from './operations/index.js';
import registrations from './registrations/index.js';

const command: CommandModule = {
  command: 'registrar',
  describe: 'Domain registration and transfer management through Cloudflare Registrar',

  builder: (yargs) => {
    return yargs.command(domains).command(operations).command(registrations).demandCommand(1);
  },

  handler: () => {},
};

export default command;
