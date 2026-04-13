/**
 * destinations command group
 * @generated from apis/alerting/schema.ts
 */
import type { CommandModule } from 'yargs';
import eligibleget from './eligible-get.js';
import pagerdutycreate from './pagerduty-create.js';
import pagerdutydelete from './pagerduty-delete.js';
import pagerdutyget from './pagerduty-get.js';
import pagerdutylink from './pagerduty-link.js';
import webhookscreate from './webhooks-create.js';
import webhooksdelete from './webhooks-delete.js';
import webhooksget from './webhooks-get.js';
import webhookslist from './webhooks-list.js';
import webhooksupdate from './webhooks-update.js';

const command: CommandModule = {
  command: 'destinations',
  describe: 'Delivery mechanisms for alerts — email, PagerDuty integrations, and webhook endpoints',

  builder: (yargs) => {
    return yargs
      .command(eligibleget)
      .command(pagerdutycreate)
      .command(pagerdutydelete)
      .command(pagerdutyget)
      .command(pagerdutylink)
      .command(webhookscreate)
      .command(webhooksdelete)
      .command(webhooksget)
      .command(webhookslist)
      .command(webhooksupdate)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
