/**
 * jobs command group
 * @generated from apis/builds/schema.ts
 */
import type { CommandModule } from 'yargs';
import cancelcancel from './cancel-cancel.js';
import getbyuuid from './get-by-uuid.js';
import getversionids from './get-version-ids.js';
import latestget from './latest-get.js';
import logsget from './logs-get.js';

const command: CommandModule = {
  command: 'jobs',
  describe: 'Build job operations',

  builder: (yargs) => {
    return yargs
      .command(cancelcancel)
      .command(getbyuuid)
      .command(getversionids)
      .command(latestget)
      .command(logsget)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
