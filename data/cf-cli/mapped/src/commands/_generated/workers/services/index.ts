/**
 * services command group
 * @generated from apis/workers/schema.ts
 */
import type { CommandModule } from 'yargs';
import environmentscontentget from './environments-content-get.js';
import environmentscontentupdate from './environments-content-update.js';
import environmentssettingsedit from './environments-settings-edit.js';
import environmentssettingsget from './environments-settings-get.js';

const command: CommandModule = {
  command: 'services',
  describe: 'Services operations',

  builder: (yargs) => {
    return yargs
      .command(environmentscontentget)
      .command(environmentscontentupdate)
      .command(environmentssettingsedit)
      .command(environmentssettingsget)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
