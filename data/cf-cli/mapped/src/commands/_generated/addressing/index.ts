/**
 * addressing command
 * @generated from apis/addressing/schema.ts
 */
import type { CommandModule } from 'yargs';
import addressmaps from './address-maps/index.js';
import leases from './leases/index.js';
import loadocuments from './loa-documents/index.js';
import prefixes from './prefixes/index.js';
import prefixesextra from './prefixes-extra/index.js';
import regionalhostnames from './regional-hostnames/index.js';
import services from './services/index.js';

const command: CommandModule = {
  command: 'addressing',
  describe: 'IP address management — BYOIP prefixes, address maps, regional hostnames, and BGP advertisement control',

  builder: (yargs) => {
    return yargs
      .command(addressmaps)
      .command(leases)
      .command(loadocuments)
      .command(prefixes)
      .command(prefixesextra)
      .command(regionalhostnames)
      .command(services)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
