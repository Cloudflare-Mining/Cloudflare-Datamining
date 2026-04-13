/**
 * ct command group
 * @generated from apis/radar/schema.ts
 */
import type { CommandModule } from 'yargs';
import authoritiesget from './authorities-get.js';
import authoritieslist from './authorities-list.js';
import logsget from './logs-get.js';
import logslist from './logs-list.js';
import summary from './summary.js';
import timeseries from './timeseries.js';
import timeseriesgroups from './timeseries-groups.js';

const command: CommandModule = {
  command: 'ct',
  describe: 'Certificate Transparency log monitoring and newly-issued certificate discovery',

  builder: (yargs) => {
    return yargs
      .command(authoritiesget)
      .command(authoritieslist)
      .command(logsget)
      .command(logslist)
      .command(summary)
      .command(timeseries)
      .command(timeseriesgroups)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
