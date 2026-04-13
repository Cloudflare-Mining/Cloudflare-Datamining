/**
 * config command group
 * @generated from apis/zaraz/schema.ts
 */
import type { CommandModule } from 'yargs';
import get from './get.js';
import update from './update.js';

const command: CommandModule = {
  command: 'config',
  describe: 'Full Zaraz configuration including tools, triggers, and variables for the zone',

  builder: (yargs) => {
    return yargs.command(get).command(update).demandCommand(1);
  },

  handler: () => {},
};

export default command;
