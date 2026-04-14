/**
 * messages command group
 * @generated from apis/queues/schema.ts
 */
import type { CommandModule } from 'yargs';
import ack from './ack.js';
import ackpreview from './ack-preview.js';
import preview from './preview.js';
import pull from './pull.js';
import push from './push.js';
import pushbatch from './push-batch.js';

const command: CommandModule = {
  command: 'messages',
  describe: 'Push messages to a queue and pull or acknowledge them from consumers',

  builder: (yargs) => {
    return yargs
      .command(ack)
      .command(ackpreview)
      .command(preview)
      .command(pull)
      .command(push)
      .command(pushbatch)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
