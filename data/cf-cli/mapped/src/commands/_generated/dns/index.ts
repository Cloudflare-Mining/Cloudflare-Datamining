/**
 * dns command
 * @generated from apis/dns/schema.ts
 */
import type { CommandModule } from 'yargs';
import editdnsrecord from './edit-dns-record.js';
import editdnssettings from './edit-dns-settings.js';
import list from './list.js';
import acls from './acls/index.js';
import analytics from './analytics/index.js';
import dnssec from './dnssec/index.js';
import incoming from './incoming/index.js';
import outgoing from './outgoing/index.js';
import peers from './peers/index.js';
import records from './records/index.js';
import scan from './scan/index.js';
import settings from './settings/index.js';
import tsigs from './tsigs/index.js';
import usage from './usage/index.js';
import views from './views/index.js';
import zone_transfers from './zone_transfers/index.js';

const command: CommandModule = {
  command: 'dns',
  describe: 'DNS management API for zones, records, DNSSEC, analytics, and zone transfers',

  builder: (yargs) => {
    return yargs
      .command(editdnsrecord)
      .command(editdnssettings)
      .command(list)
      .command(acls)
      .command(analytics)
      .command(dnssec)
      .command(incoming)
      .command(outgoing)
      .command(peers)
      .command(records)
      .command(scan)
      .command(settings)
      .command(tsigs)
      .command(usage)
      .command(views)
      .command(zone_transfers)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
