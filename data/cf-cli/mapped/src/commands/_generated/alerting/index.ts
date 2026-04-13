/**
 * alerting command
 * @generated from apis/alerting/schema.ts
 */
import type { CommandModule } from 'yargs';
import availablealerts from './available-alerts/index.js';
import destinations from './destinations/index.js';
import history from './history/index.js';
import policies from './policies/index.js';
import silences from './silences/index.js';

const command: CommandModule = {
  command: 'alerting',
  describe: 'Notification policies, delivery destinations, silence windows, and alert history',

  builder: (yargs) => {
    return yargs
      .command(availablealerts)
      .command(destinations)
      .command(history)
      .command(policies)
      .command(silences)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
