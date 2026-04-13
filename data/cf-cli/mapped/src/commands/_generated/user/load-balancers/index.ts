/**
 * load-balancers command group
 * @generated from apis/user/schema.ts
 */
import type { CommandModule } from 'yargs';
import monitorscreate from './monitors-create.js';
import monitorsdelete from './monitors-delete.js';
import monitorsedit from './monitors-edit.js';
import monitorsget from './monitors-get.js';
import monitorslist from './monitors-list.js';
import monitorspreviewcreate from './monitors-preview-create.js';
import monitorsreferenceslist from './monitors-references-list.js';
import monitorsupdate from './monitors-update.js';
import poolscreate from './pools-create.js';
import poolsdelete from './pools-delete.js';
import poolseditpoolspool from './pools-edit-pools-pool.js';
import poolseditpoolspools from './pools-edit-pools-pools.js';
import poolsget from './pools-get.js';
import poolshealthget from './pools-health-get.js';
import poolslist from './pools-list.js';
import poolspreviewcreate from './pools-preview-create.js';
import poolsreferenceslist from './pools-references-list.js';
import poolsupdate from './pools-update.js';
import previewget from './preview-get.js';

const command: CommandModule = {
  command: 'load-balancers',
  describe: 'Load Balancers operations',

  builder: (yargs) => {
    return yargs
      .command(monitorscreate)
      .command(monitorsdelete)
      .command(monitorsedit)
      .command(monitorsget)
      .command(monitorslist)
      .command(monitorspreviewcreate)
      .command(monitorsreferenceslist)
      .command(monitorsupdate)
      .command(poolscreate)
      .command(poolsdelete)
      .command(poolseditpoolspool)
      .command(poolseditpoolspools)
      .command(poolsget)
      .command(poolshealthget)
      .command(poolslist)
      .command(poolspreviewcreate)
      .command(poolsreferenceslist)
      .command(poolsupdate)
      .command(previewget)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
