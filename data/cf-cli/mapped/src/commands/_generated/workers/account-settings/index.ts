/**
 * account-settings command group
 * @generated from apis/workers/schema.ts
 */
import type { CommandModule } from 'yargs';
import get from './get.js';
import update from './update.js';

const command: CommandModule = {
  command: 'account-settings',
  describe: 'Account-wide Worker settings such as default usage model and green compute',

  builder: (yargs) => {
    return yargs.command(get).command(update).demandCommand(1);
  },

  handler: () => {},
};

export default command;
