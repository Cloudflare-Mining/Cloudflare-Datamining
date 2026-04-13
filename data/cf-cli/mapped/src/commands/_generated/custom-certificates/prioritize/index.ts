/**
 * prioritize command group
 * @generated from apis/custom-certificates/schema.ts
 */
import type { CommandModule } from 'yargs';
import update from './update.js';

const command: CommandModule = {
  command: 'prioritize',
  describe: 'Reorder the priority of custom SSL certificates to control which one is served first',

  builder: (yargs) => {
    return yargs.command(update).demandCommand(1);
  },

  handler: () => {},
};

export default command;
