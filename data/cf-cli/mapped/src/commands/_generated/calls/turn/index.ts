/**
 * turn command group
 * @generated from apis/calls/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import get from './get.js';
import list from './list.js';
import update from './update.js';

const command: CommandModule = {
  command: 'turn',
  describe: 'TURN relay keys that help clients traverse NATs and firewalls for peer-to-peer connectivity',

  builder: (yargs) => {
    return yargs.command(create).command(delete_).command(get).command(list).command(update).demandCommand(1);
  },

  handler: () => {},
};

export default command;
