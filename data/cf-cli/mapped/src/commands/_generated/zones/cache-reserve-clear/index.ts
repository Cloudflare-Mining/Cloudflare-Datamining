/**
 * cache-reserve-clear command group
 * @generated from apis/zones/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import get from './get.js';

const command: CommandModule = {
  command: 'cache-reserve-clear',
  describe: 'Cache Reserve Clear operations',

  builder: (yargs) => {
    return yargs.command(create).command(get).demandCommand(1);
  },

  handler: () => {},
};

export default command;
