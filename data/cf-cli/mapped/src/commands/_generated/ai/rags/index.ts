/**
 * rags command group
 * @generated from apis/ai/schema.ts
 */
import type { CommandModule } from 'yargs';
import aisearchcreate from './ai-search-create.js';
import filesget from './files-get.js';
import jobsget from './jobs-get.js';
import jobslist from './jobs-list.js';
import jobslogslist from './jobs-logs-list.js';
import searchcreate from './search-create.js';
import syncedit from './sync-edit.js';

const command: CommandModule = {
  command: 'rags',
  describe: 'Rags operations',

  builder: (yargs) => {
    return yargs
      .command(aisearchcreate)
      .command(filesget)
      .command(jobsget)
      .command(jobslist)
      .command(jobslogslist)
      .command(searchcreate)
      .command(syncedit)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
