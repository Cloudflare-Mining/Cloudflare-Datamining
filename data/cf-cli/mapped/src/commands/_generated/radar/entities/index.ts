/**
 * entities command group
 * @generated from apis/radar/schema.ts
 */
import type { CommandModule } from 'yargs';
import asnsasset from './asns-as-set.js';
import asnsbotnetthreatfeed from './asns-botnet-threat-feed.js';
import asnsget from './asns-get.js';
import asnsip from './asns-ip.js';
import asnslist from './asns-list.js';
import asnsrel from './asns-rel.js';
import get from './get.js';
import locationsget from './locations-get.js';
import locationslist from './locations-list.js';

const command: CommandModule = {
  command: 'entities',
  describe: 'Look up ASNs, IPs, domains, and locations with metadata and traffic summaries',

  builder: (yargs) => {
    return yargs
      .command(asnsasset)
      .command(asnsbotnetthreatfeed)
      .command(asnsget)
      .command(asnsip)
      .command(asnslist)
      .command(asnsrel)
      .command(get)
      .command(locationsget)
      .command(locationslist)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
