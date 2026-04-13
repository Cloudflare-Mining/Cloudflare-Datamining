/**
 * origins command group
 * @generated from apis/radar/schema.ts
 */
import type { CommandModule } from 'yargs';
import getorigindetails from './get-origin-details.js';
import getradarorigins from './get-radar-origins.js';
import summaryget from './summary-get.js';
import timeseriesget from './timeseries-get.js';
import timeseriesgroupsget from './timeseries-groups-get.js';

const command: CommandModule = {
  command: 'origins',
  describe: 'Origins operations',

  builder: (yargs) => {
    return yargs
      .command(getorigindetails)
      .command(getradarorigins)
      .command(summaryget)
      .command(timeseriesget)
      .command(timeseriesgroupsget)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
