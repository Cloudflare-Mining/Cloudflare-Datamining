/**
 * address-maps command group
 * @generated from apis/addressing/schema.ts
 */
import type { CommandModule } from 'yargs';
import accountsdelete from './accounts-delete.js';
import accountsupdate from './accounts-update.js';
import create from './create.js';
import delete_ from './delete.js';
import edit from './edit.js';
import get from './get.js';
import ipsdelete from './ips-delete.js';
import ipsupdate from './ips-update.js';
import list from './list.js';
import zonesdelete from './zones-delete.js';
import zonesupdate from './zones-update.js';

const command: CommandModule = {
  command: 'address-maps',
  describe: 'Map Cloudflare IPs to specific zones or accounts for custom Anycast addressing',

  builder: (yargs) => {
    return yargs
      .command(accountsdelete)
      .command(accountsupdate)
      .command(create)
      .command(delete_)
      .command(edit)
      .command(get)
      .command(ipsdelete)
      .command(ipsupdate)
      .command(list)
      .command(zonesdelete)
      .command(zonesupdate)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
