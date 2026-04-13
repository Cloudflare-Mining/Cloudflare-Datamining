/**
 * smart-tiered-cache command group
 * @generated from apis/cache/schema.ts
 */
import type { CommandModule } from 'yargs';
import delete_ from './delete.js';
import edit from './edit.js';
import get from './get.js';

const command: CommandModule = {
  command: 'smart-tiered-cache',
  describe: 'Automatically determine the best upper-tier data centers for tiered cache topology',

  builder: (yargs) => {
    return yargs.command(delete_).command(edit).command(get).demandCommand(1);
  },

  handler: () => {},
};

export default command;
