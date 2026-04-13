/**
 * cache-reserve command group
 * @generated from apis/cache/schema.ts
 */
import type { CommandModule } from 'yargs';
import clear from './clear.js';
import edit from './edit.js';
import get from './get.js';
import status from './status.js';

const command: CommandModule = {
  command: 'cache-reserve',
  describe: 'Persistent storage tier that keeps cached assets even after eviction from edge caches',

  builder: (yargs) => {
    return yargs.command(clear).command(edit).command(get).command(status).demandCommand(1);
  },

  handler: () => {},
};

export default command;
