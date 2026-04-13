/**
 * profiles command group
 * @generated from apis/zero-trust/schema.ts
 */
import type { CommandModule } from 'yargs';
import customlist from './custom-list.js';
import predefinedcreate from './predefined-create.js';
import predefinedget from './predefined-get.js';
import predefinedupdate from './predefined-update.js';

const command: CommandModule = {
  command: 'profiles',
  describe: 'Profiles operations',

  builder: (yargs) => {
    return yargs
      .command(customlist)
      .command(predefinedcreate)
      .command(predefinedget)
      .command(predefinedupdate)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
