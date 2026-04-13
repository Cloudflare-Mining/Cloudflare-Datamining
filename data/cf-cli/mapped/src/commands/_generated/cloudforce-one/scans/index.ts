/**
 * scans command group
 * @generated from apis/cloudforce-one/schema.ts
 */
import type { CommandModule } from 'yargs';
import configcreate from './config-create.js';
import configdelete from './config-delete.js';
import configedit from './config-edit.js';
import configlist from './config-list.js';
import resultsget from './results-get.js';

const command: CommandModule = {
  command: 'scans',
  describe: 'Scan URLs, IPs, and domains for threat intelligence indicators',

  builder: (yargs) => {
    return yargs
      .command(configcreate)
      .command(configdelete)
      .command(configedit)
      .command(configlist)
      .command(resultsget)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
