/**
 * indicator-feeds command group
 * @generated from apis/intel/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import data from './data.js';
import downloadsget from './downloads-get.js';
import get from './get.js';
import list from './list.js';
import permissionscreate from './permissions-create.js';
import permissionsdelete from './permissions-delete.js';
import permissionslist from './permissions-list.js';
import snapshotsupdate from './snapshots-update.js';
import update from './update.js';

const command: CommandModule = {
  command: 'indicator-feeds',
  describe: 'Threat indicator feeds — subscribe to and manage curated lists of malicious IPs, domains, and URLs',

  builder: (yargs) => {
    return yargs
      .command(create)
      .command(data)
      .command(downloadsget)
      .command(get)
      .command(list)
      .command(permissionscreate)
      .command(permissionsdelete)
      .command(permissionslist)
      .command(snapshotsupdate)
      .command(update)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
