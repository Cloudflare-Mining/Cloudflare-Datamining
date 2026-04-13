/**
 * recipients-extra command group
 * @generated from apis/resource-sharing/schema.ts
 */
import type { CommandModule } from 'yargs';
import update from './update.js';

const command: CommandModule = {
  command: 'recipients-extra',
  describe: 'Recipients (additional) operations',

  builder: (yargs) => {
    return yargs.command(update).demandCommand(1);
  },

  handler: () => {},
};

export default command;
