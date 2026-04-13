/**
 * netflows command group
 * @generated from apis/radar/schema.ts
 */
import type { CommandModule } from 'yargs';
import summary from './summary.js';
import summaryv2 from './summary-v2.js';
import timeseries from './timeseries.js';
import timeseriesgroups from './timeseries-groups.js';
import topases from './top-ases.js';
import toplocations from './top-locations.js';

const command: CommandModule = {
  command: 'netflows',
  describe: 'Network-layer traffic flow data and volumetric trend analysis',

  builder: (yargs) => {
    return yargs
      .command(summary)
      .command(summaryv2)
      .command(timeseries)
      .command(timeseriesgroups)
      .command(topases)
      .command(toplocations)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
