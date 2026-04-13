/**
 * zone_transfers command group
 * @generated from apis/dns/schema.ts
 */
import type { CommandModule } from 'yargs';
import acls_create from './acls_create.js';
import acls_delete from './acls_delete.js';
import acls_get from './acls_get.js';
import acls_list from './acls_list.js';
import force_axfr from './force_axfr.js';
import incoming_create from './incoming_create.js';
import incoming_delete from './incoming_delete.js';
import incoming_get from './incoming_get.js';
import outgoing_create from './outgoing_create.js';
import outgoing_delete from './outgoing_delete.js';
import outgoing_disable from './outgoing_disable.js';
import outgoing_enable from './outgoing_enable.js';
import outgoing_force_notify from './outgoing_force_notify.js';
import outgoing_get from './outgoing_get.js';
import outgoing_status from './outgoing_status.js';
import peers_create from './peers_create.js';
import peers_delete from './peers_delete.js';
import peers_get from './peers_get.js';
import peers_list from './peers_list.js';
import tsigs_create from './tsigs_create.js';
import tsigs_delete from './tsigs_delete.js';
import tsigs_get from './tsigs_get.js';
import tsigs_list from './tsigs_list.js';

const command: CommandModule = {
  command: 'zone_transfers',
  describe: 'Secondary DNS and zone transfer management',

  builder: (yargs) => {
    return yargs
      .command(acls_create)
      .command(acls_delete)
      .command(acls_get)
      .command(acls_list)
      .command(force_axfr)
      .command(incoming_create)
      .command(incoming_delete)
      .command(incoming_get)
      .command(outgoing_create)
      .command(outgoing_delete)
      .command(outgoing_disable)
      .command(outgoing_enable)
      .command(outgoing_force_notify)
      .command(outgoing_get)
      .command(outgoing_status)
      .command(peers_create)
      .command(peers_delete)
      .command(peers_get)
      .command(peers_list)
      .command(tsigs_create)
      .command(tsigs_delete)
      .command(tsigs_get)
      .command(tsigs_list)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
