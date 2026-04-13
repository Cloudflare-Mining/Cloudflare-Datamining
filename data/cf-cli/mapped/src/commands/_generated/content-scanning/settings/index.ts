/**
 * settings command group
 * @generated from apis/content-scanning/schema.ts
 */
import type { CommandModule } from 'yargs';
import get from './get.js';

const command: CommandModule = {
  command: 'settings',
  describe: 'Content scanning expressions that define which request body fields to inspect',

  builder: (yargs) => {
    return yargs.command(get).demandCommand(1);
  },

  handler: () => {},
};

export default command;
