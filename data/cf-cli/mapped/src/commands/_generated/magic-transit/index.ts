/**
 * magic-transit command
 * @generated from apis/magic-transit/schema.ts
 */
import type { CommandModule } from 'yargs';
import advanceddnsprotection from './advanced-dns-protection/index.js';
import advancedtcpprotection from './advanced-tcp-protection/index.js';
import apps from './apps/index.js';
import cfinterconnects from './cf-interconnects/index.js';
import connectors from './connectors/index.js';
import gretunnels from './gre-tunnels/index.js';
import ipsectunnels from './ipsec-tunnels/index.js';
import pcaps from './pcaps/index.js';
import routes from './routes/index.js';
import sites from './sites/index.js';
import sitesextra from './sites-extra/index.js';

const command: CommandModule = {
  command: 'magic-transit',
  describe:
    'DDoS-protected network transit — GRE/IPsec tunnels, static routes, Magic WAN sites, connectors, and packet captures',

  builder: (yargs) => {
    return yargs
      .command(advanceddnsprotection)
      .command(advancedtcpprotection)
      .command(apps)
      .command(cfinterconnects)
      .command(connectors)
      .command(gretunnels)
      .command(ipsectunnels)
      .command(pcaps)
      .command(routes)
      .command(sites)
      .command(sitesextra)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
