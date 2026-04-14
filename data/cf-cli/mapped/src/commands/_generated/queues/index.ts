/**
 * queues command
 * @generated from apis/queues/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import edit from './edit.js';
import get from './get.js';
import list from './list.js';
import update from './update.js';
import consumers from './consumers/index.js';
import messages from './messages/index.js';
import purge from './purge/index.js';
import subscriptions from './subscriptions/index.js';

const command: CommandModule = {
  command: 'queues',
  describe: 'Reliable message queuing between Workers — produce, consume, and batch-process messages at scale',

  builder: (yargs) => {
    return yargs
      .command(create)
      .command(delete_)
      .command(edit)
      .command(get)
      .command(list)
      .command(update)
      .command(consumers)
      .command(messages)
      .command(purge)
      .command(subscriptions)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
