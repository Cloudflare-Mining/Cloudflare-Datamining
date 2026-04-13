/**
 * settings-extra command group
 * @generated from apis/hostnames/schema.ts
 */
import type { CommandModule } from 'yargs';
import get from './get.js';

const command: CommandModule = {
  command: 'settings-extra',
  describe: 'Settings (additional) operations',

  builder: (yargs) => {
    return yargs.command(get).demandCommand(1);
  },

  handler: () => {},
};

export default command;
