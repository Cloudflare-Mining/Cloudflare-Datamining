/**
 * settings command group
 * @generated from apis/waiting-rooms/schema.ts
 */
import type { CommandModule } from 'yargs';
import edit from './edit.js';
import get from './get.js';
import update from './update.js';

const command: CommandModule = {
  command: 'settings',
  describe: 'Zone-level waiting room defaults and cookie configuration',

  builder: (yargs) => {
    return yargs.command(edit).command(get).command(update).demandCommand(1);
  },

  handler: () => {},
};

export default command;
