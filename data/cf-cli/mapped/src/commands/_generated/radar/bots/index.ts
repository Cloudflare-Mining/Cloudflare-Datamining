/**
 * bots command group
 * @generated from apis/radar/schema.ts
 */
import type { CommandModule } from 'yargs';
import get from './get.js';
import list from './list.js';
import summary from './summary.js';
import timeseries from './timeseries.js';
import timeseriesgroups from './timeseries-groups.js';
import webcrawlerssummary from './web-crawlers-summary.js';
import webcrawlerstimeseriesgroups from './web-crawlers-timeseries-groups.js';

const command: CommandModule = {
  command: 'bots',
  describe: 'Internet-wide bot traffic trends, categories, and distribution statistics',

  builder: (yargs) => {
    return yargs
      .command(get)
      .command(list)
      .command(summary)
      .command(timeseries)
      .command(timeseriesgroups)
      .command(webcrawlerssummary)
      .command(webcrawlerstimeseriesgroups)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
