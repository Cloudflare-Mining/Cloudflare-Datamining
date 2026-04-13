/**
 * bgp command group
 * @generated from apis/radar/schema.ts
 */
import type { CommandModule } from 'yargs';
import hijackseventslist from './hijacks-events-list.js';
import ipstimeseries from './ips-timeseries.js';
import leakseventslist from './leaks-events-list.js';
import routesases from './routes-ases.js';
import routesmoas from './routes-moas.js';
import routespfx2as from './routes-pfx2as.js';
import routesrealtime from './routes-realtime.js';
import routesstats from './routes-stats.js';
import rpkiaspachanges from './rpki-aspa-changes.js';
import rpkiaspasnapshot from './rpki-aspa-snapshot.js';
import rpkiaspatimeseries from './rpki-aspa-timeseries.js';
import timeseries from './timeseries.js';
import topasesget from './top-ases-get.js';
import topasesprefixes from './top-ases-prefixes.js';
import topprefixes from './top-prefixes.js';

const command: CommandModule = {
  command: 'bgp',
  describe: 'BGP routing data — prefix announcements, AS-level stats, route leaks, and hijack events',

  builder: (yargs) => {
    return yargs
      .command(hijackseventslist)
      .command(ipstimeseries)
      .command(leakseventslist)
      .command(routesases)
      .command(routesmoas)
      .command(routespfx2as)
      .command(routesrealtime)
      .command(routesstats)
      .command(rpkiaspachanges)
      .command(rpkiaspasnapshot)
      .command(rpkiaspatimeseries)
      .command(timeseries)
      .command(topasesget)
      .command(topasesprefixes)
      .command(topprefixes)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
