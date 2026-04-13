/**
 * leaked-credentials command group
 * @generated from apis/radar/schema.ts
 */
import type { CommandModule } from 'yargs';
import summarybotclass from './summary-bot-class.js';
import summarycompromised from './summary-compromised.js';
import summaryv2 from './summary-v2.js';
import timeseriesgroupsbotclass from './timeseries-groups-bot-class.js';
import timeseriesgroupscompromised from './timeseries-groups-compromised.js';
import timeseriesgroupsv2 from './timeseries-groups-v2.js';

const command: CommandModule = {
  command: 'leaked-credentials',
  describe: 'Leaked credential detection trends and exposure statistics',

  builder: (yargs) => {
    return yargs
      .command(summarybotclass)
      .command(summarycompromised)
      .command(summaryv2)
      .command(timeseriesgroupsbotclass)
      .command(timeseriesgroupscompromised)
      .command(timeseriesgroupsv2)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
