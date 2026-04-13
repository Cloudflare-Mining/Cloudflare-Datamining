/**
 * quality command group
 * @generated from apis/radar/schema.ts
 */
import type { CommandModule } from 'yargs';
import iqisummary from './iqi-summary.js';
import iqitimeseriesgroups from './iqi-timeseries-groups.js';
import speedhistogram from './speed-histogram.js';
import speedsummary from './speed-summary.js';
import speedtopases from './speed-top-ases.js';
import speedtoplocations from './speed-top-locations.js';

const command: CommandModule = {
  command: 'quality',
  describe: 'Internet connection quality metrics — speed, latency, and jitter by geography and ASN',

  builder: (yargs) => {
    return yargs
      .command(iqisummary)
      .command(iqitimeseriesgroups)
      .command(speedhistogram)
      .command(speedsummary)
      .command(speedtopases)
      .command(speedtoplocations)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
