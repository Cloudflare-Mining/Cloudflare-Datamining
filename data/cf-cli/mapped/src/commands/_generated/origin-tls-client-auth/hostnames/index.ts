/**
 * hostnames command group
 * @generated from apis/origin-tls-client-auth/schema.ts
 */
import type { CommandModule } from 'yargs';
import get from './get.js';
import update from './update.js';

const command: CommandModule = {
  command: 'hostnames',
  describe: 'Enable or disable authenticated origin pulls on individual hostnames',

  builder: (yargs) => {
    return yargs.command(get).command(update).demandCommand(1);
  },

  handler: () => {},
};

export default command;
