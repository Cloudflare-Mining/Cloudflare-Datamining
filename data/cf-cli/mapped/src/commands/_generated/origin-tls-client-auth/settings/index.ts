/**
 * settings command group
 * @generated from apis/origin-tls-client-auth/schema.ts
 */
import type { CommandModule } from 'yargs';
import get from './get.js';
import update from './update.js';

const command: CommandModule = {
  command: 'settings',
  describe: 'Zone-wide toggle to enable or disable authenticated origin pulls',

  builder: (yargs) => {
    return yargs.command(get).command(update).demandCommand(1);
  },

  handler: () => {},
};

export default command;
