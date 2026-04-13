/**
 * webhooks command group
 * @generated from apis/realtime-kit/schema.ts
 */
import type { CommandModule } from 'yargs';
import createwebhook from './create-webhook.js';
import deletewebhook from './delete-webhook.js';
import editwebhook from './edit-webhook.js';
import getwebhookbyid from './get-webhook-by-id.js';
import getwebhooks from './get-webhooks.js';
import replacewebhook from './replace-webhook.js';

const command: CommandModule = {
  command: 'webhooks',
  describe: 'Webhook endpoints for real-time event notifications (meeting started, participant joined, etc.)',

  builder: (yargs) => {
    return yargs
      .command(createwebhook)
      .command(deletewebhook)
      .command(editwebhook)
      .command(getwebhookbyid)
      .command(getwebhooks)
      .command(replacewebhook)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
