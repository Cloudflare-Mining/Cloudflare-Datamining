/**
 * suppression command group
 * @generated from apis/email-routing/schema.ts
 */
import type { CommandModule } from 'yargs';
import routingcreate from './routing-create.js';
import routingdelete from './routing-delete.js';
import routingget from './routing-get.js';
import routinglist from './routing-list.js';
import sendingcreate from './sending-create.js';
import sendingdelete from './sending-delete.js';
import sendingget from './sending-get.js';
import sendinglist from './sending-list.js';
import zoneroutingcreate from './zone-routing-create.js';
import zoneroutingdelete from './zone-routing-delete.js';
import zoneroutingget from './zone-routing-get.js';
import zoneroutinglist from './zone-routing-list.js';
import zonesendingcreate from './zone-sending-create.js';
import zonesendingdelete from './zone-sending-delete.js';
import zonesendingget from './zone-sending-get.js';
import zonesendinglist from './zone-sending-list.js';

const command: CommandModule = {
  command: 'suppression',
  describe: 'Email suppression list management for routing and sending',

  builder: (yargs) => {
    return yargs
      .command(routingcreate)
      .command(routingdelete)
      .command(routingget)
      .command(routinglist)
      .command(sendingcreate)
      .command(sendingdelete)
      .command(sendingget)
      .command(sendinglist)
      .command(zoneroutingcreate)
      .command(zoneroutingdelete)
      .command(zoneroutingget)
      .command(zoneroutinglist)
      .command(zonesendingcreate)
      .command(zonesendingdelete)
      .command(zonesendingget)
      .command(zonesendinglist)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
