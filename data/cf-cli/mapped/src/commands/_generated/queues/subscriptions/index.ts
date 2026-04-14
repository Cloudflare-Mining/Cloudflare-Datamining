/**
 * subscriptions command group
 * @generated from apis/queues/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import edit from './edit.js';
import get from './get.js';
import list from './list.js';

const command: CommandModule = {
  command: 'subscriptions',
  describe: 'Manage queue subscriptions for event-driven message routing',

  builder: (yargs) => {
    return yargs.command(create).command(delete_).command(edit).command(get).command(list).demandCommand(1);
  },

  handler: () => {},
};

export default command;
