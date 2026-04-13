/**
 * buckets command group
 * @generated from apis/r2/schema.ts
 */
import type { CommandModule } from 'yargs';
import corsdelete from './cors-delete.js';
import corsget from './cors-get.js';
import corsupdate from './cors-update.js';
import create from './create.js';
import delete_ from './delete.js';
import domainscustomcreate from './domains-custom-create.js';
import domainscustomdelete from './domains-custom-delete.js';
import domainscustomget from './domains-custom-get.js';
import domainscustomlist from './domains-custom-list.js';
import domainscustomupdate from './domains-custom-update.js';
import domainsmanagedlist from './domains-managed-list.js';
import domainsmanagedupdate from './domains-managed-update.js';
import edit from './edit.js';
import eventnotificationsdelete from './event-notifications-delete.js';
import eventnotificationsget from './event-notifications-get.js';
import eventnotificationslist from './event-notifications-list.js';
import eventnotificationsupdate from './event-notifications-update.js';
import get from './get.js';
import lifecycleget from './lifecycle-get.js';
import lifecycleupdate from './lifecycle-update.js';
import list from './list.js';
import locksget from './locks-get.js';
import locksupdate from './locks-update.js';
import metricslist from './metrics-list.js';
import sippydelete from './sippy-delete.js';
import sippyget from './sippy-get.js';
import sippyupdate from './sippy-update.js';

const command: CommandModule = {
  command: 'buckets',
  describe:
    'Create and configure R2 buckets including CORS, lifecycle, custom domains, event notifications, and object locks',

  builder: (yargs) => {
    return yargs
      .command(corsdelete)
      .command(corsget)
      .command(corsupdate)
      .command(create)
      .command(delete_)
      .command(domainscustomcreate)
      .command(domainscustomdelete)
      .command(domainscustomget)
      .command(domainscustomlist)
      .command(domainscustomupdate)
      .command(domainsmanagedlist)
      .command(domainsmanagedupdate)
      .command(edit)
      .command(eventnotificationsdelete)
      .command(eventnotificationsget)
      .command(eventnotificationslist)
      .command(eventnotificationsupdate)
      .command(get)
      .command(lifecycleget)
      .command(lifecycleupdate)
      .command(list)
      .command(locksget)
      .command(locksupdate)
      .command(metricslist)
      .command(sippydelete)
      .command(sippyget)
      .command(sippyupdate)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
