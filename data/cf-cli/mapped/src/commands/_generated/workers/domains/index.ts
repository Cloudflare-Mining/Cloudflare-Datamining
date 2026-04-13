/**
 * domains command group
 * @generated from apis/workers/schema.ts
 */
import type { CommandModule } from 'yargs';
import delete_ from './delete.js';
import get from './get.js';
import list from './list.js';
import update from './update.js';

const command: CommandModule = {
  command: 'domains',
  describe: 'Attach or detach custom domains that route directly to a Worker without a DNS record',

  builder: (yargs) => {
    return yargs.command(delete_).command(get).command(list).command(update).demandCommand(1);
  },

  handler: () => {},
};

export default command;
