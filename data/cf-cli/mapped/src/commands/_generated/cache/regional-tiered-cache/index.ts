/**
 * regional-tiered-cache command group
 * @generated from apis/cache/schema.ts
 */
import type { CommandModule } from 'yargs';
import edit from './edit.js';
import get from './get.js';

const command: CommandModule = {
  command: 'regional-tiered-cache',
  describe: 'Restrict tiered cache topology to data centers within a specific geographic region',

  builder: (yargs) => {
    return yargs.command(edit).command(get).demandCommand(1);
  },

  handler: () => {},
};

export default command;
