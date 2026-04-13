/**
 * builds command
 * @generated from apis/builds/schema.ts
 */
import type { CommandModule } from 'yargs';
import account from './account/index.js';
import jobs from './jobs/index.js';
import repos from './repos/index.js';
import tokens from './tokens/index.js';
import triggers from './triggers/index.js';
import workers from './workers/index.js';

const command: CommandModule = {
  command: 'builds',
  describe: 'Automated build and deployment pipeline for Workers — track builds, logs, and repo connections',

  builder: (yargs) => {
    return yargs
      .command(account)
      .command(jobs)
      .command(repos)
      .command(tokens)
      .command(triggers)
      .command(workers)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
