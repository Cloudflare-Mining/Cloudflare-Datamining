/**
 * webhooks command group
 * @generated from apis/stream/schema.ts
 */
import type { CommandModule } from 'yargs';
import delete_ from './delete.js';
import get from './get.js';
import update from './update.js';

const command: CommandModule = {
  command: 'webhooks',
  describe: 'Webhook notifications for video lifecycle events (ready, error, etc.)',

  builder: (yargs) => {
    return yargs.command(delete_).command(get).command(update).demandCommand(1);
  },

  handler: () => {},
};

export default command;
