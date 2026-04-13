/**
 * consumers command group
 * @generated from apis/queues/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import list from './list.js';
import update from './update.js';

const command: CommandModule = {
  command: 'consumers',
  describe: 'Workers that automatically receive and process messages from a queue',

  builder: (yargs) => {
    return yargs.command(create).command(delete_).command(list).command(update).demandCommand(1);
  },

  handler: () => {},
};

export default command;
