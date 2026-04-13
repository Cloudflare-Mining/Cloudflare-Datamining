/**
 * intel command
 * @generated from apis/intel/schema.ts
 */
import type { CommandModule } from 'yargs';
import asn from './asn/index.js';
import attacksurfacereport from './attack-surface-report/index.js';
import dns from './dns/index.js';
import domainhistory from './domain-history/index.js';
import domains from './domains/index.js';
import indicatorfeeds from './indicator-feeds/index.js';
import iplists from './ip-lists/index.js';
import ips from './ips/index.js';
import miscategorizations from './miscategorizations/index.js';
import sinkholes from './sinkholes/index.js';
import whois from './whois/index.js';

const command: CommandModule = {
  command: 'intel',
  describe: 'Threat intelligence lookups — IP reputation, domain info, ASN details, WHOIS, and indicator feeds',

  builder: (yargs) => {
    return yargs
      .command(asn)
      .command(attacksurfacereport)
      .command(dns)
      .command(domainhistory)
      .command(domains)
      .command(indicatorfeeds)
      .command(iplists)
      .command(ips)
      .command(miscategorizations)
      .command(sinkholes)
      .command(whois)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
